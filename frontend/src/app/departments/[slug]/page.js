import { notFound } from "next/navigation";
import PageBanner from "@/components/PageBanner";
import AppointmentForm from "@/components/AppointmentForm";
import { SectionCaption, DoctorCard } from "@/components/Cards";
import { CheckList, PriceTable, FaqSection } from "@/components/Sections";
import { Reveal } from "@/components/Motion";
import { getData } from "@/lib/api";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const department = await getData(`/departments/${slug}`, null);
  return { title: department ? `${department.name} — Medika Klinika` : "Şöbə tapılmadı" };
}

export default async function DepartmentPage({ params }) {
  const { slug } = await params;
  const [department, doctors, departments, faqs] = await Promise.all([
    getData(`/departments/${slug}`, null),
    getData("/doctors"),
    getData("/departments"),
    getData("/faqs"),
  ]);
  if (!department) notFound();

  const departmentFaqs = faqs.filter((f) => f.category === slug || f.category === "general").slice(0, 5);

  return (
    <>
      <PageBanner title={department.name} subtitle={department.tagline} crumbs={[{ label: "Şöbələr", href: "/departments" }, { label: department.name }]} />

      <section className="content">
        <div className="container">
          <div className="two-col" style={{ marginBottom: 60 }}>
            <Reveal effect="left" className="prose">
              <span className="tag">Şöbə haqqında</span>
              <h2 style={{ fontSize: 32, fontWeight: 600, marginBottom: 16 }}>{department.name} şöbəsi</h2>
              <p>{department.description}</p>
              <a href="#appointment" className="btn" style={{ marginTop: 24 }}>Qəbula yazıl</a>
            </Reveal>
            <Reveal effect="right" className="rounded-img"><img src={department.image} alt={department.name} /></Reveal>
          </div>

          <div className="price-grid" style={{ marginBottom: 60, alignItems: "start" }}>
            <div>
              <h3 className="sub-title">Göstərilən xidmətlər</h3>
              <CheckList items={department.services} />
            </div>
            <Reveal effect="zoom">
              <PriceTable title="Qiymətlər" items={department.prices} href="/prices" />
            </Reveal>
          </div>

          <SectionCaption title="Şöbənin həkimləri" href={`/doctors?department=${department.slug}`} />
          {department.doctors.length ? (
            <div className="grid">
              {department.doctors.map((d, i) => (
                <Reveal key={d.id} delay={i * 100}><DoctorCard doctor={d} /></Reveal>
              ))}
            </div>
          ) : (
            <div className="empty">Bu şöbə üzrə həkim əlavə edilməyib</div>
          )}
        </div>
      </section>

      <FaqSection className="block-lg bg-soft" faqs={departmentFaqs} title={`${department.name}: suallar və cavablar`} />
      <AppointmentForm doctors={doctors} departments={departments} />
    </>
  );
}
