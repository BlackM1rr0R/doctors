import Link from "next/link";
import Icon from "./Icons";
import { Cloud } from "./Decor";
import { Reveal } from "./Motion";

export function SectionCaption({ title, href, linkText = "Hamısına bax" }) {
  return (
    <div className="caption-row">
      <h2>{title}</h2>
      {href && <Link href={href} className="link-under">{linkText}</Link>}
    </div>
  );
}

export function DoctorCard({ doctor }) {
  return (
    <Link href={`/doctors/${doctor.id}`} className="item">
      {doctor.rating && (
        <span className="rating-badge"><Icon name="star" size={13} fill="currentColor" />{doctor.rating}</span>
      )}
      <img src={doctor.photo} alt={doctor.name} loading="lazy" />
      <div className="item-text">
        <h4>{doctor.name}</h4>
        <h5>{doctor.specialty} · {doctor.experience} il təcrübə</h5>
        <div className="flexable">
          <span className="pill">{doctor.price}</span>
          <span className="more">Ətraflı</span>
        </div>
      </div>
    </Link>
  );
}

export function NewsCard({ item }) {
  return (
    <Link href={`/news/${item.id}`} className="item">
      <img src={item.image} alt={item.title} loading="lazy" />
      <div className="item-text">
        {item.category && <span className="tag">{item.category}</span>}
        <h4>{item.title}</h4>
        <h5>{new Date(item.date).toLocaleDateString("az-AZ")}</h5>
        <p style={{ color: "#484848", fontSize: 14, lineHeight: 1.5 }}>{item.excerpt}</p>
      </div>
    </Link>
  );
}

export function DepartmentsMosaic({ departments, limit = 10 }) {
  return (
    <div className="mosaic">
      {departments.slice(0, limit).map((d, i) => (
        <Reveal key={d.id} effect="zoom" delay={i * 70}>
          <Link href={`/departments/${d.slug}`} className="tile">
            <img src={d.image} alt={d.name} loading="lazy" />
            <div className="overlay" />
            <div className="tourcap">
              <h3>{d.name}</h3>
              <p>{d.tagline}</p>
            </div>
          </Link>
        </Reveal>
      ))}
    </div>
  );
}

export function DepartmentsSection({ departments }) {
  return (
    <section className="departments">
      <Cloud className="deco" width={260} style={{ top: 20, right: "8%" }} />
      <Cloud className="deco" width={380} style={{ bottom: -30, left: "-3%" }} />
      <div className="container">
        <SectionCaption title="Şöbələr" href="/departments" />
        <DepartmentsMosaic departments={departments} />
      </div>
    </section>
  );
}
