
import { services, sectionContent } from "./data/gargageData";
import "./Services.scss";

export default function Services() {
  return (
    <section id="services" className="services-section section-padding">
      <div className="section-heading">
        <p className="section-eyebrow">{sectionContent.servicesEyebrow}</p>
        <h2>{sectionContent.servicesTitle}</h2>
        <p>{sectionContent.servicesDescription}</p>
      </div>

      <div className="services-grid">
        {services.map((service) => (
          <article className="service-card" key={service.id}>
            <div className="service-icon" aria-hidden="true">
              {service.icon}
            </div>

            <h3>{service.title}</h3>
            <p>{service.description}</p>

            <a href="#contact" className="service-link">
              Enquire now <span>→</span>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
