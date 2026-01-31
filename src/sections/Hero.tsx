import { Suspense, useRef } from "react";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { words, socialLinks } from "../assets/assets/constants";
import type { Mesh } from "three";
import { useFrame } from "@react-three/fiber";

const GlowingOrb = ({ position, color, size, speed }: { position: [number, number, number]; color: string; size: number; speed: number }) => {
  const meshRef = useRef<Mesh>(null);
  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * speed;
      meshRef.current.position.y = position[1] + Math.sin(Date.now() * 0.001 * speed) * 0.1;
    }
  });
  return (
    <mesh ref={meshRef} position={position} castShadow>
      <sphereGeometry args={[size, 32, 32]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={2}
        metalness={0.2}
        roughness={0.3}
      />
    </mesh>
  );
};

const TorusRing = () => {
  const meshRef = useRef<Mesh>(null);
  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.3;
      meshRef.current.rotation.y += delta * 0.5;
    }
  });
  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <torusKnotGeometry args={[0.6, 0.15, 128, 32]} />
      <meshStandardMaterial
        color="#58a6ff"
        emissive="#58a6ff"
        emissiveIntensity={1.5}
        metalness={0.8}
        roughness={0.2}
      />
    </mesh>
  );
};

const HeroScene = () => (
  <>
    <ambientLight intensity={0.15} />
    <directionalLight position={[10, 10, 5]} intensity={1.5} color="#ffffff" />
    <pointLight position={[2, 2, 2]} intensity={3} color="#58a6ff" distance={8} decay={2} />
    <pointLight position={[-2, -1, 2]} intensity={2} color="#a78bfa" distance={6} decay={2} />
    <pointLight position={[0, 3, 0]} intensity={1.5} color="#38bdf8" distance={5} decay={2} />
    <GlowingOrb position={[0.8, 0.3, 0]} color="#58a6ff" size={0.25} speed={0.5} />
    <GlowingOrb position={[-0.6, -0.2, 0.5]} color="#a78bfa" size={0.2} speed={0.7} />
    <GlowingOrb position={[0.3, -0.5, -0.3]} color="#38bdf8" size={0.18} speed={0.4} />
    <TorusRing />
    <EffectComposer>
      <Bloom luminanceThreshold={0.4} luminanceSmoothing={0.9} intensity={1.2} />
    </EffectComposer>
  </>
);

const heroVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12,  },
  }),
};

const canvasVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1, delay: 0.2,  },
  },
};

const Hero = () => {
  const github = socialLinks.find((s) => s.name === "github");
  const linkedin = socialLinks.find((s) => s.name === "linkedin");
  const roleWords = [...new Map(words.map((w) => [w.text, w])).values()].slice(0, 3);

  return (
    <section id="hero" className="hero-layout">
      <div className="hero-content-wrapper">
        <motion.div
          className="hero-canvas-wrap"
          variants={canvasVariants}
          initial="hidden"
          animate="visible"
        >
          <Canvas camera={{ position: [0, 0, 3.5], fov: 50 }} dpr={[1, 2]} gl={{ antialias: true, alpha: true }}>
            <Suspense fallback={null}>
              <HeroScene />
            </Suspense>
          </Canvas>
        </motion.div>
        <div className="hero-text-block space-y-3 sm:space-y-4">
          <motion.h1
            className="hero-title"
            variants={heroVariants}
            initial="hidden"
            animate="visible"
            custom={0}
          >
            Hi, I'm <span className="text-[var(--gh-accent)]">Tony Thomas</span>
          </motion.h1>
          <motion.div
            className="hero-role flex items-center justify-center gap-2"
            variants={heroVariants}
            initial="hidden"
            animate="visible"
            custom={1}
          >
            <span>I'm a</span>
            <div className="slide relative h-[1.5em] overflow-hidden inline-block">
              <div className="word-slider flex flex-col">
                {roleWords.map((w, i) => (
                  <div key={i} className="word-slide-item h-[1.5em] flex items-center text-[var(--gh-accent)] font-medium shrink-0">
                    {w.text}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
          <motion.p
            className="hero-subtitle"
            variants={heroVariants}
            initial="hidden"
            animate="visible"
            custom={2}
          >
            Associate Software Engineer @ NAB · Full-stack · Spring Boot · React · TypeScript
          </motion.p>
          <motion.div
            className="flex justify-center gap-3 pt-4"
            variants={heroVariants}
            initial="hidden"
            animate="visible"
            custom={3}
          >
            {github && (
              <motion.a
                href={github.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social p-2 rounded-lg border border-[var(--gh-border)] text-[var(--gh-text-muted)] hover:text-[var(--gh-accent)] hover:border-[var(--gh-accent)]/50 transition-colors"
                aria-label="GitHub"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <img src={github.imgPath} alt="" className="size-5" />
              </motion.a>
            )}
            {linkedin && (
              <motion.a
                href={linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social p-2 rounded-lg border border-[var(--gh-border)] text-[var(--gh-text-muted)] hover:text-[var(--gh-accent)] hover:border-[var(--gh-accent)]/50 transition-colors"
                aria-label="LinkedIn"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <img src={linkedin.imgPath} alt="" className="size-5" />
              </motion.a>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
