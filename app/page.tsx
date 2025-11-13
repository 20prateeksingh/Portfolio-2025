"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { getAllCaseStudies } from "@/lib/case-studies";

// Local image paths
const imgCaseStudyImage = "/images/case-study-1.png";
const imgCaseStudyImage1 = "/images/case-study-2.png";
const imgCaseStudyImage2 = "/images/case-study-3.png";
const imgProjectImage = "/images/project-image-1.png";
const imgLogoSelectionIndicatorNew2 = "/images/logo-selection.png";
const imgProjectImage1 = "/images/project-image-2.png";
const imgLogo = "/images/logo.svg";

// Tab content mapping
const tabContent = {
  designers: {
    greeting: "Hello there,",
    description: "I'm Prateek - a designer who cares about making beautiful things that help people."
  },
  recruiters: {
    greeting: "Hello there,",
    description: "I'm Prateek - a UX designer with expertise in building user-centered products and leading design teams."
  },
  aiEnthusiasts: {
    greeting: "Hello there,",
    description: "I'm Prateek - exploring the intersection of design and AI to create innovative solutions."
  },
  engineers: {
    greeting: "Hello there,",
    description: "I'm Prateek - a designer who speaks your language, bridging design and engineering to build better products."
  }
};

export default function Home() {
  const [selectedTab, setSelectedTab] = useState<"designers" | "recruiters" | "aiEnthusiasts" | "engineers">("designers");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [displayContent, setDisplayContent] = useState(tabContent["designers"]);
  const [opacity, setOpacity] = useState(1);
  
  const caseStudies = getAllCaseStudies();
  const caseStudyImages = [imgCaseStudyImage, imgCaseStudyImage1, imgCaseStudyImage2];
  
  const currentContent = tabContent[selectedTab];

  const handleTabChange = (tab: "designers" | "recruiters" | "aiEnthusiasts" | "engineers") => {
    if (tab !== selectedTab) {
      // Fade out current text
      setOpacity(0);
      setTimeout(() => {
        // Update content and tab
        setSelectedTab(tab);
        setDisplayContent(tabContent[tab]);
        // Ensure new element starts at opacity 0, then fade in
        setOpacity(0);
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            setOpacity(1);
          });
        });
      }, 600);
    }
  };

  // Handle hash navigation when coming from other pages
  useEffect(() => {
    const handleHashNavigation = () => {
      if (window.location.hash === '#works') {
        setTimeout(() => {
          const element = document.getElementById('works');
          if (element) {
            const header = document.querySelector('.fixed.backdrop-blur-sm') as HTMLElement;
            const gap = 24;
            const headerBottom = header ? header.getBoundingClientRect().bottom : (window.innerWidth >= 768 ? 130 : 106);
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerBottom - gap;
            window.scrollTo({
              top: Math.max(0, offsetPosition),
              behavior: 'smooth'
            });
          }
        }, 100);
      }
    };

    // Handle initial load
    handleHashNavigation();

    // Handle hash changes (e.g., when clicking the link)
    window.addEventListener('hashchange', handleHashNavigation);

    return () => {
      window.removeEventListener('hashchange', handleHashNavigation);
    };
  }, []);

  return (
    <div className="bg-[#e1e1e1] relative min-h-screen flex flex-col">
      {/* 12-Column Grid Container - Max width 1728px with responsive padding */}
      <div className="max-w-[1728px] mx-auto w-full px-4 md:px-8 lg:px-[144px]">
        {/* Header - Full width (12 columns) */}
        <div className="fixed backdrop-blur-sm backdrop-filter bg-[rgba(255,255,255,0.5)] border border-[#f0f0f0] box-border flex h-[90px] items-center justify-between px-4 md:px-8 py-0 rounded-[4px] top-4 md:top-10 w-[calc(100%-32px)] md:w-full max-w-[1440px] z-50 left-1/2 -translate-x-1/2">
          <Link href="/" className="overflow-clip relative shrink-0 w-[50px] h-[50px]">
            <div className="absolute bg-[#e0e0e0] inset-0 rounded-[5px]" />
            <div className="absolute inset-[24%]">
              <img alt="Logo" className="block max-w-none w-full h-full" src={imgLogo} />
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex font-montserrat font-medium gap-10 items-center text-[#0c120c] text-lg uppercase">
            <a 
              href="#works" 
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById('works');
                if (element) {
                  const header = document.querySelector('.fixed.backdrop-blur-sm') as HTMLElement;
                  const gap = 24;
                  const headerBottom = header ? header.getBoundingClientRect().bottom : (window.innerWidth >= 768 ? 130 : 106);
                  const elementPosition = element.getBoundingClientRect().top;
                  const offsetPosition = elementPosition + window.pageYOffset - headerBottom - gap;
                  window.scrollTo({
                    top: Math.max(0, offsetPosition),
                    behavior: 'smooth'
                  });
                }
              }}
              className="hover:opacity-70 transition-opacity cursor-pointer"
            >
              Works
            </a>
            <Link href="/about" className="hover:opacity-70 transition-opacity">
              About
            </Link>
            <a href="/PrateekSingh_Resume.pdf" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
              Resume
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex flex-col gap-1.5 w-8 h-8 items-center justify-center"
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-[#0c120c] transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-[#0c120c] transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-[#0c120c] transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>

          {/* Mobile Menu */}
          <div className={`fixed top-[106px] left-0 right-0 bg-[rgba(255,255,255,0.95)] backdrop-blur-sm border-b border-[#f0f0f0] z-40 transition-all duration-300 md:hidden ${mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
            <div className="flex flex-col px-4 py-6 gap-4 font-montserrat font-medium text-[#0c120c] text-lg uppercase">
              <a 
                href="#works" 
                onClick={(e) => {
                  e.preventDefault();
                  setMobileMenuOpen(false);
                  setTimeout(() => {
                    const element = document.getElementById('works');
                    if (element) {
                      const header = document.querySelector('.fixed.backdrop-blur-sm') as HTMLElement;
                      const gap = 24;
                      const headerBottom = header ? header.getBoundingClientRect().bottom : (window.innerWidth >= 768 ? 130 : 106);
                      const elementPosition = element.getBoundingClientRect().top;
                      const offsetPosition = elementPosition + window.pageYOffset - headerBottom - gap;
                      window.scrollTo({
                        top: Math.max(0, offsetPosition),
                        behavior: 'smooth'
                      });
                    }
                  }, 100);
                }}
                className="hover:opacity-70 transition-opacity py-2 cursor-pointer"
              >
                Works
              </a>
              <Link href="/about" className="hover:opacity-70 transition-opacity py-2" onClick={() => setMobileMenuOpen(false)}>
                About
              </Link>
              <a href="/PrateekSingh_Resume.pdf" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity py-2" onClick={() => setMobileMenuOpen(false)}>
                Resume
              </a>
            </div>
          </div>
        </div>

        <div className="flex-grow pb-10 pt-32 md:pt-48">
          {/* 12-Column Grid System */}
          <div className="grid grid-cols-12 gap-4 md:gap-6 w-full">
            {/* Introduction Section - Starts at column 5, spans 8 columns (66.67%) */}
            <div className="col-span-12 md:col-start-5 md:col-span-8 flex flex-col gap-5 items-start min-h-[50vh] md:max-h-[50vh] pt-8">
              <div className="flex gap-3 md:gap-5 items-start relative overflow-x-auto w-full pb-2 -mx-4 px-4 md:mx-0 md:px-0 scrollbar-hide">
                <button
                  onClick={() => handleTabChange("designers")}
                  className={`px-3 md:px-4 py-1.5 md:py-2 rounded-md cursor-pointer transition-all duration-[600ms] min-w-fit shrink-0 ${
                    selectedTab === "designers" 
                      ? "bg-black/10" 
                      : "hover:bg-black/5"
                  }`}
                >
                  <p className="font-montserrat font-medium leading-[2] text-sm md:text-base text-black whitespace-nowrap">
                    For Designers
                  </p>
                </button>
                <button
                  onClick={() => handleTabChange("recruiters")}
                  className={`px-3 md:px-4 py-1.5 md:py-2 rounded-md cursor-pointer transition-all duration-[600ms] min-w-fit shrink-0 ${
                    selectedTab === "recruiters" 
                      ? "bg-black/10" 
                      : "hover:bg-black/5"
                  }`}
                >
                  <p className="font-montserrat font-medium leading-[2] text-sm md:text-base text-black whitespace-nowrap">
                    Recruiters
                  </p>
                </button>
                <button
                  onClick={() => handleTabChange("aiEnthusiasts")}
                  className={`px-3 md:px-4 py-1.5 md:py-2 rounded-md cursor-pointer transition-all duration-[600ms] min-w-fit shrink-0 ${
                    selectedTab === "aiEnthusiasts" 
                      ? "bg-black/10" 
                      : "hover:bg-black/5"
                  }`}
                >
                  <p className="font-montserrat font-medium leading-[2] text-sm md:text-base text-black whitespace-nowrap">
                    AI Enthusiasts
                  </p>
                </button>
                <button
                  onClick={() => handleTabChange("engineers")}
                  className={`px-3 md:px-4 py-1.5 md:py-2 rounded-md cursor-pointer transition-all duration-[600ms] min-w-fit shrink-0 ${
                    selectedTab === "engineers" 
                      ? "bg-black/10" 
                      : "hover:bg-black/5"
                  }`}
                >
                  <p className="font-montserrat font-medium leading-[2] text-sm md:text-base text-black whitespace-nowrap">
                    Engineers
                  </p>
                </button>
              </div>
              <div className="flex flex-col items-start w-full">
                <div className="font-red-hat font-semibold leading-[1.2] text-[32px] md:text-[48px] lg:text-[64px] text-black/90 w-full">
                  <p 
                    key={selectedTab}
                    className="font-[400] transition-opacity duration-[600ms]"
                    style={{ opacity }}
                  >
                    {displayContent.greeting} {displayContent.description}
                  </p>
                </div>
              </div>
              <div className="bg-gradient-to-l from-[rgba(84,84,84,0)] h-px opacity-50 to-black/60 w-[69px]" />
              <p className="font-montserrat font-normal leading-[2] text-[#181818] text-base">
                Currently<span className="font-bold"> Lead UX </span>@ Xflowpay
              </p>
            </div>

            {/* Case Studies Section - Full width (12 columns) */}
            <div id="works" className="col-span-12 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mt-8 md:mt-16">
              {caseStudies.map((study, index) => (
                <Link
                  key={study.slug}
                  href={`/case-studies/${study.slug}`}
                  className="bg-[rgba(255,255,255,0.2)] border border-[#f0f0f0] min-h-[400px] md:h-[505px] relative rounded-[15px] hover:bg-[rgba(255,255,255,0.3)] transition-colors flex flex-col"
                >
                  <div className="flex-1 overflow-clip relative rounded-[inherit] w-full flex flex-col">
                    <div className="flex flex-col gap-3 md:gap-[13px] items-start p-4 md:p-0 md:left-[37px] md:top-8 md:w-[376px] md:absolute relative z-10">
                      <p className="font-helvetica leading-normal not-italic text-xl md:text-[32px] text-black/80 w-full">
                        {study.title}
                      </p>
                      <p className="font-montserrat font-medium leading-[1.6] opacity-60 text-sm md:text-base text-black w-full">
                        {study.description}
                      </p>
                    </div>
                    <div className="absolute bottom-[-33px] h-[200px] md:h-[275px] left-[50%] translate-x-[-50%] w-[80%] md:w-[453.832px] mt-auto">
                      <img
                        alt={study.title}
                        className="absolute inset-0 max-w-none object-center object-cover pointer-events-none w-full h-full"
                        src={caseStudyImages[index] || imgCaseStudyImage}
                      />
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* AI Projects Section - Starts at column 5, spans 8 columns */}
            <div className="col-span-12 md:col-start-5 md:col-span-8 flex flex-col gap-8 md:gap-12 items-start mt-16 md:mt-32">
              <div className="flex flex-col gap-4 items-start">
                <p className="font-red-hat font-semibold leading-[1.2] text-[32px] md:text-[48px] lg:text-[64px] text-black/90 w-full max-w-full md:max-w-[588px]">
                  I have built some cool AI Stuff
                </p>
                <p className="font-montserrat font-medium leading-[1.6] opacity-60 text-sm md:text-base text-black w-full max-w-full md:max-w-[588px]">
                  I believe that AI is here to stay and while at the core it still is series of algorithms, on the surface it is a marvellous enabler. Lorem ipsum dolor sit amet consectetur. Vestibulum purus cursus dignissim vulputate leo. Pretium eu aliquet augue hendrerit id at proin. Vitae mattis semper in ac. Ornare blandit
                </p>
              </div>
              <div className="flex flex-col gap-6 md:gap-8 items-start w-full">
                {/* AI Project 1 */}
                <div className="bg-[rgba(255,255,255,0.2)] border border-[#f0f0f0] relative rounded-[15px] w-full">
                  <div className="box-border flex flex-col md:flex-row gap-4 md:gap-6 items-start overflow-clip p-4 md:p-8 rounded-[inherit] w-full">
                    <div className="relative shrink-0 w-[80px] h-[80px] md:w-[120px] md:h-[120px]">
                      <img
                        alt="Plugin Frame Cleaner"
                        className="absolute backdrop-blur-[11.429px] backdrop-filter inset-0 max-w-none object-center object-cover opacity-80 pointer-events-none w-full h-full"
                        src={imgProjectImage}
                      />
                    </div>
                    <div className="basis-0 flex flex-col grow items-start justify-between min-h-0 min-w-0 relative self-stretch shrink-0 w-full md:w-auto">
                      <div className="flex flex-wrap gap-2 md:gap-[14px] items-center w-full md:w-[353px]">
                        <p className="font-helvetica leading-normal not-italic text-xl md:text-[32px] text-black/80">
                          Plugin
                        </p>
                        <div className="flex h-0 items-center justify-center relative shrink-0 w-0 hidden md:flex">
                          <div className="flex-none rotate-[270deg]">
                            <div className="bg-gradient-to-l from-transparent h-px opacity-50 to-transparent via-50% via-black/60 w-4" />
                          </div>
                        </div>
                        <p className="font-helvetica leading-normal not-italic text-xl md:text-[32px] text-black/80">
                          Frame Cleaner
                        </p>
                      </div>
                      <p className="font-montserrat font-medium leading-[1.6] opacity-60 text-sm md:text-base text-black w-full">
                        Lorem ipsum dolor sit amet consectetur. Vestibulum purus cursus dignissim vulputate leo. Pretium eu aliquet augue hendrerit id at proin. Vitae mattis semper in ac. Ornare blandit
                      </p>
                    </div>
                  </div>
                </div>

                {/* AI Project 2 */}
                <div className="bg-[rgba(255,255,255,0.2)] border border-[#f0f0f0] relative rounded-[15px] w-full">
                  <div className="box-border flex flex-col md:flex-row gap-4 md:gap-6 items-start overflow-clip p-4 md:p-8 rounded-[inherit] w-full">
                    <div className="relative shrink-0 w-[80px] h-[80px] md:w-[120px] md:h-[120px]">
                      <img
                        alt="Plugin Frame Cleaner"
                        className="absolute backdrop-blur-[11.429px] backdrop-filter inset-0 max-w-none object-center object-cover opacity-80 pointer-events-none w-full h-full"
                        src={imgLogoSelectionIndicatorNew2}
                      />
                    </div>
                    <div className="basis-0 flex flex-col grow items-start justify-between min-h-0 min-w-0 relative self-stretch shrink-0 w-full md:w-auto">
                      <div className="flex flex-wrap gap-2 md:gap-[14px] items-center w-full md:w-[353px]">
                        <p className="font-helvetica leading-normal not-italic text-xl md:text-[32px] text-black/80">
                          Plugin
                        </p>
                        <div className="flex h-0 items-center justify-center relative shrink-0 w-0 hidden md:flex">
                          <div className="flex-none rotate-[270deg]">
                            <div className="bg-gradient-to-l from-transparent h-px opacity-50 to-transparent via-50% via-black/60 w-4" />
                          </div>
                        </div>
                        <p className="font-helvetica leading-normal not-italic text-xl md:text-[32px] text-black/80">
                          Frame Cleaner
                        </p>
                      </div>
                      <p className="font-montserrat font-medium leading-[1.6] opacity-60 text-sm md:text-base text-black w-full">
                        Lorem ipsum dolor sit amet consectetur. Vestibulum purus cursus dignissim vulputate leo. Pretium eu aliquet augue hendrerit id at proin. Vitae mattis semper in ac. Ornare blandit
                      </p>
                    </div>
                  </div>
                </div>

                {/* AI Project 3 */}
                <div className="bg-[rgba(255,255,255,0.2)] border border-[#f0f0f0] relative rounded-[15px] w-full">
                  <div className="box-border flex flex-col md:flex-row gap-4 md:gap-6 items-start overflow-clip p-4 md:p-8 rounded-[inherit] w-full">
                    <div className="bg-[rgba(255,255,255,0.2)] border border-[#f0f0f0] relative rounded-[15px] shrink-0 w-[80px] h-[80px] md:w-[120px] md:h-[120px]">
                      <div className="overflow-clip relative rounded-[inherit] w-full h-full">
                        <div className="absolute h-[60px] md:h-[90px] left-[20px] md:left-[26px] top-[10px] md:top-[15px] w-[46px] md:w-[69px]">
                          <div className="absolute inset-0 overflow-hidden pointer-events-none">
                            <img
                              alt="Design to Code"
                              className="absolute h-full left-0 max-w-none top-0 w-[235.29%]"
                              src={imgProjectImage1}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="basis-0 flex flex-col grow items-start justify-between min-h-0 min-w-0 relative self-stretch shrink-0 w-full md:w-auto">
                      <div className="flex flex-wrap gap-2 md:gap-[14px] items-center w-full md:w-[353px]">
                        <p className="font-helvetica leading-normal not-italic text-xl md:text-[32px] text-black/80">
                          Design to Code
                        </p>
                        <div className="flex h-0 items-center justify-center relative shrink-0 w-0 hidden md:flex">
                          <div className="flex-none rotate-[270deg]">
                            <div className="bg-gradient-to-l from-transparent h-px opacity-50 to-transparent via-50% via-black/60 w-4" />
                          </div>
                        </div>
                        <p className="font-helvetica leading-normal not-italic text-xl md:text-[32px] text-black/80">
                          Xflow &lt; &gt; GFF 2025
                        </p>
                      </div>
                      <p className="font-montserrat font-medium leading-[1.6] opacity-60 text-sm md:text-base text-black w-full">
                        Lorem ipsum dolor sit amet consectetur. Vestibulum purus cursus dignissim vulputate leo. Pretium eu aliquet augue hendrerit id at proin. Vitae mattis semper in ac. Ornare blandit
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Blog Section - Starts at column 1, spans 8 columns */}
            <div className="col-span-12 md:col-start-1 md:col-span-8 flex flex-col gap-8 md:gap-12 items-start mt-16 md:mt-32 mb-20">
              <div className="flex flex-col gap-4 items-start">
                <p className="font-red-hat font-semibold leading-[1.2] text-[32px] md:text-[48px] lg:text-[64px] text-black/90 w-full max-w-full md:max-w-[588px]">
                  I wish I wrote more often
                </p>
                <p className="font-montserrat font-medium leading-[2] opacity-60 text-sm md:text-base text-black w-full max-w-full md:max-w-[588px]">
                  This will be my new year resolution! Lorem ipsum dolor sit amet consectetur. Vestibulum purus cursus dignissim vulputate leo. Pretium eu aliquet augue hendrerit id at proin. Vitae mattis semper in ac. Ornare blandit
                </p>
              </div>
              <div className="flex flex-col gap-6 md:gap-8 items-start w-full">
                {/* Blog Post 1 */}
                <div className="bg-[rgba(255,255,255,0.2)] border border-[#f0f0f0] relative rounded-[15px] w-full">
                  <div className="box-border flex flex-col md:flex-row gap-4 md:gap-6 items-start overflow-clip p-4 md:p-8 rounded-[inherit] w-full">
                    <div className="bg-[rgba(255,255,255,0.2)] border border-[#f0f0f0] relative rounded-[15px] shrink-0 w-[80px] h-[80px] md:w-[120px] md:h-[120px]">
                      <div className="overflow-clip relative rounded-[inherit] w-full h-full">
                        <div className="absolute h-[60px] md:h-[90px] left-[20px] md:left-[26px] top-[10px] md:top-[15px] w-[46px] md:w-[69px]">
                          <div className="absolute inset-0 overflow-hidden pointer-events-none">
                            <img
                              alt="Blog post"
                              className="absolute h-full left-0 max-w-none top-0 w-[235.29%]"
                              src={imgProjectImage1}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="basis-0 flex flex-col grow items-start justify-between min-h-0 min-w-0 relative self-stretch shrink-0 w-full md:w-auto">
                      <div className="flex flex-wrap gap-2 md:gap-[14px] items-center w-full md:w-[353px]">
                        <p className="font-helvetica leading-normal not-italic text-xl md:text-[32px] text-black/80">
                          Design to Code
                        </p>
                        <div className="flex h-0 items-center justify-center relative shrink-0 w-0 hidden md:flex">
                          <div className="flex-none rotate-[270deg]">
                            <div className="bg-gradient-to-l from-transparent h-px opacity-50 to-transparent via-50% via-black/60 w-4" />
                          </div>
                        </div>
                        <p className="font-helvetica leading-normal not-italic text-xl md:text-[32px] text-black/80">
                          Xflow &lt; &gt; GFF 2025
                        </p>
                      </div>
                      <p className="font-montserrat font-medium leading-[1.6] opacity-60 text-sm md:text-base text-black w-full">
                        Lorem ipsum dolor sit amet consectetur. Vestibulum purus cursus dignissim vulputate leo. Pretium eu aliquet augue hendrerit id at proin. Vitae mattis semper in ac. Ornare blandit
                      </p>
                    </div>
                  </div>
                </div>

                {/* Blog Post 2 */}
                <div className="bg-[rgba(255,255,255,0.2)] border border-[#f0f0f0] relative rounded-[15px] w-full">
                  <div className="box-border flex flex-col md:flex-row gap-4 md:gap-6 items-start overflow-clip p-4 md:p-8 rounded-[inherit] w-full">
                    <div className="bg-[rgba(255,255,255,0.2)] border border-[#f0f0f0] relative rounded-[15px] shrink-0 w-[80px] h-[80px] md:w-[120px] md:h-[120px]">
                      <div className="overflow-clip relative rounded-[inherit] w-full h-full">
                        <div className="absolute h-[60px] md:h-[90px] left-[20px] md:left-[26px] top-[10px] md:top-[15px] w-[46px] md:w-[69px]">
                          <div className="absolute inset-0 overflow-hidden pointer-events-none">
                            <img
                              alt="Blog post"
                              className="absolute h-full left-0 max-w-none top-0 w-[235.29%]"
                              src={imgProjectImage1}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="basis-0 flex flex-col grow items-start justify-between min-h-0 min-w-0 relative self-stretch shrink-0 w-full md:w-auto">
                      <div className="flex flex-wrap gap-2 md:gap-[14px] items-center w-full md:w-[353px]">
                        <p className="font-helvetica leading-normal not-italic text-xl md:text-[32px] text-black/80">
                          Design to Code
                        </p>
                        <div className="flex h-0 items-center justify-center relative shrink-0 w-0 hidden md:flex">
                          <div className="flex-none rotate-[270deg]">
                            <div className="bg-gradient-to-l from-transparent h-px opacity-50 to-transparent via-50% via-black/60 w-4" />
                          </div>
                        </div>
                        <p className="font-helvetica leading-normal not-italic text-xl md:text-[32px] text-black/80">
                          Xflow &lt; &gt; GFF 2025
                        </p>
                      </div>
                      <p className="font-montserrat font-medium leading-[1.6] opacity-60 text-sm md:text-base text-black w-full">
                        Lorem ipsum dolor sit amet consectetur. Vestibulum purus cursus dignissim vulputate leo. Pretium eu aliquet augue hendrerit id at proin. Vitae mattis semper in ac. Ornare blandit
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer - Full width (12 columns) */}
        <div className="backdrop-blur-sm backdrop-filter bg-[rgba(255,255,255,0.5)] border border-[#f0f0f0] box-border flex flex-col md:flex-row font-montserrat font-medium min-h-[90px] h-auto md:h-[90px] items-center justify-between gap-4 mb-10 mt-auto px-4 md:px-8 py-4 md:py-0 rounded-[4px] text-sm md:text-base text-black underline w-full max-w-[1440px]">
          <a
            href="mailto:hello@prateeksingh.in"
            className="decoration-solid hover:opacity-70 transition-opacity"
          >
            hello@prateeksingh.in
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="decoration-solid hover:opacity-70 transition-opacity"
          >
            LinkedIN
          </a>
        </div>
      </div>
    </div>
  );
}
