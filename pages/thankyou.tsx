import React from 'react';
import Head from 'next/head';

export default function ThankYou() {
  return (
    <>
      <Head>
        <title>Email Confirmed - DualProfile Early Access</title>
        <meta name="description" content="You're officially in the DualProfile early access list." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <div style={{ 
        minHeight: '100vh', 
        backgroundColor: '#0b0b0f', 
        color: '#ffffff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        padding: '2rem',
        fontFamily: 'Inter, sans-serif'
      }}>
        <div style={{
          width: '80px',
          height: '80px',
          background: 'linear-gradient(135deg, #10b981, #059669)',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '2rem',
          fontSize: '2rem'
        }}>
          ✓
        </div>
        
        <h1 style={{ 
          fontSize: '3rem', 
          fontWeight: 700, 
          textAlign: 'center',
          marginBottom: '1rem',
          background: 'linear-gradient(135deg, #ffffff, #10b981)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>
          ✅ Email Confirmed. You're Officially In.
        </h1>
        
        <p style={{ 
          fontSize: '1.25rem', 
          color: '#9ca3af', 
          textAlign: 'center',
          marginBottom: '3rem',
          maxWidth: '600px'
        }}>
          You're now on the DualProfile early access list.
          <br />
          What happens next? Read below.
        </p>

        <div style={{
          backgroundColor: 'rgba(255, 255, 255, 0.05)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '1rem',
          padding: '2rem',
          maxWidth: '800px',
          width: '100%'
        }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>📅 Your Early Access Timeline</h2>
          <p style={{ color: '#9ca3af', marginBottom: '2rem' }}>We'll only email you for these three milestones. No spam.</p>
          
          <div style={{ display: 'grid', gap: '2rem' }}>
            <div>
              <h3 style={{ color: '#10b981', marginBottom: '0.5rem' }}>Week 1-2: Chrome Web Store Approval</h3>
              <p style={{ color: '#9ca3af' }}>You'll get the install link first. Be among the first to try DualProfile on WhatsApp Web.</p>
            </div>
            
            <div>
              <h3 style={{ color: '#10b981', marginBottom: '0.5rem' }}>Week 2-3: Founder Pricing Opens</h3>
              <p style={{ color: '#9ca3af' }}>$29 lifetime for the first 500 only. Lock in your exclusive rate before public pricing.</p>
            </div>
            
            <div>
              <h3 style={{ color: '#10b981', marginBottom: '0.5rem' }}>Week 4+: P2P Sync Launch</h3>
              <p style={{ color: '#9ca3af' }}>Real-time profile switching arrives. Your contacts will see different photos instantly.</p>
            </div>
          </div>
        </div>

        <div style={{ marginTop: '3rem', textAlign: 'center' }}>
          <a 
            href="https://dualprofile-landing.vercel.app/" 
            style={{ 
              color: '#10b981', 
              textDecoration: 'none',
              fontSize: '1.1rem'
            }}
          >
            ← Back to Landing Page
          </a>
        </div>
      </div>
    </>
  );
}
