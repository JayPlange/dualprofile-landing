import React from 'react';
import Head from 'next/head';

// Shared SEO pieces for the DualProfile site. One place for the site URL,
// the author, the breadcrumb trail and the footer links, so every page says
// the same thing and links to the same canonical URLs (no trailing slash,
// matching next.config.js trailingSlash: false).

export const SITE = 'https://vivaup.org';

// The real person behind DualProfile. Used in schema.org markup and in the
// visible "Made by" line.
export const AUTHOR = {
  '@type': 'Person',
  name: 'Edwin Plange',
  jobTitle: 'Software engineer and founder of DualProfile',
  address: { '@type': 'PostalAddress', addressLocality: 'Accra', addressCountry: 'GH' },
  url: 'https://vivaup.org/links',
  sameAs: [
    'https://edwinplange.vercel.app',
    'https://www.linkedin.com/in/edwin-plange',
    'https://github.com/JayPlange',
  ],
};

type Crumb = { name: string; path: string };

/** Visible breadcrumb trail plus matching BreadcrumbList structured data. */
export function Breadcrumbs({ trail }: { trail: Crumb[] }) {
  const items = [{ name: 'Home', path: '/' }, ...trail];
  const ld = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: SITE + (c.path === '/' ? '/' : c.path),
    })),
  };
  return (
    <>
      <Head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      </Head>
      <nav aria-label="Breadcrumb" style={{ fontSize: '0.85rem', color: '#9ca3af', margin: '0 0 1rem' }}>
        <ol style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
          {items.map((c, i) => {
            const last = i === items.length - 1;
            return (
              <li key={c.path} style={{ display: 'flex', gap: '6px' }}>
                {last ? (
                  <span aria-current="page" style={{ color: '#d1d5db' }}>{c.name}</span>
                ) : (
                  <>
                    <a href={c.path} style={{ color: '#9ca3af', textDecoration: 'underline', textUnderlineOffset: '3px' }}>{c.name}</a>
                    <span aria-hidden="true">/</span>
                  </>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}

/** Links every public page from every other one, plus who made it. */
export function SiteLinks() {
  const link = { color: '#9ca3af', textDecoration: 'none' as const };
  return (
    <div style={{ textAlign: 'center' as const, fontSize: '0.85rem', color: '#6b7280', marginTop: '1.5rem' }}>
      <p style={{ margin: '0 0 0.6rem', display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
        <a href="/" style={link}>Scheduled Photos</a>
        <a href="/per-contact" style={link}>Per-Contact Photos</a>
        <a href="/support" style={link}>Support</a>
        <a href="/privacy" style={link}>Privacy Policy</a>
      </p>
      <p style={{ margin: 0 }}>
        Made by <a href="/links" rel="author" style={{ ...link, textDecoration: 'underline', textUnderlineOffset: '3px' }}>Edwin Plange</a>, a software engineer in Accra, Ghana.
      </p>
    </div>
  );
}

/** Canonical URL and social URL for a page path such as "/support". */
export function Canonical({ path }: { path: string }) {
  const url = SITE + (path === '/' ? '/' : path);
  return (
    <Head>
      <link rel="canonical" href={url} key="canonical" />
      <meta property="og:url" content={url} key="og:url" />
    </Head>
  );
}
