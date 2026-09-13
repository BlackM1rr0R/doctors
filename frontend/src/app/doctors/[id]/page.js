import Link from "next/link";
import { notFound } from "next/navigation";
import PageBanner from "@/components/PageBanner";
import AppointmentForm from "@/components/AppointmentForm";
import Icon from "@/components/Icons";
import { getData } from "@/lib/api";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const doctor = await getData(`/doctors/${id}`, null);
  return { title: doctor ? `${doctor.name} — Medika Klinika` : "Həkim tapılmadı" };
}

export default async function DoctorPage({ params }) {
  const { id } = await params;
  const [doctor, doctors, departments] = await Promise.all([
    getData(`/doctors/${id}`, null),
    getData("/doctors"),
    getData("/departments"),
  ]);
  if (!doctor) notFound();
  const department = departments.find((d) => d.slug === doctor.departmentSlug);

  return (
    <>
      <PageBanner title={doctor.name} subtitle={doctor.specialty} crumbs={[{ label: "Həkimlər", href: "/doctors" }, { label: doctor.name }]} />
      <section className="content">
        <div className="container doctor-detail">
          <div className="photo"><img src={doctor.photo} alt={doctor.name} /></div>
          <div>
            <h2>{doctor.name}</h2>
            <div className="spec">{doctor.specialty}</div>
            <ul className="info-list">
              {department && (
                <li><Icon name="heart" /><b>Şöbə</b><Link href={`/departments/${department.slug}`}>{department.name}</Link></li>
              )}
              <li><Icon name="doctor" /><b>Təcrübə</b>{doctor.experience} il</li>
              <li><Icon name="clock" /><b>Qəbul saatları</b>{doctor.schedule}</li>
              <li><Icon name="calendar" /><b>Qəbul qiyməti</b>{doctor.price}</li>
            </ul>
            <div className="prose">
              <p>{doctor.bio}</p>
              <p><b>Təhsil:</b> {doctor.education}</p>
            </div>
            <a href="#appointment" className="btn" style={{ marginTop: 24 }}>Qəbula yazıl</a>
          </div>
        </div>
      </section>
      <AppointmentForm doctors={doctors} departments={departments} initialDoctorId={doctor.id} title="Bu həkimin qəbuluna yazılın" />
    </>
  );
}
