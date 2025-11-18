import Link from "next/link";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Prateek Singh - Senior Product Designer",
  description: "Learn about Prateek Singh, a Senior Product Designer with 7+ years of experience in B2B fintech. Explore his journey from architecture to digital product design.",
  keywords: ["About Prateek Singh", "Product Designer", "UX Designer", "Fintech Designer", "Design Experience", "Portfolio"],
  authors: [{ name: "Prateek Singh" }],
  creator: "Prateek Singh",
  openGraph: {
    type: "profile",
    locale: "en_US",
    url: "https://prateeksingh.in/about",
    title: "About Prateek Singh",
    description: "Senior Product Designer with 7+ years of B2B fintech experience",
    siteName: "Prateek Singh Portfolio",
    images: [
      {
        url: "/images/Prateek_bnw.jpg",
        width: 800,
        height: 800,
        alt: "Prateek Singh",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Prateek Singh",
    description: "Senior Product Designer with 7+ years of B2B fintech experience",
    images: ["/images/Prateek_bnw.jpg"],
    creator: "@prateeksingh20",
  },
  alternates: {
    canonical: "https://prateeksingh.in/about",
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#e1e1e1] relative">
      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 sm:pt-40 lg:pt-48 pb-40">
        
        {/* Introduction Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-16 sm:mb-20 lg:mb-32">
          {/* Photo */}
          <div className="lg:col-span-5">
            <div className="bg-[rgba(255,255,255,0.2)] border border-[#f0f0f0] rounded-[15px] overflow-hidden">
              <Image
                src="/images/Prateek_bnw.jpg"
                alt="Prateek Singh"
                className="w-full h-auto object-cover"
                width={800}
                height={800}
                priority
              />
            </div>
          </div>

          {/* About Text */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="font-montserrat text-base sm:text-lg text-black/80 leading-relaxed space-y-6">
              <p>
                <span className="font-bold">Namaste!</span>
                <br />
                I&apos;m Prateek. This website is my tiny island in the vast sea that is the internet. Feel free to roam around - I am adding in more cool stuff as you read on.
              </p>
              
              <p>
                <span className="font-bold">Who I am?</span>
                <br />
                If you missed the obnoxiously large heading in the previous page, I&apos;m a Product Designer. Currently collaborating with some amazing folks at Xflow and solving cross-border payments, one transaction at a time!
                However, I started my journey into design through Architecture. To this day, I hold a license to design buildings but I have taken a greater liking to designing digital products instead (much easier to do a revision, if v1.0 burns down).
              </p>
              
              <p>
                <span className="font-bold">What I do?</span>
                <br />
                I design products - the complete spectrum. Beginning from identifying the true problem; to iterating from a pool of solutions; to creating tasty visuals and finally shipping it to users.
              </p>
              
              <p>
                <span className="font-bold">What I love?</span>
                <br />
                I like to dwell in the overlap of design and technology. Over the years I have learned to be comfortable with the uncomfortable and take great pleasure in learning new things.
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* Footer */}
      <div className="absolute bottom-10 left-[50%] translate-x-[-50%] w-[90%] max-w-[1440px]">
        <Footer />
      </div>
    </div>
  );
}

