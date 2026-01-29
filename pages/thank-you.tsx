import React, { useEffect, useState } from 'react';
import Head from 'next/head';

export default function ThankYou() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Initialize Lucide icons
    if (typeof window !== 'undefined' && (window as any).lucide) {
      (window as any).lucide.createIcons();
    }
  }, []);

  const landingPageUrl = 'https://dualprofile-landing.vercel.app/';
  const shareMessage = 'Finally found a solution for WhatsApp profile privacy. Different photos for different contacts. No second phone number needed. Join the waitlist: ' + landingPageUrl;

  const handleTwitterShare = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareMessage)}`;
    window.open(twitterUrl, '_blank', 'width=600,height=400');
  };

  const handleLinkedInShare = () => {
    const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(landingPageUrl)}`;
    window.open(linkedinUrl, '_blank', 'width=600,height=400');
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(landingPageUrl).then(() => {
      showToast();
    }).catch(() => {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = landingPageUrl;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      showToast();
    });
  };

  const showToast = () => {
    const toast = document.getElementById('toast');
    if (toast) {
      toast.classList.add('show');
      setTimeout(() => {
        toast.classList.remove('show');
      }, 3000);
    }
  };

  useEffect(() => {
    const handleScrollAnimation = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      
      elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScrollAnimation);
    handleScrollAnimation();
    
    return () => window.removeEventListener('scroll', handleScrollAnimation);
  }, []);

  return (
    <>
      <Head>
        <title>Email Confirmed - DualProfile Early Access</title>
        <meta name="description" content="You're officially in the DualProfile early access list. See what happens next." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <script src="https://unpkg.com/lucide@latest" async />
      </Head>

      <div className="app">
        {/* Hero Section */}
        <section className="hero">
          <div className="container">
            <div className="success-icon">
              <i data-lucide="check" size="40" color="white"></i>
            </div>
            <h1 className="hero-title">✅ Email Confirmed. You're Officially In.</h1>
            <p className="hero-subtitle">
              You're now on the DualProfile early access list.
              <br />
              What happens next? Read below.
            </p>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="timeline">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">📅 Your Early Access Timeline</h2>
              <p className="section-subtitle">We'll only email you for these three milestones. No spam.</p>
            </div>
            <div className="timeline-grid">
              <div className="timeline-item animate-on-scroll">
                <div className="timeline-marker">1</div>
                <div className="timeline-content">
                  <h3>Week 1-2: Chrome Web Store Approval</h3>
                  <p>You'll get the install link first. Be among the first to try DualProfile on WhatsApp Web.</p>
                </div>
              </div>
              <div className="timeline-item animate-on-scroll">
                <div className="timeline-marker">2</div>
                <div className="timeline-content">
                  <h3>Week 2-3: Founder Pricing Opens</h3>
                  <p>$29 lifetime for the first 500 only. Lock in your exclusive rate before public pricing.</p>
                </div>
              </div>
              <div className="timeline-item animate-on-scroll">
                <div className="timeline-marker">3</div>
                <div className="timeline-content">
                  <h3>Week 4+: P2P Sync Launch</h3>
                  <p>Real-time profile switching arrives. Your contacts will see different photos instantly.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof Section */}
        <section className="social-proof">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">🔥 You're Not Alone</h2>
              <p className="section-subtitle">For 15 years, people have been asking for this on Reddit:</p>
            </div>
            <div className="reddit-grid">
              <div className="reddit-post animate-on-scroll">
                <div className="reddit-meta">
                  <span className="reddit-subreddit">r/whatsapp</span>
                  <span>•</span>
                  <span>2015</span>
                </div>
                <div className="reddit-content">
                  <h4>"Is there a way to display different profile pictures to different people?"</h4>
                  <p>Users asking for the exact feature DualProfile provides.</p>
                  <div className="reddit-answer">Answer: "Nope"</div>
                </div>
              </div>
              <div className="reddit-post animate-on-scroll">
                <div className="reddit-meta">
                  <span className="reddit-subreddit">r/whatsapp</span>
                  <span>•</span>
                  <span>2024</span>
                </div>
                <div className="reddit-content">
                  <h4>"WhatsApp should start multiple profile photo"</h4>
                  <p>Recent demand showing this problem still exists today.</p>
                </div>
              </div>
              <div className="reddit-post animate-on-scroll">
                <div className="reddit-meta">
                  <span className="reddit-subreddit">r/whatsapp</span>
                  <span>•</span>
                  <span>2023</span>
                </div>
                <div className="reddit-content">
                  <h4>"Current solution: Get a second phone number 🤦‍♂️"</h4>
                  <p>The painful workaround people have been forced to use.</p>
                </div>
              </div>
            </div>
            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
              <strong style={{ fontSize: '1.25rem', color: 'var(--primary)' }}>DualProfile finally solves it.</strong>
            </div>
          </div>
        </section>

        {/* Share Section */}
        <section className="share">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">💬 Know Someone Else Who Needs This?</h2>
              <p className="section-subtitle">
                Every entrepreneur, freelancer, or professional mixing work + personal contacts deals with this problem.
              </p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <p style={{ marginBottom: '1rem', fontWeight: 600 }}>Share early access:</p>
              <div className="share-buttons">
                <button className="share-btn" onClick={handleTwitterShare}>
                  <i data-lucide="twitter" size="20"></i>
                  Share on X
                </button>
                <button className="share-btn" onClick={handleLinkedInShare}>
                  <i data-lucide="linkedin" size="20"></i>
                  Share on LinkedIn
                </button>
                <button className="share-btn" onClick={handleCopyLink}>
                  <i data-lucide="link" size="20"></i>
                  Copy Link
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Engagement Section */}
        <section className="engagement">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">👀 Want a Behind-the-Scenes Look?</h2>
            </div>
            <div className="engagement-card">
              <p className="section-subtitle">
                Curious about what DualProfile looks like before launch?
              </p>
              <div className="engagement-content">
