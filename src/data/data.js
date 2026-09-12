export const about = {
    name: "Adam Essaidi",
    brand: "QuietFolio",
    role: "Software Engineer · Full-Stack Developer",
    headline: "Building reliable web applications and information systems.",
    about:
        "Software Engineer and Full-Stack Developer with over three years of experience building web applications and information systems. I have delivered solutions for Moroccan public institutions, with a focus on .NET, Spring Boot, Angular, React, and microservices architectures.",
    email: "adam.essaidi01@gmail.com",
    location: "Rabat, Morocco",
};

export const seo = {
    title: `${about.name} | Full-Stack Software Engineer`,
    description:
        "Portfolio of Adam Essaidi, a full-stack software engineer in Rabat specializing in .NET, Spring Boot, Angular, React, and scalable information systems.",
    keywords: [
        "Adam Essaidi",
        "software engineer",
        "full-stack developer",
        ".NET developer",
        "Java developer",
        "Angular developer",
        "Rabat Morocco",
    ],
};

export const socials = {
    github: "https://github.com/AdamEssaidi",
    linkedin: "https://www.linkedin.com/in/adam-essaidi",
    email: `mailto:${about.email}`,
};

export const projects = {
    pinProjects: [
        {
            title: "NIBRAS",
            organization: "Hassan II University of Casablanca",
            description:
                "Contributing to an academic information system through Spring Boot microservices, REST APIs, modern web interfaces, and PostgreSQL-backed services.",
            tags: ["Java", "Spring Boot", "Angular", "React", "PostgreSQL"],
        },
        {
            title: "SMIV",
            organization: "ONSSA",
            description:
                "Built and maintained veterinary information management features, connecting ASP.NET Core services with reliable SQL Server data workflows.",
            tags: ["C#", "ASP.NET Core", "SQL Server", "REST APIs"],
        },
        {
            title: "Référentiel SIG",
            organization: "Ministry of Equipment and Water",
            description:
                "Developed a reference-data platform that synchronizes information across SQL Server, PostgreSQL, and Oracle environments.",
            tags: [".NET", "SQL Server", "PostgreSQL", "Oracle"],
        },
    ],
    otherProjects: [
        {
            title: "Badre22",
            organization: "Ministry of Equipment and Water",
            description:
                "Worked on data and analytics modules that support operational reporting and informed decision-making.",
            tags: ["ASP.NET Core", "C#", "SQL Server", "Analytics"],
        },
        {
            title: "Massar",
            organization: "Ministry of Education",
            description:
                "Delivered business modules for Morocco's education management platform using ASP.NET Core, Angular, and SQL Server.",
            tags: ["ASP.NET Core", "Angular", "SQL Server", "REST APIs"],
        },
        {
            title: "Adoul Acts Portal",
            organization: "Ministry of Justice",
            description:
                "Designed and implemented user-facing workflows for an information-system portal, with an emphasis on clear and dependable UX.",
            tags: ["Angular", "ASP.NET Core", "UI/UX", "SQL Server"],
        },
    ],
};

export const experience = [
    {
        company: "ALEXSYS Solutions",
        role: "Full-Stack Developer",
        period: "Oct 2025 - Present",
        description:
            "Contributing to NIBRAS for Hassan II University of Casablanca, developing Spring Boot microservices, REST APIs, PostgreSQL services, and Angular and React interfaces.",
        stack: ["Java", "Spring Boot", "Angular", "React", "PostgreSQL"],
    },
    {
        company: "Maroc Ingenov",
        role: ".NET Developer",
        period: "Mar 2024 - Oct 2025",
        description:
            "Delivered public-sector systems including ONSSA's SMIV platform, a multi-database GIS reference system, and Badre22 data and analytics modules.",
        stack: ["ASP.NET Core", "C#", "SQL Server", "PostgreSQL", "Oracle"],
    },
    {
        company: "Netopia Solutions",
        role: "Web Developer (.NET)",
        period: "Nov 2022 - Mar 2024",
        description:
            "Built Massar business modules, migrated and optimized a mail management system, and improved the user experience of the Adoul Acts portal.",
        stack: ["ASP.NET Core", "Angular", "SQL Server", "REST APIs"],
    },
    {
        company: "Le Premier Système",
        role: "Junior Developer Intern",
        period: "May 2022 - Jul 2022",
        description:
            "Developed web and desktop applications, including an RFID-based stock management system.",
        stack: ["Web Applications", "Desktop Applications", "RFID"],
    },
    {
        company: "Yanconnect",
        role: "Freelance WordPress Developer",
        period: "2021 - 2022",
        description:
            "Created e-commerce websites, improved search visibility, and handled practical server configuration for remote clients.",
        stack: ["WordPress", "E-commerce", "SEO", "Server Configuration"],
    },
];

export const skillGroups = [
    {
        title: "Languages",
        items: ["C#", "Java", "JavaScript"],
    },
    {
        title: "Backend",
        items: ["ASP.NET Core", ".NET", "Spring Boot", "REST APIs", "Microservices"],
    },
    {
        title: "Frontend",
        items: ["Angular", "React", "Bootstrap"],
    },
    {
        title: "Databases",
        items: ["SQL Server", "PostgreSQL", "Oracle"],
    },
    {
        title: "Tools",
        items: ["Git", "Docker", "Postman", "Figma"],
    },
];

export const education = [
    {
        degree: "Master's in Software Engineering & Information Systems Management",
        school: "ENSA Kénitra",
        period: "2023 - 2025",
    },
    {
        degree: "Professional Bachelor's in Computer Engineering",
        school: "EST Kénitra",
        period: "2021 - 2022",
    },
    {
        degree: "Specialized Technician Diploma in IT Development",
        school: "ISTA Rabat",
        period: "2019 - 2021",
    },
];

export const languages = [
    { name: "Arabic", level: "Native" },
    { name: "French", level: "Intermediate" },
    { name: "English", level: "Professional" },
];

export const strengths = [
    "Advanced debugging and troubleshooting",
    "Complex problem solving",
    "Performance optimization",
    "Scalable system design",
    "Software architecture",
];
