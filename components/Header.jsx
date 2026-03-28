"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "होम" },
  { href: "/hanuman-chalisa-hindi", label: "हनुमान चालीसा"},
  { href: "/hanuman-ashtak", label: "हनुमान अष्टक" },
  { href: "/hanumat-stavan", label: "हनुमत् स्तवन" },
  { href: "/blog", label: "ब्लॉग" },
  // { href: "/hanuman-chalisa-sanskrit", label: "संस्कृत पाठ", badge: "Sanskrit" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname(); 

  return (
    <header className="site-header" role="banner">
      <div className="header-inner">
        {/* Logo */}
        <Link href="/" className="site-logo" aria-label="ShraddhaSetu – होमपेज">
          <div className="logo-emblem" aria-hidden="true">ॐ</div>
          <div className="logo-text-wrap">
            <span className="logo-title">ShraddhaSetu</span>
            <span className="logo-tagline">श्रद्धा का सेतु, भक्ति का संगम</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className={`main-nav${mobileOpen ? " open" : ""}`} aria-label="मुख्य नेविगेशन">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`nav-link${pathname === item.href || pathname === item.href + "/" ? " active" : ""}`}
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
              {item.badge && <span className="nav-badge">{item.badge}</span>}
            </Link>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button
          className="nav-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "मेनू बंद करें" : "मेनू खोलें"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? "✕" : "☰"}
        </button>
      </div>
    </header>
  );
}
