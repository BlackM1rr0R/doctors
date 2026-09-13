import { notFound } from "next/navigation";
import PageBanner from "@/components/PageBanner";
import AppointmentForm from "@/components/AppointmentForm";
import { SectionCaption, DoctorCard } from "@/components/Cards";
import { getData } from "@/lib/api";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const department = await getData(`/departments/${slug}`, null);
  return { title: department ? `${department.name} — Medika Klinika` : "Şöbə tapılmadı" };
}

export default async function DepartmentPage({ params }) {
  const { slug } = await params;
  const [department, doctors, departments] = await Promise.all([
    getData(`/departments/${slug}`, null),
    getData("/doctors"),
    getData("/departments"),
  ]);
  if (!department) notFound();

  return (
    <>
      <PageBanner title={department.name} subtitle={department.tagline} crumbs={[{ label: "Şöbələr", href: "/departments" }, { label: department.name }]} />
      <section className="content">
        <div className="container">
          <div className="two-col" style={{ marginBottom: 50 }}>
            <div className="prose">
              <h2 style={{ fontSize: 32, fontWeight: 600, marginBottom: 16 }}>{department.name} şöbəsi</h2>
              <p>{department.description}</p>
              <a href="#appointment" className="btn" style={{ marginTop: 24 }}>Qəbula yazıl</a>
            </div>
            <div className="rounded-img"><img src={department.image} alt={department.name} /></div>
          </div>

          <SectionCaption title="Şöbənin həkimləri" href={`/doctors?department=${department.slug}`} />
          {department.doctors.length ? (
            <div className="grid">
              {department.doctors.map((d) => <DoctorCard key={d.id} doctor={d} />)}
            </div>
          ) : (
            <div className="empty">Bu şöbə üzrə həkim əlavə edilməyib</div>
          )}
        </div>
      </section>
      <AppointmentForm doctors={doctors} departments={departments} />
    </>
  );
}
