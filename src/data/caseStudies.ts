/**
 * Case Studies Data Store for Career Craftly LLP
 * Content faithfully extracted from Flux Mind Studios case studies.
 * Rendered with White Premium AI SaaS UI design system.
 */

export interface Metric {
  value: string;
  label: string;
}

export interface SolutionFeature {
  title: string;
  description: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  subtitle: string;
  client: string;
  category: string;
  summary: string;
  challenge: {
    narrative: string;
    points: string[];
  };
  solution: {
    narrative?: string;
    features: SolutionFeature[];
  };
  results: {
    narrative?: string;
    points?: string[];
  };
  metrics: Metric[];
  tech: string[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
  image: string;
  logoText: string;
  badgeColor: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'fintech-ai',
    title: 'Fintech AI Copilot',
    subtitle: 'Automating Financial Analysis with AI',
    client: '[CONFIDENTIAL WEALTH MANAGEMENT FIRM]',
    category: 'FinTech',
    summary:
      'Empowering wealth managers with real-time portfolio insights and automated compliance checks, reducing manual workload by 85%.',
    challenge: {
      narrative:
        'Financial analysts were spending over 20 hours a week manually parsing unstructured financial reports, leading to delayed decision-making and increased compliance risks.',
      points: [
        'Manual data entry and document verification across dozens of disparate feeds',
        'High risk of human error during stringent compliance audits',
        'Slow response times to extreme market volatility',
        'Inability to scale client onboarding without doubling analyst headcount',
      ],
    },
    solution: {
      narrative:
        'We engineered a production-grade AI Copilot integrated directly into the core banking data lake, featuring automated document parsing and predictive risk telemetry.',
      features: [
        {
          title: 'Document Intelligence',
          description:
            'Custom OCR & LLM pipeline extracting structured insights from PDFs, tables, and earnings filings in seconds.',
        },
        {
          title: 'Real-Time Risk Engine',
          description:
            'Predictive risk scoring algorithms flagging compliance anomalies and portfolio drift prior to trade execution.',
        },
        {
          title: 'Conversational BI Interface',
          description:
            'Natural language interface allowing analysts and portfolio managers to query fund health in real-time.',
        },
      ],
    },
    results: {
      narrative:
        'The deployment transformed back-office operations into an agile intelligence engine, drastically accelerating turnaround time.',
      points: [
        'Over 20 hours saved per analyst every week',
        'Audit readiness improved with 100% automated logging',
      ],
    },
    metrics: [
      { value: '85%', label: 'Reduction in Manual Workload' },
      { value: '99.4%', label: 'Data Extraction Accuracy' },
      { value: '3.2x', label: 'Faster Client Onboarding' },
      { value: '$1.2M', label: 'Annual Cost Savings' },
    ],
    tech: ['Python', 'LangChain', 'OpenAI API', 'FastAPI', 'PostgreSQL', 'Docker', 'AWS'],
    image: '/case-studies/fintech-ai.svg',
    logoText: 'FT',
    badgeColor: '#5B5BF0',
  },
  {
    slug: 'healthcare-saas',
    title: 'Healthcare SaaS Platform',
    subtitle: 'Streamlining Clinical Workflows',
    client: '[REGIONAL HEALTHCARE NETWORK]',
    category: 'Healthcare',
    summary:
      'A secure, HIPAA-compliant patient management system streamlining clinical workflows and patient care across 500+ clinics.',
    challenge: {
      narrative:
        'Clinics were bogged down by fragmented legacy EHR systems, causing severe administrative burnout, scheduling bottlenecks, and delayed patient follow-ups.',
      points: [
        'Fragmented patient records isolated across legacy on-premise databases',
        'Severe administrative burnout among clinical coordinators and nurses',
        'Inefficient appointment scheduling causing high no-show rates (over 30%)',
        'Strict HIPAA compliance and multi-state data residency requirements',
      ],
    },
    solution: {
      narrative:
        'Architected a cloud-native, HIPAA-certified clinical operating platform with bi-directional EHR interoperability and intelligent intake automation.',
      features: [
        {
          title: 'Unified EHR Interoperability',
          description:
            'Seamless bidirectional synchronization with major electronic health record standards (HL7 and FHIR).',
        },
        {
          title: 'AI Smart Scheduling',
          description:
            'Predictive scheduling engine reducing appointment wait times, automating reminders, and curbing no-shows.',
        },
        {
          title: 'HIPAA-Compliant Cloud Foundation',
          description:
            'End-to-end encrypted architecture with automated audit logging, immutable records, and granular role-based access.',
        },
      ],
    },
    results: {
      narrative:
        'Clinicians regained hours of daily face-to-face patient time while the network eliminated intake queues entirely.',
      points: [
        'Average check-in time dropped from 18 minutes to under 3 minutes',
        'Zero security incidents across all 500+ participating clinics',
      ],
    },
    metrics: [
      { value: '60%', label: 'Faster Patient Intake' },
      { value: '45%', label: 'Reduction in No-Shows' },
      { value: '500+', label: 'Clinics Onboarded' },
      { value: '99.99%', label: 'System Uptime & Compliance' },
    ],
    tech: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'FHIR API', 'AWS HIPAA Shield'],
    image: '/case-studies/healthcare-saas.svg',
    logoText: 'HC',
    badgeColor: '#10B981',
  },
  {
    slug: 'ecommerce-transformation',
    title: 'E-commerce AI Transformation',
    subtitle: 'Boosting Conversion with AI',
    client: '[OMNICHANNEL FASHION RETAILER]',
    category: 'E-commerce',
    summary:
      'Boosting conversion rates by 40% through personalized AI recommendations and dynamic pricing engines for an omnichannel brand.',
    challenge: {
      narrative:
        'The retailer faced rising customer acquisition costs and stagnating cart conversion rates due to generic, static product recommendations and slow mobile checkout.',
      points: [
        'Low average order value and poor cross-selling performance',
        'Static pricing uncompetitive against fast-moving marketplace rivals',
        'High cart abandonment on mobile checkouts reaching 72%',
        'Manual merchandising wasting dozens of hours every week',
      ],
    },
    solution: {
      narrative:
        'Built an intelligent personalization layer that predicts shopper intent in real-time and dynamically tailors catalog presentation.',
      features: [
        {
          title: 'Deep Intent Recommendation Engine',
          description:
            'Neural collaborative filtering models personalized based on instant clickstream data and style preferences.',
        },
        {
          title: 'Dynamic Elastic Pricing',
          description:
            'Automated price optimization tracking competitor rates, inventory velocities, and demand elasticity.',
        },
        {
          title: 'Frictionless 1-Click Checkout',
          description:
            'Streamlined checkout flow with AI-driven address autocomplete, preferred payment routing, and fraud scoring.',
        },
      ],
    },
    results: {
      narrative:
        'The platform generated immediate topline growth across both direct-to-consumer web and mobile applications.',
      points: [
        'Mobile cart completion reached all-time record highs',
        'Merchandising team shifted from manual tagging to strategic campaigns',
      ],
    },
    metrics: [
      { value: '40%', label: 'Increase in Conversion Rate' },
      { value: '28%', label: 'Boost in Average Order Value' },
      { value: '35%', label: 'Reduction in Cart Abandonment' },
      { value: '4.8x', label: 'ROI within 6 Months' },
    ],
    tech: ['Next.js', 'Python', 'TensorFlow', 'Redis', 'Stripe API', 'Shopify Plus'],
    image: '/case-studies/ecommerce-transformation.svg',
    logoText: 'EC',
    badgeColor: '#8B5CF6',
  },
  {
    slug: 'supply-chain',
    title: 'Supply Chain Optimization',
    subtitle: 'Predictive Logistics with IoT & AI',
    client: '[INTERNATIONAL LOGISTICS CARRIER]',
    category: 'Logistics',
    summary:
      'Achieving real-time visibility and reducing logistics costs by 30% with IoT tracking and predictive demand analytics across 12 countries.',
    challenge: {
      narrative:
        'Global supply chain disruptions, warehouse bottlenecks, and unpredictable shipping delays were inflating operational overhead and damaging client delivery SLAs.',
      points: [
        'Zero real-time visibility into multi-modal in-transit freight status',
        'Inaccurate demand forecasting causing frequent stockouts and overstock',
        'High demurrage and detention fees at major maritime ports',
        'Manual dispatching causing inefficient fleet routing and fuel waste',
      ],
    },
    solution: {
      narrative:
        'Engineered an end-to-end telemetry and optimization platform tracking thousands of live shipments with proactive exception routing.',
      features: [
        {
          title: 'IoT Telematics Hub',
          description:
            'Real-time sensor telemetry tracking cargo temperature, GPS coordinates, and vehicle diagnostics live.',
        },
        {
          title: 'Predictive Demand Forecasting',
          description:
            'Machine learning models analyzing historical trends, seasonal demand, port delays, and weather patterns.',
        },
        {
          title: 'Dynamic Fleet Routing',
          description:
            'Automated dispatch routing calculating fastest paths and avoiding traffic and toll bottlenecks.',
        },
      ],
    },
    results: {
      narrative:
        'Logistics operators gained proactive control over transit exceptions, cutting demurrage fines and fuel burn.',
      points: [
        'Fleet utilization improved by over 35%',
        'Real-time tracking client portal reduced support ticket volume by 65%',
      ],
    },
    metrics: [
      { value: '30%', label: 'Reduction in Logistics Costs' },
      { value: '99.2%', label: 'On-Time Delivery Rate' },
      { value: '42%', label: 'Decrease in Warehouse Dwell Time' },
      { value: '12', label: 'Countries Connected in Real-Time' },
    ],
    tech: ['Go', 'Apache Kafka', 'Python', 'InfluxDB', 'Kubernetes', 'Google Cloud Platform'],
    image: '/case-studies/supply-chain.svg',
    logoText: 'SC',
    badgeColor: '#F97316',
  },
  {
    slug: 'smart-city',
    title: 'Smart City IoT Solutions',
    subtitle: 'Building the Cities of Tomorrow',
    client: '[MUNICIPAL URBAN PLANNING PARTNER]',
    category: 'Infrastructure',
    summary:
      'Empowering urban planners with real-time data and AI to create safer, greener, and more efficient cities for millions of residents.',
    challenge: {
      narrative:
        'Rapid urbanization was straining the municipal infrastructure. Officials lacked the real-time visibility needed to manage traffic flow, energy consumption, and public safety effectively.',
      points: [
        'Traffic congestion causing high pollution and prolonged commute times',
        'Inefficient energy distribution in public grids leading to power waste',
        'Slow emergency response times due to fragmented situational data',
        'Difficulty in predicting public infrastructure maintenance schedules',
      ],
    },
    solution: {
      narrative:
        'Deployed a municipal IoT sensory grid connected to a unified central AI command center for real-time urban management.',
      features: [
        {
          title: 'IoT Sensor Network',
          description:
            'Deployed 50,000+ IoT sensors to monitor traffic flow, air quality, and energy usage in real-time.',
        },
        {
          title: 'Central Command Center',
          description:
            'AI-powered dashboard aggregating data for city officials to make instant data-driven decisions.',
        },
        {
          title: 'Smart Grid Management',
          description:
            'Automated energy distribution system optimizing municipal consumption based on demand patterns.',
        },
      ],
    },
    results: {
      narrative:
        'The municipality achieved measurable decreases in urban emissions and enhanced emergency response speeds.',
      points: [
        'Emergency response dispatch time shortened by an average of 4 minutes',
        'Public lighting energy usage dropped by 40% with smart scheduling',
      ],
    },
    metrics: [
      { value: '25%', label: 'Reduction in Traffic Congestion' },
      { value: '40%', label: 'Energy Savings' },
      { value: '30%', label: 'Faster Emergency Response' },
      { value: '15%', label: 'Decrease in Pollution' },
    ],
    tech: ['React', 'Node.js', 'C++ IoT Firmware', 'TimescaleDB', 'Mapbox GL', 'Azure IoT Hub'],
    image: '/case-studies/smart-city.svg',
    logoText: 'SM',
    badgeColor: '#06B6D4',
  },
  {
    slug: 'edtech',
    title: 'EdTech Learning Platform',
    subtitle: 'Reimagining Education with AI',
    client: '[NEXT-GEN EDTECH PLATFORM]',
    category: 'Education',
    summary:
      'Personalizing education with AI-driven curriculum paths, improving student engagement by 3x and course completion rates by 50%.',
    challenge: {
      narrative:
        'Traditional education models were failing to meet the diverse needs of learners. The client wanted to build a platform that could adapt to each student\'s learning style and pace, making high-quality education accessible to everyone.',
      points: [
        'One-size-fits-all curriculum failing to keep diverse students engaged',
        'Lack of real-time insights into student comprehension and learning gaps',
        'Limited accessibility for remote and underserved learners',
        'High dropout rates reaching over 60% in online certification courses',
      ],
    },
    solution: {
      narrative:
        'Engineered an adaptive learning platform powered by AI assessment agents and interactive gamified modules.',
      features: [
        {
          title: 'Adaptive Learning Paths',
          description:
            'AI algorithms customizing curriculum pacing based on individual student performance and mastery.',
        },
        {
          title: 'Interactive Content Hub',
          description:
            'Immersive video lessons with real-time concept check quizzes and gamified milestone rewards.',
        },
        {
          title: 'Collaborative Classrooms',
          description:
            'Virtual collaborative spaces for peer-to-peer discussions, group projects, and live coaching.',
        },
      ],
    },
    results: {
      narrative:
        'The platform scaled to over 1,000,000 active learners with industry-leading satisfaction and course completion metrics.',
      points: [
        'Over 1,000,000 learners reached globally',
        'Student course completion rate increased by 50%',
      ],
    },
    metrics: [
      { value: '50%', label: 'Increase in Course Completion' },
      { value: '3x', label: 'Higher Student Engagement' },
      { value: '90%', label: 'Student Satisfaction Score' },
      { value: '1M+', label: 'Learners Reached' },
    ],
    tech: ['React', 'Python', 'FastAPI', 'WebRTC', 'PostgreSQL', 'AWS CloudFront'],
    image: '/case-studies/edtech.svg',
    logoText: 'ED',
    badgeColor: '#EAB308',
  },
];

export const getCaseStudyBySlug = (slug: string): CaseStudy | undefined => {
  return caseStudies.find((cs) => cs.slug === slug);
};

export const getNextCaseStudy = (currentSlug: string): CaseStudy => {
  const currentIndex = caseStudies.findIndex((cs) => cs.slug === currentSlug);
  const nextIndex = (currentIndex + 1) % caseStudies.length;
  return caseStudies[nextIndex];
};
