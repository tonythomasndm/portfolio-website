import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects } from "../assets/assets/constants";
import type { Project } from "../assets/assets/constants";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
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
              scale: 0.9,
            },
            {
              opacity: 1,
              scale: 1,
              duration: 0.8,
              delay: index * 0.15,
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

  return (
    <section id="projects" ref={sectionRef} className="section-padding min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h2 ref={titleRef} className="text-4xl md:text-5xl font-bold mb-16 text-center text-[var(--gh-text)]">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project: Project, index: number) => (
            <div
              key={index}
              ref={(el) => { cardsRef.current[index] = el; }}
              className="card-border overflow-hidden hover:border-[var(--gh-accent)]/40 transition-all duration-300 group"
            >
              <div className="relative h-44 overflow-hidden bg-[var(--gh-border-muted)]">
                <img
                  src={project.imgPath}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--gh-bg)]/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-[var(--gh-text)]">{project.title}</h3>
                <p className="text-sm text-[var(--gh-text-muted)] mb-3">{project.tech}</p>
                <p className="text-[var(--gh-text-muted)] mb-4 text-sm leading-relaxed">{project.description}</p>
                <ul className="space-y-2 mb-4">
                  {project.features.slice(0, 2).map((feature: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-[var(--gh-text)]">
                      <span className="text-[var(--gh-accent)] mt-1">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex gap-4 flex-wrap">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-[var(--gh-accent)] hover:underline font-medium"
                    >
                      GitHub →
                    </a>
                  )}
                  {project.website && (
                    <a
                      href={project.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-[var(--gh-accent)] hover:underline font-medium"
                    >
                      Website →
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
