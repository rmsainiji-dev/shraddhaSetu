import Link from "next/link";
import post, { stanzas } from "../../content/blog/hanuman-ashtak";
import { articleJsonLd, breadcrumbJsonLd } from "../../components/seoUtils";

export const dynamic = "force-static";
export const revalidate = false;

export const metadata = {
  title: "हनुमान अष्टक | श्रद्धा से पाठ करें",
  description: post.description,
  keywords: post.keywords,

  authors: [{ name: "Shraddha Setu" }],
  creator: "Shraddha Setu",
  publisher: "Shraddha Setu",

  alternates: {
    canonical: "https://shraddha-setu.vercel.app/hanuman-ashtak/",
  },

  openGraph: {
    title: "हनुमान अष्टक | Hanuman Ashtak",
    description: post.description,
    url: "https://shraddha-setu.vercel.app/hanuman-ashtak/",
    siteName: "Shraddha Setu",
    locale: "hi_IN",
    type: "article",
  },

  twitter: {
    card: "summary_large_image",
    title: "हनुमान अष्टक | श्रद्धा से पाठ करें",
    description: post.description,
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function HanumanAshtakPage() {
  const articleData = articleJsonLd({
    headline: "हनुमान अष्टक – संपूर्ण पाठ",
    description: post.description,
    url: "/hanuman-ashtak",
    inLanguage: "hi",
    authorName: "परंपरागत",
  });

  const breadcrumbData = breadcrumbJsonLd([
    { name: "होम", url: "/" },
    { name: "हनुमान अष्टक", url: "/hanuman-ashtak" },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />

      {/* ─── PAGE HERO ─────────────────────────────────── */}
      <section className="page-hero" aria-labelledby="page-heading">
        <div className="page-hero-inner">
          <div className="page-hero-icon" aria-hidden="true">🙏</div>
          <h1 id="page-heading">हनुमान अष्टक</h1>
          <p className="subtitle">संपूर्ण पाठ – ॥ श्री हनुमान अष्टक ॥ • संकटमोचन महिमा</p>
        </div>
      </section>

      {/* ─── BREADCRUMB ────────────────────────────────── */}
      <nav className="breadcrumb container" aria-label="Breadcrumb">
        <Link href="/">होम</Link>
        <span aria-hidden="true">›</span>
        <span aria-current="page">हनुमान अष्टक</span>
      </nav>

      {/* ─── MAIN CONTENT ──────────────────────────────── */}
      <div className="section" style={{ paddingTop: "var(--sp-lg)" }}>
        <div className="chalisa-container container--narrow">
          <div className="info-box" role="note">
            <strong>📖 परिचय:</strong> हनुमान अष्टक संकटमोचन श्री हनुमान जी की महिमा का अद्भुत स्तोत्र है।
            श्रद्धा से किया गया इसका पाठ मन में साहस, शांति और विश्वास जगाता है।
          </div>

          {/* ═══ FULL ASHTAK TEXT ═══════════ */}
          <article
            className="chalisa-card"
            itemScope
            itemType="https://schema.org/Article"
            aria-label="हनुमान अष्टक संपूर्ण पाठ"
          >
            <meta itemProp="name" content="हनुमान अष्टक – संपूर्ण पाठ" />
            <meta itemProp="inLanguage" content="hi" />
            <meta itemProp="author" content="परंपरागत" />

            <h2 className="chalisa-section-head">॥ श्री हनुमान अष्टक ॥</h2>

            <div className="lotus-divider lotus-divider--center lotus-divider--gold" style={{ padding: "0.5rem 0" }}>
              <div className="lotus-line" style={{ maxWidth: "120px" }}></div>
              <span className="lotus-ornament" style={{ color: "var(--gold)", fontSize: "1.6rem" }}>🙏</span>
              <div className="lotus-line" style={{ maxWidth: "120px" }}></div>
            </div>

            {stanzas.map((lines, idx) => (
              <div
                key={idx}
                className={`chaupai-verse${idx >= stanzas.length - 2 ? " bhakti-ending" : ""}`}
                itemProp="articleBody"
              >
                {lines.map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
            ))}

            <div className="lotus-divider lotus-divider--center" style={{ padding: "0.5rem 0" }}>
              <div className="lotus-line" style={{ maxWidth: "80px" }}></div>
              <span className="lotus-ornament">🪷</span>
              <div className="lotus-line" style={{ maxWidth: "80px" }}></div>
            </div>

            <h2 className="chalisa-section-head">॥ समाप्त ॥</h2>
          </article>
        </div>
      </div>
    </>
  );
}
