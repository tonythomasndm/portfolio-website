import { useEffect, useRef, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment, Preload } from "@react-three/drei";
import { gsap } from "gsap";
import { words, counterItems } from "../assets/assets/constants";

const ComputerModel = () => {
  const { scene } = useGLTF("/models/computer-optimized-transformed.glb");
  return <primitive object={scene} scale={2} position={[0, -1, 0]} />;
};

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const counterRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (heroRef.current && textRef.current) {
      const heroText = textRef.current.querySelector('.hero-text');
      if (heroText) {
        const elements = [
          heroText.querySelector('h1'),
          heroText.querySelector('.flex.items-center'),
          heroText.querySelector('p'),
          heroText.querySelector('.flex.flex-wrap'),
        ].filter(Boolean) as HTMLElement[];

        gsap.fromTo(
          elements,
          {
            opacity: 0,
            y: 50,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out",
          }
        );
      }

      counterRefs.current.forEach((ref, index) => {
        if (ref) {
          const value = counterItems[index].value;
          const suffix = counterItems[index].suffix;
          const obj = { count: 0 };
          gsap.to(obj, {
            count: value,
            duration: 2,
            delay: 1.5 + index * 0.2,
            ease: "power2.out",
            onUpdate: () => {
              if (ref) {
                ref.textContent = obj.count.toFixed(suffix === "" ? 2 : 0) + suffix;
              }
            },
          });
        }
      });
    }
  }, []);

  return (
    <section id="hero" className="relative overflow-hidden min-h-screen flex items-center">
      <div className="hero-layout w-full padding-x-lg">
        <div ref={heroRef} className="flex flex-col xl:flex-row items-center justify-between w-full gap-10">
          <div ref={textRef} className="flex flex-col gap-6 xl:w-1/2">
            <div className="hero-text">
              <h1 className="text-4xl md:text-6xl xl:text-7xl font-bold mb-4">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Tony Thomas</span>
              </h1>
              <div className="flex items-center gap-3 text-2xl md:text-4xl xl:text-5xl font-semibold">
                <span>I'm a</span>
                <div className="slide relative h-12 md:h-16 xl:h-20 overflow-hidden">
                  <div className="wrapper">
                    {words.map((word, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <span>{word.text}</span>
                        {word.imgPath && <img src={word.imgPath} alt={word.text} />}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-lg md:text-xl text-gray-600 mt-6 max-w-2xl">
                Computer Science and Design student at IIIT Delhi. Passionate about building innovative solutions 
                that combine technology and creativity.
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                {counterItems.map((item, index) => (
                  <div
                    key={index}
                    className="hero-badge"
                  >
                    <div
                      ref={(el) => { counterRefs.current[index] = el; }}
                      className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600"
                    >
                      {item.value}
                      {item.suffix}
                    </div>
                    <div className="text-xs md:text-sm text-gray-600">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="hero-3d-layout">
            <Suspense fallback={<div className="w-full h-full flex items-center justify-center text-gray-400">Loading 3D Model...</div>}>
              <Canvas 
                camera={{ position: [0, 0, 5], fov: 50 }}
                gl={{ antialias: true, alpha: true }}
                dpr={[1, 2]}
              >
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1} />
                <pointLight position={[-10, -10, -5]} intensity={0.5} />
                <ComputerModel />
                <OrbitControls 
                  enableZoom={false} 
                  autoRotate 
                  autoRotateSpeed={2}
                  enablePan={false}
                  enableDamping
                  dampingFactor={0.05}
                />
                <Environment preset="sunset" />
                <Preload all />
              </Canvas>
            </Suspense>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
