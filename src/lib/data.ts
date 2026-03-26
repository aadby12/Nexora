export type NavItem = { label: string; href: string };

export const navItems: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Why Us", href: "#why-us" },
  { label: "Process", href: "#process" },
  { label: "Stories", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export const trustLabels = [
  "Responsive design",
  "Premium UI/UX",
  "Fast performance",
  "Modern stack",
] as const;

export type Service = {
  title: string;
  description: string;
  icon: "code" | "layout" | "rocket" | "building" | "cart" | "palette" | "refresh" | "wrench" | "gauge";
};

export const services: Service[] = [
  {
    title: "Custom Website Development",
    description:
      "Tailored frontends and full-stack builds that match your brand, goals, and growth roadmap.",
    icon: "code",
  },
  {
    title: "Responsive Web Design",
    description:
      "Layouts that feel intentional on every breakpoint—from compact phones to ultra-wide displays.",
    icon: "layout",
  },
  {
    title: "Landing Page Development",
    description:
      "Conversion-led landing experiences with sharp storytelling and measurable performance.",
    icon: "rocket",
  },
  {
    title: "Business Website Design",
    description:
      "Trust-building corporate sites with refined typography, structure, and content hierarchy.",
    icon: "building",
  },
  {
    title: "E-commerce Development",
    description:
      "Fast storefronts with polished product narratives, checkout flows, and scalable architecture.",
    icon: "cart",
  },
  {
    title: "UI/UX Design",
    description:
      "Research-backed interfaces, prototypes, and design systems that feel effortless to use.",
    icon: "palette",
  },
  {
    title: "Website Redesign",
    description:
      "Modernize legacy experiences with a future-ready visual language and improved performance.",
    icon: "refresh",
  },
  {
    title: "Website Maintenance",
    description:
      "Ongoing care: updates, monitoring, content support, and releases you can rely on.",
    icon: "wrench",
  },
  {
    title: "Performance Optimization",
    description:
      "Core Web Vitals, caching, media, and code paths tuned for speed and SEO resilience.",
    icon: "gauge",
  },
];

export type Project = {
  title: string;
  description: string;
  category: string;
  stack: string[];
  image: string;
  imageAlt: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "Lumen Analytics",
    description:
      "A glassmorphic dashboard for real-time revenue intelligence—built for clarity at executive speed.",
    category: "SaaS / Product",
    stack: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Abstract analytics dashboard visualization",
    featured: true,
  },
  {
    title: "Vertex Mobility",
    description:
      "Brand-led automotive experience with cinematic scroll storytelling and localized dealer flows.",
    category: "Brand / Marketing",
    stack: ["Next.js", "CMS", "GSAP-style motion", "Edge"],
    image:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Sports car on an open road at dusk",
  },
  {
    title: "Aether Health",
    description:
      "Patient-first telehealth portal with accessible patterns, secure booking, and calm visual rhythm.",
    category: "Healthcare",
    stack: ["React", "Next.js", "a11y audit", "API routes"],
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Medical technology abstract",
  },
  {
    title: "Nord Studio Commerce",
    description:
      "Editorial e-commerce with immersive product pages and sub-second interaction targets.",
    category: "E-commerce",
    stack: ["Next.js", "Stripe", "Headless", "CDN"],
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Minimal retail interior",
  },
];

export const whyPoints = [
  {
    title: "Modern, responsive craft",
    body: "Interfaces that scale across devices without compromise—every interaction is considered.",
  },
  {
    title: "Performance as a feature",
    body: "Lean bundles, tuned media, and architecture choices that keep experiences snappy.",
  },
  {
    title: "Mobile-first discipline",
    body: "We design from small screens up so touch targets, rhythm, and hierarchy stay premium.",
  },
  {
    title: "Clean, scalable code",
    body: "Typed components, modular structure, and patterns your team can extend with confidence.",
  },
  {
    title: "Strategic design thinking",
    body: "Every layout decision ties back to story, conversion, and long-term brand equity.",
  },
  {
    title: "Obsessive detail",
    body: "Typography, motion, spacing, and states—polished until the whole system feels inevitable.",
  },
] as const;

export const processSteps = [
  {
    phase: "01",
    title: "Discovery",
    detail:
      "Goals, audiences, constraints, and success metrics—aligned before a single pixel lands.",
  },
  {
    phase: "02",
    title: "Strategy",
    detail:
      "Information architecture, narratives, and technical approach mapped to outcomes.",
  },
  {
    phase: "03",
    title: "Design",
    detail:
      "Visual direction, prototypes, and refined UI kits tuned for development handoff.",
  },
  {
    phase: "04",
    title: "Development",
    detail:
      "Typed builds, integrations, animations, and QA on real devices and networks.",
  },
  {
    phase: "05",
    title: "Launch",
    detail:
      "Performance checks, analytics, SEO basics, and a calm go-live with rollback safety.",
  },
  {
    phase: "06",
    title: "Support",
    detail:
      "Iterative improvements, content updates, and proactive monitoring as you scale.",
  },
] as const;

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Nexora rebuilt our flagship site with a level of polish our board noticed on day one. Load times and leads both jumped within weeks.",
    name: "Elena Vasquez",
    role: "CMO",
    company: "Brightline Systems",
  },
  {
    quote:
      "The team thinks in systems—not just pages. Handoff was surgical, and the motion design still gets compliments from investors.",
    name: "Marcus Chen",
    role: "Founder",
    company: "Parallel Labs",
  },
  {
    quote:
      "Finally a partner that cares about mobile as much as we do. The experience feels premium on every device we tested.",
    name: "Priya Nair",
    role: "Head of Product",
    company: "Northwind Health",
  },
];

export const faqItems = [
  {
    q: "What types of projects does Nexora take on?",
    a: "Marketing sites, product surfaces, landing campaigns, redesigns, and ongoing retainers for growth-stage teams.",
  },
  {
    q: "Do you work with startups and established brands?",
    a: "Yes—whether you are validating a new offer or refreshing a trusted brand, we align process to your pace.",
  },
  {
    q: "How do you handle timelines and communication?",
    a: "We run structured weekly demos, async updates, and shared boards so stakeholders stay informed without thrash.",
  },
  {
    q: "Can you integrate with our existing stack?",
    a: "We routinely connect to CMS, CRM, analytics, auth, and commerce APIs—prioritizing stable, documented integrations.",
  },
] as const;

export const techStack = [
  "Next.js",
  "TypeScript",
  "React",
  "Tailwind CSS",
  "Framer Motion",
  "Node.js",
  "PostgreSQL",
  "Vercel",
  "Figma",
] as const;

export const stats = [
  { label: "Projects shipped", value: 48, suffix: "+" },
  { label: "Avg. Lighthouse performance", value: 94, suffix: "" },
  { label: "Client satisfaction", value: 98, suffix: "%" },
  { label: "Years collective experience", value: 12, suffix: "+" },
] as const;

export const socialLinks = [
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "X", href: "https://x.com" },
  { label: "Dribbble", href: "https://dribbble.com" },
  { label: "GitHub", href: "https://github.com" },
] as const;
