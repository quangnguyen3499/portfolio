export default {
  name: "Quang Nguyen Dinh Bao",
  logo_name: "Quang Nguyen",
  title: "Software Engineer",
  email: "ndinhbaoquang@gmail.com",
  flat_picture: require("./assets/me.png"),
  config: {
    use_cookies: true,
    navbar: { blur: false },
  },
  description: `With over 6 years in software development, I specialize in web development, proficient in Python, JavaScript, Django, Flask, VueJS, ReactJS, and ETL technologies. My expertise spans AI development with LLMs, web responsiveness. I have experience with AWS, GCP, and have worked on diverse projects, including e-commerce, HR, computer vision, finance, and AI-powered applications. Continuously researching, I integrate the latest technologies to deliver innovative and effective solutions.`,
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
      degree: "Bachelor in Information Technology",
      gpa: "3.0/4.0",
      description: [],
      skills: ["Software Engineering", "Web Programming", "Embedded Programming", "Back-end Programming"],
    },
  ],
  experience: [
    {
      name: "Saigon Technology",
      tagline: "Fintech, ERP, and AI-powered backend/data platforms",
      place: "Da Nang, Viet Nam",
      date: "Nov 2022 - Present",
      position: "Software/Data Engineer",
      summary: "Built backend, data, and automation systems for fintech reporting, payroll operations, and AI-assisted document workflows.",
      description: [
        "Automated financial reporting pipelines integrating Snowflake, Kafka, Salesforce, and banking systems, eliminating 50% of manual operational workload through scalable Airflow orchestration.",
        "Reduced payroll operational costs by 20% and travel time by 30% by designing workforce optimization and ERP automation workflows using Python, SQL Server, and AWS.",
        "Built event-driven backend services and ETL pipelines using Python, Kafka, Airflow, and AWS for distributed fintech and payroll processing systems.",
        "Developed LLM-powered enrichment pipelines using OpenAI and LangChain for structured document processing, data linking, and AI-assisted workflow automation.",
      ],
      skills: ["Python", "Airflow", "Kafka", "Snowflake", "Salesforce", "SQL Server", "AWS", "OpenAI", "LangChain", "ETL"],
    },
    {
      name: "Madison Technology",
      tagline: "Financial and e-commerce platforms for SEA markets",
      place: "Da Nang, Viet Nam",
      date: "Apr 2022 - Oct 2022",
      position: "Backend Engineer",
      summary: "Delivered backend APIs and real-time services for distributed financial systems.",
      description: [
        "Built production-grade Django REST APIs and real-time backend communication services using Kafka and gRPC for distributed financial systems.",
        "Improved backend reliability and delivery quality through automated testing, Pytest-based validation, and cross-team backend integration workflows.",
      ],
      skills: ["Python", "Django", "Django REST Framework", "Kafka", "gRPC", "Pytest", "AWS", "Docker", "MySQL", "PostgreSQL"],
    },
    {
      name: "Rikai Technology",
      tagline: "Enterprise systems and OCR-integrated automation platforms",
      place: "Da Nang, Viet Nam",
      date: "Jan 2021 - Mar 2022",
      position: "Backend Engineer",
      summary: "Built enterprise backend modules, crawling pipelines, and OCR automation for Japanese business platforms.",
      description: [
        "Built backend modules and scheduled crawling pipelines using Python, Ruby on Rails, and PostgreSQL for Japanese enterprise platforms.",
        "Achieved up to 95% automated test coverage across web crawling and employee evaluation systems, improving production reliability and reducing regression issues.",
        "Integrated OCR workflows using Google Cloud Vision for image-based PDF processing and enterprise document automation.",
      ],
      skills: ["Python", "Ruby on Rails", "PostgreSQL", "Web Crawling", "Google Cloud Vision", "OCR", "Django", "MySQL"],
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
    { name: "Rest API (Intermediate) Certificate", detail: "Hackerrank", url: "https://www.hackerrank.com/certificates/8446b000fd59" },
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
      name: "Real Estate",
      pictures: [
        { img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973&auto=format&fit=crop" }
      ],
      technologies: ["React", "TypeScript", "AI-assisted Development"],
      category: "Web App",
      github: "https://github.com/quangnguyen3499/vibecode-real_estate",
      visit: "https://vibecode-real-estate.vercel.app/",
      description: "An AI-assisted real estate showcase, focused on property browsing, clean visual presentation, and a responsive user experience."
    },
    {
      name: "Car Showroom",
      pictures: [
        { img: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2083&auto=format&fit=crop" }
      ],
      technologies: ["React", "TypeScript", "AI-assisted Development"],
      category: "Web App",
      github: "https://github.com/quangnguyen3499/vibecode-car_showroom",
      visit: "https://vibecode-car-showroom.vercel.app/",
      description: "An AI-assisted car showroom web app with polished vehicle presentation, showroom-style browsing, and responsive UI patterns."
    },
  ],
  blogs: [
    {
      id: 1,
      title: "Building Scalable ETL Pipelines with Apache Airflow",
      category: "Data Engineering",
      date: "May 15, 2026",
      readTime: "5 min read",
      excerpt: "An in-depth look at designing and scaling robust ETL workflows using Apache Airflow, focusing on dependency management, task retries, and data consistency.",
      content: `
        <h3>Introduction to Airflow</h3>
        <p>In modern data engineering, building pipelines that can handle large scale data, execute reliably, and recover from failures is critical. Apache Airflow has emerged as the industry standard for workflow orchestration. In this post, we explore how to design ETL workflows that scale efficiently.</p>
        
        <h3>Designing Idempotent DAGs</h3>
        <p>One of the core principles of reliable pipelines is idempotency. A DAG (Directed Acyclic Graph) is idempotent if running it multiple times with the same input parameters yields the identical output state. This prevents duplicate records in databases and ensures consistency even after manual re-runs.</p>
        
        <h3>Best Practices for Scaling</h3>
        <ul>
          <li><strong>Keep tasks atomic:</strong> Each task should do one thing, like download data, transform data, or load data. Avoid mixing responsibilities.</li>
          <li><strong>Use the database connection pool:</strong> Ensure task instances do not overwhelm database connections by leveraging Airflow connections and pools.</li>
          <li><strong>Configure proper retry logic:</strong> Setup task retries with exponential backoffs to handle temporary external API or network downtime.</li>
        </ul>
        
        <h3>Conclusion</h3>
        <p>By designing idempotent DAGs and separating processing layers from orchestration, you can scale data operations with confidence and maintain highly reliable system monitoring.</p>
      `
    },
    {
      id: 2,
      title: "Mastering State Management in Vue 3: Vuex vs. Pinia",
      category: "Frontend",
      date: "April 28, 2026",
      readTime: "4 min read",
      excerpt: "Comparing state management solutions in the Vue ecosystem. We analyze architectural differences, performance, and typescript integration between Vuex and Pinia.",
      content: `
        <h3>The Evolution of State in Vue</h3>
        <p>State management is a core consideration of complex web applications. For years, Vuex was the default solution for Vue developers. However, Pinia has now become the official recommendation for Vue 3. Let's compare their designs.</p>
        
        <h3>Why Pinia Wins</h3>
        <p>Pinia offers a lighter, cleaner developer experience compared to Vuex:</p>
        <ul>
          <li><strong>No Mutations:</strong> In Pinia, you modify state directly in actions, removing boilerplate code.</li>
          <li><strong>Full TypeScript Support:</strong> Pinia is typed by default, offering autocompletion and type checking out of the box.</li>
          <li><strong>Modular by Design:</strong> Pinia encourages multiple small stores rather than a single monolithic state tree.</li>
        </ul>
        
        <h3>Conclusion</h3>
        <p>If you are starting a new Vue 3 project, Pinia is the clear choice. Its simplicity, TypeScript integration, and modularity offer a massive developer experience improvement.</p>
      `
    },
    {
      id: 3,
      title: "Integrating Large Language Models into Automation Workflows using n8n",
      category: "AI & Automation",
      date: "March 12, 2026",
      readTime: "6 min read",
      excerpt: "Learn how to build intelligent, autonomous business workflows by integrating OpenAI's API into n8n visual automation pipelines without writing excessive glue code.",
      content: `
        <h3>AI-Driven Automation</h3>
        <p>Automating repetitive tasks is valuable, but combining automation with AI makes it transformational. Integrating Large Language Models (LLMs) like GPT-4 into visual workflow tools like n8n allows systems to read, categorize, summarize, and respond to unstructured text automatically.</p>
        
        <h3>Sample Integration Scenarios</h3>
        <p>Here are three high-impact integrations you can build:</p>
        <ol>
          <li><strong>Support Ticket Triage:</strong> Receive support emails, send them to OpenAI for sentiment and urgency classification, and direct them to the appropriate Slack channel.</li>
          <li><strong>Resume Screening:</strong> Parse CV PDF uploads, extract key skills, match them against job specs, and save the score to Google Sheets.</li>
          <li><strong>Automated Invoicing Audits:</strong> Scan invoice images with OCR, extract total cost, compare it with purchase orders, and flag anomalies automatically.</li>
        </ol>
        
        <h3>Key Takeaways</h3>
        <p>Visual orchestration tools combined with semantic AI intelligence allow teams to prototype and launch complex workflows in days rather than months, minimizing manual overhead.</p>
      `
    }
  ]
};
