export interface CaseStudy {
  slug: string;
  title: string;
  description: string;
  category: string;
  year: string;
  image?: string;
  content: {
    overview: string;
    challenge: string;
    solution: string;
    results: string;
    technologies?: string[];
  };
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "invoicing",
    title: "Invoicing",
    description: "Invoicing solutions for freelancer segment",
    category: "UX Design",
    year: "2024",
    content: {
      overview: "A comprehensive invoicing solution designed specifically for freelancers, focusing on simplicity and efficiency.",
      challenge: "Freelancers needed a streamlined invoicing system that could handle their unique needs without complexity.",
      solution: "We developed an intuitive invoicing interface that simplifies the billing process while maintaining professional standards.",
      results: "Significantly reduced time spent on invoicing and improved user satisfaction among freelancer users.",
      technologies: ["Figma", "React", "TypeScript"],
    },
  },
  {
    slug: "fee-settings",
    title: "Fee Settings",
    description: "Solving fees for us, our users and their users",
    category: "UX Design",
    year: "2024",
    content: {
      overview: "A comprehensive fee management system that addresses the needs of multiple stakeholder groups.",
      challenge: "Creating a fee structure that works for the platform, direct users, and end customers required careful balance.",
      solution: "We designed a flexible fee settings interface that allows for transparent fee management across all user types.",
      results: "Improved fee transparency and user understanding, leading to better adoption rates.",
      technologies: ["Figma", "React", "TypeScript"],
    },
  },
  {
    slug: "checkout",
    title: "Checkout",
    description: "Checkout experience for Indian businesses",
    category: "UX Design",
    year: "2024",
    content: {
      overview: "A localized checkout experience designed specifically for the Indian market with its unique payment preferences.",
      challenge: "Indian businesses have specific payment method preferences and regulatory requirements that needed to be addressed.",
      solution: "We created a checkout flow that supports multiple payment methods including UPI, cards, and wallets while maintaining security.",
      results: "Increased checkout completion rates and improved user satisfaction with payment options.",
      technologies: ["Figma", "React", "TypeScript"],
    },
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug);
}

export function getAllCaseStudies(): CaseStudy[] {
  return caseStudies;
}

