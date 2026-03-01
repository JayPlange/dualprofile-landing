import React from 'react';
import Head from 'next/head';

export default function Privacy() {
  return (
    <>
      <Head>
        <title>Privacy Policy - DualProfile</title>
        <meta name="description" content="DualProfile Privacy Policy - How we protect your data and privacy" />
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
            <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-gray-400">Last updated: March 2026</p>
          </div>

          <div className="space-y-8 text-gray-300">
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Our Privacy Promise</h2>
              <p>
                DualProfile is built with privacy as our foundation. We believe you should have complete control over your WhatsApp identity without compromising your personal data.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Data Collection</h2>
              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-lg font-medium text-white mb-3">What We Don't Collect:</h3>
                <ul className="space-y-2">
                  <li>• Your WhatsApp messages or chat history</li>
                  <li>• Your contact lists or personal information</li>
                  <li>• Your profile photos (they stay on your device)</li>
                  <li>• Any WhatsApp account credentials</li>
                  <li>• Usage analytics or tracking data</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">How DualProfile Works</h2>
              <p>
                DualProfile operates entirely within your browser using local storage. When you upload profile photos, they are stored only on your device. The extension simply switches which photo WhatsApp displays based on your contact assignments.
              </p>
              <div className="bg-gray-900 p-6 rounded-lg mt-4">
                <h3 className="text-lg font-medium text-white mb-3">Local Storage Only:</h3>
                <ul className="space-y-2">
                  <li>• Profile photos: Stored locally in your browser</li>
                  <li>• Contact assignments: Saved locally on your device</li>
                  <li>• Settings: Configured locally, never transmitted</li>
                  <li>• No cloud storage, no servers, no data collection</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">P2P Sync Technology</h2>
              <p>
                Our P2P sync feature enables real-time profile switching between devices without involving our servers. This technology creates a direct connection between your devices, ensuring your profile photos and settings sync privately.
              </p>
              <div className="bg-gray-900 p-6 rounded-lg mt-4">
                <h3 className="text-lg font-medium text-white mb-3">P2P Privacy:</h3>
                <ul className="space-y-2">
                  <li>• Direct device-to-device communication</li>
                  <li>• End-to-end encryption for all sync data</li>
                  <li>• No intermediary servers or third parties</li>
                  <li>• You control which devices sync with each other</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Payment Processing</h2>
              <p>
                When you purchase DualProfile, payment processing is handled by Lemon Squeezy, our secure payment provider. We only receive confirmation that payment was completed - no payment details are stored on our systems.
              </p>
              <div className="bg-gray-900 p-6 rounded-lg mt-4">
                <h3 className="text-lg font-medium text-white mb-3">Payment Privacy:</h3>
                <ul className="space-y-2">
                  <li>• Credit card details: Handled by Lemon Squeezy only</li>
                  <li>• We receive: Payment confirmation and email address</li>
                  <li>• No financial information stored on our servers</li>
                  <li>• PCI compliant payment processing</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Third-Party Services</h2>
              <p>
                DualProfile integrates with minimal third-party services to provide essential functionality:
              </p>
              <div className="bg-gray-900 p-6 rounded-lg mt-4">
                <h3 className="text-lg font-medium text-white mb-3">Required Integrations:</h3>
                <ul className="space-y-2">
                  <li>• <strong>Lemon Squeezy:</strong> Payment processing only</li>
                  <li>• <strong>WhatsApp Web API:</strong> Profile switching functionality</li>
                  <li>• <strong>Browser Storage API:</strong> Local data persistence</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Your Rights</h2>
              <p>
                Since we don't collect or store your personal data, there's nothing for us to delete or share. However, you have complete control over your local data:
              </p>
              <div className="bg-gray-900 p-6 rounded-lg mt-4">
                <h3 className="text-lg font-medium text-white mb-3">Your Control:</h3>
                <ul className="space-y-2">
                  <li>• Delete all local data anytime in extension settings</li>
                  <li>• Export your contact assignments before deletion</li>
                  <li>• Revoke device sync permissions at any time</li>
                  <li>• Uninstall extension to remove all traces</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Security</h2>
              <p>
                We take security seriously to protect your privacy:
              </p>
              <div className="bg-gray-900 p-6 rounded-lg mt-4">
                <h3 className="text-lg font-medium text-white mb-3">Security Measures:</h3>
                <ul className="space-y-2">
                  <li>• All data encrypted at rest on your device</li>
                  <li>• P2P connections use end-to-end encryption</li>
                  <li>• Regular security audits of extension code</li>
                  <li>• No unnecessary permissions requested</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Children's Privacy</h2>
              <p>
                DualProfile is not intended for use by children under 13. We do not knowingly collect any information from children under 13.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Changes to This Policy</h2>
              <p>
                If we update this privacy policy, we will post the changes on this page and update the "Last updated" date. Any changes will be effective immediately upon posting.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy, please contact us:
              </p>
              <div className="bg-gray-900 p-6 rounded-lg mt-4">
                <ul className="space-y-2">
                  <li>• Email: <a href="mailto:edwin.dualprofile@gmail.com" className="brand-green">edwin.dualprofile@gmail.com</a></li>
                  <li>• Website: <a href="https://dualprofile-landing.vercel.app" className="brand-green">dualprofile-landing.vercel.app</a></li>
                </ul>
              </div>
            </section>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>© 2026 DualProfile. Privacy is not optional - it's fundamental.</p>
          </div>
        </div>
      </div>
    </>
  );
}
