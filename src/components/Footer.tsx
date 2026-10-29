
import {
  garageInfo,
  footerSections,
  socialLinks,
} from "./data/gargageData";
import "./Footer.scss";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand">
          <a href="#home" className="footer-logo">
            <span className="brand-mark">MD</span>
            <strong>{garageInfo.name}</strong>
          </a>

          <p>{garageInfo.tagline}</p>
          <p>{garageInfo.aboutDescription}</p>
        </div>

        {footerSections.map((section) => (
          <div className="footer-links" key={section.title}>
            <h3>{section.title}</h3>

            {section.links.map((link) => (
              <a href={link.href} key={link.href}>
                {link.label}
              </a>
            ))}
          </div>
        ))}

        <div className="footer-links">
          <h3>Contact</h3>
          <a href={`tel:${garageInfo.phone.replace(/[^\d+]/g, "")}`}>
            {garageInfo.phone}
          </a>
          <a href={`mailto:${garageInfo.email}`}>{garageInfo.email}</a>
          <p>{garageInfo.address}</p>

          {socialLinks.map((social) => (
            <a
              href={social.href}
              key={social.label}
              target="_blank"
              rel="noreferrer"
            >
              {social.label}
            </a>
          ))}
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} {garageInfo.name}. All rights reserved.
        </p>
        <a href="#home">Back to top ↑</a>
      </div>
    </footer>
  );
}
