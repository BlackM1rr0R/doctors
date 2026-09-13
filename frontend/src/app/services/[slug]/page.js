import Link from "next/link";
import { notFound } from "next/navigation";
import PageBanner from "@/components/PageBanner";
import AppointmentForm from "@/components/AppointmentForm";
import Icon from "@/components/Icons";
import { SectionCaption, DoctorCard } from "@/components/Cards";
import { CheckList, FaqSection } from "@/components/Sections";
import { Reveal, Tilt } from "@/components/Motion";
import { getData } from "@/lib/api";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = await getData(`/services/${slug}`, null);
  return { title: service ? `${service.title} — Medika Klinika` : "Xidmət tapılmadı" };
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const [service, services, doctors, departments, faqs] = await Promise.all([
    getData(`/services/${slug}`, null),
    getData("/services"),
    getData("/doctors"),
    getData("/departments"),
    getData("/faqs"),
  ]);
  if (!service) notFound();

  const others = services.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <>
      <PageBanner title={service.title} subtitle={service.description} crumbs={[{ label: "Xidmətlər", href: "/services" }, { label: service.title }]} />

      <section className="content">
        <div className="container">
          <div className="two-col" style={{ marginBottom: 50 }}>
            <Reveal effect="left" className="prose">
              <span className="tag">{service.priceFrom ? `${service.priceFrom} AZN-dən başlayaraq` : "Xidmət"}</span>
              <h2 style={{ fontSize: 32, fontWeight: 600, marginBottom: 16 }}>{service.title}</h2>
              {(service.details || []).map((p) => <p key={p}>{p}</p>)}
              <a href="#appointment" className="btn" style={{ marginTop: 24 }}>Qəbula yazıl</a>
            </Reveal>
            {service.image && (
              <Reveal effect="right" className="rounded-img"><img src={service.image} alt={service.title} /></Reveal>
            )}
          </div>

          <h3 className="sub-title">Xidmətə daxildir</h3>
          <CheckList items={service.features} />

          {service.doctors.length > 0 && (
            <div style={{ marginTop: 60 }}>
              <SectionCaption title="Bu xidməti göstərən həkimlər" href="/doctors" />
              <div className="grid">
                {service.doctors.map((d, i) => (
                  <Reveal key={d.id} delay={i * 100}><DoctorCard doctor={d} /></Reveal>
                ))}
              </div>
            </div>
          )}

          <div style={{ marginTop: 60 }}>
            <SectionCaption title="Digər xidmətlər" href="/services" />
            <div className="grid cols-3">
              {others.map((s, i) => (
                <Reveal key={s.id} delay={i * 120}>
                  <Tilt className="service-card" max={6}>
                    <Link href={`/services/${s.slug}`} style={{ display: "block" }}>
                      <div className="ico"><Icon name={s.icon} size={30} /></div>
                      <h3>{s.title}</h3>
                      <p>{s.description}</p>
                    </Link>
                  </Tilt>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FaqSection className="block-lg bg-soft" faqs={faqs.slice(0, 4)} />
      <AppointmentForm doctors={doctors} departments={departments} />
    </>
  );
}
