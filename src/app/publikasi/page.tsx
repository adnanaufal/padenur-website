import type { Metadata } from "next";
import Link from "next/link";
import { getAllArticles } from "@/lib/mdx";
import PageTransition from "@/components/animations/PageTransition";
import ScrollReveal from "@/components/animations/ScrollReveal";
import PublikasiClient from "@/components/PublikasiClient";

export const metadata: Metadata = {
  title: "Publikasi & Riset",
  description: "Artikel, jurnal, dan hasil penelitian Deni Nuryadin tentang ekonomi syariah, perbankan syariah, dan manajemen keuangan Islam.",
};

export default function PublikasiPage() {
  const articles = getAllArticles();

  return (
    <PageTransition>
      <section className="py-20 bg-cream min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <ScrollReveal direction="up" delay={0.1}>
            <div className="text-center mb-14">
              <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-2">Riset & Tulisan</p>
              <h1 className="text-3xl sm:text-4xl font-bold text-navy font-serif">Publikasi</h1>
              <div className="w-16 h-1 bg-gradient-to-r from-gold to-gold-light mx-auto mt-4 rounded-full" />
              <p className="text-gray-500 mt-4 max-w-xl mx-auto leading-relaxed">
                Kumpulan artikel, hasil riset, dan pemikiran terkait operasional perbankan syariah,
                manajemen keuangan, dan ekonomi Islam.
              </p>
            </div>
          </ScrollReveal>

        {/* Article List & Search */}
        <PublikasiClient initialArticles={articles} />
      </div>
      </section>
    </PageTransition>
  );
}
