export interface NavLink {
  name: string;
  link: string;
}

export interface Word {
  text: string;
  imgPath: string;
}

export interface CounterItem {
  value: number;
  suffix: string;
  label: string;
}

export interface ExpCard {
  company: string;
  location: string;
  imgPath: string;
  logoPath: string;
  title: string;
  date: string;
  responsibilities: string[];
}

export interface Project {
  title: string;
  tech: string;
  github?: string;
  website?: string;
  description: string;
  features: string[];
  imgPath: string;
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  grade: string;
}

export interface SocialLink {
  name: string;
  imgPath: string;
  url: string;
}

export interface Award {
  title: string;
  desc: string;
  date: string;
}

export interface LeadershipItem {
  role: string;
  period: string;
}

/** Google Drive resume link - update the file ID if you replace your resume */
export const resumeUrl = "https://drive.google.com/file/d/1_WWPTKI1_01tbjTwIaIsYyYyLqqQ17Cy/view?usp=sharing";

/** Replace with your Formspree form ID from https://formspree.io */
export const formspreeEndpoint = "https://formspree.io/f/xbdyvlrj";

export const navLinks: NavLink[] = [
  { name: "About", link: "#about" },
  { name: "Experience", link: "#experience" },
  { name: "Projects", link: "#projects" },
  { name: "Skills", link: "#skills" },
  { name: "Awards", link: "#awards" },
  { name: "Leadership", link: "#leadership" },
];

export const words: Word[] = [
  { text: "Software Engineer", imgPath: "/images/code.svg" },
  { text: "Full Stack Developer", imgPath: "/images/designs.svg" },
  { text: "Problem Solver", imgPath: "/images/concepts.svg" },
  { text: "Software Engineer", imgPath: "/images/code.svg" },
  { text: "Full Stack Developer", imgPath: "/images/designs.svg" },
  { text: "Problem Solver", imgPath: "/images/concepts.svg" },
];

export const counterItems: CounterItem[] = [
  { value: 8.1, suffix: "/10", label: "CGPA" },
  { value: 3, suffix: "+", label: "Years Experience" },
  { value: 3, suffix: "", label: "Projects" },
];

export const expCards: ExpCard[] = [
  {
    company: "National Australia Bank",
    location: "Gurugram",
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo1.png",
    title: "Associate Software Engineer",
    date: "Aug 2025 — Present",
    responsibilities: [
      "Architected event-driven investment communication service using Spring Boot, JPA, WebClient, batch schedulers—reducing operational effort by 80%",
      "Led frontend architecture across micro-frontends with React and TypeScript, improving release velocity by 30%",
      "Implemented micro-frontend orchestration and GraphQL integrations for product origination flows",
      "Built CI/CD and test automation using JUnit, AutoX, Harness—reducing regressions by 40%",
    ],
  },
  {
    company: "Infraprime Logistics Technologies Pvt. Ltd.",
    location: "Gurugram",
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo1.png",
    title: "Software Intern",
    date: "Jun 2024 — Dec 2024",
    responsibilities: [
      "Designed real-time GPS tracking and route optimization using Python, FastAPI, Raspberry Pi, Mappls APIs—improving fleet efficiency by ~40% across 250+ vehicles",
      "Implemented edge-based ML inference with TensorFlow to detect unsafe driving, reducing risky incidents by ~20%",
      "Built high-throughput data ingestion pipeline using Kafka, InfluxDB—processing 10K+ daily sensor inputs",
    ],
  },
  {
    company: "Shashwat Devalay (ADS Lab), IIIT Delhi",
    location: "Delhi",
    imgPath: "/images/exp2.png",
    logoPath: "/images/logo2.png",
    title: "Full Stack Developer",
    date: "Jan 2024 — May 2024",
    responsibilities: [
      "Built cross-platform community service app using React Native, Expo, Firebase for real-time volunteer–seeker coordination",
      "Developed event management with automated enrollments and approvals—reducing operational effort by ~40%",
      "Implemented real-time chat with WebSockets, supporting 1,000+ users and 200+ small businesses",
    ],
  },
];

export const projects: Project[] = [
  {
    title: "E-Commerce Microservices Platform",
    tech: "Java, Spring Boot, PostgreSQL, Flyway, JWT, Docker, JUnit",
    github: "https://github.com/tonythomasndm/spring-boot-ecom-store.git",
    description: "Secure RESTful microservices for product, cart, and order lifecycles with Stripe integration",
    features: [
      "Spring Boot and JWT for secure APIs; Stripe payment with webhook handling",
      "Docker containerization, CI/CD pipelines, 95% test coverage",
      "Swagger API docs, role-based access controls",
    ],
    imgPath: "/images/project1.png",
  },
  {
    title: "Weather Monitoring and Drought Assessment for Farmers",
    tech: "Python, SQL, Apache Spark, TensorFlow",
    github: "https://github.com/tonythomasndm/Weather-Monitoring-and-Drought-Assessment-for-Farmers.git",
    description: "Scalable ETL and analytics for agricultural and weather data",
    features: [
      "ETL pipelines processing 3M+ records; Spark Streaming for real-time forecasts",
      "Time-series regression models reducing estimated crop loss by 25%",
    ],
    imgPath: "/images/project3.png",
  },
  {
    title: "Smart News Mobile Application",
    tech: "Kotlin, Android, Jetpack Compose, Room DB, Retrofit",
    github: "https://github.com/tonythomasndm/NewsXtreme.git",
    description: "Location-aware Android news app with offline-first architecture",
    features: [
      "Location-aware news delivery—40% engagement increase",
      "Offline-first with Room and Retrofit—25% retention improvement",
    ],
    imgPath: "/images/project2.png",
  },
];

