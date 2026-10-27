import { clinic } from "../data/clinic";

export default function FloatingButtons() {
  return (
    <div className="floating">
      <a className="call" href={`tel:${clinic.phone}`}>📞 কল করুন</a>
      <a
        className="wa"
        href={`https://wa.me/${clinic.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        💬 WhatsApp
      </a>
    </div>
  );
}
