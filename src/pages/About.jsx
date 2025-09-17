import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobileAlt, faChartBar } from "@fortawesome/free-solid-svg-icons";

export default function AboutSection() {
  return (
    <section className="py-20 px-6 md:px-20 bg-[#F5F9FF] relative overflow-hidden">
      {/* Dekorasi background */}
      <div className="absolute top-0 left-0 w-60 h-60 bg-[#0DABEB]/20 blur-3xl rounded-full -z-10"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#096FA0]/20 blur-3xl rounded-full -z-10"></div>

      <div className="grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
        {/* Ilustrasi */}
        <div className="flex justify-center">
          <img
            src="/about.png"
            alt="Ilustrasi"
            className="w-full max-w-md animate-float"
          />
        </div>

        {/* Konten Teks */}
        <div>
          <p className="text-[#0DABEB] font-semibold mb-3">Tentang Kami</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Dipercaya Oleh <span className="text-[#0DABEB]">Ribuan</span> Orang
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-10">
            Ribuan pengguna telah mempercayakan pengelolaan finansial mereka
            bersama kami. Dengan keamanan mutakhir dan desain yang intuitif,
            kami menghadirkan pengalaman modern yang bisa kamu andalkan.
          </p>

          {/* Fitur List */}
          <div className="space-y-6">
            <div className="flex items-start gap-4 group">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#0DABEB] text-white shadow-lg transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110">
                <FontAwesomeIcon icon={faMobileAlt} className="text-xl" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  Integrasi Perangkat Andal
                </h3>
                <p className="text-gray-600">
                  Hubungkan dan sinkronkan data di berbagai perangkat dengan
                  cepat dan aman.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 group">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#096FA0] text-white shadow-lg transition-transform duration-500 group-hover:-rotate-12 group-hover:scale-110">
                <FontAwesomeIcon icon={faChartBar} className="text-xl" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  Manajemen Data Mudah
                </h3>
                <p className="text-gray-600">
                  Analisis finansial jadi simpel dengan laporan otomatis yang
                  jelas dan rapi.
                </p>
              </div>
            </div>
          </div>

          {/* Tombol */}
          <button className="mt-10 px-8 py-4 rounded-xl bg-[#0DABEB] text-white font-semibold shadow-lg transition-all duration-500 hover:-translate-y-2 hover:rotate-3 hover:scale-105 hover:shadow-[#0DABEB]/50">
            Pelajari Lebih Lanjut
          </button>
        </div>
      </div>
    </section>
  );
}
