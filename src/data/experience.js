/**
 * Work Experience & Engineering Programs
 * Extracted directly from verified resume details.
 */
export const experienceData = [
  {
    id: "jpmc-swe-program",
    company: "JPMorgan Chase & Co.",
    role: "Software Engineering Virtual Experience Program",
    period: "01/2026",
    type: "Virtual Experience / Program",
    location: "Remote",
    badge: "Enterprise Finance & Streaming",
    summary: "Integrated Apache Kafka streaming pipelines with Spring Boot, processing high-volume concurrent transaction streams with zero data loss and transactional data persistence.",
    highlights: [
      "Integrated Apache Kafka into a Spring Boot microservice; consumed and deserialized high-volume transaction messages concurrently.",
      "Processed 10,000+ messages per run with zero data loss, thoroughly testing and validating multi-threaded consumer behavior.",
      "Implemented distributed transaction validation and persistence using Spring Data JPA; enforced transactional integrity across relational User records with H2 in-memory database.",
      "Developed high-performance REST endpoints for user balance queries and integrated external Incentive API feeds via Spring RestTemplate."
    ],
    skillsUsed: [
      "Apache Kafka",
      "Java 21",
      "Spring Boot",
      "Spring Data JPA",
      "H2 Database",
      "Multi-Threading",
      "RestTemplate",
      "Event Deserialization"
    ],
    metrics: [
      { label: "Messages / Run", value: "10,000+" },
      { label: "Data Loss", value: "0%" },
      { label: "Architecture", value: "Event-Driven Streaming" }
    ]
  }
];
