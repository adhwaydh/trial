import React, { useState } from 'react';
import { INITIAL_FEED_POSTS } from '../data/mockFeedData';
import { 
  MessageSquare, 
  Heart, 
  Share2, 
  Send, 
  PlusCircle, 
  CheckCircle2, 
  Sparkles, 
  Flame, 
  HelpCircle, 
  Building2, 
  Globe, 
  Bookmark, 
  X,
  UserCheck
} from 'lucide-react';

export default function SocialFeed({ userPersona, showToast, onSelectCollege }) {
  const [posts, setPosts] = useState(INITIAL_FEED_POSTS);
  const [activeFeedTab, setActiveFeedTab] = useState('all'); // 'all', 'keam', 'my_college'
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [activeCommentPost, setActiveCommentPost] = useState(null);
  const [newCommentText, setNewCommentText] = useState('');

  // Form states for creating a new post
  const [newPostContent, setNewPostContent] = useState('');
  const [newPostCategory, setNewPostCategory] = useState('general');
  const [selectedTag, setSelectedTag] = useState('#KEAM2025');
  const [isAnonymous, setIsAnonymous] = useState(false);

  // Available tags
  const tagsList = ['#KEAM2025', '#Placements2025', '#CampusLife', '#FestAlert', '#AskASenior', '#KTUExam', '#Hackathon'];

  // Filter posts
  const filteredPosts = posts.filter((post) => {
    if (activeFeedTab === 'all') return true;
    if (activeFeedTab === 'keam') return post.category === 'keam';
    if (activeFeedTab === 'my_college') return post.category === 'my_college' || post.collegeId === 'cet-tvm';
    return true;
  });

  // Handle Like
  const handleToggleLike = (postId) => {
    setPosts((prev) =>
      prev.map((post) => {
        if (post.id === postId) {
          const nextHasLiked = !post.hasLiked;
          return {
            ...post,
            hasLiked: nextHasLiked,
            likes: nextHasLiked ? post.likes + 1 : post.likes - 1
          };
        }
        return post;
      })
    );
  };

  // Handle Create Post
  const handleCreatePost = (e) => {
    e.preventDefault();
    if (!newPostContent.trim()) return;

    const newPost = {
      id: `post-${Date.now()}`,
      authorName: isAnonymous
        ? (userPersona === 'aspirant' ? 'Anonymous Aspirant' : 'Anonymous Senior')
        : (userPersona === 'aspirant' ? 'Ashwin R. (KEAM Aspirant)' : 'Kailas Nath (S6 CSE, CET)'),
      authorRole: isAnonymous
        ? 'Verified Anonymous'
        : (userPersona === 'aspirant' ? 'KEAM 2025 Aspirant' : 'S6 CSE, CET Trivandrum'),
      authorAvatar: isAnonymous
        ? 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80'
        : 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
      isVerified: !isAnonymous && userPersona !== 'aspirant',
      collegeId: userPersona === 'aspirant' ? null : 'cet-tvm',
      collegeName: userPersona === 'aspirant' ? 'KEAM Aspirant' : 'CET Trivandrum',
      timeAgo: 'Just now',
      category: newPostCategory,
      tags: [selectedTag],
      content: newPostContent,
      image: null,
      likes: 1,
      hasLiked: true,
      commentsCount: 0,
      comments: []
    };

    setPosts([newPost, ...posts]);
    setNewPostContent('');
    setShowCreateModal(false);
    showToast?.('Post published to PeerGrid Kerala community!');
  };

  // Handle Add Comment
  const handleAddComment = (e) => {
    e.preventDefault();
    if (!newCommentText.trim() || !activeCommentPost) return;

    const commentObj = {
      id: `c-${Date.now()}`,
      author: userPersona === 'aspirant' ? 'Aspirant (You)' : 'CET Student (You)',
      content: newCommentText,
      timeAgo: 'Just now',
      likes: 0
    };

    setPosts((prev) =>
      prev.map((p) => {
        if (p.id === activeCommentPost.id) {
          const updatedComments = [...(p.comments || []), commentObj];
          return {
            ...p,
            commentsCount: p.commentsCount + 1,
            comments: updatedComments
          };
        }
        return p;
      })
    );

    // Also update active comment modal view
    setActiveCommentPost((prev) => ({
      ...prev,
      commentsCount: prev.commentsCount + 1,
      comments: [...(prev.comments || []), commentObj]
    }));

    setNewCommentText('');
    showToast?.('Comment posted');
  };

  return (
    <div className="screen-container">
      {/* Feed Filter Tabs */}
      <div style={{ display: 'flex', gap: 6, overflowX: 'auto', paddingBottom: 2 }}>
        <button
          onClick={() => setActiveFeedTab('all')}
          className={`filter-chip ${activeFeedTab === 'all' ? 'active' : ''}`}
          style={{ flex: 1, justifyContent: 'center' }}
        >
          <Globe size={13} />
          <span>All Kerala</span>
        </button>
        <button
          onClick={() => setActiveFeedTab('keam')}
          className={`filter-chip ${activeFeedTab === 'keam' ? 'active' : ''}`}
          style={{ flex: 1, justifyContent: 'center' }}
        >
          <HelpCircle size={13} />
          <span>KEAM Q&A</span>
        </button>
        <button
          onClick={() => setActiveFeedTab('my_college')}
          className={`filter-chip ${activeFeedTab === 'my_college' ? 'active' : ''}`}
          style={{ flex: 1, justifyContent: 'center' }}
        >
          <Building2 size={13} />
          <span>My Campus</span>
        </button>
      </div>

      {/* Create Post Prompt Box */}
      <div
        className="glass-card"
        onClick={() => setShowCreateModal(true)}
        style={{
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: 12,
          padding: '12px 14px',
          background: 'rgba(18, 24, 38, 0.9)'
        }}
      >
        <div
          style={{
            width: 36,
            height: 36,
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #10b981 0%, #06b6d4 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#000',
            fontWeight: 800,
            fontSize: 14,
            flexShrink: 0
          }}
        >
          {userPersona === 'aspirant' ? '🎯' : '🎓'}
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 13, color: 'var(--text-muted)' }}>
            {userPersona === 'aspirant'
              ? 'Ask seniors about KEAM cutoffs, fests & colleges...'
              : 'Share campus news, placement updates, or fest alerts...'}
          </div>
        </div>
        <PlusCircle size={20} color="#10b981" />
      </div>

      {/* Post List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        {filteredPosts.map((post) => (
          <article
            key={post.id}
            className="glass-card"
            style={{
              padding: '14px',
              display: 'flex',
              flexDirection: 'column',
              gap: 12
            }}
          >
            {/* Post Header */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <img
                  src={post.authorAvatar}
                  alt={post.authorName}
                  style={{ width: 38, height: 38, borderRadius: '50%', objectFit: 'cover' }}
                />
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                    <span style={{ fontWeight: 700, fontSize: 13, color: '#fff' }}>
                      {post.authorName}
                    </span>
                    {post.isVerified && (
                      <CheckCircle2 size={13} color="#10b981" title="Verified KTU College Student" />
                    )}
                  </div>
                  <div style={{ fontSize: 10, color: 'var(--text-muted)' }}>
                    {post.authorRole} • <span>{post.timeAgo}</span>
                  </div>
                </div>
              </div>

              {post.collegeId && (
                <button
                  onClick={() => onSelectCollege(post.collegeId)}
                  style={{
                    background: 'rgba(16, 185, 129, 0.1)',
                    border: '1px solid rgba(16, 185, 129, 0.25)',
                    color: '#34d399',
                    borderRadius: 12,
                    padding: '3px 8px',
                    fontSize: 10,
                    fontWeight: 600,
                    cursor: 'pointer'
                  }}
                >
                  {post.collegeName}
                </button>
              )}
            </div>

            {/* Post Tags */}
            <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    fontSize: 11,
                    color: 'var(--primary-light)',
                    fontWeight: 600,
                    background: 'rgba(16, 185, 129, 0.1)',
                    padding: '2px 8px',
                    borderRadius: 6
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Post Content */}
            <p style={{ fontSize: 13, color: '#e2e8f0', lineHeight: 1.55 }}>
              {post.content}
            </p>

            {/* Post Image attachment if any */}
            {post.image && (
              <div style={{ borderRadius: 12, overflow: 'hidden', maxHeight: 220 }}>
                <img
                  src={post.image}
                  alt="Post attachment"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            )}

            {/* Interaction Bar */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingTop: 8,
                borderTop: '1px solid var(--border-subtle)',
                fontSize: 12,
                color: 'var(--text-muted)'
              }}
            >
              <button
                onClick={() => handleToggleLike(post.id)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: post.hasLiked ? '#f43f5e' : 'var(--text-muted)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 6,
                  cursor: 'pointer',
                  fontSize: 12,
                  fontWeight: 600
                }}
              >
                <Heart size={16} fill={post.hasLiked ? '#f43f5e' : 'none'} />
                <span>{post.likes}</span>
              </button>

              <button
                onClick={() => setActiveCommentPost(post)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--text-muted)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 6,
                  cursor: 'pointer',
                  fontSize: 12
                }}
              >
                <MessageSquare size={16} />
                <span>{post.commentsCount} Comments</span>
              </button>

              <button
                onClick={() => {
                  navigator.clipboard?.writeText(window.location.href);
                  showToast?.('Post link copied to clipboard');
                }}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--text-muted)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 6,
                  cursor: 'pointer',
                  fontSize: 12
                }}
              >
                <Share2 size={16} />
                <span>Share</span>
              </button>
            </div>
          </article>
        ))}
      </div>

      {/* Create Post Modal */}
      {showCreateModal && (
        <div className="modal-overlay" onClick={() => setShowCreateModal(false)}>
          <div className="modal-bottom-sheet" onClick={(e) => e.stopPropagation()}>
            <div className="sheet-handle"></div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <h3 style={{ fontSize: 16, fontWeight: 700 }}>Create New Campus Post</h3>
              <button
                onClick={() => setShowCreateModal(false)}
                style={{ background: 'none', border: 'none', color: '#fff', fontSize: 18, cursor: 'pointer' }}
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleCreatePost} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {/* Category Pills */}
              <div>
                <span style={{ fontSize: 11, color: 'var(--text-muted)', display: 'block', marginBottom: 4 }}>
                  Post Category
                </span>
                <div style={{ display: 'flex', gap: 6 }}>
                  <button
                    type="button"
                    className={`filter-chip ${newPostCategory === 'general' ? 'active' : ''}`}
                    onClick={() => setNewPostCategory('general')}
                  >
                    Statewide News
                  </button>
                  <button
                    type="button"
                    className={`filter-chip ${newPostCategory === 'keam' ? 'active' : ''}`}
                    onClick={() => setNewPostCategory('keam')}
                  >
                    KEAM Question
                  </button>
                  <button
                    type="button"
                    className={`filter-chip ${newPostCategory === 'my_college' ? 'active' : ''}`}
                    onClick={() => setNewPostCategory('my_college')}
                  >
                    Campus Hub
                  </button>
                </div>
              </div>

              {/* Tag selector */}
              <div>
                <span style={{ fontSize: 11, color: 'var(--text-muted)', display: 'block', marginBottom: 4 }}>
                  Choose Tag
                </span>
                <div className="filter-chip-row">
                  {tagsList.map((tag) => (
                    <button
                      key={tag}
                      type="button"
                      className={`filter-chip ${selectedTag === tag ? 'active' : ''}`}
                      onClick={() => setSelectedTag(tag)}
                      style={{ fontSize: 11, padding: '4px 10px' }}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>

              {/* Content Textarea */}
              <textarea
                className="custom-input"
                rows="4"
                placeholder={
                  newPostCategory === 'keam'
                    ? "Mention your KEAM rank, category (SM/EZ/MU/etc.), and ask your question to current seniors..."
                    : "Share announcements, tech fests, club updates, or placement queries..."
                }
                value={newPostContent}
                onChange={(e) => setNewPostContent(e.target.value)}
                required
                style={{ resize: 'none' }}
              />

              {/* Anonymous Toggle */}
              <label
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  fontSize: 12,
                  color: 'var(--text-muted)',
                  cursor: 'pointer',
                  userSelect: 'none'
                }}
              >
                <input
                  type="checkbox"
                  checked={isAnonymous}
                  onChange={(e) => setIsAnonymous(e.target.checked)}
                  style={{ accentColor: '#10b981', width: 16, height: 16 }}
                />
                <span>Post anonymously (Hide personal name & avatar)</span>
              </label>

              {/* Submit Button */}
              <button type="submit" className="btn-primary" style={{ marginTop: 6 }}>
                <Send size={15} />
                <span>Post to Kerala College Network</span>
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Comments Drawer */}
      {activeCommentPost && (
        <div className="modal-overlay" onClick={() => setActiveCommentPost(null)}>
          <div 
            className="modal-bottom-sheet" 
            onClick={(e) => e.stopPropagation()}
            style={{ maxHeight: '80%' }}
          >
            <div className="sheet-handle"></div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <h3 style={{ fontSize: 16, fontWeight: 700 }}>Discussion & Replies</h3>
                <span style={{ fontSize: 11, color: 'var(--text-muted)' }}>
                  {activeCommentPost.commentsCount} student replies
                </span>
              </div>
              <button
                onClick={() => setActiveCommentPost(null)}
                style={{ background: 'none', border: 'none', color: '#fff', fontSize: 18, cursor: 'pointer' }}
              >
                ✕
              </button>
            </div>

            {/* List of comments */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, maxHeight: 260, overflowY: 'auto' }}>
              {activeCommentPost.comments && activeCommentPost.comments.length > 0 ? (
                activeCommentPost.comments.map((comm) => (
                  <div
                    key={comm.id}
                    style={{
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: 10,
                      padding: '8px 10px'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 2 }}>
                      <span style={{ fontSize: 12, fontWeight: 700, color: '#34d399' }}>
                        {comm.author}
                      </span>
                      <span style={{ fontSize: 10, color: 'var(--text-dim)' }}>
                        {comm.timeAgo}
                      </span>
                    </div>
                    <p style={{ fontSize: 12, color: '#e2e8f0', lineHeight: 1.4 }}>
                      {comm.content}
                    </p>
                  </div>
                ))
              ) : (
                <div style={{ textAlign: 'center', padding: '20px 0', color: 'var(--text-muted)', fontSize: 12 }}>
                  Be the first senior or peer to answer this query!
                </div>
              )}
            </div>

            {/* Add Comment Input */}
            <form onSubmit={handleAddComment} style={{ display: 'flex', gap: 8, marginTop: 6 }}>
              <input
                type="text"
                className="custom-input"
                placeholder="Write your answer or perspective..."
                value={newCommentText}
                onChange={(e) => setNewCommentText(e.target.value)}
                required
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
