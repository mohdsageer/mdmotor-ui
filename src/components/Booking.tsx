
import { garageInfo, sectionContent } from "./data/gargageData";
import "./Booking.scss";

export default function Booking() {
  const whatsappUrl = `https://wa.me/${garageInfo.whatsappNumber}?text=${encodeURIComponent(
    garageInfo.whatsappMessage
  )}`;

  return (
    <section id="contact" className="booking-section section-padding">
      <div className="booking-panel">
        <div className="booking-copy">
          <p className="section-eyebrow">{sectionContent.contactEyebrow}</p>
          <h2>{garageInfo.bookingTitle}</h2>
          <p>{garageInfo.bookingDescription}</p>

          <a
            className="booking-button"
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
          >
            Chat on WhatsApp <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div className="contact-details">
          <div className="contact-item">
            <span aria-hidden="true">☎</span>
            <div>
              <small>Call us</small>
              <a href={`tel:${garageInfo.phone.replace(/[^\d+]/g, "")}`}>
                {garageInfo.phone} 
              </a>
            </div>
          </div>

          <div className="contact-item">
            <span aria-hidden="true">✉</span>
            <div>
              <small>Email us</small>
              <a href={`mailto:${garageInfo.email}`}>
                {garageInfo.email}
              </a>
            </div>
          </div>

          <div className="contact-item">
            <span aria-hidden="true">⌖</span>
            <div>
              <small>Visit us</small>
              <p>{garageInfo.address}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
