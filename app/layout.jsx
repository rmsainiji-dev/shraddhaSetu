import "../styles/globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { GoogleAnalytics } from "@next/third-parties/google";
export const dynamic = "force-static";
export const metadata = {
  metadataBase: new URL("https://shraddha-setu.vercel.app"),
  title: {
    default: "ShraddhaSetu – पवित्र भक्ति पोर्टल | हनुमान चालीसा, आरती, मंत्र",
    template: "%s | ShraddhaSetu",
  },
  verification: {
    google: "XblLD4XcUi0fcVduB22J3EJD5pB-U9WNJFW0dNKltnE",
  },
  description:
    "ShraddhaSetu एक पवित्र भक्ति मंच है जहाँ आप श्रद्धा और शांति के साथ हनुमान चालीसा, आरती, मंत्र और स्तोत्र का पाठ कर सकते हैं।",
  keywords: [
    "हनुमान चालीसा",
    "Hanuman Chalisa",
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
    <html lang="hi" data-scroll-behavior="smooth">
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
        <GoogleAnalytics gaId="G-67JCCZKVCY" />
      </body>
    </html>
  );
}
