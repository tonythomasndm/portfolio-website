import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { socialLinks, resumeUrl } from "../assets/assets/constants";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (ref.current) {
      gsap.fromTo(ref.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5, scrollTrigger: { trigger: ref.current, start: "top 98%" } });
    }
  }, []);

  return (
    <footer ref={ref} className="footer">
      <div className="footer-container">
        <p>© 2025 Tony Thomas</p>
        <div className="socials">
          {socialLinks.map((s, i) => (
            <a key={i} href={s.url} target={s.name === "email" ? undefined : "_blank"} rel={s.name === "email" ? undefined : "noopener noreferrer"}>
              <img src={s.imgPath} alt={s.name} />
              <span className="capitalize">{s.name}</span>
            </a>
          ))}
          <a href={resumeUrl} target="_blank" rel="noopener noreferrer">
            Resume
          </a>
        </div>
        <p>Built with React & GSAP</p>
      </div>
    </footer>
  );
};

export default Footer;
