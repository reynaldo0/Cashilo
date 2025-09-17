import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-r from-[#0988D9] via-[#0DABEB] to-[#0988D9] text-white py-12 px-6 md:px-20 overflow-hidden">
      {/* Efek Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 blur-3xl rounded-full -z-10"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-black/20 blur-3xl rounded-full -z-10"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Branding */}
        <div>
          <h2 className="text-2xl font-extrabold tracking-tight">Cashilo</h2>
          <p className="mt-3 text-sm text-white/80 leading-relaxed">
            Aplikasi catatan keuangan pintar untuk bantu kamu mengelola
            pemasukan, pengeluaran, dan tabungan dengan lebih mudah.
          </p>
        </div>

        {/* Navigasi */}
        <div className="flex flex-col md:items-center">
          <h3 className="text-lg font-semibold mb-4">Tim Kami</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="https://www.instagram.com/hidayatoc10/"
                className="hover:text-yellow-300 transition-colors"
              >
                Hidayatullah
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/rynldysllino/"
                className="hover:text-yellow-300 transition-colors"
              >
                Reynaldo Yusellino
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/fathifwzz_/"
                className="hover:text-yellow-300 transition-colors"
              >
                Fathi Fawwaz Amanullah
              </a>
            </li>
          </ul>
        </div>

        {/* Sosial Media */}
        <div className="flex flex-col md:items-end">
          <h3 className="text-lg font-semibold mb-4">Ikuti Kami</h3>
          <div className="flex gap-4">
            <a
              href="https://facebook.com"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 hover:bg-yellow-300 hover:text-black transition-all"
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a
              href="https://instagram.com"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 hover:bg-yellow-300 hover:text-black transition-all"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              href="https://twitter.com"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 hover:bg-yellow-300 hover:text-black transition-all"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a
              href="https://linkedin.com"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 hover:bg-yellow-300 hover:text-black transition-all"
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-12 pt-6 border-t border-white/20 text-center text-sm text-white/70">
        © {new Date().getFullYear()} Cashilo. Semua Hak Dilindungi.
      </div>
    </footer>
  );
}
