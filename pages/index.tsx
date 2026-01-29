import React, { useState } from 'react';
import Head from 'next/head';

export default function DualProfileLanding() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call - replace with actual ConvertKit form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setShowSuccess(true);
    setEmail('');
    setIsSubmitting(false);
  };

  return (
    <>
      <Head>
        <title>DualProfile - Multiple Identities on WhatsApp Web</title>
        <meta name="description" content="Control which profile photo different people see on WhatsApp Web. A Chrome extension for multiple identities." />
        <meta property="og:title" content="DualProfile - Multiple Identities on WhatsApp Web" />
        <meta property="og:description" content="Control which profile photo different people see on WhatsApp Web." />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
              One WhatsApp.<br />Multiple identities.
            </h1>
            <p className="text-2xl md:text-3xl text-gray-300 mb-4">
              Control which profile photo different people see on WhatsApp Web.
            </p>
            <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
              DualProfile is a Chrome extension that lets you use multiple profile photos and preview how specific contacts see you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => document.getElementById('early-access').scrollIntoView({ behavior: 'smooth' })}
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-medium transition-colors"
              >
                Join early access
              </button>
              <button
                onClick={() => document.getElementById('demo').scrollIntoView({ behavior: 'smooth' })}
                className="text-gray-400 hover:text-white transition-colors text-lg"
              >
                Watch demo →
              </button>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="py-20 px-6 border-t border-gray-900">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">The problem WhatsApp doesn't solve</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-xl text-gray-300">Everyone sees the same profile photo</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-xl text-gray-300">Your boss, clients, family, and friends get the same version of you</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-xl text-gray-300">There's no way to separate contexts</p>
              </div>
            </div>
            <p className="text-2xl text-gray-400 mt-12 text-center">This creates unnecessary friction.</p>
          </div>
        </section>

        {/* Solution Section */}
        <section className="py-20 px-6 border-t border-gray-900">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">What DualProfile does</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Upload multiple profile photos</h3>
                  <p className="text-gray-400">Add different photos for work, personal, or any context</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Assign photos to specific contacts</h3>
                  <p className="text-gray-400">Choose who sees which profile photo</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Set a default photo</h3>
                  <p className="text-gray-400">Everyone else gets your default profile photo</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Preview in real time</h3>
                  <p className="text-gray-400">See exactly how individual contacts view you</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Demo Section */}
        <section id="demo" className="py-20 px-6 border-t border-gray-900">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">See it in action</h2>
            <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden">
              <iframe
                src="https://www.loom.com/embed/142f339f576c42028e9fab9c3f8d3e8d?hideOwner=true&hideShare=true&hideTitle=true&disableLogo=true&hideEmbedTopBar=true"
                frameBorder="0"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
            <p className="text-center text-gray-400 mt-6">No editing tricks. This is live inside WhatsApp Web.</p>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 px-6 border-t border-gray-900">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">How it works</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-2">Install the extension</h3>
                <p className="text-gray-400">Add DualProfile to Chrome from the Chrome Web Store</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-2">Upload your profile photos</h3>
                <p className="text-gray-400">Add different photos for different contexts</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-2">Assign who sees what</h3>
                <p className="text-gray-400">Set photos for specific contacts and preview</p>
              </div>
            </div>
          </div>
        </section>

        {/* Trust & Transparency */}
        <section className="py-20 px-6 border-t border-gray-900">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">Current status</h2>
            <div className="bg-gray-900 rounded-lg p-8 max-w-2xl mx-auto">
              <p className="text-xl text-gray-300 mb-6">
                DualProfile is currently in early access and under review.<br />
                We're validating demand before opening it publicly.
              </p>
              <p className="text-gray-400">
                No spam. No hype. Just updates when access opens.
              </p>
            </div>
          </div>
        </section>

        {/* Early Access CTA */}
        <section id="early-access" className="py-20 px-6 border-t border-gray-900">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">Join early access</h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              If this problem resonates, join the early access list.<br />
              You'll be notified when access opens.
            </p>
            
            {showSuccess ? (
              <div className="bg-green-900/30 border border-green-600 rounded-lg p-8 max-w-md mx-auto">
                <p className="text-green-400 text-lg">You're on the list! We'll notify you when access opens.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="flex-1 px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:border-green-600 text-white"
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-green-600 hover:bg-green-700 disabled:bg-gray-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                  >
                    {isSubmitting ? 'Adding...' : 'Join early access'}
                  </button>
                </div>
                <p className="text-gray-400 text-sm mt-4">Access will open in batches.</p>
              </form>
            )}
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 px-6 border-t border-gray-900">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-2">Does this change WhatsApp servers?</h3>
                <p className="text-gray-400">No, it works locally in your browser.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Is this visible to WhatsApp?</h3>
                <p className="text-gray-400">No.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Is this mobile or desktop?</h3>
                <p className="text-gray-400">WhatsApp Web only.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-6 border-t border-gray-900">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex flex-col items-center gap-4">
              <h3 className="text-2xl font-bold">DualProfile</h3>
              <p className="text-gray-400">Privacy-first</p>
              <p className="text-gray-500 text-sm">Not affiliated with WhatsApp or Meta</p>
              <p className="text-gray-600 text-sm">v1.0</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
