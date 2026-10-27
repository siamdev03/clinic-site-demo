import Link from "next/link";
import { clinic, doctors, services, reviews } from "../data/clinic";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <h1>{clinic.tagline}</h1>
          <p>
            অভিজ্ঞ ডাক্তার, আধুনিক ডায়াগনস্টিক সুবিধা এবং ঘরে বসে অ্যাপয়েন্টমেন্ট। {clinic.address}।
          </p>
          <div className="btn-row">
            <Link href="/appointment" className="btn primary">অ্যাপয়েন্টমেন্ট নিন</Link>
            <a href={`tel:${clinic.phone}`} className="btn ghost">📞 {clinic.phone}</a>
          </div>
          <p className="meta">🕘 {clinic.hours}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>আমাদের সেবা</h2>
          <p className="sub">এক ছাদের নিচে চিকিৎসা ও পরীক্ষা</p>
          <div className="grid">
            {services.map((s) => (
              <div className="card" key={s.title}>
                <div className="icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p className="small">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <h2>আমাদের ডাক্তার</h2>
          <p className="sub">অভিজ্ঞ বিশেষজ্ঞ প্যানেল</p>
          <div className="grid">
            {doctors.map((d) => (
              <div className="card" key={d.id}>
                <h3>{d.name}</h3>
                <span className="tag">{d.speciality}</span>
                <p className="small">{d.degree}</p>
                <p className="small">🕒 {d.schedule}</p>
              </div>
            ))}
          </div>
          <div className="btn-row">
            <Link href="/doctors" className="btn ghost">সব ডাক্তার দেখুন</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>রোগীরা যা বলেন</h2>
          <p className="sub">নমুনা রিভিউ। আসল ক্লায়েন্টের রিভিউ দিয়ে বদলে নিন।</p>
          <div className="grid">
            {reviews.map((r) => (
              <div className="card" key={r.name}>
                <p>“{r.text}”</p>
                <p className="small" style={{ marginTop: 8 }}>— {r.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <h2>আমাদের অবস্থান</h2>
          <p className="sub">{clinic.address}</p>
          <iframe
            className="map"
            loading="lazy"
            title="Clinic location"
            src={`https://www.google.com/maps?q=${encodeURIComponent(clinic.mapQuery)}&output=embed`}
          />
        </div>
      </section>
    </>
  );
}
