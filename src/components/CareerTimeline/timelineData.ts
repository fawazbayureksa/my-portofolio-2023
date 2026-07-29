export interface Achievement {
  text: string;
  icon?: string;
}

export interface CareerItem {
  id: string;
  year: string;
  period: string;
  position: string;
  company: string;
  location?: string;
  companyUrl?: string;
  description: string;
  keyHighlights?: string[];
  techStack: string[];
  achievements?: Achievement[];
  isCurrent?: boolean;
}

export const timelineData: CareerItem[] = [
  {
    id: "singa-tech-2026",
    year: "2026",
    period: "2024 - Present",
    position: "Senior Fullstack Developer",
    company: "Singa Tech",
    location: "Jakarta, Indonesia (Hybrid)",
    description: "Developed Omnichannel Customer Service Platform with Email Integration, AI Assistant, Queue System, Multi Tenant Architecture and Digital Signature Integration.",
    keyHighlights: [
      "Architected real-time WebSocket messaging layer handling 10M+ daily events with under 50ms latency",
      "Integrated OpenAI & Claude API pipeline for automated agent ticketing response generation",
      "Designed multi-tenant isolation schema with strict data security compliance"
    ],
    techStack: ["Laravel", "React", "Redis", "RabbitMQ", "MySQL", "TypeScript", "Docker", "Tailwind CSS"],
    achievements: [
      { text: "10M+ Daily Messages", icon: "bolt" },
      { text: "99.99% Uptime SLA", icon: "shield-check" },
      { text: "AI Ticket Automation", icon: "sparkles" }
    ],
    isCurrent: true
  },
  {
    id: "abadi-sejahtera-2023",
    year: "2023",
    period: "Jan 2023 - 2024",
    position: "Full Stack Developer",
    company: "PT Abadi Sejahtera Finansindo",
    location: "Jakarta, Indonesia",
    description: "Engineered core fintech payment processing backend & modern customer portal dashboard. Reduced transaction processing times by 40% through redis caching strategies.",
    keyHighlights: [
      "Built PCI-DSS compliant payment gateway adapter for national bank APIs",
      "Refactored legacy monolithic services into modular micro-services",
      "Implemented Automated KYC verification flow with OCR image processing"
    ],
    techStack: ["React", "Node.js", "Express", "PostgreSQL", "Redis", "Docker", "AWS S3"],
    achievements: [
      { text: "40% Faster Checkout", icon: "trending-up" },
      { text: "PCI-DSS Compliant", icon: "lock" }
    ]
  },
  {
    id: "tekindo-solusi-2022",
    year: "2022",
    period: "Apr 2022 - Dec 2022",
    position: "Front End Web & Mobile Developer",
    company: "PT Tekindo Solusi Indonesia",
    location: "Makassar, Indonesia",
    description: "Led frontend development for cross-platform mobile apps and client-facing web apps in enterprise logistics and inventory management systems.",
    keyHighlights: [
      "Built offline-first React Native mobile app with SQLite offline sync engine",
      "Created design system UI component library adopted across 4 internal projects"
    ],
    techStack: ["React", "React Native", "TypeScript", "Redux Toolkit", "REST API", "Tailwind CSS"],
    achievements: [
      { text: "Design System Adopted", icon: "layers" },
      { text: "Offline-First Mobile App", icon: "wifi-off" }
    ]
  },
  {
    id: "politeknik-lp3i-2021",
    year: "2021",
    period: "2018 - 2021",
    position: "Software Engineering & Informatics Graduate",
    company: "Politeknik LP3I Makassar",
    location: "Makassar, Indonesia",
    description: "Graduated with honors in Management Informatics. Specialized in full-stack web application development, database design, and software engineering principles.",
    keyHighlights: [
      "Head of Computer Student Association & Technical Workshop Speaker",
      "Developed Capstone Project: Automated Academic Records & Grading System"
    ],
    techStack: ["PHP", "JavaScript", "MySQL", "Bootstrap", "HTML5/CSS3", "Git"],
    achievements: [
      { text: "Graduated with Honors", icon: "award" },
      { text: "Best Final Project", icon: "star" }
    ]
  }
];
