import Icon from "./Icons";
import { Cloud } from "./Decor";

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
