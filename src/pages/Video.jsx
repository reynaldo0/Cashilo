export default function VideoDemo() {
  return (
    <section
      id="demo"
      className="relative bg-[#f6f4fb] py-20 px-6 md:px-20 text-center"
    >
      {/* Background dekorasi */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-[#0DABEB]/20 blur-3xl rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-[#0988D9]/20 blur-3xl rounded-full animate-bounce"></div>
      </div>

      <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6">
        Lihat{" "}
        <span className="bg-gradient-to-r from-[#0DABEB] via-[#0988D9] to-[#0DABEB] text-transparent bg-clip-text">
          Demo Aplikasi
        </span>
      </h2>

      <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto mb-12">
        Rasakan pengalaman mengatur keuangan yang simpel dan intuitif. Tonton
        video singkat ini untuk melihat bagaimana aplikasi membantu kamu
        mencatat, mengelola, dan merencanakan keuangan sehari-hari.
      </p>

      {/* Video Container */}
      <div className="relative max-w-4xl mx-auto aspect-video rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
        {/* Gunakan file lokal */}
        <video
          src="/vidio/demo.mp4"
          controls
          className="w-full h-full object-cover"
        />
        {/* Atau pakai YouTube embed */}
        {/* <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/xxxxx"
          title="Demo Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe> */}
      </div>
    </section>
  );
}
