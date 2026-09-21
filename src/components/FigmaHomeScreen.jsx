import React from 'react';
import { User, Calendar, Users, Building, MapPin, Star } from 'lucide-react';

export default function FigmaHomeScreen({ onNavigate, onSelectCollege, onOpenProfile }) {
  const colleges = [
    {
      id: 'cet',
      name: 'College of Engineering Trivandrum CET',
      shortName: 'CET Trivandrum',
      rating: '4.6',
      location: 'Thiruvananthapuram',
      reviewsCount: 120,
      image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=400&auto=format&fit=crop&q=80'
    },
    {
      id: 'rit',
      name: 'Rajiv Gandhi Institute of Technology',
      shortName: 'RIT Kottayam',
      rating: '4.5',
      location: 'Kottayam',
      reviewsCount: 94,
      image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400&auto=format&fit=crop&q=80'
    },
    {
      id: 'mec',
      name: 'Govt Model Engineering College MEC',
      shortName: 'MEC Kochi',
      rating: '4.8',
      location: 'Kochi, Ernakulam',
      reviewsCount: 145,
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&auto=format&fit=crop&q=80'
    },
    {
      id: 'gec',
      name: 'Government Engineering College Thrissur',
      shortName: 'GEC Thrissur',
      rating: '4.7',
      location: 'Thrissur',
      reviewsCount: 112,
      image: 'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=400&auto=format&fit=crop&q=80'
    }
  ];

  return (
    <div className="figma-screen-body">
      {/* Cyan decorative accent blobs */}
      <div className="cyan-blob-top-right"></div>
      <div className="cyan-blob-mid-left"></div>

      {/* Header Row */}
      <div className="home-header-row">
        <h1 className="user-greeting">Hi, Lithu P L</h1>
        <button
          className="user-avatar-circle"
          onClick={onOpenProfile}
          title="Account / Profile"
        >
          <User size={22} />
        </button>
      </div>

      {/* Hero Banner Card */}
      <div className="discover-banner-card">
        <h2 className="discover-banner-text">
          Discover your future college
        </h2>
        {/* Student Illustration SVG */}
        <div style={{ width: 120, height: 95, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <svg viewBox="0 0 160 140" width="120" height="100">
            {/* Student in purple hoodie with laptop */}
            <circle cx="110" cy="40" r="22" fill="#ffe0bd" />
            <path d="M92 34 C95 18 125 18 128 34 C128 34 122 36 116 36 C106 36 98 34 92 34 Z" fill="#1e293b" />
            {/* Smile & Face */}
            <circle cx="104" cy="38" r="2.5" fill="#000" />
            <circle cx="116" cy="38" r="2.5" fill="#000" />
            <path d="M107 46 Q110 50 113 46" stroke="#000" strokeWidth="2" fill="none" />
            {/* Purple Hoodie */}
            <path d="M85 70 C85 58 135 58 135 70 L145 115 L75 115 Z" fill="#8b5cf6" />
            <path d="M102 62 L107 78 L112 62" stroke="#7c3aed" strokeWidth="3" fill="none" />
            {/* Laptop */}
            <rect x="50" y="78" width="60" height="38" rx="4" fill="#94a3b8" />
            <rect x="54" y="82" width="52" height="30" rx="2" fill="#cbd5e1" />
            <polygon points="40,116 120,116 110,122 50,122" fill="#64748b" />
          </svg>
        </div>
      </div>

      {/* Category Navigation Bar (Pill with 3 Icons) */}
      <div className="category-pill-container">
        {/* 1. College (Predict) */}
        <button
          className="cat-icon-btn"
          onClick={() => onNavigate('predict')}
          title="Predict Your College"
        >
          <div style={{ width: 28, height: 28, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Building size={22} strokeWidth={2.2} />
          </div>
          <span style={{ fontSize: 10, fontWeight: 700, marginTop: 2 }}>Colleges</span>
        </button>

        {/* 2. Events */}
        <button
          className="cat-icon-btn"
          onClick={() => onNavigate('events')}
          title="College Events"
        >
          <div style={{ width: 28, height: 28, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Calendar size={22} strokeWidth={2.2} />
          </div>
          <span style={{ fontSize: 10, fontWeight: 700, marginTop: 2 }}>Events</span>
        </button>

        {/* 3. Community */}
        <button
          className="cat-icon-btn"
          onClick={() => onNavigate('community')}
          title="Campus Community"
        >
          <div style={{ width: 28, height: 28, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Users size={22} strokeWidth={2.2} />
          </div>
          <span style={{ fontSize: 10, fontWeight: 700, marginTop: 2 }}>Community</span>
        </button>
      </div>

      {/* TOP COLLEGES SECTION */}
      <div className="top-colleges-container">
        <h3 className="top-colleges-title">TOP COLLEGES</h3>

        {colleges.map((col) => (
          <div
            key={col.id}
            className="college-card-figma"
            onClick={() => onSelectCollege(col.id)}
          >
            <div className="college-card-figma-title">
              {col.name}
            </div>

            <div className="college-card-figma-body">
              <img
                src={col.image}
                alt={col.name}
                className="college-card-thumb"
              />

              <div className="college-card-details">
                <span style={{ fontWeight: 600, color: '#000' }}>Reviews</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontWeight: 700 }}>
                  Ratings {col.rating} <span style={{ color: '#f59e0b' }}>⭐</span>
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: 4, color: '#166534', fontWeight: 600, marginTop: 2 }}>
                  <MapPin size={13} color="#16a34a" />
                  <span>{col.location}</span>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
