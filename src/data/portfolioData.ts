import profileImg from "@/assets/profile.jpg";
import project1 from "@/assets/project1.png";
import project2 from "@/assets/project2.jpeg";
import onway from "@/assets/onway.png";
import project3 from "@/assets/project3.jpeg";
import project4 from "@/assets/project4.jpg";
import project5 from "@/assets/project5.jpg";
import project6 from "@/assets/project6.jpg";

export const profileImage = profileImg;

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  challenges: string[];
  improvements: string[];
  fullDescription: string;
}

export const projects: Project[] = [
{
  id: "Onway-Ride-Sharing-Platform",
  title: "Onway Ride Sharing Platform",
  description: "A full-stack ride-sharing platform with real-time tracking, secure authentication, and digital payment integration.",
  image: onway,
  technologies: ["Next.js", "Node.js", "Express.js", "MongoDB", "NextAuth.js", "JWT", "SSLCommerz"],
  liveUrl: "https://onway-5g8a.onrender.com",
  githubUrl: "https://github.com/username/onway-rides",
  challenges: [
    "Implementing real-time GPS tracking for rides",
    "Ensuring secure authentication with OTP and JWT",
    "Building a reliable fare estimation system",
    "Integrating smooth in-app chat and call features"
  ],
  improvements: [
    "Add AI-based driver-passenger matching system",
    "Implement ride scheduling feature",
    "Enhance map performance and route optimization",
    "Develop mobile apps for Android and iOS"
  ],
  fullDescription: "Onway is a full-stack ride-sharing platform designed to provide a seamless and secure transportation experience. Users can book rides instantly, track drivers in real-time, and make digital payments. The platform includes advanced features like OTP verification, KYC, face verification, in-app communication, and promo code support to ensure safety, convenience, and reliability."
},
  {
    id: "localchef-bazaar",
    title: "LocalChef Bazaar",
    description: "A food ordering platform connecting users with local home chefs for fresh homemade meals.",
    image: project1,
    technologies: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
    liveUrl: "https://dynamic-halva-2b4012.netlify.app",
    githubUrl: "https://github.com/Istheaksayem/local-chef-bazar-client",
    challenges: [
      "Implementing real-time order tracking system",
      "Building a scalable chef rating and review system",
      "Handling complex payment integrations"
    ],
    improvements: [
      "Add AI-powered meal recommendations",
      "Implement subscription-based meal plans",
      "Mobile app development for better user experience"
    ],
    fullDescription: "LocalChef Bazaar is a comprehensive food ordering platform that bridges the gap between local home chefs and food enthusiasts. The platform features a user-friendly interface for browsing daily meals, chef profiles, and seamless ordering experience. Built with modern web technologies, it offers real-time updates, secure payments, and a robust rating system."
  },
  {
    id: "freelance-marketplace",
    title: "Freelance MarketPlace",
    description: "A modern job board and freelance marketplace for hiring talent and finding opportunities.",
    image: project2,
    technologies: ["React", "Next.js", "PostgreSQL", "Prisma", "Stripe"],
    liveUrl: "https://dapper-buttercream-10e70b.netlify.app",
    githubUrl: "https://github.com/Istheaksayem/local-chef-bazar-client",
    challenges: [
      "Building a sophisticated search and filter system",
      "Implementing secure escrow payment system",
      "Creating an efficient matching algorithm for jobs and freelancers"
    ],
    improvements: [
      "AI-powered job matching",
      "Video interview integration",
      "Skill verification and certification system"
    ],
    fullDescription: "A full-featured freelance marketplace platform similar to Upwork and Fiverr. Features include job posting, proposal submission, milestone-based payments, real-time messaging, and comprehensive dashboards for both clients and freelancers. The platform emphasizes user experience and security."
  },

  // {
  //   id: "crypto-trading-dashboard",
  //   title: "Crypto Trading Dashboard",
  //   description: "A real-time cryptocurrency trading dashboard with advanced analytics and charting.",
  //   image: project4,
  //   technologies: ["React", "TypeScript", "WebSocket", "Chart.js", "TailwindCSS"],
  //   liveUrl: "https://crypto-dashboard.example.com",
  //   githubUrl: "https://github.com/username/crypto-dashboard",
  //   challenges: [
  //     "Handling high-frequency real-time data updates",
  //     "Building responsive and interactive charts",
  //     "Optimizing performance for large datasets"
  //   ],
  //   improvements: [
  //     "Add automated trading strategies",
  //     "Implement portfolio risk analysis",
  //     "Social trading features"
  //   ],
  //   fullDescription: "A sophisticated cryptocurrency trading dashboard featuring real-time market data, advanced charting tools, and portfolio management. The application connects to multiple exchanges via WebSocket for live price updates and includes technical analysis indicators."
  // },
  // {
  //   id: "chat-application",
  //   title: "Real-time Chat App",
  //   description: "A modern real-time messaging application with rich media support and encryption.",
  //   image: project5,
  //   technologies: ["React", "Socket.io", "Node.js", "MongoDB", "Redis"],
  //   liveUrl: "https://chat-app.example.com",
  //   githubUrl: "https://github.com/username/chat-app",
  //   challenges: [
  //     "Implementing end-to-end encryption",
  //     "Building efficient message delivery system",
  //     "Handling media uploads and processing"
  //   ],
  //   improvements: [
  //     "Add video calling functionality",
  //     "Implement message reactions and threads",
  //     "Build cross-platform mobile apps"
  //   ],
  //   fullDescription: "A feature-rich real-time chat application supporting private messaging, group chats, and media sharing. Built with scalability in mind using Socket.io for real-time communication and Redis for message caching. Features include read receipts, typing indicators, and message encryption."
  // },
  // {
  //   id: "project-management",
  //   title: "Project Management Tool",
  //   description: "A collaborative project management tool with Kanban boards and team features.",
  //   image: project6,
  //   technologies: ["React", "GraphQL", "Apollo", "PostgreSQL", "Docker"],
  //   liveUrl: "https://project-manager.example.com",
  //   githubUrl: "https://github.com/username/project-manager",
  //   challenges: [
  //     "Building a drag-and-drop interface for task management",
  //     "Implementing real-time collaboration features",
  //     "Creating flexible permission and role systems"
  //   ],
  //   improvements: [
  //     "Add Gantt chart visualization",
  //     "Implement time tracking and reporting",
  //     "Integration with external tools (Slack, GitHub)"
  //   ],
  //   fullDescription: "A comprehensive project management solution featuring Kanban boards, task tracking, team collaboration, and reporting. The tool supports multiple project views, custom workflows, and integrates with popular development tools for seamless productivity."
  // }
];

