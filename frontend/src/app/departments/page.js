import PageBanner from "@/components/PageBanner";
import { DepartmentsMosaic } from "@/components/Cards";
import { getData } from "@/lib/api";

export const metadata = { title: "Şöbələr — Medika Klinika" };

export default async function DepartmentsPage() {
  const departments = await getData("/departments");
  return (
    <>
      <PageBanner title="Şöbələr" subtitle="Bütün tibbi istiqamətlər bir məkanda" crumbs={[{ label: "Şöbələr" }]} />
      <section className="content" style={{ background: "#f7f7fb" }}>
        <div className="container">
          {departments.length ? <DepartmentsMosaic departments={departments} limit={100} /> : <div className="empty">Şöbə tapılmadı</div>}
        </div>
      </section>
    </>
  );
}
