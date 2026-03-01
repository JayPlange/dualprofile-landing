import React from 'react';
import Head from 'next/head';

export default function Privacy() {
  return (
    <>
      <Head>
        <title>Privacy Policy — DualProfile</title>
        <meta name="description" content="DualProfile Privacy Policy — How we protect your data and privacy" />
        <link rel="icon" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <style dangerouslySetInnerHTML={{
          __html: `
            body { 
              font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
              background-color: #0b0b0f;
              color: #ffffff;
              margin: 0;
              padding: 0;
              line-height: 1.6;
            }
            .container {
              max-width: 900px;
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
              margin-bottom: 1rem;
            }
            .mb-8 {
              margin-bottom: 2rem;
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
              margin-top: 2rem;
            }
            .space-y-2 > * + * {
              margin-top: 0.5rem;
            }
            .mt-4 {
              margin-top: 1rem;
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
            }
            .text-2xl {
              font-size: 1.5rem;
              font-weight: 600;
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
              margin-bottom: 2rem;
            }
            a {
              text-decoration: none;
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
            <h1 className="text-4xl font-bold mb-4">Privacy Policy — DualProfile</h1>
            <p className="text-gray-400">Effective date: March 1, 2026</p>
          </div>

          <div className="space-y-8 text-gray-300">
            <section>
              <p>
                DualProfile is a Chrome extension that lets WhatsApp Web users show different profile photos to different contacts.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">What we collect:</h2>
              <ul className="space-y-2">
                <li>• Phone number hash (SHA-256, one-way, never reversible)</li>
                <li>• Cloudinary photo URL of your uploaded profile photos</li>
                <li>• Assignment metadata (which photo is shown to which contact hash)</li>
              </ul>
              <p className="mt-4">
                No chat messages, contact lists, or personal information are ever accessed or stored.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Where data is stored:</h2>
              <ul className="space-y-2">
                <li>• Photos are stored on Cloudinary (encrypted at rest)</li>
                <li>• Assignment data is stored on Convex (our backend)</li>
                <li>• Your phone number is hashed client-side before leaving your device — we never see your raw phone number</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">What we never do:</h2>
              <ul className="space-y-2">
                <li>• We never read your WhatsApp messages</li>
                <li>• We never store your contacts</li>
                <li>• We never sell your data</li>
                <li>• We never share your data with third parties</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Data deletion:</h2>
              <p>
                You can delete all your data at any time from the extension Settings tab. This permanently removes all assignments and photos from our servers.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Contact:</h2>
              <p>
                <a href="mailto:edwin.dualprofile@gmail.com" className="brand-green">edwin.dualprofile@gmail.com</a>
              </p>
            </section>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>© 2026 DualProfile. Privacy is not optional — it's fundamental.</p>
          </div>
        </div>
      </div>
    </>
  );
}
