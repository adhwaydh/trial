import React, { useState } from 'react';
import { ChevronLeft, Search, Image as ImageIcon, Users, Heart, MessageSquare, Share2, Send } from 'lucide-react';

export default function FigmaCommunityScreen({ onBack, showToast }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [joinedClubs, setJoinedClubs] = useState(['IEEE']);
  const [postText, setPostText] = useState('');
  const [communityPosts, setCommunityPosts] = useState([
    {
      id: 1,
      author: 'Anandhu K',
      role: 'CET Trivandrum',
      time: '2h ago',
      content: 'Any teams looking for a frontend developer for the upcoming HackFort 2025 at MEC? Proficient in React and Tailwind.',
      likes: 14,
      comments: 6,
      hasLiked: false
    },
    {
      id: 2,
      author: 'Devika M',
      role: 'RIT Kottayam',
      time: '4h ago',
      content: 'IEEE student branch is hosting a hands-on workshop on Embedded Systems & IoT this Friday at the Main Seminar Hall. Free for members!',
      likes: 28,
      comments: 11,
      hasLiked: true
    }
  ]);

  const clubs = [
    {
      id: 'ieee',
      name: 'IEEE',
      desc: 'Institute of Electrical and Electronics Engineers',
      members: '1.8k members',
      iconText: 'IEEE',
      bgColor: '#e0f2fe',
      textColor: '#0369a1'
    },
    {
      id: 'tinkerhub',
      name: 'TinkerHub',
      desc: 'Learn. Build. Share',
      members: '1.3k members',
      iconText: 'TinkerHub',
      bgColor: '#f1f5f9',
      textColor: '#0f172a'
    },
    {
      id: 'iedc',
      name: 'IEDC',
      desc: 'Innovation & Entrepreneurship Development Centre',
      members: '1.5k members',
      iconText: 'IEDC',
      bgColor: '#fef3c7',
      textColor: '#b45309'
    }
  ];

  const handleToggleJoin = (clubName) => {
    if (joinedClubs.includes(clubName)) {
      setJoinedClubs(joinedClubs.filter((c) => c !== clubName));
      showToast?.(`Left ${clubName}`);
    } else {
      setJoinedClubs([...joinedClubs, clubName]);
      showToast?.(`Joined ${clubName} Community!`);
    }
  };

  const handleCreatePost = (e) => {
    e.preventDefault();
    if (!postText.trim()) return;

    const newP = {
      id: Date.now(),
      author: 'Lithu P L',
      role: 'CET Student',
      time: 'Just now',
      content: postText,
      likes: 0,
      comments: 0,
      hasLiked: false
    };

    setCommunityPosts([newP, ...communityPosts]);
    setPostText('');
    showToast?.('Post published to campus community!');
  };

  const handleToggleLike = (id) => {
    setCommunityPosts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, likes: p.hasLiked ? p.likes - 1 : p.likes + 1, hasLiked: !p.hasLiked } : p))
    );
  };

  return (
    <div className="figma-screen-body">
      {/* Cyan decorative accent blobs */}
      <div className="cyan-blob-top-right"></div>
      <div className="cyan-blob-bottom-left"></div>

      {/* Top Header */}
      <div className="figma-screen-header">
        <button className="figma-back-btn" onClick={onBack} aria-label="Go Back">
          <ChevronLeft size={28} strokeWidth={2.5} />
        </button>
        <h2 className="figma-screen-title" style={{ marginRight: 36 }}>
          Community
        </h2>
      </div>

      {/* Search Bar */}
      <div style={{ padding: '6px 18px 10px', position: 'relative', zIndex: 10 }}>
        <div style={{ position: 'relative' }}>
          <Search size={16} color="#64748b" style={{ position: 'absolute', left: 14, top: 12 }} />
          <input
            type="text"
            className="figma-pill-input"
            style={{ paddingLeft: 38, border: '1.5px solid #000', fontSize: 13 }}
            placeholder="Search for communities...."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Post Creation Box from Figure 5 */}
      <div className="community-create-box">
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <img
            src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&auto=format&fit=crop&q=80"
            alt="Student Avatar"
            style={{ width: 44, height: 44, borderRadius: '50%', objectFit: 'cover', border: '1.5px solid #000' }}
          />

          <input
            type="text"
            placeholder="What's happening on your campus?"
            value={postText}
            onChange={(e) => setPostText(e.target.value)}
            style={{
              flex: 1,
              background: 'none',
              border: 'none',
              outline: 'none',
              fontSize: 13,
              color: '#000',
              fontWeight: 500
            }}
          />

          <button
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: '#334155'
            }}
            title="Attach image"
          >
            <ImageIcon size={22} />
          </button>
        </div>

        <button
          onClick={handleCreatePost}
          style={{
            background: '#0084ff',
            color: '#fff',
            border: '1.5px solid #000',
            borderRadius: 24,
            padding: '8px',
            fontSize: 14,
            fontWeight: 800,
            cursor: 'pointer',
            textAlign: 'center'
          }}
        >
          Post
        </button>
      </div>

      {/* Communities Section from Figure 5 */}
      <div style={{ padding: '8px 18px', display: 'flex', flexDirection: 'column', gap: 12 }}>
        <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 18, fontWeight: 900, color: '#000' }}>
          communities
        </h3>

        {clubs.map((club) => {
          const isJoined = joinedClubs.includes(club.name);
          return (
            <div key={club.id} className="community-club-card">
              {/* Logo icon */}
              <div
                style={{
                  width: 46,
                  height: 46,
                  borderRadius: '50%',
                  background: club.bgColor,
                  border: '1px solid rgba(0,0,0,0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 800,
                  fontSize: 11,
                  color: club.textColor,
                  flexShrink: 0
                }}
              >
                {club.iconText}
              </div>

              {/* Info */}
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 800, fontSize: 14, color: '#000' }}>
                  {club.name}
                </div>
                <div style={{ fontSize: 11, color: '#556270', lineHeight: 1.25 }}>
                  {club.desc}
                </div>
                <div style={{ fontSize: 11, color: '#8e9ca8', display: 'flex', alignItems: 'center', gap: 4, marginTop: 2 }}>
                  <Users size={12} />
                  <span>{club.members}</span>
                </div>
              </div>

              {/* Join Button */}
              <button
                onClick={() => handleToggleJoin(club.name)}
                style={{
                  background: isJoined ? '#10b981' : '#0084ff',
                  color: '#fff',
                  border: '1.5px solid #000',
                  borderRadius: 20,
                  padding: '5px 16px',
                  fontSize: 12,
                  fontWeight: 700,
                  cursor: 'pointer'
                }}
              >
                {isJoined ? 'Joined ✓' : 'Join'}
              </button>
            </div>
          );
        })}
      </div>

      {/* Campus Feed Posts */}
      <div style={{ padding: '12px 18px', display: 'flex', flexDirection: 'column', gap: 12 }}>
        <h4 style={{ fontSize: 14, fontWeight: 800, color: '#000' }}>
          Latest Campus Discussions
        </h4>

        {communityPosts.map((post) => (
          <div
            key={post.id}
            style={{
              background: '#ffffff',
              border: '1.5px solid #000',
              borderRadius: 18,
              padding: '12px 14px',
              display: 'flex',
              flexDirection: 'column',
              gap: 8,
              position: 'relative',
              zIndex: 10
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <span style={{ fontWeight: 700, fontSize: 13, color: '#000' }}>{post.author}</span>
                <span style={{ fontSize: 11, color: '#64748b', marginLeft: 6 }}>{post.role}</span>
              </div>
              <span style={{ fontSize: 10, color: '#94a3b8' }}>{post.time}</span>
            </div>

            <p style={{ fontSize: 12, color: '#1e293b', lineHeight: 1.45 }}>
              {post.content}
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: 16, paddingTop: 4, fontSize: 12, color: '#475569' }}>
              <button
                onClick={() => handleToggleLike(post.id)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: post.hasLiked ? '#ef4444' : '#475569',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 4,
                  cursor: 'pointer',
                  fontWeight: 600
                }}
              >
                <Heart size={14} fill={post.hasLiked ? '#ef4444' : 'none'} />
                <span>{post.likes}</span>
              </button>

              <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                <MessageSquare size={14} />
                <span>{post.comments}</span>
              </span>

              <button
                onClick={() => {
                  navigator.clipboard?.writeText(window.location.href);
                  showToast?.('Post link copied');
                }}
                style={{ background: 'none', border: 'none', color: '#475569', display: 'flex', alignItems: 'center', gap: 4, cursor: 'pointer' }}
              >
                <Share2 size={14} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
