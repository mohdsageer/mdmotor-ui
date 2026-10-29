
import { garageInfo, whyChooseUs, sectionContent } from "./data/gargageData";
import "./About.scss";
import carimage from "../assets/carinsiderepair.jpg"

export default function About() {
  return (
    <section id="about" className="about-section section-padding">
      <div className="about-layout">
        <div className="about-visual">
          <img
            src={carimage}
            alt="Vehicle inside an automotive workshop"
            loading="lazy"
          />
          <div className="about-badge">
            <strong>MD</strong>
            <span>Automotive Care</span>
          </div>
        </div>

        <div className="about-copy">
          <p className="section-eyebrow">{sectionContent.aboutEyebrow}</p>
          <h2>{garageInfo.aboutTitle}</h2>
          <p className="about-description">
            {garageInfo.aboutDescription}
          </p>

          <h3 className="why-heading">{sectionContent.whyTitle}</h3>
          <p className="why-description">{sectionContent.whyDescription}</p>

          <div className="why-grid">
            {whyChooseUs.map((item) => (
              <article className="why-item" key={item.id}>
                <span className="why-check" aria-hidden="true">✓</span>
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
