import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import { DoctorCard } from "@/components/Cards";
import { getData } from "@/lib/api";

export const metadata = { title: "Həkimlər — Medika Klinika" };

export default async function DoctorsPage({ searchParams }) {
  const { department = "", q = "" } = await searchParams;
  const query = new URLSearchParams();
  if (department) query.set("department", department);
  if (q) query.set("q", q);

  const [doctors, departments] = await Promise.all([
    getData(`/doctors?${query}`),
    getData("/departments"),
  ]);

  return (
    <>
      <PageBanner title="Həkimlərimiz" subtitle="Təcrübəli və peşəkar komanda" crumbs={[{ label: "Həkimlər" }]} />
      <section className="content">
        <div className="container">
          <div className="filters">
            <Link href="/doctors" className={`chip ${!department ? "active" : ""}`}>Hamısı</Link>
            {departments.map((d) => (
              <Link key={d.slug} href={`/doctors?department=${d.slug}`} className={`chip ${department === d.slug ? "active" : ""}`}>
                {d.name}
              </Link>
            ))}
          </div>
          <form className="filters" action="/doctors">
            {department && <input type="hidden" name="department" value={department} />}
            <input className="search-input" name="q" defaultValue={q} placeholder="Həkim adı və ya ixtisas üzrə axtarış" />
            <button className="btn small">Axtar</button>
          </form>

          {doctors.length ? (
            <div className="grid">
              {doctors.map((d) => <DoctorCard key={d.id} doctor={d} />)}
            </div>
          ) : (
            <div className="empty">Həkim tapılmadı</div>
          )}
        </div>
      </section>
    </>
  );
}
