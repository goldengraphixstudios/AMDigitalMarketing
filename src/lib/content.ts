import type { IconName } from "@/components/ServiceIcon";

export const brand = {
  name: "AM Digital Marketing",
  descriptor: "CRM, Funnels & Digital Marketing Strategy",
  ceo: "Angelyn Mediana",
  roles: [
    "Online Business Manager for Service Providers",
    "CRM & Automation Specialist",
    "Digital Marketing & Systems Builder",
  ],
  heroHeadline: "Turn Leads Into Clients With Smart Funnels & Automated Systems",
  heroSubheadline:
    "We deliver end-to-end marketing and business systems—from conversion-focused funnels, CRM workflows, and lead generation to social media marketing, paid ads, email campaigns, and admin support—so your business runs smoother, converts better, and scales faster behind the scenes.",
  slogan: "Smarter Marketing. Stronger Systems. Better Results.",
  about:
    "Hi, I’m Angelyn, Founder and Lead Strategist of a digital marketing and systems agency supporting service-based businesses with end-to-end funnels, CRM automation, lead generation, and ongoing marketing support. Together with my team, we design and manage the systems behind your growth so your marketing, operations, and client journey work seamlessly as one. We partner with coaches, healthcare professionals, wellness brands, and online service providers who want consistent inquiries without relying on manual follow-ups or disconnected tools. We don’t just help you get leads—we build and manage the infrastructure behind your marketing so every inquiry is tracked, nurtured, and converted efficiently, allowing your business to grow with clarity and control.",
  websiteGoals: [
    "Convert visitors and leads into discovery calls or inquiries.",
    "Showcase expertise in CRM, funnels, and marketing.",
    "Position AM Digital Marketing as a systems-driven digital partner, not just a VA.",
    "Build trust with social proof and a clear service breakdown.",
  ],
  pricing:
    "Custom Packages | Request a Quote. Every business has different goals and systems. Services are packaged based on the level of funnel building, lead generation, and ongoing support required.",
  leadMagnet: "Get a Free Funnel & Systems Audit",
  tools: [
    "CRM platforms",
    "Funnel builders",
    "Email marketing software",
    "Meta Ads Manager",
    "Project management tools (Notion, ClickUp, etc.)",
  ],
};

export const ctas = {
  requestQuote: "Request a Quote",
  bookCall: "Book a Discovery Call",
  freeAudit: "Get your Free Funnel & Systems Audit",
  exploreServices: "Explore Our Services",
};

export const contact = {
  email: "amdigitalsolutions.co.ph@gmail.com",
  linkedin: "https://www.linkedin.com/in/amdigitalsolutions",
  instagram: "https://www.instagram.com/angelynfunnels/",
  facebook: "https://www.facebook.com/profile.php?id=100083310535984",
  bookingLink: null as string | null,
};

export const services = [
  {
    title: "Funnel Systems Building & Automation",
    icon: "funnel",
    summary:
      "Lead generation and booking funnels that guide prospects from first touch to inquiry with automated follow-ups.",
    items: [
      "Lead generation funnel strategy & setup",
      "Booking and consultation funnels",
      "Opt-in pages, landing pages & thank-you flows",
      "CRM-integrated funnel tracking",
      "Automation for follow-ups and lead nurturing",
      "Workflow automation",
      "Client onboarding systems",
      "Email + CRM automation",
      "Internal operations optimization",
    ],
  },
  {
    title: "CRM Services",
    icon: "crm",
    summary:
      "CRM setups and pipelines that track, segment, and nurture every lead with automated actions.",
    items: [
      "CRM setup and customization",
      "Sales pipelines & client journey mapping",
      "Lead management and segmentation",
      "Automated follow-ups and task triggers",
    ],
  },
  {
    title: "Web Design",
    icon: "web",
    summary:
      "Conversion-focused sites and pages built to capture leads and support your funnel strategy.",
    items: [
      "Conversion-focused websites",
      "Landing pages for lead generation",
      "Booking & sales pages",
      "Mobile-responsive design",
    ],
  },
  {
    title: "Social Media & Marketing Services",
    icon: "social",
    summary:
      "Consistent content, scheduling, and engagement that supports lead generation and brand trust.",
    items: [
      "Content strategy & planning",
      "Social media scheduling and management",
      "Engagement monitoring",
      "Brand consistency across platforms",
    ],
  },
  {
    title: "Meta Ads (Facebook & Instagram)",
    icon: "ads",
    summary:
      "Funnel-based ad campaigns with targeting, retargeting, and performance optimization.",
    items: [
      "Ad account setup and structure",
      "Funnel-based ad campaigns",
      "Audience targeting & retargeting",
      "Performance tracking and optimization",
    ],
  },
  {
    title: "Admin Support",
    icon: "admin",
    summary:
      "Backend operations support that keeps onboarding, inboxes, and documentation organized.",
    items: [
      "Backend admin and operations support",
      "Calendar and inbox management",
      "Client onboarding assistance",
      "SOP creation and documentation",
    ],
  },
] satisfies {
  title: string;
  icon: IconName;
  summary: string;
  items: string[];
}[];

export const serviceHighlights = services.slice(0, 3).map((service) => ({
  title: service.title,
  summary: service.summary,
  icon: service.icon,
}));

export const heroHighlights = [
  "Lead generation funnels and booking systems",
  "CRM workflows and follow-up automation",
  "Social media marketing + paid ads",
  "Admin support and operations optimization",
];

export const processSteps = [
  {
    title: "Audit & Alignment",
    description:
      "Clarify your goals, current systems, and client journey so every step is built for conversion and clarity.",
  },
  {
    title: "Architect the Funnel",
    description:
      "Design lead-generation pathways, booking flows, and CRM structure that guide prospects from first touch to inquiry.",
  },
  {
    title: "Automate the Experience",
    description:
      "Implement workflows, follow-ups, and nurturing sequences so every lead is tracked and supported without manual effort.",
  },
  {
    title: "Optimize & Support",
    description:
      "Manage and refine the system over time, improving performance as your business grows.",
  },
];

export const servicesProcessSteps = [
  {
    title: "Discovery & Goals",
    description:
      "Align on your objectives, current tools, and the metrics that define conversion success.",
  },
  {
    title: "System Architecture",
    description:
      "Map the funnel, CRM, and automation touchpoints that move prospects to booked calls.",
  },
  {
    title: "Automation Build",
    description:
      "Implement workflows, email sequences, and tracking so every inquiry is nurtured.",
  },
  {
    title: "Launch & Optimization",
    description:
      "Refine performance with ongoing monitoring, updates, and support.",
  },
];

export const navigation = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
];