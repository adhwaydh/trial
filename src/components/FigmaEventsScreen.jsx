import React, { useState } from 'react';
import { ChevronLeft, Search, Calendar as CalendarIcon, Clock, MapPin, CheckCircle2 } from 'lucide-react';

export default function FigmaEventsScreen({ onBack, showToast }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [registeredEvents, setRegisteredEvents] = useState([]);

  const handleRegister = (eventName, e) => {
    e.stopPropagation();
    if (registeredEvents.includes(eventName)) {
      setRegisteredEvents(registeredEvents.filter((name) => name !== eventName));
      showToast?.(`Registration cancelled for ${eventName}`);
    } else {
      setRegisteredEvents([...registeredEvents, eventName]);
      showToast?.(`Registered for ${eventName}! Pass saved.`);
    }
  };

  return (
    <div className="figma-screen-body">
      {/* Cyan decorative accent blobs */}
      <div className="cyan-blob-top-right"></div>
      <div className="cyan-blob-bottom-left"></div>

      {/* Top Header */}
      <div className="figma-screen-header">
        <button className="figma-back-btn" onClick={onBack} aria-label="Go Back">
          <ChevronLeft size={28} strokeWidth={2.5} />
        </button>
        <h2 className="figma-screen-title" style={{ marginRight: 36 }}>
          Events
        </h2>
      </div>

      {/* Search Bar & Calendar Button Row */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '6px 18px 14px', position: 'relative', zIndex: 10 }}>
        <div style={{ flex: 1, position: 'relative' }}>
          <Search size={16} color="#64748b" style={{ position: 'absolute', left: 14, top: 12 }} />
          <input
            type="text"
            className="figma-pill-input"
            style={{ paddingLeft: 38, border: '1.5px solid #000', fontSize: 13 }}
            placeholder="Search events...."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <button
          style={{
            width: 40,
            height: 40,
            background: '#ffffff',
            border: '1.5px solid #000',
            borderRadius: 10,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer'
          }}
        >
          <CalendarIcon size={20} color="#000" />
        </button>
      </div>

      {/* Upcoming Events Blue Section Pill */}
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 16, position: 'relative', zIndex: 10 }}>
        <div
          style={{
            background: '#0084ff',
            color: '#fff',
            border: '1.5px solid #000',
            borderRadius: 24,
            padding: '8px 24px',
            fontSize: 14,
            fontWeight: 800,
            letterSpacing: 0.2
          }}
        >
          Upcoming Events
        </div>
      </div>

      {/* Event Cards List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16, padding: '0 18px' }}>
        {/* Card 1: Tech Fest (RIT Kottayam) - Purple Card from Figure 4 */}
        <div className="events-purple-card">
          {/* Poster Image */}
          <div style={{ width: 110, height: 160, borderRadius: 14, overflow: 'hidden', flexShrink: 0, border: '1px solid rgba(0,0,0,0.3)' }}>
            <img
              src="https://images.unsplash.com/photo-1511578314322-379afb476865?w=300&auto=format&fit=crop&q=80"
              alt="Tech Fest Poster"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>

          {/* Details */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <h3 style={{ fontSize: 18, fontWeight: 800, color: '#000' }}>Tech Fest</h3>
              <div style={{ fontSize: 14, color: '#fff', fontWeight: 600, marginTop: 2 }}>
                RIT Kottayam
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 6, fontSize: 12, color: '#000', fontWeight: 600, margin: '8px 0' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <CalendarIcon size={14} color="#000" />
                <span>16 Aug 2026</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <Clock size={14} color="#000" />
                <span>10:00 AM</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <MapPin size={14} color="#000" />
                <span>Main Auditorium</span>
              </div>
            </div>

            <button
              onClick={(e) => handleRegister('Tech Fest (RIT)', e)}
              style={{
                background: registeredEvents.includes('Tech Fest (RIT)') ? '#10b981' : '#1d4ed8',
                color: '#fff',
                border: '1.5px solid #000',
                borderRadius: 20,
                padding: '6px 18px',
                fontSize: 13,
                fontWeight: 700,
                cursor: 'pointer',
                alignSelf: 'flex-start'
              }}
            >
              {registeredEvents.includes('Tech Fest (RIT)') ? 'Registered ✓' : 'Register'}
            </button>
          </div>
        </div>

        {/* Card 2: Nexora (CET Trivandrum) - Lime-Yellow Card from Figure 4 */}
        <div className="events-lime-card">
          {/* Poster Image */}
          <div style={{ width: 110, height: 160, borderRadius: 14, overflow: 'hidden', flexShrink: 0, border: '1px solid rgba(0,0,0,0.3)' }}>
            <img
              src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=300&auto=format&fit=crop&q=80"
              alt="Nexora Poster"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>

          {/* Details */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <h3 style={{ fontSize: 18, fontWeight: 800, color: '#000' }}>Nexora</h3>
              <div style={{ fontSize: 14, color: '#1d4ed8', fontWeight: 700, marginTop: 2 }}>
                CET Trivandrum
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 6, fontSize: 12, color: '#000', fontWeight: 600, margin: '8px 0' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <CalendarIcon size={14} color="#000" />
                <span>21 Aug 2026</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <Clock size={14} color="#000" />
                <span>8:00 AM</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <MapPin size={14} color="#000" />
                <span>Open Stage</span>
              </div>
            </div>

            <button
              onClick={(e) => handleRegister('Nexora (CET)', e)}
              style={{
                background: registeredEvents.includes('Nexora (CET)') ? '#10b981' : '#facc15',
                color: '#000',
                border: '1.5px solid #000',
                borderRadius: 20,
                padding: '6px 18px',
                fontSize: 13,
                fontWeight: 700,
                cursor: 'pointer',
                alignSelf: 'flex-start'
              }}
            >
              {registeredEvents.includes('Nexora (CET)') ? 'Registered ✓' : 'Register'}
            </button>
          </div>
        </div>

        {/* Card 3: Excel 2025 (MEC Kochi) */}
        <div
          style={{
            background: '#38bdf8',
            border: '1.5px solid #000',
            borderRadius: 24,
            padding: 14,
            display: 'flex',
            gap: 14,
            color: '#000',
            position: 'relative',
            zIndex: 10
          }}
        >
          <div style={{ width: 110, height: 160, borderRadius: 14, overflow: 'hidden', flexShrink: 0, border: '1px solid rgba(0,0,0,0.3)' }}>
            <img
              src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=300&auto=format&fit=crop&q=80"
              alt="Excel Poster"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>

          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <h3 style={{ fontSize: 18, fontWeight: 800, color: '#000' }}>Excel 2025</h3>
              <div style={{ fontSize: 14, color: '#0f172a', fontWeight: 700, marginTop: 2 }}>
                Model Engg College, Kochi
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 6, fontSize: 12, color: '#000', fontWeight: 600, margin: '8px 0' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <CalendarIcon size={14} color="#000" />
                <span>11 Apr 2025</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <Clock size={14} color="#000" />
                <span>9:00 AM</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <MapPin size={14} color="#000" />
                <span>MEC Campus</span>
              </div>
            </div>

            <button
              onClick={(e) => handleRegister('Excel 2025 (MEC)', e)}
              style={{
                background: registeredEvents.includes('Excel 2025 (MEC)') ? '#10b981' : '#ffffff',
                color: '#000',
                border: '1.5px solid #000',
                borderRadius: 20,
                padding: '6px 18px',
                fontSize: 13,
                fontWeight: 700,
                cursor: 'pointer',
                alignSelf: 'flex-start'
              }}
            >
              {registeredEvents.includes('Excel 2025 (MEC)') ? 'Registered ✓' : 'Register'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
