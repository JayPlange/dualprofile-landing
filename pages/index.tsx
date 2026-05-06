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
      question: "Does my contact need to install anything?",
      answer: "Yes — DualProfile works peer-to-peer. When you assign a photo to a contact and they have DualProfile installed, your photo appears on their screen automatically. Share the install link with them and setup takes about 3 minutes."
    },
    {
      question: "Does this work on the WhatsApp mobile app?",
      answer: "No — DualProfile works on WhatsApp Web (web.whatsapp.com) in Chrome or Edge on desktop only. The mobile app is not supported."
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
        <title>DualProfile — Show Different WhatsApp Photos to Different People</title>
        <meta name="description" content="Your boss sees your professional photo. Your friends see the real you. DualProfile lets you assign different profile photos to different WhatsApp contacts. Free Chrome extension." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://vivaup.org/" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://vivaup.org/" />
        <meta property="og:title" content="DualProfile — Show Different WhatsApp Photos to Different People" />
        <meta property="og:description" content="Your boss sees your professional photo. Your friends see the real you. Free Chrome extension for WhatsApp Web." />
        <meta property="og:image" content="https://vivaup.org/dualprofile-logo.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="DualProfile — Show Different WhatsApp Photos to Different People" />
        <meta name="twitter:description" content="Your boss sees your professional photo. Your friends see the real you. Free Chrome extension for WhatsApp Web." />
        <meta name="twitter:image" content="https://vivaup.org/dualprofile-logo.png" />

        {/* Structured Data */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "name": "DualProfile",
          "url": "https://vivaup.org",
          "description": "Show different WhatsApp profile photos to different contacts. Your boss sees your professional photo, your friends see the real you. Free Chrome extension for WhatsApp Web.",
          "applicationCategory": "BrowserApplication",
          "operatingSystem": "Chrome, Edge",
          "offers": [
            { "@type": "Offer", "name": "Free", "price": "0", "priceCurrency": "GBP" },
            { "@type": "Offer", "name": "Pro", "price": "9.99", "priceCurrency": "GBP", "billingIncrement": "P1M" },
            { "@type": "Offer", "name": "Annual", "price": "59.00", "priceCurrency": "GBP", "billingIncrement": "P1Y" },
            { "@type": "Offer", "name": "Lifetime", "price": "79.00", "priceCurrency": "GBP" }
          ],
          "featureList": [
            "Show different profile photos to different WhatsApp contacts",
            "Assign professional photo to work contacts",
            "Assign casual photo to personal contacts",
            "Peer-to-peer sync — no server storage",
            "Works on WhatsApp Web in Chrome and Edge"
          ],
          "installUrl": "https://chromewebstore.google.com/detail/dualprofile/mdlhdncmaeepcejdbpnjpjlmagmmpkpc",
          "screenshot": "https://vivaup.org/dualprofile-logo.png"
        })}} />
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
            <a href="https://chromewebstore.google.com/detail/dualprofile/mdlhdncmaeepcejdbpnjpjlmagmmpkpc" target="_blank" rel="noreferrer" className="btn btn-primary">
              Add to Chrome — It's Free
            </a>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="hero">
          <div className="hero-content">
            {/* P2P Hook - PRIMARY MESSAGE */}
            <div className="p2p-hook" style={{
              background: 'rgba(37,211,102,0.12)',
              color: '#25D366',
              border: '1px solid rgba(37,211,102,0.3)',
              padding: '10px 22px',
              borderRadius: '50px',
              fontWeight: '600',
              fontSize: 'clamp(13px, 2vw, 15px)',
              marginBottom: '24px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              letterSpacing: '0.2px'
            }}>
              <span style={{width:'8px',height:'8px',borderRadius:'50%',background:'#25D366',display:'inline-block',boxShadow:'0 0 6px #25D366'}}></span>
              Live on Chrome Web Store · Free to install
            </div>
            
            {/* Main Headline */}
            <h1 className="hero-title" style={{
              fontSize: 'clamp(32px, 6vw, 56px)',
              fontWeight: '700',
              lineHeight: '1.1',
              marginBottom: '16px'
            }}>
              People have been asking<br />WhatsApp for years.<br />
              <span style={{fontSize: 'clamp(24px, 4vw, 40px)', fontWeight: '600', color: '#25D366'}}>
                Now it exists.
              </span>
            </h1>
            
            {/* Subheading */}
            <p className="hero-subtitle" style={{
              fontSize: 'clamp(18px, 3vw, 22px)',
              marginBottom: '32px',
              opacity: '0.9'
            }}>
              Show different profile photos to different contacts — your boss sees one, your friends see another. Same number. Same WhatsApp.
            </p>
            
            {/* CTA Buttons */}
            <div className="hero-buttons" style={{marginBottom: '24px'}}>
              <button 
                className="btn btn-outline btn-lg btn-primary"
                onClick={() => window.open('https://chromewebstore.google.com/detail/dualprofile/mdlhdncmaeepcejdbpnjpjlmagmmpkpc', '_blank')}
                style={{
                  fontSize: 'clamp(16px, 2.5vw, 18px)',
                  padding: '16px 32px',
                  minWidth: '280px',
                  marginRight: '16px'
                }}
              >
                Add to Chrome — It's Free
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
            
            {/* Avatar Swap Visual */}
            <div style={{
              marginTop: '48px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0',
              flexWrap: 'wrap' as const
            }}>
              {/* Contact: Boss */}
              <div style={{textAlign: 'center', padding: '0 8px'}}>
                <div style={{
                  width: '72px', height: '72px', borderRadius: '50%',
                  overflow: 'hidden', margin: '0 auto 8px',
                  border: '2px solid rgba(255,255,255,0.15)',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.4)'
                }}>
                  <img src="/dp-pro.jpg" alt="Professional photo" style={{width:'100%',height:'100%',objectFit:'cover' as const,objectPosition:'center top'}} />
                </div>
                <div style={{fontSize: '11px', color: '#9ca3af', fontWeight: '500'}}>Your Boss</div>
                <div style={{
                  marginTop: '6px', fontSize: '10px', color: '#25D366',
                  background: 'rgba(37,211,102,0.1)', padding: '3px 8px',
                  borderRadius: '10px', border: '1px solid rgba(37,211,102,0.2)'
                }}>Sees: Pro photo</div>
              </div>

              {/* Arrow */}
              <div style={{fontSize: '20px', color: 'rgba(255,255,255,0.2)', padding: '0 4px', marginBottom: '24px'}}>→</div>

              {/* Center: Your Profile */}
              <div style={{textAlign: 'center', padding: '0 16px', position: 'relative' as const}}>
                <div style={{
                  fontSize: '10px', color: '#25D366', fontWeight: '700',
                  letterSpacing: '1px', textTransform: 'uppercase' as const,
                  marginBottom: '8px'
                }}>YOUR WHATSAPP</div>
                <div style={{
                  width: '96px', height: '96px', borderRadius: '50%',
                  overflow: 'hidden', margin: '0 auto',
                  boxShadow: '0 0 0 3px rgba(37,211,102,0.4), 0 0 0 6px rgba(37,211,102,0.1), 0 8px 32px rgba(0,0,0,0.5)',
                  border: '2px solid rgba(37,211,102,0.6)'
                }}>
                  <img src="/dp-pro.jpg" alt="Your WhatsApp profile" style={{width:'100%',height:'100%',objectFit:'cover' as const,objectPosition:'center top'}} />
                </div>
                <div style={{
                  marginTop: '8px', fontSize: '11px', color: '#6b7280',
                  fontWeight: '500'
                }}>One number</div>
              </div>

              {/* Arrow */}
              <div style={{fontSize: '20px', color: 'rgba(255,255,255,0.2)', padding: '0 4px', marginBottom: '24px'}}>→</div>

              {/* Contact: Friends */}
              <div style={{textAlign: 'center', padding: '0 8px'}}>
                <div style={{
                  width: '72px', height: '72px', borderRadius: '50%',
                  overflow: 'hidden', margin: '0 auto 8px',
                  border: '2px solid rgba(255,255,255,0.15)',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.4)'
                }}>
                  <img src="/dp-casual.jpg" alt="Casual photo" style={{width:'100%',height:'100%',objectFit:'cover' as const,objectPosition:'center top'}} />
                </div>
                <div style={{fontSize: '11px', color: '#9ca3af', fontWeight: '500'}}>Your Friends</div>
                <div style={{
                  marginTop: '6px', fontSize: '10px', color: '#a78bfa',
                  background: 'rgba(167,139,250,0.1)', padding: '3px 8px',
                  borderRadius: '10px', border: '1px solid rgba(167,139,250,0.2)'
                }}>See: Casual photo</div>
              </div>
            </div>
            <div style={{marginTop: '12px', fontSize: '12px', color: 'rgba(255,255,255,0.3)', textAlign: 'center' as const}}>
              Same WhatsApp account · Different photos · Automatic
            </div>
          </div>
        </section>

        {/* Demo Section - Fixed Video Embed */}
        <section id="demo" className="demo">
          <div className="demo-container">
            <div className="demo-video-wrapper">
              <div style={{position: 'relative', paddingBottom: '56.25%', height: '0'}}>
                <iframe
                  src="https://www.youtube.com/embed/mt8QzcG0_XQ?rel=0&modestbranding=1&autoplay=0"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                  style={{
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    width: '100%',
                    height: '100%',
                    borderRadius: '12px'
                  }}
                ></iframe>
              </div>
            </div>
            <div className="trust-statement" style={{
              background: 'rgba(37, 211, 102, 0.1)',
              padding: '12px 20px',
              borderRadius: '8px',
              marginTop: '16px',
              textAlign: 'center',
              fontSize: '14px'
            }}>
              🔒 This works entirely on WhatsApp Web. No chat data is stored.
            </div>
            <p className="demo-caption" style={{
              marginTop: '12px',
              fontSize: '16px',
              opacity: '0.8',
              textAlign: 'center'
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
                onClick={() => window.open('https://chromewebstore.google.com/detail/dualprofile/mdlhdncmaeepcejdbpnjpjlmagmmpkpc', '_blank')}
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
                Add to Chrome — It's Free
              </button>
            </div>
          </div>
        </section>

        {/* Social Proof Section */}
        <section className="social-proof-section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">The answer was always "no."</h2>
              <p className="section-subtitle">
                Before DualProfile, the only solution was to get a second phone number. Not anymore.
              </p>
            </div>
            <div className="reddit-posts-grid">
              <div className="reddit-post glass-card">
                <div className="post-header">
                  <div className="post-meta">
                    <span className="subreddit">r/whatsapp</span>
                    <span className="post-date">9 years ago</span>
                  </div>
                  <div className="post-stats">6 upvotes · 7 comments</div>
                </div>
                <div className="post-content">
                  <h4>"Is there a way to display different profile pictures to different people?"</h4>
                  <p>"Can I have group A view picture A while group B sees picture B simultaneously?"</p>
                  <div className="reddit-answer">Top answer: Nope.</div>
                </div>
              </div>

              <div className="reddit-post glass-card">
                <div className="post-header">
                  <div className="post-meta">
                    <span className="subreddit">r/whatsapp</span>
                    <span className="post-date">5 years ago</span>
                  </div>
                  <div className="post-stats">7 upvotes · 3 comments</div>
                </div>
                <div className="post-content">
                  <h4>"Different profile picture between web and app — is it possible?"</h4>
                  <div className="reddit-answer">Top answer: Only if you have two phone numbers.</div>
                </div>
              </div>

              <div className="reddit-post glass-card">
                <div className="post-header">
                  <div className="post-meta">
                    <span className="subreddit">r/whatsapp</span>
                    <span className="post-date">8 months ago</span>
                  </div>
                  <div className="post-stats">9 upvotes · 3 comments</div>
                </div>
                <div className="post-content">
                  <h4>"WhatsApp should start multiple profile photo"</h4>
                  <p>"My close circle should see one photo, other contacts see another."</p>
                  <div className="reddit-answer">Top answer: [deleted]</div>
                </div>
              </div>
            </div>
            <div style={{
              textAlign: 'center',
              marginTop: '48px',
              paddingTop: '32px',
              borderTop: '1px solid rgba(37,211,102,0.2)'
            }}>
              <span style={{
                fontSize: 'clamp(24px, 4vw, 36px)',
                fontWeight: '800',
                color: '#25D366',
                letterSpacing: '-0.5px'
              }}>Until now.</span>
              <div style={{marginTop: '24px'}}>
                <button
                  className="btn btn-primary"
                  onClick={() => window.open('https://chromewebstore.google.com/detail/dualprofile/mdlhdncmaeepcejdbpnjpjlmagmmpkpc', '_blank')}
                  style={{fontSize: '18px', padding: '14px 32px'}}
                >
                  Add to Chrome — It's Free
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="how-it-works">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Set up once with someone. Works automatically.</h2>
              <p className="section-subtitle">
                Three steps and you're done — forever.
              </p>
            </div>
            <div className="steps-grid">
              <div className="step-card glass-card animate-on-scroll">
                <div className="step-number">1</div>
                <h3 className="step-title">You install DualProfile and upload your photos.</h3>
                <p className="step-description">One for work. One for life.</p>
              </div>
              <div className="step-card glass-card animate-on-scroll">
                <div className="step-number">2</div>
                <h3 className="step-title">You assign which photo each contact sees.</h3>
                <p className="step-description">Takes about 2 minutes.</p>
              </div>
              <div className="step-card glass-card animate-on-scroll">
                <div className="step-number">3</div>
                <h3 className="step-title">They install too — your photo switches automatically.</h3>
                <p className="step-description">No extra steps once they're set up.</p>
              </div>
            </div>
            <div style={{
              marginTop: '48px',
              background: 'rgba(37,211,102,0.07)',
              border: '1px solid rgba(37,211,102,0.25)',
              borderRadius: '16px',
              padding: '28px 32px',
              display: 'flex',
              flexWrap: 'wrap' as const,
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '16px'
            }}>
              <p style={{margin: 0, color: '#d1d5db', fontSize: '1rem', lineHeight: '1.6', flex: '1 1 300px'}}>
                <strong style={{color: '#ffffff'}}>DualProfile works when both people have it installed.</strong><br/>
                Send someone the link — setup takes 3 minutes.
              </p>
              <button
                style={{
                  background: 'transparent',
                  border: '1px solid rgba(37,211,102,0.5)',
                  color: '#25D366',
                  padding: '10px 24px',
                  borderRadius: '8px',
                  fontSize: '0.95rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap' as const,
                  transition: 'all 0.2s ease',
                  flexShrink: 0
                }}
                onClick={() => {
                  navigator.clipboard.writeText('https://chromewebstore.google.com/detail/dualprofile/mdlhdncmaeepcejdbpnjpjlmagmmpkpc');
                  const btn = document.activeElement as HTMLButtonElement;
                  if (btn) { btn.textContent = 'Copied!'; setTimeout(() => { btn.textContent = 'Copy install link'; }, 2500); }
                }}
              >
                Copy install link
              </button>
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
                    <p>Real-time profile switching now live</p>
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
        <section id="pricing" className="features" style={{paddingTop: '2rem'}}>
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Simple Pricing</h2>
              <p className="section-subtitle">Start free. Upgrade when you're ready.</p>
            </div>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '1.5rem',
              maxWidth: '1100px',
              margin: '0 auto'
            }}>
              {/* Free */}
              <div className="glass-card" style={{padding: '2rem', textAlign: 'center'}}>
                <h3 style={{fontSize: '1.25rem', fontWeight: '700', marginBottom: '0.5rem'}}>Free</h3>
                <p style={{color: '#9ca3af', fontSize: '0.9rem', marginBottom: '1.5rem'}}>Get started, no card needed</p>
                <div style={{fontSize: '2.5rem', fontWeight: '800', color: '#25D366', marginBottom: '0.25rem'}}>£0</div>
                <p style={{color: '#9ca3af', fontSize: '0.85rem', marginBottom: '1.5rem'}}>forever</p>
                <ul style={{listStyle: 'none', padding: 0, marginBottom: '2rem', textAlign: 'left'}}>
                  {['Up to 2 contacts', 'Preview mode', 'P2P photo sync', 'Chrome & Edge support'].map(f => (
                    <li key={f} style={{padding: '0.5rem 0', borderBottom: '1px solid rgba(255,255,255,0.06)', color: '#d1d5db', display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                      <span style={{color: '#25D366', fontWeight: '700'}}>✓</span> {f}
                    </li>
                  ))}
                </ul>
                <button className="btn btn-outline" style={{width: '100%'}}
                  onClick={() => window.open('https://chromewebstore.google.com/detail/dualprofile/mdlhdncmaeepcejdbpnjpjlmagmmpkpc', '_blank')}>
                  Add to Chrome
                </button>
              </div>

              {/* Pro */}
              <div className="glass-card glow-primary" style={{
                padding: '2rem', textAlign: 'center',
                border: '1px solid rgba(37,211,102,0.4)', position: 'relative'
              }}>
                <div style={{
                  position: 'absolute', top: 0, right: 0,
                  background: '#25D366', color: '#000',
                  fontSize: '0.75rem', fontWeight: '700',
                  padding: '4px 14px', borderBottomLeftRadius: '8px', borderTopRightRadius: '12px'
                }}>POPULAR</div>
                <h3 style={{fontSize: '1.25rem', fontWeight: '700', marginBottom: '0.5rem'}}>Pro</h3>
                <p style={{color: '#9ca3af', fontSize: '0.9rem', marginBottom: '1.5rem'}}>For power users</p>
                <div style={{fontSize: '2.5rem', fontWeight: '800', color: '#25D366', marginBottom: '0.25rem'}}>£9.99</div>
                <p style={{color: '#9ca3af', fontSize: '0.85rem', marginBottom: '1.5rem'}}>per month</p>
                <ul style={{listStyle: 'none', padding: 0, marginBottom: '2rem', textAlign: 'left'}}>
                  {['Unlimited contacts', 'Preview mode', 'P2P photo sync', 'Priority support', 'All future features'].map(f => (
                    <li key={f} style={{padding: '0.5rem 0', borderBottom: '1px solid rgba(255,255,255,0.06)', color: '#d1d5db', display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                      <span style={{color: '#25D366', fontWeight: '700'}}>✓</span> {f}
                    </li>
                  ))}
                </ul>
                <button className="btn btn-primary" style={{width: '100%'}}
                  onClick={() => window.open('https://chromewebstore.google.com/detail/dualprofile/mdlhdncmaeepcejdbpnjpjlmagmmpkpc', '_blank')}>
                  Get Pro
                </button>
              </div>

              {/* Annual */}
              <div className="glass-card" style={{
                padding: '2rem', textAlign: 'center',
                border: '1px solid rgba(37,211,102,0.2)', position: 'relative'
              }}>
                <div style={{
                  position: 'absolute', top: 0, right: 0,
                  background: 'rgba(37,211,102,0.15)', color: '#25D366',
                  fontSize: '0.75rem', fontWeight: '700',
                  padding: '4px 14px', borderBottomLeftRadius: '8px', borderTopRightRadius: '12px'
                }}>BEST VALUE</div>
                <h3 style={{fontSize: '1.25rem', fontWeight: '700', marginBottom: '0.5rem'}}>Annual</h3>
                <p style={{color: '#9ca3af', fontSize: '0.9rem', marginBottom: '1.5rem'}}>Save vs monthly</p>
                <div style={{fontSize: '2.5rem', fontWeight: '800', color: '#25D366', marginBottom: '0.25rem'}}>£59</div>
                <p style={{color: '#9ca3af', fontSize: '0.85rem', marginBottom: '1.5rem'}}>per year · ~£4.92/mo</p>
                <ul style={{listStyle: 'none', padding: 0, marginBottom: '2rem', textAlign: 'left'}}>
                  {['Unlimited contacts', 'Preview mode', 'P2P photo sync', 'Priority support', 'All future features'].map(f => (
                    <li key={f} style={{padding: '0.5rem 0', borderBottom: '1px solid rgba(255,255,255,0.06)', color: '#d1d5db', display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                      <span style={{color: '#25D366', fontWeight: '700'}}>✓</span> {f}
                    </li>
                  ))}
                </ul>
                <button className="btn btn-outline" style={{width: '100%'}}
                  onClick={() => window.open('https://chromewebstore.google.com/detail/dualprofile/mdlhdncmaeepcejdbpnjpjlmagmmpkpc', '_blank')}>
                  Get Annual
                </button>
              </div>

              {/* Lifetime */}
              <div className="glass-card" style={{padding: '2rem', textAlign: 'center'}}>
                <h3 style={{fontSize: '1.25rem', fontWeight: '700', marginBottom: '0.5rem'}}>Lifetime</h3>
                <p style={{color: '#9ca3af', fontSize: '0.9rem', marginBottom: '1.5rem'}}>Pay once, own it forever</p>
                <div style={{fontSize: '2.5rem', fontWeight: '800', color: '#25D366', marginBottom: '0.25rem'}}>£79</div>
                <p style={{color: '#9ca3af', fontSize: '0.85rem', marginBottom: '1.5rem'}}>one-time</p>
                <ul style={{listStyle: 'none', padding: 0, marginBottom: '2rem', textAlign: 'left'}}>
                  {['Unlimited contacts', 'Preview mode', 'P2P photo sync', 'Priority support', 'All future features', 'No recurring fees'].map(f => (
                    <li key={f} style={{padding: '0.5rem 0', borderBottom: '1px solid rgba(255,255,255,0.06)', color: '#d1d5db', display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                      <span style={{color: '#25D366', fontWeight: '700'}}>✓</span> {f}
                    </li>
                  ))}
                </ul>
                <button className="btn btn-outline" style={{width: '100%'}}
                  onClick={() => window.open('https://chromewebstore.google.com/detail/dualprofile/mdlhdncmaeepcejdbpnjpjlmagmmpkpc', '_blank')}>
                  Get Lifetime
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="early-access" className="early-access">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">The feature WhatsApp never built.</h2>
              <p className="section-subtitle">
                Free to start. Works on WhatsApp Web in Chrome and Edge.
              </p>
            </div>
            <div className="early-access-card glass-card">
              <button 
                className="btn btn-primary btn-lg"
                onClick={() => window.open('https://chromewebstore.google.com/detail/dualprofile/mdlhdncmaeepcejdbpnjpjlmagmmpkpc', '_blank')}
              >
                Add to Chrome — It's Free
              </button>
              <p style={{marginTop: '12px', fontSize: '14px', color: '#9ca3af'}}>
                Free plan includes 2 contacts · No credit card needed
              </p>
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
                No data leaves your device — all control is local.
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
            <h2 className="modal-title">Install DualProfile</h2>
            <p className="modal-subtitle">
              Free to start. Takes 2 minutes to set up. Works on WhatsApp Web in Chrome and Edge.
            </p>
            <button 
              className="btn btn-primary btn-full"
              onClick={() => {
                window.open('https://chromewebstore.google.com/detail/dualprofile/mdlhdncmaeepcejdbpnjpjlmagmmpkpc', '_blank');
                setIsModalOpen(false);
                showToast("Opening Chrome Web Store...", "Add DualProfile to Chrome to get started.");
              }}
            >
              Add to Chrome — It's Free
            </button>
            <p className="modal-privacy">
              🔒 Free plan includes 2 contacts. No credit card needed.
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
