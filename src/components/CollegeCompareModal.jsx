import React from 'react';
import { X, Check, Award, Building2, TrendingUp, Sparkles, MapPin } from 'lucide-react';

export default function CollegeCompareModal({ colleges, onClose, onRemoveCollege }) {
  if (!colleges || colleges.length === 0) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="modal-bottom-sheet" 
        onClick={(e) => e.stopPropagation()}
        style={{ maxHeight: '94%' }}
      >
        <div className="sheet-handle"></div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <h3 style={{ fontSize: 17, fontWeight: 700 }}>Side-by-Side College Comparison</h3>
            <p style={{ fontSize: 11, color: 'var(--text-muted)' }}>
              Comparing {colleges.length} selected institutions
            </p>
          </div>
          <button
            onClick={onClose}
            style={{ background: 'none', border: 'none', color: '#fff', fontSize: 18, cursor: 'pointer' }}
          >
            ✕
          </button>
        </div>

        {/* Comparison Grid */}
        <div style={{ overflowX: 'auto', paddingBottom: 10 }}>
          <div style={{ display: 'grid', gridTemplateColumns: `140px repeat(${colleges.length}, minmax(160px, 1fr))`, gap: 8, fontSize: 11 }}>
            
            {/* Header row: Colleges */}
            <div style={{ padding: '8px 4px', fontWeight: 700, color: 'var(--text-muted)', display: 'flex', alignItems: 'center' }}>
              Institution
            </div>
            {colleges.map((col) => (
              <div
                key={col.id}
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 10,
                  padding: 10,
                  position: 'relative'
                }}
              >
                <button
                  onClick={() => onRemoveCollege(col.id)}
                  style={{
                    position: 'absolute',
                    top: 6,
                    right: 6,
                    background: 'rgba(255, 255, 255, 0.1)',
                    border: 'none',
                    color: '#fff',
                    borderRadius: '50%',
                    width: 18,
                    height: 18,
                    fontSize: 10,
                    cursor: 'pointer'
                  }}
                  title="Remove from compare"
                >
                  ✕
                </button>
                <span className="pill-badge gold" style={{ fontSize: 9, marginBottom: 4 }}>{col.code}</span>
                <div style={{ fontWeight: 700, color: '#fff', fontSize: 12, lineHeight: 1.2 }}>
                  {col.shortName}
                </div>
                <div style={{ fontSize: 10, color: 'var(--accent-cyan)', marginTop: 2 }}>
                  {col.district}
                </div>
              </div>
            ))}

            {/* Row: Type */}
            <div style={{ padding: '8px 4px', color: 'var(--text-dim)', borderTop: '1px solid var(--border-subtle)' }}>
              Type & Status
            </div>
            {colleges.map((col) => (
              <div key={col.id} style={{ padding: '8px', borderTop: '1px solid var(--border-subtle)', color: '#fff', fontWeight: 600 }}>
                {col.type}
              </div>
            ))}

            {/* Row: NAAC & NIRF */}
            <div style={{ padding: '8px 4px', color: 'var(--text-dim)', borderTop: '1px solid var(--border-subtle)' }}>
              Accreditation
            </div>
            {colleges.map((col) => (
              <div key={col.id} style={{ padding: '8px', borderTop: '1px solid var(--border-subtle)' }}>
                <span style={{ color: '#10b981', fontWeight: 700 }}>NAAC {col.naacGrade}</span>
                <div style={{ fontSize: 10, color: 'var(--text-muted)' }}>{col.nirfRank}</div>
              </div>
            ))}

            {/* Row: Highest Package */}
            <div style={{ padding: '8px 4px', color: 'var(--text-dim)', borderTop: '1px solid var(--border-subtle)' }}>
              Highest Package
            </div>
            {colleges.map((col) => (
              <div key={col.id} style={{ padding: '8px', borderTop: '1px solid var(--border-subtle)', color: '#fcd34d', fontWeight: 700 }}>
                {col.placements.highestCTC}
              </div>
            ))}

            {/* Row: Average Package */}
            <div style={{ padding: '8px 4px', color: 'var(--text-dim)', borderTop: '1px solid var(--border-subtle)' }}>
              Average Package
            </div>
            {colleges.map((col) => (
              <div key={col.id} style={{ padding: '8px', borderTop: '1px solid var(--border-subtle)', color: '#34d399', fontWeight: 700 }}>
                {col.placements.averageCTC}
              </div>
            ))}

            {/* Row: Tuition Fee */}
            <div style={{ padding: '8px 4px', color: 'var(--text-dim)', borderTop: '1px solid var(--border-subtle)' }}>
              Annual Tuition Fee
            </div>
            {colleges.map((col) => (
              <div key={col.id} style={{ padding: '8px', borderTop: '1px solid var(--border-subtle)', color: '#e2e8f0' }}>
                {col.annualTuitionFee}
              </div>
            ))}

            {/* Row: CSE State Merit Cutoff */}
            <div style={{ padding: '8px 4px', color: 'var(--text-dim)', borderTop: '1px solid var(--border-subtle)' }}>
              CSE Cutoff (SM)
            </div>
            {colleges.map((col) => (
              <div key={col.id} style={{ padding: '8px', borderTop: '1px solid var(--border-subtle)', color: '#6ee7b7', fontWeight: 700 }}>
                {col.keamCutoffs.CSE ? `#${col.keamCutoffs.CSE.SM.toLocaleString('en-IN')}` : 'N/A'}
              </div>
            ))}

            {/* Row: ECE State Merit Cutoff */}
            <div style={{ padding: '8px 4px', color: 'var(--text-dim)', borderTop: '1px solid var(--border-subtle)' }}>
              ECE Cutoff (SM)
            </div>
            {colleges.map((col) => (
              <div key={col.id} style={{ padding: '8px', borderTop: '1px solid var(--border-subtle)', color: '#a5b4fc', fontWeight: 700 }}>
                {col.keamCutoffs.ECE ? `#${col.keamCutoffs.ECE.SM.toLocaleString('en-IN')}` : 'N/A'}
              </div>
            ))}

            {/* Row: Flagship Fest */}
            <div style={{ padding: '8px 4px', color: 'var(--text-dim)', borderTop: '1px solid var(--border-subtle)' }}>
              Flagship Fest
            </div>
            {colleges.map((col) => (
              <div key={col.id} style={{ padding: '8px', borderTop: '1px solid var(--border-subtle)' }}>
                <span style={{ color: '#f472b6', fontWeight: 600 }}>{col.flagshipFests[0]?.name}</span>
                <div style={{ fontSize: 10, color: 'var(--text-dim)' }}>{col.flagshipFests[0]?.type}</div>
              </div>
            ))}

            {/* Row: Overall Rating */}
            <div style={{ padding: '8px 4px', color: 'var(--text-dim)', borderTop: '1px solid var(--border-subtle)' }}>
              Peer Rating
            </div>
            {colleges.map((col) => (
              <div key={col.id} style={{ padding: '8px', borderTop: '1px solid var(--border-subtle)', color: '#fcd34d', fontWeight: 700 }}>
                ★ {col.academicRating} / 5.0
              </div>
            ))}

          </div>
        </div>
      </div>
    </div>
  );
}
