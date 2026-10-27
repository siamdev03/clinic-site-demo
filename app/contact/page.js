import { clinic } from "../../data/clinic";

export const metadata = { title: "যোগাযোগ" };

export default function Contact() {
  return (
    <section className="section">
      <div className="container">
        <h2>যোগাযোগ</h2>
        <p className="sub">{clinic.address}</p>
        <div className="card" style={{ marginBottom: 20 }}>
          <p>📞 <a href={`tel:${clinic.phone}`}>{clinic.phone}</a></p>
          <p>✉️ <a href={`mailto:${clinic.email}`}>{clinic.email}</a></p>
          <p>🕘 {clinic.hours}</p>
          <div className="btn-row">
            <a
              className="btn primary"
              target="_blank"
              rel="noopener noreferrer"
              href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(clinic.mapQuery)}`}
            >
              📍 দিকনির্দেশনা
            </a>
          </div>
        </div>
        <iframe
          className="map"
          loading="lazy"
          title="Clinic location"
          src={`https://www.google.com/maps?q=${encodeURIComponent(clinic.mapQuery)}&output=embed`}
        />
      </div>
    </section>
  );
}
