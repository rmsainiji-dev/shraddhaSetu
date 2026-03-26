import Link from "next/link";
import { articleJsonLd, breadcrumbJsonLd, faqJsonLd } from "../../components/seoUtils";
export const dynamic = 'force-static';
export const revalidate = false;
export const metadata = {
  title: "हनुमान चालीसा | श्रद्धा से पाठ करें",

  description:
    "हनुमान चालीसा का संपूर्ण पाठ पढ़ें। गोस्वामी तुलसीदास जी द्वारा रचित दोहा और चौपाई सहित पूर्ण पाठ – अर्थ, महत्व और लाभ सहित।",

  keywords: [
    "हनुमान चालीसा",
    "हनुमान चालीसा पाठ",
    "Hanuman Chalisa",
    "Hanuman Chalisa Path",
    "Hanuman Chalisa Lyrics",
    "हनुमान चालीसा संपूर्ण पाठ",
    "Bajrang Baan",
  ],

  authors: [{ name: "Shraddha Setu" }],
  creator: "Shraddha Setu",
  publisher: "Shraddha Setu",

  alternates: {
    canonical:
      "https://shraddha-setu.vercel.app/hanuman-chalisa-hindi/",
  },

  openGraph: {
    title:
      "हनुमान चालीसा पाठ | Hanuman Chalisa Full Lyrics",
    description:
      "हनुमान चालीसा का संपूर्ण पाठ दोहा और चौपाई सहित पढ़ें।",
    url:
      "https://shraddha-setu.vercel.app/hanuman-chalisa-hindi/",
    siteName: "Shraddha Setu",
    locale: "hi_IN",
    type: "article",
  },

  twitter: {
    card: "summary_large_image",
    title: "हनुमान चालीसा | श्रद्धा से पाठ करें",
    description: "हनुमान चालीसा का संपूर्ण पाठ पढ़ें और भक्ति का गहरा अनुभव करें।",
  },

  robots: {
    index: true,
    follow: true,
  },
};

