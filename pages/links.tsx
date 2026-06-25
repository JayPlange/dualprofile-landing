import Head from "next/head";
import { photoBase64 } from "../data/photoData";

export default function LinksPage() {
  return (
    <>
      <Head>
        <title>Edwin Plange</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500&family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </Head>

      <style jsx global>{`
        :root {
          --ink: #0b1220;
          --parchment: #f7f4ed;
          --brass: #b8923d;
          --brass-soft: #d9c28c;
          --slate: #707a8a;
          --slate-light: #a4acba;
          --line: rgba(247, 244, 237, 0.12);
        }

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          background: var(--ink);
          background-image: radial-gradient(
            circle at 50% 0%,
            rgba(184, 146, 61, 0.08),
            transparent 55%
          );
          color: var(--parchment);
          font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        }
      `}</style>

      <main className="lh-wrap">
        <div className="lh-card">
          <div className="lh-avatar-wrap">
            <div className="lh-avatar-ring" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="lh-avatar" src={`data:image/jpeg;base64,${photoBase64}`} alt="Edwin Plange" />
          </div>

          <h1 className="lh-name">Edwin Plange</h1>
          <div className="lh-tick" />
          <div className="lh-title">Founder &amp; Forward Deployed Engineer</div>
          <p className="lh-subtitle">
            Building DualProfile. Ex-KPMG. Helping teams ship AI-driven workflows that hold up in
            production.
          </p>
          <p className="lh-verse">&ldquo;The wealth of the nations shall come to you.&rdquo; &mdash; Isaiah 60:5</p>

          <nav className="lh-links">
            <a className="lh-row" href="https://vivaup.org/" target="_blank" rel="noopener noreferrer">
              <div className="lh-row-left">
                <svg className="lh-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M3 12h18M12 3c2.5 2.7 3.8 6 3.8 9s-1.3 6.3-3.8 9c-2.5-2.7-3.8-6-3.8-9s1.3-6.3 3.8-9z" />
                </svg>
                <div className="lh-row-text">
                  <span className="lh-row-label">Landing Page</span>
                  <span className="lh-row-sub">vivaup.org</span>
                </div>
              </div>
              <span className="lh-arrow">&#8599;</span>
            </a>

            <a
              className="lh-row"
              href="https://www.linkedin.com/in/edwin-plange/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="lh-row-left">
                <svg className="lh-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <rect x="3" y="3" width="18" height="18" rx="2.5" />
                  <path d="M7.5 10.5v6M7.5 7.8v.01M12 16.5v-4c0-1.4 1-2.2 2.2-2.2 1.2 0 1.8.8 1.8 2.2v4" />
                </svg>
                <div className="lh-row-text">
                  <span className="lh-row-label">LinkedIn</span>
                  <span className="lh-row-sub">in/edwin-plange</span>
                </div>
              </div>
              <span className="lh-arrow">&#8599;</span>
            </a>

            <a className="lh-row" href="https://x.com/JusticePlange" target="_blank" rel="noopener noreferrer">
              <div className="lh-row-left">
                <svg className="lh-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M4 4l8.5 11.2L4.5 20H7l6-5.8 5 5.8h3l-9-10.6L19.5 4H17l-5.5 5.3L7 4H4z" />
                </svg>
                <div className="lh-row-text">
                  <span className="lh-row-label">X (Twitter)</span>
                  <span className="lh-row-sub">@JusticePlange</span>
                </div>
              </div>
              <span className="lh-arrow">&#8599;</span>
            </a>

            <a
              className="lh-row"
              href="https://www.youtube.com/@edwin.dualprofile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="lh-row-left">
                <svg className="lh-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <rect x="2.5" y="6" width="19" height="12" rx="3" />
                  <path d="M10.5 9.5l5 2.5-5 2.5v-5z" fill="currentColor" stroke="none" />
                </svg>
                <div className="lh-row-text">
                  <span className="lh-row-label">YouTube</span>
                  <span className="lh-row-sub">@edwin.dualprofile</span>
                </div>
              </div>
              <span className="lh-arrow">&#8599;</span>
            </a>
          </nav>

          <div className="lh-footer">
            <div className="lh-footer-loc">Accra, Ghana</div>
            <div className="lh-footer-ex">Ex&#8209;KPMG</div>
          </div>
        </div>
      </main>

      <style jsx>{`
        .lh-wrap {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 32px 18px;
        }

        .lh-card {
          width: 100%;
          max-width: 420px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .lh-avatar-wrap {
          position: relative;
          width: 132px;
          height: 132px;
          margin-bottom: 22px;
        }

        .lh-avatar-ring {
          position: absolute;
          inset: -6px;
          border-radius: 50%;
          border: 1px solid var(--brass);
          opacity: 0.55;
        }

        .lh-avatar {
          width: 132px;
          height: 132px;
          border-radius: 50%;
          object-fit: cover;
          display: block;
          filter: saturate(0.96) contrast(1.03);
        }

        .lh-name {
          font-family: "Fraunces", Georgia, serif;
          font-optical-sizing: auto;
          font-weight: 500;
          font-size: 32px;
          letter-spacing: 0.2px;
          color: var(--parchment);
          text-align: center;
          line-height: 1.1;
        }

        .lh-tick {
          width: 36px;
          height: 2px;
          background: var(--brass);
          margin: 14px 0;
        }

        .lh-title {
          font-size: 13px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--brass-soft);
          text-align: center;
          font-weight: 500;
          margin-bottom: 4px;
        }

        .lh-subtitle {
          font-size: 13.5px;
          color: var(--slate-light);
          text-align: center;
          margin-bottom: 30px;
          max-width: 320px;
          line-height: 1.5;
        }

        .lh-verse {
          font-family: "Fraunces", Georgia, serif;
          font-style: italic;
          font-size: 13px;
          color: var(--slate-light);
          text-align: center;
          letter-spacing: 0.01em;
          margin-bottom: 34px;
        }

        .lh-links {
          width: 100%;
          border-top: 1px solid var(--line);
        }

        .lh-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 17px 4px;
          border-bottom: 1px solid var(--line);
          text-decoration: none;
          color: var(--parchment);
          transition: padding-left 0.2s ease, opacity 0.2s ease;
        }

        .lh-row:hover {
          padding-left: 8px;
          opacity: 0.92;
        }

        .lh-row-left {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .lh-icon {
          width: 18px;
          height: 18px;
          flex-shrink: 0;
          color: var(--brass-soft);
        }

        .lh-row-text {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .lh-row-label {
          font-size: 14.5px;
          font-weight: 500;
          color: var(--parchment);
        }

        .lh-row-sub {
          font-size: 11.5px;
          color: var(--slate);
          letter-spacing: 0.01em;
        }

        .lh-arrow {
          color: var(--slate);
          font-size: 15px;
          transition: transform 0.2s ease, color 0.2s ease;
        }

        .lh-row:hover .lh-arrow {
          transform: translateX(3px);
          color: var(--brass);
        }

        .lh-footer {
          margin-top: 36px;
          text-align: center;
        }

        .lh-footer-loc {
          font-size: 11.5px;
          color: var(--slate);
          letter-spacing: 0.04em;
        }

        .lh-footer-ex {
          font-size: 10.5px;
          color: var(--slate);
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin-top: 8px;
          opacity: 0.75;
        }

        @media (max-width: 360px) {
          .lh-name {
            font-size: 26px;
          }
        }
      `}</style>
    </>
  );
}
