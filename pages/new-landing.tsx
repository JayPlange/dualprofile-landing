import React from 'react';
import Head from 'next/head';

export default function NewLanding() {
  return (
    <>
      <Head>
        <title>DualProfile - Separate Your Work and Personal Life</title>
        <meta name="description" content="The only Chrome extension that lets you switch between work and personal WhatsApp accounts instantly." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet" />
        <script src="https://code.iconify.design/3/3.1.1/iconify.min.js"></script>
        <style dangerouslySetInnerHTML={{
          __html: `
            body { font-family: 'Inter', sans-serif; }
            .brand-green { color: #25D366; }
            .bg-brand-green { background-color: #25D366; }
            .bg-dark { background-color: #0f1115; }
            .text-dark { color: #0f1115; }
            .animate-float { animation: float 6s ease-in-out infinite; }
            @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-20px); } }
          `
        }} />
      </Head>

      <div className="bg-dark text-white">
        {/* Hero */}
        <section className="pt-24 pb-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-block bg-brand-green/10 border border-brand-green/20 rounded-full px-4 py-2 mb-6">
              <span className="brand-green text-sm font-semibold">🎉 Founder Pricing: First 500 Only</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Separate Your<br />
              <span className="brand-green">Work & Personal</span><br />
              WhatsApp Forever
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              The only Chrome extension that lets you switch between work and personal WhatsApp accounts instantly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wadualpic.lemonsqueezy.com/checkout/buy/b1aa498c-ba28-4e4a-a5b9-ac6ea0b6381c"
                className="bg-brand-green text-dark px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-400 transition text-center"
              >
                Get Founder Access - £22
              </a>
              <button className="border border-gray-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-800 transition">
                Watch Demo
              </button>
            </div>
          </div>
        </section>

        {/* Video Demo */}
        <section className="py-16 px-4 bg-gray-900/50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">See It In Action</h2>
            <div className="bg-gray-900 border border-gray-700 rounded-2xl p-8">
              <div className="aspect-video flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900">
                <div className="text-center">
                  <div className="w-24 h-24 bg-brand-green rounded-full flex items-center justify-center mx-auto mb-6">
                    <iconify-icon icon="solar:play-linear" width="48" height="48" className="text-dark ml-1"></iconify-icon>
                  </div>
                  <h3 className="text-2xl font-semibold mb-2">Demo Video</h3>
                  <p className="text-gray-400">📹 Add your video link here</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 border-t border-gray-800 py-12 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <p className="text-gray-400 mb-4">© 2025 DualProfile. All rights reserved.</p>
            <a href="mailto:edwin.dualprofile@gmail.com" className="text-gray-400 hover:text-brand-green transition">
              edwin.dualprofile@gmail.com
            </a>
          </div>
        </footer>
      </div>
    </>
  );
}