Reply to your confirmation email with "DEMO" and I'll personally send you:

• Live screenshots of the extension in action
• Walkthrough video showing how it works  
• Breakdown of founder pricing vs. regular pricing

— Edwin
Founder, DualProfile
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="footer">
          <div className="container">
            <div className="footer-content">
              <div className="footer-links">
                <a href="mailto:edwin.dualprofile@gmail.com" className="footer-link">Questions? Email: edwin.dualprofile@gmail.com</a>
                <a href="https://dualprofile-landing.vercel.app/" className="footer-link">Back to Landing Page</a>
              </div>
              <p className="footer-note">© 2025 DualProfile. All rights reserved.</p>
              <p className="footer-note">No data leaves your device — all control is local.</p>
            </div>
          </div>
        </footer>

        {/* Toast Notification */}
        <div className="toast" id="toast">
          ✓ Copied to clipboard!
        </div>
      </div>

      <style jsx global>{`
        /* CSS Variables - Design System */
        :root {
          --background: hsl(200, 20%, 10%);
          --foreground: hsl(0, 0%, 98%);
          --card: hsl(200, 18%, 13%);
          --card-foreground: hsl(0, 0%, 98%);
          --primary: hsl(145, 63%, 49%);
          --primary-foreground: hsl(200, 20%, 10%);
          --secondary: hsl(200, 15%, 18%);
          --secondary-foreground: hsl(0, 0%, 98%);
          --muted: hsl(200, 15%, 18%);
          --muted-foreground: hsl(200, 10%, 60%);
          --accent: hsl(145, 63%, 49%);
          --accent-foreground: hsl(200, 20%, 10%);
          --border: hsl(200, 15%, 20%);
          --input: hsl(200, 15%, 20%);
          --ring: hsl(145, 63%, 49%);
          --radius: 0.75rem;
        }

        /* Global Reset & Background */
        html, body {
          background-color: #0b0b0f;
          color: #ffffff;
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        }

        /* Reset & Base */
        *, *::before, *::after {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          line-height: 1.6;
          color: var(--foreground);
        }

        /* Container */
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        /* Glass Card Effect */
        .glass-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: var(--radius);
          transition: all 0.3s ease;
        }

        .glass-card:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(16, 185, 129, 0.3);
          transform: translateY(-2px);
        }

        /* Buttons */
        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding: 0.75rem 1.5rem;
          border-radius: var(--radius);
          font-weight: 600;
          text-decoration: none;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 1rem;
        }

        .btn-primary {
          background: linear-gradient(135deg, var(--primary), #059669);
          color: white;
          box-shadow: 0 4px 20px rgba(16, 185, 129, 0.3);
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 30px rgba(16, 185, 129, 0.4);
        }

        .btn-secondary {
          background: var(--secondary);
          color: var(--secondary-foreground);
          border: 1px solid var(--border);
        }

        .btn-secondary:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: var(--primary);
        }

        .btn-lg {
          padding: 1rem 2rem;
          font-size: 1.125rem;
        }

        .btn-full {
          width: 100%;
        }

        /* Hero Section */
        .hero {
          padding: 6rem 0 4rem;
          text-align: center;
        }

        .hero-title {
          font-size: 3.5rem;
          font-weight: 700;
          line-height: 1.1;
          margin-bottom: 1.5rem;
          background: linear-gradient(135deg, var(--foreground), var(--primary));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-subtitle {
          font-size: 1.25rem;
          color: var(--muted-foreground);
          margin-bottom: 2rem;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .success-icon {
          width: 80px;
          height: 80px;
          margin: 0 auto 2rem;
          background: linear-gradient(135deg, var(--primary), #059669);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 8px 32px rgba(16, 185, 129, 0.3);
        }

        /* Timeline Section */
        .timeline {
          padding: 4rem 0;
        }

        .section-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .section-title {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }

        .section-subtitle {
          font-size: 1.125rem;
          color: var(--muted-foreground);
        }

        .timeline-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-top: 3rem;
        }

        .timeline-item {
          position: relative;
          padding-left: 3rem;
        }

        .timeline-item::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          bottom: -2rem;
          width: 2px;
          background: linear-gradient(180deg, var(--primary), transparent);
        }

        .timeline-item:last-child::before {
          display: none;
        }

        .timeline-marker {
          position: absolute;
          left: -0.5rem;
          top: 0;
          width: 2rem;
          height: 2rem;
          background: var(--primary);
          border: 3px solid var(--background);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          font-size: 0.875rem;
        }

        .timeline-content h3 {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
          color: var(--foreground);
        }

        .timeline-content p {
          color: var(--muted-foreground);
          line-height: 1.6;
        }

        /* Social Proof Section */
        .social-proof {
          padding: 4rem 0;
          background: linear-gradient(180deg, transparent, rgba(16, 185, 129, 0.05), transparent);
        }

        .reddit-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 1.5rem;
          margin-top: 3rem;
        }

        .reddit-post {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: var(--radius);
          padding: 1.5rem;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .reddit-post:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(16, 185, 129, 0.3);
          transform: translateY(-2px);
        }

        .reddit-post::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 4px;
          height: 100%;
          background: linear-gradient(135deg, #ff4500, #ff6b35);
        }

        .reddit-meta {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1rem;
          font-size: 0.875rem;
          color: var(--muted-foreground);
        }

        .reddit-subreddit {
          color: #ff4500;
          font-weight: 600;
        }

        .reddit-content h4 {
          font-size: 1.125rem;
          font-weight: 600;
          margin-bottom: 0.75rem;
          line-height: 1.4;
        }

        .reddit-content p {
          color: var(--muted-foreground);
          font-size: 0.875rem;
          line-height: 1.5;
        }

        .reddit-answer {
          background: rgba(255, 69, 0, 0.1);
          color: #ff6b35;
          padding: 0.5rem 0.75rem;
          border-radius: 0.5rem;
          font-size: 0.875rem;
          font-weight: 500;
          border-left: 3px solid #ff4500;
          margin-top: 0.75rem;
        }

        /* Share Section */
        .share {
          padding: 4rem 0;
        }

        .share-buttons {
          display: flex;
          gap: 1rem;
          justify-content: center;
          margin-top: 2rem;
          flex-wrap: wrap;
        }

        .share-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.5rem;
          background: var(--secondary);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          color: var(--foreground);
          text-decoration: none;
          font-weight: 500;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .share-btn:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: var(--primary);
          transform: translateY(-2px);
        }

        /* Engagement Section */
        .engagement {
          padding: 4rem 0;
          background: linear-gradient(180deg, transparent, rgba(16, 185, 129, 0.05), transparent);
        }

        .engagement-card {
          max-width: 600px;
          margin: 0 auto;
          padding: 2rem;
          text-align: center;
        }

        .engagement-content {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: var(--radius);
          padding: 2rem;
          margin-top: 2rem;
          text-align: left;
          font-family: 'Courier New', monospace;
          white-space: pre-line;
          color: var(--muted-foreground);
        }

        .signature {
          text-align: right;
          margin-top: 1rem;
          font-style: italic;
          color: var(--foreground);
        }

        /* Footer */
        .footer {
          padding: 3rem 0;
          border-top: 1px solid var(--border);
          text-align: center;
        }

        .footer-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }

        .footer-links {
          display: flex;
          gap: 2rem;
        }

        .footer-link {
          color: var(--muted-foreground);
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .footer-link:hover {
          color: var(--primary);
        }

        .footer-note {
          color: var(--muted-foreground);
          font-size: 0.875rem;
        }

        /* Toast Notification */
        .toast {
          position: fixed;
          bottom: 2rem;
          right: 2rem;
          background: var(--primary);
          color: white;
          padding: 1rem 1.5rem;
          border-radius: var(--radius);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
          transform: translateY(100px);
          opacity: 0;
          transition: all 0.3s ease;
          z-index: 1000;
        }

        .toast.show {
          transform: translateY(0);
          opacity: 1;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .container {
            padding: 0 1rem;
          }

          .hero-title {
            font-size: 2.5rem;
          }

          .section-title {
            font-size: 2rem;
          }

          .timeline-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .timeline-item {
            padding-left: 2.5rem;
          }

          .share-buttons {
            flex-direction: column;
            align-items: stretch;
          }

          .footer-links {
            flex-direction: column;
            gap: 1rem;
          }
        }

        /* Animations */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-on-scroll {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.6s ease;
        }

        .animate-on-scroll.visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </>
  );
}
