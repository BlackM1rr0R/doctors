import Link from "next/link";
import PageBanner from "@/components/PageBanner";

export default function NotFound() {
  return (
    <>
      <PageBanner title="404" subtitle="Axtardığınız səhifə tapılmadı" />
      <section className="content">
        <div className="container" style={{ textAlign: "center" }}>
          <Link href="/" className="btn">Ana səhifəyə qayıt</Link>
        </div>
      </section>
    </>
  );
}
