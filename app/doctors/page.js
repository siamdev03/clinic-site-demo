import Link from "next/link";
import { doctors } from "../../data/clinic";

export const metadata = { title: "আমাদের ডাক্তার" };

export default function Doctors() {
  return (
    <section className="section">
      <div className="container">
        <h2>আমাদের ডাক্তার</h2>
        <p className="sub">চেম্বারের সময় ও ফি</p>
        <div className="grid">
          {doctors.map((d) => (
            <div className="card" key={d.id}>
              <h3>{d.name}</h3>
              <span className="tag">{d.speciality}</span>
              <p className="small">{d.degree}</p>
              <p className="small">🕒 {d.schedule}</p>
              <p className="small">ফি: ৳{d.fee}</p>
              <div className="btn-row">
                <Link href="/appointment" className="btn primary">অ্যাপয়েন্টমেন্ট</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
