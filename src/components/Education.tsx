const education = [
  {
    degree: "Pasca Sarjana (M.Si)",
    field: "Economics Sharia",
    institution: "ITB Ahmad Dahlan",
    period: "2013 — 2015",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
  },
  {
    degree: "Sarjana (S.E)",
    field: "Economics",
    institution: "Universitas Pancasila",
    period: "1992 — 1996",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
  },
  {
    degree: "Doktoral (Cand)",
    field: "Economics Sharia",
    institution: "Universitas Ibn Khaldun Bogor",
    period: "",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
      </svg>
    ),
  },
];

import ScrollReveal from "./animations/ScrollReveal";

export default function Education() {
  return (
    <section id="pendidikan" className="py-20 bg-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal direction="up">
          <div className="text-center mb-14">
            <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-2">Akademik</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy font-serif">
              Riwayat Pendidikan
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-gold to-gold-light mx-auto mt-4 rounded-full" />
          </div>
        </ScrollReveal>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 stagger-children">
          {education.map((edu, index) => (
            <ScrollReveal key={edu.institution} delay={index * 0.15} direction="up">
              <div className="glass-card h-full rounded-2xl p-8 text-center hover:shadow-lg hover:shadow-gold/5 transition-all duration-300 hover:-translate-y-1 group">
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-navy/5 group-hover:bg-gold/10 flex items-center justify-center text-slate-blue group-hover:text-gold transition-colors duration-300 mx-auto mb-5">
                  {edu.icon}
                </div>

                {/* Degree */}
                <h3 className="text-xl font-bold text-navy font-serif mb-1">{edu.degree}</h3>
                <p className="text-gold font-medium text-sm mb-3">{edu.field}</p>

                {/* Institution */}
                <p className="text-gray-600 font-medium mb-1">{edu.institution}</p>
                {edu.period && (
                  <p className="text-sm text-gray-400">{edu.period}</p>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
