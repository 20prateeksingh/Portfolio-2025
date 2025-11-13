import Link from "next/link";
import { getAllCaseStudies } from "@/lib/case-studies";
import CaseStudyCard from "@/components/CaseStudyCard";

const imgLogo = "/images/logo.svg";

export default function CaseStudiesPage() {
  const caseStudies = getAllCaseStudies();

  return (
    <div className="min-h-screen bg-[#e1e1e1] relative">
      {/* Header */}
      <div className="absolute backdrop-blur-sm backdrop-filter bg-[rgba(255,255,255,0.5)] border border-[#f0f0f0] box-border flex h-[90px] items-center justify-between left-[50%] translate-x-[-50%] px-8 py-0 rounded-[4px] top-10 w-[90%] max-w-[1440px] z-50">
        <Link href="/" className="overflow-clip relative shrink-0 w-[50px] h-[50px]">
          <div className="absolute bg-[#e0e0e0] inset-0 rounded-[5px]" />
          <div className="absolute inset-[24%]">
            <img alt="Logo" className="block max-w-none w-full h-full" src={imgLogo} />
          </div>
        </Link>
        <div className="flex font-montserrat font-medium gap-10 items-center text-[#0c120c] text-lg uppercase">
          <Link href="/#works" className="hover:opacity-70 transition-opacity">
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 pt-40">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-red-hat font-semibold text-black/90 mb-4">
            Case Studies
          </h1>
          <p className="text-xl font-montserrat text-grey-2 max-w-2xl mx-auto">
            Explore my work and the process behind each project.
          </p>
        </div>

        {caseStudies.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseStudies.map((study) => (
              <CaseStudyCard key={study.slug} caseStudy={study} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-grey-2">No case studies available yet.</p>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="absolute backdrop-blur-sm backdrop-filter bg-[rgba(255,255,255,0.5)] border border-[#f0f0f0] bottom-10 box-border flex font-montserrat font-medium h-[90px] items-center justify-between left-[50%] translate-x-[-50%] px-8 py-0 rounded-[4px] text-base text-black underline w-[90%] max-w-[1440px]">
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
  );
}

