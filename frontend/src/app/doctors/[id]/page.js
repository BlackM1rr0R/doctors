import Link from "next/link";
import { notFound } from "next/navigation";
import PageBanner from "@/components/PageBanner";
import AppointmentForm from "@/components/AppointmentForm";
import DoctorsCarousel from "@/components/DoctorsCarousel";
import Icon, { Stars } from "@/components/Icons";
import { CheckList, TestimonialsSection } from "@/components/Sections";
import { Reveal } from "@/components/Motion";
import { getData, DEFAULT_SETTINGS } from "@/lib/api";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const doctor = await getData(`/doctors/${id}`, null);
  return { title: doctor ? `${doctor.name} — Medika Klinika` : "Həkim tapılmadı" };
}

export default async function DoctorPage({ params }) {
  const { id } = await params;
  const [doctor, doctors, departments, testimonials, settings] = await Promise.all([
    getData(`/doctors/${id}`, null),
    getData("/doctors"),
    getData("/departments"),
    getData("/testimonials"),
    getData("/settings", DEFAULT_SETTINGS),
  ]);
  if (!doctor) notFound();

  const department = departments.find((d) => d.slug === doctor.departmentSlug);
  const reviews = testimonials.filter((t) => t.doctorId === doctor.id);
  const sameDepartment = doctors.filter((d) => d.id !== doctor.id && d.departmentSlug === doctor.departmentSlug);
  const related = sameDepartment.length ? sameDepartment : doctors.filter((d) => d.id !== doctor.id).slice(0, 8);

  return (
    <>
      <PageBanner title={doctor.name} subtitle={doctor.specialty} crumbs={[{ label: "Həkimlər", href: "/doctors" }, { label: doctor.name }]} />

      <section className="content">
        <div className="container doctor-detail">
          <Reveal effect="left" className="photo-wrap">
            <div className="photo"><img src={doctor.photo} alt={doctor.name} /></div>
            <div className="exp-badge"><b>{doctor.experience}+</b>il təcrübə</div>
          </Reveal>

          <Reveal effect="right">
            <h2>{doctor.name}</h2>
            <div className="spec">{doctor.specialty}</div>
            {doctor.rating && (
              <div className="doctor-meta">
                <Stars value={doctor.rating} size={18} />
                <b>{doctor.rating}</b>
                <span className="count">({doctor.reviewsCount} rəy)</span>
              </div>
            )}
            <ul className="info-list">
              {department && (
                <li><Icon name="heart" /><b>Şöbə</b><Link href={`/departments/${department.slug}`}>{department.name}</Link></li>
              )}
              <li><Icon name="clock" /><b>Qəbul saatları</b>{doctor.schedule}</li>
              <li><Icon name="wallet" /><b>Qəbul qiyməti</b>{doctor.price}</li>
              {doctor.languages?.length > 0 && (
                <li>
                  <Icon name="globe" /><b>Dillər</b>
                  <span className="lang-chips">{doctor.languages.map((l) => <span className="tag" key={l} style={{ margin: 0 }}>{l}</span>)}</span>
                </li>
              )}
            </ul>
            <div className="prose">
              <p>{doctor.bio}</p>
              <p><b>Təhsil:</b> {doctor.education}</p>
            </div>
            <div className="flexable" style={{ marginTop: 24, justifyContent: "flex-start" }}>
              <a href="#appointment" className="btn">Qəbula yazıl</a>
              <a href={`tel:${settings.phoneRaw}`} className="btn outline"><Icon name="phone" size={16} /> Zəng et</a>
            </div>
          </Reveal>
        </div>

        {doctor.achievements?.length > 0 && (
          <div className="container" style={{ marginTop: 60 }}>
            <h3 className="sub-title">Nailiyyətlər və ixtisaslaşma</h3>
            <CheckList items={doctor.achievements} />
          </div>
        )}
      </section>

      <TestimonialsSection testimonials={reviews} title={`${doctor.name} haqqında rəylər`} />

      <section className="block-lg map-bg">
        <div className="container">
          <DoctorsCarousel title={sameDepartment.length ? "Bu şöbənin digər həkimləri" : "Digər həkimlər"} doctors={related} />
        </div>
      </section>

      <AppointmentForm doctors={doctors} departments={departments} initialDoctorId={doctor.id} title="Bu həkimin qəbuluna yazılın" />
    </>
  );
}
