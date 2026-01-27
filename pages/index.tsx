import React, { useState, useEffect } from 'react';
import Head from 'next/head';

export default function Home() {
  const [email, setEmail] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState({ show: false, title: '', message: '' });
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const showToast = (title: string, message: string) => {
    setToast({ show: true, title, message });
    setTimeout(() => setToast({ show: false, title: '', message: '' }), 4000);
  };

    const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          el.classList.add('animate-fade-in-up');
        }
      });
    };

    // Detect ConvertKit form success
    const observer = new MutationObserver(() => {
      if (document.querySelector('.ck-form-success')) {
        setEmail('');
        setIsModalOpen(false);
        showToast("You're on the list! 🎉", "We'll notify you as soon as DualProfile is ready.");
      }
    });

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const faqs = [
    {
      question: "Does it work in group chats?",
      answer: "Not yet. DualProfile currently works only in 1-on-1 chats. Group chat support is planned for future updates."
    },
    {
      question: "Do others need the extension?",
      answer: "For Preview Mode, no. For real P2P sync when it launches, yes - both contacts will need DualProfile to see different profiles."
    },
    {
      question: "Is P2P sync live?",
      answer: "Not yet. Preview Mode is available now so you can see how others would see your profile. Real P2P sync is coming soon."
    },
    {
      question: "How does Preview Mode work?",
      answer: "Preview Mode lets you simulate how different contacts would see your profile. It's a local simulation that shows you exactly what each contact would see when P2P sync goes live."
    },
    {
      question: "What's the difference between Free and Founding Member?",
      answer: "Free users can upload 2 photos and assign up to 6 contacts. Founding Members get unlimited contact assignments, real P2P sync when it launches, and lifetime access for a one-time $29 payment."
    },
    {
      question: "Is my data secure?",
      answer: "Absolutely. All photos and data are stored locally on your device. Nothing is uploaded to our servers or shared with third parties."
    }
  ];

  return (
    <>
      <Head>
        <title>DualProfile - One WhatsApp. Multiple Identities.</title>
        <meta name="description" content="Finally show different profile pictures to different contacts. Control your identity on WhatsApp Web like never before." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
      </Head>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      <script async data-uid="45b1efe5a4" src="https://dualprofile.kit.com/45b1efe5a4/index.js"></script>

      <div className="app">
        {/* Navbar */}
        <nav className="navbar">
          <div className="navbar-container">
            <div className="logo">
              <img src="/dualprofile-logo.png" alt="DualProfile Logo" width="32" height="32" />
              <span>DualProfile</span>
            </div>
            <div className="nav-links">
              <a href="#features">Features</a>
              <a href="#demo">Demo</a>
              <a href="#pricing">Pricing</a>
              <a href="#faq">FAQ</a>
            </div>
            <a href="#pricing" className="btn btn-primary">
              Become a Founding Member
            </a>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="hero">
          <div className="hero-content">
            <h1 className="hero-title">
              One WhatsApp.<br />Multiple Identities.
            </h1>
            <p className="hero-subtitle">
              Decide Who Sees What.
            </p>
            <div className="social-proof">
              <div className="social-proof-text">
                <span className="proof-number">1,247</span>
                people on the waitlist
              </div>
              <div className="proof-badge">
                ⭐ Trusted by early adopters
              </div>
            </div>
            <div className="hero-buttons">
              <button 
                className="btn btn-outline btn-lg btn-primary"
                onClick={() => setIsModalOpen(true)}
              >
                Get Started Free
              </button>
              <a href="#pricing" className="btn btn-secondary btn-lg">
                Become a Founder – $29
              </a>
            </div>
            <div className="hero-status">
              <span className="status-badge">Preview Mode Available Now</span>
              <span className="status-text">Real P2P sync coming soon</span>
            </div>
          </div>
        </section>

        {/* Demo Section - Moved Higher */}
        <section id="demo" className="demo">
          <div className="demo-container">
            <div className="demo-video-wrapper">
              <div style={{position: 'relative', paddingBottom: '56.25%', height: '0'}}>
                <iframe 
                  src="https://www.loom.com/embed/142f339f576c42028e9fab9c3f8d3e8d?hideOwner=true&hideShare=true&hideTitle=true&disableLogo=true&hideEmbedTopBar=true&autoplay=true"
                  frameBorder="0"
                  allowFullScreen
                  style={{
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    width: '100%',
                    height: '100%'
                  }}
                ></iframe>
              </div>
            </div>
            <div className="trust-statement">
              🔒 This works entirely on WhatsApp Web. No chat data is stored.
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="how-it-works">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">How It Works</h2>
              <p className="section-subtitle">
                Simple, powerful control over your WhatsApp identity in 1-on-1 chats.
              </p>
            </div>
            <div className="steps-grid">
              <div className="step-card glass-card animate-on-scroll">
                <div className="step-number">1</div>
                <h3 className="step-title">Upload 2 Photos</h3>
                <p className="step-description">
                  Add your professional photo and your personal photo. Both stay stored locally on your device.
                </p>
              </div>
              <div className="step-card glass-card animate-on-scroll">
                <div className="step-number">2</div>
                <h3 className="step-title">Assign Contacts</h3>
                <p className="step-description">
                  Choose which contacts see your work photo and which see your personal photo.
                </p>
              </div>
              <div className="step-card glass-card animate-on-scroll">
                <div className="step-number">3</div>
                <h3 className="step-title">Control Your Appearance</h3>
                <p className="step-description">
                  Preview how others see you. Real P2P sync coming soon for live profile switching.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Current Status Section */}
        <section className="current-status">
          <div className="container">
            <div className="status-card glass-card">
              <h2 className="status-title">Current Status</h2>
              <div className="status-grid">
                <div className="status-item">
                  <div className="status-icon available">✓</div>
                  <div className="status-text">
                    <strong>Preview Mode</strong>
                    <p>See how others would see your profile</p>
                  </div>
                </div>
                <div className="status-item">
                  <div className="status-icon coming-soon">→</div>
                  <div className="status-text">
                    <strong>P2P Sync</strong>
                    <p>Real-time profile switching coming soon</p>
                  </div>
                </div>
                <div className="status-item">
                  <div className="status-icon not-available">—</div>
                  <div className="status-text">
                    <strong>Group Chats</strong>
                    <p>Not supported yet</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="features">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Everything You Need</h2>
              <p className="section-subtitle">
                Simple, powerful features designed for privacy-conscious users who want control over their WhatsApp identity.
              </p>
            </div>
            <div className="features-grid">
              <div className="feature-card glass-card animate-on-scroll">
                <div className="feature-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    <circle cx="8.5" cy="8.5" r="1.5"></circle>
                    <polyline points="21 15 16 10 5 21"></polyline>
                  </svg>
                </div>
                <h3 className="feature-title">Dual Uploads</h3>
                <p className="feature-description">
                  Upload different profile photos for different contacts. Your work colleagues see one image, your friends see another.
                </p>
              </div>
              <div className="feature-card glass-card animate-on-scroll">
                <div className="feature-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                </div>
                <h3 className="feature-title">Live Test Preview</h3>
                <p className="feature-description">
                  See exactly what each contact sees before you switch. No more guessing—preview your identity changes in real-time.
                </p>
              </div>
              <div className="feature-card glass-card animate-on-scroll">
                <div className="feature-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <h3 className="feature-title">Privacy First</h3>
                <p className="feature-description">
                  All logic runs locally in your browser. Your images and data never leave your device. Zero cloud storage.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="pricing">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Choose Your Plan</h2>
              <p className="section-subtitle">
                Start free, upgrade when you need unlimited control.
              </p>
            </div>

            {/* Feature Comparison Table */}
            <div className="comparison-table glass-card">
              <div className="comparison-header">
                <div className="feature-column">Features</div>
                <div className="plan-column free">
                  <div className="plan-name">Free</div>
                  <div className="plan-price">$0</div>
                </div>
                <div className="plan-column founder">
                  <div className="plan-name">Founding Member</div>
                  <div className="plan-price">$29<span>/lifetime</span></div>
                </div>
                <div className="plan-column pro">
                  <div className="plan-name">Pro</div>
                  <div className="plan-price">Coming Soon</div>
                </div>
              </div>
              
              <div className="comparison-row">
                <div className="feature-name">Preview Mode</div>
                <div className="feature-value">✓</div>
                <div className="feature-value">✓</div>
                <div className="feature-value">✓</div>
              </div>
              
              <div className="comparison-row">
                <div className="feature-name">Multiple Profiles</div>
                <div className="feature-value">2</div>
                <div className="feature-value">Unlimited</div>
                <div className="feature-value">Unlimited</div>
              </div>
              
              <div className="comparison-row">
                <div className="feature-name">Real P2P Sync</div>
                <div className="feature-value">—</div>
                <div className="feature-value">✓</div>
                <div className="feature-value">✓</div>
              </div>
              
              <div className="comparison-row">
                <div className="feature-name">Priority Support</div>
                <div className="feature-value">—</div>
                <div className="feature-value">✓</div>
                <div className="feature-value">✓</div>
              </div>
              
              <div className="comparison-row">
                <div className="feature-name">Future Features</div>
                <div className="feature-value">—</div>
                <div className="feature-value">✓</div>
                <div className="feature-value">✓</div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="faq">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Frequently Asked Questions</h2>
              <p className="section-subtitle">Got questions? We've got answers.</p>
            </div>
            <div className="faq-list">
              {faqs.map((faq, index) => (
                <div key={index} className={`faq-item glass-card ${openFaq === index ? 'open' : ''}`}>
                  <button 
                    className="faq-trigger"
                    onClick={() => toggleFaq(index)}
                  >
                    <span>{faq.question}</span>
                    <svg 
                      className="faq-chevron" 
                      width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </button>
                  <div className="faq-content">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="footer">
          <div className="container">
            <p>© 2024 DualProfile. All rights reserved.</p>
          </div>
        </footer>

        {/* Waitlist Modal */}
        <div className={`modal ${isModalOpen ? 'open' : ''}`}>
          <div className="modal-overlay" onClick={() => setIsModalOpen(false)}></div>
          <div className="modal-content glass-card">
            <button className="modal-close" onClick={() => setIsModalOpen(false)}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <h2 className="modal-title">Join the Waitlist</h2>
            <p className="modal-subtitle">
              Be the first to know when DualProfile launches. No spam, just one email when we're ready.
            </p>
            <button 
              className="btn btn-primary btn-full"
              onClick={() => {
                // Use the correct public form URL
                window.open('https://dualprofile.kit.com/7a5b00e94e', '_blank');
                // Close modal and show success message
                setIsModalOpen(false);
                showToast("Opening waitlist form...", "Complete your subscription to join the waitlist.");
              }}
            >
              Join Waitlist
            </button>
            <p className="modal-privacy">
              🔒 We respect your privacy. Unsubscribe anytime.
            </p>
          </div>
        </div>

        {/* Toast Notification */}
        <div className={`toast ${toast.show ? 'show' : ''}`}>
          <span className="toast-title">{toast.title}</span>
          <span className="toast-message">{toast.message}</span>
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
        }

        /* Reset & Base */
        *, *::before, *::after {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        html {
          scroll-behavior: auto;
        }

        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          line-height: 1.6;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        /* Hide ConvertKit's success message */
        .ck-success-message {
          display: none !important;
        }

        /* Social Proof */
        .social-proof {
          margin: 2rem 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.75rem;
        }

        .social-proof-text {
          font-size: 1.125rem;
          color: #d1d5db;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .proof-number {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--primary);
        }

        .proof-badge {
          background: rgba(16, 185, 129, 0.1);
          color: #10b981;
          padding: 0.5rem 1rem;
          border-radius: 2rem;
          font-size: 0.875rem;
          font-weight: 600;
          border: 1px solid rgba(16, 185, 129, 0.2);
        }

        /* Hero Status */
        .hero-status {
          margin-top: 2rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
        }

        .status-badge {
          background: rgba(16, 185, 129, 0.2);
          color: #10b981;
          padding: 0.5rem 1rem;
          border-radius: 2rem;
          font-size: 0.875rem;
          font-weight: 600;
          border: 1px solid rgba(16, 185, 129, 0.3);
        }

        .status-text {
          color: #9ca3af;
          font-size: 0.875rem;
        }

        /* Demo Section */
        .demo {
          padding: 4rem 0;
        }

        .demo-container {
          max-width: 800px;
          margin: 0 auto;
          text-align: center;
        }

        .demo-video-wrapper {
          margin-bottom: 2rem;
          border-radius: var(--radius);
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }

        .trust-statement {
          color: #9ca3af;
          font-size: 0.875rem;
          margin-top: 1rem;
        }

        /* How It Works */
        .how-it-works {
          padding: 6rem 0;
        }

        .steps-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-top: 3rem;
        }

        .step-card {
          text-align: center;
          padding: 2rem;
          position: relative;
        }

        .step-number {
          width: 3rem;
          height: 3rem;
          background: var(--primary);
          color: var(--primary-foreground);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          font-weight: 700;
          margin: 0 auto 1.5rem;
        }

        .step-title {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .step-description {
          color: #d1d5db;
          line-height: 1.6;
        }

        /* Current Status */
        .current-status {
          padding: 4rem 0;
        }

        .status-card {
          padding: 2rem;
          text-align: center;
        }

        .status-title {
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 2rem;
        }

        .status-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }

        .status-item {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          text-align: left;
        }

        .status-icon {
          width: 2rem;
          height: 2rem;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          flex-shrink: 0;
        }

        .status-icon.available {
          background: rgba(16, 185, 129, 0.2);
          color: #10b981;
        }

        .status-icon.coming-soon {
          background: rgba(59, 130, 246, 0.2);
          color: #3b82f6;
        }

        .status-icon.not-available {
          background: rgba(107, 114, 128, 0.2);
          color: #6b7280;
        }

        .status-text strong {
          display: block;
          margin-bottom: 0.25rem;
        }

        .status-text p {
          color: #9ca3af;
          font-size: 0.875rem;
          margin: 0;
        }

        /* Feature Comparison Table */
        .comparison-table {
          margin: 3rem 0;
          overflow-x: auto;
        }

        .comparison-header {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 1rem;
          padding: 1.5rem;
          border-bottom: 2px solid var(--border);
        }

        .feature-column {
          font-weight: 700;
          color: var(--foreground);
        }

        .plan-column {
          text-align: center;
        }

        .plan-name {
          font-weight: 600;
          color: var(--foreground);
          margin-bottom: 0.5rem;
        }

        .plan-price {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--primary);
        }

        .plan-price span {
          font-size: 0.875rem;
          font-weight: 400;
          color: #9ca3af;
        }

        .comparison-row {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 1rem;
          padding: 1rem 1.5rem;
          border-bottom: 1px solid rgba(107, 114, 128, 0.2);
        }

        .comparison-row:last-child {
          border-bottom: none;
        }

        .feature-name {
          color: var(--foreground);
          font-weight: 500;
        }

        .feature-value {
          text-align: center;
          font-weight: 600;
        }

        .feature-value:nth-child(2) {
          color: #9ca3af;
        }

        .feature-value:nth-child(3),
        .feature-value:nth-child(4) {
          color: var(--primary);
        }

        /* Pricing Grid */
        .pricing-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-top: 3rem;
        }

        .pricing-card {
          padding: 2rem;
          text-align: center;
          position: relative;
        }

        .pricing-card.featured {
          transform: scale(1.05);
        }

        .pricing-header {
          margin-bottom: 2rem;
        }

        .pricing-title {
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        .pricing-subtitle {
          color: #9ca3af;
          margin-bottom: 1.5rem;
        }

        .pricing-amount {
          margin-bottom: 1rem;
        }

        .price {
          font-size: 3rem;
          font-weight: 700;
          color: var(--primary);
        }

        .currency {
          font-size: 1rem;
          color: #9ca3af;
        }

        .pricing-alternative {
          color: #9ca3af;
          font-size: 0.875rem;
        }

        .pricing-benefits {
          text-align: left;
          margin-bottom: 2rem;
        }

        .pricing-benefits ul {
          list-style: none;
        }

        .pricing-benefits li {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.75rem 0;
          border-bottom: 1px solid rgba(107, 114, 128, 0.2);
        }

        .pricing-benefits li:last-child {
          border-bottom: none;
        }

        .check-icon {
          color: var(--primary);
          flex-shrink: 0;
        }

        /* FAQ */
        .faq {
          padding: 6rem 0;
        }

        .faq-list {
          margin-top: 3rem;
        }

        .faq-item {
          margin-bottom: 1rem;
          overflow: hidden;
        }

        .faq-trigger {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.5rem;
          background: none;
          border: none;
          text-align: left;
          cursor: pointer;
          color: inherit;
        }

        .faq-trigger span {
          font-weight: 600;
        }

        .faq-chevron {
          transition: transform 0.3s ease;
        }

        .faq-item.open .faq-chevron {
          transform: rotate(180deg);
        }

        .faq-content {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease;
        }

        .faq-item.open .faq-content {
          max-height: 500px;
        }

        .faq-content p {
          padding: 0 1.5rem 1.5rem;
          color: #d1d5db;
          line-height: 1.6;
        }

        /* Footer */
        .footer {
          padding: 3rem 0;
          text-align: center;
          border-top: 1px solid rgba(107, 114, 128, 0.2);
        }

        .footer p {
          color: #9ca3af;
        }
        .container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1rem;
        }

        /* Typography */
        h1, h2, h3, h4, h5, h6 {
          line-height: 1.2;
          font-weight: 700;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        /* Utility Classes */
        .text-primary {
          color: var(--primary);
        }

        .glass-card {
          background: hsla(200, 18%, 13%, 0.8);
          backdrop-filter: blur(8px);
          border: 1px solid hsla(200, 15%, 20%, 0.5);
          border-radius: var(--radius);
        }

        .glow-primary {
          box-shadow: 0 0 30px hsla(145, 63%, 49%, 0.2);
        }

        /* Animations */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }

        .animate-fade-in {
          animation: fadeIn 0.5s ease-out forwards;
        }

        .animate-on-scroll {
          opacity: 0;
        }

        /* Buttons */
        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          font-family: inherit;
          font-size: 1rem;
          font-weight: 600;
          padding: 0.75rem 1.5rem;
          border-radius: var(--radius);
          border: none;
          cursor: pointer;
          transition: all 0.2s ease;
          text-decoration: none;
        }

        .btn-primary {
          background-color: var(--primary);
          color: var(--primary-foreground);
        }

        .btn-primary:hover {
          background-color: hsl(145, 63%, 44%);
          transform: translateY(-1px);
        }

        .btn-outline {
          background-color: transparent;
          color: var(--foreground);
          border: 1px solid var(--border);
        }

        .btn-outline:hover {
          background-color: var(--secondary);
          border-color: var(--primary);
        }

        .btn-secondary {
          background-color: transparent;
          color: var(--foreground);
          border: 1px solid var(--border);
        }

        .btn-secondary:hover {
          background-color: var(--secondary);
          border-color: var(--primary);
          transform: translateY(-1px);
        }

        .btn-lg {
          font-size: 1.125rem;
          padding: 1rem 2rem;
        }

        .btn-full {
          width: 100%;
        }

        /* Navbar */
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 50;
          background: hsla(200, 20%, 10%, 0.8);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid hsla(200, 15%, 20%, 0.5);
        }

        .navbar-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 1.5rem;
          font-weight: 700;
        }

        .logo img {
          border-radius: 8px;
          transition: transform 0.3s ease;
        }

        .logo img:hover {
          transform: scale(1.05);
        }

        .nav-links {
          display: none;
          align-items: center;
          gap: 2rem;
        }

        .nav-links a {
          color: var(--muted-foreground);
          transition: color 0.2s ease;
        }

        .nav-links a:hover {
          color: var(--foreground);
        }

        @media (min-width: 768px) {
          .nav-links {
            display: flex;
          }
        }

        /* Hero Logo */
        .hero-logo {
          margin-bottom: 1.5rem;
          display: flex;
          justify-content: center;
        }

        .hero-logo img {
          border-radius: 12px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
          transition: transform 0.3s ease;
        }

        .hero-logo img:hover {
          transform: scale(1.05);
        }

        /* Hero Section */
        .hero {
          padding: 8rem 1rem 5rem;
        }

        .hero-content {
          max-width: 56rem;
          margin: 0 auto;
          text-align: center;
        }

        .hero-title {
          font-size: 2.5rem;
          margin-bottom: 1.5rem;
          line-height: 1.1;
        }

        .hero-subtitle {
          font-size: 1.125rem;
          color: var(--muted-foreground);
          max-width: 42rem;
          margin: 0 auto 2rem;
        }

        .hero-buttons {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          justify-content: center;
          margin-bottom: 4rem;
        }

        @media (min-width: 640px) {
          .hero-title {
            font-size: 3.75rem;
          }

          .hero-subtitle {
            font-size: 1.25rem;
          }

          .hero-buttons {
            flex-direction: row;
          }
        }

        @media (min-width: 1024px) {
          .hero-title {
            font-size: 4.5rem;
          }
        }

        /* Demo Section */
        .demo {
          padding: 5rem 1rem;
        }

        .demo-container {
          max-width: 56rem;
          margin: 0 auto;
        }

        .demo-placeholder {
          position: relative;
          aspect-ratio: 16 / 9;
          border-radius: var(--radius);
          overflow: hidden;
          border: 2px solid hsla(145, 63%, 49%, 0.2);
          background: var(--card);
          cursor: pointer;
          transition: border-color 0.3s ease;
        }

        .demo-placeholder:hover {
          border-color: hsla(145, 63%, 49%, 0.4);
        }

        .demo-placeholder:hover .play-button {
          background: hsla(145, 63%, 49%, 0.3);
        }

        .demo-gradient {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, hsla(145, 63%, 49%, 0.05), transparent);
        }

        .demo-content {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .play-button {
          width: 5rem;
          height: 5rem;
          border-radius: 50%;
          background: hsla(145, 63%, 49%, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1rem;
          transition: background 0.3s ease;
        }

        .play-button svg {
          color: var(--primary);
          margin-left: 4px;
        }

        .demo-text {
          color: var(--muted-foreground);
          font-size: 0.875rem;
        }

        .demo-subtext {
          color: hsla(200, 10%, 60%, 0.6);
          font-size: 0.75rem;
          margin-top: 0.25rem;
        }

        .demo-mockup {
          position: absolute;
          bottom: 1rem;
          left: 1rem;
          right: 1rem;
        }

        .mockup-inner {
          background: hsla(200, 15%, 18%, 0.5);
          backdrop-filter: blur(8px);
          border-radius: 0.5rem;
          padding: 0.75rem;
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .mockup-avatar {
          width: 2.5rem;
          height: 2.5rem;
          border-radius: 50%;
          background: hsla(145, 63%, 49%, 0.3);
        }

        .mockup-text {
          flex: 1;
        }

        .mockup-line-1 {
          height: 0.75rem;
          background: hsla(200, 10%, 60%, 0.2);
          border-radius: 0.25rem;
          width: 6rem;
          margin-bottom: 0.25rem;
        }

        .mockup-line-2 {
          height: 0.5rem;
          background: hsla(200, 10%, 60%, 0.1);
          border-radius: 0.25rem;
          width: 8rem;
        }

        /* Trust Statement */
        .trust-statement {
          margin-top: 3rem;
          text-align: center;
          color: var(--muted-foreground);
          font-size: 0.875rem;
        }

        /* Section Headers */
        .section-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .section-title {
          font-size: 2rem;
          margin-bottom: 1rem;
        }

        .section-subtitle {
          color: var(--muted-foreground);
          font-size: 1.125rem;
          max-width: 42rem;
          margin: 0 auto;
        }

        @media (min-width: 768px) {
          .section-title {
            font-size: 2.5rem;
          }
        }

        /* Features Section */
        .features {
          padding: 5rem 1rem;
        }

        .features-grid {
          display: grid;
          gap: 1.5rem;
          max-width: 64rem;
          margin: 0 auto;
        }

        @media (min-width: 768px) {
          .features-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        .feature-card {
          padding: 1.5rem;
          transition: border-color 0.3s ease;
        }

        .feature-card:hover {
          border-color: hsla(145, 63%, 49%, 0.3);
        }

        .feature-card:hover .feature-icon {
          background: hsla(145, 63%, 49%, 0.2);
        }

        .feature-icon {
          width: 3rem;
          height: 3rem;
          border-radius: 0.5rem;
          background: hsla(145, 63%, 49%, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1rem;
          transition: background 0.3s ease;
        }

        .feature-icon svg {
          color: var(--primary);
        }

        .feature-title {
          font-size: 1.25rem;
          margin-bottom: 0.5rem;
        }

        .feature-description {
          color: var(--muted-foreground);
        }

        /* Social Proof Section */
        .social-proof {
          padding: 5rem 1rem;
        }

        .testimonial {
          max-width: 48rem;
          margin: 0 auto;
          padding: 3rem;
          text-align: center;
        }

        .quote-icon {
          color: var(--primary);
          opacity: 0.3;
          margin-bottom: 1.5rem;
        }

        .testimonial-quote {
          font-size: 1.5rem;
          font-style: italic;
          margin-bottom: 1.5rem;
          line-height: 1.4;
        }

        .testimonial-author {
          color: var(--muted-foreground);
        }

        @media (min-width: 768px) {
          .testimonial-quote {
            font-size: 1.75rem;
          }
        }

        /* Pricing Section */
        .pricing {
          padding: 5rem 1rem;
        }

        .pricing-card {
          max-width: 28rem;
          margin: 0 auto;
          padding: 2.5rem;
          position: relative;
          overflow: hidden;
          border-color: hsla(145, 63%, 49%, 0.3);
        }

        .pricing-badge {
          position: absolute;
          top: 0;
          right: 0;
          background: var(--primary);
          color: var(--primary-foreground);
          padding: 0.25rem 1rem;
          font-size: 0.875rem;
          font-weight: 600;
          border-bottom-left-radius: 0.5rem;
          display: flex;
          align-items: center;
          gap: 0.25rem;
        }

        .pricing-header {
          text-align: center;
          padding-top: 1.5rem;
          margin-bottom: 1.5rem;
        }

        .pricing-title {
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
        }

        .pricing-subtitle {
          color: var(--muted-foreground);
          margin-bottom: 1.5rem;
        }

        .pricing-amount {
          display: flex;
          align-items: baseline;
          justify-content: center;
          gap: 0.5rem;
        }

        .price {
          font-size: 3rem;
          font-weight: 700;
        }

        .currency {
          color: var(--muted-foreground);
        }

        .pricing-benefits {
          margin-bottom: 1.5rem;
        }

        .pricing-benefits ul {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .pricing-benefits li {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .check-icon {
          width: 1.25rem;
          height: 1.25rem;
          border-radius: 50%;
          background: hsla(145, 63%, 49%, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .check-icon svg {
          color: var(--primary);
        }

        .pricing-guarantee {
          text-align: center;
          color: var(--muted-foreground);
          font-size: 0.875rem;
          margin-top: 1.5rem;
        }

        /* FAQ Section */
        .faq {
          padding: 5rem 1rem;
        }

        .faq-list {
          max-width: 48rem;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .faq-item {
          border-radius: var(--radius);
          overflow: hidden;
          transition: border-color 0.3s ease;
        }

        .faq-item.open {
          border-color: hsla(145, 63%, 49%, 0.3);
        }

        .faq-trigger {
          width: 100%;
          padding: 1.5rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: transparent;
          border: none;
          color: var(--foreground);
          font-family: inherit;
          font-size: 1rem;
          font-weight: 500;
          text-align: left;
          cursor: pointer;
          transition: color 0.2s ease;
        }

        .faq-trigger:hover {
          color: var(--primary);
        }

        .faq-chevron {
          color: var(--muted-foreground);
          transition: transform 0.3s ease;
        }

        .faq-item.open .faq-chevron {
          transform: rotate(180deg);
        }

        .faq-content {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease, padding 0.3s ease;
        }

        .faq-item.open .faq-content {
          max-height: 500px;
        }

        .faq-content p {
          padding: 0 1.5rem 1.5rem;
          color: var(--muted-foreground);
        }

        /* Footer */
        .footer {
          padding: 2rem 1rem;
          border-top: 1px solid hsla(200, 15%, 20%, 0.5);
          text-align: center;
        }

        .footer p {
          color: var(--muted-foreground);
          font-size: 0.875rem;
        }

        /* Modal */
        .modal {
          position: fixed;
          inset: 0;
          z-index: 100;
          display: none;
          align-items: center;
          justify-content: center;
          padding: 1rem;
        }

        .modal.open {
          display: flex;
        }

        .modal-overlay {
          position: absolute;
          inset: 0;
          background: hsla(0, 0%, 0%, 0.8);
          backdrop-filter: blur(4px);
        }

        .modal-content {
          position: relative;
          width: 100%;
          max-width: 28rem;
          padding: 2rem;
          animation: fadeInUp 0.3s ease;
        }

        .modal-close {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: transparent;
          border: none;
          color: var(--muted-foreground);
          cursor: pointer;
          padding: 0.25rem;
          transition: color 0.2s ease;
        }

        .modal-close:hover {
          color: var(--foreground);
        }

        .modal-title {
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
        }

        .modal-subtitle {
          color: var(--muted-foreground);
          margin-bottom: 1.5rem;
        }

        .input-wrapper {
          position: relative;
          margin-bottom: 1rem;
        }

        .input-icon {
          position: absolute;
          left: 0.75rem;
          top: 50%;
          transform: translateY(-50%);
          color: var(--muted-foreground);
        }

        .input-wrapper input {
          width: 100%;
          padding: 1rem 1rem 1rem 2.75rem;
          background: var(--input);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          color: var(--foreground);
          font-family: inherit;
          font-size: 1rem;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }

        .input-wrapper input::placeholder {
          color: var(--muted-foreground);
        }

        .input-wrapper input:focus {
          outline: none;
          border-color: var(--primary);
          box-shadow: 0 0 0 3px hsla(145, 63%, 49%, 0.1);
        }

        .modal-privacy {
          text-align: center;
          color: var(--muted-foreground);
          font-size: 0.75rem;
          margin-top: 1rem;
        }

        /* Toast */
        .toast {
          position: fixed;
          bottom: 1.5rem;
          right: 1.5rem;
          background: var(--card);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          padding: 1rem 1.5rem;
          z-index: 200;
          transform: translateY(150%);
          opacity: 0;
          transition: transform 0.3s ease, opacity 0.3s ease;
        }

        .toast.show {
          transform: translateY(0);
          opacity: 1;
        }

        .toast-title {
          display: block;
          font-weight: 600;
          margin-bottom: 0.25rem;
        }

        .toast-message {
          display: block;
          color: var(--muted-foreground);
          font-size: 0.875rem;
        }

        /* Responsive Navigation */
        @media (max-width: 767px) {
          .navbar .btn {
            padding: 0.5rem 1rem;
            font-size: 0.875rem;
          }
        }
      `}</style>
    </>
  );
}
