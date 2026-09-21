import React, { useState, useMemo } from 'react';
import { KERALA_COLLEGES } from '../data/keralaColleges';
import { 
  Building2, 
  Search, 
  Award, 
  TrendingUp, 
  Sparkles, 
  MapPin, 
  Layers, 
  ChevronRight, 
  Scale, 
  Check, 
  Briefcase,
  SlidersHorizontal 
} from 'lucide-react';
import CollegeDetailModal from './CollegeDetailModal';
import CollegeCompareModal from './CollegeCompareModal';

export default function CollegeDirectory({ selectedCollegeId, setSelectedCollegeId, showToast }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTypeFilter, setSelectedTypeFilter] = useState('ALL');
  const [selectedDistrict, setSelectedDistrict] = useState('ALL');
  const [sortBy, setSortBy] = useState('rating'); // 'rating', 'highest_ctc', 'median_ctc', 'nirf'
  const [compareList, setCompareList] = useState([]);
  const [showCompareModal, setShowCompareModal] = useState(false);

  // Active college for modal
  const activeCollege = useMemo(() => {
    if (!selectedCollegeId) return null;
    return KERALA_COLLEGES.find((c) => c.id === selectedCollegeId) || null;
  }, [selectedCollegeId]);

  // Comparison colleges
  const comparedColleges = useMemo(() => {
    return KERALA_COLLEGES.filter((c) => compareList.includes(c.id));
  }, [compareList]);

  // Filter & Sort
  const filteredColleges = useMemo(() => {
    return KERALA_COLLEGES.filter((college) => {
      // Search
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        college.name.toLowerCase().includes(q) ||
        college.shortName.toLowerCase().includes(q) ||
        college.code.toLowerCase().includes(q) ||
        college.district.toLowerCase().includes(q) ||
        college.location.toLowerCase().includes(q);

      if (!matchesSearch) return false;

      // Type Filter
      if (selectedTypeFilter === 'GOVT' && !college.type.includes('Government')) return false;
      if (selectedTypeFilter === 'AIDED' && !college.type.includes('Aided')) return false;
      if (selectedTypeFilter === 'AUTONOMOUS' && !college.type.includes('Autonomous')) return false;
      if (selectedTypeFilter === 'PRIVATE' && (college.type.includes('Government') || college.type.includes('Govt-Aided'))) return false;
      if (selectedTypeFilter === 'NAAC_APP' && college.naacGrade !== 'A++') return false;

      // District
      if (selectedDistrict !== 'ALL' && college.district !== selectedDistrict) return false;

      return true;
    }).sort((a, b) => {
      if (sortBy === 'rating') {
        return b.academicRating - a.academicRating;
      }
      if (sortBy === 'highest_ctc') {
        const valA = parseFloat(a.placements.highestCTC.replace(/[^0-9.]/g, ''));
        const valB = parseFloat(b.placements.highestCTC.replace(/[^0-9.]/g, ''));
        return valB - valA;
      }
      if (sortBy === 'median_ctc') {
        const valA = parseFloat(a.placements.medianCTC.replace(/[^0-9.]/g, ''));
        const valB = parseFloat(b.placements.medianCTC.replace(/[^0-9.]/g, ''));
        return valB - valA;
      }
      return 0;
    });
  }, [searchQuery, selectedTypeFilter, selectedDistrict, sortBy]);

  const toggleCompare = (collegeId, e) => {
    e?.stopPropagation();
    if (compareList.includes(collegeId)) {
      setCompareList(compareList.filter((id) => id !== collegeId));
    } else {
      if (compareList.length >= 3) {
        showToast?.('You can compare up to 3 colleges at once');
        return;
      }
      setCompareList([...compareList, collegeId]);
      showToast?.('Added to comparison');
    }
  };

  return (
    <div className="screen-container">
      {/* Directory Intro Header */}
      <div className="section-header">
        <div>
          <h2 className="section-title">
            <Building2 size={18} color="#10b981" />
            <span>Top Kerala Colleges</span>
          </h2>
          <span className="section-subtitle">
            Ranked by Academic Rigor, Placements & Events
          </span>
        </div>
      </div>

      {/* Search & Sort Controls */}
      <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', gap: 10, padding: 12 }}>
        {/* Search bar */}
        <div style={{ position: 'relative' }}>
          <Search size={15} color="var(--text-dim)" style={{ position: 'absolute', left: 12, top: 12 }} />
          <input
            type="text"
            className="custom-input"
            style={{ paddingLeft: 34, fontSize: 13 }}
            placeholder="Search CET, MEC, GECT, Trivandrum, Kochi..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              style={{
                position: 'absolute',
                right: 10,
                top: 10,
                background: 'none',
                border: 'none',
                color: 'var(--text-dim)',
                cursor: 'pointer'
              }}
            >
              ✕
            </button>
          )}
        </div>

        {/* Filter Pills */}
        <div className="filter-chip-row">
          <button
            className={`filter-chip ${selectedTypeFilter === 'ALL' ? 'active' : ''}`}
            onClick={() => setSelectedTypeFilter('ALL')}
          >
            All Institutions
          </button>
          <button
            className={`filter-chip ${selectedTypeFilter === 'GOVT' ? 'active' : ''}`}
            onClick={() => setSelectedTypeFilter('GOVT')}
          >
            Govt Only
          </button>
          <button
            className={`filter-chip ${selectedTypeFilter === 'AIDED' ? 'active' : ''}`}
            onClick={() => setSelectedTypeFilter('AIDED')}
          >
            Govt-Aided
          </button>
          <button
            className={`filter-chip ${selectedTypeFilter === 'AUTONOMOUS' ? 'active' : ''}`}
            onClick={() => setSelectedTypeFilter('AUTONOMOUS')}
          >
            Autonomous
          </button>
          <button
            className={`filter-chip ${selectedTypeFilter === 'NAAC_APP' ? 'active' : ''}`}
            onClick={() => setSelectedTypeFilter('NAAC_APP')}
          >
            NAAC A++ Only
          </button>
        </div>

        {/* District & Sort Dropdowns */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
          <div>
            <select
              className="custom-select"
              style={{ fontSize: 11, padding: '7px 8px' }}
              value={selectedDistrict}
              onChange={(e) => setSelectedDistrict(e.target.value)}
            >
              <option value="ALL">All Districts</option>
              <option value="Thiruvananthapuram">Thiruvananthapuram</option>
              <option value="Ernakulam">Ernakulam</option>
              <option value="Thrissur">Thrissur</option>
              <option value="Kollam">Kollam</option>
              <option value="Kottayam">Kottayam</option>
              <option value="Palakkad">Palakkad</option>
            </select>
          </div>
          <div>
            <select
              className="custom-select"
              style={{ fontSize: 11, padding: '7px 8px' }}
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="rating">Sort: Academic Rating</option>
              <option value="highest_ctc">Sort: Highest Package</option>
              <option value="median_ctc">Sort: Median Package</option>
            </select>
          </div>
        </div>
      </div>

      {/* Colleges List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {filteredColleges.map((college) => {
          const isComparing = compareList.includes(college.id);
          return (
            <div
              key={college.id}
              className="glass-card interactive"
              onClick={() => setSelectedCollegeId(college.id)}
              style={{
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                gap: 10,
                position: 'relative'
              }}
            >
              {/* Card Top */}
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 8 }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6, flexWrap: 'wrap', marginBottom: 4 }}>
                    <span className="pill-badge gold">{college.badge}</span>
                    <span style={{ fontSize: 10, background: 'rgba(255,255,255,0.08)', padding: '2px 6px', borderRadius: 4, color: 'var(--text-muted)' }}>
                      Code: {college.code}
                    </span>
                    <span style={{ fontSize: 10, color: 'var(--accent-cyan)' }}>
                      NAAC {college.naacGrade}
                    </span>
                  </div>

                  <h3 style={{ fontSize: 15, fontWeight: 700, color: '#fff' }}>
                    {college.shortName}
                  </h3>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 11, color: 'var(--text-muted)' }}>
                    <MapPin size={11} color="#10b981" />
                    <span>{college.district}</span>
                    <span>•</span>
                    <span>{college.type}</span>
                  </div>
                </div>

                {/* Compare Checkbox Button */}
                <button
                  onClick={(e) => toggleCompare(college.id, e)}
                  style={{
                    background: isComparing ? '#10b981' : 'rgba(255, 255, 255, 0.08)',
                    border: isComparing ? '1px solid #10b981' : '1px solid rgba(255, 255, 255, 0.2)',
                    color: isComparing ? '#000' : '#fff',
                    borderRadius: 8,
                    padding: '4px 8px',
                    fontSize: 10,
                    fontWeight: 700,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 4,
                    flexShrink: 0
                  }}
                  title="Compare with other colleges"
                >
                  <Scale size={11} />
                  <span>{isComparing ? 'Comparing' : 'Compare'}</span>
                </button>
              </div>

              {/* Metrics Grid */}
              <div
                style={{
                  background: 'rgba(0,0,0,0.25)',
                  borderRadius: 10,
                  padding: '8px 10px',
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: 6,
                  textAlign: 'center'
                }}
              >
                <div>
                  <span style={{ fontSize: 9, color: 'var(--text-dim)', display: 'block' }}>Highest CTC</span>
                  <strong style={{ fontSize: 12, color: '#fcd34d' }}>{college.placements.highestCTC}</strong>
                </div>
                <div>
                  <span style={{ fontSize: 9, color: 'var(--text-dim)', display: 'block' }}>Median CTC</span>
                  <strong style={{ fontSize: 12, color: '#34d399' }}>{college.placements.medianCTC}</strong>
                </div>
                <div>
                  <span style={{ fontSize: 9, color: 'var(--text-dim)', display: 'block' }}>Academic Score</span>
                  <strong style={{ fontSize: 12, color: '#a5b4fc' }}>★ {college.academicRating}</strong>
                </div>
              </div>

              {/* Fest & Details footer */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: 11, color: 'var(--text-muted)' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                  <Sparkles size={11} color="#f43f5e" />
                  <span>Fest: <strong>{college.flagshipFests[0]?.name}</strong></span>
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: 2, color: 'var(--accent-cyan)', fontWeight: 600 }}>
                  View Full Profile <ChevronRight size={13} />
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Floating Compare Action Bar */}
      {compareList.length > 0 && (
        <div
          style={{
            position: 'sticky',
            bottom: 74,
            zIndex: 80,
            background: 'rgba(15, 23, 42, 0.95)',
            border: '1px solid var(--primary)',
            borderRadius: 16,
            padding: '10px 14px',
            backdropFilter: 'blur(16px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            boxShadow: '0 8px 30px rgba(0,0,0,0.6)',
            animation: 'fadeIn 0.2s ease'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <Scale size={16} color="#10b981" />
            <span style={{ fontSize: 12, fontWeight: 700, color: '#fff' }}>
              {compareList.length} / 3 Colleges Selected
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <button
              onClick={() => setCompareList([])}
              style={{
                background: 'rgba(255, 255, 255, 0.08)',
                border: 'none',
                color: 'var(--text-muted)',
                borderRadius: 8,
                padding: '5px 8px',
                fontSize: 11,
                cursor: 'pointer'
              }}
            >
              Clear
            </button>
            <button
              className="btn-primary"
              style={{ padding: '6px 12px', fontSize: 12 }}
              onClick={() => setShowCompareModal(true)}
            >
              Compare Now
            </button>
          </div>
        </div>
      )}

      {/* Full Detail Modal */}
      {activeCollege && (
        <CollegeDetailModal
          college={activeCollege}
          onClose={() => setSelectedCollegeId(null)}
        />
      )}

      {/* Compare Modal */}
      {showCompareModal && (
        <CollegeCompareModal
          colleges={comparedColleges}
          onClose={() => setShowCompareModal(false)}
          onRemoveCollege={(id) => {
            const nextList = compareList.filter((cId) => cId !== id);
            setCompareList(nextList);
            if (nextList.length === 0) setShowCompareModal(false);
          }}
        />
      )}
    </div>
  );
}
