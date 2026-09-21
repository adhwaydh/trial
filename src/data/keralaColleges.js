// Authentic data for Kerala's top engineering colleges with KEAM cutoffs and parameters

export const KERALA_COLLEGES = [
  {
    id: "cet-tvm",
    code: "TVE",
    name: "College of Engineering, Trivandrum",
    shortName: "CET Trivandrum",
    type: "Government Autonomous",
    district: "Thiruvananthapuram",
    location: "Sreekaryam, Thiruvananthapuram",
    established: 1939,
    naacGrade: "A++",
    nirfRank: "Rank 85 (Engineering)",
    academicRating: 4.9,
    campusLifeRating: 4.9,
    placementRating: 4.8,
    eventsRating: 5.0,
    flagshipFests: [
      { name: "Dhwani", type: "Cultural", tagline: "Kerala's Biggest Collegiate Cultural Extravaganza", footfall: "35,000+" },
      { name: "Drishti", type: "Technical", tagline: "All-India Tech Expo & Robowars", footfall: "15,000+" },
      { name: "Chakravyuh", type: "Sports", tagline: "South India Inter-collegiate Sports Meet", footfall: "5,000+" }
    ],
    activeClubs: [
      "IEDC CET (Kerala Startup Mission Hub)",
      "IEEE CET Student Branch (Oldest in Kerala)",
      "TinkerHub CET (FOSS & Dev Community)",
      "Team CET Shunya (Electric Vehicle & Formula Student)",
      "CET Film Society & Chithra Arts Club",
      "NSS & Nature Club CET"
    ],
    placements: {
      highestCTC: "₹44.0 LPA",
      averageCTC: "₹8.8 LPA",
      medianCTC: "₹7.5 LPA",
      placedPercentage: "91%",
      totalOffers: "1150+",
      topRecruiters: ["Google", "Amazon", "Texas Instruments", "Bosch", "Oracle", "UST Global", "TCS Digital", "L&T"]
    },
    annualTuitionFee: "₹8,650 / year",
    feeCategory: "Government",
    hostelFacilities: "Men's & Ladies' Hostels on campus, nominal mess fee (~₹3,200/mo), synthetic track, indoor stadium, high-speed campus Wi-Fi.",
    highlights: "Kerala's #1 state engineering college. Supreme alumni network across FAANG and global industries. Renowned for unrestrained creative freedom and tech culture.",
    badge: "#1 Govt College",
    keamCutoffs: {
      CSE: { SM: 420, EZ: 780, MU: 710, LC: 1850, BH: 980, SC: 5800, ST: 12400, FW: 250, EWS: 620 },
      AI_DS: { SM: 780, EZ: 1250, MU: 1100, LC: 2600, BH: 1450, SC: 8400, ST: 18500, FW: 480, EWS: 1050 },
      ECE: { SM: 1150, EZ: 2100, MU: 1950, LC: 4200, BH: 2400, SC: 11200, ST: 24000, FW: 820, EWS: 1800 },
      EEE: { SM: 2400, EZ: 4200, MU: 3900, LC: 6800, BH: 4800, SC: 18500, ST: 36000, FW: 1600, EWS: 3200 },
      ME: { SM: 2800, EZ: 4900, MU: 4600, LC: 7400, BH: 5200, SC: 19800, ST: 39000, FW: 1900, EWS: 3800 },
      CE: { SM: 3900, EZ: 6200, MU: 5800, LC: 9100, BH: 6900, SC: 23000, ST: 44000, FW: 2700, EWS: 5100 },
      IE: { SM: 5200, EZ: 8100, MU: 7800, LC: 11500, BH: 8900, SC: 28000, ST: 51000, FW: 3800, EWS: 6900 }
    }
  },
  {
    id: "gec-thrissur",
    code: "TCR",
    name: "Government Engineering College, Thrissur",
    shortName: "GEC Thrissur",
    type: "Government Autonomous",
    district: "Thrissur",
    location: "Ramavarmapuram, Thrissur",
    established: 1957,
    naacGrade: "A+",
    nirfRank: "Band 101-150",
    academicRating: 4.8,
    campusLifeRating: 4.9,
    placementRating: 4.7,
    eventsRating: 4.9,
    flagshipFests: [
      { name: "Dyuthi", type: "Cultural & Tech", tagline: "Central Kerala's Grandest Multi-Genre Festival", footfall: "30,000+" },
      { name: "Mudra", type: "Arts", tagline: "Intra-College Classical & Contemporary Stage", footfall: "8,000+" }
    ],
    activeClubs: [
      "IEDC GECT (Strong patent & startup culture)",
      "Club De Automobiliste (Formula Student team)",
      "FOSS Cell GEC Thrissur",
      "IEEE Student Branch GECT",
      "Music Club & Sahiti Literary Club"
    ],
    placements: {
      highestCTC: "₹38.0 LPA",
      averageCTC: "₹7.9 LPA",
      medianCTC: "₹6.8 LPA",
      placedPercentage: "87%",
      totalOffers: "820+",
      topRecruiters: ["Amazon", "TCS", "Infosys", "Texas Instruments", "Cognizant", "BPCL", "L&T", "Quest Global"]
    },
    annualTuitionFee: "₹8,650 / year",
    feeCategory: "Government",
    hostelFacilities: "Sprawling heritage campus hostels, separate for men and women, excellent library, state-of-the-art FAB Lab.",
    highlights: "Second oldest govt engineering college in Kerala with an iconic 120-acre lush campus. Famed for innovation, automobiles, and electrical research.",
    badge: "Premier Govt Hub",
    keamCutoffs: {
      CSE: { SM: 920, EZ: 1540, MU: 1420, LC: 3100, BH: 1850, SC: 8900, ST: 19000, FW: 610, EWS: 1250 },
      AI_DS: { SM: 1450, EZ: 2300, MU: 2100, LC: 4500, BH: 2700, SC: 12100, ST: 25000, FW: 980, EWS: 1900 },
      ECE: { SM: 2100, EZ: 3600, MU: 3300, LC: 5800, BH: 3900, SC: 15400, ST: 32000, FW: 1450, EWS: 2800 },
      EEE: { SM: 3600, EZ: 5900, MU: 5400, LC: 8900, BH: 6400, SC: 22100, ST: 42000, FW: 2500, EWS: 4600 },
      ME: { SM: 3950, EZ: 6400, MU: 5900, LC: 9800, BH: 7100, SC: 24500, ST: 46000, FW: 2800, EWS: 5200 },
      CE: { SM: 5100, EZ: 7900, MU: 7400, LC: 11400, BH: 8700, SC: 27900, ST: 51000, FW: 3700, EWS: 6500 },
      CHE: { SM: 4300, EZ: 6900, MU: 6400, LC: 10200, BH: 7800, SC: 26000, ST: 48000, FW: 3100, EWS: 5800 }
    }
  },
  {
    id: "mec-kochi",
    code: "MDL",
    name: "Govt Model Engineering College, Thrikkakara",
    shortName: "MEC Kochi",
    type: "Govt Cost Sharing (IHRD)",
    district: "Ernakulam",
    location: "Thrikkakara, Kochi",
    established: 1989,
    naacGrade: "A+",
    nirfRank: "Band 151-200",
    academicRating: 4.8,
    campusLifeRating: 4.6,
    placementRating: 5.0,
    eventsRating: 4.8,
    flagshipFests: [
      { name: "Excel", type: "Technical", tagline: "South India's First & Premier National Tech Fest", footfall: "20,000+" },
      { name: "Chrysalis", type: "Cultural", tagline: "Intense Annual Arts & Battle of Branches", footfall: "5,000+" }
    ],
    activeClubs: [
      "Excel MEC Core Committee",
      "FOSSMEC (Pioneers of Open Source in Kerala)",
      "IEEE MEC SB",
      "E-Cell MEC (Startup & Venture Nursery)",
      "Mixed Baggage (MEC Literary & Debating Society)"
    ],
    placements: {
      highestCTC: "₹52.0 LPA",
      averageCTC: "₹9.6 LPA",
      medianCTC: "₹8.2 LPA",
      placedPercentage: "94%",
      totalOffers: "650+",
      topRecruiters: ["Microsoft", "Amazon", "DE Shaw", "Cadence", "Qualcomm", "Cisco", "Deloitte", "Oracle"]
    },
    annualTuitionFee: "₹40,000 / year (Merit)",
    feeCategory: "Govt Cost-Sharing",
    hostelFacilities: "Private & college-tied hostels in Thrikkakara close to Infopark and Kakkanad IT hub.",
    highlights: "The undisputed coding and placement powerhouse of Kerala. First engineering college in Kerala to be established under IHRD. Unrivaled placement-to-intake ratio.",
    badge: "#1 for Placements",
    keamCutoffs: {
      CSE: { SM: 1100, EZ: 1850, MU: 1650, LC: 3400, BH: 2100, SC: 10200, ST: 22000, FW: 750, EWS: 1450 },
      AI_DS: { SM: 1650, EZ: 2600, MU: 2400, LC: 4800, BH: 2950, SC: 13500, ST: 27000, FW: 1150, EWS: 2100 },
      ECE: { SM: 2450, EZ: 4100, MU: 3800, LC: 6400, BH: 4400, SC: 17200, ST: 34000, FW: 1700, EWS: 3200 },
      EEE: { SM: 4200, EZ: 6800, MU: 6200, LC: 9800, BH: 7300, SC: 24000, ST: 45000, FW: 2900, EWS: 5400 },
      BME: { SM: 5900, EZ: 9200, MU: 8700, LC: 13500, BH: 9900, SC: 29000, ST: 54000, FW: 4200, EWS: 7800 },
      ME: { SM: 5100, EZ: 8200, MU: 7600, LC: 11900, BH: 8900, SC: 27000, ST: 50000, FW: 3600, EWS: 6800 }
    }
  },
  {
    id: "tkm-kollam",
    code: "TKM",
    name: "TKM College of Engineering, Kollam",
    shortName: "TKM Kollam",
    type: "Government-Aided Autonomous",
    district: "Kollam",
    location: "Kilikolloor, Kollam",
    established: 1958,
    naacGrade: "A++",
    nirfRank: "Band 151-200",
    academicRating: 4.8,
    campusLifeRating: 4.8,
    placementRating: 4.7,
    eventsRating: 4.9,
    flagshipFests: [
      { name: "Hestia", type: "Techno-Cultural", tagline: "Southern Kerala's Biggest Festival of Culture and Code", footfall: "28,000+" },
      { name: "Rithu", type: "Arts", tagline: "Intense cultural showdown across 4 days", footfall: "6,000+" }
    ],
    activeClubs: [
      "IEDC TKMCE (Incubating high-growth hardware & software)",
      "STEPS TKM (Design & Aeromodelling Club)",
      "IEEE TKMCE SB",
      "Concreate (Civil Engineering Excellence)",
      "TKM Debate Club"
    ],
    placements: {
      highestCTC: "₹34.0 LPA",
      averageCTC: "₹7.4 LPA",
      medianCTC: "₹6.4 LPA",
      placedPercentage: "86%",
      totalOffers: "780+",
      topRecruiters: ["TCS", "Infosys", "Cognizant", "L&T", "MRF", "Schneider Electric", "Amazon", "Wipro"]
    },
    annualTuitionFee: "₹8,650 / year",
    feeCategory: "Government-Aided",
    hostelFacilities: "Extensive heritage hostels on campus, modern sports complex, subsidized mess, central library with IEEE digital access.",
    highlights: "The premier government-aided engineering college in Kerala. Renowned for civil, mechanical, architecture and vibrant student governance.",
    badge: "Top Govt-Aided",
    keamCutoffs: {
      CSE: { SM: 1350, EZ: 2200, MU: 1950, LC: 3900, BH: 2500, SC: 11800, ST: 25000, FW: 910, EWS: 1750 },
      AI_DS: { SM: 1900, EZ: 2950, MU: 2700, LC: 5200, BH: 3400, SC: 14800, ST: 30000, FW: 1300, EWS: 2450 },
      ECE: { SM: 2900, EZ: 4700, MU: 4300, LC: 7300, BH: 5200, SC: 18900, ST: 37000, FW: 2050, EWS: 3800 },
      EEE: { SM: 4600, EZ: 7200, MU: 6800, LC: 10400, BH: 7900, SC: 25000, ST: 47000, FW: 3200, EWS: 5900 },
      ME: { SM: 4400, EZ: 6900, MU: 6400, LC: 10100, BH: 7600, SC: 24200, ST: 46000, FW: 3100, EWS: 5700 },
      CE: { SM: 5500, EZ: 8400, MU: 7900, LC: 12200, BH: 9300, SC: 28500, ST: 52000, FW: 3950, EWS: 7100 },
      CHE: { SM: 4800, EZ: 7500, MU: 7100, LC: 10800, BH: 8200, SC: 26500, ST: 49000, FW: 3450, EWS: 6200 }
    }
  },
  {
    id: "rit-kottayam",
    code: "KTE",
    name: "Rajiv Gandhi Institute of Technology, Kottayam",
    shortName: "RIT Kottayam",
    type: "Government",
    district: "Kottayam",
    location: "Pampady, Kottayam",
    established: 1991,
    naacGrade: "A",
    nirfRank: "Band 151-200",
    academicRating: 4.7,
    campusLifeRating: 4.7,
    placementRating: 4.5,
    eventsRating: 4.8,
    flagshipFests: [
      { name: "Ritu", type: "Techno-Cultural", tagline: "Central Travancore's Most Awaited Celebration", footfall: "18,000+" },
      { name: "Aaravam", type: "Arts", tagline: "Annual cultural competition of RITians", footfall: "4,500+" }
    ],
    activeClubs: [
      "IEDC RIT",
      "Robotics Club RIT",
      "IEEE RIT SB",
      "NSS RIT Unit",
      "Music and Dramatics Club"
    ],
    placements: {
      highestCTC: "₹28.0 LPA",
      averageCTC: "₹6.9 LPA",
      medianCTC: "₹6.0 LPA",
      placedPercentage: "82%",
      totalOffers: "520+",
      topRecruiters: ["TCS", "Infosys", "Cognizant", "UST", "QBurst", "MRF", "Federal Bank", "Wipro"]
    },
    annualTuitionFee: "₹8,650 / year",
    feeCategory: "Government",
    hostelFacilities: "Scenic hill-top campus hostels with clean facilities, mess run by students committee, football ground.",
    highlights: "A prestigious government institution named in memory of former PM Rajiv Gandhi. Celebrated for pristine green campus and active alumni community.",
    badge: "Premier Govt",
    keamCutoffs: {
      CSE: { SM: 1950, EZ: 3100, MU: 2800, LC: 5300, BH: 3600, SC: 14500, ST: 29000, FW: 1350, EWS: 2500 },
      AI_DS: { SM: 2600, EZ: 4100, MU: 3700, LC: 6700, BH: 4600, SC: 17500, ST: 34000, FW: 1850, EWS: 3400 },
      ECE: { SM: 3800, EZ: 5900, MU: 5400, LC: 8900, BH: 6600, SC: 22000, ST: 42000, FW: 2700, EWS: 4900 },
      EEE: { SM: 5900, EZ: 8900, MU: 8300, LC: 13100, BH: 9800, SC: 29000, ST: 53000, FW: 4200, EWS: 7600 },
      ME: { SM: 5600, EZ: 8600, MU: 8100, LC: 12600, BH: 9400, SC: 28500, ST: 51000, FW: 4000, EWS: 7300 },
      CE: { SM: 6800, EZ: 9900, MU: 9400, LC: 14400, BH: 10900, SC: 32000, ST: 56000, FW: 4900, EWS: 8800 }
    }
  },
  {
    id: "mace-kothamangalam",
    code: "MAC",
    name: "Mar Athanasius College of Engineering",
    shortName: "MACE Kothamangalam",
    type: "Government-Aided Autonomous",
    district: "Ernakulam",
    location: "Kothamangalam, Ernakulam",
    established: 1961,
    naacGrade: "A+",
    nirfRank: "Band 151-200",
    academicRating: 4.8,
    campusLifeRating: 4.6,
    placementRating: 4.6,
    eventsRating: 4.7,
    flagshipFests: [
      { name: "Sanskriti", type: "Cultural", tagline: "Celebration of Youth, Rhythm & Heritage", footfall: "15,000+" },
      { name: "Takshak", type: "Technical", tagline: "Central Kerala's Oldest National Tech Fest", footfall: "12,000+" }
    ],
    activeClubs: [
      "MACE IEDC Hub",
      "Club Veloce (Automotive Research)",
      "IEEE MACE Student Branch",
      "Free Software Community of MACE",
      "NCC & NSS Units"
    ],
    placements: {
      highestCTC: "₹32.0 LPA",
      averageCTC: "₹7.1 LPA",
      medianCTC: "₹6.2 LPA",
      placedPercentage: "84%",
      totalOffers: "680+",
      topRecruiters: ["Cognizant", "TCS", "Infosys", "UST", "Quest Global", "L&T", "Federal Bank", "Mindtree"]
    },
    annualTuitionFee: "₹8,650 / year",
    feeCategory: "Government-Aided",
    hostelFacilities: "Extensive men's and women's hostels within 62-acre campus, sports arena, research labs.",
    highlights: "Historic institution with deep academic rigor. One of the top government-aided institutions in Central Kerala with autonomous flexibility.",
    badge: "Top Govt-Aided",
    keamCutoffs: {
      CSE: { SM: 1800, EZ: 2900, MU: 2600, LC: 5100, BH: 3400, SC: 13900, ST: 28000, FW: 1250, EWS: 2300 },
      AI_DS: { SM: 2400, EZ: 3800, MU: 3500, LC: 6300, BH: 4300, SC: 16800, ST: 33000, FW: 1700, EWS: 3100 },
      ECE: { SM: 3600, EZ: 5600, MU: 5100, LC: 8600, BH: 6300, SC: 21500, ST: 41000, FW: 2550, EWS: 4700 },
      EEE: { SM: 5700, EZ: 8700, MU: 8100, LC: 12900, BH: 9600, SC: 28900, ST: 52000, FW: 4100, EWS: 7400 },
      ME: { SM: 5400, EZ: 8300, MU: 7800, LC: 12400, BH: 9100, SC: 27900, ST: 50000, FW: 3900, EWS: 7000 },
      CE: { SM: 6600, EZ: 9700, MU: 9200, LC: 14100, BH: 10700, SC: 31500, ST: 55000, FW: 4750, EWS: 8600 }
    }
  },
  {
    id: "rset-kochi",
    code: "RET",
    name: "Rajagiri School of Engineering & Technology",
    shortName: "Rajagiri RSET",
    type: "Private Autonomous",
    district: "Ernakulam",
    location: "Kakkanad, Kochi",
    established: 2001,
    naacGrade: "A++",
    nirfRank: "Band 151-200",
    academicRating: 4.7,
    campusLifeRating: 4.5,
    placementRating: 4.7,
    eventsRating: 4.6,
    flagshipFests: [
      { name: "Bharatham", type: "Cultural", tagline: "Kochi's Premier Private College Festival", footfall: "16,000+" },
      { name: "Abhiyanthriki", type: "Technical", tagline: "Flagship National Tech Symposium", footfall: "10,000+" }
    ],
    activeClubs: [
      "RSET IEDC (Kochi Infopark startup synergy)",
      "CSI RSET Student Chapter",
      "IEEE RSET SB",
      "App Development Club",
      "Music & Choreography Club"
    ],
    placements: {
      highestCTC: "₹36.0 LPA",
      averageCTC: "₹6.8 LPA",
      medianCTC: "₹5.8 LPA",
      placedPercentage: "89%",
      totalOffers: "940+",
      topRecruiters: ["Cognizant", "TCS", "Amazon", "Infosys", "IBM", "UST", "EY", "Federal Bank", "SOTI"]
    },
    annualTuitionFee: "₹75,000 / year (Govt Quota)",
    feeCategory: "Autonomous Self-Financing",
    hostelFacilities: "Modern campus residences with high-speed internet, close proximity to Infopark and SmartCity Kochi.",
    highlights: "Top-ranked autonomous engineering institution in Kerala with unmatched corporate ties in Kakkanad IT corridor.",
    badge: "#1 Private Autonomous",
    keamCutoffs: {
      CSE: { SM: 3200, EZ: 5100, MU: 4600, LC: 7800, BH: 5800, SC: 20500, ST: 41000, FW: 2250, EWS: 4100 },
      AI_DS: { SM: 4100, EZ: 6400, MU: 5900, LC: 9600, BH: 7100, SC: 23500, ST: 45000, FW: 2900, EWS: 5300 },
      ECE: { SM: 6200, EZ: 9400, MU: 8900, LC: 13500, BH: 10400, SC: 31000, ST: 54000, FW: 4400, EWS: 8000 },
      EEE: { SM: 8900, EZ: 13200, MU: 12500, LC: 18200, BH: 14500, SC: 38000, ST: 59000, FW: 6300, EWS: 11500 },
      ME: { SM: 9800, EZ: 14500, MU: 13800, LC: 19800, BH: 15900, SC: 41000, ST: 60000, FW: 6900, EWS: 12700 },
      CE: { SM: 11200, EZ: 16400, MU: 15600, LC: 22000, BH: 17800, SC: 44000, ST: 60000, FW: 7900, EWS: 14500 }
    }
  },
  {
    id: "gec-bartonhill",
    code: "PKD",
    name: "Govt Engineering College Barton Hill, TVM",
    shortName: "GEC Barton Hill",
    type: "Government",
    district: "Thiruvananthapuram",
    location: "Barton Hill, Vanchiyoor, Thiruvananthapuram",
    established: 1999,
    naacGrade: "A",
    nirfRank: "Band 151-200",
    academicRating: 4.6,
    campusLifeRating: 4.4,
    placementRating: 4.5,
    eventsRating: 4.5,
    flagshipFests: [
      { name: "Aagneya", type: "Techno-Cultural", tagline: "City-Centric Explosive College Festival", footfall: "14,000+" }
    ],
    activeClubs: [
      "Team Pravega (Global Shell Eco-marathon Winners)",
      "IEDC GECBH",
      "IEEE SB GECBH",
      "TinkerHub GECBH",
      "NSS Unit"
    ],
    placements: {
      highestCTC: "₹31.0 LPA",
      averageCTC: "₹7.2 LPA",
      medianCTC: "₹6.1 LPA",
      placedPercentage: "81%",
      totalOffers: "480+",
      topRecruiters: ["TCS", "Infosys", "Mercedes-Benz R&D", "UST", "Cognizant", "L&T", "Quest Global"]
    },
    annualTuitionFee: "₹8,650 / year",
    feeCategory: "Government",
    hostelFacilities: "Centrally located in the heart of Trivandrum city with Govt hostels and nearby city amenities.",
    highlights: "Internationally famous for Team Pravega's ultra-energy-efficient cars winning at Shell Eco-marathon. Prime capital location.",
    badge: "Top Urban Govt",
    keamCutoffs: {
      CSE: { SM: 2100, EZ: 3300, MU: 3000, LC: 5700, BH: 3900, SC: 15200, ST: 30000, FW: 1450, EWS: 2700 },
      AI_DS: { SM: 2800, EZ: 4400, MU: 4000, LC: 7100, BH: 4900, SC: 18600, ST: 35000, FW: 1980, EWS: 3650 },
      ECE: { SM: 4200, EZ: 6500, MU: 6000, LC: 9800, BH: 7300, SC: 23500, ST: 44000, FW: 2950, EWS: 5400 },
      EEE: { SM: 6400, EZ: 9600, MU: 9000, LC: 13900, BH: 10600, SC: 30500, ST: 54000, FW: 4500, EWS: 8200 },
      ME: { SM: 6200, EZ: 9300, MU: 8700, LC: 13500, BH: 10300, SC: 29800, ST: 53000, FW: 4350, EWS: 7950 },
      CE: { SM: 7400, EZ: 10800, MU: 10200, LC: 15200, BH: 11800, SC: 34000, ST: 57000, FW: 5200, EWS: 9500 }
    }
  },
  {
    id: "fisat-angamaly",
    code: "FIT",
    name: "Federal Institute of Science and Technology",
    shortName: "FISAT Angamaly",
    type: "Private Autonomous",
    district: "Ernakulam",
    location: "Mookkannoor, Angamaly, Ernakulam",
    established: 2002,
    naacGrade: "A+",
    nirfRank: "Band 151-200",
    academicRating: 4.6,
    campusLifeRating: 4.5,
    placementRating: 4.6,
    eventsRating: 4.5,
    flagshipFests: [
      { name: "Arangu", type: "Cultural", tagline: "Grand 3-Day Music & Arts Fiesta", footfall: "12,000+" },
      { name: "Bharatham Tech", type: "Technical", tagline: "Robotics and Innovation Summit", footfall: "7,000+" }
    ],
    activeClubs: [
      "FISAT FAB Lab",
      "IEDC FISAT (Strong IPR cell)",
      "IEEE SB FISAT",
      "FOSS Cell FISAT",
      "Music Club Octave"
    ],
    placements: {
      highestCTC: "₹30.0 LPA",
      averageCTC: "₹6.2 LPA",
      medianCTC: "₹5.2 LPA",
      placedPercentage: "85%",
      totalOffers: "760+",
      topRecruiters: ["Cognizant", "TCS", "Infosys", "IBM", "UST", "Federal Bank", "Wipro", "Hexaware"]
    },
    annualTuitionFee: "₹75,000 / year (Govt Quota)",
    feeCategory: "Autonomous Self-Financing",
    hostelFacilities: "Lush green 25-acre campus with residential hostels, high-speed WiFi, gym, modern canteen.",
    highlights: "Established by Federal Bank Officers Association. Outstanding infrastructure, FAB Lab, and consistent high-volume placement record.",
    badge: "Top Tier Private",
    keamCutoffs: {
      CSE: { SM: 4400, EZ: 6900, MU: 6300, LC: 10200, BH: 7800, SC: 24500, ST: 47000, FW: 3100, EWS: 5700 },
      AI_DS: { SM: 5500, EZ: 8400, MU: 7800, LC: 12200, BH: 9400, SC: 28000, ST: 51000, FW: 3900, EWS: 7100 },
      ECE: { SM: 7800, EZ: 11800, MU: 11100, LC: 16500, BH: 12900, SC: 35000, ST: 57000, FW: 5500, EWS: 10100 },
      EEE: { SM: 11200, EZ: 16400, MU: 15600, LC: 22000, BH: 17800, SC: 43000, ST: 60000, FW: 7900, EWS: 14500 },
      ME: { SM: 12400, EZ: 17900, MU: 17100, LC: 23800, BH: 19400, SC: 46000, ST: 60000, FW: 8700, EWS: 16000 },
      CE: { SM: 13900, EZ: 19800, MU: 18900, LC: 25900, BH: 21200, SC: 49000, ST: 60000, FW: 9800, EWS: 18000 }
    }
  },
  {
    id: "mits-kochi",
    code: "MBI",
    name: "Muthoot Institute of Technology & Science",
    shortName: "MITS Kochi",
    type: "Private Autonomous",
    district: "Ernakulam",
    location: "Varikoli, Puthencruz, Ernakulam",
    established: 2013,
    naacGrade: "A+",
    nirfRank: "Band 201-250",
    academicRating: 4.6,
    campusLifeRating: 4.4,
    placementRating: 4.6,
    eventsRating: 4.4,
    flagshipFests: [
      { name: "Takshak", type: "Cultural & Tech", tagline: "Fastest Growing Tech Summit in Kochi", footfall: "8,000+" }
    ],
    activeClubs: [
      "MITS IEDC",
      "IEEE SB MITS",
      "ACM Student Chapter",
      "Developer Student Clubs (GDSC)",
      "Rotaract MITS"
    ],
    placements: {
      highestCTC: "₹30.0 LPA",
      averageCTC: "₹6.4 LPA",
      medianCTC: "₹5.4 LPA",
      placedPercentage: "86%",
      totalOffers: "620+",
      topRecruiters: ["Cognizant", "TCS", "Infosys", "IBM", "Federal Bank", "Amazon", "SOTI"]
    },
    annualTuitionFee: "₹75,000 / year (Govt Quota)",
    feeCategory: "Autonomous Self-Financing",
    hostelFacilities: "Modern campus hostel blocks, smart air-conditioned auditorium, sports grounds.",
    highlights: "Backed by the Muthoot Group. Fast-rising autonomous institution with top-tier academic discipline and placement metrics.",
    badge: "Fast-Rising Star",
    keamCutoffs: {
      CSE: { SM: 4800, EZ: 7400, MU: 6800, LC: 10900, BH: 8300, SC: 26000, ST: 49000, FW: 3400, EWS: 6200 },
      AI_DS: { SM: 5900, EZ: 8900, MU: 8300, LC: 12900, BH: 9900, SC: 29500, ST: 53000, FW: 4200, EWS: 7600 },
      ECE: { SM: 8600, EZ: 12800, MU: 12100, LC: 17800, BH: 13900, SC: 37000, ST: 58000, FW: 6100, EWS: 11100 },
      EEE: { SM: 12800, EZ: 18400, MU: 17600, LC: 24200, BH: 19800, SC: 45000, ST: 60000, FW: 9000, EWS: 16500 },
      ME: { SM: 14200, EZ: 20200, MU: 19400, LC: 26400, BH: 21800, SC: 48000, ST: 60000, FW: 10000, EWS: 18400 },
      CE: { SM: 15800, EZ: 22400, MU: 21500, LC: 28800, BH: 24000, SC: 51000, ST: 60000, FW: 11100, EWS: 20500 }
    }
  },
  {
    id: "nss-palakkad",
    code: "NSS",
    name: "NSS College of Engineering, Palakkad",
    shortName: "NSS Palakkad",
    type: "Government-Aided",
    district: "Palakkad",
    location: "Akathethara, Palakkad",
    established: 1960,
    naacGrade: "A",
    nirfRank: "Band 151-200",
    academicRating: 4.6,
    campusLifeRating: 4.6,
    placementRating: 4.4,
    eventsRating: 4.6,
    flagshipFests: [
      { name: "Daksha", type: "Techno-Cultural", tagline: "Palakkad's Premier Engineering Carnival", footfall: "14,000+" }
    ],
    activeClubs: [
      "NSSCE IEDC",
      "Team Aether (Robotics & Drones)",
      "IEEE SB NSSCE",
      "Nature Club",
      "Music & Fine Arts Club"
    ],
    placements: {
      highestCTC: "₹24.0 LPA",
      averageCTC: "₹6.3 LPA",
      medianCTC: "₹5.5 LPA",
      placedPercentage: "79%",
      totalOffers: "510+",
      topRecruiters: ["TCS", "Infosys", "L&T", "MRF", "Cognizant", "Wipro", "Federal Bank"]
    },
    annualTuitionFee: "₹8,650 / year",
    feeCategory: "Government-Aided",
    hostelFacilities: "Spacious hostels at the foothills of Western Ghats, scenic surroundings, strong sports culture.",
    highlights: "Historic govt-aided college with expansive 125-acre campus at the base of the Western Ghats. Known for strong core engineering.",
    badge: "Heritage Govt-Aided",
    keamCutoffs: {
      CSE: { SM: 2900, EZ: 4600, MU: 4200, LC: 7200, BH: 5100, SC: 19000, ST: 36000, FW: 2050, EWS: 3700 },
      ECE: { SM: 5200, EZ: 8100, MU: 7600, LC: 11800, BH: 9000, SC: 27500, ST: 49000, FW: 3700, EWS: 6700 },
      EEE: { SM: 7800, EZ: 11600, MU: 10900, LC: 16200, BH: 12700, SC: 34500, ST: 56000, FW: 5500, EWS: 10100 },
      ME: { SM: 7200, EZ: 10800, MU: 10200, LC: 15300, BH: 11900, SC: 33000, ST: 55000, FW: 5100, EWS: 9300 },
      CE: { SM: 8500, EZ: 12500, MU: 11900, LC: 17400, BH: 13700, SC: 36500, ST: 58000, FW: 6000, EWS: 11000 },
      IC: { SM: 9400, EZ: 13800, MU: 13100, LC: 18900, BH: 15100, SC: 39000, ST: 59000, FW: 6600, EWS: 12200 }
    }
  },
  {
    id: "scms-kochi",
    code: "SCM",
    name: "SCMS School of Engineering & Technology",
    shortName: "SCMS Karukutty",
    type: "Private",
    district: "Ernakulam",
    location: "Karukutty, Angamaly, Ernakulam",
    established: 2001,
    naacGrade: "A",
    nirfRank: "Band 201-250",
    academicRating: 4.5,
    campusLifeRating: 4.4,
    placementRating: 4.5,
    eventsRating: 4.4,
    flagshipFests: [
      { name: "Vipanchika", type: "Cultural", tagline: "Grand Stage for Artistic Talents", footfall: "9,000+" },
      { name: "Ignite", type: "Technical", tagline: "Annual Automotive & Innovation Expo", footfall: "6,000+" }
    ],
    activeClubs: [
      "SCMS Water Institute",
      "Automobile Research Cell",
      "IEDC SCMS",
      "IEEE SB SSET",
      "Robotics Club"
    ],
    placements: {
      highestCTC: "₹24.0 LPA",
      averageCTC: "₹5.8 LPA",
      medianCTC: "₹4.8 LPA",
      placedPercentage: "81%",
      totalOffers: "480+",
      topRecruiters: ["Infosys", "Cognizant", "TCS", "UST", "Wipro", "Federal Bank", "Sutherland"]
    },
    annualTuitionFee: "₹75,000 / year (Govt Quota)",
    feeCategory: "Private Self-Financing",
    hostelFacilities: "Modern hostel blocks, swimming pool, badminton court, lush green campus.",
    highlights: "Distinguished for its environmental research, automobile lab, and water institute.",
    badge: "Established Private",
    keamCutoffs: {
      CSE: { SM: 6900, EZ: 10400, MU: 9800, LC: 14800, BH: 11400, SC: 32000, ST: 55000, FW: 4900, EWS: 8900 },
      AI_DS: { SM: 8100, EZ: 12100, MU: 11500, LC: 16900, BH: 13200, SC: 35500, ST: 58000, FW: 5700, EWS: 10500 },
      ECE: { SM: 11400, EZ: 16700, MU: 15900, LC: 22400, BH: 18100, SC: 43000, ST: 60000, FW: 8000, EWS: 14800 },
      EEE: { SM: 16200, EZ: 23100, MU: 22200, LC: 29500, BH: 24800, SC: 52000, ST: 60000, FW: 11400, EWS: 21000 },
      ME: { SM: 17500, EZ: 24800, MU: 23900, LC: 31200, BH: 26500, SC: 54000, ST: 60000, FW: 12300, EWS: 22700 },
      CE: { SM: 18900, EZ: 26500, MU: 25600, LC: 33000, BH: 28200, SC: 56000, ST: 60000, FW: 13300, EWS: 24500 }
    }
  },
  {
    id: "lbsitw-tvm",
    code: "LBT",
    name: "LBS Institute of Technology for Women",
    shortName: "LBSITW Poojappura",
    type: "Govt Cost Sharing",
    district: "Thiruvananthapuram",
    location: "Poojappura, Thiruvananthapuram",
    established: 2001,
    naacGrade: "A",
    nirfRank: "Band 151-200",
    academicRating: 4.6,
    campusLifeRating: 4.5,
    placementRating: 4.7,
    eventsRating: 4.5,
    flagshipFests: [
      { name: "Yvidh", type: "Techno-Cultural", tagline: "South India's Premier Women's Engineering Fest", footfall: "10,000+" }
    ],
    activeClubs: [
      "Women in Engineering (IEEE WIE)",
      "IEDC LBSITW (Women Entrepreneurship Lead)",
      "ACM-W Student Chapter",
      "TinkerHub LBSITW",
      "Dance & Music Club"
    ],
    placements: {
      highestCTC: "₹34.0 LPA",
      averageCTC: "₹7.1 LPA",
      medianCTC: "₹6.1 LPA",
      placedPercentage: "88%",
      totalOffers: "490+",
      topRecruiters: ["Microsoft", "Oracle", "Cognizant", "TCS Digital", "Amazon", "Infosys", "EY"]
    },
    annualTuitionFee: "₹35,000 / year (Merit)",
    feeCategory: "Govt Cost-Sharing",
    hostelFacilities: "Secure, on-campus hostels with round-the-clock security and Wi-Fi, central Poojappura location.",
    highlights: "Kerala's first engineering college exclusively for women. Exemplary track record of software placements and IEEE awards.",
    badge: "#1 Women's Tech Institute",
    keamCutoffs: {
      CSE: { SM: 2800, EZ: 4500, MU: 4100, LC: 7100, BH: 5000, SC: 18500, ST: 35000, FW: 1980, EWS: 3600 },
      AI_DS: { SM: 3600, EZ: 5600, MU: 5200, LC: 8600, BH: 6200, SC: 21500, ST: 40000, FW: 2550, EWS: 4650 },
      ECE: { SM: 5100, EZ: 7900, MU: 7400, LC: 11400, BH: 8700, SC: 27000, ST: 48000, FW: 3600, EWS: 6600 },
      EEE: { SM: 7900, EZ: 11800, MU: 11100, LC: 16500, BH: 12900, SC: 35000, ST: 56000, FW: 5600, EWS: 10200 },
      CE: { SM: 8900, EZ: 13100, MU: 12400, LC: 18000, BH: 14300, SC: 38000, ST: 59000, FW: 6300, EWS: 11500 }
    }
  }
];

