const certifications = [
  {
    title: "Direksi dan Komisaris",
    subtitle: "Penyelenggara: Perbarindo & BNSP",
    description: "Sertifikasi kompetensi profesional khusus untuk tingkatan Direksi dan Komisaris lembaga keuangan.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Komisaris BPRS",
    subtitle: "Penyelenggara: Certif Syariah & LPPI",
    description: "Sertifikasi profesi kompetensi untuk tingkatan Komisaris di Bank Pembiayaan Rakyat Syariah (BPRS).",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
      </svg>
    ),
  },
];

import ScrollReveal from "./animations/ScrollReveal";

export default function SkillsGrid() {
  return (
    <section className="py-20 bg-cream">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal direction="up">
          <div className="text-center mb-14">
            <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-2">Kompetensi</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy font-serif">
              Sertifikasi Profesi
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-gold to-gold-light mx-auto mt-4 rounded-full" />
          </div>
        </ScrollReveal>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 stagger-children">
          {certifications.map((cert, index) => (
            <ScrollReveal key={cert.title} delay={index * 0.1} direction="up">
              <div className="glass-card h-full rounded-2xl p-8 hover:shadow-xl hover:shadow-gold/10 transition-all duration-300 group hover:-translate-y-2 border border-white/50 bg-white/60 backdrop-blur-md text-center">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-navy to-slate-blue flex items-center justify-center text-white mb-6 shadow-lg shadow-navy/20 group-hover:scale-110 transition-transform duration-300">
                  {cert.icon}
                </div>
                <h3 className="text-xl font-bold text-navy mb-1 font-serif">{cert.title}</h3>
                <p className="text-sm font-medium text-gold mb-4 py-1 px-3 bg-gold/10 inline-block rounded-full">
                  {cert.subtitle}
                </p>
                <p className="text-gray-600 leading-relaxed text-sm">{cert.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
