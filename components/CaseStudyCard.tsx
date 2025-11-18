import Link from "next/link";
import Image from "next/image";
import { CaseStudy } from "@/lib/case-studies";

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
}

export default function CaseStudyCard({ caseStudy }: CaseStudyCardProps) {
  return (
    <Link
      href={`/case-studies/${caseStudy.slug}`}
      className="group block bg-[rgba(255,255,255,0.2)] border border-white rounded-[15px] overflow-hidden hover:bg-[rgba(255,255,255,0.3)] transition-colors h-[505px] shadow-[0_1px_2px_0_rgba(0,0,0,1)]"
    >
      <div className="h-[505px] overflow-clip relative rounded-[inherit] w-full">
        <div className="flex flex-col gap-[13px] items-start left-[37px] top-8 w-[376px] absolute z-10">
          <p className="font-helvetica leading-normal not-italic text-[32px] text-black/80 w-full break-words">
            {caseStudy.title}
          </p>
          <p className="font-montserrat font-medium leading-[1.6] opacity-60 text-base text-black w-full break-words">
            {caseStudy.description}
          </p>
        </div>
        <div className="absolute bottom-[-33px] h-[275px] left-[50%] translate-x-[-50%] w-[453.832px]">
          {caseStudy.image ? (
            <Image
              src={caseStudy.image}
              alt={caseStudy.title}
              className="object-center object-cover pointer-events-none"
              fill
              sizes="454px"
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
              <span className="text-gray-400 text-sm">Image Placeholder</span>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}

