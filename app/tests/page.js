import { tests } from "../../data/clinic";

export const metadata = { title: "ডায়াগনস্টিক টেস্ট ও মূল্য" };

export default function Tests() {
  return (
    <section className="section">
      <div className="container">
        <h2>ডায়াগনস্টিক টেস্ট ও মূল্য</h2>
        <p className="sub">নমুনা মূল্যতালিকা। প্রকৃত দাম দিয়ে বদলে নিন।</p>
        <table className="table">
          <thead>
            <tr><th>টেস্টের নাম</th><th>মূল্য (৳)</th></tr>
          </thead>
          <tbody>
            {tests.map((t) => (
              <tr key={t.name}><td>{t.name}</td><td>{t.price}</td></tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
