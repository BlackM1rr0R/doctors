import Hero from "@/components/Hero";
import DoctorsCarousel from "@/components/DoctorsCarousel";
import AppointmentForm from "@/components/AppointmentForm";
import { SectionCaption, NewsCard, DepartmentsSection } from "@/components/Cards";
import { StatsBand, FeaturesSection, StepsSection, PackagesSection, TestimonialsSection, FaqSection, PartnersMarquee, CtaBanner } from "@/components/Sections";
import { Reveal } from "@/components/Motion";
import { getData, DEFAULT_SETTINGS } from "@/lib/api";

export default async function Home() {
  const [slides, services, doctors, departments, news, about, packages, testimonials, faqs, partners, settings] = await Promise.all([
    getData("/slides"),
    getData("/services"),
    getData("/doctors"),
    getData("/departments"),
    getData("/news"),
    getData("/about", {}),
    getData("/packages"),
    getData("/testimonials"),
    getData("/faqs"),
    getData("/partners"),
    getData("/settings", DEFAULT_SETTINGS),
  ]);
  const featured = doctors.filter((d) => d.featured);

  return (
    <>
      <Hero slides={slides} services={services} />
      <StatsBand stats={about.stats} />

      <section className="block-lg map-bg">
        <div className="container">
          {featured.length ? (
            <DoctorsCarousel title="Seçilmiş həkimlər" doctors={featured} />
          ) : (
            <div className="empty">Məlumat yüklənmədi. Backend serverinin işlədiyini yoxlayın.</div>
          )}
        </div>
      </section>

      <FeaturesSection
        className="block-lg bg-soft"
        eyebrow="Niyə biz?"
        title="Sağlamlığınız üçün ən yaxşı şərait"
        text="Hər bir pasiyentə fərdi yanaşma, müasir texnologiyalar və şəffaf xidmət."
        features={about.features}
      />

      <DepartmentsSection departments={departments} />

      <StepsSection eyebrow="Asan qeydiyyat" title="Qəbula necə yazılmaq olar?" steps={about.steps} />

      <PackagesSection
        className="block-lg bg-soft"
        eyebrow="Check-up"
        title="Sağlamlıq paketləri"
        text="Kompleks müayinə proqramları ilə vaxtınıza və büdcənizə qənaət edin."
        packages={packages}
      />

      <TestimonialsSection testimonials={testimonials} />

      <AppointmentForm doctors={doctors} departments={departments} />

      <section className="block-lg map-bg">
        <div className="container">
          <SectionCaption title="Ən son xəbərlər" href="/news" linkText="Bütün xəbərlər" />
          <div className="grid">
            {news.slice(0, 4).map((n, i) => (
              <Reveal key={n.id} delay={i * 100}>
                <NewsCard item={n} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FaqSection className="block-lg bg-soft" faqs={faqs.slice(0, 6)} />
      <PartnersMarquee partners={partners} />
      <CtaBanner settings={settings} />
    </>
  );
}
