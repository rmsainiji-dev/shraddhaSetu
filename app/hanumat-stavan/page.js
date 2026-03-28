import Link from "next/link";
import StavanClient from "./StavanClient";

export const dynamic = "force-static";
export const revalidate = false;

const hanumatStavan = [
  [
    "प्रनवऊं पवन कुमार खल बन पावक ज्ञान घन।",
    "जासु ह्रदय आगार बसहिं राम सर चाप धर।।",
  ],
  [
    "अतुलित बलधामं हेमशैलाभदेहं, दनुजवनकृशानुं ज्ञानिनामअग्रगण्यम्।",
    "सकलगुणनिधानं वानराणामधीशं, रघुपतिप्रियं भक्तं वातंजातं नमामि।",
  ],
  [
    "गोष्पदीकृत वारिशं मशकीकृत राक्षसम्।",
    "रामायण महामालारत्नं वन्दे नीलात्मजं।",
    "अंजनानंदनं वीरं जानकीशोकनाशनं।",
    "कपीशमक्षहन्तारं वन्दे लंकाभयंकरम्।",
  ],
  [
    "उलंघ्य सिन्धोः सलिलं सलिलं यः शोकवह्नी जनकात्मजायाः।",
    "आदाय तेनैव ददाह लंका नमामि तं प्राञ्जलिं राघवेयम्।",
  ],
  [
    "मनोजवं मारुततुल्यवेगं जितेन्द्रियं बुद्धिमतां वरिष्ठम्।",
    "वातात्मजं वानरयूथमुख्यं श्रीरामदूतं शरणं प्रपद्ये।",
  ],
  [
    "आञ्जनेयमतिपाटलाननं काञ्चनाद्रिकमनीय विग्रहम्।",
    "पारिजाततरूमूलवासिनं भावयामि पवमाननंदनम्।",
  ],
  [
    "यत्र यत्र रघुनाथकीर्तनं तत्र तत्र कृतमस्तकाञ्जलिम्।",
    "वाष्पवारिपरिपूर्णलोचनं मारुतिं राक्षसान्तकम्।",
  ],
];

const benefits = [
  "संकट और भय का नाश होता है",
  "आत्मविश्वास और शक्ति बढ़ती है",
  "मन को शांति मिलती है",
  "हनुमान जी की कृपा प्राप्त होती है",
];

export const metadata = {
  title: "हनुमत् स्तवन | Hanumat Stavan Lyrics, Meaning, Benefits",
  description:
    "हनुमान जी का शक्तिशाली स्तवन पढ़ें। हनुमत स्तवन से शक्ति, बुद्धि और भय से मुक्ति प्राप्त करें।",
  keywords: [
    "हनुमत स्तवन",
    "Hanumat Stavan",
    "Hanuman Stavan lyrics",
    "Hanuman bhajan",
    "Hanuman ji stuti",
    "Hanuman prayer hindi",
  ],
  alternates: {
    canonical: "https://shraddha-setu.vercel.app/hanumat-stavan",
  },
  openGraph: {
    title: "हनुमत् स्तवन",
    description: "श्री हनुमान जी का दिव्य स्तवन पढ़ें",
    type: "website",
    url: "https://shraddha-setu.vercel.app/hanumat-stavan",
  },
};

export default function HanumatStavanPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "हनुमत् स्तवन",
    description: "हनुमान जी का स्तवन",
    author: {
      "@type": "Organization",
      name: "Bhakti Website",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="page-hero" aria-labelledby="page-heading">
        <div className="page-hero-inner">
          <div className="page-hero-icon" aria-hidden="true">
            🙏
          </div>
          <h1 id="page-heading">हनुमत् स्तवन</h1>
          <p className="subtitle">
            श्री हनुमान जी की स्तुति जो भय, संकट और दुखों का नाश करती है
          </p>
        </div>
      </section>

      <nav className="breadcrumb container" aria-label="Breadcrumb">
        <Link href="/">होम</Link>
        <span aria-hidden="true">›</span>
        <span aria-current="page">हनुमत् स्तवन</span>
      </nav>

      <StavanClient hanumatStavan={hanumatStavan} benefits={benefits} />
    </>
  );
}

