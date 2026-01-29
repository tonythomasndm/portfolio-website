import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { words, counterItems, socialLinks } from "../assets/assets/constants";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const counterRefs = useRef<(HTMLDivElement | null)[]>([]);
  const socialRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (heroRef.current && textRef.current) {
      const heroText = textRef.current.querySelector(".hero-text");
      if (heroText) {
        const elements = [
          heroText.querySelector("h1"),
          heroText.querySelector(".flex.items-center"),
          heroText.querySelector("p"),
          heroText.querySelector(".hero-badges"),
          socialRef.current,
        ].filter(Boolean) as HTMLElement[];

        gsap.fromTo(
          elements,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.8, stagger: 0.12, ease: "power3.out" }
        );
      }

      counterRefs.current.forEach((ref, index) => {
        if (ref) {
          const value = counterItems[index].value;
          const suffix = counterItems[index].suffix;
          const obj = { count: 0 };
          gsap.to(obj, {
            count: value,
            duration: 1.8,
            delay: 0.8 + index * 0.12,
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

  const githubLink = socialLinks.find((s) => s.name === "github");
  const linkedinLink = socialLinks.find((s) => s.name === "linkedin");

  return (
    <section id="hero" className="relative overflow-hidden min-h-screen flex items-center">
      <div className="hero-layout w-full padding-x-lg">
        <div ref={heroRef} className="flex flex-col items-center xl:items-start w-full max-w-4xl mx-auto xl:mx-0">
          <div ref={textRef} className="flex flex-col gap-5 xl:gap-6 text-center xl:text-left">
            <div className="hero-text">
              <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold mb-3 xl:mb-4 tracking-tight">
                Hi, I'm <span className="text-[var(--gh-accent)]">Tony Thomas</span>
              </h1>
              <div className="flex items-center justify-center xl:justify-start gap-2 sm:gap-3 text-xl sm:text-2xl md:text-3xl xl:text-4xl font-semibold text-[var(--gh-text)]">
                <span>I'm a</span>
                <div className="slide relative h-10 sm:h-12 md:h-14 xl:h-16 overflow-hidden">
                  <div className="wrapper">
                    {words.map((word, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <span>{word.text}</span>
                        {word.imgPath && <img src={word.imgPath} alt={word.text} className="size-6 sm:size-8 opacity-80" />}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-base sm:text-lg md:text-xl text-[var(--gh-text-muted)] mt-4 xl:mt-6 max-w-2xl mx-auto xl:mx-0 leading-relaxed">
                B.Tech in Computer Science and Design at IIIT Delhi. Building solutions that combine technology and design.
              </p>
              <div className="hero-badges flex flex-wrap justify-center xl:justify-start gap-3 sm:gap-4 mt-6 xl:mt-8">
                {counterItems.map((item, index) => (
                  <div key={index} className="hero-badge">
                    <div
                      ref={(el) => { counterRefs.current[index] = el; }}
                      className="text-lg sm:text-xl md:text-2xl font-bold text-[var(--gh-accent)] tabular-nums"
                    >
                      {item.value}
                      {item.suffix}
                    </div>
                    <div className="text-xs sm:text-sm text-[var(--gh-text-muted)]">{item.label}</div>
                  </div>
                ))}
              </div>
              <div ref={socialRef} className="flex flex-wrap justify-center xl:justify-start items-center gap-3 mt-6 xl:mt-8">
                {githubLink && (
                  <a
                    href={githubLink.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-lg border border-[var(--gh-border)] text-[var(--gh-text-muted)] hover:text-[var(--gh-accent)] hover:border-[var(--gh-accent)]/50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[var(--gh-accent)]/50"
                    aria-label="GitHub"
                  >
                    <img src={githubLink.imgPath} alt="GitHub" className="size-5 sm:size-6" />
                  </a>
                )}
                {linkedinLink && (
                  <a
                    href={linkedinLink.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-lg border border-[var(--gh-border)] text-[var(--gh-text-muted)] hover:text-[var(--gh-accent)] hover:border-[var(--gh-accent)]/50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[var(--gh-accent)]/50"
                    aria-label="LinkedIn"
                  >
                    <img src={linkedinLink.imgPath} alt="LinkedIn" className="size-5 sm:size-6" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
