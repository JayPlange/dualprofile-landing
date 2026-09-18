# DualProfile — Landing Page

The marketing site for [DualProfile](https://github.com/JayPlange/DualProfile) at [vivaup.org](https://vivaup.org): explains the product, handles checkout via Lemon Squeezy, and captures email signups.

## Pages

| Route | Purpose |
|---|---|
| `/` | Main landing page |
| `/links` | Link-in-bio style page |
| `/privacy` | Privacy policy |
| `/support` | Support/contact page |
| `/welcome` | Post-signup page |
| `/waitlist-confirmed` | Waitlist confirmation page |

## API Routes

| Route | Purpose |
|---|---|
| `/api/lemon-webhook` | Lemon Squeezy webhook receiver, HMAC-SHA256 signature verified (`crypto.timingSafeEqual`) before processing |
| `/api/subscribe` | Email capture, rate-limited |
| `/api/upload-image` | Image upload, rate-limited, size- and MIME-type-restricted (5MB max, jpeg/png/webp only) |
| `/api/verify-pro` | Pro-status lookup, backed by an in-memory store the code itself flags as demo-only. Not called from this repo's own frontend or from the DualProfile extension — real entitlement checks run through Convex instead. Left in place pending confirmation it isn't used by anything external. |

## Security

Content-Security-Policy, X-Frame-Options, X-Content-Type-Options, and Permissions-Policy headers are set globally in `next.config.js`. The CSP explicitly allow-lists exactly what the site needs: Lemon Squeezy for checkout, Kit (ConvertKit) for email, Cloudinary for images, YouTube for embeds — nothing else.

## Checkout

The Lemon Squeezy checkout URL is wired directly into `pages/index.tsx`. There's currently no custom post-purchase redirect configured in Lemon Squeezy (confirmation modal and email receipt button links are both unset) — customers see Lemon Squeezy's own generic confirmation modal after purchase, not a page from this repo.

## Running Locally

```bash
npm install
npm run dev
```

## Building

```bash
npm run build
```

## Tech Stack

Next.js 14 (Pages Router), TypeScript, Lemon Squeezy, Kit (ConvertKit), Cloudinary.