export const education: Education[] = [
  {
    institution: "Indraprastha Institute of Information Technology Delhi",
    degree: "B.Tech in Computer Science and Design",
    period: "Dec 2021 — May 2025",
    grade: "CGPA: 8.1/10",
  },
];

/** Map skill names to logo paths. Use /images/logos/ for local, or Simple Icons CDN for others. */
export const skillLogos: Record<string, string> = {
  Java: "https://cdn.simpleicons.org/java/ED8B00",
  TypeScript: "https://cdn.simpleicons.org/typescript/3178C6",
  Python: "/images/logos/python.svg",
  SQL: "https://cdn.simpleicons.org/postgresql/4169E1",
  "C++": "https://cdn.simpleicons.org/cplusplus/00599C",
  Kotlin: "https://cdn.simpleicons.org/kotlin/7F52FF",
  "React.js": "/images/logos/react.png",
  "React Native": "/images/logos/react.png",
  "Apollo GraphQL": "https://cdn.simpleicons.org/apollographql/311C87",
  Redux: "https://cdn.simpleicons.org/redux/764ABC",
  "Material UI": "https://cdn.simpleicons.org/mui/007FFF",
  TailwindCSS: "https://cdn.simpleicons.org/tailwindcss/06B6D4",
  Jest: "https://cdn.simpleicons.org/jest/C21325",
  "Spring Boot": "https://cdn.simpleicons.org/springboot/6DB33F",
  GraphQL: "https://cdn.simpleicons.org/graphql/E10098",
  JWT: "https://cdn.simpleicons.org/jsonwebtokens/000000",
  Maven: "https://cdn.simpleicons.org/apachemaven/C71A36",
  Gradle: "https://cdn.simpleicons.org/gradle/02303A",
  JUnit: "https://cdn.simpleicons.org/junit5/25A162",
  PostgreSQL: "https://cdn.simpleicons.org/postgresql/4169E1",
  MongoDB: "https://cdn.simpleicons.org/mongodb/47A248",
  Redis: "https://cdn.simpleicons.org/redis/DC382D",
  "Apache Kafka": "https://cdn.simpleicons.org/apachekafka/231F20",
  Docker: "https://cdn.simpleicons.org/docker/2496ED",
  Jenkins: "https://cdn.simpleicons.org/jenkins/D24939",
  Git: "/images/logos/git.svg",
  GitHub: "/images/logos/git.svg",
  "VS Code": "https://cdn.simpleicons.org/visualstudiocode/007ACC",
  Postman: "https://cdn.simpleicons.org/postman/FF6C37",
  AWS: "https://cdn.simpleicons.org/amazonaws/FF9900",
  "AWS (EC2, S3, Lambda)": "https://cdn.simpleicons.org/amazonaws/FF9900",
  "IntelliJ IDEA": "https://cdn.simpleicons.org/intellijidea/000000",
  Neo4J: "https://cdn.simpleicons.org/neo4j/008CC1",
  Flyway: "https://cdn.simpleicons.org/flyway/CC0200",
  Mockito: "https://cdn.simpleicons.org/mockito/000000",
};

export const skillsByCategory: { category: string; items: string[] }[] = [
  {
    category: "Programming Languages",
    items: ["Java", "TypeScript", "Python", "SQL", "C++", "Kotlin"],
  },
  {
    category: "Frontend",
    items: ["React.js", "React Native", "Apollo GraphQL", "Redux", "Material UI", "TailwindCSS", "Jest", "AutoX"],
  },
  {
    category: "Backend",
    items: ["Spring Boot", "REST APIs", "GraphQL", "JWT", "Maven", "Gradle", "JUnit", "Mockito"],
  },
  {
    category: "Databases & Messaging",
    items: ["PostgreSQL", "MongoDB", "Redis", "Neo4J", "Apache Kafka", "Flyway"],
  },
  {
    category: "Cloud & DevOps",
    items: ["AWS (EC2, S3, Lambda)", "Docker", "Jenkins", "Harness", "Vault"],
  },
  {
    category: "Tools",
    items: ["Git", "GitHub", "IntelliJ IDEA", "VS Code", "Postman", "DBeaver", "Splunk"],
  },
];

export const awards: Award[] = [
  {
    title: "Best Teaching Assistant Award",
    desc: "Human-Centered Design Course under Professor Rajiv Ratn Shah",
    date: "Sep 2023",
  },
  {
    title: "Honorarium Award",
    desc: "Prototyping with Figma Session in Design Summer School '24 at IIITD",
    date: "May 2024",
  },
];

export const leadership: LeadershipItem[] = [
  { role: "Volunteer, Vikiran — educating underprivileged students", period: "Aug 2024 — Present" },
  { role: "Lead Organizer, Epoch 24 — ML/AI hackathon series across Delhi", period: "Jan 2024 — May 2024" },
  { role: "Design Head, CyFuse Club, BioBytes Club, IEEE Club", period: "Oct 2023 — May 2024" },
  { role: "President, Fresources Club IIITD", period: "May 2022 — Present" },
];

export const socialLinks: SocialLink[] = [
  { name: "github", imgPath: "/images/logos/git.svg", url: "https://github.com/tonythomasndm" },
  { name: "linkedin", imgPath: "/images/linkedin.png", url: "https://www.linkedin.com/in/tonythomasndm/" },
  { name: "email", imgPath: "/images/chat.png", url: "mailto:ttonythomasndm@gmail.com" },
];
