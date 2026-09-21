import React, { useState } from 'react';
import { BRANCH_NAMES, KEAM_CATEGORIES } from '../data/keralaColleges';
import { 
  Building2, 
  GraduationCap, 
  Award, 
  TrendingUp, 
  Sparkles, 
  MapPin, 
  Calendar, 
  CheckCircle2, 
  Coffee, 
  Users, 
  Briefcase,
  X,
  ExternalLink
} from 'lucide-react';

export default function CollegeDetailModal({ college, onClose, onAddToOptions }) {
  const [activeTab, setActiveTab] = useState('overview'); // 'overview', 'cutoffs', 'placements', 'campus'
  const [selectedCutoffCategory, setSelectedCutoffCategory] = useState('SM');

  if (!college) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="modal-bottom-sheet" 
        onClick={(e) => e.stopPropagation()}
        style={{ maxHeight: '92%' }}
      >
        <div className="sheet-handle"></div>

        {/* Modal Header */}
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 10 }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, flexWrap: 'wrap', marginBottom: 4 }}>
              <span className="pill-badge gold">{college.badge}</span>
              <span style={{ fontSize: 10, background: 'rgba(255,255,255,0.1)', padding: '2px 6px', borderRadius: 4 }}>
                Code: {college.code}
              </span>
              <span style={{ fontSize: 10, color: 'var(--accent-cyan)' }}>
                NAAC {college.naacGrade}
              </span>
              <span style={{ fontSize: 10, color: 'var(--text-muted)' }}>
                Estd. {college.established}
              </span>
            </div>
            <h2 style={{ fontSize: 18, fontWeight: 800, color: '#fff', lineHeight: 1.2 }}>
              {college.name}
            </h2>
            <div style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 11, color: 'var(--text-muted)', marginTop: 4 }}>
              <MapPin size={12} color="#10b981" />
              <span>{college.location}</span>
            </div>
          </div>

          <button
            onClick={onClose}
            style={{
              width: 32,
              height: 32,
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.08)',
              border: 'none',
              color: '#fff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer'
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Navigation Tabs */}
        <div style={{ display: 'flex', borderBottom: '1px solid var(--border-subtle)', gap: 12, overflowX: 'auto', paddingBottom: 2 }}>
          {[
            { id: 'overview', label: 'Overview' },
            { id: 'cutoffs', label: 'KEAM Cutoffs' },
            { id: 'placements', label: 'Placements & CTC' },
            { id: 'campus', label: 'Fests & Clubs' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                background: 'none',
                border: 'none',
                borderBottom: activeTab === tab.id ? '2px solid #10b981' : '2px solid transparent',
                color: activeTab === tab.id ? '#10b981' : 'var(--text-muted)',
                fontWeight: activeTab === tab.id ? 700 : 500,
                fontSize: 12,
                padding: '6px 4px',
                cursor: 'pointer',
                whiteSpace: 'nowrap'
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab 1: Overview */}
        {activeTab === 'overview' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {/* Quick Ratings Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 8 }}>
              <div style={{ background: 'rgba(255,255,255,0.04)', borderRadius: 10, padding: '8px 4px', textAlign: 'center' }}>
                <span style={{ fontSize: 10, color: 'var(--text-dim)', display: 'block' }}>Academics</span>
                <strong style={{ color: '#34d399', fontSize: 13 }}>★ {college.academicRating}</strong>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.04)', borderRadius: 10, padding: '8px 4px', textAlign: 'center' }}>
                <span style={{ fontSize: 10, color: 'var(--text-dim)', display: 'block' }}>Placements</span>
                <strong style={{ color: '#fcd34d', fontSize: 13 }}>★ {college.placementRating}</strong>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.04)', borderRadius: 10, padding: '8px 4px', textAlign: 'center' }}>
                <span style={{ fontSize: 10, color: 'var(--text-dim)', display: 'block' }}>Campus Life</span>
                <strong style={{ color: '#a5b4fc', fontSize: 13 }}>★ {college.campusLifeRating}</strong>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.04)', borderRadius: 10, padding: '8px 4px', textAlign: 'center' }}>
                <span style={{ fontSize: 10, color: 'var(--text-dim)', display: 'block' }}>Fests</span>
                <strong style={{ color: '#f472b6', fontSize: 13 }}>★ {college.eventsRating}</strong>
              </div>
            </div>

            {/* Highlights */}
            <div style={{ background: 'rgba(16, 185, 129, 0.08)', border: '1px solid rgba(16, 185, 129, 0.2)', borderRadius: 12, padding: 12 }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: '#34d399', marginBottom: 4, display: 'flex', alignItems: 'center', gap: 6 }}>
                <Sparkles size={14} /> College Spotlight
              </div>
              <p style={{ fontSize: 12, color: '#e2e8f0', lineHeight: 1.5 }}>
                {college.highlights}
              </p>
            </div>

            {/* Key Facts */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
              <div style={{ background: 'rgba(255,255,255,0.03)', padding: 10, borderRadius: 10, border: '1px solid var(--border-subtle)' }}>
                <span style={{ fontSize: 10, color: 'var(--text-dim)' }}>Institution Type</span>
                <div style={{ fontWeight: 600, fontSize: 12, color: '#fff', marginTop: 2 }}>{college.type}</div>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.03)', padding: 10, borderRadius: 10, border: '1px solid var(--border-subtle)' }}>
                <span style={{ fontSize: 10, color: 'var(--text-dim)' }}>NIRF Standing</span>
                <div style={{ fontWeight: 600, fontSize: 12, color: '#fcd34d', marginTop: 2 }}>{college.nirfRank}</div>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.03)', padding: 10, borderRadius: 10, border: '1px solid var(--border-subtle)' }}>
                <span style={{ fontSize: 10, color: 'var(--text-dim)' }}>Tuition Fee</span>
                <div style={{ fontWeight: 600, fontSize: 12, color: '#34d399', marginTop: 2 }}>{college.annualTuitionFee}</div>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.03)', padding: 10, borderRadius: 10, border: '1px solid var(--border-subtle)' }}>
                <span style={{ fontSize: 10, color: 'var(--text-dim)' }}>Highest CTC</span>
                <div style={{ fontWeight: 600, fontSize: 12, color: '#fcd34d', marginTop: 2 }}>{college.placements.highestCTC}</div>
              </div>
            </div>

            {/* Hostels & Infrastructure */}
            <div>
              <h4 style={{ fontSize: 13, fontWeight: 700, marginBottom: 6, display: 'flex', alignItems: 'center', gap: 6 }}>
                <Coffee size={14} color="#f59e0b" /> Hostel & Living
              </h4>
              <p style={{ fontSize: 12, color: 'var(--text-muted)', lineHeight: 1.5, background: 'rgba(255,255,255,0.02)', padding: 10, borderRadius: 8 }}>
                {college.hostelFacilities}
              </p>
            </div>
          </div>
        )}

        {/* Tab 2: KEAM Cutoffs Table */}
        {activeTab === 'cutoffs' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span style={{ fontSize: 12, color: 'var(--text-muted)' }}>Select Quota / Category:</span>
              <select
                className="custom-select"
                style={{ width: 'auto', padding: '5px 10px', fontSize: 12 }}
                value={selectedCutoffCategory}
                onChange={(e) => setSelectedCutoffCategory(e.target.value)}
              >
                {KEAM_CATEGORIES.map((c) => (
                  <option key={c.code} value={c.code}>
                    {c.code} - {c.name}
                  </option>
                ))}
              </select>
            </div>

            <div style={{ overflowX: 'auto', borderRadius: 10, border: '1px solid var(--border-subtle)' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 12 }}>
                <thead>
                  <tr style={{ background: 'rgba(255, 255, 255, 0.06)', textAlign: 'left' }}>
                    <th style={{ padding: '10px 12px', color: 'var(--text-muted)', fontWeight: 600 }}>Branch</th>
                    <th style={{ padding: '10px 12px', color: 'var(--text-muted)', fontWeight: 600 }}>Code</th>
                    <th style={{ padding: '10px 12px', color: 'var(--primary)', fontWeight: 700, textAlign: 'right' }}>
                      {selectedCutoffCategory} Cutoff
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {Object.entries(college.keamCutoffs).map(([bKey, cutoffs]) => (
                    <tr key={bKey} style={{ borderTop: '1px solid var(--border-subtle)' }}>
                      <td style={{ padding: '10px 12px', fontWeight: 600, color: '#fff' }}>
                        {BRANCH_NAMES[bKey] || bKey}
                      </td>
                      <td style={{ padding: '10px 12px', color: 'var(--text-dim)' }}>
                        {bKey}
                      </td>
                      <td style={{ padding: '10px 12px', textAlign: 'right', fontWeight: 700, color: '#34d399' }}>
                        #{cutoffs[selectedCutoffCategory]?.toLocaleString('en-IN') || cutoffs['SM']?.toLocaleString('en-IN') || 'N/A'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p style={{ fontSize: 11, color: 'var(--text-dim)' }}>
              * Data sourced from official CEE Kerala Last Rank Details. Actual allotment ranks may fluctuate based on seat matrix and applicant trends.
            </p>
          </div>
        )}

        {/* Tab 3: Placements */}
        {activeTab === 'placements' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {/* Stat Cards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8 }}>
              <div style={{ background: 'rgba(245, 158, 11, 0.1)', border: '1px solid rgba(245, 158, 11, 0.25)', borderRadius: 10, padding: 10, textAlign: 'center' }}>
                <span style={{ fontSize: 10, color: '#fbbf24' }}>Highest CTC</span>
                <strong style={{ fontSize: 16, color: '#fcd34d', display: 'block', marginTop: 2 }}>
                  {college.placements.highestCTC}
                </strong>
              </div>
              <div style={{ background: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.25)', borderRadius: 10, padding: 10, textAlign: 'center' }}>
                <span style={{ fontSize: 10, color: '#34d399' }}>Average CTC</span>
                <strong style={{ fontSize: 16, color: '#6ee7b7', display: 'block', marginTop: 2 }}>
                  {college.placements.averageCTC}
                </strong>
              </div>
              <div style={{ background: 'rgba(99, 102, 241, 0.1)', border: '1px solid rgba(99, 102, 241, 0.25)', borderRadius: 10, padding: 10, textAlign: 'center' }}>
                <span style={{ fontSize: 10, color: '#a5b4fc' }}>Placement Rate</span>
                <strong style={{ fontSize: 16, color: '#c7d2fe', display: 'block', marginTop: 2 }}>
                  {college.placements.placedPercentage}
                </strong>
              </div>
            </div>

            {/* Recruiters */}
            <div>
              <h4 style={{ fontSize: 13, fontWeight: 700, marginBottom: 8, display: 'flex', alignItems: 'center', gap: 6 }}>
                <Briefcase size={14} color="#10b981" /> Top Marquee Recruiters
              </h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {college.placements.topRecruiters.map((rec) => (
                  <span
                    key={rec}
                    style={{
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: 8,
                      padding: '5px 10px',
                      fontSize: 11,
                      fontWeight: 600,
                      color: '#fff'
                    }}
                  >
                    {rec}
                  </span>
                ))}
              </div>
            </div>

            <div style={{ fontSize: 11, color: 'var(--text-muted)', background: 'rgba(0,0,0,0.2)', padding: 10, borderRadius: 8 }}>
              Total Offers: <strong>{college.placements.totalOffers}</strong> across software engineering, consulting, core manufacturing, and banking domains.
            </div>
          </div>
        )}

        {/* Tab 4: Fests & Clubs */}
        {activeTab === 'campus' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {/* Flagship Fests */}
            <div>
              <h4 style={{ fontSize: 13, fontWeight: 700, marginBottom: 8, display: 'flex', alignItems: 'center', gap: 6 }}>
                <Sparkles size={14} color="#f43f5e" /> Flagship College Fests
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {college.flagshipFests.map((fest) => (
                  <div
                    key={fest.name}
                    style={{
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: 10,
                      padding: 10
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <strong style={{ color: '#fff', fontSize: 13 }}>{fest.name}</strong>
                      <span className="pill-badge category">{fest.type}</span>
                    </div>
                    <p style={{ fontSize: 11, color: 'var(--text-muted)', marginTop: 4 }}>
                      {fest.tagline}
                    </p>
                    <span style={{ fontSize: 10, color: 'var(--primary-light)', display: 'block', marginTop: 4 }}>
                      Footfall: {fest.footfall}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Active Student Clubs */}
            <div>
              <h4 style={{ fontSize: 13, fontWeight: 700, marginBottom: 8, display: 'flex', alignItems: 'center', gap: 6 }}>
                <Users size={14} color="#06b6d4" /> Student Clubs & Societies
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                {college.activeClubs.map((club) => (
                  <div
                    key={club}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 8,
                      fontSize: 12,
                      color: '#e2e8f0',
                      background: 'rgba(255,255,255,0.02)',
                      padding: '8px 10px',
                      borderRadius: 8
                    }}
                  >
                    <CheckCircle2 size={13} color="#10b981" style={{ flexShrink: 0 }} />
                    <span>{club}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
