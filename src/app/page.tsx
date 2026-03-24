import Hero from "@/components/Hero";
import SkillsGrid from "@/components/SkillsGrid";
import Timeline from "@/components/Timeline";
import Education from "@/components/Education";
import Link from "next/link";
import PageTransition from "@/components/animations/PageTransition";
import ScrollReveal from "@/components/animations/ScrollReveal";
import FeaturedPublications from "@/components/FeaturedPublications";
import { getAllArticles } from "@/lib/mdx";

export default function Home() {
  const articles = getAllArticles();
  return (
    <PageTransition>
      <Hero />
      <FeaturedPublications articles={articles.slice(0, 3)} />
      <Timeline />
      <Education />
      <SkillsGrid />

      {/* CTA Section*/}
      <section className="py-20 bg-navy relative overflow-hidden">
        {/* Decorative gradient */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 50% 50%, rgba(201, 168, 76, 0.4) 0%, transparent 60%)`,
            }}
          />
        </div>

        <ScrollReveal direction="up" delay={0.2}>
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">Publikasi Akademis</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-serif mb-4">
              Riset & Tulisan
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8 leading-relaxed">
              Temukan artikel, jurnal, dan hasil penelitian terkait operasional perbankan syariah,
              manajemen keuangan Islam, dan pengembangan ekonomi berbasis syariah.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/publikasi"
                className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-light text-navy font-semibold px-8 py-3.5 rounded-xl text-sm transition-all duration-300 hover:shadow-lg hover:shadow-gold/20"
              >
                Lihat Publikasi
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                href="/kontak"
                className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/20 px-8 py-3.5 rounded-xl text-sm font-medium transition-all duration-300"
              >
                Hubungi Saya
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </PageTransition>
  );
}
