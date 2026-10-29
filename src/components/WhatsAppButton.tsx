
import { garageInfo } from "./data/gargageData";
import "./WhatsAppButton.scss";

export default function WhatsAppButton() {
  const whatsappUrl = `https://wa.me/${garageInfo.whatsappNumber}?text=${encodeURIComponent(
    garageInfo.whatsappMessage
  )}`;

  return (
    <a
      className="whatsapp-float"
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Contact MD Motors on WhatsApp"
    >
      <svg
        className="whatsapp-icon"
        viewBox="0 0 32 32"
        aria-hidden="true"
      >
        <path
          fill="currentColor"
          d="M16 3a12.8 12.8 0 0 0-10.9 19.5L3.4 29l6.7-1.7A12.9 12.9 0 1 0 16 3Zm0 23.4c-2 0-4-.5-5.7-1.6l-.4-.2-4 .9 1.1-3.9-.3-.4A10.2 10.2 0 1 1 16 26.4Zm5.6-7.7c-.3-.2-1.9-.9-2.2-1-.3-.1-.5-.2-.7.2s-.8 1-1 1.2-.4.2-.7.1a8.4 8.4 0 0 1-2.6-1.6 9.5 9.5 0 0 1-1.8-2.2c-.2-.3 0-.5.1-.7l.5-.6.3-.5c.1-.2 0-.4 0-.6l-1-2.3c-.3-.6-.6-.5-.8-.5h-.6c-.2 0-.6.1-.9.4-.3.4-1.2 1.2-1.2 2.9s1.3 3.3 1.5 3.5c.2.2 2.5 3.8 6 5.2.8.3 1.4.5 1.9.6.8.2 1.5.2 2 .1.7-.1 1.9-.8 2.2-1.6.3-.8.3-1.5.2-1.6-.1-.1-.3-.2-.6-.4Z"
        />
      </svg>

      <span>Chat with us</span>
      <span className="whatsapp-car" aria-hidden="true">🚗</span>
    </a>
  );
}
