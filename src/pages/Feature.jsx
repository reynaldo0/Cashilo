import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPiggyBank,
  faChartLine,
  faMobileAlt,
  faGift,
} from "@fortawesome/free-solid-svg-icons";

export default function Feature() {
  const features = [
    {
      icon: faPiggyBank,
      title: "Catat Semua Transaksi",
      description:
        "Masukkan pemasukan dan pengeluaran harian dengan mudah, agar kamu selalu tahu ke mana uangmu pergi.",
    },
    {
      icon: faChartLine,
      title: "Pantau Keuangan",
      description:
        "Visualisasi grafik dan laporan otomatis membuatmu bisa melihat kondisi keuangan secara cepat.",
    },
    {
      icon: faGift,
      title: "Uji Coba Tanpa Batas",
      description:
        "Nikmati semua fitur tanpa komitmen awal — eksplorasi bebas sesuai kebutuhan Anda.",
    },
    {
      icon: faMobileAlt,
      title: "Akses Dimana Saja",
      description:
        "Aplikasi ringan dan responsif, bisa diakses kapan saja melalui ponselmu.",
    },
  ];

  return (
    <section className=" relative overflow-hidden min-h-screen bg-[#0988D9]">
      <img
        src="/wave/fitur.png"
        alt="Wave"
        className="w-full h-full object-cover will-change-transform"
      />
      <div className="py-20 px-6 md:px-20">
        {/* Judul */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-white">
            Kenapa Pilih{" "}
            <span className="bg-gradient-to-r from-gray-200 to-gray-300/90 text-transparent bg-clip-text">
              Aplikasi Kami?
            </span>
          </h2>
          <p className="text-white text-lg md:text-xl leading-relaxed">
            Atur keuangan pribadi dengan cara yang lebih mudah, teratur, dan
            menyenangkan. Berikut fitur unggulan yang akan memudahkan hidupmu:
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`relative group bg-white p-8 rounded-2xl shadow-lg transition-all duration-500
    hover:shadow-2xl hover:-translate-y-6 hover:-rotate-3 hover:scale-110 hover:shadow-[#0DABEB]/50
    animate-float animate-delay-${(index % 4) + 1}`}
            >
              <div className="absolute inset-0 rounded-2xl p-[2px] bg-gradient-to-r from-primary-100 to-[#0DABEB] opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white"></div>

              <div className="relative z-10 flex flex-col items-center text-center">
                <FontAwesomeIcon
                  icon={feature.icon}
                  className="text-5xl text-[#0DABEB] mb-4 group-hover:text-white transition-transform duration-500"
                />
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-white transition-colors duration-500">
                  {feature.title}
                </h3>
                <p className="text-gray-600 group-hover:text-white">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
