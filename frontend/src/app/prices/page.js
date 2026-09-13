import PageBanner from "@/components/PageBanner";
import { SectionHead, PackagesSection, PriceTable, CtaBanner } from "@/components/Sections";
import { Reveal } from "@/components/Motion";
import { getData, DEFAULT_SETTINGS } from "@/lib/api";

export const metadata = { title: "Qiymətlər — Medika Klinika" };

export default async function PricesPage() {
  const [departments, packages, settings] = await Promise.all([
    getData("/departments"),
    getData("/packages"),
    getData("/settings", DEFAULT_SETTINGS),
  ]);
  const withPrices = departments.filter((d) => d.prices?.length);

  return (
    <>
      <PageBanner title="Qiymətlər" subtitle="Şəffaf qiymət siyasəti — gizli ödəniş yoxdur" crumbs={[{ label: "Qiymətlər" }]} />

      <PackagesSection eyebrow="Check-up" title="Sağlamlıq paketləri" text="Paketlər ayrı-ayrı müayinələrə nisbətən 30%-ə qədər sərfəlidir." packages={packages} />

      <section className="block-lg bg-soft">
        <div className="container">
          <SectionHead eyebrow="Qiymət siyahısı" title="Şöbələr üzrə xidmət qiymətləri" text="Qiymətlər AZN ilə göstərilib. Sığorta ilə müraciət edən pasiyentlər üçün şərtlər fərqli ola bilər." />
          <div className="price-grid">
            {withPrices.map((d, i) => (
              <Reveal key={d.slug} delay={(i % 2) * 120}>
                <PriceTable title={d.name} items={d.prices} href={`/departments/${d.slug}`} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner settings={settings} title="Qiymətlə bağlı sualınız var?" text="Operatorlarımız sizə uyğun paketi seçməkdə kömək edəcək." />
    </>
  );
}
