export default function StructuredData() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Prateek Singh",
    url: "https://prateeksingh.in",
    image: "https://prateeksingh.in/OG Image.png",
    description: "Senior Product Designer with 7+ years of experience in B2B fintech",
    jobTitle: "Senior Product Designer",
    workLocation: {
      "@type": "Place",
      name: "Remote"
    },
    sameAs: [
      "https://www.linkedin.com/in/prateeksingh20",
      "https://twitter.com/prateeksingh20",
      "https://github.com/20prateeksingh"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}

