import React from 'react';
import Head from 'next/head';

// Per-Contact Photos, moved off the homepage on 2026-10-14 so the homepage
// sells Scheduled Photos only. Linked from the homepage footer and from the
// Pro pricing card. English only for now.

const STORE = 'https://chromewebstore.google.com/detail/dualprofile/mdlhdncmaeepcejdbpnjpjlmagmmpkpc';
const VIDEO = 'mt8QzcG0_XQ';

export default function PerContact() {
  return (
    <>
      <Head>
        <title>Per-Contact Photos (experimental) | DualProfile</title>
        <meta name="description" content="Show a different WhatsApp profile photo to a specific contact. Both people need DualProfile installed. Works on WhatsApp Web." />
        <link rel="canonical" href="https://vivaup.org/per-contact" />
        <link rel="icon" href="/favicon.png" />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "VideoObject",
          "name": "DualProfile: Per-Contact Photos and Preview Mode",
          "description": "See how DualProfile shows a different WhatsApp profile photo to a specific contact on WhatsApp Web.",
          "thumbnailUrl": `https://img.youtube.com/vi/${VIDEO}/maxresdefault.jpg`,
          "uploadDate": "2026-05-01",
          "contentUrl": `https://www.youtube.com/watch?v=${VIDEO}`,
          "embedUrl": `https://www.youtube.com/embed/${VIDEO}`
        })}} />
        <style dangerouslySetInnerHTML={{ __html: `
          body { font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                 background-color: #0b0b0f; color: #fff; margin: 0; padding: 0; line-height: 1.7; font-size: 16px; }
          .pc-wrap { max-width: 800px; margin: 0 auto; padding: 2rem 2rem 3rem; }
          .pc-badge { display: inline-block; background: rgba(245,158,11,0.12); color: #f59e0b;
                      border: 1px solid rgba(245,158,11,0.4); font-size: 12px; font-weight: 800;
                      padding: 3px 12px; border-radius: 12px; letter-spacing: 0.5px; }
          .pc-h1 { font-size: clamp(30px, 5vw, 44px); font-weight: 800; line-height: 1.15; margin: 14px 0 10px; }
          .pc-lead { color: #d1d5db; font-size: 1.1rem; margin: 0 0 1.5rem; }
          .pc-card { background: linear-gradient(135deg, rgba(37,211,102,0.05), rgba(18,140,126,0.05));
                     border: 1px solid rgba(37,211,102,0.2); border-radius: 16px; padding: 2rem; margin: 2rem 0; }
          .pc-warn { border-left: 3px solid #f59e0b; }
          .pc-h2 { font-size: 1.5rem; font-weight: 700; color: #25D366; margin: 0 0 1.25rem; line-height: 1.3; }
          .pc-p { color: #d1d5db; margin: 0 0 1rem; }
          .pc-list { list-style: none; padding: 0; margin: 0; }
          .pc-list li { color: #d1d5db; padding: 0.45rem 0 0.45rem 1.75rem; position: relative; }
          .pc-list li:before { content: "→"; position: absolute; left: 0; color: #25D366; font-weight: 700; }
          .pc-step { display: flex; align-items: flex-start; gap: 1rem; padding: 0.75rem 0; }
          .pc-num { flex: none; display: inline-flex; align-items: center; justify-content: center; width: 32px; height: 32px;
                    background: #25D366; color: #000; border-radius: 50%; font-weight: 700; font-size: 0.9rem; }
          .pc-step-t { font-weight: 600; color: #fff; }
          .pc-step-d { color: #9ca3af; }
          .pc-video { position: relative; padding-bottom: 56.25%; height: 0; margin-top: 1rem; }
          .pc-video iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: 0; border-radius: 12px; }
          .pc-q { font-weight: 600; color: #25D366; margin-bottom: 0.35rem; }
          .pc-a { color: #d1d5db; margin: 0 0 1.25rem; }
          .pc-reddit { background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-radius: 12px;
                       padding: 1rem 1.25rem; margin-bottom: 0.75rem; }
          .pc-reddit-q { color: #fff; font-weight: 600; }
          .pc-reddit-a { color: #9ca3af; font-size: 0.95rem; }
          .pc-btn { display: inline-block; background: #25D366; color: #000; font-weight: 700; padding: 14px 28px;
                    border-radius: 50px; text-decoration: none; }
          .pc-back { color: #9ca3af; text-decoration: none; }
          .pc-back:hover { color: #25D366; }
          @media (max-width: 768px) { .pc-wrap { padding: 1.5rem 1rem 2.5rem; } .pc-card { padding: 1.5rem; } }
        `}} />
      </Head>

      <nav style={{background:'#0b0b0f',borderBottom:'1px solid rgba(255,255,255,0.06)',padding:'0 24px',height:'64px',display:'flex',alignItems:'center',justifyContent:'space-between',position:'sticky',top:0,zIndex:100}}>
        <a href="/" style={{display:'flex',alignItems:'center',gap:'10px',textDecoration:'none'}}>
          <img src="/dualprofile-logo.png" alt="DualProfile" width="32" height="32" />
          <span style={{fontSize:'1.1rem',fontWeight:700,color:'#fff'}}>DualProfile</span>
        </a>
        <a href="/" style={{color:'#9ca3af',fontSize:'14px',textDecoration:'none'}}>&larr; Scheduled Photos</a>
      </nav>

      <main className="pc-wrap">
        <span className="pc-badge">EXPERIMENTAL</span>
        <h1 className="pc-h1">Per-Contact Photos</h1>
        <p className="pc-lead">Show a different WhatsApp profile photo to a specific contact.</p>
        <p className="pc-p">
          Assign Photo 1 or Photo 2 to any contact. When that contact also has DualProfile installed,
          they see the photo you chose for them. Everyone else keeps seeing your normal WhatsApp photo.
        </p>

        <section className="pc-card pc-warn">
          <h2 className="pc-h2" style={{color:'#f59e0b'}}>What to know first</h2>
          <ul className="pc-list">
            <li>Both people need DualProfile installed.</li>
            <li>It works on WhatsApp Web only, not in the mobile app.</li>
            <li>Group chats are not supported yet.</li>
            <li>Using DualProfile in a second browser? Link it from Settings, then &ldquo;Link another browser&rdquo;.</li>
          </ul>
        </section>

        <section className="pc-card">
          <h2 className="pc-h2">How it works</h2>
          <div className="pc-step"><span className="pc-num">1</span><div><div className="pc-step-t">Install DualProfile and upload your photos.</div><div className="pc-step-d">One for work, one for life.</div></div></div>
          <div className="pc-step"><span className="pc-num">2</span><div><div className="pc-step-t">Assign which photo each contact sees.</div><div className="pc-step-d">Takes about two minutes.</div></div></div>
          <div className="pc-step"><span className="pc-num">3</span><div><div className="pc-step-t">They install it too, and see the photo you chose.</div><div className="pc-step-d">No extra steps once you are both set up.</div></div></div>
        </section>

        <section className="pc-card">
          <h2 className="pc-h2">Preview Mode</h2>
          <p className="pc-p">Don&rsquo;t want to wait for your contacts to install? Preview Mode shows exactly how you&rsquo;d appear to anyone, straight away.</p>
          <div className="pc-video">
            <iframe src={`https://www.youtube.com/embed/${VIDEO}?rel=0&modestbranding=1`} title="DualProfile Preview Mode"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen loading="lazy"></iframe>
          </div>
          <p className="pc-p" style={{marginTop:'1rem',fontSize:'0.9rem',color:'#9ca3af'}}>This works entirely on WhatsApp Web. No chat data is stored.</p>
        </section>

        <section className="pc-card">
          <h2 className="pc-h2">Pro for Per-Contact Photos</h2>
          <p className="pc-p">Included in the same one-time £9.99 Pro. No subscription.</p>
          <ul className="pc-list">
            <li><strong style={{color:'#fff'}}>Bulk Contact Assignment.</strong> Assign a photo to several contacts in one go.</li>
            <li><strong style={{color:'#fff'}}>Export &amp; Import.</strong> Back up your contact assignments as a file and restore them on any device.</li>
            <li><strong style={{color:'#fff'}}>Multi-Device Sync.</strong> Your preferences sync across your devices.</li>
          </ul>
        </section>

        <section className="pc-card">
          <h2 className="pc-h2">Questions</h2>
          <div className="pc-q">What if my contact doesn&rsquo;t install DualProfile?</div>
          <p className="pc-a">They keep seeing your normal WhatsApp photo. Nothing breaks or looks wrong on their side.</p>
          <div className="pc-q">Does it work in the mobile app?</div>
          <p className="pc-a">No. Per-contact photos show on WhatsApp Web only. For a photo everyone sees everywhere, use <a href="/" style={{color:'#25D366'}}>Scheduled Photos</a>.</p>
          <div className="pc-q">Is my data safe?</div>
          <p className="pc-a" style={{marginBottom:0}}>We never read your messages or access your chats. Photos you assign are synced so only the contacts you choose can see them.</p>
        </section>

        <section className="pc-card">
          <h2 className="pc-h2">The answer used to be no</h2>
          <div className="pc-reddit"><div className="pc-reddit-q">&ldquo;Is there a way to show different profile pictures to different people?&rdquo;</div><div className="pc-reddit-a">r/whatsapp, top answer: Nope.</div></div>
          <div className="pc-reddit"><div className="pc-reddit-q">&ldquo;Different profile picture between web and app, is it possible?&rdquo;</div><div className="pc-reddit-a">r/whatsapp, top answer: Only if you have two phone numbers.</div></div>
          <div className="pc-reddit" style={{borderLeft:'4px solid #FF4500'}}>
            <div className="pc-reddit-q" style={{fontStyle:'italic'}}>&ldquo;having your boss see something professional while mates get the real you is pretty handy&rdquo;</div>
            <div className="pc-reddit-a">Competitive_Log_8093, r/DigitalPrivacy</div>
          </div>
        </section>

        <div style={{textAlign:'center',marginTop:'2.5rem'}}>
          <a className="pc-btn" href={STORE} target="_blank" rel="noopener noreferrer">Install free</a>
          <p style={{marginTop:'1rem'}}><a className="pc-back" href="/">&larr; Back to Scheduled Photos</a></p>
        </div>

        <footer style={{marginTop:'3rem',paddingTop:'1.5rem',borderTop:'1px solid #374151',textAlign:'center',color:'#6b7280',fontSize:'0.85rem'}}>
          <p style={{margin:'0 0 0.5rem'}}>© 2026 DualProfile. <a href="/privacy" className="pc-back">Privacy Policy</a> · <a href="mailto:edwin.dualprofile@gmail.com" className="pc-back">Support</a></p>
          <p style={{margin:0,fontSize:'0.8rem'}}>DualProfile is an independent product and is not affiliated with WhatsApp or Meta.</p>
        </footer>
      </main>
    </>
  );
}
