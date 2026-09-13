import Hero from "@/components/Hero";
import DoctorsCarousel from "@/components/DoctorsCarousel";
import AppointmentForm from "@/components/AppointmentForm";
import { SectionCaption, NewsCard, DepartmentsSection } from "@/components/Cards";
import { getData } from "@/lib/api";

export default async function Home() {
  const [slides, services, doctors, departments, news] = await Promise.all([
    getData("/slides"),
    getData("/services"),
    getData("/doctors"),
    getData("/departments"),
    getData("/news"),
  ]);
  const featured = doctors.filter((d) => d.featured);

  return (
    <>
      <Hero slides={slides} services={services} />

      <section className="block map-bg">
        <div className="container">
          {featured.length ? (
            <DoctorsCarousel title="Seçilmiş həkimlər" doctors={featured} />
          ) : (
            <div className="empty">Məlumat yüklənmədi. Backend serverinin işlədiyini yoxlayın.</div>
          )}
        </div>
      </section>

      <section className="block map-bg">
        <div className="container">
          <SectionCaption title="Ən son xəbərlər" href="/about" linkText="Haqqımızda" />
          <div className="grid">
            {news.map((n) => <NewsCard key={n.id} item={n} />)}
          </div>
        </div>
      </section>

      <DepartmentsSection departments={departments} />

      <AppointmentForm doctors={doctors} departments={departments} />
    </>
  );
}
