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
              max-width: 700px;
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
            .quick-summary {
              background: linear-gradient(135deg, rgba(37, 211, 102, 0.1), rgba(18, 140, 126, 0.1));
              border: 1px solid rgba(37, 211, 102, 0.3);
              border-radius: 12px;
              padding: 2.5rem;
              margin: 3rem 0;
            }
            .quick-summary h2 {
              color: #25D366;
              font-size: 1.25rem;
              font-weight: 600;
              margin-bottom: 1.5rem;
            }
            .quick-summary ul li {
              padding: 0.75rem 0;
              position: relative;
              padding-left: 2rem;
              font-size: 1rem;
              line-height: 1.6;
            }
            .quick-summary ul li:before {
              content: "✓";
              position: absolute;
              left: 0;
              color: #25D366;
              font-weight: bold;
            }
            .section-title {
              font-size: 1.5rem;
              font-weight: 600;
              margin-bottom: 2rem;
              color: #ffffff;
              line-height: 1.3;
            }
            .subsection {
              margin: 2rem 0;
            }
            .subsection h3 {
              font-size: 1.125rem;
              font-weight: 600;
              margin-bottom: 1rem;
              color: #25D366;
              line-height: 1.4;
            }
            .subsection ul li {
              padding: 0.5rem 0;
              position: relative;
              padding-left: 1.5rem;
              font-size: 1rem;
              line-height: 1.6;
            }
            .subsection ul li:before {
              content: "•";
              position: absolute;
              left: 0;
              color: #9ca3af;
            }
            .do-not-collect {
              background: rgba(239, 68, 68, 0.1);
              border-left: 4px solid #ef4444;
              padding: 1.5rem 2rem;
              margin: 2rem 0;
              border-radius: 0 12px 12px 0;
            }
            .do-not-collect h3 {
              color: #ef4444;
              font-weight: 600;
              margin-bottom: 1rem;
              font-size: 1.125rem;
            }
            .do-not-collect ul li {
              padding: 0.5rem 0;
              position: relative;
              padding-left: 1.5rem;
              font-size: 1rem;
              line-height: 1.6;
            }
            .do-not-collect ul li:before {
              content: "•";
              position: absolute;
              left: 0;
              color: #ef4444;
            }
            p {
              margin-bottom: 1.5rem;
              line-height: 1.7;
              font-size: 1rem;
            }
            @media (max-width: 768px) {
              .container {
                padding: 0 1rem;
              }
              .quick-summary {
                padding: 2rem;
                margin: 2rem 0;
              }
              .text-4xl {
                font-size: 2rem;
              }
              .text-2xl {
                font-size: 1.25rem;
              }
              body {
                font-size: 15px;
              }
              .section-title {
                font-size: 1.25rem;
              }
              .quick-summary ul li,
              .subsection ul li,
              .do-not-collect ul li {
                font-size: 0.9rem;
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
            <h1 className="text-4xl font-bold mb-4">Privacy Policy — DualProfile</h1>
            <p className="text-gray-400">Effective Date: March 1, 2026</p>
          </div>

          {/* Quick Summary Box */}
          <div className="quick-summary">
            <h2>Quick Summary:</h2>
            <ul>
              <li>We do NOT access or store your messages</li>
              <li>We do NOT store raw phone numbers</li>
              <li>We do NOT sell or share your data</li>
              <li>Phone numbers are hashed locally before transmission</li>
              <li>Data is used strictly for DualProfile functionality</li>
            </ul>
          </div>

          <div className="space-y-8 text-gray-300">
            <p style={{fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '2rem'}}>
              <strong style={{color: '#25D366'}}>DualProfile does not read or modify your WhatsApp messages — ever.</strong> Our extension operates as a visual overlay that only manages profile photo assignments. We have zero access to your chat content, message history, or conversation data.
            </p>

            {/* What Data We Collect */}
            <section>
              <h2 className="section-title">What Data We Collect</h2>
              
              <div className="subsection">
                <h3>We collect:</h3>
                <ul>
                  <li>Hashed phone numbers (SHA-256, irreversible)</li>
                  <li>Profile photos users assign</li>
                  <li>Assignment timestamps (for sync logic)</li>
                  <li>Basic usage metadata required for functionality</li>
                </ul>
              </div>

              <div className="do-not-collect">
                <h3>We DO NOT collect:</h3>
                <ul>
                  <li>Message content</li>
                  <li>Chat history</li>
                  <li>WhatsApp contacts list (beyond local processing)</li>
                  <li>Raw phone numbers</li>
                  <li>Device identifiers unrelated to functionality</li>
                </ul>
              </div>
            </section>

            {/* How We Use Data */}
            <section>
              <h2 className="section-title">How We Use Data</h2>
              <p>Data is used strictly to:</p>
              <ul>
                <li>Match users for peer-to-peer profile photo display</li>
                <li>Synchronize assigned profile photos across devices</li>
                <li>Maintain system integrity and performance</li>
              </ul>
            </section>

            {/* Data Storage & Security */}
            <section>
              <h2 className="section-title">Data Storage & Security</h2>
              <ul>
                <li>Phone numbers are hashed locally before leaving your device</li>
                <li>No raw phone numbers are stored on DualProfile servers</li>
                <li>Profile photos are stored using Cloudinary</li>
                <li>Backend infrastructure is powered by Convex</li>
                <li>All data transmission occurs over encrypted HTTPS connections</li>
              </ul>
            </section>

            {/* Data Sharing */}
            <section>
              <h2 className="section-title">Data Sharing</h2>
              <p style={{fontWeight: '600', color: '#ffffff'}}>
                We do NOT sell, rent, trade, or share user data with third parties.
              </p>
              <p style={{marginTop: '1rem'}}>
                Data is processed only to enable DualProfile functionality.
              </p>
            </section>

            {/* User Control */}
            <section>
              <h2 className="section-title">User Control</h2>
              <p>Users can:</p>
              <ul>
                <li>Assign or remove profile photos at any time</li>
                <li>Permanently delete assignments</li>
                <li>Uninstall the extension to stop all syncing</li>
              </ul>
            </section>

            {/* How to Delete Your Data */}
            <section>
              <h2 className="section-title">How to Delete Your Data</h2>
              <p>You have three methods to delete your data:</p>
              
              <div className="subsection">
                <h3>1. Clear All Data in Settings Tab</h3>
                <p>Open the DualProfile extension settings and use the "Clear All Data" button to immediately delete all your assignments and photos.</p>
              </div>
              
              <div className="subsection">
                <h3>2. Unassign Contacts Individually</h3>
                <p>Select specific contacts in the extension and remove their profile photo assignments to delete only that data.</p>
              </div>
              
              <div className="subsection">
                <h3>3. Email for Full Server-Side Deletion</h3>
                <p>Email <a href="mailto:edwin.dualprofile@gmail.com" className="brand-green">edwin.dualprofile@gmail.com</a> with subject "Delete My Data" for complete server-side deletion within 7 days.</p>
              </div>
            </section>

            {/* Security */}
            <section>
              <h2 className="section-title">Security</h2>
              <ul>
                <li>All communication uses HTTPS encryption</li>
                <li>Phone numbers are SHA-256 hashed before leaving your device</li>
                <li>Profile photos are served through Cloudinary's secure infrastructure</li>
                <li>Backend runs on encrypted AWS infrastructure</li>
                <li>No raw phone numbers or message content are ever stored</li>
              </ul>
            </section>

            {/* Third-Party Services */}
            <section>
              <h2 className="section-title">Third-Party Services</h2>
              <p>DualProfile uses:</p>
              <ul>
                <li>Convex (backend infrastructure)</li>
                <li>Cloudinary (image hosting)</li>
                <li>Lemon Squeezy (payment processing, if user upgrades to Pro)</li>
              </ul>
              <p style={{marginTop: '1rem', fontStyle: 'italic'}}>
                These providers process data solely to enable service functionality.
              </p>
            </section>

            {/* Extension Scope Clarification */}
            <section>
              <h2 className="section-title">Extension Scope Clarification</h2>
              <p>
                DualProfile operates as a visual overlay for WhatsApp Web and does not modify WhatsApp's servers or core systems.
              </p>
            </section>

            {/* Data Retention */}
            <section>
              <h2 className="section-title">Data Retention</h2>
              <p>
                Data stored on our servers is retained until the user deletes their account or requests deletion via email. Uninstalling the extension stops all syncing but does not automatically delete server-side data.
              </p>
            </section>

            {/* Contact Information */}
            <section>
              <h2 className="section-title">Contact Information</h2>
              <p>
                For privacy-related questions, contact:<br />
                <a href="mailto:edwin.dualprofile@gmail.com" className="brand-green">edwin.dualprofile@gmail.com</a>
              </p>
            </section>
          </div>

          <div style={{marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid var(--border)', textAlign: 'center', color: 'var(--muted-foreground)'}}>
            <p>© 2026 DualProfile. Privacy is not optional — it's fundamental.</p>
          </div>
        </div>
``      </div>
    </>
  );
}
