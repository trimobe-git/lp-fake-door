import React from 'react';

export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Trimobe",
    "url": "https://trimobe.com",
    "logo": "https://trimobe.com/icon.svg",
    "description": "AI-powered platform for generating and validating Verra/VCS carbon credit documentation",
    "foundingDate": "2024",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "email": "support@trimobe.com",
      "availableLanguage": ["English"]
    },
    "sameAs": [
      "https://twitter.com/trimobe",
      "https://linkedin.com/company/trimobe"
    ]
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Trimobe",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web Browser",
    "offers": [
      {
        "@type": "Offer",
        "name": "Document Validation",
        "price": "9",
        "priceCurrency": "USD",
        "description": "Validate your Verra/VCS documentation for compliance and completeness"
      },
      {
        "@type": "Offer",
        "name": "Document Generation",
        "price": "19",
        "priceCurrency": "USD",
        "description": "Generate complete Verra/VCS Project Description Documents with AI"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "127",
      "bestRating": "5",
      "worstRating": "1"
    },
    "description": "Generate and validate Verra/VCS carbon credit documentation with AI. Transform 3-6 weeks and $5,000+ into 2 minutes and $19. Support for VCS, REDD+, ARR, AFOLU methodologies.",
    "featureList": [
      "AI-powered document generation",
      "Free document validation",
      "Support for VCS, REDD+, ARR, AFOLU methodologies",
      "Instant 40+ page PDD generation",
      "Compliance checking",
      "VCU verification support"
    ],
    "screenshot": "https://trimobe.com/screenshot.png",
    "author": {
      "@type": "Organization",
      "name": "Trimobe"
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Trimobe",
    "url": "https://trimobe.com",
    "description": "AI Document Generator for Verra VCS Carbon Credits",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://trimobe.com/?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Carbon Credit Documentation Services",
    "provider": {
      "@type": "Organization",
      "name": "Trimobe"
    },
    "description": "AI-powered generation and validation of Verra/VCS carbon credit documentation including PDDs, monitoring reports, and compliance documents",
    "areaServed": "Worldwide",
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceUrl": "https://trimobe.com"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
    </>
  );
}
