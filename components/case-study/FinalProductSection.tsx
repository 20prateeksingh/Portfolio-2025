import { CaseStudySection } from "@/lib/case-studies";

interface FinalProductSectionProps {
  section: CaseStudySection;
}

export default function FinalProductSection({
  section,
}: FinalProductSectionProps) {
  return (
    <section className="py-6 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-serif mb-8">{section.title}</h2>
          {section.video && (
            <div className="aspect-video w-full rounded-lg overflow-hidden">
              <iframe
                src={`https://www.youtube.com/embed/${section.video.embedId}`}
                title={section.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full"
                loading="lazy"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

