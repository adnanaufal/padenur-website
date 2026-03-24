"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import ScrollReveal from "./animations/ScrollReveal";

interface Article {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  tags: string[];
}

export default function FeaturedPublications({ articles }: { articles: Article[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (articles.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % articles.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [articles.length]);

  if (!articles || articles.length === 0) return null;

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-2">Riset Terbaru</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy font-serif">
                Publikasi Pilihan
              </h2>
            </div>
            <Link
              href="/publikasi"
              className="inline-flex items-center gap-2 text-slate-blue hover:text-gold font-medium transition-colors"
            >
              Lihat Semua
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </ScrollReveal>

        <div className="relative h-[380px] sm:h-[320px] w-full max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -50, scale: 0.95 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="absolute inset-0 glass-card rounded-3xl p-8 border border-navy/5 flex flex-col justify-center shadow-xl shadow-navy/5 bg-gradient-to-br from-white to-cream"
            >
              {articles[currentIndex].tags?.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {articles[currentIndex].tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium bg-gold/10 text-gold px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
              
              <h3 className="text-2xl sm:text-3xl font-bold text-navy font-serif leading-snug mb-4">
                <Link href={`/publikasi/${articles[currentIndex].slug}`} className="hover:text-gold transition-colors">
                  {articles[currentIndex].title}
                </Link>
              </h3>
              
              <p className="text-gray-600 leading-relaxed mb-6 line-clamp-3">
                {articles[currentIndex].excerpt}
              </p>
              
              <div className="flex items-center justify-between mt-auto pt-6 border-t border-gray-100">
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {new Date(articles[currentIndex].date).toLocaleDateString("id-ID", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </div>
                
                <Link
                  href={`/publikasi/${articles[currentIndex].slug}`}
                  className="text-sm font-semibold text-gold hover:text-gold-light transition-colors flex items-center gap-1"
                >
                  Baca Selengkapnya
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel Indicators */}
        <div className="flex justify-center items-center gap-3 mt-8">
          {articles.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`relative h-1.5 transition-all duration-300 rounded-full overflow-hidden ${
                idx === currentIndex ? "w-12 bg-gold/20" : "w-4 bg-gray-200 hover:bg-gold/40"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            >
              {idx === currentIndex && (
                <motion.div
                  className="absolute top-0 left-0 bottom-0 bg-gold rounded-full"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 5, ease: "linear" }}
                />
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