const chaupais = [
  { n: 1,  lines: ["जय हनुमान ज्ञान गुण सागर।", "जय कपीस तिहुँ लोक उजागर॥"] },
  { n: 2,  lines: ["राम दूत अतुलित बल धामा।", "अंजनि पुत्र पवनसुत नामा॥"] },
  { n: 3,  lines: ["महावीर विक्रम बजरंगी।", "कुमति निवार सुमति के संगी॥"] },
  { n: 4,  lines: ["कंचन वरन विराज सुवेसा।", "कानन कुंडल कुंचित केसा॥"] },
  { n: 5,  lines: ["हाथ वज्र और ध्वजा बिराजै।", "काँधे मूँज जनेऊ साजै॥"] },
  { n: 6,  lines: ["शंकर सुवन केसरी नंदन।", "तेज प्रताप महा जग वंदन॥"] },
  { n: 7,  lines: ["विद्यावान गुनी अति चातुर।", "राम काज करिबे को आतुर॥"] },
  { n: 8,  lines: ["प्रभु चरित्र सुनिबे को रसिया।", "राम लखन सीता मन बसिया॥"] },
  { n: 9,  lines: ["सूक्ष्म रूप धरि सियहिं दिखावा।", "विकट रूप धरि लंक जरावा॥"] },
  { n: 10, lines: ["भीम रूप धरि असुर संहारे।", "रामचंद्र के काज संवारे॥"] },
  { n: 11, lines: ["लाय सजीवन लखन जियाए।", "श्रीरघुवीर हरषि उर लाए॥"] },
  { n: 12, lines: ["रघुपति कीन्ही बहुत बड़ाई।", "तुम मम प्रिय भरतहि सम भाई॥"] },
  { n: 13, lines: ["सहस बदन तुम्हरो जस गावैं।", "अस कहि श्रीपति कंठ लगावैं॥"] },
  { n: 14, lines: ["सनकादिक ब्रह्मादि मुनीसा।", "नारद सारद सहित अहीसा॥"] },
  { n: 15, lines: ["यम कुबेर दिगपाल जहाँ ते।", "कवि कोविद कहि सके कहाँ ते॥"] },
  { n: 16, lines: ["तुम उपकार सुग्रीवहिं कीन्हा।", "राम मिलाय राज पद दीन्हा॥"] },
  { n: 17, lines: ["तुम्हरो मंत्र विभीषण माना।", "लंकेश्वर भए सब जग जाना॥"] },
  { n: 18, lines: ["युग सहस्त्र योजन पर भानू।", "लील्यो ताहि मधुर फल जानू॥"] },
  { n: 19, lines: ["प्रभु मुद्रिका मेलि मुख माहीं।", "जलधि लांघि गए अचरज नाहीं॥"] },
  { n: 20, lines: ["दुर्गम काज जगत के जेते।", "सुगम अनुग्रह तुम्हरे तेते॥"] },
  { n: 21, lines: ["राम दुआरे तुम रखवारे।", "होत न आज्ञा बिनु पैसारे॥"] },
  { n: 22, lines: ["सब सुख लहै तुम्हारी सरना।", "तुम रक्षक काहू को डरना॥"] },
  { n: 23, lines: ["आपन तेज सम्हारो आपै।", "तीनों लोक हाँक तें काँपै॥"] },
  { n: 24, lines: ["भूत पिशाच निकट नहिं आवै।", "महाबीर जब नाम सुनावै॥"] },
  { n: 25, lines: ["नासै रोग हरै सब पीरा।", "जपत निरंतर हनुमत बीरा॥"] },
  { n: 26, lines: ["संकट तें हनुमान छुड़ावै।", "मन क्रम बचन ध्यान जो लावै॥"] },
  { n: 27, lines: ["सब पर राम तपस्वी राजा।", "तिन के काज सकल तुम साजा॥"] },
  { n: 28, lines: ["और मनोरथ जो कोई लावै।", "सोई अमित जीवन फल पावै॥"] },
  { n: 29, lines: ["चारों जुग परताप तुम्हारा।", "है परसिद्ध जगत उजियारा॥"] },
  { n: 30, lines: ["साधु संत के तुम रखवारे।", "असुर निकंदन राम दुलारे॥"] },
  { n: 31, lines: ["अष्ट सिद्धि नव निधि के दाता।", "अस बर दीन जानकी माता॥"] },
  { n: 32, lines: ["राम रसायन तुम्हरे पासा।", "सदा रहो रघुपति के दासा॥"] },
  { n: 33, lines: ["तुम्हरे भजन राम को पावै।", "जनम जनम के दुख बिसरावै॥"] },
  { n: 34, lines: ["अन्तकाल रघुवर पुर जाई।", "जहाँ जन्म हरि भक्त कहाई॥"] },
  { n: 35, lines: ["और देवता चित न धरई।", "हनुमत सेई सर्व सुख करई॥"] },
  { n: 36, lines: ["संकट कटै मिटै सब पीरा।", "जो सुमिरै हनुमत बलबीरा॥"] },
  { n: 37, lines: ["जय जय जय हनुमान गोसाईं।", "कृपा करहु गुरुदेव की नाईं॥"] },
  { n: 38, lines: ["जो सत बार पाठ कर कोई।", "छूटहि बंदि महा सुख होई॥"] },
  { n: 39, lines: ["जो यह पढ़ै हनुमान चालीसा।", "होय सिद्धि साखी गौरीसा॥"] },
  { n: 40, lines: ["तुलसीदास सदा हरि चेरा।", "कीजै नाथ हृदय मँह डेरा॥"] },
];

const meaningHighlights = [
  { verse: "जय हनुमान ज्ञान गुण सागर।", meaning: "हे हनुमान! आप ज्ञान और गुणों के सागर हैं। आपकी जय हो।" },
  { verse: "महावीर विक्रम बजरंगी।", meaning: "आप महान वीर हैं, अत्यंत विक्रमशाली हैं, आपका शरीर वज्र (हीरे) की तरह कठोर है।" },
  { verse: "अष्ट सिद्धि नव निधि के दाता।", meaning: "आप आठों सिद्धियाँ और नव निधियाँ प्रदान करने वाले हैं। यह वर माता जानकी ने आपको दिया।" },
  { verse: "राम दुआरे तुम रखवारे।", meaning: "श्री राम के द्वार के आप रक्षक हैं। उनकी आज्ञा बिना कोई भी प्रवेश नहीं कर सकता।" },
];

