"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const footerLinks = {
  bhakti: [
    { href: "/hanuman-chalisa-hindi", label: "हनुमान चालीसा " },
    { href: "/hanuman-ashtak", label: "हनुमान अष्टक" },
    { href: "/aarti/hanuman-ji-aarti", label: "हनुमान जी की आरती" },
  ],
  coming: [
    { href: "#", label: "आरती संग्रह (जल्द)" },
    { href: "#", label: "मंत्र पाठ (जल्द)" },
    { href: "#", label: "स्तोत्र संग्रह (जल्द)" },
  ],
};

function pathMatches(pathname, href) {
  if (!href || href === "#") return false;
  const p = pathname.replace(/\/$/, "") || "/";
  const h = href.replace(/\/$/, "") || "/";
  return p === h;
}

export default function Footer() {
  const pathname = usePathname() || "";

  return (
    <footer className="site-footer" role="contentinfo">
      <div className="container">
        <div className="footer-mantra" aria-label="मंगल श्लोक">
          ॐ श्री रामाय नमः 🙏 जय बजरंगबली
        </div>

        <div className="footer-grid">
          <div className="footer-brand">
            <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
              <span style={{ fontSize: "2rem", filter: "drop-shadow(0 0 8px rgba(218,165,32,0.5))" }}>ॐ</span>
              <div>
                <div style={{ fontFamily: "'Vesper Libre', serif", fontSize: "1.3rem", fontWeight: 900, color: "var(--gold-glow)" }}>
                  ShraddhaSetu
                </div>
                <div style={{ fontSize: "0.65rem", color: "rgba(253,232,200,0.5)", letterSpacing: "0.12em", textTransform: "uppercase" }}>
                  श्रद्धा का पवित्र सेतु
                </div>
              </div>
            </div>
            <p>
              ShraddhaSetu एक पवित्र हिंदू भक्ति मंच है जहाँ भक्त हनुमान चालीसा,
              आरती, मंत्र और स्तोत्र का पाठ कर सकते हैं। हमारा लक्ष्य है
              – डिजिटल माध्यम से भक्ति को सरल और सुलभ बनाना।
            </p>
          </div>

          <div>
            <h3 className="footer-heading">भक्ति सामग्री</h3>
            <nav className="footer-links" aria-label="भक्ति लिंक">
              {footerLinks.bhakti.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="footer-link"
                  aria-current={pathMatches(pathname, l.href) ? "page" : undefined}
                  onClick={(e) => {
                    if (pathMatches(pathname, l.href)) {
                      e.preventDefault();
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }
                  }}
                >
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="footer-heading">शीघ्र आ रहा है</h3>
            <nav className="footer-links" aria-label="आगामी सामग्री">
              {footerLinks.coming.map((l) => (
                <Link key={l.label} href={l.href} className="footer-link"
                  style={{ opacity: 0.5, pointerEvents: "none" }}>
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} ShraddhaSetu – सर्वाधिकार सुरक्षित</span>
          <span style={{ color: "rgba(253,232,200,0.2)" }}>•</span>
          <span>यह एक भक्ति सेवा प्लेटफॉर्म है। सामग्री भक्तों की सेवा हेतु प्रस्तुत है।</span>
          <a href="#main-content" className="back-top">↑ वापस ऊपर</a>
        </div>
      </div>
    </footer>
  );
}
