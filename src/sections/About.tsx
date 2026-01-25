import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { education } from "../assets/assets/constants";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
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
              x: index % 2 === 0 ? -50 : 50,
            },
            {
              opacity: 1,
              x: 0,
              duration: 0.8,
              delay: index * 0.2,
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
    <section id="about" ref={sectionRef} className="section-padding min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h2 ref={titleRef} className="text-4xl md:text-5xl font-bold mb-12 text-center">
          About Me
        </h2>
        <div className="space-y-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              I'm a Computer Science and Design student at IIIT Delhi with a passion for creating 
              innovative solutions that bridge technology and user experience. With expertise in full-stack 
              development, machine learning, and mobile app development, I love building projects that make 
              a real impact.
            </p>
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">Education</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  ref={(el) => { cardsRef.current[index] = el; }}
                  className="card-border rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
                >
                  <h4 className="text-xl font-semibold mb-2">{edu.institution}</h4>
                  <p className="text-gray-600 mb-2">{edu.degree}</p>
                  <p className="text-sm text-gray-500 mb-2">{edu.period}</p>
                  <p className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                    {edu.grade}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
