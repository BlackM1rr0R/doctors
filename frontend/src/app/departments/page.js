import PageBanner from "@/components/PageBanner";
import { DepartmentsMosaic } from "@/components/Cards";
import { SectionHead, StatsBand, StepsSection, CtaBanner } from "@/components/Sections";
import { getData, DEFAULT_SETTINGS } from "@/lib/api";

export const metadata = { title: "Şöbələr — Medika Klinika" };

export default async function DepartmentsPage() {
  const [departments, about, settings] = await Promise.all([
    getData("/departments"),
    getData("/about", {}),
    getData("/settings", DEFAULT_SETTINGS),
  ]);

  return (
    <>
      <PageBanner title="Şöbələr" subtitle="Bütün tibbi istiqamətlər bir məkanda" crumbs={[{ label: "Şöbələr" }]} />
      <section className="content bg-soft">
        <div className="container">
          <SectionHead
            eyebrow={`${departments.length} şöbə`}
            title="İxtisaslaşmış tibbi şöbələrimiz"
            text="Hər şöbə müasir avadanlıqlarla təchiz olunub və təcrübəli mütəxəssislər tərəfindən idarə olunur."
          />
          {departments.length ? <DepartmentsMosaic departments={departments} limit={100} /> : <div className="empty">Şöbə tapılmadı</div>}
        </div>
      </section>
      <StatsBand stats={about.stats} />
      <StepsSection eyebrow="Asan qeydiyyat" title="Qəbula necə yazılmaq olar?" steps={about.steps} />
      <CtaBanner settings={settings} />
    </>
  );
}
