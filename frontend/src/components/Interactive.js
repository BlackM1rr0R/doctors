"use client";

import { useEffect, useState } from "react";
import Icon, { Stars } from "./Icons";

export function Accordion({ items, defaultOpen = 0 }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="faq">
      {items.map((f, i) => (
        <div key={f.id ?? i} className={`faq-item ${open === i ? "open" : ""}`}>
          <button className="faq-q" onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i}>
            <span>{f.question}</span>
            <span className="sign"><Icon name="plus" size={16} /></span>
          </button>
          <div className="faq-a">
            <div><p>{f.answer}</p></div>
          </div>
        </div>
      ))}
    </div>
  );
}

export function TestimonialsSlider({ items, interval = 6000 }) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || items.length < 2) return;
    const t = setTimeout(() => setActive((i) => (i + 1) % items.length), interval);
    return () => clearTimeout(t);
  }, [active, paused, items.length, interval]);

  if (!items.length) return null;
  const t = items[active];
  const initials = t.name.split(" ").map((p) => p[0]).join("").slice(0, 2);

  return (
    <div className="t-slider" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div className="t-card" key={t.id}>
        <div className="quote"><Icon name="quote" size={24} /></div>
        <Stars value={t.rating} />
        <p>“{t.text}”</p>
        <div className="t-author">
          <span className="avatar">{initials}</span>
          <div style={{ textAlign: "left" }}>
            <b>{t.name}</b>
            <div style={{ fontSize: 13, color: "#484848" }}>{t.role}</div>
          </div>
        </div>
      </div>
      <div className="t-dots">
        {items.map((x, i) => (
          <button key={x.id} className={i === active ? "active" : ""} onClick={() => setActive(i)} aria-label={`Rəy ${i + 1}`} />
        ))}
      </div>
    </div>
  );
}
