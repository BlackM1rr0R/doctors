import { Jost } from "next/font/google";
import "./globals.css";
import "./effects.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ScrollProgress, BackToTop } from "@/components/Motion";
import { getData, DEFAULT_SETTINGS } from "@/lib/api";

// Jost is a free geometric typeface close to Futura used by the reference design
const jost = Jost({ variable: "--font-main", subsets: ["latin", "latin-ext"] });

export const metadata = {
  title: "Medika Klinika — Sağlamlığınız etibarlı əllərdə",
  description: "Həkim qəbulu, şöbələr, diaqnostika və onlayn qeydiyyat.",
};

export default async function RootLayout({ children }) {
  const settings = await getData("/settings", DEFAULT_SETTINGS);

  return (
    <html lang="az" className={jost.variable}>
      <body>
        <ScrollProgress />
        <Header settings={settings} />
        <main>{children}</main>
        <Footer settings={settings} />
        <BackToTop />
      </body>
    </html>
  );
}
