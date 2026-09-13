import PageBanner from "@/components/PageBanner";
import Icon from "@/components/Icons";
import { DepartmentsSection } from "@/components/Cards";
import { getData } from "@/lib/api";

export const metadata = { title: "Xidmətlər — Medika Klinika" };

export default async function ServicesPage() {
  const [services, departments] = await Promise.all([getData("/services"), getData("/departments")]);
  return (
    <>
      <PageBanner title="Xidmətlər" subtitle="Sağlamlığınız üçün tam spektr tibbi xidmətlər" crumbs={[{ label: "Xidmətlər" }]} />
      <section className="content">
        <div className="container grid cols-3">
          {services.map((s) => (
            <div className="service-card" key={s.id}>
              <div className="ico"><Icon name={s.icon} size={30} /></div>
              <h3>{s.title}</h3>
              <p>{s.description}</p>
            </div>
          ))}
        </div>
      </section>
      <DepartmentsSection departments={departments} />
    </>
  );
}
