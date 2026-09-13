import { notFound } from "next/navigation";
import PageBanner from "@/components/PageBanner";
import Icon from "@/components/Icons";
import { SectionCaption, NewsCard } from "@/components/Cards";
import { CtaBanner } from "@/components/Sections";
import { Reveal } from "@/components/Motion";
import { getData, DEFAULT_SETTINGS } from "@/lib/api";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const item = await getData(`/news/${id}`, null);
  return { title: item ? `${item.title} — Medika Klinika` : "Xəbər tapılmadı" };
}

export default async function NewsArticlePage({ params }) {
  const { id } = await params;
  const [item, news, settings] = await Promise.all([
    getData(`/news/${id}`, null),
    getData("/news"),
    getData("/settings", DEFAULT_SETTINGS),
  ]);
  if (!item) notFound();

  const related = news.filter((n) => n.id !== item.id).slice(0, 3);

  return (
    <>
      <PageBanner title="Xəbərlər" crumbs={[{ label: "Xəbərlər", href: "/news" }, { label: item.title }]} />
      <section className="content">
        <article className="container article">
          <Reveal effect="zoom" className="cover"><img src={item.image} alt={item.title} /></Reveal>
          <Reveal>
            <div className="meta">
              {item.category && <span className="tag" style={{ margin: 0 }}>{item.category}</span>}
              <span><Icon name="calendar" size={16} />{new Date(item.date).toLocaleDateString("az-AZ")}</span>
            </div>
            <h1 style={{ fontSize: 36, fontWeight: 600, marginBottom: 20 }}>{item.title}</h1>
            <div className="prose">
              <p><b>{item.excerpt}</b></p>
              {(item.content || []).map((p) => <p key={p}>{p}</p>)}
            </div>
          </Reveal>
        </article>

        {related.length > 0 && (
          <div className="container" style={{ marginTop: 60 }}>
            <SectionCaption title="Digər xəbərlər" href="/news" linkText="Bütün xəbərlər" />
            <div className="grid cols-3">
              {related.map((n, i) => (
                <Reveal key={n.id} delay={i * 120}><NewsCard item={n} /></Reveal>
              ))}
            </div>
          </div>
        )}
      </section>
      <CtaBanner settings={settings} />
    </>
  );
}
