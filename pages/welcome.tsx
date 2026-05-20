import Head from 'next/head';

export default function Welcome() {
  return (
    <>
      <Head>
        <title>You're in — DualProfile</title>
        <meta name="description" content="Your DualProfile subscription is confirmed. Install the extension and get started." />
        <meta name="robots" content="noindex" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <div className="page">
        {/* Navbar */}
        <nav className="navbar">
          <div className="navbar-container">
            <div className="logo">
              <img src="/dualprofile-logo.png" alt="DualProfile" width="32" height="32" />
              <span className="logo-text">DualProfile</span>
            </div>
          </div>
        </nav>

        {/* Main */}
        <main className="main">
          <div className="card">

            {/* Checkmark */}
            <div className="check-wrap">
              <div className="check-ring">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <polyline points="8,21 16,29 32,13" stroke="#25D366" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>

            <h1 className="title">You're in.</h1>
            <p className="subtitle">
              Your DualProfile subscription is confirmed.<br />
              One thing left to do — install the extension.
            </p>

            {/* Steps */}
            <div className="steps">
              <div className="step">
                <div className="step-num">1</div>
                <div className="step-text">
                  <strong>Add DualProfile to Chrome</strong>
                  <span>Click the button below — takes 10 seconds</span>
                </div>
              </div>
              <div className="step">
                <div className="step-num">2</div>
                <div className="step-text">
                  <strong>Upload your two photos</strong>
                  <span>Professional for work, casual for everyone else</span>
                </div>
              </div>
              <div className="step">
                <div className="step-num">3</div>
                <div className="step-text">
                  <strong>Send the link to your first contact</strong>
                  <span>They install too — then it's automatic from there</span>
                </div>
              </div>
            </div>

            {/* CTA */}
            <a
              href="https://chromewebstore.google.com/detail/dualprofile/mdlhdncmaeepcejdbpnjpjlmagmmpkpc"
              target="_blank"
              rel="noreferrer"
              className="cta-btn"
            >
              Add to Chrome — Install Now
            </a>

            <p className="note">
              Questions? Visit <a href="https://vivaup.org/support" className="link">vivaup.org/support</a> or reply to your confirmation email.
            </p>
          </div>
        </main>
      </div>

      <style jsx global>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        body {
          font-family: 'Inter', sans-serif;
          background: #0b0f0e;
          color: #f9fafb;
          min-height: 100vh;
        }

        .page {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          background: radial-gradient(ellipse at 50% 0%, rgba(37,211,102,0.08) 0%, transparent 65%);
        }

        /* Navbar */
        .navbar {
          border-bottom: 1px solid rgba(255,255,255,0.06);
          padding: 0 24px;
          height: 64px;
          display: flex;
          align-items: center;
        }
        .navbar-container {
          max-width: 1100px;
          width: 100%;
          margin: 0 auto;
        }
        .logo {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
        }
        .logo-text {
          font-size: 1.1rem;
          font-weight: 700;
          color: #f9fafb;
        }

        /* Main */
        .main {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 48px 24px;
        }

        .card {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 20px;
          padding: 48px 40px;
          max-width: 520px;
          width: 100%;
          text-align: center;
          box-shadow: 0 8px 40px rgba(0,0,0,0.3);
        }

        /* Check */
        .check-wrap {
          display: flex;
          justify-content: center;
          margin-bottom: 28px;
        }
        .check-ring {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: rgba(37,211,102,0.1);
          border: 2px solid rgba(37,211,102,0.35);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 32px rgba(37,211,102,0.15);
        }

        /* Text */
        .title {
          font-size: clamp(2rem, 5vw, 2.8rem);
          font-weight: 800;
          letter-spacing: -0.5px;
          margin-bottom: 12px;
          color: #ffffff;
        }
        .subtitle {
          font-size: 1rem;
          color: #9ca3af;
          line-height: 1.65;
          margin-bottom: 36px;
        }

        /* Steps */
        .steps {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-bottom: 36px;
          text-align: left;
        }
        .step {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 12px;
          padding: 16px;
        }
        .step-num {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: rgba(37,211,102,0.15);
          border: 1px solid rgba(37,211,102,0.3);
          color: #25D366;
          font-size: 0.8rem;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 2px;
        }
        .step-text {
          display: flex;
          flex-direction: column;
          gap: 3px;
        }
        .step-text strong {
          font-size: 0.95rem;
          color: #f9fafb;
          font-weight: 600;
        }
        .step-text span {
          font-size: 0.85rem;
          color: #6b7280;
        }

        /* CTA */
        .cta-btn {
          display: inline-block;
          background: linear-gradient(135deg, #25D366, #128C7E);
          color: #000;
          font-weight: 700;
          font-size: 1rem;
          padding: 16px 36px;
          border-radius: 50px;
          text-decoration: none;
          width: 100%;
          transition: opacity 0.2s ease, transform 0.2s ease;
          box-shadow: 0 4px 24px rgba(37,211,102,0.25);
          margin-bottom: 20px;
        }
        .cta-btn:hover {
          opacity: 0.9;
          transform: translateY(-1px);
        }

        .note {
          font-size: 0.82rem;
          color: #6b7280;
        }
        .link {
          color: #25D366;
          text-decoration: none;
        }
        .link:hover { text-decoration: underline; }

        @media (max-width: 500px) {
          .card { padding: 32px 20px; }
        }
      `}</style>
    </>
  );
}