const faqs = [
  {
    question: "हनुमान चालीसा कितनी बार पढ़नी चाहिए?",
    answer:
      "हनुमान चालीसा का नित्य पाठ अत्यंत लाभकारी है। तुलसीदास जी ने स्वयं कहा है – 'जो सत बार पाठ कर कोई। छूटहि बंदि महा सुख होई॥' अर्थात् सौ बार पाठ से सभी बंधन मुक्त होते हैं। प्रतिदिन एक बार सुबह पाठ करना अत्यंत शुभ माना जाता है। मंगलवार और शनिवार को विशेष पाठ का विधान है।",
  },
  {
    question: "हनुमान चालीसा पढ़ने से क्या लाभ होता है?",
    answer:
      "हनुमान चालीसा के नियमित पाठ से अनेक लाभ प्राप्त होते हैं: भय और चिंता दूर होती है, बल और बुद्धि बढ़ती है, रोगों से मुक्ति मिलती है, नकारात्मक शक्तियाँ दूर रहती हैं, मन को शांति प्राप्त होती है और श्री राम की कृपा प्राप्त होती है। यह सभी संकटों का निवारण करती है।",
  },
  {
    question: "हनुमान चालीसा में कितनी चौपाईयाँ हैं?",
    answer:
      "हनुमान चालीसा में कुल 40 चौपाईयाँ हैं, इसीलिए इसे 'चालीसा' कहा जाता है (चालीस = 40)। इसके अलावा आरंभ में 2 दोहे और अंत में एक समापन दोहा है। इसकी रचना गोस्वामी तुलसीदास जी ने अवधी भाषा में की थी।",
  },
];

