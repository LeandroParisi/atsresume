const DefaultResumeData = {
  name: "Leandro Parisi",
  position: "BackEnd Developer",
  contactInformation: "+55 31 997794403",
  email: "lepcbelisario@gmail.com",
  address: "The Hague, Netherlands",
  profilePicture: "",
  socialMedia: [
    {
      socialMedia: "Github",
      link: "https://github.com/LeandroParisi",
    },
    {
      socialMedia: "LinkedIn",
      link: "https://www.linkedin.com/in/leandro-parisi/",
    },
    {
      socialMedia: "Portfolio",
      link: "https://github.com/LeandroParisi/PrivatePortfolio",
    },
  ],
  summary: "I identify a problem, I solve it, not just tech ones. Working in tech since 2022.",
  education: [
    {
      "school": "UFMG",
      "degree": "Bachelor of Computer Science",
      "startYear": "2017-01-01",
      "endYear": "2020-12-01"
    },
  ],
  workExperience: [
    {
      "company": "XP Inc - Xtage",
      "position": "Back end Developer",
      "description": `XP Inc. is a Brazilian investment management company. The company offers fixed income, equities, investment funds, and private pension products, as well as offers wealth management and other financial services.
      Some interesting highlights during these job are:
      1. Whole product was built as micro services since day one, since we already expected a huge amount of users once we launched;
      2. Well organized and structured logging and tracing infrastructure which allowed us to easily identify issues / bugs and thus fix them;
      3. Big focus on architectural documentations, almost all tasks would have a spike before it became an actual task where we were supposed to detail and document the way we were going to implement the feature.
      4. Data oriented decisions, we had a BI dashboard created by a data scientist on the team which we would weekly check in order to understand where we were in terms of users and numbers and to plan our next milestones;
      5. Extremely strict rollback policies: Every deploy into production should have a carefully planned rollback strategy;
      6. We used NASDAQ as our partner to make the trades, thus this was a crucial part of the system.
      Main contributions:`,
      "keyAchievements": `Created an inner source project that solved an inherent issue with our distributed systems, thus saving around 100k yearly for the company which did not have to hire an external solution.
      Part of the founding team of a new product, XTage, a Crypto online exchange, thus having a lot of responsibility in mentoring new members even those who were more senior than me since I had knowledge over all the architecture.
      Stack: Typescript, NestJs, NextJs, Python, Kafka, C#, HTML, CSS, Azure DevOps, Azure Pipelines (CI, CD), MySQL`,
      "startYear": "2022-01-01",
      "endYear": "present"
    },
    {
      "company": "Nata.House",
      "position": "Full stack Developer Intern",
      "description": `Provides specialization primarily in software products, in either business or consumer software based on the needs of their client base and structure for a software release. During this job I worked mainly in 2 projects: Resale: Online marketplace for real estate properties; UCrypto: Online whitelabel bank and financial services.      Both projects included:
      1. More complex CRUD operations;
      2. Specific and complex business logic to be converted into code;
      3. Mono repo structure with well organized modules, packages and responsibilities; Main contributions: `,
      "keyAchievements": `Head of a big refactor on one of the projects, bringing more organization and productivity to the team.
      Stack: Typescript, NestJs, NextJs, Pythont, HTML, CSS, Postgres`,
      "startYear": "2020-01-01",
      "endYear": "2022-01-01"
    }
  ],
  projects: [
    {
      "name": "Ficus Green",
      "startYear": "2020-01-01",
      "endYear": "2022-01-01",
      "link": "https://ficus.green/au",
      "description": `Automated greenhouse. Leveraging IoT technologies.
      Main Contribution: Coded core back end.
      Stack: Typescript, NestJs, Go, C++`
    },
    {
      "name": "Whatzup",
      "startYear": "2018-01-01",
      "endYear": "2020-01-01",
      "link": "https://www.whatzup.tech/",
      "description": `Whatsapp bot creator with automated messaging and whatsapp integration
      Main Contribution: Coded core system.
      Stack: Typescript, NestJs, NextJs`
    }
  ],
  skills: [
    {
      title: "Technical Skills",
      skills: [
        "JavaScript", "Python", "Web Services", "C#",
        "HTML5", "CSS", "SQL", "NoSQL", "Postgres",
        "Typescript", "NextJs", "NestJs", "ReactJs",
        "AngularJs", "NodeJs", "Kafka", "Azure", "Git",
        "Azure DevOps", "Azure Pipelines (CI, CD)", "Github Actions (CI, CD)",
        "BullMQ"
      ]
    },
    {
      title: "Soft Skills",
      skills: [
        "Collaboration", "Problem-solving",
        "Communication", "Time management",
        "Result-oriented", "Leadership"
      ]
    },
    {
      title: "Additional Skills",
      skills: [
        "Public Speaking", "Writing", "Research"
      ] 
    }
  ],
  languages: [
    "English",
    "Portuguese",
    "Italian",
    "Spanish"
  ],
  certifications: [
    "Certified Web Professional-Web Developer (Trybe)",
  ],
};

export default DefaultResumeData;