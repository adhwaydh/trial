import React, { useState } from 'react';
import { 
  UserCheck, 
  GraduationCap, 
  ShieldCheck, 
  Bookmark, 
  ListOrdered, 
  Award, 
  QrCode, 
  Settings, 
  LogOut, 
  CheckCircle2, 
  Upload,
  Calendar,
  Sparkles,
  ChevronRight
} from 'lucide-react';

export default function UserProfile({ 
  userPersona, 
  onTogglePersona, 
  userRank, 
  userCategory, 
  optionList, 
  onOpenOptionList,
  showToast 
}) {
  const [isVerified, setIsVerified] = useState(true);
  const [showVerifyModal, setShowVerifyModal] = useState(false);
  const [idFileUploaded, setIdFileUploaded] = useState(false);

  const handleSimulateVerification = (e) => {
    e.preventDefault();
    setIdFileUploaded(true);
    setTimeout(() => {
      setIsVerified(true);
      setShowVerifyModal(false);
      showToast?.('Student ID verified! Blue/Green badge activated.');
    }, 1000);
  };

  return (
    <div className="screen-container">
      {/* Header */}
      <div className="section-header">
        <div>
          <h2 className="section-title">
            <UserCheck size={18} color="#10b981" />
            <span>Student Profile</span>
          </h2>
          <span className="section-subtitle">
            Digital Identity & Saved Admissions Hub
          </span>
        </div>
      </div>

      {/* Digital Student Identity Card */}
      <div
        className="glass-card"
        style={{
          background:
            userPersona === 'aspirant'
              ? 'linear-gradient(135deg, rgba(16, 185, 129, 0.25) 0%, rgba(6, 182, 212, 0.15) 100%)'
              : 'linear-gradient(135deg, rgba(99, 102, 241, 0.25) 0%, rgba(168, 85, 247, 0.15) 100%)',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          padding: '18px 16px',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Holographic Watermark Glow */}
        <div
          style={{
            position: 'absolute',
            top: -20,
            right: -20,
            width: 100,
            height: 100,
            borderRadius: '50%',
            background: userPersona === 'aspirant' ? 'rgba(16, 185, 129, 0.3)' : 'rgba(99, 102, 241, 0.3)',
            filter: 'blur(30px)',
            pointerEvents: 'none'
          }}
        ></div>

        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 14 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"
              alt="User profile"
              style={{
                width: 52,
                height: 52,
                borderRadius: 14,
                border: '2px solid #10b981',
                objectFit: 'cover'
              }}
            />
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <h3 style={{ fontSize: 16, fontWeight: 800, color: '#fff' }}>
                  {userPersona === 'aspirant' ? 'Ashwin R.' : 'Kailas Nath'}
                </h3>
                {isVerified && <CheckCircle2 size={15} color="#10b981" title="Verified Member" />}
              </div>
              <div style={{ fontSize: 11, color: 'var(--primary-light)', fontWeight: 600 }}>
                {userPersona === 'aspirant'
                  ? `KEAM 2025 Aspirant (Rank #${parseInt(userRank || '0').toLocaleString('en-IN')})`
                  : 'College of Engineering, Trivandrum (CET)'}
              </div>
              <div style={{ fontSize: 10, color: 'var(--text-muted)', marginTop: 2 }}>
                {userPersona === 'aspirant'
                  ? `Quota: ${userCategory} • Kerala State Higher Education`
                  : 'B.Tech Computer Science & Engg • Semester 6'}
              </div>
            </div>
          </div>

          <div style={{ background: '#fff', padding: 4, borderRadius: 6 }}>
            <QrCode size={30} color="#000" />
          </div>
        </div>

        {/* Persona Switch button */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: 10, borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
          <span style={{ fontSize: 11, color: '#e2e8f0' }}>
            Current Mode: <strong>{userPersona === 'aspirant' ? 'KEAM Aspirant' : 'Enrolled Student'}</strong>
          </span>
          <button
            onClick={onTogglePersona}
            style={{
              background: 'rgba(255, 255, 255, 0.15)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              color: '#fff',
              borderRadius: 20,
              padding: '4px 10px',
              fontSize: 10,
              fontWeight: 700,
              cursor: 'pointer'
            }}
          >
            Switch to {userPersona === 'aspirant' ? 'Student View' : 'Aspirant View'}
          </button>
        </div>
      </div>

      {/* Quick Statistics Summary */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8 }}>
        <div
          className="glass-card"
          onClick={onOpenOptionList}
          style={{ cursor: 'pointer', padding: 10, textAlign: 'center' }}
        >
          <span style={{ fontSize: 10, color: 'var(--text-dim)', display: 'block' }}>Option List</span>
          <strong style={{ fontSize: 16, color: '#10b981', display: 'block', marginTop: 2 }}>
            {optionList.length}
          </strong>
          <span style={{ fontSize: 9, color: 'var(--accent-cyan)' }}>View priority</span>
        </div>

        <div className="glass-card" style={{ padding: 10, textAlign: 'center' }}>
          <span style={{ fontSize: 10, color: 'var(--text-dim)', display: 'block' }}>Saved Colleges</span>
          <strong style={{ fontSize: 16, color: '#fcd34d', display: 'block', marginTop: 2 }}>
            6
          </strong>
          <span style={{ fontSize: 9, color: 'var(--text-dim)' }}>Bookmarked</span>
        </div>

        <div className="glass-card" style={{ padding: 10, textAlign: 'center' }}>
          <span style={{ fontSize: 10, color: 'var(--text-dim)', display: 'block' }}>Events RSVP</span>
          <strong style={{ fontSize: 16, color: '#a5b4fc', display: 'block', marginTop: 2 }}>
            3
          </strong>
          <span style={{ fontSize: 9, color: 'var(--text-dim)' }}>Fests attending</span>
        </div>
      </div>

      {/* Student Verification Action */}
      <div
        className="glass-card interactive"
        onClick={() => setShowVerifyModal(true)}
        style={{
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '12px 14px',
          border: '1px solid rgba(16, 185, 129, 0.3)'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div
            style={{
              width: 34,
              height: 34,
              borderRadius: 8,
              background: 'rgba(16, 185, 129, 0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <ShieldCheck size={18} color="#10b981" />
          </div>
          <div>
            <div style={{ fontSize: 13, fontWeight: 700, color: '#fff' }}>
              Student Verification Badge
            </div>
            <div style={{ fontSize: 11, color: 'var(--text-muted)' }}>
              {isVerified ? '✓ Verified KTU Student badge active' : 'Upload College ID to unlock private campus hubs'}
            </div>
          </div>
        </div>
        <ChevronRight size={16} color="var(--text-dim)" />
      </div>

      {/* Options & Settings list */}
      <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', gap: 2, padding: 6 }}>
        <button
          onClick={onOpenOptionList}
          style={{
            background: 'none',
            border: 'none',
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '10px 12px',
            fontSize: 13,
            cursor: 'pointer',
            borderRadius: 8,
            transition: 'background 0.2s'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <ListOrdered size={16} color="#10b981" />
            <span>Manage KEAM Option List ({optionList.length})</span>
          </div>
          <ChevronRight size={14} color="var(--text-dim)" />
        </button>

        <button
          onClick={() => showToast?.('Kerala Engineering Cutoffs 2024-2025 synced')}
          style={{
            background: 'none',
            border: 'none',
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '10px 12px',
            fontSize: 13,
            cursor: 'pointer',
            borderRadius: 8
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <Sparkles size={16} color="#f59e0b" />
            <span>Sync Official CEE Allotment Data</span>
          </div>
          <span style={{ fontSize: 11, color: '#34d399' }}>Up to date</span>
        </button>
      </div>

      {/* Verification Simulation Modal */}
      {showVerifyModal && (
        <div className="modal-overlay" onClick={() => setShowVerifyModal(false)}>
          <div className="modal-bottom-sheet" onClick={(e) => e.stopPropagation()}>
            <div className="sheet-handle"></div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <h3 style={{ fontSize: 16, fontWeight: 700 }}>KTU Student Verification</h3>
              <button
                onClick={() => setShowVerifyModal(false)}
                style={{ background: 'none', border: 'none', color: '#fff', fontSize: 18, cursor: 'pointer' }}
              >
                ✕
              </button>
            </div>

            <p style={{ fontSize: 12, color: 'var(--text-muted)' }}>
              Upload your official College ID card or KEAM Admit Card to receive the verified peer badge and access campus-exclusive feeds.
            </p>

            <div
              style={{
                border: '2px dashed var(--border-active)',
                borderRadius: 14,
                padding: '24px 16px',
                textAlign: 'center',
                background: 'rgba(255, 255, 255, 0.02)'
              }}
            >
              <Upload size={32} color="#10b981" style={{ margin: '0 auto 10px' }} />
              <strong style={{ fontSize: 13, color: '#fff', display: 'block' }}>
                {idFileUploaded ? 'student_id_card_cet.png attached' : 'Tap to select ID Card image'}
              </strong>
              <span style={{ fontSize: 11, color: 'var(--text-dim)', marginTop: 4, display: 'block' }}>
                Supports JPG, PNG, PDF from CET, GECT, MEC, TKM, etc.
              </span>
            </div>

            <button
              className="btn-primary"
              onClick={handleSimulateVerification}
              style={{ marginTop: 8 }}
            >
              <CheckCircle2 size={15} />
              <span>Verify ID Card Instantly</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
