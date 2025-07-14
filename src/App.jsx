import React from 'react';

const COLORS = {
  bg: '#101114',
  text: '#F3F4F6',
  accent: '#2F79FF',
  accent2: '#66FFC8',
  muted: '#A3A3A3',
  block: '#181A1B',
  btn: '#23232a',
  btnText: '#F3F4F6',
  btnHover: '#23232a',
  dot: '#2F79FF',
};

function DevNotice() {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 12,
      background: COLORS.block,
      borderRadius: 12,
      padding: '16px 24px',
      margin: '32px 0 40px 0',
      fontSize: '1.08rem',
      color: COLORS.muted,
      fontWeight: 500,
      maxWidth: 340,
      boxShadow: '0 2px 16px #0002',
    }}>
      <span style={{
        width: 12, height: 12, borderRadius: '50%', background: COLORS.dot,
        display: 'inline-block', marginRight: 2,
        animation: 'blink 1.2s infinite',
      }} />
      <span>Сайт в разработке</span>
      <style>{`@keyframes blink { 0%,100%{opacity:1;} 50%{opacity:0.2;} }`}</style>
    </div>
  );
}

export default function App() {
  return (
    <main style={{
      minHeight: '100vh',
      background: COLORS.bg,
      fontFamily: 'Inter, system-ui, sans-serif',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'stretch',
    }}>
      <div style={{
        maxWidth: 600,
        margin: '0 auto',
        padding: '64px 24px 0 24px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
      }}>
        <h1 style={{
          fontSize: '3.2rem',
          fontWeight: 700,
          margin: 0,
          letterSpacing: '-1px',
          color: COLORS.text,
          lineHeight: 1.08,
        }}>Upense</h1>
        <div style={{
          fontSize: '1.7rem',
          fontWeight: 600,
          color: COLORS.accent,
          margin: '18px 0 0 0',
          lineHeight: 1.15,
        }}>
          Elevating Mobile Ideas.
        </div>
        <DevNotice />
        <div style={{
          marginTop: 48,
          background: COLORS.block,
          borderRadius: 14,
          padding: '32px 28px',
          width: '100%',
          boxShadow: '0 2px 16px #0002',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: 18,
        }}>
          <div style={{
            fontSize: '1.15rem',
            color: COLORS.muted,
            fontWeight: 500,
            marginBottom: 6,
          }}>
            Ready to launch your app?
          </div>
          <a
            href="mailto:hello@upense.com"
            style={{
              display: 'inline-block',
              background: COLORS.btn,
              color: COLORS.btnText,
              fontWeight: 600,
              fontSize: '1.08rem',
              borderRadius: 24,
              padding: '0.8em 2em',
              textDecoration: 'none',
              border: `1.5px solid ${COLORS.accent}`,
              transition: 'background 0.2s, color 0.2s',
            }}
            onMouseOver={e => e.currentTarget.style.background = COLORS.accent}
            onMouseOut={e => e.currentTarget.style.background = COLORS.btn}
          >
            Contact Us
          </a>
        </div>
      </div>
    </main>
  );
} 