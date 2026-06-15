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
  eyebrow: "Professional painters · Tullamore, Co. Offaly",
  title: "Professional painting for homes & commercial spaces",
  subtitle:
    "High-quality interior and exterior painting for your home or business. Reliable, clean, and local — finished to a standard you can trust.",
  trustBadges: [
    "Reliable & Trusted",
    "Satisfaction Guaranteed",
    "Experienced & Professional",
    "Serving Homes & Businesses",
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
      "Walls, ceilings, trim, doors and full exteriors — prepped properly and finished with premium paints for a flawless, lasting result.",
  },
  {
    icon: Building2,
    title: "Homes & Commercial Spaces",
    description:
      "From a single room to whole houses, offices, shops and rental properties — work scaled to fit the job, big or small.",
  },
  {
    icon: ShieldCheck,
    title: "High-Quality, Long-Lasting Results",
    description:
      "Careful surface preparation and quality materials mean a finish that looks sharp and holds up for years to come.",
  },
  {
    icon: Clock,
    title: "Clean Work & On-Time Delivery",
    description:
      "Furniture protected, surfaces masked, everything tidied up after. We turn up when we say we will and finish on schedule.",
  },
  {
    icon: Tag,
    title: "Affordable Prices & Free Quotes",
    description:
      "Honest, upfront pricing with no surprises. Get in touch for a free, no-obligation quote for your project.",
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
      "Call or WhatsApp us. We discuss your space, colours and timeline, then give you a clear, fixed price.",
  },
  {
    icon: Brush,
    step: "02",
    title: "Prep & Protect",
    description:
      "We mask, sand, fill and prime — covering floors and furniture so your home stays clean throughout.",
  },
  {
    icon: Sparkles,
    step: "03",
    title: "Perfect Finish",
    description:
      "Premium paints applied with care, a final walkthrough together, and a tidy space left ready to enjoy.",
  },
];

export const features = [
  {
    title: "Reliable & Trusted",
    description: "Local, dependable and recommended by the customers we work for.",
  },
  {
    title: "Satisfaction Guaranteed",
    description: "We're not finished until you're happy with the result.",
  },
  {
    title: "Experienced & Professional",
    description: "Skilled, careful work on every job, large or small.",
  },
  {
    title: "Serving Homes & Businesses",
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
