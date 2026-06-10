import img1 from "../img1.png"
import img2 from "../img2.png"
import img3 from "../img3.png"

export const projects = [
  {
    id: 1,
    title: "PERSONAL SITE",
    subtitle: "Interactive Portfolio",
    category: "Frontend Development",
    shortDescription:
      "Created a responsive personal site with animated UI components to enhance user engagement",
    fullDescription:
      "A modern, fully responsive personal portfolio website designed to showcase my work and skills. This project demonstrates my front-end development expertise with smooth animations, glass-morphism design elements, and an intuitive user experience. Built with a focus on performance and accessibility.",
    images: [img1, img1, img1],
    tech: ["React", "Vite", "CSS3", "JavaScript", "AOS Animations"],
    techIcons: ["⚛️", "⚡", "🎨", "✨", "🎭"],
    features: [
      "Fully responsive design (mobile, tablet, desktop)",
      "Smooth scroll animations with AOS library",
      "Glass-morphism UI components",
      "Dynamic navigation with smooth transitions",
      "Performance optimized with Vite"
    ],
    challenges: [
      "Creating smooth animations without impacting performance",
      "Implementing responsive design across all device sizes",
      "Optimizing loading times for smooth scrolling effects"
    ],
    role: "Frontend Developer",
    links: {
      live: "https://fatmaaldaly.github.io/personal-site/",
      github: "https://github.com/fatmaaldaly/personal-site"
    }
  },
  {
    id: 2,
    title: "CRM PRO",
    subtitle: "Enterprise Lead Management System",
    category: "Full Stack Development",
    shortDescription:
      "Built a CRM system with role-based access, lead management, activity tracking, and reminders. Integrated AI features for lead insights and call follow-ups with structured, actionable outputs.",
    fullDescription:
      "A comprehensive CRM platform designed for sales teams to manage leads efficiently. Features role-based access control, advanced lead management, activity tracking, reminder systems, and AI-powered insights. The system leverages AI to provide intelligent lead recommendations and automated call follow-up summaries, helping teams optimize their sales pipeline.",
    images: [img2, img2, img2],
    tech: ["React", "Node.js", "MongoDB", "Express", "AI Integration", "Tailwind CSS"],
    techIcons: ["⚛️", "🟩", "📦", "🚀", "🤖", "🎨"],
    features: [
      "Role-based access control with multiple user tiers",
      "Advanced lead management and pipeline tracking",
      "Real-time activity logging and notes",
      "AI-powered lead insights and recommendations",
      "Automated call follow-up summaries",
      "Customizable reminders and notifications",
      "Dashboard with key metrics and analytics",
      "Team collaboration features"
    ],
    challenges: [
      "Integrating AI APIs with complex data processing",
      "Managing role-based access permissions securely",
      "Handling real-time data updates and synchronization",
      "Building scalable database architecture for large datasets"
    ],
    role: "Full-Stack Developer & AI Integration Specialist",
    links: {
      live: "https://crm-pro-hazel.vercel.app/",
      github: "https://github.com/fatmaaldaly/CRMPro"
    }
  },
  {
    id: 3,
    title: "TASK MANAGER",
    subtitle: "Productivity & Task Organization",
    category: "Frontend Development",
    shortDescription:
      "Built a task management app that allows users to add, complete, and delete tasks. Implemented a clean UI and interactive state management for seamless task tracking.",
    fullDescription:
      "A sleek task management application designed for individuals and teams to organize their daily workflow. The app features intuitive task creation, status updates, and deletion with a clean, modern interface. Built with React's state management for smooth, real-time interactions and persistence.",
    images: [img3, img3, img3],
    tech: ["React", "JavaScript", "Local Storage", "CSS3", "Component Architecture"],
    techIcons: ["⚛️", "✨", "💾", "🎨", "🧩"],
    features: [
      "Add, edit, and delete tasks in real-time",
      "Mark tasks as complete with visual feedback",
      "Persistent storage using Local Storage",
      "Clean, intuitive user interface",
      "Smooth transitions and micro-interactions",
      "Fully keyboard accessible",
      "Mobile-friendly design"
    ],
    challenges: [
      "Implementing efficient state management",
      "Ensuring data persistence across sessions",
      "Creating a minimalist yet functional UI",
      "Optimizing re-renders for performance"
    ],
    role: "Frontend Developer",
    links: {
      live: "#",
      github: "#"
    }
  }
];

