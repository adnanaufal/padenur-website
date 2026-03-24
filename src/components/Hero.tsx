import ScrollReveal from "./animations/ScrollReveal";

export default function Hero() {
  return (
    <section className="relative bg-navy overflow-hidden">
      {/* Subtle geometric background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(201, 168, 76, 0.3) 0%, transparent 50%),
                              radial-gradient(circle at 75% 75%, rgba(30, 58, 95, 0.4) 0%, transparent 50%)`,
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          {/* Text Content */}
          <div className="lg:col-span-3">
            <ScrollReveal direction="right">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-gold/10 text-gold border border-gold/20 px-4 py-1.5 rounded-full text-xs font-medium tracking-wide uppercase mb-6">
                <span className="w-1.5 h-1.5 bg-gold rounded-full animate-pulse" />
                Dosen & Profesional Perbankan Syariah
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight font-serif mb-4">
                Deni{" "}
                <span className="gradient-text">Nuryadin</span>
              </h1>

              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-3">
                <span className="text-gold font-medium">M.Si</span> · <span className="text-gold font-medium">S.E</span>
              </p>

              <p className="text-base sm:text-lg text-gray-400 leading-relaxed max-w-2xl mb-8">
                Akademisi dan profesional perbankan dengan pengalaman komprehensif di bidang ekonomi syariah.
                Berpengalaman lebih dari <span className="text-white font-medium">25 tahun</span> di sektor keuangan syariah
                dan pendidikan tinggi, termasuk sebagai Dosen di UHAMKA dan Dewan Pengawas Syariah.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-3">
                <a
                  href="#pengalaman"
                  className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-navy font-semibold px-6 py-3 rounded-xl text-sm transition-all duration-300 hover:shadow-lg hover:shadow-gold/20"
                >
                  Lihat Pengalaman
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/deni-nuryadin-6453bb33a"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/20 px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  LinkedIn
                </a>
              </div>
            </ScrollReveal>
          </div>

          {/* Profile Illustration / Stats */}
          <div className="lg:col-span-2 hidden lg:block">
            <ScrollReveal direction="left" delay={0.2}>
              <div className="relative">
                {/* Decorative ring */}
                <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-gold/20 via-transparent to-slate-blue/20 blur-xl" />

                <div className="relative glass-card rounded-2xl p-8 bg-white/5 border border-white/10">
                  {/* Avatar placeholder */}
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-gold to-gold-light flex items-center justify-center text-navy text-4xl font-bold font-serif shadow-xl">
                    DN
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="bg-white/5 rounded-xl p-3 hover:bg-white/10 transition-colors">
                      <div className="text-2xl font-bold text-gold">25+</div>
                      <div className="text-xs text-gray-400 mt-0.5">Tahun Pengalaman</div>
                    </div>
                    <div className="bg-white/5 rounded-xl p-3 hover:bg-white/10 transition-colors">
                      <div className="text-2xl font-bold text-gold">6+</div>
                      <div className="text-xs text-gray-400 mt-0.5">Institusi</div>
                    </div>
                    <div className="bg-white/5 rounded-xl p-3 hover:bg-white/10 transition-colors">
                      <div className="text-2xl font-bold text-gold">M.Si</div>
                      <div className="text-xs text-gray-400 mt-0.5">Pascasarjana</div>
                    </div>
                    <div className="bg-white/5 rounded-xl p-3 hover:bg-white/10 transition-colors">
                      <div className="text-2xl font-bold text-gold">DPS</div>
                      <div className="text-xs text-gray-400 mt-0.5">Dewan Pengawas</div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" className="w-full h-auto">
          <path fill="var(--cream)" d="M0,32L48,37.3C96,43,192,53,288,53.3C384,53,480,43,576,37.3C672,32,768,32,864,37.3C960,43,1056,53,1152,53.3C1248,53,1344,43,1392,37.3L1440,32L1440,64L0,64Z" />
        </svg>
      </div>
    </section>
  );
}
