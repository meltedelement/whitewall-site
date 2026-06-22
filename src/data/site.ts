/**
 * Single source of truth for all site content.
 * Edit values here to update the whole website — no component changes needed.
 */

import {
  Home,
  Building2,
  ShieldCheck,
  Clock,
  Tag,
  Brush,
  Paintbrush,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

export const business = {
  name: "White Wall",
  fullName: "White Wall Painting",
  owner: "Omar",
  tagline: "Quality work you can trust",
  // Real details from the business flyer / Facebook page:
  phone: "+353 89 956 3277",
  phoneHref: "+353899563277",
  // WhatsApp uses international format without "+" or spaces
  whatsapp: "353899563277",
  email: "", // add an email here if you have one
  area: "Tullamore & across Co. Offaly",
  facebook: "https://www.facebook.com/people/White-Wall-oma/61589089713146/",
} as const;

export const whatsappLink = `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(
  "Hi White Wall, I'd like a free quote for a painting job."
)}`;

export const hero = {
  eyebrow: "Painters in Tullamore, Co. Offaly",
  title: "Painting for homes & commercial spaces",
  subtitle:
    "Interior and exterior painting for homes and businesses around Tullamore and the rest of Co. Offaly. Tidy work, fair prices, and we finish when we say we will.",
  trustBadges: [
    "Free quotes",
    "Tidy, careful work",
    "Homes & businesses",
    "Local to Co. Offaly",
  ],
};

export type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const services: Service[] = [
  {
    icon: Home,
    title: "Interior & Exterior Painting",
    description:
      "Walls, ceilings, trim, doors and outside paintwork. We prep properly first so the finish holds up.",
  },
  {
    icon: Building2,
    title: "Homes & Commercial Spaces",
    description:
      "A single room, a whole house, an office, shop or rental. Big or small, the job gets the same care.",
  },
  {
    icon: ShieldCheck,
    title: "Good Prep, Solid Finish",
    description:
      "Surfaces sanded, filled and primed before any colour goes on. That's what makes paint last.",
  },
  {
    icon: Clock,
    title: "Clean & On Time",
    description:
      "Floors and furniture covered, everything tidied up after. We turn up when we say we will.",
  },
  {
    icon: Tag,
    title: "Fair Prices & Free Quotes",
    description:
      "Clear pricing before we start, so you know what it costs. Ask us for a free quote any time.",
  },
];

export type Step = {
  icon: LucideIcon;
  step: string;
  title: string;
  description: string;
};

export const process: Step[] = [
  {
    icon: Paintbrush,
    step: "01",
    title: "Free Quote",
    description:
      "Call or message us. We look at the job, talk through colours and timing, and give you a fixed price.",
  },
  {
    icon: Brush,
    step: "02",
    title: "Prep & Protect",
    description:
      "We cover floors and furniture, then sand, fill and prime so the paint goes on right.",
  },
  {
    icon: Sparkles,
    step: "03",
    title: "Paint & Tidy Up",
    description:
      "We paint, check it over with you, and leave the place clean and ready to use.",
  },
];

export const features = [
  {
    title: "Local & Reliable",
    description: "Based in Tullamore. Most of our work comes from word of mouth.",
  },
  {
    title: "We Get It Right",
    description: "We don't pack up until you're happy with how it looks.",
  },
  {
    title: "Years On The Tools",
    description: "Careful, skilled work on every job, big or small.",
  },
  {
    title: "Homes & Businesses",
    description: "Covering Tullamore and the wider Co. Offaly area.",
  },
];

// Placeholder testimonials — swap for real Facebook reviews when ready.
export const testimonials = [
  {
    quote:
      "Omar did a brilliant job on our whole downstairs. Spotless work, turned up on time every day and the finish is perfect.",
    author: "Sarah M.",
    location: "Tullamore",
  },
  {
    quote:
      "Painted our shop front and interior over a weekend so we barely lost trading time. Tidy, professional and great value.",
    author: "Declan R.",
    location: "Co. Offaly",
  },
  {
    quote:
      "Honest quote, no surprises, and the house looks brand new. Couldn't recommend White Wall highly enough.",
    author: "Aoife K.",
    location: "Tullamore",
  },
];