export default function HanumanChalisaHindi() {
  const articleData = articleJsonLd({
    headline: "हनुमान चालीसा – संपूर्ण पाठ",
    description: "हनुमान चालीसा पढ़ें – संपूर्ण पाठ, दोहा और चौपाई सहित। सरल व्याख्या और महत्व के साथ।",
    url: "/hanuman-chalisa-hindi",
    inLanguage: "hi",
    authorName: "गोस्वामी तुलसीदास",
  });

  const breadcrumbData = breadcrumbJsonLd([
    { name: "होम", url: "/" },
    { name: "हनुमान चालीसा", url: "/hanuman-chalisa-hindi" },
  ]);

  const faqData = faqJsonLd(faqs);

  return (
    <>
      {/* Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} />

      {/* ─── PAGE HERO ─────────────────────────────────── */}
      <section className="page-hero" aria-labelledby="page-heading">
        <div className="page-hero-inner">
          <div className="page-hero-icon" aria-hidden="true">🙏</div>
          <h1 id="page-heading">हनुमान चालीसा</h1>
          <p className="subtitle">संपूर्ण पाठ – गोस्वामी तुलसीदास जी रचित • दोहा, चौपाई और अर्थ सहित</p>
        </div>
      </section>

      {/* ─── BREADCRUMB ────────────────────────────────── */}
      <nav className="breadcrumb container" aria-label="Breadcrumb">
        <Link href="/">होम</Link>
        <span aria-hidden="true">›</span>
        <span aria-current="page">हनुमान चालीसा</span>
      </nav>

      {/* ─── MAIN CONTENT ──────────────────────────────── */}
      <div className="section" style={{ paddingTop: "var(--sp-lg)" }}>
        <div className="chalisa-container container--narrow">

          {/* Language Switch */}
          {/* भाषा स्विच (भविष्य के लिए संरचना) */}

          {/* Info Box */}
          <div className="info-box" role="note">
            <strong>📖 परिचय:</strong> हनुमान चालीसा गोस्वामी तुलसीदास जी द्वारा अवधी भाषा में
            रचित हनुमान जी की स्तुति है। इसमें 2 दोहे एवं 40 चौपाईयाँ हैं।
            इसका नित्य पाठ अत्यंत फलदायी माना जाता है।
          </div>

          {/* ═══ SECTION 1: FULL CHALISA TEXT ═══════════ */}
          <article
            className="chalisa-card"
            itemScope
            itemType="https://schema.org/Article"
            aria-label="हनुमान चालीसा संपूर्ण पाठ"
          >
            <meta itemProp="name" content="हनुमान चालीसा – संपूर्ण पाठ" />
            <meta itemProp="inLanguage" content="hi" />
            <meta itemProp="author" content="गोस्वामी तुलसीदास" />

            <h2 className="chalisa-section-head">॥ श्री गणेशाय नमः ॥</h2>

            <div className="lotus-divider lotus-divider--center lotus-divider--gold" style={{ padding: "0.5rem 0" }}>
              <div className="lotus-line" style={{ maxWidth: "120px" }}></div>
              <span className="lotus-ornament" style={{ color: "var(--gold)", fontSize: "1.6rem" }}>🙏</span>
              <div className="lotus-line" style={{ maxWidth: "120px" }}></div>
            </div>

            {/* DOHA 1 & 2 */}
            <h2 className="chalisa-section-head">॥ दोहा ॥</h2>
            <div className="doha-block" itemProp="articleBody">
              <p>श्रीगुरु चरन सरोज रज निज मन मुकुर सुधारि।</p>
              <p>बरनऊँ रघुबर बिमल जसु जो दायक फल चारि॥</p>
            </div>
            <div className="doha-block">
              <p>बुद्धिहीन तनु जानिके सुमिरौं पवन कुमार।</p>
              <p>बल बुद्धि विद्या देहु मोहिं हरहु कलेश विकार॥</p>
            </div>

            <div className="lotus-divider lotus-divider--center" style={{ padding: "0.5rem 0" }}>
              <div className="lotus-line" style={{ maxWidth: "80px" }}></div>
              <span className="lotus-ornament">🔱</span>
              <div className="lotus-line" style={{ maxWidth: "80px" }}></div>
            </div>

            {/* CHAUPAIS */}
            <h2 className="chalisa-section-head">॥ चौपाई ॥</h2>

            {chaupais.map((c) => (
              <div key={c.n} className="chaupai-verse" itemProp="articleBody">
                <span className="verse-number">चौपाई {c.n}</span>
                {c.lines.map((line, i) => <p key={i}>{line}</p>)}
              </div>
            ))}

            <div className="lotus-divider lotus-divider--center" style={{ padding: "0.5rem 0" }}>
              <div className="lotus-line" style={{ maxWidth: "80px" }}></div>
              <span className="lotus-ornament">🪷</span>
              <div className="lotus-line" style={{ maxWidth: "80px" }}></div>
            </div>

            {/* FINAL DOHA */}
            <h2 className="chalisa-section-head">॥ दोहा ॥</h2>
            <div className="doha-block">
              <p>पवनतनय संकट हरण मंगल मूरति रूप।</p>
              <p>राम लखन सीता सहित हृदय बसहु सुर भूप॥</p>
            </div>
          </article>

          {/* ═══ SECTION 2: ARTHA (MEANING) ═════════════ */}
          <section className="content-section mt-lg" aria-labelledby="artha-heading">
            <h2 id="artha-heading">अर्थ – चुनी हुई चौपाईयों का भावार्थ</h2>
            <p>
              हनुमान चालीसा की प्रत्येक चौपाई में गहरा आध्यात्मिक अर्थ छिपा है।
              यहाँ कुछ प्रमुख चौपाईयों का सरल और सहज भावार्थ दिया जा रहा है:
            </p>

            {meaningHighlights.map((m, i) => (
              <div key={i} style={{
                borderLeft: "3px solid var(--saffron)",
                paddingLeft: "var(--sp-lg)",
                marginBottom: "var(--sp-lg)",
              }}>
                <p style={{
                  fontFamily: "'Noto Serif Devanagari', serif",
                  fontSize: "1.1rem",
                  color: "var(--crimson)",
                  fontWeight: 600,
                  marginBottom: "0.4rem",
                }}>
                  "{m.verse}"
                </p>
                <p style={{ color: "var(--ink-soft)", lineHeight: 1.8, margin: 0 }}>
                  <strong style={{ color: "var(--gold)" }}>अर्थ: </strong>{m.meaning}
                </p>
              </div>
            ))}

            <p>
              हनुमान चालीसा की प्रत्येक चौपाई श्री हनुमान जी के विभिन्न गुणों,
              कार्यों और महिमा का वर्णन करती है। यह केवल पूजा का ग्रंथ नहीं,
              बल्कि जीवन जीने की प्रेरणा भी है।
            </p>
          </section>

          {/* ═══ SECTION 3: MAHATMYA ════════════════════ */}
          <section className="content-section" aria-labelledby="mahatmya-heading">
            <h2 id="mahatmya-heading">हनुमान चालीसा का महत्व</h2>
            <p>
              हनुमान चालीसा हिंदू धर्म के सबसे लोकप्रिय और शक्तिशाली भक्ति ग्रंथों में से एक है।
              इसकी रचना 16वीं शताब्दी में गोस्वामी तुलसीदास जी ने की थी जो रामचरितमानस के रचयिता भी हैं।
            </p>
            <h3>धार्मिक महत्व</h3>
            <p>
              हनुमान जी को शक्ति, भक्ति, ज्ञान और सेवा का प्रतीक माना जाता है।
              उनकी उपासना से भक्त को शारीरिक, मानसिक और आत्मिक शक्ति प्राप्त होती है।
              हनुमान चालीसा इसी उपासना का सबसे सुगम और प्रभावी माध्यम है।
            </p>
            <h3>वैज्ञानिक दृष्टिकोण</h3>
            <p>
              हनुमान चालीसा के पाठ में एक विशेष लय और ताल है जो मन को एकाग्र करती है।
              यह ध्यान की एक पद्धति है जो मानसिक तनाव को कम करती है, एकाग्रता बढ़ाती है
              और सकारात्मक ऊर्जा का संचार करती है।
            </p>
            <h3>लाभ</h3>
            <ul>
              <li>भय और चिंता से मुक्ति</li>
              <li>बल, बुद्धि और विद्या की प्राप्ति</li>
              <li>सभी प्रकार के कष्टों और रोगों से रक्षा</li>
              <li>नकारात्मक शक्तियों से सुरक्षा</li>
              <li>मन की शांति और आत्मिक उन्नति</li>
              <li>श्री राम की कृपा और भक्ति की प्राप्ति</li>
            </ul>
          </section>

          {/* ═══ SECTION 4: KAB PADHEN ═══════════════════ */}
          <section className="content-section" aria-labelledby="kab-heading">
            <h2 id="kab-heading">कब पढ़ें हनुमान चालीसा?</h2>
            <p>
              हनुमान चालीसा का पाठ कभी भी किया जा सकता है, परंतु कुछ विशेष समय
              और अवसर इसके पाठ के लिए अत्यंत शुभ माने जाते हैं:
            </p>
            <ul>
              <li><strong>प्रतिदिन सुबह</strong> – ब्रह्म मुहूर्त (4-6 बजे) या सूर्योदय के समय पाठ करना सर्वश्रेष्ठ है</li>
              <li><strong>मंगलवार और शनिवार</strong> – ये दोनों दिन हनुमान जी के विशेष दिन हैं, इन दिनों पाठ से दोगुना फल मिलता है</li>
              <li><strong>संकट के समय</strong> – किसी भी कठिनाई, भय या चिंता में तुरंत पाठ करें</li>
              <li><strong>हनुमान जयंती</strong> – चैत्र पूर्णिमा को विशेष पाठ का महत्व है</li>
              <li><strong>रात्रि में</strong> – सोने से पहले पाठ करने से बुरे स्वप्न नहीं आते और नींद अच्छी होती है</li>
              <li><strong>नवरात्र और रामनवमी</strong> – इन त्योहारों पर विशेष पाठ का विधान है</li>
            </ul>
            <div className="info-box" style={{ marginTop: "var(--sp-lg)" }}>
              <strong>🕉 ध्यान दें:</strong> पाठ से पहले स्नान करें, शुद्ध आसन पर बैठें और मन को
              एकाग्र करके श्रद्धापूर्वक पाठ करें। पाठ के अंत में "जय श्री राम" बोलें।
            </div>
          </section>

          {/* ═══ SECTION 5: FAQ ══════════════════════════ */}
          <section className="content-section" aria-labelledby="faq-heading">
            <h2 id="faq-heading">अक्सर पूछे जाने वाले प्रश्न</h2>
            <p style={{ marginBottom: "var(--sp-xl)" }}>
              हनुमान चालीसा के बारे में भक्तों के मन में अनेक प्रश्न आते हैं।
              यहाँ कुछ सामान्य प्रश्नों के उत्तर दिए गए हैं:
            </p>

            {faqs.map((faq, i) => (
              <div key={i} className="faq-item" itemScope itemType="https://schema.org/Question">
                <div className="faq-question">
                  <div className="faq-q-icon" aria-hidden="true">{i + 1}</div>
                  <h3 className="faq-question-text" itemProp="name">{faq.question}</h3>
                </div>
                <div
                  className="faq-answer"
                  itemScope
                  itemType="https://schema.org/Answer"
                  itemProp="acceptedAnswer"
                >
                  <p itemProp="text">{faq.answer}</p>
                </div>
              </div>
            ))}
          </section>

          {/* LANGUAGE SWITCH FOOTER */}
          {/* <div style={{ textAlign: "center", padding: "var(--sp-xl) 0" }}>
            <p style={{ color: "var(--ink-muted)", marginBottom: "var(--sp-md)", fontSize: "var(--fs-sm)" }}>
              संस्कृत भाषा में पढ़ना चाहते हैं?
            </p>
            <Link href="/hanuman-chalisa-sanskrit" className="btn btn-primary">
              संस्कृत पाठ पढ़ें →
            </Link>
          </div> */}

        </div>
      </div>
    </>
  );
}
