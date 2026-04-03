export function generateOrganizationSchema(baseUrl) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Your Virtual CFO Company",
    url: baseUrl,
    logo: `${baseUrl}/images/logo.webp`,
    description:
      "Expert Virtual CFO Services providing strategic financial solutions for business growth.",
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
      addressLocality: "Your City",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-XXXXXXXXXX",
      contactType: "Customer Service",
    },
  };
}
