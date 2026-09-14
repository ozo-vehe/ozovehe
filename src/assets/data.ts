export interface Project {
  title: string
  subtitle: string
  description: string
  outcome: string
  role: string
  image: string
  technologies: string[]
  url?: string
  github?: string
}

export const projects: Project[] = [
  {
    title: 'EFL Africa',
    subtitle: 'Shipment and logistics',
    description: 'A customizable logistics platform for a Nigerian terminal operator, bringing shipment visibility, tailored branding, and service configuration into one clear operational experience.',
    outcome: 'Made complex shipment workflows easier to scan across client-specific views.',
    role: 'Frontend engineering, product UI, analytics',
    image: 'https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&w=1200',
    technologies: ['Vue.js', 'Vue Router', 'Tailwind CSS', 'Pinia', 'Amplitude', 'Mixpanel'],
    url: 'https://efl.africa',
  },
  {
    title: 'Build Together',
    subtitle: 'Collaboration platform',
    description: 'A collaborative platform for developers to co-create projects with real-time tools, shared tasks, and a calmer way to keep remote work moving.',
    outcome: 'Turned project coordination into a focused, shared workspace for distributed teams.',
    role: 'Product design, frontend engineering',
    image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1200',
    technologies: ['Vue.js', 'Tailwind CSS', 'Pinia'],
    github: 'https://github.com/ozo-vehe/build-together',
    url: 'https://build-togetherv2.vercel.app',
  },
  {
    title: 'Flux Treasury',
    subtitle: 'Treasury manager',
    description: 'A multichain USDC payment platform for treasury management, giving financial teams a clearer view of balances, settlements, and fund allocation across networks.',
    outcome: 'Designed a financial control surface around live balances, filtering, and secure allocation.',
    role: 'Frontend engineering, data visualization',
    image: 'https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?auto=compress&cs=tinysrgb&w=1200',
    technologies: ['React.js', 'Redux Toolkit', 'TypeScript', 'Tailwind CSS', 'Supabase', 'Circle CCTP V2'],
    github: 'https://github.com/ozo-vehe/flux-treasury',
  },
  {
    title: 'CareFinder',
    subtitle: 'Healthcare access',
    description: 'A healthcare accessibility platform tailored for Nigeria, simplifying facility discovery, data export, and secure account workflows for people seeking care.',
    outcome: 'Reduced the friction between a healthcare need and a useful next step.',
    role: 'Frontend engineering, accessibility, API integration',
    image: 'https://plus.unsplash.com/premium_photo-1673988726931-127584121c34?q=80&w=1200&auto=format&fit=crop',
    technologies: ['Vue.js', 'Vue Router', 'Pinia', 'Vitest', 'Firebase', 'Foursquare Places API'],
    github: 'https://github.com/ozo-vehe/carefinder',
    url: 'https://carefinderapp.vercel.app',
  },
]

export const skills = ['Vue', 'React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Product thinking', 'Accessibility', 'Analytics']

export const siteUrl = 'https://ozovehe.vercel.app'

export const socialImage = `${siteUrl}/og-image.svg`

export const structuredProfile = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'John Obansa',
  url: siteUrl,
  jobTitle: 'Frontend engineer and creative technologist',
  sameAs: ['https://github.com/ozo-vehe', 'https://linkedin.com/in/ozovehe', 'https://x.com/__ozovehe'],
}

export const currentYear = new Date().getFullYear()

