/**
 * Featured Engineering Projects
 * The primary highlight of Samaksha Agarwal's portfolio.
 * Rigorously audited against actual GitHub repositories, README documentation, and verified implementations.
 */
export const projectsData = [
  {
    id: "rainiq",
    featured: true,
    title: "RainIQ – Distributed Harvesting Platform",
    badge: "Distributed Microservices",
    timeline: "September 2026",
    status: "Verified Local Implementation",
    overview: "A distributed backend platform for rainwater harvesting design submission, location-based historical rainfall analysis, automated compliance evaluation, AI-powered recommendations and tank monitoring.",
    problemSolved: "Evaluating rainwater harvesting designs requires location-specific historical rainfall lookups and compliance calculations that benefit from decoupled, asynchronous processing rather than blocking synchronous HTTP request threads.",
    keyContributions: [
      "Engineered an asynchronous event-driven compliance evaluation pipeline orchestrated via Apache Kafka (design.submitted → compliance calculation → AI recommendation / email alert).",
      "Architected independent database-per-service isolation across services with PostgreSQL databases and Flyway migrations, routed through Spring Cloud Gateway and Netflix Eureka.",
      "Implemented stateless JWT authentication with role-based access control across 5 roles (OWNER, ARCHITECT, MUNICIPAL_OFFICER, INSPECTOR, INTERNAL_SERVICE) verified per service."
    ],
    architectureDetails: {
      servicesCount: 10,
      architecturePattern: "Microservices with Database-per-Service & Event Choreography",
      servicesList: [
        { name: "Auth Service", role: "User registration, authentication, JWT token issuance & RBAC across 5 roles" },
        { name: "Property Service", role: "Property registration, activation workflow & specifications (area, surface type, pincode)" },
        { name: "Design Service", role: "Rooftop harvesting design submission and municipal officer review / approval workflow" },
        { name: "Rainfall Service", role: "Pincode-to-coordinate geocoding (Geocode.maps.co) and historical average rainfall retrieval (Open-Meteo)" },
        { name: "Compliance Service", role: "Rainfall-based compliance evaluation comparing collection area percentage against rainfall bands" },
        { name: "AI Service", role: "Google Gemini API integration generating contextual advisory recommendations for compliant designs" },
        { name: "Notification Service", role: "Asynchronous email dispatching via Gmail SMTP for compliance failure and recommendation alerts" },
        { name: "Monitoring Service", role: "IoT tank device registration and API-based water-level reading history" },
        { name: "Eureka Server", role: "Service discovery, dynamic service registration & heartbeat management" },
        { name: "API Gateway", role: "Single client-facing entry point routing requests to backend services via Eureka" }
      ],
      concurrencyAndEvents: "Apache Kafka decouples the core workflow: design submission publishes a 'design.submitted' event consumed by Compliance Service. Upon evaluation, it emits 'compliance.completed' (triggering Gemini AI recommendation generation) or 'compliance.failed' (triggering email notification), keeping client HTTP requests non-blocking.",
      databaseDesign: "Strict database-per-service architecture with independent PostgreSQL databases (rainiq_auth, rainiq_property, rainiq_design, rainiq_rainfall, rainiq_compliance, rainiq_ai, rainiq_monitoring, rainiq_notification) managed via Flyway migrations, without cross-service foreign keys.",
      telemetry: "Micrometer metrics exported via /actuator/prometheus and monitored in Grafana; verified continuous reachability across all 8 business services during local monitoring sessions, with typical request durations in the 0.02s–0.29s range for lightweight endpoints.",
      devops: "Docker Compose multi-service local deployment. GitHub Actions CI performs multi-service compilation and packaging (-DskipTests on GitHub runners without live Postgres/Kafka), and CD builds and pushes per-service Docker images to Docker Hub on merge to main."
    },
    techStack: [
      "Java 21",
      "Spring Boot 3",
      "Apache Kafka",
      "PostgreSQL",
      "Flyway",
      "Docker Compose",
      "Spring Security",
      "Eureka",
      "Spring Cloud Gateway",
      "Prometheus",
      "Grafana"
    ],
    githubUrl: "https://github.com/Skagar/RainIQ",
    liveDemoUrl: null
  },
  {
    id: "bookmyshow-clone",
    featured: true,
    title: "BookMyShow Backend Clone",
    badge: "Transactional Backend",
    timeline: "June 2026",
    status: "Verified Implementation",
    overview: "A Spring Boot-based movie ticket booking backend featuring relational data modelling, transactional booking workflows, seat availability management, payment records and booking cancellation.",
    problemSolved: "Coordinating multi-entity movie ticket booking workflows, validating seat availability status before reservation, and managing state transitions across users, shows, seats, and payments.",
    keyContributions: [
      "Implemented transactional booking workflow (@Transactional) in BookingService validating seat availability ('Available' → 'Locked' → 'Booked') and rolling back operations if validation fails.",
      "Designed and normalized relational schema across 9 core domain entities: Users, Movies, Theaters, Screens, Seats, Shows, ShowSeats, Payments, and Bookings.",
      "Structured clean layered architecture (Controller → Service → Repository → DTO) with centralized GlobalExceptionHandler handling custom resource and seat exceptions."
    ],
    architectureDetails: {
      servicesCount: 1,
      architecturePattern: "Layered Spring Boot Application (Controller-Service-Repository)",
      entitiesList: [
        "Users", "Movies", "Theaters", "Screens",
        "Seats", "Shows", "ShowSeats", "Payments", "Bookings"
      ],
      concurrencyAndEvents: "Transactional booking management using Spring's @Transactional on BookingService to maintain ACID atomicity across seat status updates, payment record generation, and booking entity persistence.",
      databaseDesign: "Relational schema in MySQL mapping 9 domain entities with JPA/Hibernate object-relational relationships connecting theaters, screens, seats, shows, bookings, and payment records.",
      telemetry: "Postman test suite verifying core API endpoints: movie search/filtering, theater and show scheduling, seat availability checks, booking creation, and booking cancellation workflows."
    },
    techStack: [
      "Java 21",
      "Spring Boot",
      "Spring Data JPA",
      "Hibernate",
      "MySQL",
      "REST APIs",
      "Maven",
      "Lombok"
    ],
    githubUrl: "https://github.com/Skagar/BMS",
    liveDemoUrl: null
  },
  {
    id: "weather-dashboard",
    featured: false,
    title: "Weather Dashboard App",
    badge: "REST API Integration",
    timeline: "March 2026",
    status: "Verified Implementation",
    overview: "A Spring Boot REST backend that integrates with an external weather API to provide current weather conditions and up to three-day forecasts for requested cities.",
    problemSolved: "Integrating external meteorological data services and transforming third-party nested JSON payloads into clean, application-tailored REST responses.",
    keyContributions: [
      "Integrated external WeatherAPI (current and forecast endpoints) via Spring RestTemplate to fetch live temperature, condition, and multi-day meteorological metrics.",
      "Implemented DTO response mapping transforming complex upstream weather payloads into concise WeatherResponse and WeatherForecast data transfer objects.",
      "Structured clean Controller → Service → DTO backend with clear endpoint separation for current weather (/weather/my/{city}) and forecasts (/weather/forecast)."
    ],
    architectureDetails: {
      servicesCount: 1,
      architecturePattern: "Layered Spring Boot REST Application (Controller → Service → DTO)",
      concurrencyAndEvents: "Synchronous REST request processing via Spring MVC, executing external HTTP GET calls to WeatherAPI using RestTemplate.",
      databaseDesign: null,
      telemetry: "Verified REST endpoint request and response workflows using Postman across various city queries."
    },
    techStack: [
      "Java 21",
      "Spring Boot",
      "Spring MVC",
      "WeatherAPI",
      "REST APIs",
      "Maven",
      "RestTemplate"
    ],
    githubUrl: "https://github.com/Skagar/Weather-App",
    liveDemoUrl: null
  }
];
