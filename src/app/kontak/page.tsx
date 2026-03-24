import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Kontak",
  description: "Hubungi Deni Nuryadin — Dosen UHAMKA dan profesional perbankan syariah.",
};

export default function KontakPage() {
  return (
    <section className="py-20 bg-cream min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-2">Hubungi Saya</p>
          <h1 className="text-3xl sm:text-4xl font-bold text-navy font-serif">Kontak</h1>
          <div className="w-16 h-1 bg-gradient-to-r from-gold to-gold-light mx-auto mt-4 rounded-full" />
          <p className="text-gray-500 mt-4 max-w-xl mx-auto leading-relaxed">
            Jangan ragu untuk menghubungi saya untuk kebutuhan konsultasi, kolaborasi riset,
            atau pertanyaan lainnya seputar ekonomi syariah.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* LinkedIn Card */}
            <div className="glass-card rounded-2xl p-6">
              <h3 className="text-lg font-bold text-navy font-serif mb-4">Profil Profesional</h3>
              <a
                href="https://www.linkedin.com/in/deni-nuryadin-6453bb33a"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-slate-blue hover:text-gold transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-navy/5 group-hover:bg-gold/10 flex items-center justify-center transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-sm">LinkedIn</p>
                  <p className="text-xs text-gray-400">Deni Nuryadin</p>
                </div>
              </a>
            </div>

            {/* Location Card */}
            <div className="glass-card rounded-2xl p-6">
              <h3 className="text-lg font-bold text-navy font-serif mb-4">Lokasi</h3>
              <div className="flex items-start gap-3 text-gray-600">
                <div className="w-10 h-10 rounded-xl bg-navy/5 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-slate-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-sm text-navy">Kota Tangerang Selatan</p>
                  <p className="text-xs text-gray-400 mt-0.5">Banten, Indonesia</p>
                </div>
              </div>
            </div>

            {/* Afiliasi */}
            <div className="glass-card rounded-2xl p-6">
              <h3 className="text-lg font-bold text-navy font-serif mb-4">Afiliasi</h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full" />
                  Universitas Muhammadiyah Prof. Dr. Hamka (UHAMKA)
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full" />
                  Fakultas Ekonomi dan Bisnis — Program Studi Ekonomi Islam
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
