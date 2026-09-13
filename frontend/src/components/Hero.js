"use client";

import { useEffect, useState } from "react";
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

  if (!count) return null;
  const slide = slides[active];
  // Side cards start at the active slide, like the original related carousel
  const ordered = slides.map((_, i) => slides[(active + i) % count]);

  return (
    <section className="hero">
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
          <Link href="/services" className="feature" key={s.id}>
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
