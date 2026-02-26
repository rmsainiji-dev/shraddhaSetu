import Link from "next/link";
import DevotionalCard from "../components/DevotionalCard";
import { websiteJsonLd } from "../components/seoUtils";

export const metadata = {
  title: "ShraddhaSetu – हिंदू भक्ति पोर्टल | हनुमान चालीसा, आरती, मंत्र",
  description:
    "ShraddhaSetu पर पढ़ें हनुमान चालीसा, आरती, मंत्र और स्तोत्र। हिंदी और संस्कृत में संपूर्ण भक्ति सामग्री। सुंदर, सरल और पवित्र प्रस्तुति।",
  openGraph: {
    title: "ShraddhaSetu – श्रद्धा का पवित्र सेतु",
    description: "हनुमान चालीसा, आरती, मंत्र और स्तोत्र – हिंदी व संस्कृत में",
    url: "https://www.shraddhaSetu.in",
    type: "website",
  },
  alternates: {
    canonical: "https://www.shraddhaSetu.in",
  },
};

const featuredContent = [
  {
    href: "/hanuman-chalisa-hindi",
    icon: "🙏",
    category: "चालीसा",
    title: "हनुमान चालीसा",
    description:
      "संपूर्ण हनुमान चालीसा– 40 चौपाईयाँ, दोहा, अर्थ और महत्व सहित। गोस्वामी तुलसीदास रचित।",
    lang: "हिंदी",
  },
  // {
  //   href: "/hanuman-chalisa-sanskrit",
  //   icon: "📿",
  //   category: "संस्कृत पाठ",
  //   title: "हनुमान चालीसा",
  //   description:
  //     "संस्कृत भाषा में हनुमान चालीसा का पावन पाठ। परंपरागत देवनागरी लिपि में श्लोकबद्ध प्रस्तुति।",
  //   lang: "Sanskrit",
  // },
  {
    href: "#",
    icon: "🔔",
    category: "आरती",
    title: "आरती संग्रह",
    description:
      "श्री राम आरती, हनुमान आरती, लक्ष्मी आरती और अन्य देवी-देवताओं की आरतियाँ। (शीघ्र आ रहा है)",
    lang: "जल्द",
  },
  {
    href: "#",
    icon: "🔱",
    category: "मंत्र",
    title: "मंत्र पाठ",
    description:
      "गायत्री मंत्र, महामृत्युंजय मंत्र, शिव पंचाक्षरी और अन्य पवित्र मंत्रों का संग्रह। (शीघ्र आ रहा है)",
    lang: "जल्द",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd()) }}
      />

      {/* ─── HERO ─────────────────────────────────────────── */}
      <section className="hero" aria-labelledby="hero-heading">
        <div className="hero-inner">
          <span className="hero-om" aria-label="ॐ">ॐ</span>
          <p className="hero-eyebrow">श्रद्धा का सेतु, भक्ति का संगम</p>
          <h1 className="hero-title" id="hero-heading">
            भक्ति के मार्ग पर
            <br />
            <span className="gold-word">ShraddhaSetu</span>
          </h1>
          <p className="hero-subtitle">
            हनुमान चालीसा, आरती, मंत्र और स्तोत्र – हिंदी तथा संस्कृत में।
            श्रद्धा और आस्था के साथ भक्ति का अनुभव करें।
          </p>
          <div className="hero-cta">
            <Link href="/hanuman-chalisa-hindi" className="btn btn-primary">
              🙏 हनुमान चालीसा पढ़ें
            </Link>
            {/* <Link href="/hanuman-chalisa-sanskrit" className="btn btn-outline">
              संस्कृत पाठ →
            </Link> */}
          </div>
        </div>

        <div className="hero-scroll" aria-hidden="true">
          <div className="scroll-line"></div>
          <span>स्क्रॉल करें</span>
        </div>
      </section>

      {/* ─── STATS STRIP ──────────────────────────────────── */}
      <div className="stats-strip" aria-label="ShraddhaSetu आँकड़े">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <span className="stat-number">40</span>
              <span className="stat-label">चौपाईयाँ</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">2</span>
              <span className="stat-label">भाषाएँ</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">100%</span>
              <span className="stat-label">निःशुल्क</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">∞</span>
              <span className="stat-label">भक्तों की सेवा</span>
            </div>
          </div>
        </div>
      </div>

      {/* ─── INTRODUCTION ─────────────────────────────────── */}
      <section className="section section--alt" aria-labelledby="intro-heading">
        <div className="container--narrow text-center">
          <span className="section-label">हमारे बारे में</span>
          <h2 className="section-title" id="intro-heading">
            ShraddhaSetu क्या है?
          </h2>
          <div className="lotus-divider lotus-divider--center lotus-divider--gold">
            <div className="lotus-line"></div>
            <span className="lotus-ornament">🪷</span>
            <div className="lotus-line"></div>
          </div>
          <p style={{
            fontSize: "var(--fs-lg)",
            color: "var(--ink-soft)",
            lineHeight: "2",
            marginBottom: "var(--sp-lg)",
            textAlign: "center",
          }}>
            <strong style={{ color: "var(--crimson)" }}>ShraddhaSetu</strong> एक पवित्र हिंदू भक्ति डिजिटल मंच है जो भक्तों को
            धार्मिक ग्रंथों, चालीसाओं, आरतियों और मंत्रों से जोड़ता है।
            हमारा उद्देश्य है – श्रद्धा और भक्ति को सरल, सुलभ और सुंदर रूप में
            प्रत्येक घर तक पहुँचाना।
          </p>
          <p style={{
            fontSize: "var(--fs-base)",
            color: "var(--ink-muted)",
            lineHeight: "1.9",
            textAlign: "center",
          }}>
            यहाँ आप हनुमान चालीसा, रामायण के दोहे-चौपाई, विभिन्न आरतियाँ और
            वैदिक मंत्र हिंदी व संस्कृत में पढ़ सकते हैं। हर सामग्री सुंदर,
            प्रामाणिक और भक्तिपूर्ण वातावरण में प्रस्तुत की गई है।
          </p>
        </div>
      </section>

      {/* ─── FEATURED CONTENT ─────────────────────────────── */}
      <section className="section" aria-labelledby="content-heading">
        <div className="container">
          <div className="text-center">
            <span className="section-label">भक्ति सामग्री</span>
            <h2 className="section-title" id="content-heading">
              आज ही पाठ करें
            </h2>
            <div className="lotus-divider lotus-divider--center">
              <div className="lotus-line"></div>
              <span className="lotus-ornament">🔱</span>
              <div className="lotus-line"></div>
            </div>
            <p className="section-desc" style={{ margin: "0 auto" }}>
              अपनी श्रद्धा और आस्था के साथ इन पावन ग्रंथों का पाठ करें।
              हर पाठ आपके मन को शांति और आत्मा को बल देगा।
            </p>
          </div>

          <div className="card-grid" role="list">
            {featuredContent.map((card) => (
              <div key={card.href + card.title} role="listitem">
                <DevotionalCard {...card} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── HIGHLIGHT BANNER ─────────────────────────────── */}
      <section className="section section--crimson" aria-labelledby="highlight-heading">
        <div className="container--narrow text-center">
          <span className="lotus-ornament" style={{ fontSize: "3rem", display: "block", marginBottom: "1rem" }}>🙏</span>
          <h2 className="section-title section-title--light" id="highlight-heading">
            हनुमान चालीसा का नित्य पाठ
          </h2>
          <div className="lotus-divider lotus-divider--center lotus-divider--gold" style={{ padding: "0.75rem 0" }}>
            <div className="lotus-line" style={{ background: "linear-gradient(90deg, transparent, rgba(218,165,32,0.4), transparent)" }}></div>
            <span className="lotus-ornament" style={{ color: "var(--gold-glow)", fontSize: "1.4rem" }}>✦</span>
            <div className="lotus-line" style={{ background: "linear-gradient(90deg, transparent, rgba(218,165,32,0.4), transparent)" }}></div>
          </div>
          <p className="section-desc section-desc--light" style={{ margin: "0 auto var(--sp-xl)", fontSize: "var(--fs-lg)" }}>
            "जो सत बार पाठ कर कोई। छूटहि बंदि महा सुख होई॥"
          </p>
          <p style={{ color: "rgba(253,232,200,0.65)", marginBottom: "var(--sp-xl)", lineHeight: 1.9 }}>
            गोस्वामी तुलसीदास जी ने हनुमान चालीसा की रचना की जो आज भी
            करोड़ों भक्तों के जीवन का आधार है। नित्य पाठ से भय, रोग और
            कष्ट दूर होते हैं।
          </p>
          <Link href="/hanuman-chalisa-hindi" className="btn btn-primary">
            संपूर्ण चालीसा पढ़ें →
          </Link>
        </div>
      </section>

      {/* ─── FEATURES ─────────────────────────────────────── */}
      <section className="section section--alt" aria-labelledby="features-heading">
        <div className="container">
          <div className="text-center">
            <span className="section-label">ShraddhaSetu की विशेषताएँ</span>
            <h2 className="section-title" id="features-heading">
              क्यों चुनें ShraddhaSetu?
            </h2>
            <div className="lotus-divider lotus-divider--center">
              <div className="lotus-line"></div>
              <span className="lotus-ornament">🪷</span>
              <div className="lotus-line"></div>
            </div>
          </div>

          <div className="card-grid" style={{ marginTop: "var(--sp-xl)" }} role="list">
            {[
              { icon: "📖", title: "प्रामाणिक सामग्री", desc: "सभी ग्रंथ और पाठ प्रामाणिक स्रोतों से लिए गए हैं। शुद्ध देवनागरी लिपि में।" },
              { icon: "🌐", title: "द्विभाषी", desc: "हिंदी और संस्कृत दोनों भाषाओं में सामग्री उपलब्ध है। अंग्रेजी भी जल्द।" },
              { icon: "📱", title: "मोबाइल फ्रेंडली", desc: "किसी भी डिवाइस पर सुंदर अनुभव। जब चाहें, जहाँ चाहें पाठ करें।" },
              { icon: "⚡", title: "तेज़ और सरल", desc: "कोई विज्ञापन नहीं, कोई रुकावट नहीं। सिर्फ पवित्र भक्ति का अनुभव।" },
            ].map((f) => (
              <article key={f.title} className="devotional-card" role="listitem">
                <span className="card-icon" aria-hidden="true">{f.icon}</span>
                <h3 className="card-title" style={{ fontSize: "var(--fs-lg)" }}>{f.title}</h3>
                <p className="card-desc">{f.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
