import React, { useState } from 'react';
import { SENIOR_MENTORS } from '../data/seniorMentors';
import { 
  UserCheck, 
  MessageSquare, 
  Star, 
  Send, 
  Sparkles, 
  CheckCircle2, 
  Clock, 
  GraduationCap, 
  X,
  ChevronRight
} from 'lucide-react';

export default function SeniorMentors({ showToast }) {
  const [mentors] = useState(SENIOR_MENTORS);
  const [selectedMentor, setSelectedMentor] = useState(null);
  const [chatMessages, setChatMessages] = useState([
    {
      sender: 'mentor',
      text: "Namaskaram! Feel free to ask anything about KEAM branch preference, campus reality, placements, or hostel life in Kerala."
    }
  ]);
  const [inputMsg, setInputMsg] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  // Quick inquiry chips
  const quickQuestions = [
    "How is the placement scene for ECE/EEE?",
    "Is CET hostel available for 1st year freshers?",
    "MEC CSE vs CET AI&DS - which should I prioritize?",
    "How tough are KTU internal exams and backlogs?"
  ];

  const handleOpenChat = (mentor) => {
    setSelectedMentor(mentor);
    setChatMessages([
      {
        sender: 'mentor',
        text: `Hey! I'm ${mentor.name} from ${mentor.college} (${mentor.branch}). Ask me any doubts about admissions, branch choice, or campus life.`
      }
    ]);
  };

  const handleSendChat = (text) => {
    const messageToSend = text || inputMsg;
    if (!messageToSend.trim()) return;

    // Add user message
    const userMsgObj = { sender: 'user', text: messageToSend };
    setChatMessages((prev) => [...prev, userMsgObj]);
    setInputMsg('');
    setIsTyping(true);

    // Simulated senior response
    setTimeout(() => {
      let reply = `Great question regarding ${selectedMentor?.college || 'our college'}! From my experience in ${selectedMentor?.year || 'college'}, the most critical thing is to maintain a CGPA > 7.5 and focus on practical projects through IEDC or IEEE early on. Don't worry too much about ragging—Kerala campuses are strictly anti-ragging with very friendly senior cultures.`;

      if (messageToSend.toLowerCase().includes('hostel')) {
        reply = `Hostel seats at ${selectedMentor?.college || 'govt colleges'} are allotted based on KEAM rank and home distance. Ladies hostel is generally provided for almost all distant students, and men's hostel fills fast but plenty of private student PGs are nearby.`;
      } else if (messageToSend.toLowerCase().includes('mec') || messageToSend.toLowerCase().includes('cet')) {
        reply = `Both CET and MEC are top tier in Kerala! MEC has an edge in product software companies and Infopark proximity. CET gives you an unparalleled 100-acre historic campus vibe, inter-collegiate arts (Dhwani), and broader alumni base.`;
      } else if (messageToSend.toLowerCase().includes('ece') || messageToSend.toLowerCase().includes('placement')) {
        reply = `Placement for circuit branches is strong! Core VLSI companies like Texas Instruments, Bosch, and Qualcomm visit CET & GECT, while all software companies allow ECE students with good DSA skills.`;
      }

      setChatMessages((prev) => [...prev, { sender: 'mentor', text: reply }]);
      setIsTyping(false);
      showToast?.(`New reply from ${selectedMentor?.name}`);
    }, 1200);
  };

  return (
    <div className="screen-container">
      {/* Header */}
      <div className="section-header">
        <div>
          <h2 className="section-title">
            <UserCheck size={18} color="#10b981" />
            <span>Ask A Kerala Senior</span>
          </h2>
          <span className="section-subtitle">
            1-on-1 Guidance from Verified Final & Pre-final Years
          </span>
        </div>
      </div>

      {/* Intro Banner */}
      <div
        className="glass-card"
        style={{
          background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.15) 0%, rgba(16, 185, 129, 0.1) 100%)',
          border: '1px solid rgba(99, 102, 241, 0.3)',
          padding: '12px 14px'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 4 }}>
          <Sparkles size={16} color="#818cf8" />
          <h3 style={{ fontSize: 13, fontWeight: 700, color: '#fff' }}>Unfiltered Campus Advice</h3>
        </div>
        <p style={{ fontSize: 11, color: 'var(--text-muted)' }}>
          Get genuine feedback on KTU difficulty, campus politics, lab facilities, and placement packages directly from seniors who've lived it.
        </p>
      </div>

      {/* Mentor Cards */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {mentors.map((m) => (
          <div
            key={m.id}
            className="glass-card interactive"
            onClick={() => handleOpenChat(m)}
            style={{
              padding: '14px',
              display: 'flex',
              flexDirection: 'column',
              gap: 10,
              cursor: 'pointer'
            }}
          >
            {/* Top row */}
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 8 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <img
                  src={m.avatar}
                  alt={m.name}
                  style={{ width: 44, height: 44, borderRadius: '50%', objectFit: 'cover' }}
                />
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                    <h3 style={{ fontSize: 14, fontWeight: 700, color: '#fff' }}>{m.name}</h3>
                    <CheckCircle2 size={13} color="#10b981" />
                  </div>
                  <div style={{ fontSize: 11, color: 'var(--primary-light)', fontWeight: 600 }}>
                    {m.college}
                  </div>
                  <div style={{ fontSize: 10, color: 'var(--text-muted)' }}>
                    {m.branch} • {m.year}
                  </div>
                </div>
              </div>

              <div style={{ textAlign: 'right', flexShrink: 0 }}>
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 3,
                    fontSize: 11,
                    fontWeight: 700,
                    color: '#fcd34d',
                    background: 'rgba(245, 158, 11, 0.1)',
                    padding: '2px 6px',
                    borderRadius: 6
                  }}
                >
                  <Star size={11} fill="#fcd34d" />
                  <span>{m.rating}</span>
                </span>
                <span style={{ fontSize: 10, color: 'var(--text-dim)', display: 'block', marginTop: 2 }}>
                  {m.answersCount} helped
                </span>
              </div>
            </div>

            {/* Senior Badge */}
            <div>
              <span className="pill-badge gold">{m.badge}</span>
            </div>

            {/* Bio */}
            <p style={{ fontSize: 11, color: 'var(--text-muted)', lineHeight: 1.4 }}>
              {m.bio}
            </p>

            {/* Specialties */}
            <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
              {m.specialties.map((s) => (
                <span
                  key={s}
                  style={{
                    fontSize: 10,
                    color: '#a5b4fc',
                    background: 'rgba(99, 102, 241, 0.1)',
                    border: '1px solid rgba(99, 102, 241, 0.2)',
                    borderRadius: 4,
                    padding: '2px 6px'
                  }}
                >
                  {s}
                </span>
              ))}
            </div>

            {/* Action Bar */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingTop: 8,
                borderTop: '1px solid var(--border-subtle)',
                fontSize: 11
              }}
            >
              <span style={{ color: m.isAvailable ? '#34d399' : 'var(--text-dim)' }}>
                {m.isAvailable ? '🟢 Online & Ready to Answer' : '⚪ Responds within a few hours'}
              </span>
              <span style={{ color: 'var(--accent-cyan)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: 2 }}>
                Chat Now <ChevronRight size={13} />
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* 1-on-1 Q&A Chat Drawer */}
      {selectedMentor && (
        <div className="modal-overlay" onClick={() => setSelectedMentor(null)}>
          <div
            className="modal-bottom-sheet"
            onClick={(e) => e.stopPropagation()}
            style={{ height: '88%', maxHeight: '88%' }}
          >
            <div className="sheet-handle"></div>

            {/* Chat Header */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid var(--border-subtle)', paddingBottom: 10 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <img
                  src={selectedMentor.avatar}
                  alt={selectedMentor.name}
                  style={{ width: 36, height: 36, borderRadius: '50%', objectFit: 'cover' }}
                />
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                    <h3 style={{ fontSize: 14, fontWeight: 700 }}>{selectedMentor.name}</h3>
                    <CheckCircle2 size={12} color="#10b981" />
                  </div>
                  <span style={{ fontSize: 10, color: 'var(--primary-light)' }}>
                    {selectedMentor.college} • {selectedMentor.branch}
                  </span>
                </div>
              </div>

              <button
                onClick={() => setSelectedMentor(null)}
                style={{ background: 'none', border: 'none', color: '#fff', fontSize: 18, cursor: 'pointer' }}
              >
                ✕
              </button>
            </div>

            {/* Quick Questions suggestion */}
            <div style={{ display: 'flex', gap: 6, overflowX: 'auto', paddingBottom: 4, scrollbarWidth: 'none' }}>
              {quickQuestions.map((q) => (
                <button
                  key={q}
                  onClick={() => handleSendChat(q)}
                  style={{
                    flexShrink: 0,
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: 14,
                    padding: '4px 10px',
                    fontSize: 10,
                    color: 'var(--text-muted)',
                    cursor: 'pointer'
                  }}
                >
                  {q}
                </button>
              ))}
            </div>

            {/* Chat Messages Area */}
            <div
              style={{
                flex: 1,
                overflowY: 'auto',
                display: 'flex',
                flexDirection: 'column',
                gap: 10,
                padding: '10px 0'
              }}
            >
              {chatMessages.map((msg, i) => (
                <div
                  key={i}
                  style={{
                    alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                    maxWidth: '82%',
                    background:
                      msg.sender === 'user'
                        ? 'linear-gradient(135deg, #10b981 0%, #059669 100%)'
                        : 'rgba(255, 255, 255, 0.08)',
                    color: msg.sender === 'user' ? '#000' : '#f8fafc',
                    fontWeight: msg.sender === 'user' ? 600 : 400,
                    borderRadius: 14,
                    borderBottomRightRadius: msg.sender === 'user' ? 2 : 14,
                    borderBottomLeftRadius: msg.sender === 'mentor' ? 2 : 14,
                    padding: '10px 14px',
                    fontSize: 12,
                    lineHeight: 1.45,
                    boxShadow: msg.sender === 'user' ? '0 2px 10px rgba(16, 185, 129, 0.3)' : 'none'
                  }}
                >
                  {msg.text}
                </div>
              ))}

              {isTyping && (
                <div
                  style={{
                    alignSelf: 'flex-start',
                    background: 'rgba(255, 255, 255, 0.06)',
                    borderRadius: 14,
                    padding: '8px 12px',
                    fontSize: 11,
                    color: 'var(--text-dim)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 6
                  }}
                >
                  <span className="typing-dot">●</span>
                  <span>{selectedMentor.name} is typing senior advice...</span>
                </div>
              )}
            </div>

            {/* Input Bar */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendChat();
              }}
              style={{ display: 'flex', gap: 8 }}
            >
              <input
                type="text"
                className="custom-input"
                placeholder={`Ask ${selectedMentor.name.split(' ')[0]} anything...`}
                value={inputMsg}
                onChange={(e) => setInputMsg(e.target.value)}
              />
              <button type="submit" className="btn-primary" style={{ padding: '0 16px' }}>
                <Send size={15} />
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
