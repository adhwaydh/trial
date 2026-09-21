import React, { useState } from 'react';
import { ChevronLeft, X } from 'lucide-react';

export default function FigmaWelcomeModal({ isOpen, onClose, onLoginSuccess }) {
  const [view, setView] = useState('welcome'); // 'welcome' or 'signin'
  const [username, setUsername] = useState('lithu.pl');
  const [password, setPassword] = useState('••••••••');

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: '#ffffff',
        zIndex: 200,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        overflow: 'hidden'
      }}
    >
      {/* VIEW 1: WELCOME SCREEN (Figure 2) */}
      {view === 'welcome' && (
        <>
          {/* Top Close Button */}
          <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '14px 18px' }}>
            <button
              onClick={onClose}
              style={{
                width: 32,
                height: 32,
                borderRadius: '50%',
                background: '#f1f5f9',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <X size={18} />
            </button>
          </div>

          {/* Center Brand Logo (Exact Figma Logo) */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', flex: 1 }}>
            {/* Cyan circle with graduation cap student */}
            <div
              style={{
                width: 100,
                height: 100,
                borderRadius: '50%',
                background: '#29b6f6',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 12,
                boxShadow: '0 8px 24px rgba(41, 182, 246, 0.35)'
              }}
            >
              <svg viewBox="0 0 60 60" width="60" height="60">
                {/* White graduation cap & student silhouette */}
                <path d="M30 14 L14 23 L30 32 L46 23 Z" fill="#ffffff" />
                <path d="M19 26 L19 36 C19 42 41 42 41 36 L41 26" fill="#ffffff" opacity="0.85" />
                <path d="M44 24 L44 38 L42 38 L42 24" fill="#ffffff" />
                <circle cx="30" cy="46" r="10" fill="#ffffff" />
              </svg>
            </div>

            {/* Logo text: peer/grid. */}
            <div style={{ fontSize: 32, fontWeight: 800, fontFamily: 'var(--font-heading)' }}>
              <span style={{ color: '#29b6f6' }}>peer</span>
              <span style={{ color: '#9e9e9e' }}>/grid.</span>
            </div>
          </div>

          {/* Bottom Curved Gray Container */}
          <div
            style={{
              background: '#d9d9d9',
              border: '1.5px solid #000',
              borderRadius: '40px 40px 0 0',
              padding: '30px 24px 34px',
              display: 'flex',
              flexDirection: 'column',
              gap: 16
            }}
          >
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 32, fontWeight: 900, color: '#000' }}>
              Welcome
            </h2>

            <p style={{ fontSize: 14, color: '#111827', fontWeight: 600, lineHeight: 1.45 }}>
              Connect with classmates, discover campus events, join study groups, and grow your college network—all in one place
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginTop: 10 }}>
              {/* Sign In Button */}
              <button
                onClick={() => setView('signin')}
                style={{
                  background: '#1e88e5',
                  color: '#fff',
                  border: '1.5px solid #000',
                  borderRadius: 30,
                  padding: '12px',
                  fontSize: 16,
                  fontWeight: 800,
                  cursor: 'pointer',
                  textAlign: 'center'
                }}
              >
                Sign In
              </button>

              {/* Sign Up Button */}
              <button
                onClick={() => {
                  onLoginSuccess();
                  onClose();
                }}
                style={{
                  background: '#ffffff',
                  color: '#000',
                  border: '1.5px solid #000',
                  borderRadius: 30,
                  padding: '12px',
                  fontSize: 16,
                  fontWeight: 800,
                  cursor: 'pointer',
                  textAlign: 'center'
                }}
              >
                Sign Up
              </button>
            </div>
          </div>
        </>
      )}

      {/* VIEW 2: SIGN IN SCREEN (Figure 1) */}
      {view === 'signin' && (
        <>
          {/* Header */}
          <div style={{ padding: '16px 20px 0' }}>
            <button
              onClick={() => setView('welcome')}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                padding: 0
              }}
            >
              <ChevronLeft size={30} color="#000" />
            </button>

            <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 36, fontWeight: 900, color: '#2563eb', marginTop: 12 }}>
              Sign In
            </h1>
            <p style={{ fontSize: 13, fontWeight: 700, color: '#000', marginTop: 4, lineHeight: 1.4, maxWidth: 300 }}>
              Sign in to peergrid to connect with campus enter your email,google account
            </p>
          </div>

          {/* Bottom Gray Container Card from Figure 1 */}
          <div
            style={{
              background: '#d9d9d9',
              border: '1.5px solid #000',
              borderRadius: '44px 44px 0 0',
              padding: '30px 24px 34px',
              display: 'flex',
              flexDirection: 'column',
              gap: 16
            }}
          >
            {/* Username field (pale pink/white rounded pill) */}
            <input
              type="text"
              placeholder="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={{
                background: '#faedec',
                border: 'none',
                borderRadius: 30,
                padding: '16px 22px',
                fontSize: 14,
                fontWeight: 600,
                color: '#334155',
                outline: 'none'
              }}
            />

            {/* Password field (pale pink/white rounded pill) */}
            <input
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                background: '#faedec',
                border: 'none',
                borderRadius: 30,
                padding: '16px 22px',
                fontSize: 14,
                fontWeight: 600,
                color: '#334155',
                outline: 'none'
              }}
            />

            <div style={{ textAlign: 'right' }}>
              <span style={{ fontSize: 12, fontWeight: 700, color: '#000', cursor: 'pointer' }}>
                Forget Password?
              </span>
            </div>

            {/* Black Sign In Pill Button */}
            <button
              onClick={() => {
                onLoginSuccess();
                onClose();
              }}
              style={{
                background: '#000000',
                color: '#ffffff',
                border: 'none',
                borderRadius: 30,
                padding: '14px',
                fontSize: 16,
                fontWeight: 800,
                cursor: 'pointer',
                textAlign: 'center',
                marginTop: 4
              }}
            >
              Sign In
            </button>

            {/* Divider: Sign in with */}
            <div style={{ position: 'relative', textAlign: 'center', margin: '8px 0' }}>
              <div style={{ position: 'absolute', top: '50%', left: 0, right: 0, height: 1, background: '#000' }}></div>
              <span style={{ position: 'relative', background: '#d9d9d9', padding: '0 10px', fontSize: 11, fontWeight: 700, color: '#000' }}>
                Sign In with
              </span>
            </div>

            {/* Social Icons: Facebook and Google */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 24 }}>
              {/* Facebook icon button */}
              <button
                onClick={() => {
                  onLoginSuccess();
                  onClose();
                }}
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: '50%',
                  background: '#1877f2',
                  border: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  fontSize: 22,
                  fontWeight: 900,
                  cursor: 'pointer',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
                }}
              >
                f
              </button>

              {/* Google icon button */}
              <button
                onClick={() => {
                  onLoginSuccess();
                  onClose();
                }}
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: '50%',
                  background: '#ffffff',
                  border: '1px solid #cbd5e1',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                }}
              >
                <svg viewBox="0 0 24 24" width="22" height="22">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
                </svg>
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
