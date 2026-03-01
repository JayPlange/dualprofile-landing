import type { NextApiRequest, NextApiResponse } from 'next';

// In-memory store for demo (use proper database in production)
const proUsers = new Map<string, { 
  isPro: boolean; 
  subscriptionId?: string;
  expiresAt?: number;
  lastValidated: number;
}>();

// Rate limiting
const validationCache = new Map<string, { count: number; resetTime: number }>();

function rateLimit(identifier: string, maxRequests = 30, windowMs = 60000): boolean {
  const now = Date.now();
  const record = validationCache.get(identifier);

  if (!record || now > record.resetTime) {
    validationCache.set(identifier, { count: 1, resetTime: now + windowMs });
    return true;
  }

  if (record.count >= maxRequests) {
    return false;
  }

  record.count++;
  return true;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Rate limiting by user identifier
  const userId = req.headers['x-user-id'] || req.socket.remoteAddress;
  if (!rateLimit(userId as string)) {
    return res.status(429).json({ error: 'Too many validation requests' });
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email, subscriptionId } = req.query;

  if (!email || typeof email !== 'string') {
    return res.status(400).json({ error: 'Email is required' });
  }

  try {
    const normalizedEmail = email.toLowerCase().trim();
    const userRecord = proUsers.get(normalizedEmail);
    const now = Date.now();

    // If no record, user is not Pro
    if (!userRecord) {
      return res.status(200).json({
        isPro: false,
        reason: 'no_subscription'
      });
    }

    // Check if subscription has expired
    if (userRecord.expiresAt && now > userRecord.expiresAt) {
      proUsers.delete(normalizedEmail);
      return res.status(200).json({
        isPro: false,
        reason: 'expired'
      });
    }

    // If subscription ID provided, verify it matches
    if (subscriptionId && userRecord.subscriptionId !== subscriptionId) {
      return res.status(200).json({
        isPro: false,
        reason: 'invalid_subscription'
      });
    }

    // Update last validation time (for cleanup)
    userRecord.lastValidated = now;

    // Return Pro status with minimal info
    return res.status(200).json({
      isPro: userRecord.isPro,
      // Only include non-sensitive info
      expiresAt: userRecord.expiresAt ? new Date(userRecord.expiresAt).toISOString() : null
    });

  } catch (error) {
    console.error('Pro validation error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
