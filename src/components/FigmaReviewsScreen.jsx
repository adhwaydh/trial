import React, { useState } from 'react';
import { ChevronLeft, Star, ThumbsUp, MessageSquare, Send } from 'lucide-react';

export default function FigmaReviewsScreen({ collegeId, onBack, showToast }) {
  const collegeData = {
    cet: {
      name: 'College Of Engineering Trivandrum',
      rating: '4.6%',
      scoreNum: '4.6',
      totalReviews: 120,
      image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=600&auto=format&fit=crop&q=80',
      bars: [
        { star: 5, pct: 70 },
        { star: 4, pct: 20 },
        { star: 3, pct: 7 },
        { star: 2, pct: 2 },
        { star: 1, pct: 1 }
      ]
    },
    rit: {
      name: 'Rajiv Gandhi Institute of Technology',
      rating: '4.5%',
      scoreNum: '4.5',
      totalReviews: 94,
      image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600&auto=format&fit=crop&q=80',
      bars: [
        { star: 5, pct: 65 },
        { star: 4, pct: 25 },
        { star: 3, pct: 6 },
        { star: 2, pct: 3 },
        { star: 1, pct: 1 }
      ]
    },
    mec: {
      name: 'Model Engineering College Kochi',
      rating: '4.8%',
      scoreNum: '4.8',
      totalReviews: 145,
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&auto=format&fit=crop&q=80',
      bars: [
        { star: 5, pct: 82 },
        { star: 4, pct: 14 },
        { star: 3, pct: 3 },
        { star: 2, pct: 1 },
        { star: 1, pct: 0 }
      ]
    },
    gec: {
      name: 'Government Engineering College Thrissur',
      rating: '4.7%',
      scoreNum: '4.7',
      totalReviews: 112,
      image: 'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=600&auto=format&fit=crop&q=80',
      bars: [
        { star: 5, pct: 75 },
        { star: 4, pct: 18 },
        { star: 3, pct: 5 },
        { star: 2, pct: 1 },
        { star: 1, pct: 1 }
      ]
    }
  };

  const col = collegeData[collegeId] || collegeData.cet;

  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: 'Arjun S',
      stars: 5,
      time: '3 days ago',
      text: 'Good campus environment and active student community. Lots of opportunities for growth.',
      likes: 8,
      comments: 9,
      hasLiked: false,
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop&q=80'
    },
    {
      id: 2,
      name: 'Meera M',
      stars: 4,
      time: '5 days ago',
      text: 'Great infrastructure and faculty. Placement cell is very active.',
      likes: 28,
      comments: 31,
      hasLiked: false,
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80'
    },
    {
      id: 3,
      name: 'Rohith V',
      stars: 5,
      time: '1 week ago',
      text: 'Best engineering college experience in Kerala! Dhwani cultural fest is unforgettable and faculty is very supportive.',
      likes: 19,
      comments: 14,
      hasLiked: true,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80'
    }
  ]);

  const [newReviewText, setNewReviewText] = useState('');
  const [newRating, setNewRating] = useState(5);

  const handleToggleLike = (id) => {
    setReviews((prev) =>
      prev.map((r) => (r.id === id ? { ...r, likes: r.hasLiked ? r.likes - 1 : r.likes + 1, hasLiked: !r.hasLiked } : r))
    );
  };

  const handleAddReview = (e) => {
    e.preventDefault();
    if (!newReviewText.trim()) return;

    const newRev = {
      id: Date.now(),
      name: 'Lithu P L',
      stars: newRating,
      time: 'Just now',
      text: newReviewText,
      likes: 1,
      comments: 0,
      hasLiked: true,
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80'
    };

    setReviews([newRev, ...reviews]);
    setNewReviewText('');
    showToast?.('Thank you for rating and reviewing this college!');
  };

  return (
    <div className="figma-screen-body">
      {/* Cyan decorative accent blobs */}
      <div className="cyan-blob-top-right"></div>
      <div className="cyan-blob-bottom-left"></div>

      {/* Top Header with Back Arrow */}
      <div className="figma-screen-header">
        <button className="figma-back-btn" onClick={onBack} aria-label="Go Back">
          <ChevronLeft size={28} strokeWidth={2.5} />
        </button>
        <h2 className="figma-screen-title" style={{ fontSize: 16, lineHeight: 1.25, marginRight: 28 }}>
          {col.name}
        </h2>
      </div>

      {/* College Campus Photo from Figure 6 */}
      <div style={{ padding: '0 18px', position: 'relative', zIndex: 10 }}>
        <div style={{ borderRadius: 24, overflow: 'hidden', height: 180, border: '1.5px solid #000', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
          <img
            src={col.image}
            alt={col.name}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
      </div>

      {/* Rating Breakdown Card from Figure 6 */}
      <div className="reviews-overview-card">
        <div style={{ textAlign: 'center', fontWeight: 800, fontSize: 15, color: '#000' }}>
          {col.name}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
          {/* Left: Score & Star */}
          <div style={{ textAlign: 'center', flexShrink: 0 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
              <span style={{ fontSize: 26, fontWeight: 900, color: '#000' }}>
                {col.rating}
              </span>
              <span style={{ fontSize: 24, color: '#f59e0b' }}>⭐</span>
            </div>
            <div style={{ fontSize: 12, color: '#475569', marginTop: 2 }}>
              ({col.totalReviews} reviews)
            </div>
          </div>

          {/* Right: Star percentage distribution bars */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 3 }}>
            {col.bars.map((bar) => (
              <div key={bar.star} style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 11 }}>
                <span style={{ width: 14, color: '#000', fontWeight: 600 }}>{bar.star}⭐</span>
                <div style={{ flex: 1, height: 6, background: '#e2e8f0', borderRadius: 3, overflow: 'hidden' }}>
                  <div
                    style={{
                      width: `${bar.pct}%`,
                      height: '100%',
                      background: '#0084ff',
                      borderRadius: 3
                    }}
                  ></div>
                </div>
                <span style={{ width: 26, textAlign: 'right', color: '#64748b', fontSize: 10 }}>
                  {bar.pct}%
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Student Reviews Section from Figure 6 */}
      <div style={{ padding: '8px 18px', display: 'flex', flexDirection: 'column', gap: 14 }}>
        <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 18, fontWeight: 900, color: '#000', textAlign: 'center' }}>
          Student Reviews
        </h3>

        {reviews.map((rev) => (
          <div key={rev.id} className="review-item-card">
            {/* Reviewer Header */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <img
                  src={rev.avatar}
                  alt={rev.name}
                  style={{ width: 38, height: 38, borderRadius: '50%', objectFit: 'cover', border: '1.5px solid #000' }}
                />
                <div>
                  <div style={{ fontWeight: 800, fontSize: 14, color: '#000' }}>{rev.name}</div>
                  <div style={{ display: 'flex', gap: 2, fontSize: 12, color: '#f59e0b', marginTop: 1 }}>
                    {'★'.repeat(rev.stars)}
                    {'☆'.repeat(5 - rev.stars)}
                  </div>
                </div>
              </div>
              <span style={{ fontSize: 11, color: '#8e9ca8' }}>{rev.time}</span>
            </div>

            {/* Review Text */}
            <p style={{ fontSize: 13, color: '#1e293b', lineHeight: 1.45, fontWeight: 500 }}>
              {rev.text}
            </p>

            {/* Thumbs up & comments counts */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 20, paddingTop: 4, fontSize: 13, color: '#000' }}>
              <button
                onClick={() => handleToggleLike(rev.id)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: rev.hasLiked ? '#0084ff' : '#000',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 6,
                  cursor: 'pointer',
                  fontWeight: 700
                }}
              >
                <ThumbsUp size={15} />
                <span>{rev.likes}</span>
              </button>

              <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontWeight: 700 }}>
                <MessageSquare size={15} />
                <span>{rev.comments}</span>
              </div>
            </div>
          </div>
        ))}

        {/* Add a Review Box */}
        <form
          onSubmit={handleAddReview}
          style={{
            background: '#e8f4fd',
            border: '1.5px solid #000',
            borderRadius: 20,
            padding: '12px 14px',
            display: 'flex',
            flexDirection: 'column',
            gap: 8,
            position: 'relative',
            zIndex: 10
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ fontSize: 13, fontWeight: 700, color: '#000' }}>Rate this college:</span>
            <div style={{ display: 'flex', gap: 4 }}>
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setNewRating(star)}
                  style={{
                    background: 'none',
                    border: 'none',
                    fontSize: 18,
                    cursor: 'pointer',
                    color: star <= newRating ? '#f59e0b' : '#cbd5e1'
                  }}
                >
                  ★
                </button>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', gap: 8 }}>
            <input
              type="text"
              className="figma-pill-input"
              placeholder="Write your student review..."
              value={newReviewText}
              onChange={(e) => setNewReviewText(e.target.value)}
              required
            />
            <button type="submit" className="figma-btn-blue" style={{ padding: '0 16px' }}>
              <Send size={15} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
