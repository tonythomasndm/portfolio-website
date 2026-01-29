import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { socialLinks, resumeUrl } from "../assets/assets/constants";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (footerRef.current) {
      gsap.fromTo(
        footerRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          scrollTrigger: { trigger: footerRef.current, start: "top 95%" },
        }
      );
    }
  }, []);

  const githubLink = socialLinks.find((s) => s.name === "github");
  const linkedinLink = socialLinks.find((s) => s.name === "linkedin");
  const emailLink = socialLinks.find((s) => s.name === "email");

  return (
    <footer ref={footerRef} className="footer">
      <div className="footer-container">
        <p>© 2025 Tony Thomas. All rights reserved.</p>
        <div className="socials">
          {githubLink && (
            <a href={githubLink.url} target="_blank" rel="noopener noreferrer">
              <img src={githubLink.imgPath} alt="GitHub" />
              <span>GitHub</span>
            </a>
          )}
          {linkedinLink && (
            <a href={linkedinLink.url} target="_blank" rel="noopener noreferrer">
              <img src={linkedinLink.imgPath} alt="LinkedIn" />
              <span>LinkedIn</span>
            </a>
          )}
          {emailLink && (
            <a href={emailLink.url}>
              <img src={emailLink.imgPath} alt="Email" />
              <span>Email</span>
            </a>
          )}
          <a href={resumeUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-lg text-[var(--gh-text-muted)] hover:text-[var(--gh-accent)] hover:bg-[var(--gh-bg-elevated)] transition-all duration-200 text-sm">
            Resume
          </a>
        </div>
        <p className="text-center md:text-end">Built with React & GSAP</p>
      </div>
    </footer>
  );
};

export default Footer;
