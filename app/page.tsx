"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { getAllCaseStudies } from "@/lib/case-studies";
import Navigation from "@/components/Navigation";

// Local image paths
const imgCaseStudyImage = "/images/case-study-1.png";
const imgCaseStudyImage1 = "/images/case-study-2.png";
const imgCaseStudyImage2 = "/images/case-study-3.png";
const imgProjectImage = "/images/project-image-1.png";
const imgLogoSelectionIndicatorNew2 = "/images/logo-selection.png";
const imgProjectImage1 = "/images/project-image-2.png";

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
            const headerContainer = header?.parentElement as HTMLElement;
            const gap = 24;
            
            // Calculate total header height including top offset
            let headerTotalHeight = 106; // Default for mobile (top-4: 16px + h-90: 90px)
            if (window.innerWidth >= 1024) {
              headerTotalHeight = 130; // lg: top-10 (40px) + h-90 (90px)
            } else if (window.innerWidth >= 640) {
              headerTotalHeight = 114; // sm: top-6 (24px) + h-90 (90px)
            }
            
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerTotalHeight - gap;
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

  const handleWorksClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('works');
    if (element) {
      const gap = 24;
      
      // Calculate total header height including top offset
      let headerTotalHeight = 106; // Default for mobile (top-4: 16px + h-90: 90px)
      if (window.innerWidth >= 1024) {
        headerTotalHeight = 130; // lg: top-10 (40px) + h-90 (90px)
      } else if (window.innerWidth >= 640) {
        headerTotalHeight = 114; // sm: top-6 (24px) + h-90 (90px)
      }
      
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerTotalHeight - gap;
      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="bg-[#DADAE0] relative min-h-screen flex flex-col">
      {/* Decorative Background Elements */}
      <div 
        style={{
          background: 'radial-gradient(100% 100% at 0% 0%, #fff 0%, #dbdbdb 100%)',
          pointerEvents: 'none',
          zIndex: 0,
          flex: 'none',
          gap: '10px',
          height: '200vh',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          overflow: 'hidden',
          WebkitMask: 'radial-gradient(125% 100% at 0 0, #000 0%, #00000039 88.2883%, #0000 100%)',
          mask: 'radial-gradient(125% 100% at 0 0, #000 0%, #00000039 88.2883%, #0000 100%)'
        }}
      >
        <div 
          style={{
            background: 'linear-gradient(#fff 0% 83.9344%, #fff0 100%)',
            flex: 'none',
            width: '591px',
            maxWidth: '960px',
            height: '1269px',
            position: 'absolute',
            top: '-209px',
            left: 'calc(33.6111% - 295.522px)',
            overflow: 'hidden',
            WebkitMask: 'linear-gradient(90deg, #0000 0%, #000 20.0362%, #0000 36.175%, #000 55.4054%, #00000021 67.1171%, #000 78.2306%, #0000 97.2973%)',
            mask: 'linear-gradient(90deg, #0000 0%, #000 20.0362%, #0000 36.175%, #000 55.4054%, #00000021 67.1171%, #000 78.2306%, #0000 97.2973%)',
            transform: 'skewX(45deg)'
          }}
        />
        <div 
          style={{
            background: 'linear-gradient(#fff 0% 83.9344%, #fff0 100%)',
            flex: 'none',
            width: '582px',
            maxWidth: '960px',
            height: '1269px',
            position: 'absolute',
            top: '-209px',
            left: 'calc(-1.52778% - 291.002px)',
            overflow: 'hidden',
            WebkitMask: 'linear-gradient(90deg, #0000 11.3985%, #000 25.5578%, #0000008c 41.6966%, #00000021 67.1171%, #000 78.2306%, #0000 97.2973%)',
            mask: 'linear-gradient(90deg, #0000 11.3985%, #000 25.5578%, #0000008c 41.6966%, #00000021 67.1171%, #000 78.2306%, #0000 97.2973%)',
            transform: 'skewX(45deg)'
          }}
        />
        <div 
          style={{
            background: 'linear-gradient(#fff 0% 67%, #fff0 100%)',
            flex: 'none',
            width: '441px',
            maxWidth: '960px',
            height: '1269px',
            position: 'absolute',
            top: '-209px',
            left: 'calc(33.6806% - 220.619px)',
            overflow: 'hidden',
            WebkitMask: 'linear-gradient(90deg, #0000 9.81489%, #000 20.0362%, #0000008c 28.5878%, #0000006c 40.0901%, #000 48.6487%, #0004 54.5045%, #00000021 78.579%, #000 88.554%, #0000 97.2973%)',
            mask: 'linear-gradient(90deg, #0000 9.81489%, #000 20.0362%, #0000008c 28.5878%, #0000006c 40.0901%, #000 48.6487%, #0004 54.5045%, #00000021 78.579%, #000 88.554%, #0000 97.2973%)',
            transform: 'skewX(45deg)'
          }}
        />
        <div 
          style={{
            opacity: 0.6,
            background: 'linear-gradient(#fff 0% 83.9344%, #fff0 100%)',
            flex: 'none',
            width: '684px',
            maxWidth: '960px',
            height: '1269px',
            position: 'absolute',
            top: '-209px',
            left: 'calc(50.1389% - 341.798px)',
            overflow: 'hidden',
            WebkitMask: 'linear-gradient(90deg, #0000 0%, #000 17.6591%, #0000008c 26.6417%, #000 35.2302%, #0000 47.6985%, #00000021 69.1776%, #000 79.1456%, #0000 97.2973%)',
            mask: 'linear-gradient(90deg, #0000 0%, #000 17.6591%, #0000008c 26.6417%, #000 35.2302%, #0000 47.6985%, #00000021 69.1776%, #000 79.1456%, #0000 97.2973%)',
            transform: 'skewX(45deg)'
          }}
        />
        <div 
          style={{
            opacity: 0.75,
            background: 'linear-gradient(#fff 0% 83.9344%, #fff0 100%)',
            flex: 'none',
            width: '426px',
            maxWidth: '960px',
            height: '1269px',
            position: 'absolute',
            top: '-209px',
            left: 'calc(49.0972% - 213.086px)',
            overflow: 'hidden',
            WebkitMask: 'linear-gradient(90deg, #0000 0%, #000 20.0362%, #0000008c 27.5778%, #000 42.3423%, #0000 48.6047%, #00000021 67.1171%, #000 74.9525% 82.4324%, #00000078 88.6719%, #0000 97.2973%)',
            mask: 'linear-gradient(90deg, #0000 0%, #000 20.0362%, #0000008c 27.5778%, #000 42.3423%, #0000 48.6047%, #00000021 67.1171%, #000 74.9525% 82.4324%, #00000078 88.6719%, #0000 97.2973%)',
            transform: 'skewX(45deg)'
          }}
        />
      </div>

      {/* Navigation */}
      <Navigation onWorksClick={handleWorksClick} />

      {/* 12-Column Grid Container - Max width with smooth responsive padding */}
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="flex-grow pb-10 pt-32 sm:pt-40 lg:pt-48">
          {/* 12-Column Grid System */}
          <div className="grid grid-cols-12 gap-4 sm:gap-5 lg:gap-6 w-full">
            {/* Introduction Section - Starts at column 5, spans 8 columns (66.67%) */}
            <div className="col-span-12 lg:col-start-5 lg:col-span-8 flex flex-col gap-5 items-start min-h-[50vh] pt-8">
              <div className="flex gap-3 sm:gap-4 lg:gap-5 items-start relative overflow-x-auto w-full pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-hide">
                <button
                  onClick={() => handleTabChange("designers")}
                  className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-md cursor-pointer transition-all duration-[600ms] min-w-fit shrink-0 ${
                    selectedTab === "designers" 
                      ? "bg-black/10" 
                      : "hover:bg-black/5"
                  }`}
                >
                  <p className="font-montserrat font-medium leading-[2] text-sm sm:text-base text-black whitespace-nowrap">
                    For Designers
                  </p>
                </button>
                <button
                  onClick={() => handleTabChange("recruiters")}
                  className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-md cursor-pointer transition-all duration-[600ms] min-w-fit shrink-0 ${
                    selectedTab === "recruiters" 
                      ? "bg-black/10" 
                      : "hover:bg-black/5"
                  }`}
                >
                  <p className="font-montserrat font-medium leading-[2] text-sm sm:text-base text-black whitespace-nowrap">
                    Recruiters
                  </p>
                </button>
                <button
                  onClick={() => handleTabChange("aiEnthusiasts")}
                  className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-md cursor-pointer transition-all duration-[600ms] min-w-fit shrink-0 ${
                    selectedTab === "aiEnthusiasts" 
                      ? "bg-black/10" 
                      : "hover:bg-black/5"
                  }`}
                >
                  <p className="font-montserrat font-medium leading-[2] text-sm sm:text-base text-black whitespace-nowrap">
                    AI Enthusiasts
                  </p>
                </button>
                <button
                  onClick={() => handleTabChange("engineers")}
                  className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-md cursor-pointer transition-all duration-[600ms] min-w-fit shrink-0 ${
                    selectedTab === "engineers" 
                      ? "bg-black/10" 
                      : "hover:bg-black/5"
                  }`}
                >
                  <p className="font-montserrat font-medium leading-[2] text-sm sm:text-base text-black whitespace-nowrap">
                    Engineers
                  </p>
                </button>
              </div>
              <div className="flex flex-col items-start w-full">
                <div className="font-nunito font-semibold leading-[1.2] text-[32px] sm:text-[40px] md:text-[48px] lg:text-[64px] text-black/90 w-full">
                  <p 
                    key={selectedTab}
                    className="font-nunito font-[400] transition-opacity duration-[600ms]"
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
            <div id="works" className="col-span-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 mt-6 sm:mt-12 lg:mt-16">
              {caseStudies.map((study, index) => (
                <Link
                  key={study.slug}
                  href={`/case-studies/${study.slug}`}
                  className="group bg-[rgba(255,255,255,0.2)] border border-[#f0f0f0] min-h-[400px] sm:h-[450px] lg:h-[505px] relative rounded-[15px] hover:bg-[rgba(255,255,255,0.3)] transition-colors flex flex-col"
                >
                  <div className="flex-1 overflow-clip relative rounded-[inherit] w-full flex flex-col">
                    <div className="flex flex-col gap-3 sm:gap-[13px] items-start p-4 sm:p-0 sm:left-[24px] lg:left-[37px] sm:top-6 lg:top-8 sm:max-w-[calc(100%-48px)] lg:max-w-[376px] sm:absolute relative z-10 sm:pr-4 lg:pr-8">
                      <p className="font-helvetica leading-normal not-italic text-[24px] text-black/80 max-w-full break-words overflow-wrap-anywhere">
                        {study.title}
                      </p>
                      <p className="font-montserrat font-medium leading-[1.6] opacity-60 text-sm sm:text-base text-black max-w-full break-words overflow-wrap-anywhere">
                        {study.description}
                      </p>
                    </div>
                    <div className="absolute bottom-[-33px] lg:bottom-[-103px] h-[200px] sm:h-[240px] lg:h-[344px] left-[50%] translate-x-[-50%] w-[80%] sm:w-[70%] lg:w-full max-w-full mt-auto transition-transform duration-300 group-hover:-translate-y-[10%]">
                      <img
                        alt={study.title}
                        className="absolute inset-0 max-w-full object-center object-contain pointer-events-none w-full h-full"
                        src={caseStudyImages[index] || imgCaseStudyImage}
                      />
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* AI Projects Section - Starts at column 5, spans 8 columns */}
            <div className="col-span-12 lg:col-start-5 lg:col-span-8 flex flex-col gap-8 sm:gap-10 lg:gap-12 items-start mt-6 sm:mt-20 lg:mt-32">
              <div className="flex flex-col gap-4 items-start">
                <p className="font-helvetica leading-normal not-italic text-[24px] text-black/80 w-full max-w-full sm:max-w-[588px] break-words overflow-wrap-anywhere">
                  I have built some cool AI Stuff
                </p>
                <p className="font-montserrat font-medium leading-[1.6] opacity-60 text-sm sm:text-base text-black w-full max-w-full sm:max-w-[588px]">
                  I believe that AI is here to stay and while at the core it still is series of algorithms, on the surface it is a marvellous enabler. Lorem ipsum dolor sit amet consectetur. Vestibulum purus cursus dignissim vulputate leo. Pretium eu aliquet augue hendrerit id at proin. Vitae mattis semper in ac. Ornare blandit
                </p>
              </div>
              <div className="flex flex-col gap-6 sm:gap-7 lg:gap-8 items-start w-full">
                {/* AI Project 1 */}
                <div className="bg-[rgba(255,255,255,0.2)] border border-[#f0f0f0] relative rounded-[15px] w-full">
                  <div className="box-border flex flex-col sm:flex-row gap-4 sm:gap-5 lg:gap-6 items-start overflow-clip p-4 sm:p-5 lg:p-6 rounded-[inherit] w-full">
                    <div className="relative shrink-0 w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] lg:w-[120px] lg:h-[120px]">
                      <img
                        alt="Plugin Frame Cleaner"
                        className="absolute backdrop-blur-[11.429px] backdrop-filter inset-0 max-w-none object-center object-cover opacity-80 pointer-events-none w-full h-full"
                        src={imgProjectImage}
                      />
                    </div>
                    <div className="basis-0 flex flex-col grow items-start justify-between min-h-0 min-w-0 relative self-stretch shrink-0 w-full sm:w-auto">
                      <div className="flex flex-wrap gap-2 sm:gap-3 lg:gap-[14px] items-center w-full sm:w-[300px] lg:w-[353px]">
                        <p className="font-helvetica leading-normal not-italic text-[24px] text-black/80">
                          Plugin
                        </p>
                        <div className="flex h-0 items-center justify-center relative shrink-0 w-0 hidden sm:flex">
                          <div className="flex-none rotate-[270deg]">
                            <div className="bg-gradient-to-l from-transparent h-px opacity-50 to-transparent via-50% via-black/60 w-4" />
                          </div>
                        </div>
                        <p className="font-helvetica leading-normal not-italic text-[24px] text-black/80">
                          Frame Cleaner
                        </p>
                      </div>
                      <p className="font-montserrat font-medium leading-[1.6] opacity-60 text-sm sm:text-base text-black w-full">
                        Lorem ipsum dolor sit amet consectetur. Vestibulum purus cursus dignissim vulputate leo. Pretium eu aliquet augue hendrerit id at proin. Vitae mattis semper in ac. Ornare blandit
                      </p>
                    </div>
                  </div>
                </div>

                {/* AI Project 2 */}
                <div className="bg-[rgba(255,255,255,0.2)] border border-[#f0f0f0] relative rounded-[15px] w-full">
                  <div className="box-border flex flex-col sm:flex-row gap-4 sm:gap-5 lg:gap-6 items-start overflow-clip p-4 sm:p-5 lg:p-6 rounded-[inherit] w-full">
                    <div className="relative shrink-0 w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] lg:w-[120px] lg:h-[120px]">
                      <img
                        alt="Plugin Frame Cleaner"
                        className="absolute backdrop-blur-[11.429px] backdrop-filter inset-0 max-w-none object-center object-cover opacity-80 pointer-events-none w-full h-full"
                        src={imgLogoSelectionIndicatorNew2}
                      />
                    </div>
                    <div className="basis-0 flex flex-col grow items-start justify-between min-h-0 min-w-0 relative self-stretch shrink-0 w-full sm:w-auto">
                      <div className="flex flex-wrap gap-2 sm:gap-3 lg:gap-[14px] items-center w-full sm:w-[300px] lg:w-[353px]">
                        <p className="font-helvetica leading-normal not-italic text-[24px] text-black/80">
                          Plugin
                        </p>
                        <div className="flex h-0 items-center justify-center relative shrink-0 w-0 hidden sm:flex">
                          <div className="flex-none rotate-[270deg]">
                            <div className="bg-gradient-to-l from-transparent h-px opacity-50 to-transparent via-50% via-black/60 w-4" />
                          </div>
                        </div>
                        <p className="font-helvetica leading-normal not-italic text-[24px] text-black/80">
                          Frame Cleaner
                        </p>
                      </div>
                      <p className="font-montserrat font-medium leading-[1.6] opacity-60 text-sm sm:text-base text-black w-full">
                        Lorem ipsum dolor sit amet consectetur. Vestibulum purus cursus dignissim vulputate leo. Pretium eu aliquet augue hendrerit id at proin. Vitae mattis semper in ac. Ornare blandit
                      </p>
                    </div>
                  </div>
                </div>

                {/* AI Project 3 */}
                <div className="bg-[rgba(255,255,255,0.2)] border border-[#f0f0f0] relative rounded-[15px] w-full">
                  <div className="box-border flex flex-col sm:flex-row gap-4 sm:gap-5 lg:gap-6 items-start overflow-clip p-4 sm:p-5 lg:p-6 rounded-[inherit] w-full">
                    <div className="bg-[rgba(255,255,255,0.2)] border border-[#f0f0f0] relative rounded-[15px] shrink-0 w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] lg:w-[120px] lg:h-[120px]">
                      <div className="overflow-clip relative rounded-[inherit] w-full h-full">
                        <div className="absolute h-[60px] sm:h-[75px] lg:h-[90px] left-[20px] sm:left-[23px] lg:left-[26px] top-[10px] sm:top-[12px] lg:top-[15px] w-[46px] sm:w-[57px] lg:w-[69px]">
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
                    <div className="basis-0 flex flex-col grow items-start justify-between min-h-0 min-w-0 relative self-stretch shrink-0 w-full sm:w-auto">
                      <div className="flex flex-nowrap gap-2 sm:gap-3 lg:gap-[14px] items-center w-full sm:w-[300px] lg:w-[353px] whitespace-nowrap">
                        <p className="font-helvetica leading-normal not-italic text-[24px] text-black/80">
                          Design to Code
                        </p>
                        <div className="flex h-0 items-center justify-center relative shrink-0 w-0 hidden sm:flex">
                          <div className="flex-none rotate-[270deg]">
                            <div className="bg-gradient-to-l from-transparent h-px opacity-50 to-transparent via-50% via-black/60 w-4" />
                          </div>
                        </div>
                        <p className="font-helvetica leading-normal not-italic text-[24px] text-black/80">
                          Xflow &lt; &gt; GFF 2025
                        </p>
                      </div>
                      <p className="font-montserrat font-medium leading-[1.6] opacity-60 text-sm sm:text-base text-black w-full">
                        Lorem ipsum dolor sit amet consectetur. Vestibulum purus cursus dignissim vulputate leo. Pretium eu aliquet augue hendrerit id at proin. Vitae mattis semper in ac. Ornare blandit
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Blog Section - Starts at column 1, spans 8 columns */}
            <div className="col-span-12 lg:col-start-1 lg:col-span-8 flex flex-col gap-8 sm:gap-10 lg:gap-12 items-start mt-6 sm:mt-20 lg:mt-32 mb-20">
              <div className="flex flex-col gap-4 items-start">
                <p className="font-helvetica leading-normal not-italic text-[24px] text-black/80 w-full max-w-full sm:max-w-[588px] break-words overflow-wrap-anywhere">
                  I wish I wrote more often
                </p>
                <p className="font-montserrat font-medium leading-[2] opacity-60 text-sm sm:text-base text-black w-full max-w-full sm:max-w-[588px]">
                  This will be my new year resolution! Lorem ipsum dolor sit amet consectetur. Vestibulum purus cursus dignissim vulputate leo. Pretium eu aliquet augue hendrerit id at proin. Vitae mattis semper in ac. Ornare blandit
                </p>
              </div>
              <div className="flex flex-col gap-6 sm:gap-7 lg:gap-8 items-start w-full">
                {/* Blog Post 1 */}
                <div className="bg-[rgba(255,255,255,0.2)] border border-[#f0f0f0] relative rounded-[15px] w-full">
                  <div className="box-border flex flex-col sm:flex-row gap-4 sm:gap-5 lg:gap-6 items-start overflow-clip p-4 sm:p-5 lg:p-6 rounded-[inherit] w-full">
                    <div className="bg-[rgba(255,255,255,0.2)] border border-[#f0f0f0] relative rounded-[15px] shrink-0 w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] lg:w-[120px] lg:h-[120px]">
                      <div className="overflow-clip relative rounded-[inherit] w-full h-full">
                        <div className="absolute h-[60px] sm:h-[75px] lg:h-[90px] left-[20px] sm:left-[23px] lg:left-[26px] top-[10px] sm:top-[12px] lg:top-[15px] w-[46px] sm:w-[57px] lg:w-[69px]">
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
                    <div className="basis-0 flex flex-col grow items-start justify-between min-h-0 min-w-0 relative self-stretch shrink-0 w-full sm:w-auto">
                      <div className="flex flex-nowrap gap-2 sm:gap-3 lg:gap-[14px] items-center w-full sm:w-[300px] lg:w-[353px] whitespace-nowrap">
                        <p className="font-helvetica leading-normal not-italic text-[24px] text-black/80">
                          Design to Code
                        </p>
                        <div className="flex h-0 items-center justify-center relative shrink-0 w-0 hidden sm:flex">
                          <div className="flex-none rotate-[270deg]">
                            <div className="bg-gradient-to-l from-transparent h-px opacity-50 to-transparent via-50% via-black/60 w-4" />
                          </div>
                        </div>
                        <p className="font-helvetica leading-normal not-italic text-[24px] text-black/80">
                          Xflow &lt; &gt; GFF 2025
                        </p>
                      </div>
                      <p className="font-montserrat font-medium leading-[1.6] opacity-60 text-sm sm:text-base text-black w-full">
                        Lorem ipsum dolor sit amet consectetur. Vestibulum purus cursus dignissim vulputate leo. Pretium eu aliquet augue hendrerit id at proin. Vitae mattis semper in ac. Ornare blandit
                      </p>
                    </div>
                  </div>
                </div>

                {/* Blog Post 2 */}
                <div className="bg-[rgba(255,255,255,0.2)] border border-[#f0f0f0] relative rounded-[15px] w-full">
                  <div className="box-border flex flex-col sm:flex-row gap-4 sm:gap-5 lg:gap-6 items-start overflow-clip p-4 sm:p-5 lg:p-6 rounded-[inherit] w-full">
                    <div className="bg-[rgba(255,255,255,0.2)] border border-[#f0f0f0] relative rounded-[15px] shrink-0 w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] lg:w-[120px] lg:h-[120px]">
                      <div className="overflow-clip relative rounded-[inherit] w-full h-full">
                        <div className="absolute h-[60px] sm:h-[75px] lg:h-[90px] left-[20px] sm:left-[23px] lg:left-[26px] top-[10px] sm:top-[12px] lg:top-[15px] w-[46px] sm:w-[57px] lg:w-[69px]">
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
                    <div className="basis-0 flex flex-col grow items-start justify-between min-h-0 min-w-0 relative self-stretch shrink-0 w-full sm:w-auto">
                      <div className="flex flex-nowrap gap-2 sm:gap-3 lg:gap-[14px] items-center w-full sm:w-[300px] lg:w-[353px] whitespace-nowrap">
                        <p className="font-helvetica leading-normal not-italic text-[24px] text-black/80">
                          Design to Code
                        </p>
                        <div className="flex h-0 items-center justify-center relative shrink-0 w-0 hidden sm:flex">
                          <div className="flex-none rotate-[270deg]">
                            <div className="bg-gradient-to-l from-transparent h-px opacity-50 to-transparent via-50% via-black/60 w-4" />
                          </div>
                        </div>
                        <p className="font-helvetica leading-normal not-italic text-[24px] text-black/80">
                          Xflow &lt; &gt; GFF 2025
                        </p>
                      </div>
                      <p className="font-montserrat font-medium leading-[1.6] opacity-60 text-sm sm:text-base text-black w-full">
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
        <div className="backdrop-blur-sm backdrop-filter bg-[rgba(255,255,255,0.5)] border border-[#f0f0f0] box-border flex flex-col sm:flex-row font-montserrat font-medium min-h-[90px] h-auto sm:h-[90px] items-center justify-between gap-4 mb-10 mt-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-0 rounded-[4px] text-sm sm:text-base text-black underline w-full max-w-7xl">
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
