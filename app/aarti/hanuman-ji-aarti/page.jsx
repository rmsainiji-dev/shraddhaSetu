import Link from "next/link";

export const dynamic = "force-static";
export const revalidate = false;

export const metadata = {
  title: "हनुमान जी की आरती | ShraddhaSetu",
  description: "हनुमान जी की आरती पढ़ें – सरल, स्पष्ट और भक्ति से पूर्ण पाठ।",
  alternates: {
    canonical: "https://shraddha-setu.vercel.app/aarti/hanuman-ji-aarti",
  },
  openGraph: {
    title: "हनुमान जी की आरती",
    description: "हनुमान जी की आरती पढ़ें और भक्ति का अनुभव करें।",
    url: "https://shraddha-setu.vercel.app/aarti/hanuman-ji-aarti",
    type: "article",
  },
};

export default function HanumanJiAartiPage() {
  return (
    <>
      <section className="page-hero" aria-labelledby="page-heading">
        <div className="page-hero-inner">
          <div className="page-hero-icon" aria-hidden="true">
            🔔
          </div>
          <h1 id="page-heading">हनुमान जी की आरती</h1>
          <p className="subtitle">श्री हनुमान जी की आरती – सरल, शुद्ध और भक्तिमय पाठ</p>
        </div>
      </section>

      <nav className="breadcrumb container" aria-label="Breadcrumb">
        <Link href="/">होम</Link>
        <span aria-hidden="true">›</span>
        <span aria-current="page">हनुमान जी की आरती</span>
      </nav>

      <div className="section" style={{ paddingTop: "var(--sp-lg)" }}>
        <div className="chalisa-container container--narrow">
          <div className="info-box" role="note">
            <strong>📖 परिचय:</strong> यह आरती श्री हनुमान जी की महिमा का गान करती है।
            श्रद्धा और प्रेम से की गई आरती से भय, बाधाएँ और कष्ट दूर होते हैं और
            जीवन में बल, बुद्धि और भक्ति की वृद्धि होती है।
          </div>

          <article className="chalisa-card" aria-label="हनुमान जी की आरती">
            <h2 className="chalisa-section-head">हनुमान जी की आरती</h2>

            <div className="lotus-divider lotus-divider--center lotus-divider--gold" style={{ padding: "0.5rem 0" }}>
              <div className="lotus-line" style={{ maxWidth: "120px" }}></div>
              <span className="lotus-ornament" style={{ color: "var(--gold)", fontSize: "1.6rem" }}>🪔</span>
              <div className="lotus-line" style={{ maxWidth: "120px" }}></div>
            </div>

            <div className="doha-block">
              <p>आरती कीजै हनुमान लला की।<br />दुष्ट दलन रघुनाथ कला की॥</p>
            </div>

            <div className="chaupai-verse">
              <p>जाके बल से गिरिवर कांपे।<br />रोग दोष जाके निकट न झांके॥</p>
            </div>
            <div className="chaupai-verse">
              <p>अंजनि पुत्र महा बलदाई।<br />संतन के प्रभु सदा सहाई॥</p>
            </div>
            <div className="chaupai-verse">
              <p>दे बीरा रघुनाथ पठाए।<br />लंका जारि सिया सुधि लाए॥</p>
            </div>
            <div className="chaupai-verse">
              <p>लंका सो कोट समुद्र सी खाई।<br />जात पवनसुत बार न लाई॥</p>
            </div>
            <div className="chaupai-verse">
              <p>लंका जारि असुर संहारे।<br />सियाराम जी के काज संवारे॥</p>
            </div>
            <div className="chaupai-verse">
              <p>लक्ष्मण मूर्छित पड़े सकारे।<br />आनि संजीवन प्राण उबारे॥</p>
            </div>
            <div className="chaupai-verse">
              <p>पैठि पाताल तोरि जम कारे।<br />अहिरावण की भुजा उखारे॥</p>
            </div>
            <div className="chaupai-verse">
              <p>बाएं भुजा असुर दल मारे।<br />दाहिने भुजा संतजन तारे॥</p>
            </div>
            <div className="chaupai-verse">
              <p>सुर नर मुनि आरती उतारें।<br />जय जय जय हनुमान उचारें॥</p>
            </div>
            <div className="chaupai-verse">
              <p>कंचन थार कपूर लौ छाई।<br />आरती करत अंजना माई॥</p>
            </div>
            <div className="chaupai-verse">
              <p>जो हनुमान जी की आरती गावे।<br />बसि बैकुंठ परम पद पावे॥</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}

