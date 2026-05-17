let info = {
  name: "Quang Nguyen Dinh Bao",
  logo_name: "Quang Nguyen",
  flat_picture: require("./src/assets/me.png"),
  config: {
    use_cookies: true,
    navbar: {
      blur: false
    }
  },
  description:
    ` 
      With over 4-years of expertise in the realm of software development, specializing in web development. I
      possess a strong command of various areas. My skill set includes proficiency in Python, Django Framework, JavaScript, 
      both non-relational and relational databases. Moreover, I have hands-on experience in front-end
      development with VueJS, ReactJS, Bootstrap and mobile with React Native. I’m also familiar with Docker, AWS and GCP services.
      I have worked through projects about e-commerce, human resources, computer vision, data mining and finance.
      I always want to come up with innovative ideas and effective solutions. 
    `,
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
      degree: "Bachelor in software engineering",
      gpa: "3.0/4.0",
      description:
        "",
      skills: [
        "Software Engineering",
        "Web Programming",
        "Embedded Programming",
        "Back-end Programming"
      ]
    },
  ],
  experience: [
    {
      name: "Saigon Technology",
      place: "Da Nang, Viet Nam",
      date: "Nov 2022 - Present",
      position: "Web Developer",
      description: 
        [
          "- Involved in collecting requirements, designing, developing the system from scratch",
          "- Apply microservices for the system, build ELK Stack, BI tools to analyze data",
          "- Setup CI/CD, hold sharing knowledge sessions in the team"
        ],
      skills: [
        "Python", "Django", "FastAPI", "Flask",
        "Celery", "Apache Kafka", "RabbitMQ",
        "AWS", "GCP", "ElasticSearch", "Docker", 
        "Apache Superset", "Databases",
        "Selenium", "Playwright", "Scrapy"
      ]
    },
    {
      name: "Madison Technology",
      place: "Da Nang, Viet Nam",
      date: "Apr, 2022 - Oct, 2022",
      position: "Web Developer",
      description: 
        [
          "- Involved in developing the back-end for the system",
          "- Training, review code for team member"
        ],
      skills: [
        "Python", "Django", "Django Rest Framework",
        "Apache Kafka", "Go", "Gin", "AWS", "Docker",
        "MySQL", "PostgreSQL"
      ]
    },
    {
      name: "Rikai Technology.",
      place: "Da Nang, Viet Nam",
      date: "Jan 2021 - Mar 2022",
      position: "Web Developer",
      description:
        [
          "- Involved in developing both back-end and front-end",
          "- Designed databases for the system"
        ],
      skills: [
        "VB.Net", "Ruby", "Ruby On Rails", "Javascript",
        "Typescript", "VueJS", "GCP", "Python", "Django",
        "MySQL"
      ]
    },
    {
      name: "Rikai Technology",
      place: "Da Nang, Viet Nam",
      date: "Sep 2020 - Wed 2020",
      position: "Internship Developer",
      description:
        [
          "- Training about web development, working process, team work",
        ],
      skills: [
        "HTML5", "CSS3", "Bootstrap", "JQuery", "JavaSript",
        "TypeSript", "Ruby", "Ruby On Rails", "React Native",
        "Redux", "Firebase", "MySQL"
      ]
    }
  ],
  skills: [
    {
      title: "Languages",
      info: [
        "Python", "Javascript", "TypeScript"],
      icon: "fa fa-code"
    },
    {
      title: "Front-end",
      info: [
        "HTML5", "CSS3", "Bootstrap", "ES6", "JQuery"],
      icon: "fa fa-cubes"
    },
    {
      title: "Frameworks",
      info: ["Django", "Flask", "VueJS", "ReactJS", "NodeJS"],
      icon: "fas fa-laptop-code"
    },
    {
      title: "Databases",
      info: ["SQL & NoSQL databases"],
      icon: "fa fa-database"
    },
    {
      title: "Cloud",
      info: ["AWS", "GCP"],
      icon: "fa fa-cloud"
    },
    {
      title: "Mobile",
      info: ["React Native"],
      icon: "fa fa-mobile"
    },
    {
      title: "Data Analytic",
      info: ["Superset", "Tableau"],
      icon: "fa fa-bar-chart"
    },
    {
      title: "Web Crawling",
      info: ["Selenium", "Playwright", "Scrapy", "BeautifulSoup"],
      icon: "fa fa-spider"
    }
  ],
  portfolio_design: [
    {
      name: "Keep it Green",
      title: "UI/UX Design",
      pictures: [
        {
          img: require("./src/assets/designs/Keep it green/cover.png"),
          title: "MoodBoard"
        },
        {
          img: require("./src/assets/designs/Keep it green/show.png"),
          title: "show"
        },
      ],
      technologies: ["Figma", "Photoshop"],
      category: "Visual Design",
      github: "",
      date: "Jan, 2022",
      visit: "",
      description:
        ""
    },
    {
      name: "Digital agency website",
      title: "UI/UX Design",
      pictures: [
        {
          img: require("./src/assets/designs/digital agency/behance cover.png"),
          title: "MoodBoard"
        },
        {
          img: require("./src/assets/designs/digital agency/1. start.png"),
          title: "App Elements"
        },
        {
          img: require("./src/assets/designs/digital agency/2. about.png"),
          title: "App Elements"
        },
        {
          img: require("./src/assets/designs/digital agency/3. Our services.png"),
          title: "App Elements"
        },
        {
          img: require("./src/assets/designs/digital agency/4. latest project.png"),
          title: "App Elements"
        },
        {
          img: require("./src/assets/designs/digital agency/5. Contact us.png"),
          title: "App Elements"
        },
      ],
      technologies: ["Figma", "Illustrator"],
      category: "Visual Design",
      github: "",
      date: "Dec, 2021",
      visit: "",
      description:
        ""
    },
    {
      name: "Credit card design",
      title: "Illustration",
      pictures: [
        {
          img: require("./src/assets/designs/credit/behance cover.png"),
          title: "MoodBoard"
        },
        {
          img: require("./src/assets/designs/credit/degisning.png"),
          title: "Degisning"
        },
        {
          img: require("./src/assets/designs/credit/Dual tune.png"),
          title: "Dual tune"
        },
        {
          img: require("./src/assets/designs/credit/Glassmorphism.png"),
          title: "Glassmorphism"
        },
        {
          img: require("./src/assets/designs/credit/Gradiant.png"),
          title: "Gradiant"
        },
        {
          img: require("./src/assets/designs/credit/Monochrome.png"),
          title: "Monochrome"
        },
        {
          img: require("./src/assets/designs/credit/Neumorphism.png"),
          title: "Neumorphism"
        },
      ],
      technologies: ["Figma", "Illustrator"],
      category: "Visual Design",
      github: "",
      date: "Dec, 2021",
      visit: "",
      description:
        ""
    },
    {
      name: "BOOKSI",
      title: "E-Book library - UI/UX Design",
      pictures: [
        {
          img: require("./src/assets/designs/booksi/behance cover.png"),
          title: "Cover"
        },
        {
          img: require("./src/assets/designs/booksi/behance board.png"),
          title: "MoodBoard"
        },
        {
          img: require("./src/assets/designs/booksi/login.png"),
          title: "login"
        },
        {
          img: require("./src/assets/designs/booksi/register.png"),
          title: "register"
        },
        {
          img: require("./src/assets/designs/booksi/home page.png"),
          title: "homepage"
        },
        {
          img: require("./src/assets/designs/booksi/For you.png"),
          title: "just for you"
        }
      ],
      technologies: ["Figma", "Photoshop"],
      category: "Visual Design",
      github: "",
      date: "Nov, 2021",
      visit: "",
      description:
        " BOOKSI is Ebook android app for easy read books."
    },
    {
      name: "Quiet Weather",
      title: "UI/UX Design",
      pictures: [
        {
          img: require("./src/assets/designs/weather/Wooden Hand iPhone 12 Pro.png"),
          title: "MoodBoard"
        },
        {
          img: require("./src/assets/designs/weather/artboard.png"),
          title: "show"
        },
        {
          img: require("./src/assets/designs/weather/weather app react native.png"),
          title: "components"
        },
      ],
      technologies: ["Figma", "Illustration"],
      category: "Visual Design",
      github: "",
      date: "Nov, 2021",
      visit: "",
      description:
        "Quiet Weather is a react native app by openweathermap api, i designed the ui/ux and coding it in react native, enjoy it!"
    },
    {
      name: "Pill Reminder",
      title: "Pill Reminder - Mockup Design",
      pictures: [
        {
          img: require("./src/assets/designs/pill reminder/Web 1.png"),
          title: "Moodboard"
        },
        {
          img: require("./src/assets/designs/pill reminder/1.png"),
          title: "Mockups 1"
        },
        {
          img: require("./src/assets/designs/pill reminder/2.png"),
          title: "Mockups 2"
        }
      ],
      technologies: ["XD", "Illustrator"],
      category: "Visual Design",
      github: "",
      date: "Apr, 2021",
      visit: "",
      description:
        "pill reminder app for nessecary drugs for the day."
    },
  ],
  portfolio: [
    {
      name: "Badminton Recommendation System",
      pictures: [
        {
          img: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?q=80&w=2070&auto=format&fit=crop"
        }
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
        {
          img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop"
        }
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
        {
          img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973&auto=format&fit=crop"
        }
      ],
      technologies: ["React", "TypeScript", "Node.js", "MongoDB"],
      category: "Web App",
      date: "May, 2026",
      github: "https://github.com/quangnguyen3499/real-estate",
      visit: "https://real-estate-demo.com",
      description: "A comprehensive real estate platform with high-quality imagery, advanced filtering, and a sleek user interface. Resolves missing media assets efficiently using custom functional links."
    }
  ],
};

export default info;
