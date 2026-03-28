"use client";

import { useState } from "react";
import Link from "next/link";

export default function StavanClient({ hanumatStavan, benefits }) {
  const [showMeaning, setShowMeaning] = useState(false);

  return (
    <div className="section" style={{ paddingTop: "var(--sp-lg)" }}>
      <div className="chalisa-container container--narrow">
        <article
          className="chalisa-card shadow-lg rounded-xl p-6"
          itemScope
          itemType="https://schema.org/Article"
          aria-label="हनुमत् स्तवन संपूर्ण पाठ"
        >
          <h2 className="chalisa-section-head">॥ श्री हनुमत् स्तवन ॥</h2>

          <div
            className="lotus-divider lotus-divider--center lotus-divider--gold"
            style={{ padding: "0.5rem 0" }}
          >
            <div className="lotus-line" style={{ maxWidth: "120px" }}></div>
            <span
              className="lotus-ornament"
              style={{ color: "var(--gold)", fontSize: "1.6rem" }}
            >
              🙏
            </span>
            <div className="lotus-line" style={{ maxWidth: "120px" }}></div>
          </div>

          {hanumatStavan.map((verse, idx) => (
            <div key={idx} className="chaupai-verse" itemProp="articleBody">
              {verse.map((line, lineIdx) => (
                <p
                  key={lineIdx}
                  className="text-lg md:text-xl leading-8 text-gray-800 mb-6"
                  style={{ textAlign: "center" }}
                >
                  {line}
                </p>
              ))}
            </div>
          ))}

          <div
            className="lotus-divider lotus-divider--center"
            style={{ padding: "0.5rem 0" }}
          >
            <div className="lotus-line" style={{ maxWidth: "80px" }}></div>
            <span className="lotus-ornament">🪷</span>
            <div className="lotus-line" style={{ maxWidth: "80px" }}></div>
          </div>
        </article>

        <section className="content-section mt-lg" aria-labelledby="meaning-heading">
          <h2 id="meaning-heading">अर्थ</h2>
          <button
            type="button"
            className="btn btn-primary"
            aria-expanded={showMeaning}
            aria-controls="meaning-content"
            onClick={() => setShowMeaning((prev) => !prev)}
          >
            अर्थ देखें
          </button>
          {showMeaning && (
            <p id="meaning-content" style={{ marginTop: "var(--sp-lg)" }}>
              यह स्तवन हनुमान जी की शक्ति, ज्ञान और भक्ति का वर्णन करता है। इसका
              नित्य पाठ साधक के मन से भय, चिंता और अस्थिरता को दूर कर आत्मबल,
              धैर्य और श्रद्धा का संचार करता है।
            </p>
          )}
        </section>

        <section className="content-section" aria-labelledby="benefits-heading">
          <h2 id="benefits-heading">पाठ के लाभ</h2>
          <ul>
            {benefits.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="content-section" aria-labelledby="links-heading">
          <h2 id="links-heading">अन्य पाठ</h2>
          <div className="footer-links" style={{ gap: "0.85rem" }}>
            <Link href="/hanuman-chalisa-hindi" className="footer-link">
              हनुमान चालीसा
            </Link>
            <Link href="/hanuman-ashtak" className="footer-link">
              हनुमान अष्टक
            </Link>
            <Link href="/aarti/hanuman-ji-aarti" className="footer-link">
              हनुमान आरती
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

