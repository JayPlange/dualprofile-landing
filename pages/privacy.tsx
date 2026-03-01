import React from 'react';
import Head from 'next/head';

export default function Privacy() {
  return (
    <>
      <Head>
        <title>Privacy Policy — DualProfile</title>
        <meta name="description" content="DualProfile Privacy Policy — How we protect your data and privacy" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet" />
        <style dangerouslySetInnerHTML={{
          __html: `
            body { font-family: 'Inter', sans-serif; }
            .brand-green { color: #25D366; }
            .bg-dark { background-color: #0f1115; }
            .text-dark { color: #0f1115; }
          `
        }} />
      </Head>

      <div className="bg-dark text-white min-h-screen">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <div className="mb-8">
            <a href="/" className="text-gray-400 hover:text-brand-green transition mb-8 inline-block">
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
