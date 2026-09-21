// Authentic social feed posts, KEAM admission queries, and peer discussions across Kerala colleges

export const INITIAL_FEED_POSTS = [
  {
    id: "post-1",
    authorName: "Anandhu Krishna",
    authorRole: "S6 CSE, CET Trivandrum",
    authorAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    isVerified: true,
    collegeId: "cet-tvm",
    collegeName: "CET Trivandrum",
    timeAgo: "2 hours ago",
    category: "general", // "general", "keam", "my_college"
    tags: ["#Placements2025", "#CETians", "#TechCareers"],
    content: "Big news from CET placement cell today! Two students from our Computer Science branch just bagged offers with ₹44 LPA CTC from Microsoft and Texas Instruments! For juniors and incoming freshers: start LeetCode early and build at least 2 full-stack projects on GitHub. The tech club TinkerHub CET is also organizing weekend cohort sessions starting this Saturday.",
    image: null,
    likes: 184,
    hasLiked: false,
    commentsCount: 29,
    comments: [
      {
        id: "c-1",
        author: "Devika Menon (S4 ECE, MEC)",
        content: "Huge congratulations! Is the placement cell allowing students from ECE with strong coding profiles to sit for these software rounds as well?",
        timeAgo: "1 hr ago",
        likes: 12
      },
      {
        id: "c-2",
        author: "Anandhu Krishna (CET)",
        content: "Yes! ECE students with > 7.5 CGPA and no active backlogs have almost 90% overlap in tech company eligibility at CET.",
        timeAgo: "45 mins ago",
        likes: 19
      }
    ]
  },
  {
    id: "post-2",
    authorName: "Rohith M. Nair",
    authorRole: "KEAM 2025 Aspirant (Rank 1,420)",
    authorAvatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&auto=format&fit=crop&q=80",
    isVerified: false,
    collegeId: null,
    collegeName: "KEAM Aspirant",
    timeAgo: "4 hours ago",
    category: "keam",
    tags: ["#KEAM2025", "#AllotmentHelp", "#CETvsMEC"],
    content: "Confused between CET Trivandrum AI&DS vs Model Engineering College (MEC Kochi) CSE. My KEAM rank is 1,420 (General / SM category). Seniors from both colleges, please advice on campus culture, hostel availability, and tech company visits!",
    image: null,
    likes: 92,
    hasLiked: false,
    commentsCount: 38,
    comments: [
      {
        id: "c-3",
        author: "Vivek S (Alumni, MEC)",
        content: "If pure software placements and high average package is your sole priority, MEC CSE is gold standard. Being located right in Thrikkakara near Infopark gives insane startup exposure. But if you want a massive 100+ acre campus life, grand fests (Dhwani), politics, and government campus heritage, go for CET without a doubt.",
        timeAgo: "3 hrs ago",
        likes: 41
      },
      {
        id: "c-4",
        author: "Gautham P (S8 CSE, CET)",
        content: "At CET AI&DS you get the best of both worlds. The faculty for data science here is stellar, and you get all Tier 1 companies. Plus CET hostel life is legendary.",
        timeAgo: "2 hrs ago",
        likes: 27
      }
    ]
  },
  {
    id: "post-3",
    authorName: "Aswathi Pillai",
    authorRole: "Convenor, Excel 2025 Core Team",
    authorAvatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80",
    isVerified: true,
    collegeId: "mec-kochi",
    collegeName: "MEC Kochi",
    timeAgo: "6 hours ago",
    category: "general",
    tags: ["#Excel2025", "#HackFort", "#NationalHackathon"],
    content: "🚨 CALLING ALL KERALA DEVELOPERS! Registrations for HackFort 2025 are officially LIVE. 24 hours of non-stop code, free food & high-speed Wi-Fi, mentorship from Silicon Valley engineers, and a cash prize pool of ₹1,50,000. Open to all colleges across Kerala! Tag your 4-member squad in the comments.",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&auto=format&fit=crop&q=80",
    likes: 247,
    hasLiked: true,
    commentsCount: 42,
    comments: [
      {
        id: "c-5",
        author: "Rahul Raj (GEC Thrissur)",
        content: "Team GECT is ready! Can inter-college mixed teams register together?",
        timeAgo: "4 hrs ago",
        likes: 14
      },
      {
        id: "c-6",
        author: "Aswathi Pillai (MEC)",
        content: "Yes, absolutely! Inter-college squads are welcomed and encouraged.",
        timeAgo: "3 hrs ago",
        likes: 16
      }
    ]
  },
  {
    id: "post-4",
    authorName: "Midhun Varghese",
    authorRole: "S7 Mech, GEC Thrissur",
    authorAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    isVerified: true,
    collegeId: "gec-thrissur",
    collegeName: "GEC Thrissur",
    timeAgo: "8 hours ago",
    category: "my_college",
    tags: ["#GECThrissur", "#Dyuthi25", "#CampusDiaries"],
    content: "Dyuthi '25 volunteer registrations close tomorrow 5 PM at the Central Library hall. We need coordinators for Stage Management, Guest Hospitality, and Media Coverage. Come be a part of history! GECT crowd is going to turn up crazy this year.",
    image: null,
    likes: 135,
    hasLiked: false,
    commentsCount: 17,
    comments: [
      {
        id: "c-7",
        author: "Shilpa K (S3 Civil, GECT)",
        content: "Count me in for Media and Stage Production!",
        timeAgo: "5 hrs ago",
        likes: 8
      }
    ]
  },
  {
    id: "post-5",
    authorName: "Sneha Nair",
    authorRole: "KEAM 2025 Aspirant (Rank 18,200)",
    authorAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80",
    isVerified: false,
    collegeId: null,
    collegeName: "KEAM Aspirant",
    timeAgo: "12 hours ago",
    category: "keam",
    tags: ["#KEAM2025", "#OBCReservation", "#PrivateColleges"],
    content: "Rank 18,200 in KEAM (Ezhava / EZ quota). What are realistic college choices for Computer Science or Electronics? Is FISAT Angamaly, Rajagiri, or MITS attainable in round 2 or 3?",
    image: null,
    likes: 64,
    hasLiked: false,
    commentsCount: 22,
    comments: [
      {
        id: "c-8",
        author: "Arjun K (S6 ECE, FISAT)",
        content: "With rank 18k in EZ quota, you have an extremely solid chance for ECE or EEE in FISAT and Rajagiri! For CSE in top private colleges, cutoffs usually wrap up around 7k-9k for EZ, but AI/DS or Cyber Security might open up during mop-up rounds. Make sure to list them high in your option registration!",
        timeAgo: "9 hrs ago",
        likes: 21
      }
    ]
  }
];
