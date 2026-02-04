// Mock data for the web developer portfolio

export const portfolioData = {
    personal: {
        name: "Avinash Singh",
        title: "Full-Stack Web Developer",
        tagline: "Crafting Digital Experiences with Code & Creativity",
        bio: "Passionate full-stack developer with 5+ years of experience building scalable web applications. I specialize in React, Node.js, and modern web technologies, transforming ideas into powerful digital solutions.",
        email: "Avinash.Singh2020@yahoo.com",
        phone: "+91-8770880768",
        location: "Jawahar Marg, Indore, M.P. 452001",
        resume: "./resume.doc",
        social: {
            github: "https://github.com/Avinash-Singh1993",
            linkedin: "https://www.linkedin.com/in/avinash-singh-22a0b697/",
            twitter: "https://x.com/Avinash362263",
            portfolio: ""
        }
    },

    seo: {
        title: 'Avinash Singh - Portfolio',
        description: 'Portfolio of Avinash Singh, a Web Developer specializing in React and Node.js.',
        keywords: 'Avinash Singh, Web Developer, React, Node.js, Portfolio, Frontend, Backend, Full Stack',
        name: 'Avinash Singh',
        type: 'website'
    },

    skills: {
        frontend: [
            { name: "HTML5", level: 92, category: "Frontend" },
            { name: "CSS3", level: 90, category: "Frontend" },
            { name: "JavaScript", level: 85, category: "Frontend" },
            { name: "jQuery", level: 82, category: "Frontend" },
            { name: "Bootstrap", level: 82, category: "Frontend" },
            { name: "Tailwind CSS", level: 92, category: "Frontend" },
            { name: "React", level: 85, category: "Frontend" },
            { name: "GSAP", level: 82, category: "Frontend" },
            { name: "Framer Motion", level: 84, category: "Frontend" },
        ],
        backend: [
            { name: "Node.js", level: 86, category: "Backend" },
            { name: "Express.js", level: 81, category: "Backend" },
            { name: "MongoDB", level: 64, category: "Backend" },
            { name: "PHP", level: 81, category: "Backend" },
            { name: "SQL", level: 82, category: "Backend" },
            { name: "Python", level: 83, category: "Backend" },
            { name: "Django", level: 67, category: "Backend" },
        ],
        tools: [
            { name: "Git / Github", level: 82, category: "Tools" },
            { name: "Postman", level: 92, category: "Tools" },
            { name: "Figma", level: 90, category: "Tools" },
            { name: "Canva", level: 90, category: "Tools" },
            { name: "Adobe PhotoShop", level: 75, category: "Tools" },
            { name: "Adobe Illustrator", level: 71, category: "Tools" },
            { name: "AWS-EC2", level: 70, category: "Tools" },
        ]
    },

    projects: [
        {
            id: 1,
            title: "E-commerce Platform",
            description: "A full-stack e-commerce solution with React frontend, Node.js backend, and integrated payment processing.",
            image: "https://images.unsplash.com/photo-1603985585179-3d71c35a537c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDF8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMHdvcmtzcGFjZXxlbnwwfHx8fDE3NTc1ODgxNjN8MA&ixlib=rb-4.1.0&q=85",
            technologies: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
            liveUrl: "https://ecommerce-demo.dev",
            githubUrl: "https://github.com/alexrodriguez/ecommerce-platform",
            featured: true,
            category: "Full-Stack"
        },
        {
            id: 2,
            title: "Task Management App",
            description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
            image: "https://images.unsplash.com/photo-1663882658055-40f1d4249867?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDF8MHwxfHNlYXJjaHwyfHx3ZWIlMjBkZXZlbG9wbWVudCUyMHdvcmtzcGFjZXxlbnwwfHx8fDE3NTc1ODgxNjN8MA&ixlib=rb-4.1.0&q=85",
            technologies: ["React", "TypeScript", "Socket.io", "Express", "PostgreSQL"],
            liveUrl: "https://taskmaster-demo.dev",
            githubUrl: "https://github.com/alexrodriguez/task-management",
            featured: true,
            category: "Full-Stack"
        },
        {
            id: 3,
            title: "Portfolio Website",
            description: "A responsive portfolio website with GSAP animations, dark theme, and optimized performance.",
            image: "https://images.unsplash.com/photo-1658053283477-b985256569bc?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDF8MHwxfHNlYXJjaHwzfHx3ZWIlMjBkZXZlbG9wbWVudCUyMHdvcmtzcGFjZXxlbnwwfHx8fDE3NTc1ODgxNjN8MA&ixlib=rb-4.1.0&q=85",
            technologies: ["React", "GSAP", "Tailwind CSS", "Framer Motion"],
            liveUrl: "https://portfolio-demo.dev",
            githubUrl: "https://github.com/alexrodriguez/portfolio",
            featured: false,
            category: "Frontend"
        },
        {
            id: 4,
            title: "Weather Dashboard",
            description: "A beautiful weather dashboard with location-based forecasts, interactive charts, and responsive design.",
            image: "https://images.unsplash.com/photo-1532623034127-3d92b01fb3c5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDF8MHwxfHNlYXJjaHw0fHx3ZWIlMjBkZXZlbG9wbWVudCUyMHdvcmtzcGFjZXxlbnwwfHx8fDE3NTc1ODgxNjN8MA&ixlib=rb-4.1.0&q=85",
            technologies: ["Vue.js", "Chart.js", "OpenWeather API", "CSS3"],
            liveUrl: "https://weather-dashboard-demo.dev",
            githubUrl: "https://github.com/alexrodriguez/weather-dashboard",
            featured: false,
            category: "Frontend"
        },
        {
            id: 5,
            title: "API Gateway Service",
            description: "A scalable API gateway with rate limiting, authentication, and microservices integration.",
            image: "https://images.unsplash.com/photo-1711599813951-89297e6201a8?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjB3b3Jrc3BhY2V8ZW58MHx8fHwxNzU3NTE2Njk3fDA&ixlib=rb-4.1.0&q=85",
            technologies: ["Node.js", "Express", "Redis", "JWT", "Docker"],
            liveUrl: null,
            githubUrl: "https://github.com/alexrodriguez/api-gateway",
            featured: true,
            category: "Backend"
        },
        {
            id: 6,
            title: "Chat Application",
            description: "Real-time chat application with rooms, file sharing, and message encryption.",
            image: "https://images.unsplash.com/photo-1657972170499-3376d9eb8f65?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHwyfHxjb2RpbmclMjB3b3Jrc3BhY2V8ZW58MHx8fHwxNzU3NTE2Njk3fDA&ixlib=rb-4.1.0&q=85",
            technologies: ["React", "Socket.io", "Node.js", "MongoDB", "WebRTC"],
            liveUrl: "https://chat-demo.dev",
            githubUrl: "https://github.com/alexrodriguez/chat-app",
            featured: false,
            category: "Full-Stack"
        }
    ],

    services: [
        {
            id: 1,
            title: "Frontend Development",
            description: "Creating responsive, interactive, and performant user interfaces using modern frameworks like React, Next.js, and vanilla JavaScript.",
            icon: "Code",
            features: ["Responsive Design", "Performance Optimization", "SEO Friendly", "Cross-browser Compatibility", "Accessibility (A11y)"],
            price: "Starting at 4,000 INR"
        },
        {
            id: 2,
            title: "Backend Development",
            description: "Building robust server-side applications, APIs, and database architectures that scale with your business needs.",
            icon: "Server",
            features: ["RESTful APIs", "Database Design", "Authentication Systems", "Cloud Integration"],
            price: "Starting at 6,000 INR"
        },
        {
            id: 3,
            title: "Full-Stack Solutions",
            description: "Complete web application development from concept to deployment, handling both frontend and backend requirements.",
            icon: "Globe",
            features: ["End-to-end Development", "Database Integration", "Third-party APIs", "Deployment & Hosting"],
            price: "Starting at 12,000 INR"
        },
        {
            id: 4,
            title: "UI/UX Consultation",
            description: "Providing design guidance and user experience optimization to create intuitive and engaging digital products.",
            icon: "Palette",
            features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
            price: "Starting at 2,500 INR"
        }
    ],

    testimonials: [
        {
            id: 1,
            name: "Rohini Chandanwala",
            role: "Head of Human Resources",
            company: "Samyak Institute, Indore",
            content:
                "Avinash brought a fresh, practical approach to training. His real-world development knowledge, clean coding practices, and interactive teaching style helped our students truly understand modern web development.",
            rating: 4.4,
            image: "https://randomuser.me/api/portraits/women/1.jpg",
        },
        {
            id: 2,
            name: "Pradeep Kumar Mane",
            role: "Plant Manager",
            company: "Pack Universe (MMIPL)",
            content:
                `Thanks to Avinash’s proactive coordination and inventory tools, our store operations became smoother and more efficient. His Excel trackers and MIS reports saved hours of manual effort each week.`,
            rating: 4.3,
            image: "https://randomuser.me/api/portraits/men/48.jpg",
        },
        {
            id: 3,
            name: "Priyanka Taneja",
            role: "Head of Human Resources",
            company: "SMS-Gateway-Hub",
            content:
                "Avinash consistently delivers polished, high-performance UI and clean code. His ability to bridge design and development has significantly improved our digital brand presence.",
            rating: 4.5,
            image: "https://randomuser.me/api/portraits/women/15.jpg",
        },
    ],

    experience: [
        {
            id: 1,
            company: "SMSGatewayHub",
            role: "Web Developer & Graphic Designer",
            duration: "Mar 2025 - Sept 2025",
            location: "Mhow Naka Square, Indore (M.P.)",
            description:
                "Building and designing scalable, intuitive web applications while aligning engineering and brand goals. Bridges code and design to ship fast, polished experiences.",
            technologies: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS", "Figma", "Photoshop", "Illustrator", "Canva"],
            achievements: [
                "Shipped reusable UI components and dashboards with performance and accessibility in mind",
                "Standardized design patterns and handoff between dev and design",
                "Optimized key pages for faster load and improved UX"
            ]
        },
        {
            id: 2,
            company: "Samyak Institute, Indore (Annapurna Branch)",
            role: "Software Trainer & Software Developer",
            duration: "Aug 2024 - Feb 2025",
            location: "Indore (M.P.)",
            description:
                "Taught core CS and modern web development from basics to production, and built demo apps/internal tools to support learning outcomes.",
            technologies: ["C/C++", "Python", "HTML", "CSS", "JavaScript", "jQuery", "Bootstrap", "Tailwind CSS", "SQL", "React", "Express.js", "Node.js", "MongoDB"],
            achievements: [
                "Designed structured, project-first curriculum with clean code practices",
                "Mentored learners to ship working applications end-to-end",
                "Developed example projects demonstrating scalable patterns"
            ]
        },
        {
            id: 3,
            company: "Pack Universe (MMIPL)",
            role: "Assistant Store Manager & Store Assets Coordinator",
            duration: "Oct 2022 - Jul 2024",
            location: "Pithampur, Dhar Road (M.P.)",
            description:
                "Handled inventory control, GRN/dispatch documentation, stock reconciliations, and MIS reporting while streamlining store operations.",
            technologies: ["MS Excel", "Google Sheets", "SAP ERP", "Barcode/Inventory Tools"],
            achievements: [
                "Maintained accurate stock records and improved reconciliation cadence",
                "Created Excel trackers that reduced manual effort and errors",
                "Supported procurement and dispatch coordination with on-time reporting"
            ]
        },
        {
            id: 4,
            company: "Golden Treat Hotel",
            role: "Head Cashier & AGM (Assistant General Manager)",
            duration: "Mar 2019 - Mar 2020",
            location: "Bhanwar-Kuwa, Indore (M.P.)",
            description:
                "Led front-office cashiering and supported day-to-day hotel operations, including event billing, audits, and coordination with F&B/housekeeping.",
            technologies: ["POS Systems", "MS Excel", "Billing & Reconciliation"],
            achievements: [
                "Implemented tighter cash controls and shift SOPs",
                "Improved audit readiness and reduced billing discrepancies",
                "Coordinated cross-department workflows for smoother guest experience"
            ]
        },
        {
            id: 5,
            company: "Balraj Retreat",
            role: "Head Cashier & Supervisor",
            duration: "Sep 2018 - Mar 2019",
            location: "Khandwa Road, Choral Gwaloo Village, Gavhalu (M.P.)",
            description:
                "Supervised cashiering operations, managed floats and shift handovers, and ensured accurate end-of-day reconciliation and reporting.",
            technologies: ["POS Systems", "MS Excel"],
            achievements: [
                "Introduced handover checklists to reduce shift variance",
                "Streamlined guest billing and payment settlement process",
                "Improved vendor invoice tracking and record-keeping"
            ]
        },
        {
            id: 6,
            company: "Hotel Satkar (Indore)",
            role: "Cashier",
            duration: "Mar 2017 - Feb 2018",
            location: "Khandwa Road, Indore (M.P.)",
            description:
                "Handled daily billing, cash/UPI/card settlements, and end-of-day reporting with accurate reconciliation.",
            technologies: ["POS Systems"],
            achievements: [
                "Consistently balanced cash drawers and EOD reports",
                "Maintained accurate records for audits and management reviews",
                "Delivered prompt and courteous billing experience to guests"
            ]
        },
        {
            id: 7,
            company: "Bhargav & Associates (High Court Advocate)",
            role: "Back Office Assistant",
            duration: "Apr 2014 - Sep 2018",
            location: "High Court, Indore (M.P.)",
            description:
                "Supported legal operations including case file preparation, documentation, scheduling, and basic research; maintained orderly records and hearing calendars.",
            technologies: ["MS Word", "MS Excel", "Scanning/Printing", "e-Court Portals"],
            achievements: [
                "Standardized document templates and improved file tracking",
                "Ensured timely submissions and well-organized case records",
                "Coordinated with clients and chambers for smooth hearings"
            ]
        },
        {
            id: 8,
            company: "TDS Infra Estate Developers Pvt. Ltd. (NBFC)",
            role: "Back Office Assistant",
            duration: "Mar 2013 - Feb 2016",
            location: "Transport Nagar, Indore (M.P.)",
            description:
                "Managed back-office workflows for an NBFC: customer documentation/KYC, data entry, ledgers, and MIS reporting; supported finance ops with clean, timely data.",
            technologies: ["MS Excel", "POS-Finance Integration (Badshah Software)", "Document Management"],
            achievements: [
                "Improved data hygiene and documentation turnaround",
                "Built spreadsheet trackers for status and reconciliation",
                "Supported audits with organized records and reports"
            ]
        }
    ]
};

export default portfolioData;