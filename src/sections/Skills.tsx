import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { techStackImgs } from "../assets/assets/constants";
import type { TechStackImg } from "../assets/assets/constants";

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const skillCardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (sectionRef.current && titleRef.current) {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          scrollTrigger: { trigger: sectionRef.current, start: "top 82%" },
        }
      );

      cardsRef.current.forEach((card, index) => {
        if (card) {
          gsap.fromTo(
            card,
            { opacity: 0, y: 30, scale: 0.96 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.6,
              delay: index * 0.08,
              scrollTrigger: { trigger: card, start: "top 88%" },
            }
          );
        }
      });

      skillCardsRef.current.forEach((card, index) => {
        if (card) {
          gsap.fromTo(
            card,
            { opacity: 0, x: index % 2 === 0 ? -20 : 20 },
            {
              opacity: 1,
              x: 0,
              duration: 0.6,
              delay: index * 0.1,
              scrollTrigger: { trigger: card, start: "top 88%" },
            }
          );
        }
      });
    }
  }, []);

  const skills = [
    { category: "Languages", items: ["Python", "C++", "C", "Java", "JavaScript", "SQL"] },
    { category: "Frameworks & Libraries", items: ["React", "Node.js", "Express", "React Native", "Expo", "TensorFlow", "Django", "FastAPI", "Numpy", "Pandas", "scikit-learn", "Hugging Face", "Spark", "Hadoop"] },
    { category: "Tools & Technologies", items: ["Git", "Linux", "Docker", "AWS", "GCP", "Firebase", "MongoDB", "PostgreSQL", "MySQL", "Figma", "Miro", "Excel"] },
    { category: "Coursework", items: ["Data Structures & Algorithms", "Operating Systems", "OOP", "Information Retrieval", "DBMS", "Computer Networks", "Machine Learning", "Data Science", "System Design"] },
  ];

  return (
    <section id="skills" ref={sectionRef} className="section-padding min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h2 ref={titleRef} className="text-3xl sm:text-4xl md:text-5xl font-bold mb-10 md:mb-14 text-center text-[var(--gh-text)]">
          Skills
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 mb-12 md:mb-16">
          {techStackImgs.map((tech: TechStackImg, index: number) => (
            <div
              key={index}
              ref={(el) => { cardsRef.current[index] = el; }}
              className="tech-icon-wrapper aspect-square flex flex-col justify-center items-center p-4 sm:p-5"
            >
              <div className="flex-1 flex items-center justify-center w-full min-h-[60px] sm:min-h-[80px]">
                <img
                  src={tech.imgPath}
                  alt={tech.name}
                  className="max-h-12 sm:max-h-14 md:max-h-16 w-auto object-contain"
                />
              </div>
              <p className="text-center mt-2 text-xs sm:text-sm font-medium text-[var(--gh-text)] leading-tight">
                {tech.name}
              </p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              ref={(el) => { skillCardsRef.current[index] = el; }}
              className="card-border p-5 sm:p-6 hover:border-[var(--gh-accent)]/40 transition-colors duration-300"
            >
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-[var(--gh-accent)]">
                {skill.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 sm:px-3 sm:py-1.5 bg-[var(--gh-bg)] border border-[var(--gh-border)] rounded-lg text-xs sm:text-sm text-[var(--gh-text)] hover:border-[var(--gh-accent)]/50 hover:text-[var(--gh-accent)] transition-colors"
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
