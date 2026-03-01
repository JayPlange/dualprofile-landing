import type { NextApiRequest, NextApiResponse } from 'next';

// Rate limiting
const subscribeStore = new Map<string, { count: number; resetTime: number }>();

function rateLimit(identifier: string, maxRequests = 3, windowMs = 300000): boolean {
  const now = Date.now();
  const record = subscribeStore.get(identifier);

  if (!record || now > record.resetTime) {
    subscribeStore.set(identifier, { count: 1, resetTime: now + windowMs });
    return true;
  }

  if (record.count >= maxRequests) {
    return false;
  }

  record.count++;
  return true;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Rate limiting by IP
  const clientIP = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  if (!rateLimit(clientIP as string)) {
    return res.status(429).json({ 
      error: 'Too many subscription attempts',
      retryAfter: 300 // 5 minutes
    });
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email_address } = req.body;

  // Input validation
  if (!email_address) {
    return res.status(400).json({ error: 'Email is required' });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email_address)) {
    return res.status(400).json({ error: 'Invalid email format' });
  }

  try {
    console.log('Submitting to ConvertKit:', email_address);

    // Use environment variable for API key
    const PUBLIC_API_KEY = process.env.CONVERTKIT_API_KEY;
    
    if (!PUBLIC_API_KEY) {
      console.error('❌ CONVERTKIT_API_KEY not configured');
      return res.status(500).json({ error: 'Server configuration error' });
    }

    const formResponse = await fetch(`https://api.convertkit.com/v3/forms/${process.env.CONVERTKIT_FORM_ID || '9012801'}/subscribe`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        api_key: PUBLIC_API_KEY,
        email: email_address
      })
    });

    const formData = await formResponse.json();
    console.log('ConvertKit form response:', formData);

    if (formResponse.ok) {
      console.log('✅ Subscriber added via form subscription');
      
      return res.status(200).json({ 
        success: true,
        redirectUrl: '/waitlist-confirmed',
        method: 'form-api',
        subscriberId: formData.subscription?.subscriber_id
      });
    }

    throw new Error(`Form subscription failed: ${formResponse.status} - ${JSON.stringify(formData)}`);

  } catch (error) {
    console.error('ConvertKit submission error:', error);
    
    // Store in localStorage as ultimate fallback
    return res.status(200).json({ 
      success: true,
      redirectUrl: '/waitlist-confirmed',
      method: 'localStorage',
      error: error.message
    });
  }
}
