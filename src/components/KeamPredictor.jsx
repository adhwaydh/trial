import React, { useState, useMemo } from 'react';
import { 
  KERALA_COLLEGES, 
  BRANCH_NAMES, 
  KEAM_CATEGORIES 
} from '../data/keralaColleges';
import { 
  Compass, 
  CheckCircle2, 
  AlertCircle, 
  Sparkles, 
  Plus, 
  Check, 
  ListOrdered, 
  Trash2, 
  ArrowUp, 
  ArrowDown, 
  Download, 
  Info,
  Filter,
  SlidersHorizontal,
  ChevronRight
} from 'lucide-react';

export default function KeamPredictor({ 
  userRank, 
  setUserRank, 
  userCategory, 
  setUserCategory, 
  optionList, 
  setOptionList,
  onSelectCollege,
  showToast 
}) {
  const [selectedBranch, setSelectedBranch] = useState('ALL');
  const [selectedCollegeType, setSelectedCollegeType] = useState('ALL');
  const [selectedDistrict, setSelectedDistrict] = useState('ALL');
  const [activeChanceTab, setActiveChanceTab] = useState('all'); // 'all', 'safe', 'target', 'dream'
  const [showOptionListModal, setShowOptionListModal] = useState(false);
  const [showCategoryInfo, setShowCategoryInfo] = useState(false);

  // Quick Preset Ranks for instant demoing
  const quickRanks = [1200, 3800, 8500, 16000, 28000];

  // Prediction calculation engine
  const predictions = useMemo(() => {
    const rank = parseInt(userRank, 10);
    if (!rank || isNaN(rank) || rank <= 0) return [];

    const results = [];

    KERALA_COLLEGES.forEach((college) => {
      // Filter by College Type
      if (selectedCollegeType === 'GOVT' && !college.type.includes('Government') && !college.type.includes('Aided') && !college.type.includes('Cost Sharing')) {
        return;
      }
      if (selectedCollegeType === 'AUTONOMOUS' && !college.type.includes('Autonomous')) {
        return;
      }
      if (selectedCollegeType === 'PRIVATE' && (college.type.includes('Government') || college.type.includes('Govt-Aided'))) {
        return;
      }

      // Filter by District
      if (selectedDistrict !== 'ALL' && college.district !== selectedDistrict) {
        return;
      }

      // Check branches
      Object.entries(college.keamCutoffs).forEach(([branchKey, categoryCutoffs]) => {
        if (selectedBranch !== 'ALL' && selectedBranch !== branchKey) {
          return;
        }

        const cutoff = categoryCutoffs[userCategory] || categoryCutoffs['SM'];
        if (!cutoff) return;

        let status = null;
        let delta = cutoff - rank;
        let probabilityText = '';

        if (rank <= cutoff * 0.90) {
          status = 'safe';
          probabilityText = 'High Probability (Safe Choice)';
        } else if (rank <= cutoff * 1.15) {
          status = 'target';
          probabilityText = 'Competitive Match (Round 1 / 2 Target)';
        } else if (rank <= cutoff * 1.45) {
          status = 'dream';
          probabilityText = 'Dream Choice (High Priority Option)';
        }

        if (status) {
          results.push({
            id: `${college.id}-${branchKey}`,
            collegeId: college.id,
            collegeCode: college.code,
            collegeName: college.name,
            shortName: college.shortName,
            collegeType: college.type,
            district: college.district,
            branchKey,
            branchName: BRANCH_NAMES[branchKey] || branchKey,
            cutoff,
            userRank: rank,
            delta,
            status,
            probabilityText,
            fee: college.annualTuitionFee,
            highestCTC: college.placements.highestCTC,
            averageCTC: college.placements.averageCTC,
            naac: college.naacGrade,
            fest: college.flagshipFests[0]?.name
          });
        }
      });
    });

    // Sort: safe first, then target, then dream, and then by cutoff difference
    const priorityWeight = { safe: 1, target: 2, dream: 3 };
    return results.sort((a, b) => {
      if (priorityWeight[a.status] !== priorityWeight[b.status]) {
        return priorityWeight[a.status] - priorityWeight[b.status];
      }
      return b.delta - a.delta;
    });
  }, [userRank, userCategory, selectedBranch, selectedCollegeType, selectedDistrict]);

  // Counts for tabs
  const counts = useMemo(() => {
    return {
      all: predictions.length,
      safe: predictions.filter((p) => p.status === 'safe').length,
      target: predictions.filter((p) => p.status === 'target').length,
      dream: predictions.filter((p) => p.status === 'dream').length
    };
  }, [predictions]);

  // Filtered view
  const filteredPredictions = useMemo(() => {
    if (activeChanceTab === 'all') return predictions;
    return predictions.filter((p) => p.status === activeChanceTab);
  }, [predictions, activeChanceTab]);

  // Option list toggle helper
  const isInOptionList = (item) => {
    return optionList.some((opt) => opt.id === item.id);
  };

  const handleToggleOption = (item) => {
    if (isInOptionList(item)) {
      setOptionList((prev) => prev.filter((opt) => opt.id !== item.id));
      showToast?.(`Removed ${item.shortName} (${item.branchKey}) from Option List`);
    } else {
      setOptionList((prev) => [...prev, { ...item, priority: prev.length + 1 }]);
      showToast?.(`Added to KEAM Option List (#${optionList.length + 1})`);
    }
  };

  // Reorder options
  const moveOption = (index, direction) => {
    const newList = [...optionList];
    const targetIndex = index + direction;
    if (targetIndex < 0 || targetIndex >= newList.length) return;
    const temp = newList[index];
    newList[index] = newList[targetIndex];
    newList[targetIndex] = temp;
    // update priorities
    newList.forEach((item, idx) => {
      item.priority = idx + 1;
    });
    setOptionList(newList);
  };

  const removeOption = (id) => {
    const updated = optionList
      .filter((opt) => opt.id !== id)
      .map((item, idx) => ({ ...item, priority: idx + 1 }));
    setOptionList(updated);
    showToast?.('Option removed');
  };

  return (
    <div className="screen-container">
      {/* Banner */}
      <div
        className="glass-card"
        style={{
          background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.15) 0%, rgba(6, 182, 212, 0.1) 100%)',
          borderColor: 'rgba(16, 185, 129, 0.3)',
          padding: '16px 14px'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 6 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <Compass size={18} color="#10b981" />
            <h2 style={{ fontSize: 16, fontWeight: 700 }}>KEAM 2025 College Recommender</h2>
          </div>
          <button
            onClick={() => setShowOptionListModal(true)}
            style={{
              background: optionList.length > 0 ? '#10b981' : 'rgba(255, 255, 255, 0.1)',
              color: optionList.length > 0 ? '#000' : '#fff',
              border: 'none',
              borderRadius: 20,
              padding: '4px 10px',
              fontSize: 11,
              fontWeight: 700,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: 5
            }}
          >
            <ListOrdered size={13} />
            <span>Options ({optionList.length})</span>
          </button>
        </div>
        <p style={{ fontSize: 11, color: 'var(--text-muted)' }}>
          Real-time probability matching based on official CEE Kerala last rank statistics across Allotment Rounds & Mop-up.
        </p>
      </div>

      {/* Input Controls */}
      <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        {/* Rank Input */}
        <div className="input-group">
          <div className="input-label">
            <span>Your KEAM Engineering Rank</span>
            <span style={{ fontSize: 11, color: 'var(--primary)', fontWeight: 700 }}>
              {userRank ? `#${parseInt(userRank).toLocaleString('en-IN')}` : 'Enter Rank'}
            </span>
          </div>
          <input
            type="number"
            className="custom-input"
            placeholder="e.g. 1450, 4800, 12500"
            value={userRank}
            onChange={(e) => setUserRank(e.target.value)}
            min="1"
            max="80000"
          />

          {/* Quick Rank Chips */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, flexWrap: 'wrap', marginTop: 4 }}>
            <span style={{ fontSize: 10, color: 'var(--text-dim)' }}>Try rank:</span>
            {quickRanks.map((qr) => (
              <button
                key={qr}
                onClick={() => setUserRank(qr.toString())}
                style={{
                  background: userRank === qr.toString() ? 'rgba(16, 185, 129, 0.25)' : 'rgba(255, 255, 255, 0.05)',
                  border: userRank === qr.toString() ? '1px solid #10b981' : '1px solid rgba(255, 255, 255, 0.1)',
                  color: userRank === qr.toString() ? '#34d399' : 'var(--text-muted)',
                  borderRadius: 12,
                  padding: '2px 8px',
                  fontSize: 10,
                  cursor: 'pointer'
                }}
              >
                #{qr.toLocaleString('en-IN')}
              </button>
            ))}
          </div>
        </div>

        {/* Category Selector */}
        <div className="input-group">
          <div className="input-label">
            <span>Reservation Category / Quota</span>
            <button
              onClick={() => setShowCategoryInfo(!showCategoryInfo)}
              style={{ background: 'none', border: 'none', color: 'var(--accent-cyan)', fontSize: 11, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 3 }}
            >
              <Info size={11} /> {showCategoryInfo ? 'Hide Guide' : 'What is this?'}
            </button>
          </div>

          <select
            className="custom-select"
            value={userCategory}
            onChange={(e) => setUserCategory(e.target.value)}
          >
            {KEAM_CATEGORIES.map((cat) => (
              <option key={cat.code} value={cat.code}>
                {cat.name}
              </option>
            ))}
          </select>

          {showCategoryInfo && (
            <div style={{ background: 'rgba(6, 182, 212, 0.1)', border: '1px solid rgba(6, 182, 212, 0.3)', borderRadius: 8, padding: 8, fontSize: 11, color: '#a5f3fc' }}>
              <strong>Category Info:</strong> CEE Kerala reserves seats for State Merit (SM), SEBC communities (Ezhava, Muslim, LC, BH), EWS (10% General Quota), Fee Waiver (FW), and SC/ST with separate closing ranks.
            </div>
          )}
        </div>

        {/* Branch Chips */}
        <div className="input-group">
          <div className="input-label">
            <span>Preferred Branch</span>
            <span style={{ fontSize: 11, color: 'var(--text-dim)' }}>Filter by stream</span>
          </div>
          <div className="filter-chip-row">
            <button
              className={`filter-chip ${selectedBranch === 'ALL' ? 'active' : ''}`}
              onClick={() => setSelectedBranch('ALL')}
            >
              All Branches
            </button>
            <button
              className={`filter-chip ${selectedBranch === 'CSE' ? 'active' : ''}`}
              onClick={() => setSelectedBranch('CSE')}
            >
              Computer Science
            </button>
            <button
              className={`filter-chip ${selectedBranch === 'AI_DS' ? 'active' : ''}`}
              onClick={() => setSelectedBranch('AI_DS')}
            >
              AI & Data Science
            </button>
            <button
              className={`filter-chip ${selectedBranch === 'ECE' ? 'active' : ''}`}
              onClick={() => setSelectedBranch('ECE')}
            >
              Electronics (ECE)
            </button>
            <button
              className={`filter-chip ${selectedBranch === 'EEE' ? 'active' : ''}`}
              onClick={() => setSelectedBranch('EEE')}
            >
              Electrical (EEE)
            </button>
            <button
              className={`filter-chip ${selectedBranch === 'ME' ? 'active' : ''}`}
              onClick={() => setSelectedBranch('ME')}
            >
              Mechanical (ME)
            </button>
            <button
              className={`filter-chip ${selectedBranch === 'CE' ? 'active' : ''}`}
              onClick={() => setSelectedBranch('CE')}
            >
              Civil (CE)
            </button>
          </div>
        </div>

        {/* College Type & District Filters */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
          <div>
            <span style={{ fontSize: 11, color: 'var(--text-muted)', marginBottom: 4, display: 'block' }}>College Type</span>
            <select
              className="custom-select"
              style={{ fontSize: 11, padding: '7px 10px' }}
              value={selectedCollegeType}
              onChange={(e) => setSelectedCollegeType(e.target.value)}
            >
              <option value="ALL">All Types</option>
              <option value="GOVT">Govt / Aided Only</option>
              <option value="AUTONOMOUS">Autonomous Only</option>
              <option value="PRIVATE">Top Private Only</option>
            </select>
          </div>
          <div>
            <span style={{ fontSize: 11, color: 'var(--text-muted)', marginBottom: 4, display: 'block' }}>District</span>
            <select
              className="custom-select"
              style={{ fontSize: 11, padding: '7px 10px' }}
              value={selectedDistrict}
              onChange={(e) => setSelectedDistrict(e.target.value)}
            >
              <option value="ALL">All Kerala</option>
              <option value="Thiruvananthapuram">Thiruvananthapuram</option>
              <option value="Ernakulam">Ernakulam (Kochi)</option>
              <option value="Thrissur">Thrissur</option>
              <option value="Kollam">Kollam</option>
              <option value="Kottayam">Kottayam</option>
              <option value="Palakkad">Palakkad</option>
            </select>
          </div>
        </div>
      </div>

      {/* Probability Tabs */}
      <div style={{ display: 'flex', gap: 6, overflowX: 'auto', paddingBottom: 2 }}>
        <button
          onClick={() => setActiveChanceTab('all')}
          style={{
            flex: 1,
            padding: '8px 4px',
            background: activeChanceTab === 'all' ? 'rgba(255, 255, 255, 0.15)' : 'rgba(255, 255, 255, 0.05)',
            border: activeChanceTab === 'all' ? '1px solid #fff' : '1px solid transparent',
            borderRadius: 10,
            color: '#fff',
            fontSize: 11,
            fontWeight: 600,
            cursor: 'pointer',
            textAlign: 'center'
          }}
        >
          All ({counts.all})
        </button>
        <button
          onClick={() => setActiveChanceTab('safe')}
          style={{
            flex: 1,
            padding: '8px 4px',
            background: activeChanceTab === 'safe' ? 'rgba(16, 185, 129, 0.25)' : 'rgba(16, 185, 129, 0.08)',
            border: activeChanceTab === 'safe' ? '1px solid #10b981' : '1px solid transparent',
            borderRadius: 10,
            color: '#34d399',
            fontSize: 11,
            fontWeight: 600,
            cursor: 'pointer',
            textAlign: 'center'
          }}
        >
          🟢 Safe ({counts.safe})
        </button>
        <button
          onClick={() => setActiveChanceTab('target')}
          style={{
            flex: 1,
            padding: '8px 4px',
            background: activeChanceTab === 'target' ? 'rgba(245, 158, 11, 0.25)' : 'rgba(245, 158, 11, 0.08)',
            border: activeChanceTab === 'target' ? '1px solid #f59e0b' : '1px solid transparent',
            borderRadius: 10,
            color: '#fbbf24',
            fontSize: 11,
            fontWeight: 600,
            cursor: 'pointer',
            textAlign: 'center'
          }}
        >
          🟡 Target ({counts.target})
        </button>
        <button
          onClick={() => setActiveChanceTab('dream')}
          style={{
            flex: 1,
            padding: '8px 4px',
            background: activeChanceTab === 'dream' ? 'rgba(236, 72, 153, 0.25)' : 'rgba(236, 72, 153, 0.08)',
            border: activeChanceTab === 'dream' ? '1px solid #ec4899' : '1px solid transparent',
            borderRadius: 10,
            color: '#f472b6',
            fontSize: 11,
            fontWeight: 600,
            cursor: 'pointer',
            textAlign: 'center'
          }}
        >
          🔴 Dream ({counts.dream})
        </button>
      </div>

      {/* Results Header */}
      <div className="section-header">
        <div>
          <span className="section-title">
            <Sparkles size={16} color="#10b981" />
            <span>Recommended Options ({filteredPredictions.length})</span>
          </span>
          <span className="section-subtitle">
            Rank #{parseInt(userRank || '0').toLocaleString('en-IN')} in {userCategory} Quota
          </span>
        </div>
      </div>

      {/* Prediction Cards List */}
      {filteredPredictions.length === 0 ? (
        <div
          className="glass-card"
          style={{ textAlign: 'center', padding: '30px 16px', color: 'var(--text-muted)' }}
        >
          <AlertCircle size={32} color="#f59e0b" style={{ margin: '0 auto 10px' }} />
          <h3 style={{ fontSize: 14, color: '#fff', marginBottom: 4 }}>No Colleges Match Your Filters</h3>
          <p style={{ fontSize: 12 }}>
            Try expanding your branch preferences, switching college types, or testing a different rank range.
          </p>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {filteredPredictions.map((item) => {
            const inList = isInOptionList(item);
            return (
              <div
                key={item.id}
                className="glass-card interactive"
                style={{
                  padding: '14px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 10,
                  borderLeft: `4px solid ${
                    item.status === 'safe'
                      ? 'var(--safe-green)'
                      : item.status === 'target'
                      ? 'var(--target-yellow)'
                      : 'var(--dream-red)'
                  }`
                }}
              >
                {/* Card Top: Badges & College Code */}
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 8 }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6, flexWrap: 'wrap', marginBottom: 4 }}>
                      <span className={`pill-badge ${item.status}`}>
                        {item.status === 'safe' && '🟢 Safe (95%+ Chance)'}
                        {item.status === 'target' && '🟡 Target (Competitive)'}
                        {item.status === 'dream' && '🔴 Dream Choice (High Priority)'}
                      </span>
                      <span style={{ fontSize: 10, background: 'rgba(255, 255, 255, 0.08)', padding: '2px 6px', borderRadius: 6, color: 'var(--text-muted)' }}>
                        Code: {item.collegeCode}
                      </span>
                      <span style={{ fontSize: 10, color: 'var(--accent-cyan)' }}>
                        NAAC {item.naac}
                      </span>
                    </div>

                    <h3
                      onClick={() => onSelectCollege(item.collegeId)}
                      style={{ fontSize: 15, fontWeight: 700, cursor: 'pointer', color: '#fff' }}
                    >
                      {item.shortName}
                    </h3>
                    <div style={{ fontSize: 11, color: 'var(--primary-light)', fontWeight: 600 }}>
                      {item.branchName}
                    </div>
                  </div>

                  {/* Option Add / Remove Action */}
                  <button
                    onClick={() => handleToggleOption(item)}
                    style={{
                      width: 32,
                      height: 32,
                      borderRadius: '50%',
                      background: inList ? '#10b981' : 'rgba(255, 255, 255, 0.08)',
                      border: inList ? '1px solid #10b981' : '1px solid rgba(255, 255, 255, 0.2)',
                      color: inList ? '#000' : '#fff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      flexShrink: 0,
                      transition: 'all 0.2s'
                    }}
                    title={inList ? 'Remove from Option List' : 'Add to Option List'}
                  >
                    {inList ? <Check size={16} strokeWidth={3} /> : <Plus size={16} />}
                  </button>
                </div>

                {/* Rank & Cutoff Metrics */}
                <div
                  style={{
                    background: 'rgba(0, 0, 0, 0.25)',
                    borderRadius: 10,
                    padding: '8px 10px',
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr 1fr',
                    gap: 6,
                    fontSize: 11,
                    textAlign: 'center'
                  }}
                >
                  <div>
                    <span style={{ color: 'var(--text-dim)', fontSize: 10, display: 'block' }}>Last Cutoff</span>
                    <strong style={{ color: '#fff', fontSize: 12 }}>#{item.cutoff.toLocaleString('en-IN')}</strong>
                  </div>
                  <div>
                    <span style={{ color: 'var(--text-dim)', fontSize: 10, display: 'block' }}>Margin Cushion</span>
                    <strong style={{ color: item.delta >= 0 ? '#34d399' : '#f472b6', fontSize: 12 }}>
                      {item.delta >= 0 ? `+${item.delta}` : item.delta}
                    </strong>
                  </div>
                  <div>
                    <span style={{ color: 'var(--text-dim)', fontSize: 10, display: 'block' }}>Highest CTC</span>
                    <strong style={{ color: '#fcd34d', fontSize: 12 }}>{item.highestCTC}</strong>
                  </div>
                </div>

                {/* Bottom Details & Deep-dive link */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: 11, color: 'var(--text-muted)' }}>
                  <span>Fee: {item.fee}</span>
                  <button
                    onClick={() => onSelectCollege(item.collegeId)}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: 'var(--accent-cyan)',
                      fontSize: 11,
                      fontWeight: 600,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 2
                    }}
                  >
                    College Profile <ChevronRight size={13} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* KEAM Allotment Option List Drawer Modal */}
      {showOptionListModal && (
        <div className="modal-overlay" onClick={() => setShowOptionListModal(false)}>
          <div className="modal-bottom-sheet" onClick={(e) => e.stopPropagation()}>
            <div className="sheet-handle"></div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <h3 style={{ fontSize: 17, fontWeight: 700 }}>My KEAM Option List</h3>
                <p style={{ fontSize: 11, color: 'var(--text-muted)' }}>
                  Reorder priorities to simulate official CEE Kerala Option Registration
                </p>
              </div>
              <button
                onClick={() => setShowOptionListModal(false)}
                style={{ background: 'none', border: 'none', color: '#fff', fontSize: 18, cursor: 'pointer' }}
              >
                ✕
              </button>
            </div>

            {optionList.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '30px 10px', color: 'var(--text-muted)' }}>
                <ListOrdered size={36} color="#64748b" style={{ margin: '0 auto 10px' }} />
                <p style={{ fontSize: 13, color: '#fff', fontWeight: 600 }}>Your Option List is Empty</p>
                <p style={{ fontSize: 11, marginTop: 4 }}>
                  Tap the '+' button on any predicted college branch above to add it to your official trial option list.
                </p>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {optionList.map((opt, idx) => (
                  <div
                    key={opt.id}
                    style={{
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: 12,
                      padding: '10px 12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: 8
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                      <span
                        style={{
                          width: 24,
                          height: 24,
                          borderRadius: '50%',
                          background: '#10b981',
                          color: '#000',
                          fontSize: 11,
                          fontWeight: 800,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        {idx + 1}
                      </span>
                      <div>
                        <div style={{ fontWeight: 700, fontSize: 13, color: '#fff' }}>
                          {opt.shortName}
                        </div>
                        <div style={{ fontSize: 11, color: 'var(--primary-light)' }}>
                          {opt.branchName}
                        </div>
                        <div style={{ fontSize: 10, color: 'var(--text-dim)' }}>
                          Cutoff: #{opt.cutoff} | {opt.fee}
                        </div>
                      </div>
                    </div>

                    {/* Reordering Controls */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <button
                        onClick={() => moveOption(idx, -1)}
                        disabled={idx === 0}
                        style={{
                          background: 'rgba(255, 255, 255, 0.08)',
                          border: 'none',
                          color: idx === 0 ? '#475569' : '#fff',
                          borderRadius: 6,
                          width: 26,
                          height: 26,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          cursor: idx === 0 ? 'not-allowed' : 'pointer'
                        }}
                      >
                        <ArrowUp size={14} />
                      </button>
                      <button
                        onClick={() => moveOption(idx, 1)}
                        disabled={idx === optionList.length - 1}
                        style={{
                          background: 'rgba(255, 255, 255, 0.08)',
                          border: 'none',
                          color: idx === optionList.length - 1 ? '#475569' : '#fff',
                          borderRadius: 6,
                          width: 26,
                          height: 26,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          cursor: idx === optionList.length - 1 ? 'not-allowed' : 'pointer'
                        }}
                      >
                        <ArrowDown size={14} />
                      </button>
                      <button
                        onClick={() => removeOption(opt.id)}
                        style={{
                          background: 'rgba(239, 68, 68, 0.15)',
                          border: 'none',
                          color: '#f87171',
                          borderRadius: 6,
                          width: 26,
                          height: 26,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          cursor: 'pointer'
                        }}
                      >
                        <Trash2 size={13} />
                      </button>
                    </div>
                  </div>
                ))}

                <button
                  className="btn-primary"
                  onClick={() => {
                    const text = optionList
                      .map((o, i) => `${i + 1}. [${o.collegeCode}] ${o.shortName} - ${o.branchName} (Cutoff: ${o.cutoff})`)
                      .join('\n');
                    navigator.clipboard?.writeText(text);
                    showToast?.('Exported KEAM Option List copied to clipboard!');
                  }}
                  style={{ marginTop: 10 }}
                >
                  <Download size={15} />
                  <span>Copy / Export Trial Allotment List</span>
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
