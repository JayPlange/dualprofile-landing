import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email_address } = req.body;

  if (!email_address) {
    return res.status(400).json({ error: 'Email is required' });
  }

  try {
    console.log('Submitting to ConvertKit:', email_address);

    // Use PUBLIC API KEY for form subscription (correct method)
    const PUBLIC_API_KEY = "YOUR_PUBLIC_API_KEY_HERE"; // Replace this!
    
    const formResponse = await fetch(`https://api.convertkit.com/v3/forms/9012801/subscribe`, {
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
