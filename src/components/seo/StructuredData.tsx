import { getSiteUrl } from "@/lib/site";
import { socialLinks } from "@/lib/data";

export function StructuredData() {
  const siteUrl = getSiteUrl().toString().replace(/\/$/, "");
  const logo = `${siteUrl}/icon.png`;

  const graph = [
    {
      "@type": "Organization",
      name: "Nexora",
      url: siteUrl,
      logo,
      email: "hello@nexora.studio",
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "sales",
          email: "hello@nexora.studio",
          availableLanguage: ["en"],
        },
      ],
      sameAs: socialLinks.map((l) => l.href),
    },
    {
      "@type": "WebSite",
      name: "Nexora",
      url: siteUrl,
      inLanguage: "en",
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": graph,
  };

  return (
    <script
      type="application/ld+json"
      // JSON-LD should be static; no client JS required.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

