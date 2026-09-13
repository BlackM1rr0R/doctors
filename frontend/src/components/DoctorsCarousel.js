"use client";

import { useRef } from "react";
import Link from "next/link";
import Icon from "./Icons";
import { DoctorCard } from "./Cards";
import { Reveal } from "./Motion";

export default function DoctorsCarousel({ title, doctors }) {
  const track = useRef(null);
  const scroll = (dir) => {
    const el = track.current;
    if (el) el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: "smooth" });
  };

  return (
    <div className="carousel">
      <div className="caption-row">
        <h2>{title}</h2>
        <div className="flexable">
          <Link href="/doctors" className="link-under">Bütün həkimlərə bax</Link>
          <div className="carousel-nav">
            <button onClick={() => scroll(-1)} aria-label="Əvvəlki"><Icon name="chevronLeft" size={18} /></button>
            <button onClick={() => scroll(1)} aria-label="Növbəti"><Icon name="chevronRight" size={18} /></button>
          </div>
        </div>
      </div>
      <div className="carousel-track" ref={track}>
        {doctors.map((d, i) => (
          <Reveal key={d.id} delay={Math.min(i, 4) * 100}>
            <DoctorCard doctor={d} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
