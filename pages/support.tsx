import React from 'react';
import Head from 'next/head';

export default function Support() {
  return (
    <>
      <Head>
        <title>Support — DualProfile</title>
        <meta name="description" content="Get help with DualProfile - installation, troubleshooting, and frequently asked questions" />
        <link rel="icon" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        <meta http-equiv="X-Content-Type-Options" content="nosniff" />
        <style dangerouslySetInnerHTML={{
          __html: `
            body { 
              font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
              background-color: #0b0b0f;
              color: #ffffff;
              margin: 0;
              padding: 0;
              line-height: 1.7;
              font-size: 16px;
            }
            .container {
              max-width: 800px;
              margin: 0 auto;
              padding: 0 2rem;
            }
            .bg-dark {
              background-color: #0b0b0f;
              min-height: 100vh;
            }
            .text-white {
              color: #ffffff;
            }
            .text-gray-400 {
              color: #9ca3af;
            }
            .text-gray-300 {
              color: #d1d5db;
            }
            .brand-green {
              color: #25D366;
            }
            .hover\\:text-brand-green:hover {
              color: #25D366;
            }
            .transition {
              transition: color 0.2s ease;
            }
            .mb-4 {
              margin-bottom: 1.5rem;
            }
            .mb-8 {
              margin-bottom: 2.5rem;
            }
            .mt-12 {
              margin-top: 3rem;
            }
            .pt-8 {
              padding-top: 2rem;
            }
            .py-16 {
              padding-top: 4rem;
              padding-bottom: 4rem;
            }
            .px-4 {
              padding-left: 1rem;
              padding-right: 1rem;
            }
            .space-y-8 > * + * {
              margin-top: 3rem;
            }
            .space-y-6 > * + * {
              margin-top: 2rem;
            }
            .space-y-4 > * + * {
              margin-top: 1.5rem;
            }
            .space-y-2 > * + * {
              margin-top: 1rem;
            }
            .mt-4 {
              margin-top: 1.5rem;
            }
            .border-t {
              border-top: 1px solid;
            }
            .border-gray-800 {
              border-color: #374151;
            }
            .text-center {
              text-align: center;
            }
            .inline-block {
              display: inline-block;
            }
            .text-4xl {
              font-size: 2.25rem;
              font-weight: 700;
              line-height: 1.2;
            }
            .text-2xl {
              font-size: 1.5rem;
              font-weight: 600;
              line-height: 1.3;
            }
            .text-xl {
              font-size: 1.25rem;
              font-weight: 600;
              line-height: 1.3;
            }
            .font-semibold {
              font-weight: 600;
            }
            .font-bold {
              font-weight: 700;
            }
            ul {
              list-style: none;
              padding: 0;
            }
            section {
              margin-bottom: 3rem;
            }
            a {
              text-decoration: none;
            }
            .section-card {
              background: linear-gradient(135deg, rgba(37, 211, 102, 0.05), rgba(18, 140, 126, 0.05));
              border: 1px solid rgba(37, 211, 102, 0.2);
              border-radius: 16px;
              padding: 2.5rem;
              margin: 2rem 0;
            }
            .section-title {
              font-size: 1.75rem;
              font-weight: 700;
              margin-bottom: 2rem;
              color: #25D366;
              line-height: 1.3;
            }
            .subsection {
              margin: 2rem 0;
            }
            .subsection h3 {
              font-size: 1.25rem;
              font-weight: 600;
              margin-bottom: 1rem;
              color: #ffffff;
              line-height: 1.4;
            }
            .subsection ul li {
              padding: 0.75rem 0;
              position: relative;
              padding-left: 2rem;
              font-size: 1rem;
              line-height: 1.6;
              color: #d1d5db;
            }
            .subsection ul li:before {
              content: "→";
              position: absolute;
              left: 0;
              color: #25D366;
              font-weight: bold;
            }
            .faq-item {
              background: rgba(255, 255, 255, 0.03);
              border: 1px solid rgba(255, 255, 255, 0.1);
              border-radius: 12px;
              padding: 1.5rem;
              margin-bottom: 1rem;
            }
            .faq-question {
              font-weight: 600;
              color: #25D366;
              margin-bottom: 0.5rem;
              font-size: 1.1rem;
            }
            .faq-answer {
              color: #d1d5db;
              line-height: 1.6;
            }
            .contact-card {
              background: linear-gradient(135deg, rgba(37, 211, 102, 0.1), rgba(18, 140, 126, 0.1));
              border: 1px solid rgba(37, 211, 102, 0.3);
              border-radius: 16px;
              padding: 2.5rem;
              margin: 3rem 0;
              text-align: center;
            }
            .contact-email {
              font-size: 1.25rem;
              color: #25D366;
              font-weight: 600;
              margin: 1rem 0;
            }
            .response-time {
              color: #9ca3af;
              font-style: italic;
              margin-top: 0.5rem;
            }
            p {
              margin-bottom: 1.5rem;
              line-height: 1.7;
              font-size: 1rem;
              color: #d1d5db;
            }
            .step-number {
              display: inline-flex;
              align-items: center;
              justify-content: center;
              width: 32px;
              height: 32px;
              background: #25D366;
              color: #000;
              border-radius: 50%;
              font-weight: 700;
              margin-right: 1rem;
              font-size: 0.9rem;
            }
            .step-item {
              display: flex;
              align-items: flex-start;
              padding: 1rem 0;
            }
            .step-content {
              flex: 1;
            }
            .step-title {
              font-weight: 600;
              color: #ffffff;
              margin-bottom: 0.5rem;
            }
            .step-description {
              color: #d1d5db;
              line-height: 1.6;
            }
            @media (max-width: 768px) {
              .container {
                padding: 0 1rem;
              }
              .section-card {
                padding: 2rem;
                margin: 1.5rem 0;
              }
              .contact-card {
                padding: 2rem;
              }
              .text-4xl {
                font-size: 2rem;
              }
              .text-2xl {
                font-size: 1.25rem;
              }
              .text-xl {
                font-size: 1.125rem;
              }
              body {
                font-size: 15px;
              }
              .section-title {
                font-size: 1.5rem;
              }
              .subsection ul li {
                font-size: 0.9rem;
              }
              .step-number {
                width: 28px;
                height: 28px;
                font-size: 0.8rem;
              }
            }
          `
        }} />
      </Head>

      <div className="bg-dark text-white">
        <div className="container" style={{paddingTop: '2rem', paddingBottom: '2rem'}}>
          <div style={{marginBottom: '2rem'}}>
            <a href="/" className="text-gray-400 hover:text-brand-green transition mb-8 inline-block" style={{marginBottom: '1rem', display: 'inline-block'}}>
              ← Back to DualProfile
            </a>
            <h1 className="text-4xl font-bold mb-4">Support</h1>
            <p className="text-gray-400">Get help with DualProfile - installation, troubleshooting, and answers to common questions.</p>
          </div>

          <div className="space-y-8">
            
            {/* Getting Started */}
            <section className="section-card">
              <h2 className="section-title">Getting Started</h2>
              
              <div className="space-y-4">
                <div className="step-item">
                  <div className="step-number">1</div>
                  <div className="step-content">
                    <div className="step-title">Install DualProfile from Chrome Web Store</div>
                    <div className="step-description">
                      Go to the <a href="https://chromewebstore.google.com/detail/dualprofile/mdlhdncmaeepcejdbpnjpjlmagmmpkpc" className="brand-green" target="_blank" rel="noopener noreferrer">Chrome Web Store</a>, search for "DualProfile" and click "Add to Chrome". The extension will install automatically.
                    </div>
                  </div>
                </div>

                <div className="step-item">
                  <div className="step-number">2</div>
                  <div className="step-content">
                    <div className="step-title">Upload Photo 1 and Photo 2</div>
                    <div className="step-description">
                      Open DualProfile from your extensions menu. Click "Upload Photo 1" for your professional image and "Upload Photo 2" for your personal image.
                    </div>
                  </div>
                </div>

                <div className="step-item">
                  <div className="step-number">3</div>
                  <div className="step-content">
                    <div className="step-title">Assign Contacts to Photos</div>
                    <div className="step-description">
                      In WhatsApp Web, click the DualProfile icon on any contact's profile. Choose which photo they should see, then click "Assign".
                    </div>
                  </div>
                </div>

                <div className="step-item">
                  <div className="step-number">4</div>
                  <div className="step-content">
                    <div className="step-title">Register Your Phone Number for P2P Sync</div>
                    <div className="step-description">
                      Open DualProfile Settings and enter your phone number with country code. This enables real-time photo syncing across devices.
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Troubleshooting */}
            <section className="section-card">
              <h2 className="section-title">Troubleshooting</h2>
              
              <div className="subsection">
                <ul>
                  <li>
                    <strong>Overlays not showing</strong> — Refresh WhatsApp Web after installing DualProfile. Sometimes the page needs to reload to show the extension overlays.
                  </li>
                  <li>
                    <strong>Badge not showing on contacts</strong> — Make sure your phone number is registered in DualProfile Settings. The badge appears only when your number is verified.
                  </li>
                  <li>
                    <strong>Photos not syncing to the other device</strong> — Both users must have DualProfile installed and phone numbers registered. Check that both devices have the extension active.
                  </li>
                  <li>
                    <strong>Notification icons not updating</strong> — Reload the extension from chrome://extensions. Find DualProfile, click the reload button, then refresh WhatsApp Web.
                  </li>
                </ul>
              </div>
            </section>

            {/* FAQ */}
            <section className="section-card">
              <h2 className="section-title">FAQ</h2>
              
              <div className="space-y-4">
                <div className="faq-item">
                  <div className="faq-question">Does it work on mobile?</div>
                  <div className="faq-answer">No — DualProfile is a browser extension for WhatsApp Web only. Mobile apps don't support extensions.</div>
                </div>

                <div className="faq-item">
                  <div className="faq-question">Which browsers are supported?</div>
                  <div className="faq-answer">Chrome, Brave, Edge (Chromium), Opera on Windows, macOS, and Linux. Any Chromium-based browser should work.</div>
                </div>

                <div className="faq-item">
                  <div className="faq-question">Is my phone number stored?</div>
                  <div className="faq-answer">No — it is hashed (SHA-256) on your device and never stored as plain text anywhere. We only store the hash for matching.</div>
                </div>

                <div className="faq-item">
                  <div className="faq-question">Can my contacts see that I'm using DualProfile?</div>
                  <div className="faq-answer">No — they only see the photo you assigned to them. There's no indication that you're using any extension.</div>
                </div>

                <div className="faq-item">
                  <div className="faq-question">What is the free tier limit?</div>
                  <div className="faq-answer">Up to 2 contacts for free. Upgrade to Pro for unlimited contacts and priority support.</div>
                </div>
              </div>
            </section>

            {/* Contact */}
            <section className="contact-card">
              <h2 className="section-title" style={{marginBottom: '1rem'}}>Contact</h2>
              <p style={{marginBottom: '1rem'}}>
                For anything not covered here, email us for direct support:
              </p>
              <div className="contact-email">
                <a href="mailto:edwin.dualprofile@gmail.com" className="brand-green">edwin.dualprofile@gmail.com</a>
              </div>
              <div className="response-time">
                Response time: within 48 hours
              </div>
            </section>
          </div>

          <div style={{marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid #374151', textAlign: 'center', color: '#9ca3af'}}>
            <p>© 2026 DualProfile. We're here to help.</p>
          </div>
        </div>
      </div>
    </>
  );
}
