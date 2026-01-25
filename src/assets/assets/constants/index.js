const navLinks = [
  {
    name: "About",
    link: "#about",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Projects",
    link: "#projects",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Contact",
    link: "#contact",
  },
];

const words = [
  { text: "Developer", imgPath: "/images/code.svg" },
  { text: "Designer", imgPath: "/images/designs.svg" },
  { text: "Engineer", imgPath: "/images/concepts.svg" },
  { text: "Creator", imgPath: "/images/ideas.svg" },
  { text: "Developer", imgPath: "/images/code.svg" },
  { text: "Designer", imgPath: "/images/designs.svg" },
  { text: "Engineer", imgPath: "/images/concepts.svg" },
  { text: "Creator", imgPath: "/images/ideas.svg" },
];

const counterItems = [
  { value: 200, suffix: "+", label: "Leetcode Problems" },
  { value: 200, suffix: "+", label: "GeeksForGeeks Problems" },
  { value: 5, suffix: "+", label: "Projects" },
  { value: 8.18, suffix: "", label: "CGPA" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    company: "Infraprime Logistics Technologies Pvt. Ltd",
    location: "Gurugram",
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo1.png",
    title: "Software Intern",
    date: "May 2024 - July 2024",
    certificate: "https://drive.google.com/file/d/1VjIptsR3b8vbVjVTiUCDw1-8_t-r1QIE/view?usp=drive_link",
    responsibilities: [
      "Built a GPS tracking and fraud detection system using Mappls and Raspberry Pi, boosting route optimization by 40%",
      "Developed an edge computing tool with Python and TensorFlow to detect unsafe driving and send real-time alerts",
      "Created a cloud-sync system with SQLite and InfluxDB, and Kafka for sensor data streaming and real-time analysis",
    ],
  },
  {
    company: "Applied Data Science and AI Lab",
    location: "IIIT Delhi",
    imgPath: "/images/exp2.png",
    logoPath: "/images/logo2.png",
    title: "Full Stack Developer",
    date: "August 2023 - May 2024",
    certificate: "https://drive.google.com/file/d/1VjIptsR3b8vbVjVTiUCDw1-8_t-r1QIE/view?usp=drive_link",
    responsibilities: [
      "Developed a cross-platform app in React Native and Expo to connect volunteers and seekers for community services",
      "Created an event system with automated volunteer enrollment, streamlining event approval and management",
      "Implemented Swarozgar marketplace, empowering small businesses through streamlined shop registration and approvals",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
];

const projects = [
  {
    title: "LLM based Policy Assessment Chatbot",
    tech: "Python, Django, Langchain, Llama 3, Google GoEmotions",
    github: "https://github.com/tonythomasndm/LLM-based-Policy-Assessment-Chatbot",
    description: "Developed a chatbot using Langchain and Llama 3 to assess the impact of government policies on vulnerable populations",
    features: [
      "Django-based GPT-like chat interface with ensembling (Similarity + BM25) for retrieval",
      "Scraped policy details from government sites with BeautifulSoup",
      "Multiclass sentiment analysis with GoEmotions and ranked reviews using TF-IDF",
    ],
    imgPath: "/images/project1.png",
  },
  {
    title: "NewsXtreme",
    tech: "Kotlin, Jetpack Compose, Jsoup, Room Database, Retrofit, APIs",
    github: "https://github.com/tonythomasndm/NewsXtreme.git",
    description: "Location-based news app using Jetpack Compose with MVVM pattern",
    features: [
      "Room database for offline reading",
      "Jsoup for web scraping",
      "Location services for local news",
    ],
    imgPath: "/images/project2.png",
  },
  {
    title: "Weather Monitoring and Drought Assessment for Farmers",
    tech: "Python, MySQL, Spark, Hadoop",
    github: "https://github.com/tonythomasndm/Weather-Monitoring-and-Drought-Assessment-for-Farmers",
    description: "Data warehousing system integrating weather, crop, rainfall, and drought data",
    features: [
      "Real-time insights with daily updates",
      "Tailored crop recommendations using OLAP queries",
      "Historical and seasonal data analysis",
    ],
    imgPath: "/images/project3.png",
  },
  {
    title: "CyFuse Club College Website",
    tech: "React.js, Vanilla CSS, JavaScript",
    website: "https://cyfuse.iiitd.edu.in/",
    description: "Fully functional college club website to release updates and newsletters",
    features: [
      "React.js with Material UI for seamless user interface",
      "User-centric and UX driven design principles",
    ],
    imgPath: "/images/project1.png",
  },
  {
    title: "Anveshan Hackathon Website",
    tech: "React.js, JavaScript, Redux.js, Tailwind",
    github: "https://github.com/tonythomasndm/Anveshan3.0-2024-IIITD-Website",
    description: "Dynamic hackathon registration platform with Google Spreadsheets integration",
    features: [
      "Time-based problem statement releases",
      "Page routing and navigation for interactive experience",
    ],
    imgPath: "/images/project2.png",
  },
];

const education = [
  {
    institution: "Indraprastha Institute of Information Technology, Delhi",
    degree: "B.Tech in Computer Science and Design",
    period: "2021-2025",
    grade: "CGPA: 8.18",
  },
  {
    institution: "Vivekanand School, Anand Vihar, Delhi",
    degree: "Grade XII CBSE Board",
    period: "2021",
    grade: "Percentage: 96.4%",
  },
  {
    institution: "St Mary's Convent School, Shastri Nagar, Ghaziabad",
    degree: "Grade X ICSE Board",
    period: "2019",
    grade: "Percentage: 94.4%",
  },
];

const leadership = [
  "Lead Organizer of various college events like RIISE, Esummit'23, Epoch'24 hackathon and Anveshan hackathon",
  "Coordinated the design and events team at Fresources, CyFuse Club, and IEEE-IIITD branch",
  "Led educational workshops and volunteered for more than 100 underprivileged children at Vikiran Delhi",
];

const awards = [
  "Competitive Programming: 200+ Leetcode solves, 200+ GeeksForGeeks solves, and Pupil rating on Codeforces",
  "Awarded Best Teaching Assistant in Human-Centered Design Course under Professor Rajiv Ratn Shah",
  "Received Honorarium Award for conducting Prototyping with Figma Session in Design Summer School'24 at IIITD",
];

const socialLinks = [
  {
    name: "github",
    imgPath: "/images/logos/git.svg",
    url: "https://github.com/tonythomasndm",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
    url: "https://www.linkedin.com/in/tonythomasndm/",
  },
  {
    name: "email",
    imgPath: "/images/chat.png",
    url: "mailto:tony21360@iiitd.ac.in",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  projects,
  education,
  leadership,
  awards,
  socialLinks,
  techStackIcons,
  techStackImgs,
  navLinks,
};
