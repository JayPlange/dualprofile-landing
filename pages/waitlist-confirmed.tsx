import React, { useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

export default function WaitlistConfirmed() {
  const router = useRouter();

  useEffect(() => {
    // Add confetti animation or celebration effect
    const timer = setTimeout(() => {
      // Optional: redirect back to home after 5 seconds
      // router.push('/');
    }, 5000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <>
      <Head>
        <title>You're on the list! - DualProfile</title>
        <meta name="description" content="Welcome to the DualProfile waitlist! We'll notify you as soon as we launch." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </Head>

      <div className="confirmation-page">
        <div className="container">
          <div className="confirmation-content">
            <div className="success-icon">
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
            </div>
            
            <h1 className="confirmation-title">You're on the list! 🎉</h1>
            
            <p className="confirmation-message">
              Thanks for joining the DualProfile waitlist! We're working hard to bring you the ultimate WhatsApp identity control.
            </p>
            
            <p className="confirmation-submessage">
              We'll send you an email as soon as DualProfile is ready for launch. No spam, just the important updates.
            </p>

            <div className="confirmation-actions">
              <button 
                onClick={() => router.push('/')}
                className="btn btn-primary btn-lg"
              >
                Back to Home
              </button>
              
              <a href="#pricing" className="btn btn-outline btn-lg">
                Become a Founding Member
              </a>
            </div>

            <div className="confirmation-features">
              <h3>What you'll get:</h3>
              <ul>
                <li>Early access to DualProfile before anyone else</li>
                <li>Special launch discount exclusive to waitlist members</li>
                <li>Direct updates on our development progress</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        html, body {
          background-color: #0b0b0f;
          color: #ffffff;
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          min-height: 100vh;
        }

        *, *::before, *::after {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          line-height: 1.6;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        .confirmation-page {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
        }

        .container {
          width: 100%;
          max-width: 600px;
          margin: 0 auto;
        }

        .confirmation-content {
          text-align: center;
          background: hsla(200, 18%, 13%, 0.8);
          backdrop-filter: blur(8px);
          border: 1px solid hsla(200, 15%, 20%, 0.5);
          border-radius: 1rem;
          padding: 3rem 2rem;
        }

        .success-icon {
          color: #10b981;
          margin-bottom: 2rem;
          animation: successPulse 2s ease-in-out infinite;
        }

        @keyframes successPulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.1); opacity: 0.8; }
        }

        .confirmation-title {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
          line-height: 1.2;
        }

        .confirmation-message {
          font-size: 1.25rem;
          color: #d1d5db;
          margin-bottom: 1rem;
        }

        .confirmation-submessage {
          font-size: 1rem;
          color: #9ca3af;
          margin-bottom: 2rem;
        }

        .confirmation-actions {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        @media (min-width: 640px) {
          .confirmation-actions {
            flex-direction: row;
            justify-content: center;
          }
        }

        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          font-family: inherit;
          font-size: 1rem;
          font-weight: 600;
          padding: 0.75rem 1.5rem;
          border-radius: 0.75rem;
          border: none;
          cursor: pointer;
          transition: all 0.2s ease;
          text-decoration: none;
        }

        .btn-primary {
          background-color: #10b981;
          color: #ffffff;
        }

        .btn-primary:hover {
          background-color: #059669;
          transform: translateY(-1px);
        }

        .btn-outline {
          background-color: transparent;
          color: #ffffff;
          border: 1px solid #374151;
        }

        .btn-outline:hover {
          background-color: #374151;
          border-color: #10b981;
        }

        .btn-lg {
          font-size: 1.125rem;
          padding: 1rem 2rem;
        }

        .confirmation-features {
          text-align: left;
          background: rgba(16, 185, 129, 0.1);
          border: 1px solid rgba(16, 185, 129, 0.2);
          border-radius: 0.5rem;
          padding: 1.5rem;
          margin-top: 2rem;
        }

        .confirmation-features h3 {
          font-size: 1.125rem;
          font-weight: 600;
          margin-bottom: 1rem;
          color: #10b981;
        }

        .confirmation-features ul {
          list-style: none;
        }

        .confirmation-features li {
          padding: 0.5rem 0;
          position: relative;
          padding-left: 1.5rem;
        }

        .confirmation-features li::before {
          content: "✓";
          position: absolute;
          left: 0;
          color: #10b981;
          font-weight: bold;
        }
      `}</style>
    </>
  );
}
