import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faSlidersH,
  faMobileAlt,
} from "@fortawesome/free-solid-svg-icons";

export default function Next() {
  return (
    <section className="py-20 px-6 md:px-20 bg-[#f6f4fb] relative overflow-hidden" id="next">
      {/* Dekorasi background */}
      <div className="absolute top-0 left-0 w-60 h-60 bg-[#0DABEB]/20 blur-3xl rounded-full animate-pulse-slow -z-10"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#096FA0]/20 blur-3xl rounded-full animate-bounce-slow -z-10"></div>

      <div className="grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
        {/* Konten Teks */}
        <div>
          <p className="text-[#0DABEB] font-semibold mb-3 animate-slide-in">
            Desain Keren & Praktis
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-snug">
            Aplikasi Pintar
            <span className="text-[#0DABEB] relative inline-block group-hover:animate-wiggle">
              dan Berguna
            </span>{" "}
            <br /> Kebutuhan Sehari-hari
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-6 animate-fade-in">
            Aplikasi ini dibuat dengan cermat dan tujuan yang jelas dirancang
            untuk membantu orang mengatur tugas dan keuangan sehari-hari dengan
            mudah. Dibangun secara mandiri dengan fokus pada kesederhanaan,
            kecepatan, dan kegunaan nyata.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mb-10 animate-fade-in">
            Setiap fitur dikembangkan secara teliti untuk mendukung tujuan Anda,
            baik itu melacak pemasukan, merencanakan pengeluaran, atau tetap
            terorganisir. Desain praktis, dibuat untuk orang nyata.
          </p>

          {/* Tombol */}
          <a href="download"
            className="px-10 py-4 rounded-2xl bg-[#0DABEB] text-white font-semibold shadow-xl 
            transition-all duration-500 hover:-translate-y-3 hover:rotate-3 hover:scale-110 hover:shadow-[#0DABEB]/70"
          >
            Unduh Aplikasi
          </a>
        </div>

        {/* Ilustrasi */}
        <div className="flex justify-center relative group">
          <div className="relative w-full max-w-2xl">
            <div className="absolute -z-10 w-96 h-60 bg-[#0DABEB]/10 rounded-2xl blur-2xl group-hover:scale-105 transition-transform duration-700"></div>

            {/* Gambar Landscape */}
            <img
              src="/next.png" // ganti dengan path image-mu
              alt="Ilustrasi Aplikasi"
              className="w-full h-auto rounded-3xl object-cover animate-float-slow"
            />

            {/* Floating Elements */}
            <div className="absolute -left-10 top-10 bg-white px-4 py-3 rounded-2xl shadow-xl flex items-center gap-2 hover:scale-110 transition">
              <FontAwesomeIcon icon={faSearch} className="text-[#0DABEB]" />
              <span className="text-sm font-medium text-gray-700">Cari</span>
            </div>
            <div className="absolute -right-10 top-20 bg-white px-4 py-3 rounded-2xl shadow-xl flex items-center gap-2 hover:scale-110 transition">
              <FontAwesomeIcon icon={faSlidersH} className="text-[#096FA0]" />
              <span className="text-sm font-medium text-gray-700">
                Pengaturan
              </span>
            </div>
            <div className="absolute -left-6 bottom-10 bg-white px-4 py-3 rounded-2xl shadow-xl flex items-center gap-2 hover:scale-110 transition">
              <FontAwesomeIcon icon={faMobileAlt} className="text-[#0DABEB]" />
              <span className="text-sm font-medium text-gray-700">Profil</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
