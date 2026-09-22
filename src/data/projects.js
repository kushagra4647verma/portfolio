export const projectsData = [
  {
    id: "good2go",
    title: "Good2Go",
    category: "FULL-STACK WEB APPLICATION",
    tech: ["React 19", "Express 5", "MongoDB", "JWT", "Google OAuth", "Cloudinary"],
    description: "A full-stack travel discovery platform for discovering places, reading and creating reviews, bookmarking locations, and managing user content.",
    features: [
      "JWT authentication",
      "Google OAuth integration",
      "OTP email verification",
      "Cloudinary media storage",
      "Full-text location search",
      "RESTful API design",
      "User review & rating computation",
      "Personalized bookmark dashboard"
    ],
    github: "https://github.com/kushagra4647verma/Good2Go",
    demo: "https://good2go.onrender.com/",
    featured: false,
    colSpan: "col-span-12 md:col-span-6 lg:col-span-7",
    problem: "Travelers lacked a unified, authenticated platform to explore curated locations with verified reviews and reliable media uploads.",
    solution: "Architected a scalable REST API stack with secure double-layer auth (JWT + Google OAuth) and optimized Cloudinary image pipelines.",
    architecture: "React 19 single-page application communicating via REST JSON APIs to Express 5 router layer, MongoDB schema layer, and Cloudinary storage provider."
  },
  {
    id: "orion-diamonds",
    title: "Orion Diamonds",
    category: "E-COMMERCE / PRICING ENGINE",
    tech: ["React", "Next.js", "APIs", "Node.js"],
    description: "High-concurrency luxury diamond e-commerce web platform backed by an automated real-time pricing engine synchronized with live gold rates.",
    highlights: ["100+ SKUs", "15+ VARIABLES", "LIVE GOLD RATE", "AUTOMATED PRICING"],
    features: [
      "Dynamic diamond & jewelry catalog",
      "Real-time gold rate API sync",
      "Multi-variable price calculator (carat, clarity, cut, alloy weight)",
      "Automated catalog price recalculation",
      "High-performance Next.js SSR"
    ],
    github: "https://github.com/neuralpulse/oriondiamonds",
    demo: "https://www.oriondiamonds.in/",
    featured: true,
    colSpan: "col-span-12 lg:col-span-12",
    problem: "Jewelry pricing fluctuates continuously with spot gold markets, requiring manual updates across 100+ complex SKUs with 15+ mathematical pricing variables.",
    solution: "Engineered an automated dynamic pricing engine that consumes live commodity rates and instantaneously recomputes retail pricing algorithms across all catalog items.",
    architecture: "Next.js SSR engine connected to live rate WebSocket/polling services, processing matrix calculations over carat, cut, color, clarity, and metal weight."
  },
  {
    id: "sipzy",
    title: "Sipzy",
    category: "MOBILE APPLICATION",
    tech: ["Flutter", "REST APIs", "Dart"],
    description: "Beverage discovery and ratings application featuring restaurant listings, curated menus and public ratings.",
    features: [
      "Curated beverage & restaurant listings",
      "Interactive menu explorer",
      "Community rating system",
      "Fast cached image delivery"
    ],
    github: "https://github.com/neuralpulse/sipzy",
    demo: "",
    accessLabel: "Custom mobile app",
    accessNote: "This custom mobile application does not have a public web demo.",
    featured: false,
    colSpan: "col-span-12 md:col-span-6 lg:col-span-5",
    problem: "Drink enthusiasts lacked a dedicated mobile app to discover specialty beverages and compare verified ratings across local venues.",
    solution: "Built a cross-platform Flutter application providing smooth 60fps list rendering, menu filtering, and social review posting.",
    architecture: "Flutter client UI utilizing Provider pattern connected to Express/REST API endpoints with JSON serialization."
  },
  {
    id: "ipo-gmp",
    title: "IPO GMP",
    category: "FINTECH / MOBILE",
    tech: ["Flutter", "API Integration", "Dart"],
    description: "AI-assisted IPO Grey Market Premium application delivering live premium updates and market sentiment analytics.",
    features: [
      "Live Grey Market Premium tracking",
      "AI-assisted sentiment summaries",
      "IPO subscription status updates",
      "Listing day projection calculators"
    ],
    github: "https://github.com/kushagra4647verma/GMP-app",
    demo: "",
    accessLabel: "Custom mobile app",
    accessNote: "This custom mobile application does not have a public web demo.",
    featured: false,
    colSpan: "col-span-12 md:col-span-6 lg:col-span-4",
    problem: "Retail investors had to check fragmented market forums to obtain current IPO grey market signals.",
    solution: "Created an aggregated mobile tracker bringing instant GMP feed updates and automated subscription insights into a crisp mobile interface.",
    architecture: "Flutter application querying financial aggregator APIs with background data refresh."
  },
  {
    id: "panchang",
    title: "Panchang",
    category: "MOBILE APPLICATION",
    tech: ["Flutter", "Dart", "Algorithms"],
    description: "Hindu Panchang / calendar application featuring precise astronomical calculations, Tithi, Nakshatra, and auspicious timings.",
    features: [
      "Precise astronomical Tithi calculations",
      "Nakshatra & Yoga indicators",
      "Rahukaal & Muhurat timings",
      "Clean offline-first mobile UI"
    ],
    github: "https://github.com/neuralpulse/panchang",
    demo: "",
    accessLabel: "Custom mobile app",
    accessNote: "This custom mobile application does not have a public web demo.",
    featured: false,
    colSpan: "col-span-12 md:col-span-6 lg:col-span-4",
    problem: "Traditional calendar apps suffer from bloated UI and outdated astronomical calculations.",
    solution: "Developed an intuitive, mathematically rigorous Flutter app providing instant daily Panchang data with high visual clarity.",
    architecture: "Flutter application running client-side algorithmic coordinate calculations and clean state management."
  },
  {
    id: "erpnext-implementation",
    title: "ERPNext v15 Migration & Customization",
    category: "ENTERPRISE SOFTWARE / MIGRATION",
    tech: ["Frappe", "ERPNext", "Python", "MariaDB"],
    description: "Migrated a client’s ERPNext estate from v14 to v15, restoring custom applications and resolving upgrade-related stock, batch, invoice, and print workflow issues.",
    highlights: ["V14 → V15 MIGRATION", "CUSTOM APP COMPATIBILITY"],
    features: [
      "Migrated the production ERPNext environment from v14 to v15",
      "Updated client-specific custom apps and resolved version compatibility discrepancies",
      "Investigated and corrected stock and batch issues affecting legacy transactions",
      "Built client-requested operational and reporting workflows",
      "Created and corrected print formats, document templates, and field layouts",
      "Added custom fields and invoice behavior to support client processes"
    ],
    github: "",
    demo: "",
    accessLabel: "Private client implementation",
    accessNote: "Source code and the live environment are private to the client and are not publicly available.",
    featured: false,
    colSpan: "col-span-12 md:col-span-12 lg:col-span-4",
    problem: "The client needed to move from ERPNext v14 to v15 without disrupting long-running operational records, custom applications, stock controls, batch histories, invoices, and reporting workflows.",
    solution: "Led the v15 upgrade and compatibility remediation, resolving discrepancies inherited from the older version while extending ERPNext with custom reports, print formats, fields, invoice behavior, and client-specific templates.",
    architecture: "ERPNext v15 on Frappe with Python server logic, MariaDB data, custom DocType fields, client scripts, print formats, reports, and templates adapted to the client’s operational workflows."
  }
];
