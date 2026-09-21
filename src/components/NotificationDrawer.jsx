import React from 'react';
import { Bell, Sparkles, Calendar, CheckCircle2, MessageSquare, X } from 'lucide-react';

export default function NotificationDrawer({ isOpen, onClose, onAction }) {
  if (!isOpen) return null;

  const notifications = [
    {
      id: 1,
      title: "KEAM Allotment Phase 1 Trial Released",
      desc: "CEE Kerala has published the trial allotment closing ranks. Check your updated predictions now!",
      time: "10 mins ago",
      type: "keam",
      unread: true
    },
    {
      id: 2,
      title: "HackFort '25 Early Bird Passes Closing",
      desc: "MEC Kochi has only 15 team slots remaining for the 24h Hackathon. Prize pool ₹1,50,000.",
      time: "2 hours ago",
      type: "event",
      unread: true
    },
    {
      id: 3,
      title: "Senior Reply from Abhiram (CET)",
      desc: "Abhiram answered your question regarding CET hostel facilities for distant freshers.",
      time: "1 day ago",
      type: "chat",
      unread: false
    }
  ];

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-bottom-sheet" onClick={(e) => e.stopPropagation()}>
        <div className="sheet-handle"></div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <Bell size={18} color="#10b981" />
            <h3 style={{ fontSize: 16, fontWeight: 700 }}>Notifications</h3>
          </div>
          <button
            onClick={onClose}
            style={{ background: 'none', border: 'none', color: '#fff', fontSize: 18, cursor: 'pointer' }}
          >
            ✕
          </button>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {notifications.map((notif) => (
            <div
              key={notif.id}
              style={{
                background: notif.unread ? 'rgba(16, 185, 129, 0.08)' : 'rgba(255, 255, 255, 0.03)',
                border: notif.unread ? '1px solid rgba(16, 185, 129, 0.3)' : '1px solid var(--border-subtle)',
                borderRadius: 12,
                padding: '12px',
                display: 'flex',
                flexDirection: 'column',
                gap: 4
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <strong style={{ fontSize: 13, color: '#fff' }}>{notif.title}</strong>
                <span style={{ fontSize: 10, color: 'var(--text-dim)' }}>{notif.time}</span>
              </div>
              <p style={{ fontSize: 11, color: 'var(--text-muted)', lineHeight: 1.4 }}>
                {notif.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
