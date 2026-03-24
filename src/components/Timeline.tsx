const experiences = [
  {
    role: "Lecturer",
    company: "Universitas Muhammadiyah Prof. Dr. Hamka (UHAMKA)",
    period: "April 2016 — Sekarang",
    location: "Jakarta Timur, Indonesia",
    responsibilities: [
      "Melaksanakan tugas Pendidikan, Penelitian dan Pengabdian kepada Masyarakat sebagai kewajiban Tri Dharma Perguruan Tinggi.",
      "Melaksanakan tugas khusus pengajaran pada program studi Ekonomi Islam di Fakultas Ekonomi dan Bisnis UHAMKA, diantaranya mata kuliah Bank dan Lembaga Keuangan Syariah.",
    ],
    current: true,
  },
  {
    role: "Dewan Pengawas Syariah",
    company: "PT Jaminan Pembiayaan Askrindo Syariah",
    period: "Juli 2018 — Juli 2023",
    location: "Jakarta Pusat, Indonesia",
    responsibilities: [
      "Memastikan semua produk dan jasa yang ditawarkan oleh LKS sesuai dengan prinsip-prinsip syariah.",
      "Melakukan pengawasan terhadap seluruh transaksi yang dilakukan oleh LKS untuk memastikan kepatuhan terhadap syariah.",
    ],
    current: false,
  },
  {
    role: "Alternative Channel Section Head",
    company: "PT Bank Rakyat Indonesia Syariah",
    period: "Januari 2010 — Juni 2017",
    location: "Jakarta Pusat, Indonesia",
    responsibilities: [
      "Mengembangkan strategi jangka panjang untuk memperluas jangkauan pasar melalui saluran alternatif.",
      "Mengidentifikasi peluang baru dan tren pasar yang relevan dengan saluran alternatif.",
      "Membangun dan mengelola portofolio saluran alternatif yang beragam (e-commerce, marketplace, social media, dll.).",
      "Mengukur kinerja saluran alternatif dan membuat laporan berkala.",
    ],
    current: false,
  },
  {
    role: "Team Leader Marketing KCU",
    company: "Bank Mega Syariah",
    period: "April 2008 — Juni 2010",
    location: "Jakarta Pusat, Indonesia",
    responsibilities: [
      "Mengembangkan strategi pemasaran yang selaras dengan tujuan bisnis perusahaan.",
      "Melakukan analisis pasar dan tren industri untuk mengidentifikasi peluang bisnis baru.",
      "Menetapkan target pemasaran yang realistis dan terukur.",
    ],
    current: false,
  },
  {
    role: "Manager Ketua Koperasi LABA",
    company: "Koperasi ESQ 165",
    period: "Januari 2004 — Juni 2008",
    location: "Jakarta Pusat, Indonesia",
    responsibilities: [
      "Menyusun visi, misi, dan tujuan koperasi.",
      "Mengembangkan strategi bisnis jangka panjang dan pendek.",
      "Melakukan analisis SWOT untuk mengidentifikasi peluang dan tantangan.",
    ],
    current: false,
  },
  {
    role: "Funding Executive Manager Marketing Sales",
    company: "PT Bank Muamalat Indonesia Tbk",
    period: "Desember 1998 — Juli 2000",
    location: "Jakarta Pusat, Indonesia",
    responsibilities: [
      "Membangun rencana pemasaran jangka panjang dan jangka pendek yang selaras dengan visi perusahaan.",
      "Melakukan riset pasar untuk memahami tren, kompetitor, dan preferensi konsumen.",
      "Membagi pasar menjadi segmen-segmen yang spesifik untuk menargetkan kampanye pemasaran.",
    ],
    current: false,
  },
];

export default function Timeline() {
  return (
    <section id="pengalaman" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-2">Karier</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy font-serif">
            Pengalaman Profesional
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-gold to-gold-light mx-auto mt-4 rounded-full" />
        </div>

        {/* Timeline */}
        <div className="relative pl-12 sm:pl-14">
          {/* Vertical line */}
          <div className="timeline-line" />

          <div className="space-y-10">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                {/* Dot */}
                <div className="timeline-dot" />

                {/* Card */}
                <div className="glass-card rounded-2xl p-6 sm:p-8 hover:shadow-lg transition-shadow duration-300">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-lg font-bold text-navy font-serif">{exp.role}</h3>
                      <p className="text-slate-blue font-medium">{exp.company}</p>
                    </div>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      {exp.current && (
                        <span className="bg-green-100 text-green-700 text-xs font-medium px-2.5 py-0.5 rounded-full">
                          Aktif
                        </span>
                      )}
                      <span className="text-sm text-gray-400 whitespace-nowrap">{exp.period}</span>
                    </div>
                  </div>

                  <p className="text-xs text-gray-400 mb-3 flex items-center gap-1">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                    {exp.location}
                  </p>

                  {/* Responsibilities */}
                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, respIndex) => (
                      <li key={respIndex} className="flex items-start gap-2 text-sm text-gray-600 leading-relaxed">
                        <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
