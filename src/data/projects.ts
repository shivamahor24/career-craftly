/**
 * Projects Data Store for Career Craftly LLP
 * Content extracted faithfully from Flux Mind Studios projects.
 * Rendered with White Premium AI SaaS UI design system.
 */

export interface ProjectMetric {
  value: string;
  label: string;
}

export interface Project {
  slug: string;
  name: string;
  category: string;
  summary: string;
  description: string;
  client?: string;
  features: string[];
  tech: string[];
  metrics: ProjectMetric[];
  liveUrl?: string;
  image: string;
  gallery?: string[];
  logoText: string;
  tags: string[];
}

export const projects: Project[] = [
  {
    slug: 'marketmover-ai',
    name: 'MarketMover AI',
    category: 'FinTech',
    tags: ['AI', 'FinTech', 'Trading'],
    summary:
      'AI-powered algorithmic trading platform delivering predictive signals and automated risk telemetry for capital markets.',
    description:
      'MarketMover AI is an advanced artificial intelligence trading intelligence platform engineered for real-time market data analysis, predictive pattern recognition, and autonomous execution. Designed for high-frequency trading efficiency and precision risk controls.',
    client: 'MarketMover AI Inc.',
    features: [
      'Predictive AI Trading Signals with real-time anomaly detection',
      'Automated Portfolio Rebalancing across multi-asset classes',
      'Real-Time Market Depth Analytics and institutional orderflow tracking',
      'Direct Multi-Exchange API Integrations (Crypto & Equities)',
      'High-Performance Backtesting Engine & Risk Telemetry',
    ],
    tech: ['Python', 'TensorFlow', 'FastAPI', 'WebSocket', 'React', 'PostgreSQL'],
    metrics: [
      { value: '+38%', label: 'Strategy Alpha Yield' },
      { value: '99.8%', label: 'Execution Engine Uptime' },
      { value: '<12ms', label: 'Average Signal Latency' },
    ],
    liveUrl: 'https://marketmoverai.in/',
    image: '/projects/marketmover-ai.png',
    logoText: 'MM',
  },
  {
    slug: 'forenotes',
    name: 'Forenotes',
    category: 'Productivity',
    tags: ['Productivity', 'App', 'AI'],
    summary:
      'Smart note-taking, collaborative workspaces, and automated knowledge graph organization powered by AI.',
    description:
      'Forenotes revolutionizes knowledge management and note-taking with AI-driven content synthesis, semantic search, and seamless team collaboration. It structures ideas into actionable workflows and connected knowledge graphs.',
    client: 'Forenotes Productivity Suite',
    features: [
      'AI Smart Note Synthesis & Real-Time Audio Transcription',
      'Bi-Directional Semantic Knowledge Graph Links',
      'Real-Time Collaborative Canvas for Distributed Teams',
      'Full Markdown, LaTeX, and Rich Media Support',
      'End-to-End Encrypted Multi-Device Cloud Sync',
    ],
    tech: ['React', 'TypeScript', 'Node.js', 'Neo4j', 'WebRTC', 'AWS S3'],
    metrics: [
      { value: '50K+', label: 'Active Global Users' },
      { value: '4.8/5', label: 'Average User App Rating' },
      { value: '3.5x', label: 'Faster Information Retrieval' },
    ],
    liveUrl: 'https://forenotes.com/',
    image: '/projects/forenotes.png',
    logoText: 'FN',
  },
  {
    slug: 'maa-sharda-industries',
    name: 'Maa Sharda Industries',
    category: 'Industrial',
    tags: ['Industrial', 'Manufacturing', 'B2B'],
    summary:
      'Digital corporate portal and automated inventory showcase for industrial engineering & machinery manufacturing.',
    description:
      'A comprehensive enterprise web platform built for Maa Sharda Industries, providing industrial buyers with seamless product specifications, inquiry management, and ISO-compliant engineering catalogues.',
    client: 'Maa Sharda Industries',
    features: [
      'Interactive Machinery Catalogue with 360-degree spec sheets',
      'Real-Time Automated Quotation & Inquiry Engine',
      'Technical Specsheet & CAD Blueprint Downloads',
      'SEO Optimized Corporate Architecture & Search Discovery',
      'Multi-Regional Supplier & Distributor Portal',
    ],
    tech: ['Next.js', 'Tailwind CSS', 'Node.js', 'MongoDB', 'Vercel'],
    metrics: [
      { value: '+65%', label: 'Inbound Lead Inquiries' },
      { value: '100%', label: 'Mobile Responsive Compliance' },
      { value: '2.4x', label: 'Faster Catalogue Page Speeds' },
    ],
    liveUrl: 'https://maashardaindustries.com/',
    image: '/projects/maa-sharda.png',
    logoText: 'MS',
  },
  {
    slug: 'lost-wallet-recovery',
    name: 'LostWalletRecovery',
    category: 'Crypto',
    tags: ['Crypto', 'Security', 'Web3'],
    summary:
      'High-security non-custodial cryptographic asset recovery platform and forensic ledger analysis.',
    description:
      'LostWalletRecovery is a specialized digital forensics and cryptographic recovery platform assisting institutions and individuals in recovering misplaced blockchain credentials, damaged private keys, and disputed token transactions.',
    client: 'LostWalletRecovery Global',
    features: [
      'Zero-Knowledge Cryptographic Verification Architecture',
      'Multi-Chain Transaction Tracing across BTC, ETH, and Solana',
      'Automated Seed Phrase Reconstruction Algorithms',
      'Institutional Multi-Sig Escrow Integration',
      'End-to-End Encrypted Client Evidence Portal',
    ],
    tech: ['Rust', 'Python', 'Web3.js', 'Go', 'PostgreSQL', 'Cloudflare Zero Trust'],
    metrics: [
      { value: '$10M+', label: 'Recovered Digital Assets' },
      { value: '99.9%', label: 'Security Clearance Rating' },
      { value: '256-bit', label: 'Military-Grade Encryption' },
    ],
    liveUrl: 'https://www.lostwalletrecovery.com/',
    image: '/projects/lost-wallet.png',
    logoText: 'LW',
  },
  {
    slug: 'the-yatra-fusion',
    name: 'The Yatra Fusion',
    category: 'Entertainment',
    tags: ['Music', 'Band', 'Media'],
    summary:
      'Dynamic entertainment portal, live tour management, and interactive media streaming for fusion musicians.',
    description:
      'An immersive, media-rich web application built for The Yatra Fusion band, featuring tour scheduling, ticket booking integration, high-fidelity audio streams, and exclusive fan community access.',
    client: 'The Yatra Fusion',
    features: [
      'Interactive Tour & Concert Booking Schedule',
      'Embedded Lossless Audio & High-Definition Video Streaming',
      'Direct Merch Store & VIP Pass Ticketing Gateway',
      'Interactive Press Kit & Media Asset Showcase',
      'Mobile-First Animated Visual Experience',
    ],
    tech: ['React', 'Framer Motion', 'Tailwind CSS', 'Spotify API', 'Stripe'],
    metrics: [
      { value: '100K+', label: 'Monthly Audio Streams' },
      { value: '100%', label: 'Sold-Out Concert Series' },
      { value: '45K+', label: 'Social Fan Community' },
    ],
    liveUrl: 'https://www.theyatrafusion.com/',
    image: '/projects/music-band.png',
    logoText: 'YF',
  },
  {
    slug: 'thenexalyze',
    name: 'TheNexalyze',
    category: 'Analytics',
    tags: ['Analytics', 'SaaS', 'BI'],
    summary:
      'Enterprise business intelligence SaaS providing automated market research, forecasting, and data pipelines.',
    description:
      'TheNexalyze delivers automated competitive intelligence and predictive market modeling to business executives, converting messy multi-source data streams into clear, actionable executive dashboards.',
    client: 'TheNexalyze Inc.',
    features: [
      'Predictive Revenue & Market Expansion Modeling',
      'Automated Multi-Channel Competitor Benchmarking',
      'Custom Drag-and-Drop KPI Builder & Anomaly Alerts',
      'One-Click Automated Executive PDF Reports',
      'Multi-Tenant Enterprise Role-Based Security',
    ],
    tech: ['TypeScript', 'React', 'Python', 'FastAPI', 'ClickHouse', 'AWS'],
    metrics: [
      { value: '4.5x', label: 'Faster Decision Cycles' },
      { value: '99.95%', label: 'Data Pipeline Reliability' },
      { value: '80%', label: 'Reporting Time Saved' },
    ],
    liveUrl: 'https://www.thenexalyze.com/',
    image: '/projects/analytics-dashboard.png',
    logoText: 'NX',
  },
  {
    slug: 'trade-your-capital',
    name: 'TradeYourCapital',
    category: 'FinTech',
    tags: ['FinTech', 'Trading', 'Prop'],
    summary:
      'Proprietary trading evaluation portal, funded trader challenges, and algorithmic risk telemetry.',
    description:
      'TradeYourCapital provides professional proprietary trading infrastructure, giving skilled market traders access to institutional funding with automated rule verification, drawdown monitoring, and instant payout processing.',
    client: 'TradeYourCapital Prop Firm',
    features: [
      'Real-Time Drawdown & Profit Target Calculation Engine',
      'Trader Dashboard & Tiered Account Scaling Portal',
      'Automated Instant Payout & Verified KYC Gateway',
      'MT4, MT5 & cTrader Real-Time Bridge Integrations',
      'Community Live Leaderboard & Trading Tournaments',
    ],
    tech: ['React', 'Node.js', 'MetaTrader API', 'Redis', 'Stripe', 'PostgreSQL'],
    metrics: [
      { value: '$5M+', label: 'Funded Capital Allocated' },
      { value: '25K+', label: 'Active Registered Traders' },
      { value: '<2 hrs', label: 'Average Payout Processing' },
    ],
    liveUrl: 'https://www.tradeyourcapital.com/',
    image: '/projects/trading-platform.png',
    logoText: 'TC',
  },
  {
    slug: 'canticle-event-company',
    name: 'Canticle Event Company',
    category: 'Events',
    tags: ['Events', 'Management', 'Luxury'],
    summary:
      'Luxury event production portal, venue showcase, and digital concierge for premium corporate and wedding galas.',
    description:
      'A bespoke digital platform for Canticle Event Company, highlighting award-winning gala productions, 3D venue layout visualizers, and seamless digital booking consultations for high-net-worth clients.',
    client: 'Canticle Event Company',
    features: [
      'Visual Gala & Wedding Portfolio Showcase',
      'Interactive Consultation Booking Engine',
      '3D Venue Concept Gallery with Moodboards',
      'Vendor & Guest Management Portal',
      'Ultra-Fast SEO Web Performance',
    ],
    tech: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'Sanity CMS', 'Vercel'],
    metrics: [
      { value: '200+', label: 'Luxury Events Delivered' },
      { value: '100%', label: 'Client Satisfaction Score' },
      { value: '15+', label: 'National Industry Awards' },
    ],
    liveUrl: 'https://www.canticleeventcompany.com/',
    image: '/projects/canticle.png',
    logoText: 'CE',
  },
  {
    slug: 'x-500',
    name: 'X-500',
    category: 'Automotive',
    tags: ['Automotive', 'Luxury', 'Motorsport'],
    summary:
      'High-performance supercar telemetry, exotic automotive showcase, and bespoke membership club.',
    description:
      'X-500 is a digital destination celebrating extreme automotive engineering and track culture, featuring high-definition vehicle configurators, private track-day telemetry, and verified collector marketplace access.',
    client: 'X-500 Automotive Group',
    features: [
      '3D Interactive Supercar Showcase & Spec Visualizer',
      'Track Telemetry & Performance Lap Logging',
      'Private VIP Member Vault & Tokenized Access',
      'Concierge Maintenance & Detailing Scheduling',
      'Global Supercar Track Day Calendar',
    ],
    tech: ['Three.js', 'React', 'WebGL', 'Tailwind CSS', 'Node.js', 'AWS'],
    metrics: [
      { value: '500+', label: 'Supercars Logged' },
      { value: '60fps', label: 'Interactive 3D Performance' },
      { value: '12', label: 'Global Track Circuits' },
    ],
    liveUrl: 'https://www.x-500.com/',
    image: '/projects/trading-platform.png',
    logoText: 'X5',
  },
  {
    slug: 'luxe-ride-gwalior',
    name: 'Luxe Ride Gwalior',
    category: 'Transport',
    tags: ['Transport', 'Luxury', 'Mobility'],
    summary:
      'Chauffeur-driven luxury car rentals, airport transfers, and VIP wedding fleet booking system.',
    description:
      'Luxe Ride Gwalior offers premier luxury mobility services with real-time fleet availability, online booking, transparent billing, and 24/7 dedicated chauffeur tracking across central India.',
    client: 'Luxe Ride Mobility',
    features: [
      'Real-Time Luxury Fleet Booking Engine',
      'Instant Dynamic Fare Calculator with Zero Hidden Fees',
      'Live GPS Chauffeur Tracking & Automated SMS Alerts',
      'Curated Wedding & VIP Corporate Mobility Packages',
      'Multi-Gateway Secure Digital Payments',
    ],
    tech: ['React', 'Node.js', 'Google Maps API', 'Razorpay', 'Tailwind CSS'],
    metrics: [
      { value: '15K+', label: 'Completed Chauffeur Trips' },
      { value: '4.9/5', label: 'Average Customer Rating' },
      { value: '100%', label: 'On-Time Airport Dispatches' },
    ],
    liveUrl: 'https://www.luxeridegwalior.com/',
    image: '/projects/luxe-ride.png',
    logoText: 'LR',
  },
  {
    slug: 'click-and-decode',
    name: 'Click&Decode',
    category: 'Utility',
    tags: ['Utility', 'Scanning', 'IoT'],
    summary:
      'High-speed QR/Barcode scanner, secure cryptographic decoding, and IoT batch asset inventory tool.',
    description:
      'Click&Decode provides lightning-fast browser-based optical code parsing and encryption verification, enabling warehouse workers and consumers to decode 1D/2D barcodes with zero app install required.',
    client: 'Click&Decode Open Utility',
    features: [
      'Instant In-Browser Optical Camera Scanning Engine',
      'Universal Multi-Format 1D & 2D Barcode / QR Support',
      'Batch Asset Scanning with Instant CSV/JSON Export',
      'Encrypted Security Data Payload Inspection',
      'Offline-Ready Progressive Web App (PWA) Capability',
    ],
    tech: ['WebAssembly', 'TypeScript', 'HTML5 Camera API', 'PWA', 'IndexedDB'],
    metrics: [
      { value: '1M+', label: 'Optical Scans Processed' },
      { value: '<80ms', label: 'Recognition Processing Time' },
      { value: '100%', label: 'Zero Install Browser Operation' },
    ],
    liveUrl: 'http://clickanddecode.com/',
    image: '/projects/click-decode.png',
    logoText: 'CD',
  },
];

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find((p) => p.slug === slug);
};

export const getNextProject = (currentSlug: string): Project => {
  const currentIndex = projects.findIndex((p) => p.slug === currentSlug);
  const nextIndex = (currentIndex + 1) % projects.length;
  return projects[nextIndex];
};
