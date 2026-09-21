import React from 'react';
import { Bell, Sparkles, UserCheck, GraduationCap } from 'lucide-react';

export default function TopHeader({ userPersona, onTogglePersona, onOpenNotifications, unreadCount }) {
  return (
    <header className="app-header">
      <div className="header-brand">
        <div className="brand-logo-badge">PG</div>
        <div>
          <h1 className="brand-title">PeerGrid</h1>
          <div className="brand-subtitle">Kerala Campus Network</div>
        </div>
      </div>

      <div className="header-actions">
        {/* Quick Persona Switcher */}
        <button
          className="persona-pill-toggle"
          onClick={onTogglePersona}
          title="Click to switch between KEAM Aspirant and College Student Mode"
        >
          {userPersona === 'aspirant' ? (
            <>
              <GraduationCap size={13} color="#10b981" />
              <span>Aspirant</span>
            </>
          ) : (
            <>
              <UserCheck size={13} color="#6366f1" />
              <span>CET S6</span>
            </>
          )}
        </button>

        {/* Notifications Icon Button */}
        <button
          className="header-icon-btn"
          onClick={onOpenNotifications}
          aria-label="Notifications"
        >
          <Bell size={16} />
          {unreadCount > 0 && <span className="notification-dot"></span>}
        </button>
      </div>
    </header>
  );
}
