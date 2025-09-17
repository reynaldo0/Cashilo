import React, { useEffect, useState } from "react";
import logo from "/logo.png";

export default function LoadingScreen({ onLoaded }) {
  const [fade, setFade] = useState(false);
  const [show, setShow] = useState(true);

  useEffect(() => {
    // minimal tampil 1s
    const timer = setTimeout(() => {
      setFade(true); // mulai fade out
      if (onLoaded) onLoaded(); // langsung kasih sinyal hero boleh render
      // setelah animasi 1s, baru unmount
      setTimeout(() => setShow(false), 1000);
    }, 1500); // durasi minimal sebelum fade
    return () => clearTimeout(timer);
  }, [onLoaded]);

  const bubbles = Array.from({ length: 15 }, (_, i) => i);

  if (!show) return null;

  return (
    <div
      id="loading-screen"
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center 
                  bg-white backdrop-blur-lg overflow-hidden transition-opacity duration-1000 
                  ${fade ? "opacity-0" : "opacity-100"}`}
    >
      {/* Gelembung background */}
      {bubbles.map((b, i) => (
        <div
          key={b}
          className="absolute rounded-full bg-blue-300 opacity-50"
          style={{
            width: `${10 + Math.random() * 30}px`,
            height: `${10 + Math.random() * 30}px`,
            left: `${Math.random() * 100}%`,
            bottom: i % 2 === 0 ? `-${Math.random() * 50}px` : undefined,
            top: i % 2 !== 0 ? `-${Math.random() * 50}px` : undefined,
            animation:
              i % 2 === 0
                ? `bubbleMoveUp ${4 + Math.random() * 3}s linear infinite`
                : `bubbleMoveDown ${4 + Math.random() * 3}s linear infinite`,
            animationDelay: `${Math.random() * 2}s`,
          }}
        />
      ))}

      <img
        src={logo}
        alt="Loading..."
        className="w-60 h-60 animate-bounce object-contain"
      />
      <p
        className="mt-4 text-gray-600 font-bold text-lg"
        style={{ animation: "textAppear 2s forwards" }}
      >
        Memuat konten...
      </p>
    </div>
  );
}
