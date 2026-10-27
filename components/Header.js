import Link from "next/link";
import { clinic } from "../data/clinic";

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <Link href="/" className="brand">{clinic.nameBn}</Link>
        <nav className="nav">
          <Link href="/">হোম</Link>
          <Link href="/doctors">ডাক্তার</Link>
          <Link href="/tests">টেস্ট</Link>
          <Link href="/appointment">অ্যাপয়েন্টমেন্ট</Link>
          <Link href="/contact">যোগাযোগ</Link>
        </nav>
      </div>
    </header>
  );
}
