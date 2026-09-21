import React, { useState, useEffect } from 'react';
import { Smartphone, Monitor, Wifi, Battery, Signal } from 'lucide-react';

export default function MobileFrame({ children, isFullscreen, onToggleFullscreen }) {
  const [currentTime, setCurrentTime] = useState('');

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
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="app-viewport-container">
      {/* Top Bar for Desktop Preview Mode Controls */}
      <div className="device-mode-banner">
        <span className="tag-badge">
          <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#10b981', display: 'inline-block' }}></span>
          PeerGrid Kerala v1.0
        </span>
        <button
          className="device-toggle-btn"
          onClick={onToggleFullscreen}
          title="Toggle between Mobile Frame and Responsive View"
        >
          {isFullscreen ? (
            <>
              <Smartphone size={13} />
              <span>Switch to Mobile Frame</span>
            </>
          ) : (
            <>
              <Monitor size={13} />
              <span>Full Width View</span>
            </>
          )}
        </button>
      </div>

      {/* Main App Container */}
      <div className={`mobile-device-frame ${isFullscreen ? 'fullscreen-mode' : ''}`}>
        {/* Mobile Device Status Bar */}
        <div className="device-status-bar">
          <span>{currentTime || '09:41'}</span>
          <div className="dynamic-island-notch">
            <div className="camera-lens"></div>
          </div>
          <div className="status-icons">
            <Signal size={12} strokeWidth={2.5} />
            <Wifi size={12} strokeWidth={2.5} />
            <div style={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <span style={{ fontSize: 10 }}>98%</span>
              <Battery size={13} strokeWidth={2.5} />
            </div>
          </div>
        </div>

        {/* Inner Scrollable Screen Content */}
        {children}
      </div>
    </div>
  );
}
