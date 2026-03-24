import type { Metadata } from "next";
import Link from "next/link";
import { getAllArticles } from "@/lib/mdx";
import PageTransition from "@/components/animations/PageTransition";
import ScrollReveal from "@/components/animations/ScrollReveal";

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

        {/* Article List */}
        {articles.length === 0 ? (
          <div className="glass-card rounded-2xl p-12 text-center">
            <div className="w-16 h-16 bg-navy/5 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-navy font-serif mb-2">Belum Ada Publikasi</h3>
            <p className="text-gray-400 text-sm">Artikel dan riset akan segera dipublikasikan.</p>
          </div>
        ) : (
          <div className="space-y-6 stagger-children">
            {articles.map((article, index) => (
              <ScrollReveal key={article.slug} direction="up" delay={index * 0.1}>
                <Link
                  href={`/publikasi/${article.slug}`}
                  className="block glass-card rounded-2xl p-6 sm:p-8 hover:shadow-lg hover:shadow-gold/5 transition-all duration-300 group hover:-translate-y-0.5"
                >
                  {/* Tags */}
                  {article.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-3">
                      {article.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-medium bg-gold/10 text-gold px-2.5 py-0.5 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Title */}
                  <h2 className="text-xl font-bold text-navy font-serif group-hover:text-slate-blue transition-colors mb-2">
                    {article.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{article.excerpt}</p>

                  {/* Meta */}
                  <div className="flex items-center gap-4 text-xs text-gray-400">
                    <span>{article.author}</span>
                    <span>•</span>
                    <span>
                      {new Date(article.date).toLocaleDateString("id-ID", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        )}
      </div>
      </section>
    </PageTransition>
  );
}
