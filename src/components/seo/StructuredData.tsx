import { getSiteUrl } from "@/lib/site";
import { socialLinks } from "@/lib/data";

export function StructuredData() {
  const siteUrl = getSiteUrl().toString().replace(/\/$/, "");
  const logo = `${siteUrl}/brand-logo-transparent.png`;

  const graph = [
    {
      "@type": "Organization",
      name: "Avenor Tech",
      url: siteUrl,
      logo,
      email: "info@avenortech12.com",
      telephone: "+233541111423",
      areaServed: "Ghana",
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "sales",
          email: "info@avenortech12.com",
          telephone: "+233541111423",
          availableLanguage: ["en"],
        },
      ],
      sameAs: socialLinks.map((l) => l.href),
    },
    {
      "@type": "WebSite",
      name: "Avenor Tech",
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

