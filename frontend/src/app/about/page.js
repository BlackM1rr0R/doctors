import PageBanner from "@/components/PageBanner";
import { getData } from "@/lib/api";

export const metadata = { title: "Haqqımızda — Medika Klinika" };

export default async function AboutPage() {
  const [doctors, departments] = await Promise.all([getData("/doctors"), getData("/departments")]);

  return (
    <>
      <PageBanner title="Haqqımızda" subtitle="Sağlamlığınız etibarlı əllərdə" crumbs={[{ label: "Haqqımızda" }]} />
      <section className="content">
        <div className="container">
          <div className="two-col">
            <div className="prose">
              <h2 style={{ fontSize: 32, fontWeight: 600, marginBottom: 16 }}>Medika Klinika</h2>
              <p>
                Klinikamız müasir tibbi avadanlıqlar və təcrübəli həkim heyəti ilə pasiyentlərə yüksək keyfiyyətli
                diaqnostika və müalicə xidmətləri göstərir.
              </p>
              <p>
                Məqsədimiz hər bir pasiyentə fərdi yanaşma, şəffaf qiymət siyasəti və rahat xidmət təqdim etməkdir.
                Onlayn qeydiyyat sistemi ilə növbə gözləmədən istədiyiniz həkimin qəbuluna yazıla bilərsiniz.
              </p>
            </div>
            <div className="rounded-img">
              <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1000&q=80&auto=format&fit=crop" alt="Klinika" />
            </div>
          </div>

          <div className="stats">
            <div className="stat"><b>15+</b>il təcrübə</div>
            <div className="stat"><b>{doctors.length || "40"}+</b>həkim</div>
            <div className="stat"><b>{departments.length || "10"}</b>şöbə</div>
            <div className="stat"><b>50 000+</b>məmnun pasiyent</div>
          </div>
        </div>
      </section>
    </>
  );
}
