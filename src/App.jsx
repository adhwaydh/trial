import React, { useState, useEffect } from 'react';
import FigmaNavBar from './components/FigmaNavBar';
import FigmaHomeScreen from './components/FigmaHomeScreen';
import FigmaPredictScreen from './components/FigmaPredictScreen';
import FigmaEventsScreen from './components/FigmaEventsScreen';
import FigmaCommunityScreen from './components/FigmaCommunityScreen';
import FigmaReviewsScreen from './components/FigmaReviewsScreen';
import FigmaWelcomeModal from './components/FigmaWelcomeModal';
import { Smartphone, Monitor, Signal, Wifi, Battery, CheckCircle2 } from 'lucide-react';

export default function App() {
  const [activeScreen, setActiveScreen] = useState('home'); // 'home', 'predict', 'events', 'community', 'reviews'
  const [selectedCollegeId, setSelectedCollegeId] = useState('cet');
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isWelcomeOpen, setIsWelcomeOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [currentTime, setCurrentTime] = useState('09:41');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      let hours = now.getHours();
      let minutes = now.getMinutes();
      minutes = minutes < 10 ? '0' + minutes : minutes;
      hours = hours < 10 ? '0' + hours : hours;
      setCurrentTime(`${hours}:${minutes}`);
    };
    updateTime();
    const interval = setInterval(updateTime, 30000);
    return () => clearInterval(interval);
  }, []);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage('');
    }, 3000);
  };

  const handleSelectCollege = (id) => {
    setSelectedCollegeId(id);
    setActiveScreen('reviews');
  };

  return (
    <div className="figma-app-outer">
      {/* Desktop Preview Banner with Toggle */}
      <div className="figma-top-bar">
        <span style={{ display: 'flex', alignItems: 'center', gap: 6, fontWeight: 700 }}>
          <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#5be2f6' }}></span>
          PeerGrid Figma Design
        </span>

        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <button
            className="figma-toggle-btn"
            onClick={() => setIsWelcomeOpen(true)}
            style={{ background: 'rgba(255, 255, 255, 0.15)', color: '#fff' }}
          >
            Welcome & Login
          </button>
          <button
            className="figma-toggle-btn"
            onClick={() => setIsFullscreen(!isFullscreen)}
          >
            {isFullscreen ? <Smartphone size={13} /> : <Monitor size={13} />}
            <span>{isFullscreen ? 'Mobile Frame' : 'Full Screen'}</span>
          </button>
        </div>
      </div>

      {/* Main Smartphone Viewport Container */}
      <div className={`figma-mobile-viewport ${isFullscreen ? 'fullscreen' : ''}`}>
        {/* Toast Alert Container */}
        {toastMessage && (
          <div
            style={{
              position: 'absolute',
              top: 50,
              left: 20,
              right: 20,
              zIndex: 150,
              background: '#0f172a',
              color: '#ffffff',
              border: '1px solid #38bdf8',
              borderRadius: 14,
              padding: '10px 14px',
              fontSize: 12,
              fontWeight: 700,
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
              animation: 'fadeIn 0.2s ease'
            }}
          >
            <CheckCircle2 size={16} color="#38bdf8" />
            <span>{toastMessage}</span>
          </div>
        )}

        {/* Mobile Device Status Bar */}
        <div className="figma-status-bar">
          <span>{currentTime}</span>
          <div className="figma-notch"></div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <Signal size={12} strokeWidth={2.5} />
            <Wifi size={12} strokeWidth={2.5} />
            <Battery size={13} strokeWidth={2.5} />
          </div>
        </div>

        {/* Dynamic Screen View */}
        {activeScreen === 'home' && (
          <FigmaHomeScreen
            onNavigate={(screen) => setActiveScreen(screen)}
            onSelectCollege={handleSelectCollege}
            onOpenProfile={() => setIsWelcomeOpen(true)}
          />
        )}

        {activeScreen === 'predict' && (
          <FigmaPredictScreen
            onBack={() => setActiveScreen('home')}
            onSelectCollege={handleSelectCollege}
          />
        )}

        {activeScreen === 'events' && (
          <FigmaEventsScreen
            onBack={() => setActiveScreen('home')}
            showToast={showToast}
          />
        )}

        {activeScreen === 'community' && (
          <FigmaCommunityScreen
            onBack={() => setActiveScreen('home')}
            showToast={showToast}
          />
        )}

        {activeScreen === 'reviews' && (
          <FigmaReviewsScreen
            collegeId={selectedCollegeId}
            onBack={() => setActiveScreen('home')}
            showToast={showToast}
          />
        )}

        {/* Floating Capsule Bottom Navigation Pill */}
        <FigmaNavBar
          activeScreen={activeScreen}
          onNavigate={(screen) => setActiveScreen(screen)}
        />

        {/* Welcome & Sign In Modal Flow from Figma Figures 1 & 2 */}
        <FigmaWelcomeModal
          isOpen={isWelcomeOpen}
          onClose={() => setIsWelcomeOpen(false)}
          onLoginSuccess={() => {
            showToast('Logged in as Lithu P L');
            setActiveScreen('home');
          }}
        />
      </div>
    </div>
  );
}
