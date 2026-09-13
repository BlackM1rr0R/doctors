import PageBanner from "@/components/PageBanner";
import AppointmentForm from "@/components/AppointmentForm";
import { getData } from "@/lib/api";

export const metadata = { title: "Onlayn qəbul — Medika Klinika" };

export default async function AppointmentPage({ searchParams }) {
  const { doctor = "" } = await searchParams;
  const [doctors, departments] = await Promise.all([getData("/doctors"), getData("/departments")]);
  return (
    <>
      <PageBanner title="Onlayn qəbul" subtitle="Növbə gözləmədən həkim qəbuluna yazılın" crumbs={[{ label: "Onlayn qəbul" }]} />
      <AppointmentForm doctors={doctors} departments={departments} initialDoctorId={doctor} title="Qəbula yazılın" />
    </>
  );
}
