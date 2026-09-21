import React from 'react';
import { Home, Plus, Search } from 'lucide-react';

export default function FigmaNavBar({ activeScreen, onNavigate }) {
  return (
    <div className="figma-floating-nav">
      <button
        className={`nav-capsule-btn ${activeScreen === 'home' ? 'active' : ''}`}
        onClick={() => onNavigate('home')}
        title="Home"
      >
        <Home size={22} strokeWidth={2.2} />
      </button>

      <button
        className={`nav-capsule-btn ${activeScreen === 'predict' ? 'active' : ''}`}
        onClick={() => onNavigate('predict')}
        title="Predict Your College"
      >
        <Plus size={24} strokeWidth={2.5} />
      </button>

      <button
        className={`nav-capsule-btn ${activeScreen === 'events' ? 'active' : ''}`}
        onClick={() => onNavigate('events')}
        title="Events"
      >
        <Search size={22} strokeWidth={2.2} />
      </button>
    </div>
  );
}
