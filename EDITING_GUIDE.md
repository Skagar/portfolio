# Samaksha Agarwal — Developer Portfolio Customization & Content Guide

Welcome to the centralized content editing guide. This portfolio is engineered with a clean, decoupled data architecture: **all personal information, telemetry milestones, technical skills, projects, work experience, education, coding platform metrics, and contact details are maintained in centralized data files without touching React components.**

---

## Centralized Data Architecture Overview

```
src/data/
├── profile.js         # Name, headline, hero technology badges, and professional introduction
├── stats.js           # Verified telemetry & engineering milestones (DSA solved, GPA, microservices, etc.)
├── skills.js          # Categorized technical skills with icons and primary stack indicators
├── projects.js        # Featured projects, architecture blueprints, contributions, and GitHub repos
├── experience.js      # Professional experience & software engineering programs
├── education.js       # University degrees, coursework, and academic distinctions
├── codingProfiles.js  # LeetCode, Codeforces, CodeChef handles, ratings, and problem counts
├── social.js          # Direct channels (Email, LinkedIn, GitHub, Phone, Location)
└── navigation.js      # Navigation menu items and action targets
```

---

## 1. Hero & Personal Information (`src/data/profile.js`)

To update your headline, hero technology badges, or introduction:
```javascript
export const profileData = {
  name: "Samaksha Agarwal",
  greetingLabel: "HELLO, I'M",
  headline: "Computer Science Undergraduate | Java Backend Developer",
  
  // Primary technology chips displayed above headline
  heroBadges: ["Java", "Spring Boot", "Kafka", "PostgreSQL", "Docker"],

  // Professional introduction: ~50-70 words
  heroDescription: "I am a Computer Science undergraduate at Jaypee Institute of Information Technology focused on backend engineering with Java and Spring Boot. I specialize in developing reliable concurrent services, designing resilient RESTful APIs, and implementing transactional database architectures, with an engineering interest in distributed systems and scalable software.",

  email: "gsamaksha@gmail.com",
  phone: "+91-8948134005",
  location: "Noida / Raebareli, India",
  university: "Jaypee Institute of Information Technology (JIIT Noida)",
  degree: "B. Tech in Computer Science and Engineering",
  graduationYear: "2028 (Expected)",
  resumeUrl: "/resume/Samaksha_Agarwal_Resume.pdf",
};
```

---

## 2. Verified Telemetry & Milestones (`src/data/stats.js`)

Metrics are displayed in the animated telemetry section below the hero. Each metric features viewport-triggered count-up animation:
```javascript
export const statsData = [
  {
    id: "dsa",
    value: "500+",
    numericValue: 500,
    suffix: "+",
    label: "DSA Problems Solved",
    subtitle: "LeetCode & GeeksforGeeks",
    category: "Algorithms",
    icon: "Binary",
    verified: true
  },
  {
    id: "cgpa",
    value: "8.82",
    numericValue: 8.82,
    decimals: 2,
    label: "Cumulative GPA",
    subtitle: "JIIT Noida · B.Tech CSE",
    category: "Academics",
    icon: "GraduationCap",
    verified: true
  },
  // Add additional verified metrics easily...
];
```

---

## 3. Technical Skills Presentation (`src/data/skills.js`)

Skills are organized into 6 polished, recruiter-scannable categories with technology icons and primary focus badges:
```javascript
{
  id: "backend",
  title: "Backend Development",
  icon: "Layers",
  summary: "RESTful architecture, ORM persistence & microservices",
  skills: [
    { name: "Spring Boot", primary: true, icon: "Zap", badge: "Core Framework" },
    { name: "Spring Data JPA", primary: true, icon: "Database" },
    { name: "REST APIs", primary: true, icon: "Globe" },
    { name: "Microservices", primary: true, icon: "Network" },
    { name: "Spring MVC", primary: false, icon: "Layers" },
  ]
}
```
- Setting `primary: true` applies a distinctive crimson highlight border and glows.
- The optional `badge` property (e.g. `"Primary Stack"`, `"Core Framework"`, `"500+ Solved"`) creates a sleek micro-badge.

---

## 4. Featured Projects & Architecture Spec (`src/data/projects.js`)

Each project provides comprehensive data displayed both on the project card and inside the interactive **Architecture Specification Modal**:
```javascript
{
  id: "rainiq",
  featured: true,
  title: "RainIQ – Distributed Harvesting Platform",
  badge: "Distributed Systems",
  timeline: "September 2026",
  status: "Verified Implementation",
  overview: "A distributed backend platform for rainwater harvesting design submission, location-based historical rainfall analysis, automated compliance evaluation, AI-powered recommendations and tank monitoring.",
  problemSolved: "Evaluating rainwater harvesting designs requires location-specific historical rainfall lookups and compliance calculations that benefit from decoupled, asynchronous processing rather than blocking synchronous HTTP request threads.",
  keyContributions: [
    "Engineered an asynchronous event-driven compliance evaluation pipeline orchestrated via Apache Kafka (design.submitted → compliance calculation → AI recommendation / email alert).",
    "Architected independent database-per-service isolation across services with PostgreSQL databases and Flyway migrations, routed through Spring Cloud Gateway and Netflix Eureka.",
    "Implemented stateless JWT authentication with role-based access control across 5 roles (OWNER, ARCHITECT, MUNICIPAL_OFFICER, INSPECTOR, INTERNAL_SERVICE) verified per service."
  ],
  architectureDetails: {
    servicesCount: 10,
    servicesList: [
      { name: "Auth Service", role: "Stateless JWT token issuance & RBAC" },
      // ...
    ],
    concurrencyAndEvents: "Kafka topic partitioning with consumer worker pools...",
    databaseDesign: "Strict Database-per-Service isolation in PostgreSQL...",
    telemetry: "Prometheus actuator metrics and Grafana dashboards..."
  },
  techStack: ["Java 21", "Spring Boot 3", "Apache Kafka", "PostgreSQL", "Docker"],
  githubUrl: "https://github.com/Skagar/RainIQ",
  liveDemoUrl: null
}
```

---

## 5. Direct Contact Channels (`src/sections/Contact.jsx`)

The contact section has been streamlined into a direct, high-efficiency recruiter panel:
- **Direct Email:** with one-click clipboard copy (`gsamaksha@gmail.com`)
- **Direct Phone:** with one-click clipboard copy and functional `tel:` dialer link (`+91-8948134005`)
- **LinkedIn, GitHub, and LeetCode:** direct external links with target `_blank`
- **Location:** Noida / Raebareli, India with open-to-relocation status.

---

## 6. Resume PDF Preview & Download

The resume is stored in:
- `public/resume/Samaksha_Agarwal_Resume.pdf`
- `public/assets/Samaksha_Agarwal_Resume.pdf`

Both **"View resume"** (modal preview with embedded viewer) and **"Download resume"** (direct browser download) are supported out of the box in the Hero section and Navbar.
