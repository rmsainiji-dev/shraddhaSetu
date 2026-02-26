/**
 * SEO utilities for ShraddhaSetu
 * Generates Schema.org JSON-LD structured data
 */

const SITE_URL = "https://www.shraddhaSetu.in";
const SITE_NAME = "ShraddhaSetu";

/**
 * Generate Article structured data
 */
export function articleJsonLd({ headline, description, url, datePublished = "2025-01-01", inLanguage = "hi", authorName = "ShraddhaSetu" }) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    url: `${SITE_URL}${url}`,
    datePublished,
    dateModified: datePublished,
    inLanguage,
    author: {
      "@type": "Person",
      name: authorName,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}${url}`,
    },
  };
}

/**
 * Generate WebSite structured data for homepage
 */
export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    description:
      "ShraddhaSetu – एक पवित्र हिंदू भक्ति मंच। हनुमान चालीसा, आरती, मंत्र और स्तोत्र।",
    inLanguage: ["hi", "sa"],
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_URL}/?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

/**
 * Generate BreadcrumbList structured data
 */
export function breadcrumbJsonLd(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.url}`,
    })),
  };
}

/**
 * Generate FAQPage structured data
 */
export function faqJsonLd(faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
