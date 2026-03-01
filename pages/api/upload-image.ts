import type { NextApiRequest, NextApiResponse } from 'next';
import formidable from 'formidable';
import fs from 'fs';
import crypto from 'crypto';

// Configuration
const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ALLOWED_MIME_TYPES = ['image/jpeg', 'image/png', 'image/webp'];
const MAX_FILES_PER_USER = 10; // Per hour

// Rate limiting store
const uploadStore = new Map<string, { count: number; resetTime: number }>();

function rateLimit(identifier: string, maxRequests = MAX_FILES_PER_USER, windowMs = 3600000): boolean {
  const now = Date.now();
  const record = uploadStore.get(identifier);

  if (!record || now > record.resetTime) {
    uploadStore.set(identifier, { count: 1, resetTime: now + windowMs });
    return true;
  }

  if (record.count >= maxRequests) {
    return false;
  }

  record.count++;
  return true;
}

function validateImage(buffer: Buffer): { valid: boolean; error?: string } {
  // Check file signature (magic numbers)
  const signature = buffer.slice(0, 8).toString('hex');
  
  // JPEG: FF D8 FF
  if (signature.startsWith('ffd8ff')) {
    return { valid: true };
  }
  
  // PNG: 89 50 4E 47 0D 0A 1A 0A
  if (signature.startsWith('89504e470d0a1a0a')) {
    return { valid: true };
  }
  
  // WebP: 52 49 46 46
  if (signature.startsWith('52494646')) {
    return { valid: true };
  }
  
  return { valid: false, error: 'Invalid image format' };
}

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Rate limiting by IP
  const clientIP = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  if (!rateLimit(clientIP as string)) {
    return res.status(429).json({ 
      error: 'Too many uploads',
      message: `Maximum ${MAX_FILES_PER_USER} uploads per hour allowed`,
      retryAfter: 3600
    });
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const form = formidable({
      maxFileSize: MAX_FILE_SIZE,
      filter: function ({ mimetype }) {
        return ALLOWED_MIME_TYPES.includes(mimetype || '');
      }
    });

    const [fields, files] = await form.parse(req);
    
    if (!files.image) {
      return res.status(400).json({ error: 'No image file provided' });
    }

    const imageFile = Array.isArray(files.image) ? files.image[0] : files.image;
    
    // Check file size
    if (imageFile.size > MAX_FILE_SIZE) {
      return res.status(400).json({ 
        error: 'File too large',
        maxSize: MAX_FILE_SIZE,
        actualSize: imageFile.size
      });
    }

    // Validate image content
    const imageBuffer = fs.readFileSync(imageFile.filepath);
    const validation = validateImage(imageBuffer);
    
    if (!validation.valid) {
      fs.unlinkSync(imageFile.filepath); // Clean up
      return res.status(400).json({ 
        error: validation.error || 'Invalid image file' 
      });
    }

    // Generate secure filename
    const fileHash = crypto.createHash('sha256')
      .update(imageBuffer)
      .update(Date.now().toString())
      .digest('hex');
    
    const extension = imageFile.originalFilename?.split('.').pop() || 'jpg';
    const secureFilename = `${fileHash}.${extension}`;
    
    // For demo: return file info without actually storing
    // In production, upload to Cloudinary or your storage service
    fs.unlinkSync(imageFile.filepath); // Clean up temp file

    return res.status(200).json({
      success: true,
      filename: secureFilename,
      size: imageFile.size,
      mimetype: imageFile.mimetype,
      // In production, return the actual URL from your storage service
      url: `https://res.cloudinary.com/your-cloud/secure/${secureFilename}`,
      hash: fileHash
    });

  } catch (error) {
    console.error('Image upload error:', error);
    
    // Clean up any temp files
    try {
      const form = formidable({ maxFileSize: MAX_FILE_SIZE });
      const [, files] = await form.parse(req);
      const imageFile = Array.isArray(files.image) ? files.image[0] : files.image;
      if (imageFile?.filepath) {
        fs.unlinkSync(imageFile.filepath);
      }
    } catch (cleanupError) {
      console.error('Cleanup error:', cleanupError);
    }
    
    return res.status(500).json({ error: 'Upload failed' });
  }
}
