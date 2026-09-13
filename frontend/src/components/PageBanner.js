import Link from "next/link";
import { Cloud, CloudBank } from "./Decor";

export default function PageBanner({ title, subtitle, crumbs = [] }) {
  return (
    <section className="page-banner">
      <Cloud width={240} style={{ position: "absolute", top: 20, right: "12%", opacity: 0.9 }} />
      <Cloud width={150} style={{ position: "absolute", top: 70, left: "45%", opacity: 0.7 }} />
      <div className="container">
        <div className="breadcrumbs">
          <Link href="/">Ana səhifə</Link>
          {crumbs.map((c) => (
            <span key={c.label}> / {c.href ? <Link href={c.href}>{c.label}</Link> : c.label}</span>
          ))}
        </div>
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
      </div>
      <CloudBank />
    </section>
  );
}
