import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import Icon from "@/components/Icons";
import { NewsCard } from "@/components/Cards";
import { Reveal } from "@/components/Motion";
import { getData } from "@/lib/api";

export const metadata = { title: "Xəbərlər — Medika Klinika" };

export default async function NewsPage({ searchParams }) {
  const { category = "" } = await searchParams;
  const news = await getData("/news");
  const categories = [...new Set(news.map((n) => n.category).filter(Boolean))];
  const list = category ? news.filter((n) => n.category === category) : news;
  const [first, ...rest] = list;

  return (
    <>
      <PageBanner title="Xəbərlər" subtitle="Klinikamızdan yeniliklər, kampaniyalar və sağlamlıq məsləhətləri" crumbs={[{ label: "Xəbərlər" }]} />
      <section className="content">
        <div className="container">
          <div className="filters">
            <Link href="/news" className={`chip ${!category ? "active" : ""}`}>Hamısı</Link>
            {categories.map((c) => (
              <Link key={c} href={`/news?category=${encodeURIComponent(c)}`} className={`chip ${category === c ? "active" : ""}`}>{c}</Link>
            ))}
          </div>

          {first ? (
            <>
              <Reveal effect="zoom">
                <Link href={`/news/${first.id}`} className="news-featured">
                  <div className="cover"><img src={first.image} alt={first.title} /></div>
                  <div className="body">
                    {first.category && <span className="tag">{first.category}</span>}
                    <div className="meta"><span><Icon name="calendar" size={16} />{new Date(first.date).toLocaleDateString("az-AZ")}</span></div>
                    <h2>{first.title}</h2>
                    <p>{first.excerpt}</p>
                    <span className="btn" style={{ alignSelf: "flex-start" }}>Oxu <Icon name="arrowRight" size={18} /></span>
                  </div>
                </Link>
              </Reveal>
              <div className="grid cols-3">
                {rest.map((n, i) => (
                  <Reveal key={n.id} delay={(i % 3) * 120}><NewsCard item={n} /></Reveal>
                ))}
              </div>
            </>
          ) : (
            <div className="empty">Xəbər tapılmadı</div>
          )}
        </div>
      </section>
    </>
  );
}
