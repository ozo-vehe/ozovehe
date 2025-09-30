// interface Project {
//   title: string
//   subtitle?: string
//   description: string
//   image: string
//   technologies: string[]
//   github?: string
//   url: string
// }

// export const projects: Project[] = [
//   {
//     title: "Build Together",
//     description: "A collaborative platform for developers to work together on projects. Features real-time collaboration and project management tools.",
//     image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800",
//     technologies: ["Vue.js", "Tailwind CSS", "Pinia"],
//     github: "https://github.com/ozo-vehe/build-together",
//     url: "https://build-togetherv2.vercel.app",
//   },
//   {
//     title: "Flux Treasury",
//     subtitle: 'Treasury manager',
//     description: "A comprehensive treasury management platform built with modern web technologies. Features include financial tracking, reporting, and analytics.",
//     image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800",
//     technologies: ["React", "TypeScript", "Tailwind CSS"],
//     github: "https://github.com/ozo-vehe/flux-treasury",
//     url: "https://flux-treasury.vercel.app",
//   },
//   {
//     title: "CareFinder",
//     subtitle: "Healthcare",
//     description: "A healthcare application that helps users find nearby medical facilities and services. Includes location-based search and appointment scheduling.",
//     image: "https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800",
//     technologies: ["Vue", "Tailwind CSS", "Foursquare API"],
//     github: "https://github.com/ozo-vehe/carefinder",
//     url: "https://carefinderapp.vercel.app",
//   },
// ]

// projects.ts

// Define the interface for a project
interface Project {
  title: string;
  description: {
    main: string;
    bullets?: string[]
  };
  image: string;
  technologies: string[];
  url: string;
  github?: string;
  subtitle?: string;
}

// Array of projects
export const projects: Project[] = [
  {
    title: "EFL Africa",
    subtitle: 'Shipment and logistics',
    description: {
      main: "A customizable logistics platform for a Nigerian terminal operator, offering tailored branding and service configurations.",
      // bullets: [
      //   "Responsive design with optimized load times",
      //   "Accessibility best practices implemented",
      //   "Detailed analytics via Amplitude and Mixpanel",
      //   "Cross-device compatibility and client-specific views",
      //   "Drives engagement and operational efficiency in logistics"
      // ]
    },
    image: "https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["Vue.js", "Vue Router", "Tailwind CSS", "Pinia", "Amplitude", "Mixpanel"],
    url: "https://efl.africa",
  },
  {
    title: "Build Together",
    description: {
      main: "A collaborative platform for developers to co-create projects efficiently with real-time tools and project management features.",
      // bullets: [
      //   "Real-time code editing and task management for multiple users",
      //   "Task assignment and progress tracking",
      //   "Smooth navigation and responsive design",
      //   "Ideal for remote teams and open-source contributors"
      // ]
    },
    image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["Vue.js", "Tailwind CSS", "Pinia"],
    github: "https://github.com/ozo-vehe/build-together",
    url: "https://build-togetherv2.vercel.app",
  },
  {
    title: "Flux Treasury",
    subtitle: 'Treasury manager',
    description: {
      main: "A cutting-edge multichain USDC payment platform for seamless treasury management and payments across major blockchain networks.",
      // bullets: [
      //   "Supports 5+ major blockchains, cross-chain settlements in under 15 seconds",
      //   "Real-time transaction tracking and dynamic balance monitoring",
      //   "Advanced filtering, automated rebalancing, and secure fund allocation",
      //   "Intuitive interface for enterprises and financial institutions"
      // ]
    },
    image: "https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["React.js", "Redux Toolkit", "TypeScript", "Tailwind CSS", "Supabase", "Circle CCTP V2"],
    github: "https://github.com/ozo-vehe/flux-treasury",
    url: "[Deployed on Vercel – link if available]",
  },
  {
    title: "CareFinder",
    subtitle: 'Healthcare',
    description: {
      main: "A healthcare accessibility platform tailored for Nigeria, simplifying hospital searches, data export, and secure user authentication.",
      // bullets: [
      //   "Real-time healthcare facility search using Foursquare Places API",
      //   "Robust authentication and data management with Firebase",
      //   "Seamless data sharing via JavaScript Web Share API",
      //   "Markdown editor for custom notes",
      //   "Focus on accessibility and performance for underserved regions"
      // ]
    },
    image: "https://plus.unsplash.com/premium_photo-1673988726931-127584121c34?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    technologies: ["Vue.js", "Vue Router", "Pinia", "Vitest", "Tailwind CSS", "Firebase", "Foursquare Places API"],
    github: "https://github.com/ozo-vehe/carefinder",
    url: "https://carefinderapp.vercel.app",
  },
];