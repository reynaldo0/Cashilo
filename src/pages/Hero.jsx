import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, RoundedBox, Environment } from "@react-three/drei";
import * as THREE from "three";

function IPhone({ screenTexture, scale = 1.1 }) {
  const phoneRef = useRef();
  const [phase, setPhase] = useState("spin"); // "spin" → "float"

  // Animasi utama
  useFrame((state) => {
    if (!phoneRef.current) return;

    if (phase === "spin") {
      // brutal spin
      phoneRef.current.rotation.y += 0.1; // cepat
      if (phoneRef.current.rotation.y > Math.PI * 2) {
        // muter 2x putaran
        phoneRef.current.rotation.y = 0;
        setPhase("float");
      }
    } else if (phase === "float") {
      // animasi idle floating
      phoneRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1;
    }
  });

  return (
    <group ref={phoneRef} scale={scale}>
      {/* Frame luar */}
      <RoundedBox args={[1, 2, 0.12]} radius={0.12} smoothness={15} castShadow>
        <meshPhysicalMaterial
          color="#900"
          metalness={1}
          roughness={0.2}
          clearcoat={1}
          clearcoatRoughness={0.05}
        />
      </RoundedBox>

      {/* Back panel */}
      <mesh position={[0, 0, -0.061]}>
        <planeGeometry args={[0.95, 1.9]} />
        <meshPhysicalMaterial
          color="#b91c1c"
          metalness={0.5}
          roughness={0.1}
          clearcoat={1}
          clearcoatRoughness={0.05}
        />
      </mesh>

      {/* Kamera */}
      <mesh position={[-0.35, 0.85, -0.058]}>
        <circleGeometry args={[0.08, 32]} />
        <meshPhysicalMaterial color="black" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Depan */}
      <group position={[0, 0, 0.061]}>
        <mesh>
          <planeGeometry args={[0.95, 1.9]} />
          <meshStandardMaterial color="black" />
        </mesh>

        <mesh position={[0, 0, 0.0005]}>
          <planeGeometry args={[0.9, 1.8]} />
          <meshPhysicalMaterial
            map={screenTexture}
            toneMapped={false}
            clearcoat={1}
            clearcoatRoughness={0.05}
            roughness={0.1}
            metalness={0.6}
            emissive={"#222"}
            emissiveIntensity={0.2}
          />
        </mesh>

        {/* Notch */}
        <mesh position={[0, 0.9, 0.003]}>
          <boxGeometry args={[0.35, 0.08, 0.01]} />
          <meshStandardMaterial color="black" />
        </mesh>
      </group>
    </group>
  );
}

export default function Hero() {
  // Video texture
  const video = document.createElement("video");
  video.src = "/vidio/demo.mp4";
  video.loop = true;
  video.muted = true;
  video.playsInline = true;
  video.autoplay = true;
  video.play();

  const videoTexture = new THREE.VideoTexture(video);
  videoTexture.minFilter = THREE.LinearFilter;
  videoTexture.magFilter = THREE.LinearFilter;
  videoTexture.encoding = THREE.sRGBEncoding;
  videoTexture.anisotropy = 16;

  return (
    <section className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-20 py-12 bg-[#f6f4fb]">
      {/* Left Text */}
      <div className="max-w-xl mb-12 md:mb-0 text-left">
        <p className="text-xs sm:text-sm font-semibold mb-3 uppercase tracking-wider bg-gradient-to-r from-[#0988D9] to-[#0DABEB] text-transparent bg-clip-text">
          Aplikasi Pintar Keuangan
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
          <span className="block text-gray-900">Atur Keuangan</span>
          <span className="block bg-gradient-to-r from-[#0DABEB] via-[#0988D9] to-[#0DABEB] text-transparent bg-clip-text">
            Lebih Mudah & Teratur
          </span>
        </h1>
        <p className="text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed mb-8">
          Catat pemasukan, kendalikan pengeluaran, dan rencanakan tabungan
          dengan cara yang simpel. Semua dalam satu aplikasi untuk hidup yang
          lebih tenang dan finansial yang sehat.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <button className="w-full sm:w-auto px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-[#0DABEB] via-[#0988D9] to-[#0DABEB] shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
            Install Sekarang
          </button>
          <a href="#feature" className="w-full sm:w-auto px-6 py-3 rounded-xl font-semibold border border-gray-300 text-gray-700 hover:bg-gray-100 hover:scale-105 transition-all duration-300 cursor-pointer">
            Pelajari Lebih Lanjut
          </a>
        </div>
      </div>

      {/* Right 3D iPhone */}
      <div className="flex justify-center w-full md:w-1/2 h-[400px] sm:h-[500px] md:h-[600px]">
        <Canvas camera={{ position: [0, 0, 3.5], fov: 40 }} shadows>
          <ambientLight intensity={0.5} />
          <directionalLight position={[3, 5, 5]} intensity={1.2} castShadow />
          <hemisphereLight
            skyColor={"#ffffff"}
            groundColor={"#b1b1b1"}
            intensity={0.6}
          />
          <Environment preset="city" />
          <IPhone
            screenTexture={videoTexture}
            scale={window.innerWidth < 768 ? 0.8 : 1.1}
          />
          <OrbitControls enableZoom={false} />
        </Canvas>
      </div>
    </section>
  );
}
