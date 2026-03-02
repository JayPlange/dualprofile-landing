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

    // Handle video loading errors - REMOVED - Video will play inline
    // No need for fallback since video will be self-hosted

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
      question: "Is this live on Chrome yet?",
      answer: "Not yet on the Chrome Web Store — but launching very soon. Join our newsletter to be notified the moment it goes live."
    },
    {
      question: "How does Preview Mode work?",
      answer: "Preview Mode shows you exactly what each contact sees when they view your profile. It's a local simulation that demonstrates how your different photos will appear to specific contacts."
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
              <a href="#faq">FAQ</a>
            </div>
            <a href="#early-access" className="btn btn-primary">
              Join Newsletter
            </a>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="hero">
          <div className="hero-content">
            {/* P2P Hook - PRIMARY MESSAGE */}
            <div className="p2p-hook" style={{
              background: 'linear-gradient(135deg, #25D366, #128C7E)',
              color: 'white',
              padding: '12px 24px',
              borderRadius: '50px',
              fontWeight: '600',
              fontSize: 'clamp(16px, 3vw, 20px)',
              marginBottom: '24px',
              display: 'inline-block',
              animation: 'pulse 2s infinite',
              boxShadow: '0 4px 20px rgba(37, 211, 102, 0.3)'
            }}>
              Real-time P2P sync — live now
            </div>
            
            {/* Main Headline */}
            <h1 className="hero-title" style={{
              fontSize: 'clamp(32px, 6vw, 56px)',
              fontWeight: '700',
              lineHeight: '1.1',
              marginBottom: '16px'
            }}>
              One WhatsApp.<br />Multiple Identities.<br />
              <span style={{fontSize: 'clamp(28px, 5vw, 48px)', fontWeight: '600'}}>
                You decide who sees what.
              </span>
            </h1>
            
            {/* Subheading */}
            <p className="hero-subtitle" style={{
              fontSize: 'clamp(18px, 3vw, 22px)',
              marginBottom: '32px',
              opacity: '0.9'
            }}>
              Real-time P2P profile photos — different people see different you.
            </p>
            
            {/* CTA Buttons */}
            <div className="hero-buttons" style={{marginBottom: '24px'}}>
              <button 
                className="btn btn-outline btn-lg btn-primary"
                onClick={() => window.open('https://dualprofile.kit.com/7a5b00e94e', '_blank')}
                style={{
                  fontSize: 'clamp(16px, 2.5vw, 18px)',
                  padding: '16px 32px',
                  minWidth: '280px',
                  marginRight: '16px'
                }}
              >
                Get DualProfile Now
              </button>
              <button 
                className="btn btn-outline btn-lg"
                onClick={() => document.getElementById('demo')?.scrollIntoView({behavior: 'smooth'})}
                style={{
                  fontSize: 'clamp(16px, 2.5vw, 18px)',
                  padding: '16px 32px',
                  minWidth: '200px'
                }}
              >
                Watch Demo
              </button>
            </div>
            
            {/* Preview Badge - Secondary */}
            <div className="hero-status" style={{opacity: '0.7'}}>
              <span className="status-badge" style={{
                background: 'rgba(255, 255, 255, 0.1)',
                padding: '6px 12px',
                borderRadius: '20px',
                fontSize: '14px',
                marginRight: '12px'
              }}>
                Live Demo Available
              </span>
            </div>
          </div>
        </section>

        {/* How It Works Section - NEW */}
        <section id="how-it-works" className="how-it-works" style={{
          padding: '80px 20px',
          background: 'linear-gradient(180deg, rgba(11, 11, 15, 0) 0%, rgba(11, 11, 15, 0.5) 100%)'
        }}>
          <div className="container" style={{maxWidth: '1200px', margin: '0 auto'}}>
            <div className="section-header" style={{textAlign: 'center', marginBottom: '60px'}}>
              <h2 className="section-title" style={{
                fontSize: 'clamp(32px, 5vw, 48px)',
                fontWeight: '700',
                marginBottom: '16px',
                color: 'var(--foreground, #ffffff)'
              }}>
                HOW IT WORKS
              </h2>
              <p className="section-subtitle" style={{
                fontSize: 'clamp(18px, 3vw, 22px)',
                opacity: '0.8',
                color: 'var(--muted-foreground, #9ca3af)'
              }}>
                3 simple steps to control your WhatsApp identity
              </p>
            </div>
            
            <div className="steps-grid" style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '40px',
              marginBottom: '40px'
            }}>
              <div className="step-card" style={{
                background: 'rgba(255, 255, 255, 0.05)',
                padding: '40px 30px',
                borderRadius: '16px',
                textAlign: 'center',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}>
                <div className="step-icon" style={{
                  width: '80px',
                  height: '80px',
                  margin: '0 auto 20px',
                  background: 'linear-gradient(135deg, #25D366, #128C7E)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '32px',
                  fontWeight: '700'
                }}>
                  1
                </div>
                <h3 style={{
                  fontSize: '24px',
                  fontWeight: '600',
                  marginBottom: '12px',
                  color: 'var(--foreground, #ffffff)'
                }}>
                  Upload 2 profile photos
                </h3>
                <p style={{
                  fontSize: '16px',
                  opacity: '0.8',
                  lineHeight: '1.6',
                  color: 'var(--muted-foreground, #9ca3af)'
                }}>
                  Professional for work, casual for friends. Your choice.
                </p>
              </div>
              
              <div className="step-card" style={{
                background: 'rgba(255, 255, 255, 0.05)',
                padding: '40px 30px',
                borderRadius: '16px',
                textAlign: 'center',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}>
                <div className="step-icon" style={{
                  width: '80px',
                  height: '80px',
                  margin: '0 auto 20px',
                  background: 'linear-gradient(135deg, #25D366, #128C7E)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '32px',
                  fontWeight: '700'
                }}>
                  2
                </div>
                <h3 style={{
                  fontSize: '24px',
                  fontWeight: '600',
                  marginBottom: '12px',
                  color: 'var(--foreground, #ffffff)'
                }}>
                  Assign who sees what
                </h3>
                <p style={{
                  fontSize: '16px',
                  opacity: '0.8',
                  lineHeight: '1.6',
                  color: 'var(--muted-foreground, #9ca3af)'
                }}>
                  Simply drag contacts to groups. Boss sees professional, friends see casual.
                </p>
              </div>
              
              <div className="step-card" style={{
                background: 'rgba(255, 255, 255, 0.05)',
                padding: '40px 30px',
                borderRadius: '16px',
                textAlign: 'center',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}>
                <div className="step-icon" style={{
                  width: '80px',
                  height: '80px',
                  margin: '0 auto 20px',
                  background: 'linear-gradient(135deg, #25D366, #128C7E)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '32px',
                  fontWeight: '700'
                }}>
                  3
                </div>
                <h3 style={{
                  fontSize: '24px',
                  fontWeight: '600',
                  marginBottom: '12px',
                  color: 'var(--foreground, #ffffff)'
                }}>
                  They see a different you instantly
                </h3>
                <p style={{
                  fontSize: '16px',
                  opacity: '0.8',
                  lineHeight: '1.6',
                  color: 'var(--muted-foreground, #9ca3af)'
                }}>
                  Real-time P2P sync. Changes reflect instantly on their WhatsApp Web.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Demo Section - Hybrid Video Implementation */}
        <section id="demo" className="demo">
          <div className="demo-container">
            <div className="demo-video-wrapper" style={{
              position: 'relative',
              width: '100%',
              maxWidth: '800px',
              margin: '0 auto',
              borderRadius: '12px',
              overflow: 'hidden',
              background: '#000',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
              aspectRatio: '16 / 9'
            }}>
              {/* Try self-hosted MP4 first, fallback to Loom iframe */}
              <video 
                controls
                playsinline
                preload="metadata"
                muted
                loop
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '12px'
                }}
                poster="/video-thumbnail.png"
                title="DualProfile Demo - See how different contacts see different profile photos"
                onError={(e) => {
                  // If video fails to load, replace with iframe
                  const video = e.target;
                  const wrapper = video.parentElement;
                  
                  // Create iframe fallback
                  const iframe = document.createElement('iframe');
                  iframe.src = 'https://www.loom.com/embed/142f339f576c42028e9fab9c3f8d3e8d?hideOwner=true&hideShare=true&hideTitle=true&disableLogo=true&hideEmbedTopBar=true&autoplay=1&muted=1';
                  iframe.frameBorder = '0';
                  iframe.allow = 'autoplay; encrypted-media; fullscreen; picture-in-picture; clipboard-write';
                  iframe.allowFullScreen = true;
                  iframe.style.cssText = `
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    border: none;
                    border-radius: 12px;
                  `;
                  iframe.title = 'DualProfile Demo - See how different contacts see different profile photos';
                  
                  // Replace video with iframe
                  wrapper.replaceChild(iframe, video);
                }}
              >
                <source src="/DualProfile x Demo Video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            
            <div className="trust-statement" style={{
              background: 'rgba(37, 211, 102, 0.1)',
              border: '1px solid rgba(37, 211, 102, 0.3)',
              padding: '16px 24px',
              borderRadius: '12px',
              marginTop: '24px',
              textAlign: 'center',
              fontSize: '15px',
              fontWeight: '500'
            }}>
              🔒 This works entirely on WhatsApp Web. No chat data is stored.
            </div>
            
            <p className="demo-caption" style={{
              marginTop: '16px',
              fontSize: '16px',
              opacity: '0.8',
              textAlign: 'center',
              lineHeight: '1.5'
            }}>
              Watch how Preview Mode shows exactly what each contact sees.
            </p>
          </div>
        </section>

        {/* Viral Hook Section - NEW */}
        <section id="viral-hook" className="viral-hook" style={{
          padding: '100px 20px',
          background: 'linear-gradient(135deg, rgba(37, 211, 102, 0.1) 0%, rgba(18, 140, 126, 0.1) 100%)',
          textAlign: 'center'
        }}>
          <div className="container" style={{maxWidth: '900px', margin: '0 auto'}}>
            <div className="viral-message" style={{
              marginBottom: '40px'
            }}>
              <h2 className="viral-headline" style={{
                fontSize: 'clamp(36px, 6vw, 64px)',
                fontWeight: '700',
                marginBottom: '24px',
                lineHeight: '1.1',
                color: 'var(--foreground, #ffffff)'
              }}>
                "Your boss sees professional you.<br />
                Your friends see the real you."
              </h2>
              <div className="viral-subheadline" style={{
                fontSize: 'clamp(24px, 4vw, 36px)',
                fontWeight: '600',
                color: '#25D366',
                marginBottom: '32px',
                fontStyle: 'italic'
              }}>
                Same WhatsApp.<br />
                Different realities.
              </div>
              <button 
                className="btn btn-primary"
                onClick={() => window.open('https://chrome.google.com/webstore', '_blank')}
                style={{
                  fontSize: 'clamp(18px, 3vw, 22px)',
                  padding: '20px 40px',
                  minWidth: '300px',
                  background: 'linear-gradient(135deg, #25D366, #128C7E)',
                  border: 'none',
                  borderRadius: '50px',
                  color: 'white',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  boxShadow: '0 8px 32px rgba(37, 211, 102, 0.3)'
                }}
              >
                Get DualProfile Now
              </button>
            </div>
          </div>
        </section>

        {/* Social Proof Section */}
        <section className="social-proof-section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">People Have Been Asking For This For Years</h2>
              <p className="section-subtitle">
                Before DualProfile, the only solution was to get a second phone number. Not anymore.
              </p>
            </div>
            <div className="reddit-posts-grid">
              <div className="reddit-post glass-card">
                <div className="post-header">
                  <div className="post-meta">
                    <span className="subreddit">r/whatsapp</span>
                    <span className="post-date">8 months ago</span>
                  </div>
                  <div className="post-stats">9 upvotes • 3 comments</div>
                </div>
                <div className="post-content">
                  <h4>"Whatsapp should start multiple profile photo"</h4>
                  <p>"I would like my close circle to view a different photo of my and other contacts to view diff photo"</p>
                </div>
              </div>
              
              <div className="reddit-post glass-card">
                <div className="post-header">
                  <div className="post-meta">
                    <span className="subreddit">r/whatsapp</span>
                    <span className="post-date">9 years ago</span>
                  </div>
                  <div className="post-stats">6 upvotes • 7 comments</div>
                </div>
                <div className="post-content">
                  <h4>"Is there a way to display different profile pictures to different people?"</h4>
                  <p>"As in, can I have a set of my contacts (group A) view a certain profile pic (picture A) while simultaneously another set of contacts (group B) will see another profile pic (picture B)?"</p>
                  <div className="reddit-answer">Answer: "Nope"</div>
                </div>
              </div>
              
              <div className="reddit-post glass-card">
                <div className="post-header">
                  <div className="post-meta">
                    <span className="subreddit">r/privacy</span>
                    <span className="post-date">2 years ago</span>
                  </div>
                  <div className="post-stats">Trending</div>
                </div>
                <div className="post-content">
                  <h4>"Risks of using a personal photo as a WhatsApp profile picture"</h4>
                  <p>Long discussion about privacy concerns with profile photos and the need for separation between personal and professional contexts.</p>
                </div>
              </div>
              
              <div className="reddit-post glass-card">
                <div className="post-header">
                  <div className="post-meta">
                    <span className="subreddit">r/whatsapp</span>
                    <span className="post-date">5 years ago</span>
                  </div>
                  <div className="post-stats">12 upvotes • 8 comments</div>
                </div>
                <div className="post-content">
                  <h4>"Different profile picture between web and app"</h4>
                  <p>Asked if it's possible to have different profile pictures on different platforms.</p>
                  <div className="reddit-answer">Answer: "Only with two different numbers"</div>
                </div>
              </div>
              
              <div className="reddit-post glass-card">
                <div className="post-header">
                  <div className="post-meta">
                    <span className="subreddit">r/whatsapp</span>
                    <span className="post-date">1 year ago</span>
                  </div>
                  <div className="post-stats">24 upvotes • 15 comments</div>
                </div>
                <div className="post-content">
                  <h4>"Advice needed: Splitting mixed WhatsApp into personal and professional use"</h4>
                  <p>"User wants to separate personal/professional but doesn't want to lose chat history. Current solution: Get TWO phone numbers!"</p>
                </div>
              </div>
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
                  Preview how others see you. Changes reflect instantly on the other person's WhatsApp Web.
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
                  <div className="status-icon available">✓</div>
                  <div className="status-text">
                    <strong>P2P Sync</strong>
                    <p>Real-time profile switching ✨ LIVE</p>
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
                Start free, upgrade when you need more power.
              </p>
            </div>
            <div className="pricing-grid" style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '32px',
              maxWidth: '800px',
              margin: '0 auto'
            }}>
              <div className="pricing-card glass-card" style={{
                padding: '40px',
                textAlign: 'center',
                borderRadius: '16px',
                border: '2px solid rgba(37, 211, 102, 0.2)',
                background: 'rgba(255, 255, 255, 0.05)'
              }}>
                <h3 style={{
                  fontSize: '24px',
                  fontWeight: '700',
                  marginBottom: '16px',
                  color: 'var(--foreground, #ffffff)'
                }}>Free</h3>
                <div style={{
                  fontSize: '48px',
                  fontWeight: '800',
                  color: '#25D366',
                  marginBottom: '24px'
                }}>$0<span style={{
                  fontSize: '18px',
                  fontWeight: '400',
                  color: 'var(--muted-foreground, #9ca3af)'
                }}>/month</span></div>
                <ul style={{
                  listStyle: 'none',
                  padding: '0',
                  marginBottom: '32px',
                  textAlign: 'left'
                }}>
                  <li style={{marginBottom: '12px', display: 'flex', alignItems: 'center'}}>
                    <span style={{color: '#25D366', marginRight: '12px'}}>✓</span>
                    Up to 2 P2P contacts
                  </li>
                  <li style={{marginBottom: '12px', display: 'flex', alignItems: 'center'}}>
                    <span style={{color: '#25D366', marginRight: '12px'}}>✓</span>
                    Preview Mode
                  </li>
                  <li style={{marginBottom: '12px', display: 'flex', alignItems: 'center'}}>
                    <span style={{color: '#25D366', marginRight: '12px'}}>✓</span>
                    P2P Sync (basic)
                  </li>
                </ul>
                <button 
                  className="btn btn-secondary"
                  style={{
                    width: '100%',
                    padding: '16px 24px',
                    background: 'transparent',
                    border: '2px solid #25D366',
                    borderRadius: '12px',
                    color: '#25D366',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                  onClick={() => window.open('https://chrome.google.com/webstore', '_blank')}
                >
                  Get Started Free
                </button>
              </div>
              
              <div className="pricing-card glass-card featured" style={{
                padding: '40px',
                textAlign: 'center',
                borderRadius: '16px',
                border: '2px solid #25D366',
                background: 'linear-gradient(135deg, rgba(37, 211, 102, 0.1), rgba(18, 140, 126, 0.1))',
                position: 'relative',
                transform: 'scale(1.05)'
              }}>
                <div style={{
                  position: 'absolute',
                  top: '-20px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: '#25D366',
                  color: 'white',
                  padding: '6px 20px',
                  borderRadius: '20px',
                  fontSize: '14px',
                  fontWeight: '600',
                  zIndex: '10',
                  boxShadow: '0 4px 12px rgba(37, 211, 102, 0.3)'
                }}>POPULAR</div>
                <h3 style={{
                  fontSize: '24px',
                  fontWeight: '700',
                  marginBottom: '16px',
                  color: 'var(--foreground, #ffffff)'
                }}>Pro</h3>
                <div style={{
                  fontSize: '48px',
                  fontWeight: '800',
                  color: '#25D366',
                  marginBottom: '8px'
                }}>$7.99<span style={{
                  fontSize: '18px',
                  fontWeight: '400',
                  color: 'var(--muted-foreground, #9ca3af)'
                }}>/month</span></div>
                <div style={{
                  fontSize: '16px',
                  fontWeight: '600',
                  color: '#25D366',
                  marginBottom: '24px'
                }}>
                  Or $59/year (save 38%)
                </div>
                <ul style={{
                  listStyle: 'none',
                  padding: '0',
                  marginBottom: '32px',
                  textAlign: 'left'
                }}>
                  <li style={{marginBottom: '12px', display: 'flex', alignItems: 'center'}}>
                    <span style={{color: '#25D366', marginRight: '12px'}}>✓</span>
                    Unlimited P2P contacts
                  </li>
                  <li style={{marginBottom: '12px', display: 'flex', alignItems: 'center'}}>
                    <span style={{color: '#25D366', marginRight: '12px'}}>✓</span>
                    Work/Personal mode switching
                  </li>
                  <li style={{marginBottom: '12px', display: 'flex', alignItems: 'center'}}>
                    <span style={{color: '#25D366', marginRight: '12px'}}>✓</span>
                    Photo history (revert to previous assignments)
                  </li>
                  <li style={{marginBottom: '12px', display: 'flex', alignItems: 'center'}}>
                    <span style={{color: '#25D366', marginRight: '12px'}}>✓</span>
                    Priority support
                  </li>
                  <li style={{marginBottom: '12px', display: 'flex', alignItems: 'center'}}>
                    <span style={{color: '#25D366', marginRight: '12px'}}>✓</span>
                    Early access to new features
                  </li>
                </ul>
                <button 
                  className="btn btn-primary"
                  style={{
                    width: '100%',
                    padding: '16px 24px',
                    background: 'linear-gradient(135deg, #25D366, #128C7E)',
                    border: 'none',
                    borderRadius: '12px',
                    color: 'white',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 8px 32px rgba(37, 211, 102, 0.3)'
                  }}
                  onClick={() => window.open('https://chrome.google.com/webstore', '_blank')}
                >
                  Get DualProfile Pro
                </button>
              </div>
            </div>
          </div>
        </section>

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
            <div className="footer-content">
              <p>© 2026 DualProfile. All rights reserved.</p>
              <div className="footer-links">
                <a href="/privacy" className="footer-link">
                  Privacy Policy
                </a>
                <a href="mailto:edwin.dualprofile@gmail.com" className="footer-link">
                  Support
                </a>
              </div>
              <p className="footer-note">
                Your chats and messages are never accessed or stored.
              </p>
            </div>
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
            <h2 className="modal-title">Join our Newsletter</h2>
            <p className="modal-subtitle">
              Get the latest updates and tips for DualProfile. No spam, just valuable content.
            </p>
            <button 
              className="btn btn-primary btn-full"
              onClick={() => {
                // Use the correct public form URL
                window.open('https://dualprofile.kit.com/7a5b00e94e', '_blank');
                // Close modal and show success message
                setIsModalOpen(false);
                showToast("Opening newsletter form...", "Complete your subscription to join our newsletter.");
              }}
            >
              Join Newsletter
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

        /* Social Proof Section */
        .social-proof-section {
          padding: 6rem 0;
          background: linear-gradient(180deg, transparent, rgba(16, 185, 129, 0.05), transparent);
        }

        .reddit-posts-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 1.5rem;
          margin-top: 3rem;
        }

        .reddit-post {
          padding: 1.5rem;
          border: 1px solid var(--border);
          border-radius: var(--radius);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .reddit-post:hover {
          transform: translateY(-2px);
          border-color: rgba(16, 185, 129, 0.3);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
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

        .post-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
          padding-bottom: 0.75rem;
          border-bottom: 1px solid var(--border);
        }

        .post-meta {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .subreddit {
          color: #ff4500;
          font-weight: 600;
          font-size: 0.875rem;
        }

        .post-date {
          color: var(--muted-foreground);
          font-size: 0.75rem;
        }

        .post-stats {
          color: var(--muted-foreground);
          font-size: 0.75rem;
          font-weight: 500;
        }

        .post-content h4 {
          color: var(--foreground);
          font-size: 1rem;
          font-weight: 600;
          margin-bottom: 0.75rem;
          line-height: 1.4;
        }

        .post-content p {
          color: var(--muted-foreground);
          font-size: 0.875rem;
          line-height: 1.5;
          margin-bottom: 0.75rem;
        }

        .reddit-answer {
          background: rgba(255, 69, 0, 0.1);
          color: #ff6b35;
          padding: 0.5rem 0.75rem;
          border-radius: 0.5rem;
          font-size: 0.875rem;
          font-weight: 500;
          border-left: 3px solid #ff4500;
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
          color: #9ca3af;
          text-decoration: none;
          font-size: 0.875rem;
          transition: color 0.2s ease;
        }

        .footer-link:hover {
          color: var(--primary);
        }

        @media (min-width: 768px) {
          .footer-content {
            flex-direction: row;
            justify-content: space-between;
          }
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

        /* Mobile Responsive Design */
        @media (max-width: 768px) {
          .hero-content {
            padding: 2rem 1rem;
            text-align: center;
            max-width: 90%;
            margin: 0 auto;
          }

          .hero-buttons {
            flex-direction: column;
            gap: 1rem;
          }

          .hero-buttons button {
            width: 100%;
            min-width: unset;
            margin-right: 0;
            padding: 16px 24px;
            font-size: 16px;
          }

          .p2p-hook {
            font-size: 14px;
            padding: 10px 20px;
            margin-bottom: 20px;
          }

          .steps-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }

          .step-card {
            padding: 30px 20px;
          }

          .viral-headline {
            font-size: 32px;
            line-height: 1.2;
          }

          .viral-subheadline {
            font-size: 20px;
          }

          .viral-hook button {
            width: 100%;
            min-width: unset;
            padding: 18px 32px;
            font-size: 18px;
          }

          .demo-video-wrapper {
            margin: 0 -20px;
            max-width: calc(100% + 40px);
          }

          .social-proof-section {
            padding: 60px 20px;
          }

          .reddit-posts-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
        }

        @media (max-width: 480px) {
          .hero-content {
            padding: 1.5rem 1rem;
          }

          .viral-headline {
            font-size: 28px;
          }

          .viral-subheadline {
            font-size: 18px;
          }

          .section-title {
            font-size: 28px;
          }

          .step-icon {
            width: 60px;
            height: 60px;
            font-size: 24px;
          }

          .step-card h3 {
            font-size: 20px;
          }

          .step-card p {
            font-size: 14px;
          }
        }

        /* Micro-interactions */
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            box-shadow: 0 4px 20px rgba(37, 211, 102, 0.3);
          }
          50% {
            transform: scale(1.05);
            box-shadow: 0 6px 30px rgba(37, 211, 102, 0.5);
          }
        }

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

        .animate-fade-in-up {
          opacity: 1;
          transform: translateY(0);
        }

        .step-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 40px rgba(37, 211, 102, 0.2);
          border-color: rgba(37, 211, 102, 0.3);
        }

        .btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(37, 211, 102, 0.4);
        }

        .btn:active {
          transform: translateY(0);
        }

        .viral-hook button:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 40px rgba(37, 211, 102, 0.5);
        }

        /* Performance optimizations */
        .hero-content,
        .step-card,
        .viral-message {
          will-change: transform;
        }

        /* Reduce motion for accessibility */
        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </>
  );
}
