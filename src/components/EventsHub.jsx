import React, { useState } from 'react';
import { KERALA_EVENTS } from '../data/keralaEvents';
import { 
  Calendar, 
  Sparkles, 
  MapPin, 
  Trophy, 
  Users, 
  CheckCircle2, 
  ExternalLink, 
  Bookmark, 
  Clock,
  ChevronRight,
  X
} from 'lucide-react';

export default function EventsHub({ onSelectCollege, showToast }) {
  const [events, setEvents] = useState(KERALA_EVENTS);
  const [activeCategoryFilter, setActiveCategoryFilter] = useState('ALL');
  const [rsvpdEvents, setRsvpdEvents] = useState([]);
  const [selectedEventModal, setSelectedEventModal] = useState(null);

  // Toggle RSVP
  const handleToggleRsvp = (eventId, e) => {
    e?.stopPropagation();
    if (rsvpdEvents.includes(eventId)) {
      setRsvpdEvents(rsvpdEvents.filter((id) => id !== eventId));
      setEvents((prev) =>
        prev.map((evt) => (evt.id === eventId ? { ...evt, attendees: evt.attendees - 1 } : evt))
      );
      showToast?.('RSVP cancelled');
    } else {
      setRsvpdEvents([...rsvpdEvents, eventId]);
      setEvents((prev) =>
        prev.map((evt) => (evt.id === eventId ? { ...evt, attendees: evt.attendees + 1 } : evt))
      );
      showToast?.('RSVP confirmed! Added to your event schedule.');
    }
  };

  // Filter events
  const filteredEvents = events.filter((evt) => {
    if (activeCategoryFilter === 'ALL') return true;
    if (activeCategoryFilter === 'CULTURAL') return evt.category.toLowerCase().includes('cultural');
    if (activeCategoryFilter === 'TECH') return evt.category.toLowerCase().includes('tech') || evt.category.toLowerCase().includes('hackathon');
    return true;
  });

  return (
    <div className="screen-container">
      {/* Header */}
      <div className="section-header">
        <div>
          <h2 className="section-title">
            <Calendar size={18} color="#10b981" />
            <span>Kerala College Fests & Hub</span>
          </h2>
          <span className="section-subtitle">
            Statewide Cultural Fests, Hackathons & Tech Expos
          </span>
        </div>
      </div>

      {/* Filter Category Pills */}
      <div className="filter-chip-row">
        <button
          className={`filter-chip ${activeCategoryFilter === 'ALL' ? 'active' : ''}`}
          onClick={() => setActiveCategoryFilter('ALL')}
        >
          All Kerala Fests
        </button>
        <button
          className={`filter-chip ${activeCategoryFilter === 'CULTURAL' ? 'active' : ''}`}
          onClick={() => setActiveCategoryFilter('CULTURAL')}
        >
          Cultural Extravaganza
        </button>
        <button
          className={`filter-chip ${activeCategoryFilter === 'TECH' ? 'active' : ''}`}
          onClick={() => setActiveCategoryFilter('TECH')}
        >
          Tech Fests & Hackathons
        </button>
      </div>

      {/* Event Cards List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        {filteredEvents.map((evt) => {
          const isGoing = rsvpdEvents.includes(evt.id);
          return (
            <div
              key={evt.id}
              className="glass-card interactive"
              onClick={() => setSelectedEventModal(evt)}
              style={{
                padding: 0,
                overflow: 'hidden',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              {/* Event Cover Image Banner */}
              <div style={{ position: 'relative', height: 130, width: '100%' }}>
                <img
                  src={evt.image}
                  alt={evt.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(to top, rgba(9, 13, 22, 0.95) 0%, rgba(9, 13, 22, 0.2) 60%, transparent 100%)'
                  }}
                ></div>

                {/* Days Left Chip */}
                <div
                  style={{
                    position: 'absolute',
                    top: 10,
                    right: 10,
                    background: 'rgba(0, 0, 0, 0.75)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    borderRadius: 20,
                    padding: '3px 8px',
                    fontSize: 10,
                    fontWeight: 700,
                    color: '#fcd34d',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 4
                  }}
                >
                  <Clock size={11} />
                  <span>{evt.daysLeft} days to go</span>
                </div>

                {/* Prize Pool Badge */}
                <div
                  style={{
                    position: 'absolute',
                    top: 10,
                    left: 10,
                    background: 'rgba(16, 185, 129, 0.85)',
                    borderRadius: 20,
                    padding: '3px 8px',
                    fontSize: 10,
                    fontWeight: 800,
                    color: '#000',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 4
                  }}
                >
                  <Trophy size={11} />
                  <span>Prize: {evt.prizePool}</span>
                </div>
              </div>

              {/* Event Card Content */}
              <div style={{ padding: '14px', display: 'flex', flexDirection: 'column', gap: 10 }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 4 }}>
                    <span className="pill-badge category">{evt.category}</span>
                    <span style={{ fontSize: 11, color: 'var(--text-dim)' }}>{evt.dates}</span>
                  </div>

                  <h3 style={{ fontSize: 16, fontWeight: 700, color: '#fff', lineHeight: 1.3 }}>
                    {evt.title}
                  </h3>

                  <div
                    onClick={(e) => {
                      e.stopPropagation();
                      if (evt.collegeId && evt.collegeId !== 'kerala-hub') onSelectCollege(evt.collegeId);
                    }}
                    style={{
                      fontSize: 11,
                      color: 'var(--primary-light)',
                      marginTop: 3,
                      display: 'flex',
                      alignItems: 'center',
                      gap: 4,
                      cursor: 'pointer'
                    }}
                  >
                    <MapPin size={11} />
                    <span>{evt.college}</span>
                  </div>
                </div>

                <p style={{ fontSize: 12, color: 'var(--text-muted)', lineHeight: 1.45 }}>
                  {evt.description}
                </p>

                {/* Tags */}
                <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                  {evt.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      style={{
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid var(--border-subtle)',
                        borderRadius: 6,
                        padding: '2px 6px',
                        fontSize: 10,
                        color: 'var(--text-muted)'
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                  {evt.tags.length > 3 && (
                    <span style={{ fontSize: 10, color: 'var(--text-dim)', alignSelf: 'center' }}>
                      +{evt.tags.length - 3} more
                    </span>
                  )}
                </div>

                {/* Actions: RSVP & Details */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingTop: 8,
                    borderTop: '1px solid var(--border-subtle)'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 11, color: 'var(--text-muted)' }}>
                    <Users size={12} color="#10b981" />
                    <span>{evt.attendees.toLocaleString('en-IN')} students attending</span>
                  </div>

                  <button
                    onClick={(e) => handleToggleRsvp(evt.id, e)}
                    style={{
                      background: isGoing ? 'rgba(16, 185, 129, 0.2)' : 'rgba(255, 255, 255, 0.08)',
                      border: isGoing ? '1px solid #10b981' : '1px solid rgba(255, 255, 255, 0.15)',
                      color: isGoing ? '#34d399' : '#fff',
                      borderRadius: 14,
                      padding: '4px 10px',
                      fontSize: 11,
                      fontWeight: 600,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 4
                    }}
                  >
                    {isGoing ? <CheckCircle2 size={12} color="#10b981" /> : <Sparkles size={12} />}
                    <span>{isGoing ? 'Going ✓' : 'RSVP Free'}</span>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Event Details Sheet Modal */}
      {selectedEventModal && (
        <div className="modal-overlay" onClick={() => setSelectedEventModal(null)}>
          <div className="modal-bottom-sheet" onClick={(e) => e.stopPropagation()}>
            <div className="sheet-handle"></div>

            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 10 }}>
              <div>
                <span className="pill-badge gold">{selectedEventModal.category}</span>
                <h3 style={{ fontSize: 18, fontWeight: 800, marginTop: 6 }}>{selectedEventModal.title}</h3>
                <div style={{ fontSize: 12, color: 'var(--primary-light)', marginTop: 2 }}>
                  {selectedEventModal.college}
                </div>
              </div>
              <button
                onClick={() => setSelectedEventModal(null)}
                style={{ background: 'none', border: 'none', color: '#fff', fontSize: 18, cursor: 'pointer' }}
              >
                ✕
              </button>
            </div>

            {/* Event Highlights & Venue */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
              <div style={{ background: 'rgba(255, 255, 255, 0.04)', borderRadius: 10, padding: 10 }}>
                <span style={{ fontSize: 10, color: 'var(--text-dim)' }}>Dates</span>
                <div style={{ fontWeight: 600, fontSize: 12, color: '#fff', marginTop: 2 }}>
                  {selectedEventModal.dates}
                </div>
              </div>
              <div style={{ background: 'rgba(255, 255, 255, 0.04)', borderRadius: 10, padding: 10 }}>
                <span style={{ fontSize: 10, color: 'var(--text-dim)' }}>Total Prize Cash</span>
                <div style={{ fontWeight: 600, fontSize: 12, color: '#fcd34d', marginTop: 2 }}>
                  {selectedEventModal.prizePool}
                </div>
              </div>
            </div>

            <div>
              <span style={{ fontSize: 11, color: 'var(--text-dim)', display: 'block', marginBottom: 2 }}>Venue</span>
              <div style={{ fontSize: 12, color: '#e2e8f0', display: 'flex', alignItems: 'center', gap: 6 }}>
                <MapPin size={14} color="#10b981" />
                <span>{selectedEventModal.venue}</span>
              </div>
            </div>

            <div>
              <h4 style={{ fontSize: 13, fontWeight: 700, marginBottom: 4 }}>About The Event</h4>
              <p style={{ fontSize: 12, color: 'var(--text-muted)', lineHeight: 1.5 }}>
                {selectedEventModal.description}
              </p>
            </div>

            <div>
              <h4 style={{ fontSize: 13, fontWeight: 700, marginBottom: 6 }}>Key Tracks & Sub-Events</h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {selectedEventModal.tags.map((t) => (
                  <span
                    key={t}
                    style={{
                      background: 'rgba(16, 185, 129, 0.1)',
                      border: '1px solid rgba(16, 185, 129, 0.25)',
                      borderRadius: 6,
                      padding: '4px 8px',
                      fontSize: 11,
                      color: '#34d399',
                      fontWeight: 600
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div style={{ display: 'flex', gap: 10, marginTop: 8 }}>
              <button
                className="btn-primary"
                style={{ flex: 1 }}
                onClick={() => {
                  window.open(selectedEventModal.registrationLink, '_blank');
                  showToast?.(`Opening official portal: ${selectedEventModal.registrationLink}`);
                }}
              >
                <span>Register On Official Site</span>
                <ExternalLink size={14} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
