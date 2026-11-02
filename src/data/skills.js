/**
 * Categorized Technical Skills
 * Retains the exact 6 verified categories.
 * Enriched with technology-specific icon mappings, primary stack indicators, and category context.
 */
export const skillCategories = [
  {
    id: "languages",
    title: "Programming Languages",
    icon: "Code2",
    summary: "Object-oriented systems & algorithmic execution",
    skills: [
      { name: "Java", primary: true, icon: "Coffee", badge: "Primary Stack" },
      { name: "C++", primary: true, icon: "Cpu",badge: "DSA & CP"},
      { name: "Python", primary: true, icon: "FileCode",badge: "Foundational" },
    ]
  },
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
      { name: "Spring MVC", primary: true, icon: "Layers" },
    ]
  },
  {
    id: "databases",
    title: "Databases & Persistence",
    icon: "Database",
    summary: "Relational modeling, indexing & transactional isolation",
    skills: [
      { name: "MySQL", primary: true, icon: "HardDrive",badge: "Primary RDBMS" },
      { name: "PostgreSQL", primary: true, icon: "Database" }
    ]
  },
  {
    id: "distributed",
    title: "Messaging & Distributed Systems",
    icon: "Radio",
    summary: "High-throughput asynchronous streaming & event orchestration",
    skills: [
      { name: "Apache Kafka", primary: true, icon: "Radio", badge: "Event Backbone" },
      { name: "Event-Driven Architecture", primary: true, icon: "Workflow" },
    ]
  },
  {
    id: "devops",
    title: "Developer Tools & DevOps",
    icon: "Box",
    summary: "Containerization, automated build pipelines & version control",
    skills: [
      { name: "Docker", primary: true, icon: "Box", badge: "Containerization" },
      { name: "Git", primary: true, icon: "GitBranch" },
      { name: "GitHub", primary: true, icon: "Github" },
      { name: "Maven", primary: true, icon: "PackageCheck" },
      { name: "Postman", primary: true, icon: "Send" },
      { name: "Linux", primary: true, icon: "Terminal" },
    ]
  },
  {
    id: "core-cs",
    title: "Core Computer Science",
    icon: "Binary",
    summary: "Algorithmic analysis, relational design & OS internals",
    skills: [
      { name: "Operating Systems", primary: true, icon: "Cpu" },
      { name: "Computer Networks", primary: true, icon: "Wifi" },
    ]
  }
];
