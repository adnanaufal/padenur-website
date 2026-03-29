"use client";

import { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { supabase } from "@/lib/supabase";

interface ArticleMeta {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  author: string;
  tags: string[];
  externalLink?: string;
}

const ITEMS_PER_PAGE = 5;

export default function PublikasiClient({ initialArticles }: { initialArticles: ArticleMeta[] }) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const [searchQuery, setSearchQuery] = useState(searchParams.get("q") || "");
  const [activeTag, setActiveTag] = useState(searchParams.get("tag") || "");
  const [sortOrder, setSortOrder] = useState<"newest" | "oldest" | "most_viewed">(
    (searchParams.get("sort") as any) || "newest"
  );
  const [currentPage, setCurrentPage] = useState(Number(searchParams.get("page")) || 1);
  const [viewCounts, setViewCounts] = useState<Record<string, number>>({});
  const [showAllTags, setShowAllTags] = useState(false);

  useEffect(() => {
    setSearchQuery(searchParams.get("q") || "");
    setActiveTag(searchParams.get("tag") || "");
    setSortOrder((searchParams.get("sort") as any) || "newest");
    const pageParam = searchParams.get("page");
    setCurrentPage(pageParam ? Number(pageParam) : 1);
  }, [searchParams]);

  useEffect(() => {
    const fetchViews = async () => {
      try {
        const { data } = await supabase.from("publication_stats").select("slug, view_count");
        if (data) {
          const counts: Record<string, number> = {};
          data.forEach((item: any) => counts[item.slug] = item.view_count);
          setViewCounts(counts);
        }
      } catch (err) {
        console.error("Failed to fetch views", err);
      }
    };
    fetchViews();
  }, []);

  const updateUrlParams = (q: string, tag: string, sort: string, page: number) => {
    const params = new URLSearchParams();
    if (q) params.set("q", q);
    if (tag) params.set("tag", tag);
    if (sort && sort !== "newest") params.set("sort", sort);
    if (page > 1) params.set("page", page.toString());
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    updateUrlParams(val, activeTag, sortOrder, 1);
  };

  const handleTagClick = (e: React.MouseEvent, tag: string) => {
    e.preventDefault();
    e.stopPropagation();
    const newTag = activeTag === tag ? "" : tag;
    updateUrlParams(searchQuery, newTag, sortOrder, 1);
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const val = e.target.value as "newest" | "oldest" | "most_viewed";
    updateUrlParams(searchQuery, activeTag, val, 1);
  };

  const allTags = useMemo(() => {
    const tags = new Set<string>();
    initialArticles.forEach(a => a.tags.forEach(t => tags.add(t)));
    return Array.from(tags).sort();
  }, [initialArticles]);

  const filteredArticles = useMemo(() => {
    let result = initialArticles.filter(article => {
      const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            article.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
      const matchesTag = activeTag ? article.tags.includes(activeTag) : true;
      return matchesSearch && matchesTag;
    });

    result.sort((a, b) => {
      if (sortOrder === "newest") {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      } else if (sortOrder === "oldest") {
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      } else if (sortOrder === "most_viewed") {
        const viewsA = viewCounts[a.slug] || 0;
        const viewsB = viewCounts[b.slug] || 0;
        return viewsB - viewsA;
      }
      return 0;
    });

    return result;
  }, [initialArticles, searchQuery, activeTag, sortOrder, viewCounts]);

  const totalPages = Math.ceil(filteredArticles.length / ITEMS_PER_PAGE);
  const paginatedArticles = filteredArticles.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <div className="space-y-10">
      {/* Search and Tags Area */}
      <ScrollReveal direction="up" delay={0.15}>
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gold/10 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-gold to-gold-light"></div>
          <div className="flex flex-col md:flex-row gap-4 relative mb-6">
            <div className="relative flex-1">
              <input 
                type="text" 
                placeholder="Cari judul publikasi atau topik..." 
                value={searchQuery}
                onChange={handleSearchChange}
                className="w-full pl-12 pr-4 py-3.5 bg-cream/30 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all text-navy placeholder:text-gray-400 font-medium"
              />
              <svg className="w-5 h-5 text-gray-400 absolute left-4 top-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            
            <div className="relative min-w-[200px]">
              <select
                value={sortOrder}
                onChange={handleSortChange}
                className="w-full pl-10 pr-10 py-3.5 appearance-none bg-cream/30 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all text-navy font-medium cursor-pointer"
              >
                <option value="newest">Terbaru</option>
                <option value="oldest">Terlama</option>
                <option value="most_viewed">Terpopuler (Views)</option>
              </select>
              <svg className="w-5 h-5 text-gray-400 absolute left-3 top-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" />
              </svg>
              <svg className="w-4 h-4 text-gray-400 absolute right-4 top-4.5 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
          
          {allTags.length > 0 && (
            <div>
              <div className="flex items-center justify-between mb-3">
                <p className="text-sm font-semibold text-navy font-serif">Kategori & Topik Berita:</p>
                {allTags.length > 6 && (
                  <button 
                    onClick={() => setShowAllTags(!showAllTags)}
                    className="text-xs font-bold text-gold hover:text-gold-light flex items-center gap-1 transition-colors bg-gold/5 px-3 py-1 rounded-full"
                  >
                    {showAllTags ? "Tutup" : "Lihat Semua"}
                    <svg className={`w-3.5 h-3.5 transform transition-transform duration-300 ${showAllTags ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                )}
              </div>
              <div className={`flex flex-wrap gap-2 overflow-hidden transition-all duration-500 ease-in-out ${showAllTags ? "max-h-[500px]" : "max-h-[32px] sm:max-h-[36px]"}`}>
                {allTags.map(tag => (
                  <button
                    key={tag}
                    onClick={(e) => handleTagClick(e, tag)}
                    className={`text-xs font-medium px-3.5 py-1.5 rounded-full transition-all duration-300 whitespace-nowrap ${
                      activeTag === tag 
                        ? "bg-gold text-navy shadow-md shadow-gold/20 scale-105" 
                        : "bg-navy/5 text-navy hover:bg-gold/10 hover:text-gold"
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </ScrollReveal>

      {/* Article List */}
      {filteredArticles.length === 0 ? (
        <ScrollReveal direction="up" delay={0.2}>
          <div className="glass-card rounded-2xl p-12 text-center border-dashed border-2 border-gray-200">
            <div className="w-16 h-16 bg-navy/5 rounded-full flex items-center justify-center mx-auto mb-4">
               <svg className="w-8 h-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
               </svg>
            </div>
            <h3 className="text-lg font-bold text-navy font-serif mb-2">Publikasi Tidak Ditemukan</h3>
            <p className="text-gray-400 text-sm">Coba gunakan kata kunci atau kategori pencarian yang lain.</p>
            {(searchQuery || activeTag || sortOrder !== "newest") && (
              <button 
                onClick={() => updateUrlParams("", "", "newest", 1)}
                className="mt-6 text-sm bg-gold/10 text-gold hover:bg-gold hover:text-white px-6 py-2 rounded-lg font-medium transition-all"
              >
                Reset Filter
              </button>
            )}
          </div>
        </ScrollReveal>
      ) : (
        <div className="space-y-6 stagger-children">
          {paginatedArticles.map((article, index) => (
            <ScrollReveal key={article.slug} direction="up" delay={index * 0.1}>
              <div className="relative block glass-card rounded-2xl p-6 sm:p-8 hover:shadow-lg hover:shadow-gold/5 transition-all duration-300 group hover:-translate-y-0.5">
                
                {/* Clickable Background Link */}
                <Link
                  href={article.externalLink || `/publikasi/${article.slug}`}
                  target={article.externalLink ? "_blank" : undefined}
                  rel={article.externalLink ? "noopener noreferrer" : undefined}
                  className="absolute inset-0 z-0 rounded-2xl"
                  aria-label={`Baca: ${article.title}`}
                />

                <div className="relative z-10 pointer-events-none">
                  {/* Tags */}
                  {article.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-3 pointer-events-auto">
                      {article.tags.map((tag) => (
                        <button
                          key={tag}
                          onClick={(e) => handleTagClick(e, tag)}
                          className="text-xs font-medium bg-gold/10 text-gold px-3 py-1 rounded-full hover:bg-gold hover:text-navy transition-colors shadow-sm shadow-gold/5"
                        >
                          {tag}
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Title */}
                  <h2 className="text-xl sm:text-2xl font-bold text-navy font-serif group-hover:text-gold transition-colors mb-3 leading-snug">
                    {article.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">{article.excerpt}</p>

                  {/* Meta */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100/60">
                    <div className="flex items-center gap-4 text-xs text-gray-400 font-medium">
                      <span className="flex items-center gap-1.5"><svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>{article.author}</span>
                      <span className="hidden sm:inline-block">•</span>
                      <span className="flex items-center gap-1.5"><svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                        {new Date(article.date).toLocaleDateString("id-ID", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </span>
                      <span className="hidden sm:inline-block">•</span>
                      <span className="flex items-center gap-1.5"><svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                        {viewCounts[article.slug] || 0} views
                      </span>
                    </div>
                    
                    <span className="text-xs font-bold text-gold flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-x-2 group-hover:translate-x-0">
                      Baca <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    </span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
          
          {/* Pagination Controls */}
          {totalPages > 1 && (
            <ScrollReveal direction="up" delay={0.2}>
              <div className="flex items-center justify-center gap-3 mt-12 bg-white p-4 rounded-2xl shadow-sm border border-gray-100 intline-flex w-max mx-auto">
                <button
                  onClick={() => updateUrlParams(searchQuery, activeTag, sortOrder, currentPage - 1)}
                  disabled={currentPage === 1}
                  className={`p-2.5 rounded-xl border transition-all ${currentPage === 1 ? 'border-gray-100 text-gray-300 cursor-not-allowed bg-gray-50' : 'border-gold/20 text-navy hover:bg-gold/10 hover:text-gold'}`}
                  aria-label="Halaman Sebelumnya"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                
                <div className="flex items-center gap-1 px-2">
                  {Array.from({ length: totalPages }).map((_, i) => (
                    <button
                      key={i}
                      onClick={() => updateUrlParams(searchQuery, activeTag, sortOrder, i + 1)}
                      className={`w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold transition-all ${
                        currentPage === i + 1 
                          ? 'bg-navy text-white shadow-md shadow-navy/20 scale-105' 
                          : 'text-gray-500 hover:bg-gray-100 hover:text-navy'
                      }`}
                    >
                      {i + 1}
                    </button>
                  ))}
                </div>

                <button
                  onClick={() => updateUrlParams(searchQuery, activeTag, sortOrder, currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className={`p-2.5 rounded-xl border transition-all ${currentPage === totalPages ? 'border-gray-100 text-gray-300 cursor-not-allowed bg-gray-50' : 'border-gold/20 text-navy hover:bg-gold/10 hover:text-gold'}`}
                  aria-label="Halaman Selanjutnya"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </ScrollReveal>
          )}
        </div>
      )}
    </div>
  );
}
