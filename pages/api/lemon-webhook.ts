import type { NextApiRequest, NextApiResponse } from 'next';
import crypto from 'crypto';

// Lemon Squeezy webhook signature verification
function verifyWebhookSignature(payload: string, signature: string, secret: string): boolean {
  const hmac = crypto.createHmac('sha256', secret);
  const digest = hmac.update(payload, 'utf8').digest('hex');
  return crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(digest));
}

// Rate limiting in-memory store (for production, use Redis)
const rateLimitStore = new Map<string, { count: number; resetTime: number }>();

function rateLimit(identifier: string, maxRequests = 5, windowMs = 60000): boolean {
  const now = Date.now();
  const record = rateLimitStore.get(identifier);

  if (!record || now > record.resetTime) {
    rateLimitStore.set(identifier, { count: 1, resetTime: now + windowMs });
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
  if (!rateLimit(clientIP as string, 10, 60000)) {
    return res.status(429).json({ error: 'Too many requests' });
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const signature = req.headers['x-signature'] as string;
    const webhookSecret = process.env.LEMON_WEBHOOK_SECRET;

    if (!webhookSecret) {
      console.error('❌ LEMON_WEBHOOK_SECRET not configured');
      return res.status(500).json({ error: 'Server configuration error' });
    }

    if (!signature) {
      console.error('❌ Missing webhook signature');
      return res.status(400).json({ error: 'Missing signature' });
    }

    // Verify webhook signature
    const payload = JSON.stringify(req.body);
    if (!verifyWebhookSignature(payload, signature, webhookSecret)) {
      console.error('❌ Invalid webhook signature');
      return res.status(401).json({ error: 'Invalid signature' });
    }

    const { event, data } = req.body;

    console.log(`🔔 Lemon Squeezy webhook: ${event}`);

    switch (event) {
      case 'subscription_created':
      case 'subscription_payment_success':
        // Handle successful payment - unlock Pro features
        const userEmail = data.attributes.user_email;
        const subscriptionId = data.attributes.identifier;
        
        console.log(`✅ Pro subscription activated: ${userEmail} (${subscriptionId})`);
        
        // Here you would:
        // 1. Update user's Pro status in your database
        // 2. Store subscription ID for future verification
        // 3. Trigger any Pro onboarding emails
        
        return res.status(200).json({ 
          success: true,
          event: 'pro_activated',
          user: userEmail,
          subscriptionId
        });

      case 'subscription_cancelled':
      case 'subscription_expired':
        // Handle subscription cancellation
        const cancelledEmail = data.attributes.user_email;
        console.log(`❌ Pro subscription cancelled: ${cancelledEmail}`);
        
        // Revoke Pro access
        return res.status(200).json({ 
          success: true,
          event: 'pro_deactivated',
          user: cancelledEmail
        });

      default:
        console.log(`ℹ️ Unhandled webhook event: ${event}`);
        return res.status(200).json({ success: true, event });
    }

  } catch (error) {
    console.error('💥 Webhook processing error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
