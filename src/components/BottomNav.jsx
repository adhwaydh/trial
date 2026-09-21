import React from 'react';
import { Home, Compass, Building2, Calendar, UserCheck } from 'lucide-react';

export default function BottomNav({ activeTab, onSelectTab, optionListCount }) {
  const navItems = [
    { id: 'feed', label: 'Feed', icon: Home },
    { id: 'keam', label: 'KEAM Helper', icon: Compass, badge: optionListCount > 0 ? optionListCount : null },
    { id: 'colleges', label: 'Colleges', icon: Building2 },
    { id: 'events', label: 'Fests & Hub', icon: Calendar },
    { id: 'profile', label: 'Profile', icon: UserCheck }
  ];

  return (
    <nav className="bottom-nav-bar">
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = activeTab === item.id;
        return (
          <button
            key={item.id}
            className={`nav-item-btn ${isActive ? 'active' : ''}`}
            onClick={() => onSelectTab(item.id)}
            aria-label={item.label}
          >
            <div className="nav-icon-wrapper">
              <Icon size={20} strokeWidth={isActive ? 2.5 : 1.8} />
              {item.badge && (
                <span
                  style={{
                    position: 'absolute',
                    top: -4,
                    right: -7,
                    background: '#10b981',
                    color: '#000',
                    fontSize: 9,
                    fontWeight: 800,
                    width: 15,
                    height: 15,
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 0 6px rgba(16, 185, 129, 0.6)'
                  }}
                >
                  {item.badge}
                </span>
              )}
            </div>
            <span className="nav-label">{item.label}</span>
          </button>
        );
      })}
    </nav>
  );
}
