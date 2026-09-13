import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import Icon from "@/components/Icons";
import { DepartmentsSection } from "@/components/Cards";
import { SectionHead, PackagesSection, StepsSection, FaqSection } from "@/components/Sections";
import { Reveal, Tilt } from "@/components/Motion";
import { getData } from "@/lib/api";

export const metadata = { title: "Xidmətlər — Medika Klinika" };

export default async function ServicesPage() {
  const [services, departments, packages, about, faqs] = await Promise.all([
    getData("/services"),
    getData("/departments"),
    getData("/packages"),
    getData("/about", {}),
    getData("/faqs"),
  ]);

  return (
    <>
      <PageBanner title="Xidmətlər" subtitle="Sağlamlığınız üçün tam spektr tibbi xidmətlər" crumbs={[{ label: "Xidmətlər" }]} />

      <section className="content">
        <div className="container">
          <SectionHead eyebrow="Nə edirik?" title="Xidmətlərimiz" text="Profilaktik müayinədən mürəkkəb əməliyyatlara qədər hər mərhələdə yanınızdayıq." />
          <div className="grid cols-3">
            {services.map((s, i) => (
              <Reveal key={s.id} delay={(i % 3) * 120}>
                <Tilt className="service-card" max={6}>
                  <Link href={`/services/${s.slug}`} style={{ display: "block" }}>
                    <div className="ico"><Icon name={s.icon} size={30} /></div>
                    <h3>{s.title}</h3>
                    <p>{s.description}</p>
                    <div className="price-from">
                      <span>{s.priceFrom ? `${s.priceFrom} AZN-dən` : "Ətraflı"}</span>
                      <Icon name="arrowRight" size={20} />
                    </div>
                  </Link>
                </Tilt>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <PackagesSection className="block-lg bg-soft" eyebrow="Check-up" title="Sağlamlıq paketləri" packages={packages} />
      <StepsSection eyebrow="Asan qeydiyyat" title="Qəbula necə yazılmaq olar?" steps={about.steps} />
      <DepartmentsSection departments={departments} />
      <FaqSection faqs={faqs.slice(0, 6)} />
    </>
  );
}
