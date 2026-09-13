import PageBanner from "@/components/PageBanner";
import AppointmentForm from "@/components/AppointmentForm";
import { StepsSection, FaqSection } from "@/components/Sections";
import { getData } from "@/lib/api";

export const metadata = { title: "Onlayn qəbul — Medika Klinika" };

export default async function AppointmentPage({ searchParams }) {
  const { doctor = "" } = await searchParams;
  const [doctors, departments, about, faqs] = await Promise.all([
    getData("/doctors"),
    getData("/departments"),
    getData("/about", {}),
    getData("/faqs"),
  ]);
  const appointmentFaqs = faqs.filter((f) => f.category === "appointment" || f.category === "general");

  return (
    <>
      <PageBanner title="Onlayn qəbul" subtitle="Növbə gözləmədən həkim qəbuluna yazılın" crumbs={[{ label: "Onlayn qəbul" }]} />
      <StepsSection eyebrow="4 addım" title="Qeydiyyat necə işləyir?" steps={about.steps} />
      <AppointmentForm doctors={doctors} departments={departments} initialDoctorId={doctor} title="Qəbula yazılın" />
      <FaqSection className="block-lg bg-soft" faqs={appointmentFaqs} title="Qəbul haqqında suallar" />
    </>
  );
}
