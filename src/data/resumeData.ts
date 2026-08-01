export interface Project {
  title: string;
  category: "software" | "cloud" | "management";
  description: string;
  longDescription: string;
  tech: string[];
  links?: { github?: string; live?: string };
}

export interface Experience {
  company: string;
  role: string;
  duration: string;
  highlight: boolean;
  summary: string;
  bullets: string[];
  tags: string[];
}

export interface SkillGroup {
  name: string;
  icon: string;
  skills: { name: string; level: number }[];
}

export interface ResumeData {
  name: string;
  title: string;
  summary: string;
  email: string;
  phone: string;
  address: string;
  linkedin: string;
  github: string;
  experience: Experience[];
  projects: Project[];
  skills: SkillGroup[];
}

export const resumeData: ResumeData = {
  name: "Sachet Alva",
  title: "Software Development Manager",
  summary: "Software Development Manager at Amazon Web Services (AWS) with 16 years of software engineering experience, including over 3 years in engineering leadership. Leads a team of 12+ SDEs overseeing security, encryption, plugin platforms, and networking services for a large-scale, managed search and analytics platform. Transitioned into management from a Senior Software Development Engineer (SDE) role, maintaining deep technical involvement in architectural decisions. Currently owns 4 service areas and 5 operational support groups, driving multiple concurrent feature launches across all AWS regions.",
  email: "",
  phone: "",
  address: "Bengaluru, Karnataka, India",
  linkedin: "https://linkedin.com/in/sachetalva",
  github: "https://github.com/sachetalva",
  experience: [
    {
      company: "Amazon Web Services (AWS)",
      role: "Software Development Manager",
      duration: "Feb 2024 – Present",
      highlight: true,
      summary: "Scales and leads a full two-pizza organization, currently managing 12+ SDEs and 2 interns across 4 distinct service charters. Coaches and develops talent, successfully guiding SDEs to promotion and fostering autonomy through progressive delegation of component ownership.",
      bullets: [
        "Delivered custom plugin support (Analyzer, Script, Ingest, Search) to directly address a top customer request, unblocking critical migration paths for large enterprise customers transitioning from self-managed setups.",
        "Spearheaded the team's transition to Agile methodologies by introducing Sprint-based execution, backlog grooming, and story point estimation, significantly improving delivery predictability.",
        "Implemented comprehensive project and portfolio management workflows (via Asana), establishing standardized goal tracking to provide leadership with clear visibility into all concurrent initiatives.",
        "Formalized the monthly security review processes across the OpenSearch security organization, creating standardized reporting formats to ensure uniform tracking and resolution of security vulnerabilities.",
        "Led delivery across multiple external platform teams using phased integration plans to unblock stalled dependencies and mediate deployment conflicts.",
        "Architected a native deployment model for optional plugins, modernizing non-standard pipelines to reduce build and deployment times from 8 hours to 30 minutes.",
        "Steered the system design of critical components to ensure high-throughput customer-facing paths remain strictly isolated from heavy processing operations.",
        "Governed strict security standards and architectural direction.",
        "Owned multi-quarter feature deliveries from inception to production, including encryption at rest for OpenSearch Serverless and the integration of custom, third-party, and optional plugins.",
        "Managed operational support handling 200+ tickets annually, driving structured RCA documentation."
      ],
      tags: ["People Leadership", "OpenSearch", "Encryption & Security", "Pipeline Modernization", "Agile Execution", "AWS"]
    },
    {
      company: "Amazon Web Services (AWS)",
      role: "Senior Software Development Engineer & SDE",
      duration: "Sep 2019 – Feb 2024",
      highlight: false,
      summary: "Delivered core security features, established the first API definitions for OpenSearch, and built policy engines for OpenSearch Serverless while mentoring engineers and leading org-level initiatives.",
      bullets: [
        "Delivered end-to-end security features, including the encryption-at-rest migration initiative for existing unencrypted domains, eliminating a critical adoption blocker for legacy customers.",
        "Pioneered the first formalized API definitions for OpenSearch by establishing strict operational contracts. This replaced fragmented JSON schemas and unlocked fully automated client and documentation generation that now supports all OpenSearch APIs.",
        "Developed comprehensive support for access, encryption, and network policies on OpenSearch Serverless.",
        "Led teams on org-level initiatives, introducing new processes to streamline data plane release processes for security.",
        "Represented teams in leadership meetings to share status updates, escalate blockers, and outline technical concerns.",
        "Provided operational support, performing root cause analysis, debugging, and resolving production issues.",
        "Developed solutions across multiple tech stacks and programming languages, including Java, Golang, and Python."
      ],
      tags: ["Java", "Golang", "Python", "API Design", "OpenSearch Serverless", "Security & Encryption"]
    },
    {
      company: "Nokia Networks",
      role: "R&D Engineer",
      duration: "Mar 2013 – Aug 2019",
      highlight: false,
      summary: "Designed and implemented critical authentication, session management, and alarm management modules for Nokia AirScale Wi-Fi systems.",
      bullets: [
        "Led feature implementation and designed Authentication, Session Management, and Alarm Management modules for Nokia AirScale Wi-Fi.",
        "Developed captive portal GUI and REST services, and implemented 802.1x and MAC authentication using the RADIUS protocol.",
        "Introduced and integrated GTest-based unit tests, resulting in the \"Recognize Excellent Contribution\" award."
      ],
      tags: ["C++", "C", "RADIUS", "GTest", "OAM", "Embedded Systems"]
    },
    {
      company: "Wipro Technologies",
      role: "Project Engineer",
      duration: "Dec 2009 – Mar 2013",
      highlight: false,
      summary: "Developed and maintained telecom carrier-grade software switches and Operations, Administration, and Maintenance (OAM) systems in C and C++.",
      bullets: [
        "Developed and maintained C and C++ projects in the telecom domain, including a Cross-connect/Multiplexer switch and a 3G OAM product.",
        "Resolved critical code blockers, earning a \"Spot Award\" from Alcatel Lucent."
      ],
      tags: ["C++", "C", "Telecom", "OAM", "Multiplexer"]
    },
    {
      company: "MeritTrac Services Pvt. Ltd",
      role: "Programmer",
      duration: "Jul 2009 – Dec 2009",
      highlight: false,
      summary: "Developed and managed ASP.NET web applications for candidate registration and academic exams.",
      bullets: [
        "Created and independently managed multiple web-based applications designed in ASP.NET for various clients."
      ],
      tags: ["ASP.NET", "C#", "SQL Server"]
    }
  ],
  projects: [
    {
      title: "Amazon OpenSearch Plugins & Encryption",
      category: "cloud",
      description: "Delivered the platform for custom, third-party, and optional plugins, alongside Encryption at Rest for OpenSearch Serverless across all AWS regions.",
      longDescription: "Delivered the platform for custom, third-party, and optional plugins, alongside Encryption at Rest for OpenSearch Serverless across all AWS global production regions, unblocking critical migration paths for legacy enterprise customers.",
      tech: ["AWS OpenSearch", "Encryption at Rest", "Plugin Platform", "Certificate Management"],
      links: {}
    },
    {
      title: "OpenSearch Serverless Security & Access Policies",
      category: "cloud",
      description: "Delivered comprehensive support for access, encryption, and network security policies on OpenSearch Serverless.",
      longDescription: "Developed policy engines for access control, transit encryption, and private networks on OpenSearch Serverless, enabling corporate compliance and secure multi-tenant hosting at scale.",
      tech: ["AWS", "Security Policies", "Network Isolation", "Cryptography"],
      links: {}
    },
    {
      title: "AWS Pipeline Modernization & Automation",
      category: "management",
      description: "Architected a native deployment model for optional plugins, modernizing non-standard pipelines to reduce build and deployment times.",
      longDescription: "Architected a native deployment model for optional plugins, modernizing non-standard pipelines to reduce build and deployment times from 8 hours to 30 minutes. Fostered Agile Sprint-based execution and implemented comprehensive portfolio workflows in Asana.",
      tech: ["CI/CD", "Agile Execution", "Portfolio Management", "Pipeline Modernization"],
      links: {}
    },
    {
      title: "Engineering Team Scaling & Operations",
      category: "management",
      description: "Scaled and led an organization of 12+ SDEs and 2 interns across 4 service charters at AWS.",
      longDescription: "Scaled and led a full two-pizza organization, currently managing 12+ SDEs and 2 interns across 4 distinct service charters. Coached and developed SDEs, successfully guiding them to promotion and fostering autonomy.",
      tech: ["People Leadership", "Operational Excellence", "Talent Coaching", "Cross-Team Delivery"],
      links: {}
    },
    {
      title: "OpenSearch API Contract Formalization",
      category: "software",
      description: "Pioneered strict operational contracts to replace fragmented JSON schemas, enabling automated OpenSearch API clients.",
      longDescription: "Established formalized API definitions that replaced legacy, fragmented JSON schemas with rigorous operational contracts. Unlocked fully automated client SDK and developer documentation generation across all supported APIs.",
      tech: ["API Design", "OpenSearch APIs", "JSON Schema", "Code Generation"],
      links: {}
    },
    {
      title: "AirScale Wi-Fi Authentication Engine",
      category: "software",
      description: "Designed Authentication and Session Management modules using the RADIUS protocol with FreeRADIUS server.",
      longDescription: "Designed and developed captive portal GUI services and integrated 802.1x, MAC, and Open authentication using the RADIUS protocol for Nokia AirScale Wi-Fi networks.",
      tech: ["C++", "RADIUS Protocol", "REST APIs", "Session Management"],
      links: {}
    },
    {
      title: "3G Telecommunications OAM Module",
      category: "software",
      description: "Developed Operations, Administration, and Maintenance (OAM) systems for base stations and multiplexers.",
      longDescription: "Developed and maintained legacy switch codebases and the 3G OAM (FCAPS) module for Alcatel Lucent digital wideband antenna suites in carrier-grade telecom systems.",
      tech: ["C", "C++", "Unix", "OAM FCAPS", "Telecom Switches"],
      links: {}
    },
    {
      title: "Agile & Portfolio Delivery Workflows",
      category: "management",
      description: "Introduced Agile methodologies, Sprint execution, and standardized tracking via Asana to improve predictability.",
      longDescription: "Spearheaded the transition to Sprint-based Agile delivery, backlog grooming, and standardized portfolio tracking in Asana, providing leadership with visual status monitoring across all concurrent programs.",
      tech: ["Agile Delivery", "Sprint Execution", "Portfolio Management", "Asana Workflows"],
      links: {}
    },
    {
      title: "Security Governance & Vulnerability Review",
      category: "management",
      description: "Formalized monthly security review processes and standardized compliance reporting across OpenSearch.",
      longDescription: "Governed strict security compliance and architectural direction. Standardized reporting formats and monthly audit cadences across the security organization to ensure uniform remediation of security risks.",
      tech: ["Security Governance", "Risk Assessment", "Vulnerability Remediations", "Compliance Auditing"],
      links: {}
    },
    {
      title: "Nokia GTest Framework Integration",
      category: "software",
      description: "Designed and integrated the automated C++ GTest unit testing system across the AirScale Wi-Fi codebase.",
      longDescription: "Introduced unit testing to a legacy C/C++ telecommunication codebase. Configured Google Test libraries, built mocks for Unix system calls and RADIUS protocol interfaces, and achieved a 40% reduction in integration-stage bugs. Honored with Nokia's 'Recognize Excellent Contribution' award.",
      tech: ["C++", "Google Test", "Unix Mocks", "CI/CD Pipeline"],
      links: {}
    }
  ],
  skills: [
    {
      name: "Engineering Leadership",
      icon: "users",
      skills: [
        { name: "Team Building & Coaching", level: 95 },
        { name: "Performance Management", level: 90 },
        { name: "Hiring & Talent Acquisition", level: 92 },
        { name: "Agile Delivery & OKRs", level: 95 }
      ]
    },
    {
      name: "Languages & Protocols",
      icon: "code",
      skills: [
        { name: "Java", level: 95 },
        { name: "Golang", level: 90 },
        { name: "Python", level: 88 },
        { name: "C / C++", level: 95 },
        { name: "C#", level: 80 },
        { name: "REST & RADIUS", level: 92 }
      ]
    },
    {
      name: "Databases & Tools",
      icon: "cloud",
      skills: [
        { name: "PostgreSQL & SQLite", level: 90 },
        { name: "MS SQL Server", level: 85 },
        { name: "Git & SVN", level: 95 },
        { name: "GTest Framework", level: 92 }
      ]
    }
  ]
};
