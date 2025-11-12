# Portfolio Website

A modern portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Homepage**: Showcase your work with a hero section, featured case studies, and skills overview
- **Case Studies**: Dynamic case study pages with individual project details
- **About Me**: Personal information, skills, experience, and education
- **Responsive Design**: Fully responsive across all device sizes
- **Modern Stack**: Built with Next.js 14, TypeScript, and Tailwind CSS

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with navigation
│   ├── page.tsx            # Homepage
│   ├── about/
│   │   └── page.tsx        # About Me page
│   ├── case-studies/
│   │   ├── page.tsx        # Case studies listing
│   │   └── [slug]/
│   │       └── page.tsx    # Individual case study
│   └── globals.css         # Global styles
├── components/
│   ├── Navigation.tsx      # Site navigation
│   ├── Footer.tsx          # Footer component
│   └── CaseStudyCard.tsx   # Case study card component
└── lib/
    └── case-studies.ts     # Case studies data
```

## Customization

### Adding Case Studies

Edit `lib/case-studies.ts` to add or modify case studies. Each case study includes:
- Title and description
- Category and year
- Detailed content (overview, challenge, solution, results)
- Technologies used

### Styling

The project uses Tailwind CSS. Customize colors, fonts, and spacing in `tailwind.config.ts`.

### Content

Update the homepage, about page, and case studies with your own content.

## Deployment

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import your repository to Vercel
3. Deploy with one click

## License

MIT

