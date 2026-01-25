import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { expCards } from "../assets/assets/constants";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
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
              y: 100,
            },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              delay: index * 0.3,
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
    <section id="experience" ref={sectionRef} className="section-padding min-h-screen relative">
      <div className="max-w-6xl mx-auto">
        <h2 ref={titleRef} className="text-4xl md:text-5xl font-bold mb-16 text-center">
          Work Experience
        </h2>
        <div className="relative">
          <div className="timeline-wrapper">
            <div className="timeline"></div>
          </div>
          <div className="space-y-12 pl-8 md:pl-20 xl:pl-40">
            {expCards.map((exp, index) => (
              <div
                key={index}
                ref={(el) => (cardsRef.current[index] = el)}
                className="exp-card-wrapper relative"
              >
                <div className="timeline-logo absolute xl:left-[-35.5vw] md:left-[-60px] left-[-40px]">
                  <img src={exp.logoPath} alt={exp.company} className="w-full h-full object-contain p-2" />
                </div>
                <div className="card-border rounded-xl p-6 md:p-8 hover:shadow-xl transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold mb-2">{exp.title}</h3>
                      <p className="text-lg text-gray-600 mb-1">
                        <a href={exp.certificate} target="_blank" rel="noopener noreferrer" className="hover:text-purple-600 transition-colors">
                          {exp.company}
                        </a>
                      </p>
                      <p className="text-sm text-gray-500">{exp.location}</p>
                    </div>
                    <p className="text-sm md:text-base text-gray-600 mt-2 md:mt-0">{exp.date}</p>
                  </div>
                  <ul className="space-y-3 mt-6">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="text-purple-600 mt-1">▸</span>
                        <span className="text-gray-700">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
