import React, { useState } from 'react';
import { ChevronLeft, Info, CheckCircle2 } from 'lucide-react';

export default function FigmaPredictScreen({ onBack, onSelectCollege }) {
  const [exam, setExam] = useState('KEAM');
  const [rankScore, setRankScore] = useState('15000');
  const [category, setCategory] = useState('General');
  const [coursePreference, setCoursePreference] = useState('B.Tech, CSE');
  const [hasPredicted, setHasPredicted] = useState(true);

  // Dynamic calculation for college predictions
  const userRank = parseInt(rankScore, 10) || 15000;

  const results = [
    {
      id: 'cet',
      name: 'College of Engineering Trivandrum',
      yourScore: userRank,
      closingRank: userRank < 5000 ? 4200 : userRank + 3000,
      chanceType: userRank <= 8000 ? 'High Chance' : 'Moderate Chance',
      percentage: userRank <= 8000 ? '85%' : '65%',
      isHighChance: userRank <= 8000,
      crestColor: '#10b981'
    },
    {
      id: 'mec',
      name: 'Model Engineering College',
      yourScore: userRank,
      closingRank: userRank < 5000 ? 3800 : Math.max(userRank - 1000, 14000),
      chanceType: userRank <= 12000 ? 'Moderate Chance' : 'Low Chance',
      percentage: userRank <= 12000 ? '50%' : '35%',
      isHighChance: false,
      crestColor: '#ef4444'
    },
    {
      id: 'gec',
      name: 'Government Engineering College Thrissur',
      yourScore: userRank,
      closingRank: userRank + 1800,
      chanceType: 'High Chance',
      percentage: '78%',
      isHighChance: true,
      crestColor: '#3b82f6'
    }
  ];

  return (
    <div className="figma-screen-body">
      {/* Top Header with Back Arrow */}
      <div className="figma-screen-header">
        <button className="figma-back-btn" onClick={onBack} aria-label="Go Back">
          <ChevronLeft size={28} strokeWidth={2.5} />
        </button>
        <h2 className="figma-screen-title" style={{ marginRight: 36 }}>
          Predict your college
        </h2>
      </div>

      {/* Enter Your Details Card (Light Blue Container) */}
      <div className="predict-form-card">
        <div style={{ textAlign: 'center', fontWeight: 700, fontSize: 15, color: '#000' }}>
          Enter Your Details
        </div>

        {/* Exam Selection */}
        <div>
          <label style={{ fontSize: 13, fontWeight: 600, color: '#000', display: 'block', marginBottom: 5 }}>
            Exam
          </label>
          <select
            className="figma-pill-select"
            value={exam}
            onChange={(e) => setExam(e.target.value)}
          >
            <option value="KEAM">KEAM (Kerala Engineering Entrance)</option>
            <option value="JEE">JEE Main</option>
            <option value="NEET">NEET Kerala</option>
          </select>
        </div>

        {/* Score/Rank and Category side-by-side */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
          <div>
            <label style={{ fontSize: 13, fontWeight: 600, color: '#000', display: 'block', marginBottom: 5 }}>
              Score/Rank
            </label>
            <input
              type="text"
              className="figma-pill-input"
              placeholder="eg 15000"
              value={rankScore}
              onChange={(e) => setRankScore(e.target.value)}
            />
          </div>

          <div>
            <label style={{ fontSize: 13, fontWeight: 600, color: '#000', display: 'block', marginBottom: 5 }}>
              Category
            </label>
            <select
              className="figma-pill-select"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="General">General (SM)</option>
              <option value="OBC">OBC / Ezhava</option>
              <option value="Muslim">Muslim (MU)</option>
              <option value="SC/ST">SC / ST</option>
              <option value="EWS">EWS</option>
            </select>
          </div>
        </div>

        {/* Course Preference */}
        <div>
          <label style={{ fontSize: 13, fontWeight: 600, color: '#000', display: 'block', marginBottom: 5 }}>
            Course Preference
          </label>
          <select
            className="figma-pill-select"
            value={coursePreference}
            onChange={(e) => setCoursePreference(e.target.value)}
          >
            <option value="B.Tech, CSE">B.Tech, CSE</option>
            <option value="B.Tech, AI&DS">B.Tech, Artificial Intelligence & DS</option>
            <option value="B.Tech, ECE">B.Tech, Electronics & Comm</option>
            <option value="B.Tech, ME">B.Tech, Mechanical Engg</option>
            <option value="B.Tech, CE">B.Tech, Civil Engg</option>
          </select>
        </div>

        {/* Predict Button */}
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 4 }}>
          <button
            onClick={() => setHasPredicted(true)}
            style={{
              background: '#f8fafc',
              border: '1.5px solid #000',
              borderRadius: 24,
              padding: '6px 28px',
              fontSize: 14,
              fontWeight: 700,
              color: '#000',
              cursor: 'pointer',
              boxShadow: '0 2px 6px rgba(0,0,0,0.06)'
            }}
          >
            Predict
          </button>
        </div>
      </div>

      {/* College You Might Get Section (Light Gray Container) */}
      <div className="predict-results-container">
        <h3 style={{ textAlign: 'center', fontFamily: 'var(--font-heading)', fontSize: 20, fontWeight: 900, color: '#000' }}>
          College You Might Get
        </h3>

        {results.map((item) => (
          <div
            key={item.id}
            className={`predicted-college-card ${item.isHighChance ? '' : 'moderate'}`}
            onClick={() => onSelectCollege(item.id)}
            style={{ cursor: 'pointer' }}
          >
            {/* Left: College Crest SVG */}
            <div style={{ width: 44, height: 44, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg viewBox="0 0 50 50" width="42" height="42">
                <rect x="5" y="5" width="40" height="40" rx="6" fill="none" stroke={item.crestColor} strokeWidth="2" />
                <path d="M15 15 L35 15 L25 35 Z" fill={item.crestColor} opacity="0.2" />
                <circle cx="25" cy="22" r="5" fill={item.crestColor} />
                <path d="M18 38 L32 38" stroke={item.crestColor} strokeWidth="3" />
              </svg>
            </div>

            {/* Middle: Details */}
            <div style={{ flex: 1, padding: '0 10px' }}>
              <div style={{ fontWeight: 700, fontSize: 13, color: '#000', lineHeight: 1.25 }}>
                {item.name}
              </div>
              <div style={{ fontSize: 11, color: '#334155', marginTop: 3 }}>
                Your Score: {item.yourScore}
              </div>
              <div style={{ fontSize: 11, color: '#334155' }}>
                Closing Rank: {item.closingRank}
              </div>
            </div>

            {/* Right: Chance pill & Percentage */}
            <div style={{ textAlign: 'right', flexShrink: 0 }}>
              <span
                style={{
                  display: 'inline-block',
                  border: `1.5px solid ${item.isHighChance ? '#10b981' : '#3b82f6'}`,
                  borderRadius: 16,
                  padding: '2px 8px',
                  fontSize: 10,
                  fontWeight: 700,
                  color: item.isHighChance ? '#059669' : '#2563eb',
                  background: item.isHighChance ? 'rgba(16, 185, 129, 0.1)' : 'rgba(59, 130, 246, 0.1)',
                  marginBottom: 2
                }}
              >
                {item.chanceType}
              </span>
              <div style={{ fontSize: 20, fontWeight: 900, color: '#000' }}>
                {item.percentage}
              </div>
            </div>
          </div>
        ))}

        {/* Disclaimer Note Pill */}
        <div
          style={{
            background: '#e0f2fe',
            borderRadius: 20,
            padding: '10px 14px',
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            marginTop: 6
          }}
        >
          <Info size={16} color="#0284c7" style={{ flexShrink: 0 }} />
          <span style={{ fontSize: 11, color: '#0369a1', lineHeight: 1.35 }}>
            Prediction is based on previous years trends actual results may contain slight changes
          </span>
        </div>
      </div>
    </div>
  );
}
