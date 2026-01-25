import { useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment } from "@react-three/drei";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { techStackIcons } from "../assets/assets/constants";
import type { TechStackIcon } from "../assets/assets/constants";
import { Group } from "three";

gsap.registerPlugin(ScrollTrigger);

const TechIcon = ({ modelPath, scale, rotation }: { modelPath: string; scale: number; rotation: [number, number, number] }) => {
  const { scene } = useGLTF(modelPath);
  const meshRef = useRef<Group>(null);

  useEffect(() => {
    if (meshRef.current) {
      gsap.to(meshRef.current.rotation, {
        y: meshRef.current.rotation.y + Math.PI * 2,
        duration: 10,
        repeat: -1,
        ease: "none",
      });
    }
  }, []);

  return (
    <group ref={meshRef} scale={scale} rotation={rotation}>
      <primitive object={scene} />
    </group>
  );
};

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (sectionRef.current && titleRef.current) {
      gsap.fromTo(
        titleRef.current,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );

      cardsRef.current.forEach((card, index) => {
        if (card) {
          gsap.fromTo(
            card,
            {
              opacity: 0,
              y: 50,
              scale: 0.9,
            },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.8,
              delay: index * 0.1,
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
              },
            }
          );
        }
      });
    }
  }, []);

  const skills = [
    { category: "Languages", items: ["Python", "C++", "C", "Java", "JavaScript", "SQL"] },
    { category: "Frameworks & Libraries", items: ["React", "Node.js", "Express", "React Native", "Expo", "TensorFlow", "Django", "FastAPI"] },
    { category: "Tools & Technologies", items: ["Git", "Linux", "Docker", "AWS", "GCP", "Firebase", "MongoDB", "PostgreSQL", "MySQL"] },
    { category: "Design", items: ["Figma", "Miro", "UI/UX Design", "Prototyping"] },
  ];

  return (
    <section id="skills" ref={sectionRef} className="section-padding min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h2 ref={titleRef} className="text-4xl md:text-5xl font-bold mb-16 text-center">
          Skills
        </h2>
        <div className="tech-grid mb-16">
          {techStackIcons.map((tech: TechStackIcon, index: number) => (
            <div
              key={index}
              ref={(el) => { cardsRef.current[index] = el; }}
              className="tech-icon-wrapper card-border rounded-xl p-4 hover:shadow-xl transition-all duration-300"
            >
              <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1} />
                <TechIcon
                  modelPath={tech.modelPath}
                  scale={tech.scale}
                  rotation={tech.rotation}
                />
                <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
                <Environment preset="sunset" />
              </Canvas>
              <p className="text-center mt-2 text-sm font-semibold text-gray-700">{tech.name}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="card-border rounded-xl p-6 hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                {skill.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700 hover:bg-purple-100 hover:text-purple-700 transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
