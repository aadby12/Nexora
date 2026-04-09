export type NavItem = { label: string; href: string };

export const navItems: NavItem[] = [
  { label: "Home", href: "/#top" },
  { label: "Services", href: "/#services" },
  { label: "Portfolio", href: "/#work" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

export const trustLabels = [
  "Designed for mobile first",
  "Built around clear conversion paths",
  "Structured for search from day one",
  "Easy to maintain after launch",
] as const;

export type ServiceIconName =
  | "code"
  | "layout"
  | "rocket"
  | "building"
  | "cart"
  | "palette"
  | "refresh"
  | "wrench"
  | "gauge";

export type Service = {
  id: string;
  title: string;
  description: string;
  icon: ServiceIconName;
  cta: string;
  sort_order: number;
};

export type ProjectImage = {
  id: string;
  image_url: string;
  alt_text: string;
  sort_order: number;
};

export type Project = {
  id: string;
  title: string;
  slug: string;
  short_description: string;
  full_description: string;
  category: string;
  tech_stack: string[];
  live_url: string;
  featured: boolean;
  sort_order: number;
  thumbnail_image: string;
  thumbnail_alt: string;
  gallery_images: ProjectImage[];
  key_features: string[];
  created_at?: string;
  updated_at?: string;
};

export type WhyPoint = {
  title: string;
  body: string;
};

export type ProcessStep = {
  phase: string;
  title: string;
  detail: string;
};

export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  role: string;
  company: string;
  featured?: boolean;
};

export type SiteSettings = {
  hero: {
    eyebrow: string;
    title: string;
    highlightedText: string;
    description: string;
    primaryCtaLabel: string;
    primaryCtaHref: string;
    secondaryCtaLabel: string;
    secondaryCtaHref: string;
  };
  about: {
    eyebrow: string;
    title: string;
    description: string;
    body: string[];
    spotlightTitle: string;
    spotlightBody: string;
  };
  process: {
    eyebrow: string;
    title: string;
    description: string;
  };
  whyChooseUs: {
    eyebrow: string;
    title: string;
    description: string;
  };
  testimonials: {
    eyebrow: string;
    title: string;
    description: string;
  };
  contact: {
    phone: string;
    whatsapp: string;
    email: string;
    heading: string;
    body: string;
  };
};

export const services: Service[] = [
  {
    id: "service-custom-web",
    title: "Custom Website Development",
    description:
      "Websites built around your business goals, audience, and offer.",
    icon: "code",
    cta: "Built for your business, not a template",
    sort_order: 1,
  },
  {
    id: "service-responsive",
    title: "Responsive Mobile-First Design",
    description:
      "Designed for mobile first, then polished for every screen size.",
    icon: "layout",
    cta: "Smooth on mobile and desktop",
    sort_order: 2,
  },
  {
    id: "service-business",
    title: "Business Websites",
    description:
      "Professional websites that explain your value clearly and build trust.",
    icon: "building",
    cta: "Made to support real enquiries",
    sort_order: 3,
  },
  {
    id: "service-ecommerce",
    title: "E-commerce Websites",
    description:
      "Online stores with better product pages, simple browsing, and clear checkout.",
    icon: "cart",
    cta: "Focused on better conversion",
    sort_order: 4,
  },
  {
    id: "service-referral",
    title: "Referral System Development",
    description:
      "Referral systems that help happy clients bring in more leads.",
    icon: "rocket",
    cta: "Turn referrals into a repeatable channel",
    sort_order: 5,
  },
  {
    id: "service-seo",
    title: "SEO Optimization",
    description:
      "Technical and on-page improvements that help your site rank better.",
    icon: "gauge",
    cta: "Stronger SEO foundation",
    sort_order: 6,
  },
  {
    id: "service-uiux",
    title: "UI/UX Design",
    description:
      "Clean interfaces that feel credible and easy to use.",
    icon: "palette",
    cta: "Clear journeys, less friction",
    sort_order: 7,
  },
  {
    id: "service-marketing",
    title: "Digital Marketing",
    description:
      "Campaign pages and digital assets designed to improve results.",
    icon: "refresh",
    cta: "Landing pages that convert better",
    sort_order: 8,
  },
  {
    id: "service-branding",
    title: "Branding & Identity",
    description:
      "Brand direction that keeps your online presence consistent and professional.",
    icon: "wrench",
    cta: "Make your brand feel consistent online",
    sort_order: 9,
  },
];

export const projects: Project[] = [
  {
    id: "project-chefs-choice",
    title: "Chef’s Choice by Maison Solange",
    slug: "chefs-choice-maison-solange",
    short_description:
      "A brand-led product site for a cookware label, with editorial product framing and a softer luxury tone.",
    full_description:
      "Chef’s Choice by Maison Solange was designed to make the brand feel more elevated online. The work focused on product framing, visual restraint, and a browsing experience that supports the brand story instead of overwhelming it. On smaller screens, the layouts were simplified so the site stayed elegant without losing clarity.",
    category: "Luxury Brand Website",
    tech_stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    live_url: "https://chef-s-choice-jade.vercel.app",
    featured: true,
    sort_order: 1,
    thumbnail_image: "/portfolio/chefs-choice-thumbnail.png",
    thumbnail_alt:
      "Chef’s Choice by Maison Solange — desktop and mobile website mockup",
    gallery_images: [
      {
        id: "chef-gallery-1",
        image_url: "/portfolio/chefs-choice-hero.png",
        alt_text: "Hero section with navigation, headline, and collection spotlight",
        sort_order: 1,
      },
      {
        id: "chef-gallery-2",
        image_url: "/portfolio/chefs-choice-why-shop.png",
        alt_text: "Why shop with us — premium selection, simple shopping, Accra support",
        sort_order: 2,
      },
      {
        id: "chef-gallery-3",
        image_url: "/portfolio/chefs-choice-featured.png",
        alt_text: "Featured pieces grid with product cards and imagery",
        sort_order: 3,
      },
      {
        id: "chef-gallery-4",
        image_url: "/portfolio/chefs-choice-collections.png",
        alt_text: "Collections page — cookware families and category imagery",
        sort_order: 4,
      },
    ],
    key_features: [
      "Editorial-style product presentation",
      "Refined mobile browsing experience",
      "More deliberate hierarchy between brand and catalogue",
      "Motion used sparingly to support the luxury tone",
    ],
  },
  {
    id: "project-ifmss",
    title: "Imperial Facilities Management & Support Services",
    slug: "imperial-facilities-management-support-services",
    short_description:
      "A corporate service website built to feel more credible, more structured, and easier for prospects to read.",
    full_description:
      "Imperial Facilities Management & Support Services needed a site that looked more established than the average service-company build. The work focused on clearer sectioning, stronger service hierarchy, and a more disciplined corporate presentation that helps visitors understand the offer quickly.",
    category: "Corporate Website",
    tech_stack: ["Next.js", "TypeScript", "Tailwind CSS", "SEO"],
    live_url: "https://ifmss.vercel.app",
    featured: false,
    sort_order: 2,
    thumbnail_image: "/portfolio/ifmss-thumbnail.png",
    thumbnail_alt:
      "IFMSS Imperial Facilities Management website mockup on desktop and mobile with hero and team imagery",
    gallery_images: [
      {
        id: "ifmss-gallery-1",
        image_url: "/portfolio/ifmss-gallery-hero.png",
        alt_text:
          "Homepage hero — facilities team, headline, and primary calls to action",
        sort_order: 1,
      },
      {
        id: "ifmss-gallery-2",
        image_url: "/portfolio/ifmss-gallery-services.png",
        alt_text:
          "Service cards — hard facilities management and soft services & cleaning",
        sort_order: 2,
      },
      {
        id: "ifmss-gallery-3",
        image_url: "/portfolio/ifmss-gallery-shop-landing.png",
        alt_text: "Shop landing — site supplies, equipment, and browse CTAs",
        sort_order: 3,
      },
      {
        id: "ifmss-gallery-4",
        image_url: "/portfolio/ifmss-gallery-shop-catalog.png",
        alt_text: "Shop catalog — categories, search, and product grid",
        sort_order: 4,
      },
    ],
    key_features: [
      "Structured service overview with clearer scanning",
      "Corporate styling without feeling stiff",
      "Responsive layouts tuned for business users",
      "Clear enquiry paths across the site",
    ],
  },
];

export const whyPoints: WhyPoint[] = [
  {
    title: "Fast",
    body: "Pages are built to load quickly and stay responsive, especially where that first impression matters.",
  },
  {
    title: "Modern",
    body: "The design language feels current without leaning on visual gimmicks that date quickly.",
  },
  {
    title: "Scalable",
    body: "The site structure is easy to extend as your services, portfolio, and content grow.",
  },
  {
    title: "Premium Design",
    body: "Detail is handled carefully, from spacing and hierarchy to how cards, buttons, and type feel together.",
  },
  {
    title: "SEO Optimized",
    body: "Search fundamentals are built into the structure rather than treated as an afterthought.",
  },
  {
    title: "Clean User Experience",
    body: "Visitors get to the important information quickly, without being buried in noise or decoration.",
  },
];

export const processSteps: ProcessStep[] = [
  {
    phase: "01",
    title: "Discovery",
    detail:
      "We start by understanding the business properly: what you sell, who you need to convince, and what the website has to do.",
  },
  {
    phase: "02",
    title: "Design",
    detail:
      "Then we shape the structure, the messaging rhythm, and the visual tone so the site feels right before a build begins.",
  },
  {
    phase: "03",
    title: "Development",
    detail:
      "Once the direction is clear, we build it carefully with responsive layouts, clean components, and sensible motion.",
  },
  {
    phase: "04",
    title: "Launch",
    detail:
      "Before launch, everything is checked, tightened, and handed over in a state you can actually use and maintain.",
  },
];

export const testimonials: Testimonial[] = [];

export const faqItems = [
  {
    q: "What kinds of websites does Avenor Tech build?",
    a: "Mostly business websites, service-company sites, landing pages, e-commerce builds, and redesigns for brands that need a stronger online presence.",
  },
  {
    q: "Can you manage our portfolio content after launch?",
    a: "Yes. The site can be set up with an admin dashboard so projects and selected homepage content can be updated without touching the codebase.",
  },
  {
    q: "Do you build mobile-first websites?",
    a: "Yes. Every layout is designed to feel polished on phones, tablets, laptops, and desktops from the start.",
  },
  {
    q: "Do you support SEO and performance optimization?",
    a: "Yes. We handle the structural side properly: semantic markup, image handling, page speed, metadata, and the basics that help a site perform better over time.",
  },
] as const;

export const techStack = [
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Framer Motion",
  "Supabase",
  "PostgreSQL",
  "Vercel",
  "Figma",
] as const;

export const stats = [
  { label: "Premium launch quality", value: 100, suffix: "%" },
  { label: "Mobile-first delivery", value: 100, suffix: "%" },
  { label: "SEO-ready builds", value: 100, suffix: "%" },
  { label: "Flexible admin control", value: 24, suffix: "/7" },
] as const;

export const socialLinks = [
  { label: "LinkedIn", href: "https://linkedin.com" },
  {
    label: "Instagram",
    href: "https://www.instagram.com/avenor.tech?igsh=b2JycnBwaGxzemE0&utm_source=qr",
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@avenortech?_r=1&_t=ZS-95LGp9GpsPP",
  },
] as const;

export const siteSettings: SiteSettings = {
  hero: {
    eyebrow: "Websites for serious businesses",
    title: "Websites that make your business feel established",
    highlightedText: "before a call even happens",
    description:
      "We design and build business websites that look clean, feel credible, and help the right clients reach out.",
    primaryCtaLabel: "Start Your Project",
    primaryCtaHref: "/#contact",
    secondaryCtaLabel: "View Portfolio",
    secondaryCtaHref: "/#work",
  },
  about: {
    eyebrow: "About Avenor Tech",
    title: "Avenor Tech helps businesses look better online.",
    description:
      "Clear communication, stronger presentation, and websites that match the quality of the business.",
    body: [
      "Many businesses do great work, but their websites do not show it well. We close that gap with cleaner structure and clearer messaging.",
      "From layout and mobile experience to performance and content updates, we make sites easier to trust, use, and manage.",
    ],
    spotlightTitle: "Clearer websites. Better first impressions.",
    spotlightBody:
      "Avenor Tech is best suited to brands that want a website to support real business growth, not just fill a blank space online.",
  },
  process: {
    eyebrow: "Process",
    title: "A process that keeps the work sharp and the decisions clear.",
    description:
      "Each stage is there for a reason: to reduce guesswork, make better design decisions, and keep the project moving without chaos.",
  },
  whyChooseUs: {
    eyebrow: "Why Choose Us",
    title: "Design decisions tied to business goals, not decoration.",
    description:
      "The work is shaped to help businesses look more established, communicate more clearly, and convert interest into real enquiries.",
  },
  testimonials: {
    eyebrow: "Testimonials",
    title: "Client confidence starts with how your brand feels online.",
    description:
      "This section appears automatically when real client testimonials are added in the admin dashboard.",
  },
  contact: {
    phone: "0538730683",
    whatsapp: "+233541111423",
    email: "info@avenortech12.com",
    heading: "If the website no longer reflects the business, let’s fix that.",
    body:
      "Tell us what you need to improve and we will come back with the best next step.",
  },
};
