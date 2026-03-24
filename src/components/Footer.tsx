import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-navy text-gray-400 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-gold to-gold-light flex items-center justify-center text-navy font-bold text-sm font-serif">
                DN
              </div>
              <span className="text-white font-semibold text-lg">Deni Nuryadin</span>
            </div>
            <p className="text-sm leading-relaxed">
              Akademisi & Profesional Perbankan Syariah dengan pengalaman lebih dari 25 tahun di sektor keuangan syariah dan pendidikan tinggi.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">Navigasi</h3>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Beranda" },
                { href: "/#pengalaman", label: "Pengalaman" },
                { href: "/#pendidikan", label: "Pendidikan" },
                { href: "/publikasi", label: "Publikasi" },
                { href: "/kontak", label: "Kontak" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:text-gold transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">Kontak</h3>
            <div className="space-y-3 text-sm">
              <a
                href="https://www.linkedin.com/in/deni-nuryadin-6453bb33a"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-gold transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn Profile
              </a>
              <p className="text-gray-500">
                Kota Tangerang Selatan, Banten, Indonesia
              </p>
            </div>
          </div>
        </div>

        {/* Divider & Copyright */}
        <div className="mt-10 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Deni Nuryadin. All rights reserved.
          </p>
          <p className="text-xs text-gray-600">
            padenur.com
          </p>
        </div>
      </div>
    </footer>
  );
}
