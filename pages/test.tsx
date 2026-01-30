import React from 'react';
import Head from 'next/head';

export default function TestPage() {
  return (
    <>
      <Head>
        <title>Test Page</title>
      </Head>
      <div style={{ 
        minHeight: '100vh', 
        backgroundColor: '#0b0b0f', 
        color: '#ffffff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '2rem'
      }}>
        Test Page Working!
      </div>
    </>
  );
}
