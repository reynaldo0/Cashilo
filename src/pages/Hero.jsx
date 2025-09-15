import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  RoundedBox,
  Environment,
  Html,
} from "@react-three/drei";
import * as THREE from "three";

function IPhone({ screenTexture }) {
  const phoneRef = useRef();

  // Rotasi idle
  useFrame((state) => {
    if (phoneRef.current) {
      phoneRef.current.rotation.y += 0.002;

      // Interaksi mouse → tilt sedikit
      const x = state.mouse.x * 0.2;
      const y = state.mouse.y * 0.2;
      phoneRef.current.rotation.x = THREE.MathUtils.lerp(
        phoneRef.current.rotation.x,
        y,
        0.1
      );
      phoneRef.current.rotation.z = THREE.MathUtils.lerp(
        phoneRef.current.rotation.z,
        -x,
        0.1
      );
    }
  });

  return (
    <group ref={phoneRef} scale={1.1}>
      {/* Frame luar (stainless) */}
      <RoundedBox args={[1, 2, 0.12]} radius={0.12} smoothness={15} castShadow>
        <meshPhysicalMaterial
          color="#900"
          metalness={1}
          roughness={0.2}
          clearcoat={1}
          clearcoatRoughness={0.05}
        />
      </RoundedBox>

      {/* Back panel glass */}
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

      {/* Kamera belakang */}
      <mesh position={[-0.35, 0.85, -0.058]}>
        <circleGeometry args={[0.08, 32]} />
        <meshPhysicalMaterial color="black" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Depan (bezel + layar) */}
      <group position={[0, 0, 0.061]}>
        {/* Bezel hitam */}
        <mesh>
          <planeGeometry args={[0.95, 1.9]} />
          <meshStandardMaterial color="black" />
        </mesh>

        {/* Layar */}
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
  videoTexture.minFilter = THREE.LinearFilter; // hindari garis-garis pixelated
  videoTexture.magFilter = THREE.LinearFilter;
  videoTexture.encoding = THREE.sRGBEncoding;
  videoTexture.anisotropy = 16; // buat lebih smooth di sudut miring

  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-12 bg-[#f6f4fb]">
      {/* Left Text */}
      <div className="max-w-xl mb-12 md:mb-0">
        <p className="text-sm font-semibold mb-4 uppercase tracking-wider bg-gradient-to-r from-[#0988D9] to-[#0DABEB] text-transparent bg-clip-text">
          New Ghost Browser
        </p>

        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
          <span className="block text-gray-900">Isolate Your</span>
          <span className="block bg-gradient-to-r from-[#0DABEB] via-[#0988D9] to-[#0DABEB] text-transparent bg-clip-text">
            Identities.
          </span>
        </h1>

        <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-8">
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.
        </p>

        <div className="flex items-center gap-4">
          <button className="px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-[#0988D9] via-[#0DABEB] to-[#0988D9] shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 hover:bg-[#0DABEB]">
            Download Now
          </button>
          <button className="px-6 py-3 rounded-xl font-semibold border border-gray-300 text-gray-700 hover:bg-gray-100 hover:scale-105 transition-all duration-300">
            Learn More
          </button>
        </div>
      </div>

      {/* Right 3D iPhone */}
      <div className="flex justify-center w-full md:w-1/2 h-[600px]">
        <Canvas camera={{ position: [0, 0, 3.5], fov: 40 }} shadows>
          {/* Lighting setup */}
          <ambientLight intensity={0.5} />
          <directionalLight
            position={[3, 5, 5]}
            intensity={1.2}
            castShadow
            shadow-mapSize-width={2048}
            shadow-mapSize-height={2048}
          />
          <hemisphereLight
            skyColor={"#ffffff"}
            groundColor={"#b1b1b1"}
            intensity={0.6}
          />
          <Environment preset="sunset" />

          {/* iPhone */}
          <IPhone screenTexture={videoTexture} />

          <OrbitControls enableZoom={false} />
        </Canvas>
      </div>
    </section>
  );
}
