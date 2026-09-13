"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import Icon from "./Icons";

const NAV = [
  { href: "/about", label: "Haqqımızda" },
  { href: "/doctors", label: "Həkimlər" },
  { href: "/services", label: "Xidmətlər" },
  { href: "/departments", label: "Şöbələr" },
  { href: "/prices", label: "Qiymətlər" },
  { href: "/news", label: "Xəbərlər" },
  { href: "/appointment", label: "Onlayn qəbul" },
  { href: "/contact", label: "Əlaqə" },
];

const LANGS = ["AZ", "RU", "EN"];

export default function Header({ settings }) {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState("AZ");
  const [langOpen, setLangOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 90);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const mode = !isHome ? "pageNav" : scrolled ? "sticky" : "";

  return (
    <>
      <header className={`header ${mode}`}>
        <div className="container inner">
          <Logo name={settings.clinicName} />

          <ul className={`nav ${open ? "open" : ""}`}>
            <li className="close-row">
              <span>Menyunu bağla</span>
              <button onClick={() => setOpen(false)} aria-label="Bağla">×</button>
            </li>
            {NAV.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={pathname.startsWith(item.href) ? "active" : ""} onClick={() => setOpen(false)}>
                  <span>{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="wrap-menu">
            <div className="lang">
              <button className="lang-btn" onClick={() => setLangOpen((v) => !v)} aria-expanded={langOpen}>
                {lang} <Icon name="chevronDown" size={14} />
              </button>
              {langOpen && (
                <div className="lang-menu">
                  {LANGS.filter((l) => l !== lang).map((l) => (
                    <button key={l} onClick={() => { setLang(l); setLangOpen(false); }}>{l}</button>
                  ))}
                </div>
              )}
            </div>
            <a href={`tel:${settings.phoneRaw}`} className="callingCont">
              <Icon name="phone" size={15} />
              <span>{settings.phone}</span>
            </a>
            <button className="burger" onClick={() => setOpen(true)} aria-label="Menyu">
              <span /><span /><span />
            </button>
          </div>
        </div>
      </header>

      <div className="wp">
        <a href={`https://api.whatsapp.com/send?phone=${settings.whatsapp}`} target="_blank" rel="noreferrer">
          <Icon name="whatsapp" size={18} /> WhatsApp-a yazın
        </a>
      </div>
    </>
  );
}
