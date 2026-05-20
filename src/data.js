export default {
  name: "Nguyen Dinh Bao Quang",
  logo_name: "Quang Nguyen",
  title: "Software Engineer",
  email: "ndinhbaoquang@gmail.com",
  phone: "(+84) 705248038",
  flat_picture: require("./assets/me.png"),
  config: {
    use_cookies: true,
    navbar: { blur: false },
  },
  description: `With over 5 years in software development, I specialize in web development, proficient in Python, JavaScript, Django, Flask, VueJS, ReactJS, and ETL technologies. My expertise spans AI development with LLMs, web responsiveness, and mobile app development using React Native. I have experience with AWS, GCP, and have worked on diverse projects, including e-commerce, HR, computer vision, finance, and AI-powered applications. Continuously researching, I integrate the latest technologies to deliver innovative and effective solutions.`,
  links: {
    linkedin: "https://www.linkedin.com/in/quang-nguyen-513774195",
    github: "https://github.com/quangnguyen3499",
    resume: "https://drive.google.com/file/d/1YODf90aAQYzjZSer-KO_C_JKgWogK00m/view?usp=sharing",
  },
  education: [
    {
      name: "Da Nang University of Science and Technology",
      place: "Da Nang, Viet Nam",
      date: "Aug 2017 - May 2022",
      degree: "Bachelor in Software Engineering",
      gpa: "3.0/4.0",
      description: [],
      skills: ["Software Engineering", "Web Programming", "Embedded Programming", "Back-end Programming"],
    },
  ],
  experience: [
    {
      name: "ERP System",
      place: "Australia",
      date: "Apr 2025 – Present",
      position: "Developer",
      description: [
        "Developed and maintained a Python application for data processing, evaluation, and integration with external services.",
        "Developed, deployed, and self-hosted the n8n automation platform from scratch (server, environment, security, integrations).",
        "Designed and built n8n workflows to automate payroll data sync, notifications, file transfers, and error handling.",
        "Integrated OpenAI API for AI-driven tasks: text summarization, document analysis (PDF, image), and data extraction.",
        "Created stored procedures for calculation and aggregation; generated reports (timesheets, expenses, error logs) stored in S3.",
      ],
      skills: ["Python", "SQL Server", "Pandas", "Docker", "n8n", "OpenAI API", "AWS Lambda", "ECR", "ECS", "EC2", "Textract", "OpenSearch"],
    },
    {
      name: "Finance System",
      place: "US",
      date: "Jan 2023 – Present",
      position: "Developer",
      description: [
        "Developed and maintained Airflow DAGs for data processing, report generation, and external service integration.",
        "Implemented Test-Driven Development; tested DAGs, documented test cases, and generated outcome reports.",
        "Enhanced report dashboard performance and UX using Jinja2, JQuery, HTML, and CSS.",
        "Successfully migrated system to a new third-party platform, improving performance and efficiency.",
      ],
      skills: ["Python", "Jinja2", "JQuery", "Pandas", "Airflow", "SQL", "Docker", "AWS ECR", "ECS", "Kafka", "Snowflake", "Salesforce", "Datadog"],
    },
    {
      name: "Job Search System",
      place: "US",
      date: "Mar 2025 – Apr 2025",
      position: "Developer",
      description: [
        "Developed and maintained ETL pipelines to collect data from multiple sources and integrate with external services.",
        "Integrated LLM to generate missing data from crawled data; linked data between services for consistency.",
      ],
      skills: ["Python", "Flask", "Pandas", "Langchain", "PostgreSQL", "Docker", "AWS ECR", "SNS", "S3", "Snowflake"],
    },
    {
      name: "Chat Widget with AI",
      place: "UK",
      date: "Nov 2023 – Apr 2024",
      position: "Developer",
      description: [
        "Implemented RESTful APIs and WebSocket using FastAPI for real-time communication and chat module.",
        "Used Celery for periodic tasks and Redis for caching; designed PostgreSQL schemas and unit tests with Pytest.",
        "Integrated AI module (Langchain, GPT-3.5 Turbo, GPT-4); packaged with Docker and documented the project.",
      ],
      skills: ["Python", "FastAPI", "Jinja2", "Celery", "Redis", "PostgreSQL", "OpenAI", "WebSocket", "Docker", "AWS ECS", "CloudWatch", "CodeCommit"],
    },
    {
      name: "SDK Authentication",
      place: "Australia",
      date: "May 2023 – Jun 2023",
      position: "Developer",
      description: [
        "Developed Python SDK for authentication (client_credentials, authorization_code, PKCE).",
        "Built starter kit with Flask, Jinja2, JQuery, HTML, CSS; RESTful APIs, unit tests with Pytest.",
        "Worked with Australian client to gather requirements and integrate features.",
      ],
      skills: ["Python", "Flask", "Jinja2", "HTML5", "CSS3", "JQuery", "Bootstrap", "Pytest"],
    },
    {
      name: "Face Recognition",
      place: "Viet Nam",
      date: "Nov 2022 – Present",
      position: "Developer",
      description: [
        "Designed and developed UI/UX web to collect data and interact with AI systems using Python and Django.",
        "Implemented RESTful APIs with Django Rest Framework; front-end with HTML, CSS, Bootstrap, JavaScript.",
        "Applied Kafka for data transfer, designed PostgreSQL schemas, unit tests (90% coverage), Docker, EC2 deployment.",
      ],
      skills: ["Python", "Django", "DRF", "PostgreSQL", "Apache Kafka", "Redis", "MinIO", "Celery"],
    },
    {
      name: "Loan System",
      place: "Indonesia",
      date: "Aug 2022 – Oct 2022",
      position: "Developer",
      description: [
        "Developed back-end with Python and Django Rest Framework; implemented user restriction module.",
        "Applied Apache Kafka and gRPC for real-time communication between modules; unit tests with Pytest.",
      ],
      skills: ["Python", "Django", "DRF", "PostgreSQL", "Apache Kafka", "gRPC"],
    },
    {
      name: "Grocery eCommerce Platform",
      place: "Philippines",
      date: "Apr 2022 – Jul 2022",
      position: "Developer",
      description: [
        "Developed back-end with Python, Django; designed PostgreSQL schemas for rating module.",
        "Implemented RESTful APIs with DRF; unit tests with Pytest and bug fixes.",
      ],
      skills: ["Python", "Django", "DRF", "PostgreSQL", "ReactJS", "Bootstrap"],
    },
    {
      name: "Web Crawler",
      place: "Japan",
      date: "Jan 2022 – Mar 2022",
      position: "Developer",
      description: [
        "Implemented RESTful APIs with Django Rest Framework; designed PostgreSQL schemas and optimized queries.",
        "Unit tests with Pytest (~95% coverage); back-end features: data crawler, user login/registration, user management.",
      ],
      skills: ["Python", "Django", "DRF", "PostgreSQL", "MySQL", "ReactJS", "Bootstrap"],
    },
    {
      name: "Employee Evaluation Platform",
      place: "Japan",
      date: "Jan 2021 – Oct 2021",
      position: "Developer",
      description: [
        "Implemented RESTful APIs with Ruby on Rails; front-end with VueJS (admin dashboard, evaluation page).",
        "Researched and implemented Google OCR API for text detection in image-based PDFs.",
        "Back-end: user auth, user management, file upload/storage, text detection, evaluation, billing. Project scored 8.5/10 customer satisfaction.",
      ],
      skills: ["Ruby", "Ruby on Rails", "VueJS", "HTML5", "CSS3", "JQuery", "Bootstrap", "Google OCR API", "MySQL"],
    },
  ],
  skills: [
    { title: "Languages", info: ["Python", "JavaScript", "TypeScript"], icon: "fa fa-code" },
    { title: "Web Development", info: ["Django", "Flask", "FastAPI", "VueJS", "ReactJS", "JQuery", "CSS3", "Bootstrap"], icon: "fas fa-laptop-code" },
    { title: "Databases & Data", info: ["PostgreSQL", "MySQL", "DynamoDB", "SQL Server", "Airflow", "n8n", "Superset", "Pandas", "SQL Alchemy"], icon: "fa fa-database" },
    { title: "Web Crawling", info: ["Playwright", "Selenium", "Scrapy", "BeautifulSoup"], icon: "fa fa-spider" },
    { title: "Message Queue & Cache", info: ["Apache Kafka", "AWS SQS", "SNS", "Redis", "RabbitMQ"], icon: "fa fa-exchange-alt" },
    { title: "Cloud & Deployment", info: ["AWS", "GCP", "Docker", "Terraform"], icon: "fa fa-cloud" },
    { title: "Testing & Methods", info: ["Pytest", "Unittest", "TDD", "Git", "Scrum"], icon: "fa fa-check-circle" },
    { title: "AI & Automation", info: ["Celery", "RESTful API", "OpenAI", "Langchain"], icon: "fa fa-robot" },
  ],
  certifications: [
    { name: "TOEIC", detail: "860", date: "" },
    { name: "Software Engineer Certiticate", detail: "Hackerrank", url: "https://www.hackerrank.com/certificates/d7528dc539d9" },
    { name: "SQL (Intermediate) Certificate", detail: "Hackerrank", url: "https://www.hackerrank.com/certificates/befe7d0b8296" },
  ],
  awards: [
    { name: "3rd prize of IOT-AI Hackathon 2019 Da Nang" },
  ],
  portfolio_design: [
    {
      name: "Keep it Green",
      title: "UI/UX Design",
      pictures: [
        { img: require("./assets/designs/Keep it green/cover.png"), title: "MoodBoard" },
        { img: require("./assets/designs/Keep it green/show.png"), title: "show" },
      ],
      technologies: ["Figma", "Photoshop"],
      category: "Visual Design",
      github: "",
      date: "Jan, 2022",
      visit: "",
      description: "",
    },
    {
      name: "Digital agency website",
      title: "UI/UX Design",
      pictures: [
        { img: require("./assets/designs/digital agency/behance cover.png"), title: "MoodBoard" },
        { img: require("./assets/designs/digital agency/1. start.png"), title: "App Elements" },
        { img: require("./assets/designs/digital agency/2. about.png"), title: "App Elements" },
        { img: require("./assets/designs/digital agency/3. Our services.png"), title: "App Elements" },
        { img: require("./assets/designs/digital agency/4. latest project.png"), title: "App Elements" },
        { img: require("./assets/designs/digital agency/5. Contact us.png"), title: "App Elements" },
      ],
      technologies: ["Figma", "Illustrator"],
      category: "Visual Design",
      github: "",
      date: "Dec, 2021",
      visit: "",
      description: "",
    },
    {
      name: "Credit card design",
      title: "Illustration",
      pictures: [
        { img: require("./assets/designs/credit/behance cover.png"), title: "MoodBoard" },
        { img: require("./assets/designs/credit/degisning.png"), title: "Degisning" },
        { img: require("./assets/designs/credit/Dual tune.png"), title: "Dual tune" },
        { img: require("./assets/designs/credit/Glassmorphism.png"), title: "Glassmorphism" },
        { img: require("./assets/designs/credit/Gradiant.png"), title: "Gradiant" },
        { img: require("./assets/designs/credit/Monochrome.png"), title: "Monochrome" },
        { img: require("./assets/designs/credit/Neumorphism.png"), title: "Neumorphism" },
      ],
      technologies: ["Figma", "Illustrator"],
      category: "Visual Design",
      github: "",
      date: "Dec, 2021",
      visit: "",
      description: "",
    },
    {
      name: "BOOKSI",
      title: "E-Book library - UI/UX Design",
      pictures: [
        { img: require("./assets/designs/booksi/behance cover.png"), title: "Cover" },
        { img: require("./assets/designs/booksi/behance board.png"), title: "MoodBoard" },
        { img: require("./assets/designs/booksi/login.png"), title: "login" },
        { img: require("./assets/designs/booksi/register.png"), title: "register" },
        { img: require("./assets/designs/booksi/home page.png"), title: "homepage" },
        { img: require("./assets/designs/booksi/For you.png"), title: "just for you" },
      ],
      technologies: ["Figma", "Photoshop"],
      category: "Visual Design",
      github: "",
      date: "Nov, 2021",
      visit: "",
      description: "BOOKSI is Ebook android app for easy read books.",
    },
    {
      name: "Quiet Weather",
      title: "UI/UX Design",
      pictures: [
        { img: require("./assets/designs/weather/Wooden Hand iPhone 12 Pro.png"), title: "MoodBoard" },
        { img: require("./assets/designs/weather/artboard.png"), title: "show" },
        { img: require("./assets/designs/weather/weather app react native.png"), title: "components" },
      ],
      technologies: ["Figma", "Illustration"],
      category: "Visual Design",
      github: "",
      date: "Nov, 2021",
      visit: "",
      description: "Quiet Weather is a react native app by openweathermap api, i designed the ui/ux and coding it in react native, enjoy it!",
    },
    {
      name: "Pill Reminder",
      title: "Pill Reminder - Mockup Design",
      pictures: [
        { img: require("./assets/designs/pill reminder/Web 1.png"), title: "Moodboard" },
        { img: require("./assets/designs/pill reminder/1.png"), title: "Mockups 1" },
        { img: require("./assets/designs/pill reminder/2.png"), title: "Mockups 2" },
      ],
      technologies: ["XD", "Illustrator"],
      category: "Visual Design",
      github: "",
      date: "Apr, 2021",
      visit: "",
      description: "pill reminder app for nessecary drugs for the day.",
    },
  ],
  portfolio: [
    {
      name: "Badminton Recommendation System",
      pictures: [
        { img: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?q=80&w=2070&auto=format&fit=crop" }
      ],
      technologies: ["Python", "FastAPI", "VueJS", "LLM"],
      category: "Web App",
      date: "Apr, 2024",
      github: "https://github.com/quangnguyen3499/badminton-system",
      visit: "https://demo.com",
      description: "A comprehensive recommendation system for badminton gear. Utilizes web scrapers to gather data and an AI model to analyze user inputs against the product database to provide personalized gear recommendations."
    },
    {
      name: "Pygame Zanthor",
      pictures: [
        { img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop" }
      ],
      technologies: ["Python", "Pygame"],
      category: "Game",
      date: "Feb, 2026",
      github: "https://github.com/quangnguyen3499/zanthor",
      visit: "https://zanthor-game.com",
      description: "A retro-style 2D game built with Python and Pygame. Features include physics, rendering, level progression, and complex gameplay logic."
    },
    {
      name: "Real Estate Platform",
      pictures: [
        { img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973&auto=format&fit=crop" }
      ],
      technologies: ["React", "TypeScript", "Node.js", "MongoDB"],
      category: "Web App",
      date: "May, 2026",
      github: "https://github.com/quangnguyen3499/real-estate",
      visit: "https://real-estate-demo.com",
      description: "A comprehensive real estate platform with high-quality imagery, advanced filtering, and a sleek user interface. Resolves missing media assets efficiently using custom functional links."
    }
  ],
  experiments: [
    {
      name: "Third Party OCR Document Analysis",
      pictures: [
        { img: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=2070&auto=format&fit=crop" }
      ],
      technologies: ["OCR", "Document Parsing", "Third Party AI", "Python"],
      category: "AI Service",
      date: "AI Lab",
      github: "",
      visit: "https://experiment.saigontechnology.vn/third-party-ocr-document-analysis/",
      description: "Uses Third Party AI's OCR capabilities to extract unstructured text from PDF documents and images for analysis."
    },
    {
      name: "Open-class Object Detection (SAM)",
      pictures: [
        { img: "https://images.unsplash.com/photo-1527474305487-b87b222841cc?q=80&w=2074&auto=format&fit=crop" }
      ],
      technologies: ["Computer Vision", "Segment Anything Model", "PyTorch"],
      category: "AI Service",
      date: "AI Lab",
      github: "",
      visit: "https://experiment.saigontechnology.vn/ai-frame-script/?__theme=light",
      description: "Upload an image and click on any object to automatically detect and segment it without being limited to predefined categories."
    },
    {
      name: "AI-Powered Fracture Detection",
      pictures: [
        { img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop" }
      ],
      technologies: ["Medical AI", "Computer Vision", "Deep Learning"],
      category: "AI Service",
      date: "AI Lab",
      github: "",
      visit: "https://experiment.saigontechnology.vn/ai-bone-fracture-detection/",
      description: "Automatically detects and highlights broken bones in X-ray images with high accuracy to assist radiologists."
    },
    {
      name: "CV Parser System",
      pictures: [
        { img: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=2070&auto=format&fit=crop" }
      ],
      technologies: ["NLP", "Information Extraction", "Resume Analysis"],
      category: "AI Service",
      date: "AI Lab",
      github: "",
      visit: "https://experiment.saigontechnology.vn/cvparser",
      description: "Extracts key metadata and structured information automatically from uploaded PDF CVs/resumes."
    },
    {
      name: "Analyze the Object on Image",
      pictures: [
        { img: "https://images.unsplash.com/photo-1507146426996-ef05306b995a?q=80&w=2070&auto=format&fit=crop" }
      ],
      technologies: ["Computer Vision", "Object Detection", "Image Analytics"],
      category: "AI Service",
      date: "AI Lab",
      github: "",
      visit: "https://experiment.saigontechnology.vn/computer-vision",
      description: "Applies computer vision models in real-world scenarios to detect and analyze object positions and classifications."
    },
    {
      name: "Semantic Search for Travel Place",
      pictures: [
        { img: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=2070&auto=format&fit=crop" }
      ],
      technologies: ["Semantic Search", "Wikitravel", "Embeddings"],
      category: "AI Service",
      date: "AI Lab",
      github: "",
      visit: "https://experiment.saigontechnology.vn/travel-search",
      description: "Applies semantic search technologies on Wikitravel database for highly relevant and contextual search queries."
    },
    {
      name: "Natural Language Processing Toolkit",
      pictures: [
        { img: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=2071&auto=format&fit=crop" }
      ],
      technologies: ["NLP", "Text Processing", "Tokenization"],
      category: "AI Service",
      date: "AI Lab",
      github: "",
      visit: "https://experiment.saigontechnology.vn/nlp-toolkit",
      description: "A comprehensive toolbox specifically built for various Natural Language Processing tasks and analyses."
    },
    {
      name: "Movies Recommendation System",
      pictures: [
        { img: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=2070&auto=format&fit=crop" }
      ],
      technologies: ["Recommendation System", "Collaborative Filtering", "Python"],
      category: "AI Service",
      date: "AI Lab",
      github: "",
      visit: "https://experiment.saigontechnology.vn/recommendation-system",
      description: "Recommends popular and relevant movies to users based on preferences and similarity matching."
    },
    {
      name: "Product Search (CLIP + GroundingDINO)",
      pictures: [
        { img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop" }
      ],
      technologies: ["CLIP", "GroundingDINO", "Semantic Text Queries"],
      category: "AI Service",
      date: "AI Lab",
      github: "",
      visit: "https://experiment.saigontechnology.vn/product-search-v2",
      description: "AI-powered product search combining CLIP semantic text queries and GroundingDINO for multi-object detection."
    },
    {
      name: "OCR for Prescription",
      pictures: [
        { img: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=2070&auto=format&fit=crop" }
      ],
      technologies: ["OCR", "Medical Prescriptions", "Text Extraction"],
      category: "AI Service",
      date: "AI Lab",
      github: "",
      visit: "https://experiment.saigontechnology.vn/ocr",
      description: "Extracts medical instructions and crucial text information from prescription or medical bill images."
    },
    {
      name: "AI Coaching Platform",
      pictures: [
        { img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" }
      ],
      technologies: ["LLM", "Speech-to-Text", "Insurance AI Coach"],
      category: "AI Service",
      date: "AI Lab",
      github: "",
      visit: "https://experiment.saigontechnology.vn/ai-coaching-project/",
      description: "Conversational training solution for advisors enabling text/voice interactions with an AI coach and session evaluations."
    },
    {
      name: "Music Recommendation System",
      pictures: [
        { img: "https://images.unsplash.com/photo-1614680376593-902f74fa0d41?q=80&w=2074&auto=format&fit=crop" }
      ],
      technologies: ["Recommendation System", "Spotify API", "Music Embeddings"],
      category: "AI Service",
      date: "AI Lab",
      github: "",
      visit: "https://experiment.saigontechnology.vn/recommendation-system",
      description: "Recommends new music based on song characteristics retrieved from the Spotify web API database."
    },
    {
      name: "Extract Information from Invoice Image",
      pictures: [
        { img: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070&auto=format&fit=crop" }
      ],
      technologies: ["OCR", "Invoice Parsing", "Data Extraction"],
      category: "AI Service",
      date: "AI Lab",
      github: "",
      visit: "https://experiment.saigontechnology.vn/invoice",
      description: "Extracts key invoice metadata like total cost, vendor details, and itemized billing elements from images."
    }
  ],
};
