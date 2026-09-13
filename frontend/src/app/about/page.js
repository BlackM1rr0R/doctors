import PageBanner from "@/components/PageBanner";
import DoctorsCarousel from "@/components/DoctorsCarousel";
import { StatsBand, FeaturesSection, SectionHead, Timeline, TestimonialsSection, PartnersMarquee, CtaBanner, CheckList } from "@/components/Sections";
import { Reveal } from "@/components/Motion";
import { getData, DEFAULT_SETTINGS } from "@/lib/api";

export const metadata = { title: "Haqqımızda — Medika Klinika" };

export default async function AboutPage() {
  const [doctors, about, testimonials, partners, settings] = await Promise.all([
    getData("/doctors"),
    getData("/about", {}),
    getData("/testimonials"),
    getData("/partners"),
    getData("/settings", DEFAULT_SETTINGS),
  ]);

  return (
    <>
      <PageBanner title="Haqqımızda" subtitle="Sağlamlığınız etibarlı əllərdə" crumbs={[{ label: "Haqqımızda" }]} />

      <section className="content">
        <div className="container two-col">
          <Reveal effect="left" className="prose">
            <span className="tag">Biz kimik?</span>
            <h2 style={{ fontSize: 32, fontWeight: 600, marginBottom: 16 }}>{settings.clinicName}</h2>
            {(about.intro || []).map((p) => <p key={p}>{p}</p>)}
            <div style={{ marginTop: 24 }}>
              <CheckList items={about.highlights} />
            </div>
          </Reveal>
          <Reveal effect="right" className="rounded-img">
            <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1000&q=80&auto=format&fit=crop" alt="Klinika" />
          </Reveal>
        </div>
      </section>

      <StatsBand stats={about.stats} />

      <section className="block-lg">
        <div className="container">
          <SectionHead eyebrow="Tariximiz" title="İllər boyu inkişaf yolumuz" />
          <Timeline items={about.timeline} />
        </div>
      </section>

      <FeaturesSection className="block-lg bg-soft" eyebrow="Dəyərlərimiz" title="Bizi fərqləndirən prinsiplər" features={about.values} />

      <section className="block-lg map-bg">
        <div className="container">
          <DoctorsCarousel title="Komandamız" doctors={doctors} />
        </div>
      </section>

      <TestimonialsSection testimonials={testimonials} />
      <PartnersMarquee partners={partners} />
      <CtaBanner settings={settings} />
    </>
  );
}
