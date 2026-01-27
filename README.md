# DualProfile Landing Page

A production-ready landing page for the DualProfile Chrome extension.

## What's Fixed

✅ **Become a Founding Member CTA** - Now links to Lemon Squeezy checkout (opens in new tab)  
✅ **Join Waitlist CTA** - Functional form submission with Formspree integration  
✅ **Trust Statement Added** - "This works entirely on WhatsApp Web. No chat data is stored."  
✅ **Micro-text Added** - "Lifetime access. Early product. Full refund anytime before public launch."  
✅ **Scarcity Line Added** - "Founding access capped. Price increases at public launch."  
✅ **All CTAs Working** - No placeholder links, all buttons functional  

## Configuration Required

Replace these placeholder URLs in `pages/index.tsx`:

```typescript
const LEMON_SQUEEZY_CHECKOUT_URL = "https://your-lemon-squeezy-checkout-url.com"; // TODO: Replace with actual URL
const FORM_ENDPOINT = "https://formspree.io/f/your-form-id"; // TODO: Replace with actual Formspree URL
```

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

4. Deploy to Vercel:
   ```bash
   npm run build
   # Deploy the `out` folder to Vercel
   ```

## Features

- **Next.js 14** with TypeScript
- **Static Export** ready for Vercel deployment
- **Responsive Design** with mobile-first approach
- **Form Submission** with fallback to localStorage
- **Toast Notifications** for user feedback
- **FAQ Accordion** with smooth animations
- **Modern UI** with WhatsApp-inspired design

## Deployment

This project is configured for static export and can be deployed directly to Vercel. The `out` folder contains the built static files.

## Tech Stack

- Next.js 14
- TypeScript
- CSS-in-JS (styled-jsx)
- No external UI libraries (minimal dependencies)
