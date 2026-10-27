import AppointmentForm from "../../components/AppointmentForm";

export const metadata = { title: "অ্যাপয়েন্টমেন্ট" };

export default function Appointment() {
  return (
    <section className="section">
      <div className="container">
        <h2>অনলাইন অ্যাপয়েন্টমেন্ট</h2>
        <p className="sub">ফর্ম পূরণ করুন, আমরা কনফার্ম করে জানিয়ে দেব।</p>
        <AppointmentForm />
      </div>
    </section>
  );
}
