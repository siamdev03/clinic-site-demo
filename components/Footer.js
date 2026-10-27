import { clinic } from "../data/clinic";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p><strong>{clinic.nameBn}</strong></p>
        <p>{clinic.address}</p>
        <p>ফোন: <a href={`tel:${clinic.phone}`}>{clinic.phone}</a> · {clinic.hours}</p>
        <p style={{ marginTop: 10, opacity: 0.7 }}>
          © {new Date().getFullYear()} {clinic.name}. সর্বস্বত্ব সংরক্ষিত।
        </p>
      </div>
    </footer>
  );
}
