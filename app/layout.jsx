import "../styles/globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  metadataBase: new URL("https://www.shraddhaSetu.in"),
  title: {
    default: "ShraddhaSetu – हिंदू भक्ति पोर्टल | हनुमान चालीसा, आरती, मंत्र",
    template: "%s | ShraddhaSetu",
  },
  description:
    "ShraddhaSetu एक पवित्र हिंदू भक्ति मंच है जहाँ आप हनुमान चालीसा, आरती, मंत्र और स्तोत्र हिंदी तथा संस्कृत में पढ़ सकते हैं।",
  keywords: [
    "हनुमान चालीसा",
    "Hanuman Chalisa Hindi",
    "हनुमान चालीसा हिंदी",
    "bhakti",
    "mantra",
    "aarti",
    "stotra",
    "hindu devotional",
    "ShraddhaSetu",
  ],
  openGraph: {
    siteName: "ShraddhaSetu",
    locale: "hi_IN",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "ShraddhaSetu – श्रद्धासेतु" }],
  },
  twitter: { card: "summary_large_image", site: "@ShraddhaSetu" },
  robots: { index: true, follow: true },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html  lang="hi" data-scroll-behavior="smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Serif+Devanagari:wght@300;400;500;600;700&family=Vesper+Libre:wght@400;700;900&family=EB+Garamond:ital,wght@0,400;0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <a href="#main-content" className="sr-only" style={{
          position: "absolute", left: "-9999px",
        }}>
          मुख्य सामग्री पर जाएँ
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
