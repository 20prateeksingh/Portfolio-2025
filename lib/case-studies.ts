export type CaseStudySectionType =
  | "introduction"
  | "problem"
  | "insights"
  | "approaches"
  | "wireframes"
  | "final-product"
  | "ecosystem"
  | "custom";

export interface CaseStudySection {
  type: CaseStudySectionType;
  title: string;
  content: string;
  metadata?: {
    role?: string;
    team?: string;
    duration?: string;
    impact?: string[];
    [key: string]: any;
  };
  images?: string[];
  video?: {
    url: string;
    embedId?: string;
  };
  comparisons?: {
    before: string;
    after: string;
    caption: string;
  }[];
  items?: Array<{
    title: string;
    fields: string[];
    image?: string;
  }>;
  steps?: Array<{
    image: string;
    caption: string;
  }>;
  approaches?: Array<{
    image: string;
    title: string;
    description: string;
  }>;
}

export interface CaseStudy {
  slug: string;
  title: string;
  description: string;
  category: string;
  year: string;
  image?: string;
  coverImage?: string;
  tagline?: string;
  content: {
    overview: string;
    challenge: string;
    solution: string;
    results: string;
    technologies?: string[];
  };
  sections?: CaseStudySection[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "fx-ai-analyst",
    title: "FX AI Analyst",
    description: "Moving money with market insights",
    category: "UX Design",
    year: "2024",
    coverImage: "/images/fx-ai-analyst/cover-illustration.png",
    tagline: "FX AI Analyst",
    content: {
      overview: "An AI-powered FX analytics platform that provides market insights for money movement decisions.",
      challenge: "Users needed better visibility into FX market trends to make informed decisions about cross-border payments.",
      solution: "We developed an intelligent analytics interface that leverages AI to provide actionable market insights.",
      results: "Improved decision-making for users and increased confidence in timing cross-border transactions.",
      technologies: ["Figma", "React", "TypeScript"],
    },
    sections: [
      {
        type: "introduction",
        title: "Introduction",
        content:
          "Xflow is a B2B cross border payments company. The most common fund flow for our users is receiving USD and getting an INR payout. We started by offering great pricing to users. However, the market dictated how well those dollars converted to INR on any given day. This case study shows how we built a product to make the market a little more forgiving.",
        metadata: {
          role: "Lead Designer",
          team: "4 people",
          duration: "1.5 months",
          impact: [
            "Transactions worth USD 10+ millions using the new product so far.",
            "Savings over 1cr in INR conversions across users.",
          ],
        },
      },
      {
        type: "custom",
        title: "Opportunity",
        content:
          "Users want predictability, but the market is anything but predictable. Consider the following case - how the market can influence how much INR our users receive.",
        images: ["/images/fx-ai-analyst/opportunity-diagram.png"],
        metadata: {
          imageCaption: "A difference of just half a rupee in the FX rate leads to tens of thousands of rupees in payout difference",
          afterImageText: "We knew we couldn't control the market, but we could help our users time it. To do this, we built two products:",
        },
        items: [
          {
            title: "FX AI Analyst",
            fields: [
              "Looks at market conditions and gives a 3-day FX outlook. This provides a prediction range for how the market is expected to behave over the upcoming 3 days.",
            ],
          },
          {
            title: "Limit Order",
            fields: [
              "Allows users to set a limit order based on their target FX rate. As soon as the rate is hit, funds are withdrawn at that rate.",
            ],
          },
        ],
      },
      {
        type: "custom",
        title: "Research Approach",
        content:
          "This was to be our pilot version. Historical transactions from our dashboard could not directly help us predict how users would use the new product offerings. We knew, however, that our users made decisions based on three major factors - **trust**, **savings** and **data**.\n\nWe stitched together user stories that would later become our litmus test along the design cycle.",
        metadata: {
          userStories: [
            '"I\'m a user of Xflow Dashboard, I...',
            '"I want to see how the market is performing right now, what has the <strong>trend</strong> been like?"',
            '"If I withdraw right now, <strong>how much INR</strong> would I receive?"',
            '"What is the <strong>market outlook</strong>, how does it fare <strong>against the current rate</strong>?"',
            '"Why should I <strong>trust</strong> your market sentiment analysis? How do I know of your <strong>track record</strong>?"',
            '"How do I <strong>action</strong> on your analysis? How will this <strong>save me money</strong>?"',
            '"<strong>Is my money safe</strong> if I set the limit order?"',
          ],
          architectureTitle: "Information Architecture",
          architectureDescription: "To satisfy all of the above user needs, we created four distinct yet interdependent information modules.",
        },
        items: [
          {
            title: "Current Trend",
            fields: [
              "Current Rate",
              "Last updated on",
              "Next update in",
              "Market momentum",
            ],
          },
          {
            title: "FX Outlook",
            fields: [
              "Forecasted Range",
              "Compared to current rate",
              "Prediction justification",
              "Last updated",
              "Valid Till",
              "Past prediction performance",
            ],
          },
          {
            title: "Limit Order",
            fields: [
              "Target Rate",
              "Valid from",
              "Valid Till",
              "Post expiry actions",
              "Invoice",
              "Expected INR",
              "Receiving bank account",
            ],
          },
          {
            title: "Payout Calculator",
            fields: [
              "Amount in USD",
              "Rate applicable",
              "Expected INR",
              "Compared to other rates",
            ],
          },
        ],
      },
      {
        type: "custom",
        title: "Design Iterations",
        content:
          "Our platform users also use our APIs. So, the challenge was to build for configurability without deviating very far from the API build.",
        images: ["/images/fx-ai-analyst/iterations.png"],
      },
      {
        type: "wireframes",
        title: "Wireframes",
        content: "Market Trend: Current rate + FX Outlook\n\nPayout Calculator\n\nDetails of FX Market Trend\n\nSetting a Limit Order",
        steps: [
          {
            image: "/images/fx-ai-analyst/wireframe-market-trend.png",
            caption: "",
          },
          {
            image: "/images/fx-ai-analyst/wireframe-payout-calculator.png",
            caption: "",
          },
          {
            image: "/images/fx-ai-analyst/wireframe-fx-details-1.png",
            caption: "",
          },
          {
            image: "/images/fx-ai-analyst/wireframe-fx-details-2.png",
            caption: "",
          },
          {
            image: "/images/fx-ai-analyst/wireframe-fx-details-3.png",
            caption: "",
          },
          {
            image: "/images/fx-ai-analyst/wireframe-fx-details-4.png",
            caption: "",
          },
          {
            image: "/images/fx-ai-analyst/wireframe-limit-order-1.png",
            caption: "",
          },
          {
            image: "/images/fx-ai-analyst/wireframe-limit-order-2.png",
            caption: "",
          },
          {
            image: "/images/fx-ai-analyst/wireframe-limit-order-3.png",
            caption: "",
          },
          {
            image: "/images/fx-ai-analyst/wireframe-limit-order-4.png",
            caption: "",
          },
        ],
      },
      {
        type: "custom",
        title: "Impact and Next Steps",
        content:
          "Impact:\n• Transactions worth USD 10+ millions using the new product so far.\n• Savings over 1cr in INR conversions across users.\n\nFX AI update:\nThe product was very well received. We are currently working on making the offering richer by creating dedicated details page for each limit order, making data richer on our dashboard.\nView Xflowpay website: https://www.xflowpay.com/products/fx-ai-analyst",
      },
    ],
  },
  {
    slug: "fee-settings",
    title: "Fee Settings",
    description: "Solving fees for us, our users and their users",
    category: "UX Design",
    year: "2024",
    coverImage: "/images/fee-settings/cover-consolidated.png",
    tagline: "Fee settings",
    content: {
      overview: "A comprehensive fee management system that addresses the needs of multiple stakeholder groups.",
      challenge: "Creating a fee structure that works for the platform, direct users, and end customers required careful balance.",
      solution: "We designed a flexible fee settings interface that allows for transparent fee management across all user types.",
      results: "Improved fee transparency and user understanding, leading to better adoption rates.",
      technologies: ["Figma", "React", "TypeScript"],
    },
    sections: [
      {
        type: "introduction",
        title: "Introduction",
        content:
          "Xflow is a B2B payment company that provides cross-border money movement. We charge a fee on every transaction. As our product evolved so did our pricing strategy and complexity. This case study details how we designed pricing on our dashboard for scalability and configurability.",
        metadata: {
          role: "Lead Designer, Researcher",
          team: "4 people",
          duration: "3 months",
          impact: [
            "Reduced pricing-related user queries by 25%",
            "Designed for scale, works across 50+ pricing combinations and 4 user types.",
          ],
        },
      },
      {
        type: "problem",
        title: "Problem Statement",
        content:
          "We had recently entered the market and were still trying to find our pricing sweet spot. Our first iteration was showing a static line of text that mentions the fee the user was being charged. It made basic sense once it was first designed, this was our version v.0, the MVP that we shipped to users, the real users.\n\n• As the business grew, we struck different pricing deals with different users. No one-size-fits-all solution, not just the fee amounts, but even the fee calculation methodology varied.\n• We had since launched our dashboard via APIs, leading to a new user type - Platform Users. They needed fee configurability for their own users. Both Xflow and the Platform User make money here, more maths!\n• We went multi-currency! \"For all currencies converting to INR has X fees, except USD to INR, which is Y fees\". The challenge was to communicate without overwhelming the users.",
        images: ["/images/fee-settings/problem-diagram.png"],
      },
      {
        type: "insights",
        title: "The maths",
        content:
          "Xflow charges a fee on money movement which is two-fold:\n• Payout Fee: This is an agreed upon flat fee that Xflow charges users.\n• FX Spread: We also charge a spread on the FX. If our bank partners give us an FX rate of x, we forward it to users as (x-y), where y is the spread.",
        images: ["/images/fee-settings/math-diagram.png"],
        items: [
          {
            title: "Using Fixed Fee",
            fields: [
              "A flat fee is charged, regardless of transaction amount.",
              "This may not be favourable from a revenue and scale standpoint for large transaction amounts",
            ],
            image: "/images/fee-settings/fixed-fee.png",
          },
          {
            title: "Using Variable Fee",
            fields: [
              "Charging a variable / percentage of the overall transaction. If fee is set to 1%. A fee of USD 15 would be levied on a USD 1,500.00 transaction",
              "This is accompanied with a minimum fee. The minimum fee ensures we don't lose money on extremely small transactions.",
            ],
            image: "/images/fee-settings/variable-fee.png",
          },
          {
            title: "Using Fixed + Variable Fee",
            fields: [
              "A combination of two ensures a scalable fee model. This is the most commonly used fee type.",
            ],
            image: "/images/fee-settings/fixed-variable-fee.png",
          },
        ],
      },
      {
        type: "custom",
        title: "Platform Usecase",
        content:
          "Platforms are users who leverage our payment capabilities to provide cross-border payments to their own users (connected users). They set the fees for their users.\n\nFunds flow and fees: Xflow Passthrough Fee + Platform Fee = Connected User Fee\n\nCreating an experience for Platform Users to set their connected users' fees",
        images: [
          "/images/fee-settings/platform-flow.png",
          "/images/fee-settings/formula-diagram.png",
        ],
      },
      {
        type: "custom",
        title: "Iterations for fee configurability",
        content:
          "Our platform users also use our APIs. So, the challenge was to build for configurability without deviating very far from the API build.",
        images: ["/images/fee-settings/iterations.png"],
      },
      {
        type: "wireframes",
        title: "Wireframes",
        content:
          "Editing fee for a Connected User\nThis was our first iteration, when we supported only USD → INR. Solving for Multi-currency in the next section",
        steps: [
          {
            image: "/images/fee-settings/wire-1.png",
            caption: "",
          },
          {
            image: "/images/fee-settings/wire-2.png",
            caption: "",
          },
          {
            image: "/images/fee-settings/wire-3.png",
            caption: "",
          },
          {
            image: "/images/fee-settings/wire-4.png",
            caption: "",
          },
          {
            image: "/images/fee-settings/wire-5.png",
            caption: "",
          },
        ],
      },
      {
        type: "custom",
        title: "We went multi-currency!",
        content:
          "This was a major achievement for us as we now offered to receive payments in 25+ currencies and not just USD to INR. This also meant we needed to re-look at our pricing model and its representation in dashboard.",
        images: ["/images/fee-settings/multi-currency.png"],
      },
      {
        type: "wireframes",
        title: "Wireframes",
        content:
          "Editing fee for a Connected User\nMulti-currency arrived and setting fees became slightly more complex. We introduced fallback fees!\n\nAdding a new Fee pair\nAdding a new fee pair means defining a fee for a currency corridor and moving away from the fallback fee.",
        steps: [
          // First subsection: "Editing fee for a Connected User" - 4 images
          {
            image: "/images/fee-settings/wire-multi-1.png",
            caption: "",
          },
          {
            image: "/images/fee-settings/wire-multi-2.png",
            caption: "",
          },
          {
            image: "/images/fee-settings/wire-multi-3.png",
            caption: "",
          },
          {
            image: "/images/fee-settings/wire-multi-4.png",
            caption: "",
          },
          // Second subsection: "Adding a new Fee pair" - 4 images
          {
            image: "/images/fee-settings/wire-multi-5.png",
            caption: "",
          },
          {
            image: "/images/fee-settings/wire-multi-6.png",
            caption: "",
          },
          {
            image: "/images/fee-settings/wire-multi-7.png",
            caption: "",
          },
          {
            image: "/images/fee-settings/wire-multi-8.png",
            caption: "",
          },
        ],
      },
      {
        type: "custom",
        title: "Negative Earnings",
        content:
          "Let's recall how connected users are charged fees for their transactions. Platform user sets fee for their connected user. This fee includes Xflow's and Platform's fee. The platform can charge very high or very low, Xflow's fee remains fixed, the delta goes to the Platform.\n\nHowever, what if a Connected User's fee is set lower than the sum of Xflow's and the Platform's fees?\n\nPlatform's Earnings:\n• The Platform User earns fee on every of their Connected User's transaction\n• When the CU fee is less than Xflow's passthrough, the Platform has to pay the deficit using earnings from other transactions\n• If deficit exceeds earnings, it will lead to Negative Earning\n• This can lead to business disruption for the Platform user and it's connected users.\n\nThe Pre-funding Balance helps avoid negative earnings by nullifying them. This helps maintain business continuity",
      },
      {
        type: "wireframes",
        title: "Wireframes",
        content:
          "Platform Earnings\nConnected User Fee is lower than Xflow passthrough and Platform Fee - Negative nullification happens through other earnings - Pre-funding balance not consumed\n\nPlatform Earnings\nConnected User Fee is lower than Xflow passthrough and Platform Fee - Negative nullification can not happen through other earnings - Pre-funding balance running low",
        steps: [
          {
            image: "/images/fee-settings/wire-earnings-1.png",
            caption: "",
          },
          {
            image: "/images/fee-settings/wire-earnings-2.png",
            caption: "",
          },
          {
            image: "/images/fee-settings/wire-earnings-3.png",
            caption: "",
          },
          {
            image: "/images/fee-settings/wire-earnings-4.png",
            caption: "",
          },
          {
            image: "/images/fee-settings/wire-earnings-5.png",
            caption: "",
          },
          {
            image: "/images/fee-settings/wire-earnings-6.png",
            caption: "",
          },
          {
            image: "/images/fee-settings/wire-earnings-7.png",
            caption: "",
          },
          {
            image: "/images/fee-settings/wire-earnings-8.png",
            caption: "",
          },
          {
            image: "/images/fee-settings/wire-earnings-9.png",
            caption: "",
          },
        ],
      },
      {
        type: "custom",
        title: "Impact and Next Steps",
        content:
          "Impact:\n• Reduced pricing related user query by 25%\n• Designed for scale. Works over 50+ pricing combinations across 4 user types.\n\nPricing update:\nWe recently redid our pricing strategy, to make it more lucrative for the SMBs. For this, we retained much of the design discussed above and added tiered system of pricing. The user can, at any time, switch between pricing tiers.\nView Xflowpay website: https://www.xflowpay.com/pricing",
      },
    ],
  },
  {
    slug: "invoicing",
    title: "Invoicing",
    description: "Invoicing solutions for freelancer segment",
    category: "UX Design",
    year: "2024",
    coverImage: "/images/invoicing/Invoicing-cover-blue-wide.png",
    tagline: "Invoicing solution for payments",
    content: {
      overview: "A comprehensive invoicing solution designed specifically for freelancers, focusing on simplicity and efficiency.",
      challenge: "Freelancers needed a streamlined invoicing system that could handle their unique needs without complexity.",
      solution: "We developed an intuitive invoicing interface that simplifies the billing process while maintaining professional standards.",
      results: "Significantly reduced time spent on invoicing and improved user satisfaction among freelancer users.",
      technologies: ["Figma", "React", "TypeScript"],
    },
    sections: [
      {
        type: "introduction",
        title: "Introduction",
        content:
          "Xflowpay is a fintech company that offers cross-border payments. We started by serving businesses for higher transaction volumes. To reach a wider audience, we expanded to cater to freelancers and sole proprietors (FSPs). To better understand FSPs, we interviewed 50+ users, gathering valuable insights that shaped our product to be FSP-friendly. One key finding was the need for an integrated invoicing solution to streamline payment processes and enhance user experience.",
        metadata: {
          role: "Lead Designer, Researcher",
          team: "4 people",
          duration: "3 months",
          impact: [
            'Invoices are created <span class="bold">20x times</span> than they are being uploaded to our platform. Validating our hypothesis that invoicing solution integrated with payments would help the freelancers segment.',
            'Over <span class="bold">70% first time users</span> created invoices without dropping off. The drop offs can be attribute to non-tool reasons as well.',
            'Median time to create invoice is ~3 minutes. This is including first time users who need a longer set-up. Repeat users complete creation in <span class="bold">under 30 seconds</span>.',
          ],
        },
      },
      {
        type: "problem",
        title: "Problem Statement",
        content:
          "We are a new player trying to disrupt existing systems. One of the challenges was to get users to migrate from their existing methods of creating invoices. In our research we found that most users used general-purpose tools like Excel, Notion and Sheets. There was also a cohort of users using specialized invoicing tools like Zoho and Tally. Almost all of the users leaned towards free tools and readily available templates.",
        images: [
          "/images/invoicing/Competetion logos.png",
          "/images/invoicing/invoicing.gif",
        ],
      },
      {
        type: "insights",
        title: "Insights",
        content:
          "We are a new player trying to disrupt existing systems. One of the challenges was to get users to migrate from their existing methods of creating invoices. In our research we found that most users used general-purpose tools like Excel, Notion and Sheets. There was also a cohort of users using specialised invoicing tools like Zoho and Tally. Almost all of the users leaned towards free tools and readily available templates.",
        items: [
          {
            title: "Partner Details",
            fields: [
              "Partner name",
              "Address",
              "Email",
              "Description",
            ],
          },
          {
            title: "Invoice Particulars",
            fields: [
              "Invoice number",
              "Invoicing dates",
              "Currency",
              "Due date",
              "Description",
            ],
          },
          {
            title: "Invoice Item",
            fields: [
              "Item name",
              "Unit / Rate / Qty",
              "Description",
              "SAC Code",
              "Discount",
              "Taxes",
            ],
          },
          {
            title: "Payment Info",
            fields: [
              "Online payment",
              "Payment terms",
              "Bank transfer instructions",
            ],
          },
          {
            title: "Branding",
            fields: ["Theme colors", "Logo", "Font"],
          },
          {
            title: "User Details",
            fields: [
              "Name",
              "Email",
              "Address",
              "Phone number",
              "GST",
              "Website",
            ],
          },
        ],
      },
      {
        type: "approaches",
        title: "UX Approaches",
        content:
          "At a broad level we identified two approaches based on interaction with the invoice tool. While an interaction in-situ on the invoice document is very intuitive, it lacks flow curation and may lead to frustration down the line for users. The form and preview approach allows staged information sorting and also prevents information overload.",
        approaches: [
          {
            image: "/images/invoicing/Approach 1.png",
            title: "In-situ approach",
            description:
              "WYSIWYG approach to let a user directly interact with invoice document. Paypal provides a similar tool.",
          },
          {
            image: "/images/invoicing/Approach 2.png",
            title: "Form and preview",
            description:
              "Form on left and preview on the right. The invoice generated is 1:1 of the output. Stripe follows a similar approach.",
          },
        ],
      },
      {
        type: "wireframes",
        title: "Wireframes",
        content: "",
        steps: [
          {
            image: "/images/invoicing/invoicingWiresStep1.png",
            caption: "Step 1: Adding partner (client) information.",
          },
          {
            image: "/images/invoicing/invoicingWiresStep2.png",
            caption:
              "Step 2: Adding invoice items. A user can quick-add an existing item or create new.",
          },
          {
            image: "/images/invoicing/invoicingWiresStep3.png",
            caption:
              "Step 3: Providing invoice information, some of these are compliant related.",
          },
          {
            image: "/images/invoicing/invoicingWiresStep4.png",
            caption:
              "Step 4: Configuring payment details. The user can choose how they want to receive payment against this invoice.",
          },
          {
            image: "/images/invoicing/invoicingWiresStep5.png",
            caption:
              "Invoice created: User can quick send an email with invoice and payment details to their partner.",
          },
        ],
      },
      {
        type: "final-product",
        title: "Final Product",
        content: "",
        video: {
          url: "https://www.youtube.com/embed/MQ9jRWYr-PE?si=a5yhZT-wOc8YA4L2",
          embedId: "MQ9jRWYr-PE",
        },
      },
      {
        type: "ecosystem",
        title: "Ecosystem",
        content:
          "Invoices are one of the core elements of the workflow of our product. Creating an invoice was a net new offering. As a part of this, we also revamped our existing invoicing elements.",
        comparisons: [
          {
            before: "/images/invoicing/create-after.png",
            after: "/images/invoicing/create-before.png",
            caption:
              "Upload invoice: (swipe right to view the updated design) Our users so far could upload invoices to get paid against. We reworked on the flow. This is also now half-and-half allowing users to view invoices that they are uploading while filling in the details.",
          },
          {
            before: "/images/invoicing/invoicing-after.png",
            after: "/images/invoicing/invoicing-before.png",
            caption:
              "Invoice Details Page: (swipe right to view the updated design) We had over an year worth of feedback on how our users were consuming this page. We used the feedback and solved for easier scanability.",
          },
        ],
      },
    ],
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug);
}

export function getAllCaseStudies(): CaseStudy[] {
  return caseStudies;
}

