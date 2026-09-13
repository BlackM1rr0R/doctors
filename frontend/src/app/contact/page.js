import PageBanner from "@/components/PageBanner";
import ContactForm from "@/components/ContactForm";
import Icon from "@/components/Icons";
import { getData, DEFAULT_SETTINGS } from "@/lib/api";

export const metadata = { title: "Əlaqə — Medika Klinika" };

export default async function ContactPage() {
  const settings = await getData("/settings", DEFAULT_SETTINGS);
  return (
    <>
      <PageBanner title="Əlaqə" subtitle="Suallarınız üçün bizimlə əlaqə saxlayın" crumbs={[{ label: "Əlaqə" }]} />
      <section className="content">
        <div className="container two-col" style={{ alignItems: "start" }}>
          <div>
            <h2 style={{ fontSize: 32, fontWeight: 600, marginBottom: 20 }}>Əlaqə məlumatları</h2>
            <ul className="info-list">
              {settings.addresses.map((a) => <li key={a}><Icon name="pin" /><b>Ünvan</b>{a}</li>)}
              <li><Icon name="phone" /><b>Telefon</b><a href={`tel:${settings.phoneRaw}`}>{settings.phone}</a></li>
              <li><Icon name="mail" /><b>E-poçt</b><a href={`mailto:${settings.email}`}>{settings.email}</a></li>
              <li><Icon name="clock" /><b>İş saatları</b>{settings.workingHours}</li>
            </ul>
            <div className="rounded-img">
              <iframe
                title="Xəritə"
                src="https://www.openstreetmap.org/export/embed.html?bbox=49.83%2C40.37%2C49.87%2C40.39&layer=mapnik"
                style={{ border: 0, width: "100%", height: 280, display: "block" }}
                loading="lazy"
              />
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
