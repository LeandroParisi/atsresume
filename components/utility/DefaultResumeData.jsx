const DefaultResumeData = {
  name: "Leandro Parisi",
  position: "BackEnd Developer",
  contactInformation: "+55 31 997794403",
  email: "lepcbelisario@gmail.com",
  address: "Minas Gerais, Brazil",
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
  summary: "I identify a problem, I solve it, not just tech ones. Working in tech since 2017. Open source contributor.",
  education: [
    {
      "school": "UFMG",
      "degree": "Bachelor of Computer Science",
      "startYear": "2013-01-01",
      "endYear": "2017-12-01"
    },
  ],
  workExperience: [
    {
      "company": "Systems Lab 21",
      "position": "Full Stack Developer",
      "description": `We provide IT-Systems Engineering for Digital Railways. Our mission is to
      make railways in Germany and Europe more efficient and reliable. One goal
      is the digitization and standardization of railway infrastructure. We partner
      with infrastructure.`,
      "keyAchievements": `Main Contribution: Implemented and restructure code base applying best practices and increasing code quality.
      Established and lead a team of 2 people; covering every key role in the early stages.
      About the contributions above:
      1. When I started on this job we had a code base which was built as a MVP, meaning it was not applying the best practices due to time to market. Once I started working I have rewritten a lot of the code in order to improve it's maintainability. One example of this is: There is a database which was being created from excel sheets and the data was not normalized nor cleaned meaning that all queries into the database would returned dirty data which would then be cleaned using regexes. I have created a proper migration structure in order to import and seed the database from the excel sheets, applying proper data normalization and cleaning to the data.
      2. The company in on the forefront of the implementation of a new protocol and convention on the industry called Eulynx. This convention is supposed to padronize and increase safety to all the railway industry in Europe but it is still on it's early stages and our company is one of the first ones to implement this, so my role is to bring these new practices and protocol to our clients, proposing new code structures and refactors to their code base so that they become Eulynx compliant.
      Created architecture of the core system.
      Stack: NextJs, React, C#, HTML, CSS, Kafka, Azure DevOps, Terraform, Github Workflow (CI, CD), Postgres`,
      "startYear": "2023-01-01",
      "endYear": "present"
    },
    {
      "company": "Vrolio Investr",
      "position": "Full Stack Developer Tech Lead",
      "description": "Vrolio provides the highest standard, investment-grade short-term rental\ndata that powers the investment decisions of thousands of STR investors\nand agents across the US.",
      "keyAchievements": `Main Contribution: Created and implemented architecture of back end using concepts of Distributed system and queuing thus increasing it's performance by an average of 50% and allowing for huge data ingestion
      Increased performance of front end app by 80%
      Established and lead a team of 2 people; covering every key role in the early stages.
      About the main contributions above:
      1. We have some performance issues which I knew could be solved with either breaking some parts of the code into micro services or applying an async / queue processing. This meant pinpointing crucial parts of the system which were responsible for processing huge amounts of data in synchronous ways (HTTP request) and breaking them down into queues or micro services. This way some of those operations and routines which would take about 1 to 2 min to be processed on a synchronous call would be then processed in about 30 seconds.
      2. Some pages of the application would required a huge aggregation to be done on the backend, and further more after the aggregation was done there was some operations that had to be done on each of the lines returned from the database (about 10.000 lines) and... some of those operations further required another call to the database. But, most of the calls to this endpoint would normally have the same parameters. So I have applied 2 strategies: 1. Caching of some crucial data. 2. Creation of roolup tables to reduce the number of join on the database. Thus improving performance.
      3. As a leader I had a crucial role helping the team members understand the features that were to be implemented and how to implement them.
      Stack: Typescript, NestJs, NextJs, Python, Kafka, BullMQ, HTML, CSS, Python, Postgres`,
      "startYear": "2022-01-01",
      "endYear": "2023-01-01"
    },
    {
      "company": "Metrobi",
      "position": "Front end Tech Lead",
      "description": "Metrobi aims to support local food and beverage makers with logistics, financial, and marketing tools and help them expand their distribution businesses.",
      "keyAchievements": `Main Contribution: 
      1. Lead a team of 4 people, reorganizing team and rituals thus increasing productivity by 20%
      2. Restructured front end app applying a consistent architecture pattern for junior developers to follow.
      About the main contributions above I can highlight:
      1. As a leader I was responsible for: Teaching and mentoring junior developers; Apply and lead all relevant scrum rituals.
      2. The 20% productivity boost was achieved by applying all the scrum rituals (which were not being used before I entered the team); implementing a proper and organized Q&A pipeline in order to reduce the number of times a task would be moved from 'testing' into 'development' stage; Creating a proper and organized bug report system with a Jira board created with specific automations and trigger where the ops team could report their bugs to the dev team in a structured way and we (dev team) had a strict method to prioritize and tackle each bug.
      3. About the architecture patterns applied: The code base was overall pretty disorganized, there was no patterns for building components, stores, etc. which were applied consistently. This caused each component / store to be created in a different way, thus increasing the overhead for new members and even current members of the team everytime they stumbled upon a different pattern in the code. I have standardized many of these elements and have created documentations to encourage the team to follow those patterns.
      Stack: Typescript, NestJs, NextJs, Python, HTML, CSS, MongoDB, Firebase`,
      "startYear": "2021-06-01",
      "endYear": "2022-01-01"
    },
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
      6. We used NASDAQ as our partner to make the trades, thus this was a crucial part of the system.`,
      "keyAchievements": `Main contribution: 
      1. Created an inner source project that solved an inherent issue with our distributed systems, thus saving around 100k yearly for the company which did not have to hire an external solution.
      2. Part of the founding team of a new product, XTage, a Crypto online exchange, thus having a lot of responsibility in mentoring new members even those who were more senior than me since I had knowledge over all the architecture.
      Stack: Typescript, NestJs, NextJs, Python, Kafka, C#, HTML, CSS, Azure DevOps, Azure Pipelines (CI, CD), MySQL`,
      "startYear": "2019-06-01",
      "endYear": "2021-06-01"
    },
    {
      "company": "Nata.House",
      "position": "Full stack Developer",
      "description": "Provides specialization primarily in software products, in either business or consumer software based on the needs of their client base and structure for a software release.",
      "keyAchievements": `Main contributions: Head of a big refactor on one of the projects, bringing
      more organization and productivity to the team.
      During this job I worked mainly in 2 projects:
      1. Resale: Online marketplace for real estate properties;
      2. UCrypto: Online whitelabel bank and financial services;
      Both projects included:
      1. More complex CRUD operations;
      2. Specific and complex business logic to be converted into code;
      3. Mono repo structure with well organized modules, packages and responsibilities;
      Stack: Typescript, NestJs, NextJs, Pythont, HTML, CSS, Postgres`,
      "startYear": "2018-01-01",
      "endYear": "2019-06-01"
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