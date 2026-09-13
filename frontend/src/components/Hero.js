"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Icon from "./Icons";
import { Cloud, CloudBank } from "./Decor";

const INTERVAL = 5000;

export default function Hero({ slides, services }) {
  const [active, setActive] = useState(0);
  const count = slides.length;

  useEffect(() => {
    if (count < 2) return;
    const t = setTimeout(() => setActive((i) => (i + 1) % count), INTERVAL);
    return () => clearTimeout(t);
  }, [active, count]);

  // Mouse parallax: expose cursor offset (-0.5..0.5) as CSS variables consumed in effects.css
  const heroRef = useRef(null);
  const onMouseMove = (e) => {
    const r = heroRef.current.getBoundingClientRect();
    heroRef.current.style.setProperty("--mx", ((e.clientX - r.left) / r.width - 0.5).toFixed(3));
    heroRef.current.style.setProperty("--my", ((e.clientY - r.top) / r.height - 0.5).toFixed(3));
  };

  if (!count) return null;
  const slide = slides[active];
  // Side cards start at the active slide, like the original related carousel
  const ordered = slides.map((_, i) => slides[(active + i) % count]);

  return (
    <section className="hero" ref={heroRef} onMouseMove={onMouseMove}>
      <div className="clouds">
        <Cloud width={220} style={{ top: 110, left: "6%" }} />
        <Cloud width={320} style={{ top: 90, left: "62%", animationDuration: "55s" }} />
        <Cloud width={160} style={{ top: 260, left: "38%", animationDuration: "35s" }} />
        <Cloud width={420} style={{ top: 420, left: "-4%", animationDuration: "60s" }} />
      </div>

      <img key={`img-${slide.id}`} className="city-img" src={slide.image} alt="" />
      <svg key={`pulse-${slide.id}`} className="pulse-line" viewBox="0 0 700 120" aria-hidden="true">
        <path d="M0 80 H220 L245 40 L270 110 L300 10 L330 100 L350 70 H460 L480 55 L500 80 H700" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <CloudBank />

      <div className="caption" key={`cap-${slide.id}`}>
        <h1>{slide.title}</h1>
        <h3>{slide.subtitle}</h3>
      </div>

      <div className="featuresAvia">
        {services.slice(0, 5).map((s) => (
          <Link href={s.slug ? `/services/${s.slug}` : "/services"} className="feature" key={s.id}>
            <Icon name={s.icon} />
            <span>{s.title}</span>
          </Link>
        ))}
      </div>

      <div className="related">
        {ordered.map((s, i) => (
          <div
            key={s.id}
            className={`card ${i === 0 ? "alive" : ""}`}
            onClick={() => setActive(slides.indexOf(s))}
          >
            <img src={s.image} alt={s.title} />
            <div className="overlay" />
            <div className="itemText">
              <h2>{s.title}</h2>
              <p>{s.subtitle}</p>
            </div>
          </div>
        ))}
      </div>

      {[
        { top: "30%", left: "36%", size: 26, delay: "0s" },
        { top: "62%", left: "48%", size: 18, delay: "1.5s" },
        { top: "14%", left: "52%", size: 22, delay: "3s" },
      ].map((c) => (
        <svg key={c.top} className="float-cross" style={{ top: c.top, left: c.left, animationDelay: c.delay }} width={c.size} height={c.size} viewBox="0 0 24 24" aria-hidden="true">
          <path d="M9 2h6v7h7v6h-7v7H9v-7H2V9h7z" fill="currentColor" />
        </svg>
      ))}

      <div className="hero-badge" style={{ left: "53%", top: "76%" }}>
        <span className="live-dot pulse-ring" />
        <div><b>24/7 Təcili yardım</b>Həmişə yanınızdayıq</div>
      </div>
      <div className="hero-badge" style={{ right: "4%", top: "13%", animationDelay: "1.2s" }}>
        <span className="ico"><Icon name="star" size={18} fill="currentColor" /></span>
        <div><b>4.9 / 5</b>2 400+ pasiyent rəyi</div>
      </div>

      <div className="dots">
        {slides.map((s, i) => (
          <button key={s.id} className={i === active ? "active" : ""} onClick={() => setActive(i)} aria-label={s.title}>
            {i === active && (
              <svg className="ring" viewBox="0 0 26 26" key={`ring-${active}`}>
                <circle className="bg" cx="13" cy="13" r="11" />
                <circle className="fg" cx="13" cy="13" r="11" />
              </svg>
            )}
            <span className="dot" />
          </button>
        ))}
      </div>
    </section>
  );
}
