import Link from "next/link";
import Icon from "./Icons";
import { Cloud } from "./Decor";

const FOOTER_LINKS = [
  { href: "/about", label: "Haqqımızda" },
  { href: "/doctors", label: "Həkimlər" },
  { href: "/departments", label: "Şöbələr" },
  { href: "/news", label: "Xəbərlər" },
];
const PATIENT_LINKS = [
  { href: "/appointment", label: "Onlayn qəbul" },
  { href: "/prices", label: "Qiymətlər" },
  { href: "/services", label: "Xidmətlər" },
  { href: "/contact", label: "Əlaqə" },
];

export default function Footer({ settings }) {
  return (
    <>
      <section className="contactInfo">
        <div className="container">
          <ul>
            <li>
              <div className="circleIcon"><Icon name="pin" /></div>
              <div>
                {settings.addresses.map((a) => <address key={a}>{a}</address>)}
              </div>
            </li>
            <li>
              <div className="circleIcon"><Icon name="mail" /></div>
              <a href={`mailto:${settings.email}`}>{settings.email}</a>
            </li>
            <li>
              <div className="circleIcon"><Icon name="phone" /></div>
              <div>
                <a href={`tel:${settings.phoneRaw}`}>{settings.phone}</a>
                <div style={{ fontSize: 13, opacity: 0.8 }}>{settings.workingHours}</div>
              </div>
            </li>
          </ul>
        </div>
        <Cloud className="cloud" width={360} />
      </section>

      <section className="footer-links">
        <div className="container cols">
          <div>
            <h4>{settings.clinicName}</h4>
            <p>Müasir avadanlıq, təcrübəli həkimlər və fərdi yanaşma ilə sağlamlığınızın keşiyindəyik.</p>
          </div>
          <div>
            <h4>Keçidlər</h4>
            <ul>
              {FOOTER_LINKS.map((l) => <li key={l.href}><Link href={l.href}>{l.label}</Link></li>)}
            </ul>
          </div>
          <div>
            <h4>Pasiyentlər üçün</h4>
            <ul>
              {PATIENT_LINKS.map((l) => <li key={l.href}><Link href={l.href}>{l.label}</Link></li>)}
            </ul>
          </div>
          <div>
            <h4>İş saatları</h4>
            <p>{settings.workingHours}</p>
            <p style={{ marginTop: 10 }}>Təcili yardım: <b style={{ color: "#fff" }}>24/7</b></p>
          </div>
        </div>
      </section>

      <footer>
        <div className="container row">
          <div className="social">
            <a href={settings.socials?.facebook} target="_blank" rel="noreferrer" aria-label="Facebook"><Icon name="facebook" size={14} /></a>
            <a href={settings.socials?.instagram} target="_blank" rel="noreferrer" aria-label="Instagram"><Icon name="instagram" size={14} /></a>
          </div>
          <p className="copy" style={{ textAlign: "center" }}>© Copyright {new Date().getFullYear()}. Bütün hüquqları qorunur</p>
          <p className="made">{settings.clinicName}</p>
        </div>
      </footer>
    </>
  );
}
