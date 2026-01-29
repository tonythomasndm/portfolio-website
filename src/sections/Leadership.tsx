import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { leadership, awards } from "../assets/assets/constants";

gsap.registerPlugin(ScrollTrigger);

const Leadership = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

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

      itemsRef.current.forEach((item, index) => {
        if (item) {
          gsap.fromTo(
            item,
            {
              opacity: 0,
              x: -50,
            },
            {
              opacity: 1,
              x: 0,
              duration: 0.8,
              delay: index * 0.2,
              scrollTrigger: {
                trigger: item,
                start: "top 85%",
              },
            }
          );
        }
      });
    }
  }, []);

  return (
    <section id="leadership" ref={sectionRef} className="section-padding min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h2 ref={titleRef} className="text-4xl md:text-5xl font-bold mb-16 text-center text-[var(--gh-text)]">
          Leadership & Achievements
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-[var(--gh-accent)]">
              Leadership & Extracurricular
            </h3>
            <div className="space-y-4">
              {leadership.map((item, index) => (
                <div
                  key={index}
                  ref={(el) => { itemsRef.current[index] = el; }}
                  className="card-border p-6 hover:border-[var(--gh-accent)]/40 transition-colors duration-300"
                >
                  <p className="text-[var(--gh-text)] leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-[var(--gh-accent)]">
              Awards & Achievements
            </h3>
            <div className="space-y-4">
              {awards.map((award, index) => (
                <div
                  key={index}
                  ref={(el) => { itemsRef.current[leadership.length + index] = el; }}
                  className="card-border p-6 hover:border-[var(--gh-accent)]/40 transition-colors duration-300"
                >
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🏆</span>
                    <p className="text-[var(--gh-text)] leading-relaxed">{award}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;