export interface Skill {
  name: string;
  level: number;
  icon?: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      { name: "React.js", level: 90 },
      { name: "Next.js", level: 85 },
      // { name: "TypeScript", level: 85 },
      { name: "Tailwind CSS", level: 90 },
      { name: "JavaScript", level: 95 },
      { name: "HTML/CSS", level: 95 },
    ]
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 85 },
      { name: "MongoDB", level: 80 },
      // { name: "PostgreSQL", level: 75 },
      // { name: "GraphQL", level: 70 },
      { name: "REST APIs", level: 90 },
    ]
  },
  {
    title: "Tools & Technologies",
    skills: [
      { name: "Git & GitHub", level: 90 },
      // { name: "Docker", level: 70 },
      { name: "Firebase", level: 80 },
      // { name: "AWS", level: 65 },
      { name: "Figma", level: 75 },
      { name: "VS Code", level: 95 },
    ]
  }
];

export const socialLinks = {
  github: "https://github.com/Istheaksayem",
  linkedin: "https://www.linkedin.com/in/istheak-ahmed/",
  facebook: "https://www.facebook.com/istheak.ahmed.sayem",
  // twitter: "https://twitter.com/username"
};

export const contactInfo = {
  email: "istheakahmed9345@gmail.com",
  phone: "+880 1810589345",
  whatsapp: "+880 1810589345",
  location: "Chittagong, Bangladesh"
};
