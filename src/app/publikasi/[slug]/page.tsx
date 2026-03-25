import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllArticles, getArticleBySlug } from "@/lib/mdx";
import ViewCounter from "@/components/ViewCounter";
import PageTransition from "@/components/animations/PageTransition";
import ScrollReveal from "@/components/animations/ScrollReveal";
import ShareButtons from "@/components/ShareButtons";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const articles = getAllArticles();
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) {
    return { title: "Artikel Tidak Ditemukan" };
  }

  return {
    title: article.title,
    description: article.excerpt,
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  return (
    <PageTransition>
      <section className="py-20 bg-cream min-h-screen">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <ScrollReveal direction="down">
            <Link
              href="/publikasi"
              className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-gold transition-colors mb-8"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Kembali ke Publikasi
            </Link>
          </ScrollReveal>

          {/* Article Header */}
          <ScrollReveal direction="up" delay={0.1}>
            <header className="mb-10">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-6">
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {article.tags.length > 0 && article.tags.map((tag: string) => (
                    <span
                      key={tag}
                      className="text-xs font-medium bg-gold/10 text-gold px-3 py-1 rounded-full shadow-sm shadow-gold/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Share Buttons */}
                <ShareButtons title={article.title} slug={slug} />
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy font-serif leading-tight mb-6">
                {article.title}
              </h1>

              {/* Meta */}
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                <span className="font-medium text-slate-blue">{article.author}</span>
                <span>•</span>
                <span>
                  {new Date(article.date).toLocaleDateString("id-ID", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
                <span>•</span>
                <ViewCounter slug={slug} />
              </div>

              <div className="w-full h-px bg-gradient-to-r from-gold/30 via-gold/10 to-transparent mt-6" />
            </header>
          </ScrollReveal>

          {/* Article Content */}
          <ScrollReveal direction="up" delay={0.2}>
            <article
              className="prose-custom"
              dangerouslySetInnerHTML={{ __html: article.contentHtml }}
            />
          </ScrollReveal>

          {/* Footer */}
          <ScrollReveal direction="up" delay={0.3}>
            <div className="mt-16 pt-8 border-t border-gray-200">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-medium text-navy">Deni Nuryadin, M.Si, S.E</p>
                  <p className="text-xs text-gray-400">Dosen UHAMKA — Ekonomi Islam</p>
                </div>
                <Link
                  href="/publikasi"
                  className="inline-flex items-center gap-1.5 text-sm text-gold hover:text-gold-light font-medium transition-colors"
                >
                  Artikel Lainnya
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </PageTransition>
  );
}
