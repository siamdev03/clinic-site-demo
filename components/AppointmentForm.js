"use client";

import { useState } from "react";
import { clinic, doctors } from "../data/clinic";

// Form submit hole clinic er WhatsApp e ready message khule jay.
// Pore chaile Google Sheet / email API e connect kora jabe.
export default function AppointmentForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    doctor: doctors[0].name,
    date: "",
    note: "",
  });

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    const msg =
      `অ্যাপয়েন্টমেন্ট অনুরোধ\n` +
      `নাম: ${form.name}\n` +
      `ফোন: ${form.phone}\n` +
      `ডাক্তার: ${form.doctor}\n` +
      `তারিখ: ${form.date}\n` +
      `বিবরণ: ${form.note || "-"}`;
    window.open(
      `https://wa.me/${clinic.whatsapp}?text=${encodeURIComponent(msg)}`,
      "_blank"
    );
  };

  return (
    <form className="form" onSubmit={submit}>
      <label>
        রোগীর নাম
        <input name="name" value={form.name} onChange={update} required />
      </label>
      <label>
        মোবাইল নম্বর
        <input name="phone" type="tel" value={form.phone} onChange={update} required />
      </label>
      <label>
        ডাক্তার
        <select name="doctor" value={form.doctor} onChange={update}>
          {doctors.map((d) => (
            <option key={d.id} value={d.name}>
              {d.name} - {d.speciality}
            </option>
          ))}
        </select>
      </label>
      <label>
        পছন্দের তারিখ
        <input name="date" type="date" value={form.date} onChange={update} required />
      </label>
      <label>
        সমস্যার সংক্ষিপ্ত বিবরণ (ঐচ্ছিক)
        <textarea name="note" rows={3} value={form.note} onChange={update} />
      </label>
      <button className="btn primary" type="submit">
        WhatsApp এ অনুরোধ পাঠান
      </button>
    </form>
  );
}
