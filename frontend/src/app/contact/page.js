import PageBanner from "@/components/PageBanner";
import ContactForm from "@/components/ContactForm";
import Icon from "@/components/Icons";
import { PriceTable, FaqSection, CtaBanner } from "@/components/Sections";
import { Reveal } from "@/components/Motion";
import { getData, DEFAULT_SETTINGS } from "@/lib/api";

export const metadata = { title: "Əlaqə — Medika Klinika" };

export default async function ContactPage() {
  const [settings, about, faqs] = await Promise.all([
    getData("/settings", DEFAULT_SETTINGS),
    getData("/about", {}),
    getData("/faqs"),
  ]);
  const schedule = (about.schedule || []).map((s) => ({ name: s.day, price: s.hours }));

  return (
    <>
      <PageBanner title="Əlaqə" subtitle="Suallarınız üçün bizimlə əlaqə saxlayın" crumbs={[{ label: "Əlaqə" }]} />

      <section className="content">
        <div className="container two-col" style={{ alignItems: "start" }}>
          <Reveal effect="left">
            <h2 style={{ fontSize: 32, fontWeight: 600, marginBottom: 20 }}>Əlaqə məlumatları</h2>
            <ul className="info-list">
              {settings.addresses.map((a) => <li key={a}><Icon name="pin" /><b>Ünvan</b>{a}</li>)}
              <li><Icon name="phone" /><b>Telefon</b><a href={`tel:${settings.phoneRaw}`}>{settings.phone}</a></li>
              <li><Icon name="mail" /><b>E-poçt</b><a href={`mailto:${settings.email}`}>{settings.email}</a></li>
              <li>
                <Icon name="whatsapp" /><b>WhatsApp</b>
                <a href={`https://api.whatsapp.com/send?phone=${settings.whatsapp}`} target="_blank" rel="noreferrer">Yazın</a>
              </li>
            </ul>
            <PriceTable title="İş qrafiki" items={schedule} />
          </Reveal>
          <Reveal effect="right">
            <ContactForm />
          </Reveal>
        </div>

        <div className="container" style={{ marginTop: 50 }}>
          <Reveal effect="zoom" className="rounded-img">
            <iframe
              title="Xəritə"
              src="https://www.openstreetmap.org/export/embed.html?bbox=49.83%2C40.37%2C49.87%2C40.39&layer=mapnik"
              style={{ border: 0, width: "100%", height: 380, display: "block" }}
              loading="lazy"
            />
          </Reveal>
        </div>
      </section>

      <FaqSection className="block-lg bg-soft" faqs={faqs} />
      <CtaBanner settings={settings} />
    </>
  );
}
