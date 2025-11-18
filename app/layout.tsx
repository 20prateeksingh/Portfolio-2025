import type { Metadata } from "next";
import "./globals.css";
import Analytics from "@/components/Analytics";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Prateek Singh - Portfolio",
  description: "Senior Product Designer with 7+ years of experience in B2B fintech. Designing clear, thoughtful interfaces that make complex problems feel simple.",
  keywords: ["Product Designer", "UX Designer", "UI Designer", "Portfolio", "Prateek Singh", "Fintech", "B2B Design"],
  authors: [{ name: "Prateek Singh" }],
  creator: "Prateek Singh",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://prateeksingh.in",
    title: "Prateek Singh - Product Designer",
    description: "Senior Product Designer with 7+ years of experience in B2B fintech. Designing clear, thoughtful interfaces that make complex problems feel simple.",
    siteName: "Prateek Singh Portfolio",
    images: [
      {
        url: "/OG Image.png",
        width: 1200,
        height: 630,
        alt: "Prateek Singh - Product Designer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Prateek Singh - Product Designer",
    description: "Senior Product Designer with 7+ years of experience in B2B fintech. Designing clear, thoughtful interfaces that make complex problems feel simple.",
    images: ["/OG Image.png"],
    creator: "@prateeksingh20",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: "https://prateeksingh.in",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
      </head>
      <body>
        <Analytics />
        <main>{children}</main>
      </body>
    </html>
  );
}

