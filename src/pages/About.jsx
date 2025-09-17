import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobileAlt, faChartBar } from "@fortawesome/free-solid-svg-icons";

export default function AboutSection() {
  return (
    <section
      className="py-20 px-6 md:px-20 bg-[#f6f4fb] relative overflow-hidden"
      id="about"
    >
      {/* Dekorasi background */}
      <div className="absolute top-0 left-0 w-60 h-60 bg-[#0DABEB]/20 blur-3xl rounded-full animate-pulse-slow -z-10"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#096FA0]/20 blur-3xl rounded-full animate-bounce-slow -z-10"></div>

      <div className="grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
        {/* Ilustrasi */}
        <div className="flex justify-center relative group">
          <img
            src="/about.png"
            alt="Ilustrasi"
            className="w-full max-w-md animate-float-slow group-hover:scale-110 group-hover:rotate-3 transition-all duration-700 ease-out"
          />
          {/* Lingkaran efek brutal */}
          <div className="absolute -z-10 w-80 h-80 bg-[#0DABEB]/10 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-700"></div>
        </div>

        {/* Konten Teks */}
        <div>
          <p className="text-[#0DABEB] font-semibold mb-3 animate-slide-in">
            Tentang Kami
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Dipercaya Oleh{" "}
            <span className="text-[#0DABEB] relative inline-block group-hover:animate-wiggle">
              Ribuan
            </span>{" "}
            Orang
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-10 animate-fade-in">
            Ribuan pengguna telah mempercayakan pengelolaan finansial mereka
            bersama kami. Dengan keamanan mutakhir dan desain yang intuitif,
            kami menghadirkan pengalaman modern yang bisa kamu andalkan.
          </p>

          {/* Fitur List */}
          <div className="space-y-8">
            <div className="flex items-start gap-4 group">
              <div
                className="flex items-center justify-center w-14 h-14 rounded-2xl bg-[#0DABEB] text-white shadow-xl 
                transition-all duration-500 group-hover:rotate-12 group-hover:scale-125 group-hover:shadow-[#0DABEB]/70"
              >
                <FontAwesomeIcon icon={faMobileAlt} className="text-2xl" />
              </div>
              <div className="transition-all duration-500 group-hover:translate-x-3">
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
              <div
                className="flex items-center justify-center w-14 h-14 rounded-2xl bg-[#096FA0] text-white shadow-xl 
                transition-all duration-500 group-hover:-rotate-12 group-hover:scale-125 group-hover:shadow-[#096FA0]/70"
              >
                <FontAwesomeIcon icon={faChartBar} className="text-2xl" />
              </div>
              <div className="transition-all duration-500 group-hover:translate-x-3">
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
          <div className="relative mt-10">
            <a
              href="#next"
              className="mt-20 px-10 py-4 rounded-2xl bg-[#0DABEB] text-white font-semibold shadow-xl 
            transition-all duration-500 hover:-translate-y-3 hover:rotate-3 hover:scale-110 hover:shadow-[#0DABEB]/70"
            >
              Pelajari Lebih Lanjut
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