export const BRANCH_NAMES = {
  CSE: "Computer Science & Engineering",
  AI_DS: "Artificial Intelligence & Data Science",
  ECE: "Electronics & Communication Engg",
  EEE: "Electrical & Electronics Engg",
  ME: "Mechanical Engineering",
  CE: "Civil Engineering",
  CHE: "Chemical Engineering",
  BME: "Biomedical Engineering",
  IE: "Industrial Engineering",
  IC: "Instrumentation & Control Engg"
};

export const KEAM_CATEGORIES = [
  { code: "SM", name: "State Merit (General / Open)", description: "Open to all candidates irrespective of community" },
  { code: "EZ", name: "Ezhava (EZ)", description: "Socially and Educationally Backward Classes (SEBC)" },
  { code: "MU", name: "Muslim (MU)", description: "SEBC Category" },
  { code: "LC", name: "Latin Catholic & Anglo Indian (LC)", description: "SEBC Category" },
  { code: "BH", name: "Other Backward Hindu (BH)", description: "SEBC Category" },
  { code: "EWS", name: "Economically Weaker Section (EWS)", description: "General category low income quota" },
  { code: "FW", name: "Tuition Fee Waiver (TFW)", description: "AICTE Fee Waiver scheme for top rankers" },
  { code: "SC", name: "Scheduled Caste (SC)", description: "Reserved category with relaxed cutoffs" },
  { code: "ST", name: "Scheduled Tribe (ST)", description: "Reserved category with relaxed cutoffs" }
];
