import Icon from "./Icons";
import { Reveal, Counter, Tilt } from "./Motion";
import { Accordion, TestimonialsSlider } from "./Interactive";
import { Cloud } from "./Decor";

export function SectionHead({ eyebrow, title, text }) {
  return (
    <Reveal className="section-head">
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </Reveal>
  );
}

export function StatsBand({ stats = [] }) {
  if (!stats.length) return null;
  return (
    <section className="stats-band">
      <svg className="ecg" viewBox="0 0 1200 60" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0 40 H400 L420 10 L440 55 L460 5 L480 45 H800 L815 25 L830 40 H1200" fill="none" stroke="currentColor" strokeWidth="2" />
      </svg>
      <div className="container grid4">
        {stats.map((s, i) => (
          <Reveal key={s.label} effect="zoom" delay={i * 120} className="stat-item">
            <b><Counter value={s.value} suffix={s.suffix} /></b>
            <span>{s.label}</span>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function FeaturesSection({ features = [], className = "block-lg", ...head }) {
  if (!features.length) return null;
  return (
    <section className={className}>
      <div className="container">
        <SectionHead {...head} />
        <div className="features-grid">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 100}>
              <Tilt className="feature-card">
                <div className="ico"><Icon name={f.icon} size={30} /></div>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </Tilt>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function StepsSection({ steps = [], className = "block-lg", ...head }) {
  if (!steps.length) return null;
  return (
    <section className={className}>
      <div className="container">
        <SectionHead {...head} />
        <div className="steps">
          {steps.map((s, i) => (
            <Reveal key={s.title} className="step" delay={i * 150}>
              <div className="num" data-n={i + 1}><Icon name={s.icon} size={32} /></div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function PackagesSection({ packages = [], className = "block-lg", ...head }) {
  if (!packages.length) return null;
  return (
    <section className={className}>
      <div className="container">
        <SectionHead {...head} />
        <div className="packages">
          {packages.map((p, i) => (
            <Reveal key={p.id} effect="flip" delay={i * 120}>
              <div className={`package ${p.popular ? "popular" : ""}`}>
                {p.popular && <span className="badge">Populyar</span>}
                <h3>{p.name}</h3>
                <div className="price">{p.price} <small>AZN</small></div>
                {p.oldPrice && <span className="old">{p.oldPrice} AZN</span>}
                <ul>
                  {p.features.map((f) => <li key={f}><Icon name="check" size={16} />{f}</li>)}
                </ul>
                <a href="/appointment" className="btn">Paketi seç</a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TestimonialsSection({ testimonials = [], title = "Pasiyentlərimiz nə deyir?", eyebrow = "Rəylər" }) {
  if (!testimonials.length) return null;
  return (
    <section className="block-lg testimonials">
      <Cloud className="deco-cloud" width={300} style={{ top: 30, left: "-4%" }} />
      <Cloud className="deco-cloud" width={220} style={{ bottom: 20, right: "3%" }} />
      <div className="container">
        <SectionHead eyebrow={eyebrow} title={title} />
        <Reveal effect="zoom">
          <TestimonialsSlider items={testimonials} />
        </Reveal>
      </div>
    </section>
  );
}

export function FaqSection({ faqs = [], title = "Tez-tez verilən suallar", eyebrow = "FAQ", text, className = "block-lg" }) {
  if (!faqs.length) return null;
  return (
    <section className={className}>
      <div className="container">
        <SectionHead eyebrow={eyebrow} title={title} text={text} />
        <Reveal>
          <Accordion items={faqs} />
        </Reveal>
      </div>
    </section>
  );
}

export function PartnersMarquee({ partners = [], title = "Əməkdaşlıq etdiyimiz sığorta şirkətləri" }) {
  if (!partners.length) return null;
  // The list is rendered twice so the CSS loop is seamless
  const loop = [...partners, ...partners];
  return (
    <section className="block">
      <div className="container">
        <Reveal className="partners-title">{title}</Reveal>
        <div className="marquee">
          <div className="marquee-track">
            {loop.map((p, i) => (
              <span className="partner" key={`${p.id}-${i}`} aria-hidden={i >= partners.length}>
                <Icon name="shield" size={20} />{p.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function CtaBanner({ settings, title = "Sağlamlığınızı sonraya saxlamayın", text = "Bu gün qəbula yazılın, həkimlərimiz sizə ən qısa zamanda kömək etsin." }) {
  return (
    <section className="block">
      <div className="container">
        <Reveal effect="zoom" className="cta">
          <span className="bubble" style={{ width: 160, height: 160, top: -60, right: "20%" }} />
          <span className="bubble" style={{ width: 90, height: 90, bottom: -30, left: "35%", animationDelay: "2s" }} />
          <div style={{ position: "relative" }}>
            <h2>{title}</h2>
            <p>{text}</p>
          </div>
          <div className="cta-actions">
            {settings && (
              <a href={`tel:${settings.phoneRaw}`} className="call-circle pulse-ring" aria-label="Zəng et">
                <Icon name="phone" size={22} />
              </a>
            )}
            <a href="/appointment" className="btn">Qəbula yazıl <Icon name="arrowRight" size={18} /></a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Timeline({ items = [] }) {
  if (!items.length) return null;
  return (
    <div className="timeline">
      {items.map((t, i) => (
        <Reveal key={t.year} className="tl-item" effect={i % 2 ? "right" : "left"}>
          <b>{t.year}</b>
          <h3>{t.title}</h3>
          <p>{t.text}</p>
        </Reveal>
      ))}
    </div>
  );
}

export function CheckList({ items = [] }) {
  if (!items.length) return null;
  return (
    <ul className="check-list">
      {items.map((item, i) => (
        <Reveal as="li" key={item} effect="left" delay={i * 60}>
          <Icon name="check" size={20} />{item}
        </Reveal>
      ))}
    </ul>
  );
}

export function PriceTable({ title, items = [], href }) {
  if (!items.length) return null;
  return (
    <div className="price-block">
      <h3>
        <span>{title}</span>
        {href && <a href={href}><Icon name="arrowRight" size={18} /></a>}
      </h3>
      <table className="price-table">
        <tbody>
          {items.map((p) => (
            <tr key={p.name}><td>{p.name}</td><td>{p.price}</td></tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
