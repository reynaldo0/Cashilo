import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faStar } from "@fortawesome/free-solid-svg-icons";
import emailjs from "@emailjs/browser";

export default function DownloadSection() {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const templateParams = {
      rating: rating,
      feedback: feedback,
      from_name: "Pengguna Aplikasi", // bisa ditambah input nama kalau mau
    };

    emailjs
      .send(
        "service_uebd1db", // ganti dengan Service ID
        "template_iv1rm2b", // ganti dengan Template ID
        templateParams,
        "xyKJHC6-KAYOkVevP" // ganti dengan Public Key
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          setSuccess("Terima kasih! Saran kamu sudah terkirim ✅");
          setFeedback("");
          setRating(0);
          setLoading(false);
        },
        (error) => {
          console.log("FAILED...", error.text);
          setSuccess("Oops! Terjadi kesalahan, silakan coba lagi ❌");
          setLoading(false);
        }
      );
  };

  return (
    <section className="py-20 px-6 md:px-20 bg-white relative overflow-hidden">
      {/* Dekorasi background */}
      <div className="absolute top-0 left-0 w-60 h-60 bg-[#0DABEB]/20 blur-3xl rounded-full animate-pulse-slow -z-10"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#096FA0]/20 blur-3xl rounded-full animate-bounce-slow -z-10"></div>

      <div className="max-w-4xl mx-auto text-center">
        {/* Judul */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
          Unduh <span className="text-[#0DABEB]">Aplikasi Kami</span>
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed mb-12">
          Rasakan pengalaman mencatat keuangan lebih mudah, aman, dan praktis.
          Unduh aplikasi kami sekarang juga dan nikmati manfaatnya!
        </p>

        {/* Tombol + Rating rata-rata */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-16">
          <a
            href="/app-release.apk"
            download
            className="flex items-center gap-3 px-10 py-4 bg-[#0DABEB] text-white rounded-2xl font-semibold shadow-xl
            transition-all duration-500 hover:-translate-y-2 hover:scale-110 hover:shadow-[#0DABEB]/70"
          >
            <FontAwesomeIcon icon={faDownload} className="text-2xl" />
            <span>Download Aplikasi</span>
          </a>

          <div className="flex items-center gap-2 text-yellow-400 text-xl font-semibold">
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} className="text-gray-300" />
            <span className="text-gray-700 text-base ml-2">
              4.0 (2rb+ ulasan)
            </span>
          </div>
        </div>

        {/* Form Feedback */}
        <div className="bg-gray-50 p-8 rounded-2xl shadow-xl max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Berikan Saran & Rating
          </h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Rating Bintang */}
            <div className="flex justify-center gap-3 text-3xl">
              {[1, 2, 3, 4, 5].map((star) => (
                <FontAwesomeIcon
                  key={star}
                  icon={faStar}
                  className={`cursor-pointer transition-colors ${
                    (hoverRating || rating) >= star
                      ? "text-yellow-400"
                      : "text-gray-300"
                  }`}
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHoverRating(star)}
                  onMouseLeave={() => setHoverRating(0)}
                />
              ))}
            </div>

            {/* Input Saran */}
            <textarea
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              placeholder="Tulis saran atau masukan kamu di sini..."
              className="w-full p-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#0DABEB] focus:outline-none resize-none"
              rows="4"
              required
            ></textarea>

            {/* Status */}
            {success && (
              <p className="text-sm text-center font-medium text-gray-600">
                {success}
              </p>
            )}

            {/* Tombol Submit */}
            <button
              type="submit"
              disabled={loading}
              className={`px-10 py-4 rounded-2xl text-white font-semibold shadow-xl transition-all duration-500
                ${
                  loading
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-[#0DABEB] hover:-translate-y-2 hover:scale-110 hover:shadow-[#0DABEB]/70"
                }`}
            >
              {loading ? "Mengirim..." : "Kirim Masukan"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
