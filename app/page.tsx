import Link from "next/link";
import { getAllCaseStudies } from "@/lib/case-studies";

// Local image paths
const imgCaseStudyImage = "/images/case-study-1.png";
const imgCaseStudyImage1 = "/images/case-study-2.png";
const imgCaseStudyImage2 = "/images/case-study-3.png";
const imgProjectImage = "/images/project-image-1.png";
const imgLogoSelectionIndicatorNew2 = "/images/logo-selection.png";
const imgProjectImage1 = "/images/project-image-2.png";
const imgLogo = "/images/logo.svg";

export default function Home() {
  const caseStudies = getAllCaseStudies();
  const caseStudyImages = [imgCaseStudyImage, imgCaseStudyImage1, imgCaseStudyImage2];

  return (
    <div className="bg-[#e1e1e1] relative min-h-screen flex flex-col">
      {/* 12-Column Grid Container - Max width 1728px with 144px padding on each side */}
      <div className="max-w-[1728px] mx-auto w-full px-4 md:px-[144px]">
        {/* Header - Full width (12 columns) */}
        <div className="fixed backdrop-blur-sm backdrop-filter bg-[rgba(255,255,255,0.5)] border border-[#f0f0f0] box-border flex h-[90px] items-center justify-between px-8 py-0 rounded-[4px] top-10 w-full max-w-[1440px] z-50 left-1/2 -translate-x-1/2">
          <div className="overflow-clip relative shrink-0 w-[50px] h-[50px]">
            <div className="absolute bg-[#e0e0e0] inset-0 rounded-[5px]" />
            <div className="absolute inset-[24%]">
              <img alt="Logo" className="block max-w-none w-full h-full" src={imgLogo} />
            </div>
          </div>
          <div className="flex font-montserrat font-medium gap-10 items-center text-[#0c120c] text-lg uppercase">
            <Link href="/case-studies" className="hover:opacity-70 transition-opacity">
              Works
            </Link>
            <Link href="/about" className="hover:opacity-70 transition-opacity">
              About
            </Link>
            <a href="/PrateekSingh_Resume.pdf" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
              Resume
            </a>
          </div>
        </div>

        <div className="flex-grow pb-10 pt-48">
          {/* 12-Column Grid System */}
          <div className="grid grid-cols-12 gap-6 w-full">
            {/* Introduction Section - Starts at column 5, spans 8 columns (66.67%) */}
            <div className="col-span-12 md:col-start-5 md:col-span-8 flex flex-col gap-5 items-start min-h-[65vh]">
              <div className="flex gap-5 items-start">
                <div className="flex flex-col items-start pb-px">
                  <p className="font-montserrat font-medium leading-[2] text-base text-black">
                    For Designers
                  </p>
                  <div className="bg-gradient-to-l from-transparent h-px mb-[-1px] opacity-50 to-transparent via-50% via-black/60 w-[113px]" />
                </div>
                <p className="font-montserrat font-medium leading-[2] opacity-60 text-base text-black">
                  Recruiters
                </p>
                <p className="font-montserrat font-medium leading-[2] opacity-60 text-base text-black">
                  AI Enthusiasts
                </p>
                <p className="font-montserrat font-medium leading-[2] opacity-60 text-base text-black">
                  Engineers
                </p>
              </div>
              <div className="flex flex-col items-start w-full">
                <div className="font-red-hat font-semibold leading-[1.2] text-[64px] text-black/90 w-full">
                  <p className="mb-0 font-[400]">Hello there,</p>
                  <p className="font-[400]">I'm Prateek - a designer who cares about making beautiful things that help people.</p>
                </div>
              </div>
              <div className="bg-gradient-to-l from-[rgba(84,84,84,0)] h-px opacity-50 to-black/60 w-[69px]" />
              <p className="font-montserrat font-normal leading-[2] text-[#181818] text-base">
                Currently<span className="font-bold"> Lead UX </span>@ Xflowpay
              </p>
            </div>

            {/* Case Studies Section - Full width (12 columns) */}
            <div className="col-span-12 flex gap-6 items-center mt-32">
              {caseStudies.map((study, index) => (
                <Link
                  key={study.slug}
                  href={`/case-studies/${study.slug}`}
                  className="basis-0 bg-[rgba(255,255,255,0.2)] border border-[#f0f0f0] grow h-[505px] relative rounded-[15px] hover:bg-[rgba(255,255,255,0.3)] transition-colors"
                >
                  <div className="h-[505px] overflow-clip relative rounded-[inherit] w-full">
                    <div className="flex flex-col gap-[13px] items-start left-[37px] top-8 w-[376px] absolute">
                      <p className="font-helvetica leading-normal not-italic text-[32px] text-black/80 w-full">
                        {study.title}
                      </p>
                      <p className="font-montserrat font-medium leading-[1.6] opacity-60 text-base text-black w-full">
                        {study.description}
                      </p>
                    </div>
                    <div className="absolute bottom-[-33px] h-[275px] left-[50%] translate-x-[-50%] w-[453.832px]">
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
            <div className="col-span-12 md:col-start-5 md:col-span-8 flex flex-col gap-12 items-start mt-32">
              <div className="flex flex-col gap-4 items-start">
                <p className="font-red-hat font-semibold leading-[1.2] text-[64px] text-black/90 w-full max-w-[588px]">
                  I have built some cool AI Stuff
                </p>
                <p className="font-montserrat font-medium leading-[1.6] opacity-60 text-base text-black w-full max-w-[588px]">
                  I believe that AI is here to stay and while at the core it still is series of algorithms, on the surface it is a marvellous enabler. Lorem ipsum dolor sit amet consectetur. Vestibulum purus cursus dignissim vulputate leo. Pretium eu aliquet augue hendrerit id at proin. Vitae mattis semper in ac. Ornare blandit
                </p>
              </div>
              <div className="flex flex-col gap-8 items-start w-full">
                {/* AI Project 1 */}
                <div className="bg-[rgba(255,255,255,0.2)] border border-[#f0f0f0] relative rounded-[15px] w-full">
                  <div className="box-border flex gap-6 items-start overflow-clip p-8 rounded-[inherit] w-full">
                    <div className="relative shrink-0 w-[120px] h-[120px]">
                      <img
                        alt="Plugin Frame Cleaner"
                        className="absolute backdrop-blur-[11.429px] backdrop-filter inset-0 max-w-none object-center object-cover opacity-80 pointer-events-none w-full h-full"
                        src={imgProjectImage}
                      />
                    </div>
                    <div className="basis-0 flex flex-col grow items-start justify-between min-h-0 min-w-0 relative self-stretch shrink-0">
                      <div className="flex gap-[14px] items-center w-[353px]">
                        <p className="font-helvetica leading-normal not-italic text-[32px] text-black/80">
                          Plugin
                        </p>
                        <div className="flex h-0 items-center justify-center relative shrink-0 w-0">
                          <div className="flex-none rotate-[270deg]">
                            <div className="bg-gradient-to-l from-transparent h-px opacity-50 to-transparent via-50% via-black/60 w-4" />
                          </div>
                        </div>
                        <p className="font-helvetica leading-normal not-italic text-[32px] text-black/80">
                          Frame Cleaner
                        </p>
                      </div>
                      <p className="font-montserrat font-medium leading-[1.6] opacity-60 text-base text-black">
                        Lorem ipsum dolor sit amet consectetur. Vestibulum purus cursus dignissim vulputate leo. Pretium eu aliquet augue hendrerit id at proin. Vitae mattis semper in ac. Ornare blandit
                      </p>
                    </div>
                  </div>
                </div>

                {/* AI Project 2 */}
                <div className="bg-[rgba(255,255,255,0.2)] border border-[#f0f0f0] relative rounded-[15px] w-full">
                  <div className="box-border flex gap-6 items-start overflow-clip p-8 rounded-[inherit] w-full">
                    <div className="relative shrink-0 w-[120px] h-[120px]">
                      <img
                        alt="Plugin Frame Cleaner"
                        className="absolute backdrop-blur-[11.429px] backdrop-filter inset-0 max-w-none object-center object-cover opacity-80 pointer-events-none w-full h-full"
                        src={imgLogoSelectionIndicatorNew2}
                      />
                    </div>
                    <div className="basis-0 flex flex-col grow items-start justify-between min-h-0 min-w-0 relative self-stretch shrink-0">
                      <div className="flex gap-[14px] items-center w-[353px]">
                        <p className="font-helvetica leading-normal not-italic text-[32px] text-black/80">
                          Plugin
                        </p>
                        <div className="flex h-0 items-center justify-center relative shrink-0 w-0">
                          <div className="flex-none rotate-[270deg]">
                            <div className="bg-gradient-to-l from-transparent h-px opacity-50 to-transparent via-50% via-black/60 w-4" />
                          </div>
                        </div>
                        <p className="font-helvetica leading-normal not-italic text-[32px] text-black/80">
                          Frame Cleaner
                        </p>
                      </div>
                      <p className="font-montserrat font-medium leading-[1.6] opacity-60 text-base text-black">
                        Lorem ipsum dolor sit amet consectetur. Vestibulum purus cursus dignissim vulputate leo. Pretium eu aliquet augue hendrerit id at proin. Vitae mattis semper in ac. Ornare blandit
                      </p>
                    </div>
                  </div>
                </div>

                {/* AI Project 3 */}
                <div className="bg-[rgba(255,255,255,0.2)] border border-[#f0f0f0] relative rounded-[15px] w-full">
                  <div className="box-border flex gap-6 items-start overflow-clip p-8 rounded-[inherit] w-full">
                    <div className="bg-[rgba(255,255,255,0.2)] border border-[#f0f0f0] relative rounded-[15px] shrink-0 w-[120px] h-[120px]">
                      <div className="overflow-clip relative rounded-[inherit] w-full h-full">
                        <div className="absolute h-[90px] left-[26px] top-[15px] w-[69px]">
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
                    <div className="basis-0 flex flex-col grow items-start justify-between min-h-0 min-w-0 relative self-stretch shrink-0">
                      <div className="flex gap-[14px] items-center w-[353px]">
                        <p className="font-helvetica leading-normal not-italic text-[32px] text-black/80">
                          Design to Code
                        </p>
                        <div className="flex h-0 items-center justify-center relative shrink-0 w-0">
                          <div className="flex-none rotate-[270deg]">
                            <div className="bg-gradient-to-l from-transparent h-px opacity-50 to-transparent via-50% via-black/60 w-4" />
                          </div>
                        </div>
                        <p className="font-helvetica leading-normal not-italic text-[32px] text-black/80">
                          Xflow &lt; &gt; GFF 2025
                        </p>
                      </div>
                      <p className="font-montserrat font-medium leading-[1.6] opacity-60 text-base text-black">
                        Lorem ipsum dolor sit amet consectetur. Vestibulum purus cursus dignissim vulputate leo. Pretium eu aliquet augue hendrerit id at proin. Vitae mattis semper in ac. Ornare blandit
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Blog Section - Starts at column 1, spans 8 columns */}
            <div className="col-span-12 md:col-start-1 md:col-span-8 flex flex-col gap-12 items-start mt-32 mb-20">
              <div className="flex flex-col gap-4 items-start">
                <p className="font-red-hat font-semibold leading-[1.2] text-[64px] text-black/90 w-full max-w-[588px]">
                  I wish I wrote more often
                </p>
                <p className="font-montserrat font-medium leading-[2] opacity-60 text-base text-black w-full max-w-[588px]">
                  This will be my new year resolution! Lorem ipsum dolor sit amet consectetur. Vestibulum purus cursus dignissim vulputate leo. Pretium eu aliquet augue hendrerit id at proin. Vitae mattis semper in ac. Ornare blandit
                </p>
              </div>
              <div className="flex flex-col gap-8 items-start w-full">
                {/* Blog Post 1 */}
                <div className="bg-[rgba(255,255,255,0.2)] border border-[#f0f0f0] relative rounded-[15px] w-full">
                  <div className="box-border flex gap-6 items-start overflow-clip p-8 rounded-[inherit] w-full">
                    <div className="bg-[rgba(255,255,255,0.2)] border border-[#f0f0f0] relative rounded-[15px] shrink-0 w-[120px] h-[120px]">
                      <div className="overflow-clip relative rounded-[inherit] w-full h-full">
                        <div className="absolute h-[90px] left-[26px] top-[15px] w-[69px]">
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
                    <div className="basis-0 flex flex-col grow items-start justify-between min-h-0 min-w-0 relative self-stretch shrink-0">
                      <div className="flex gap-[14px] items-center w-[353px]">
                        <p className="font-helvetica leading-normal not-italic text-[32px] text-black/80">
                          Design to Code
                        </p>
                        <div className="flex h-0 items-center justify-center relative shrink-0 w-0">
                          <div className="flex-none rotate-[270deg]">
                            <div className="bg-gradient-to-l from-transparent h-px opacity-50 to-transparent via-50% via-black/60 w-4" />
                          </div>
                        </div>
                        <p className="font-helvetica leading-normal not-italic text-[32px] text-black/80">
                          Xflow &lt; &gt; GFF 2025
                        </p>
                      </div>
                      <p className="font-montserrat font-medium leading-[1.6] opacity-60 text-base text-black">
                        Lorem ipsum dolor sit amet consectetur. Vestibulum purus cursus dignissim vulputate leo. Pretium eu aliquet augue hendrerit id at proin. Vitae mattis semper in ac. Ornare blandit
                      </p>
                    </div>
                  </div>
                </div>

                {/* Blog Post 2 */}
                <div className="bg-[rgba(255,255,255,0.2)] border border-[#f0f0f0] relative rounded-[15px] w-full">
                  <div className="box-border flex gap-6 items-start overflow-clip p-8 rounded-[inherit] w-full">
                    <div className="bg-[rgba(255,255,255,0.2)] border border-[#f0f0f0] relative rounded-[15px] shrink-0 w-[120px] h-[120px]">
                      <div className="overflow-clip relative rounded-[inherit] w-full h-full">
                        <div className="absolute h-[90px] left-[26px] top-[15px] w-[69px]">
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
                    <div className="basis-0 flex flex-col grow items-start justify-between min-h-0 min-w-0 relative self-stretch shrink-0">
                      <div className="flex gap-[14px] items-center w-[353px]">
                        <p className="font-helvetica leading-normal not-italic text-[32px] text-black/80">
                          Design to Code
                        </p>
                        <div className="flex h-0 items-center justify-center relative shrink-0 w-0">
                          <div className="flex-none rotate-[270deg]">
                            <div className="bg-gradient-to-l from-transparent h-px opacity-50 to-transparent via-50% via-black/60 w-4" />
                          </div>
                        </div>
                        <p className="font-helvetica leading-normal not-italic text-[32px] text-black/80">
                          Xflow &lt; &gt; GFF 2025
                        </p>
                      </div>
                      <p className="font-montserrat font-medium leading-[1.6] opacity-60 text-base text-black">
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
        <div className="backdrop-blur-sm backdrop-filter bg-[rgba(255,255,255,0.5)] border border-[#f0f0f0] box-border flex font-montserrat font-medium h-[90px] items-center justify-between mb-10 mt-auto px-8 py-0 rounded-[4px] text-base text-black underline w-full max-w-[1440px]">
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
