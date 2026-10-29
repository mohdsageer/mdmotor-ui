
import { useState } from "react";
import { garageInfo, navigationLinks } from "../components/data/gargageData";
import "./Header.scss";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <a
        href="#home"
        className="brand"
        onClick={() => setMenuOpen(false)}
        aria-label={`${garageInfo.name} home`}
      >
        <span className="brand-mark">MD</span>
        <span className="brand-text">
          <strong>{garageInfo.name}</strong>
          <small>{garageInfo.tagline}</small>
        </span>
      </a>

      <button
        className="menu-toggle"
        type="button"
        aria-label={menuOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      <nav className={menuOpen ? "main-nav open" : "main-nav"}>
        {navigationLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </a>
        ))}

        <a
          className="header-cta"
          href={`https://wa.me/${garageInfo.whatsappNumber}?text=${encodeURIComponent(
            garageInfo.whatsappMessage
          )}`}
          target="_blank"
          rel="noreferrer"
          onClick={() => setMenuOpen(false)}
        >
          Book Service <span aria-hidden="true">↗</span>
        </a>
      </nav>
    </header>
  );
}
