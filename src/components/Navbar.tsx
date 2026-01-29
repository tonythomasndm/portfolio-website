import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { navLinks, resumeUrl, socialLinks } from "../assets/assets/constants";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (navRef.current) {
      gsap.fromTo(navRef.current, { y: -60, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" });
    }
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileOpen]);

  const githubLink = socialLinks.find((s) => s.name === "github");
  const linkedinLink = socialLinks.find((s) => s.name === "linkedin");

  const linkProps = { onClick: () => setMobileOpen(false) };

  return (
    <nav ref={navRef} className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
      <div className="inner w-full px-4 sm:px-6 md:px-8 lg:px-12">
        <a href="#hero" className="logo text-lg sm:text-xl md:text-2xl" {...linkProps}>
          Tony Thomas
        </a>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-6">
          <nav className="desktop">
            <ul>
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.link} className="text-[var(--gh-text-muted)] hover:text-[var(--gh-text)] transition-colors text-sm font-medium">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="nav-actions">
            {githubLink && (
              <a href={githubLink.url} target="_blank" rel="noopener noreferrer" className="nav-link-icon" aria-label="GitHub">
                <img src={githubLink.imgPath} alt="GitHub" className="size-5" />
              </a>
            )}
            {linkedinLink && (
              <a href={linkedinLink.url} target="_blank" rel="noopener noreferrer" className="nav-link-icon" aria-label="LinkedIn">
                <img src={linkedinLink.imgPath} alt="LinkedIn" className="size-5" />
              </a>
            )}
            <a href={resumeUrl} target="_blank" rel="noopener noreferrer" className="nav-resume">
              Resume
            </a>
            <a href="#contact" className="contact-btn group">
              <div className="inner">
                <span>Contact</span>
              </div>
            </a>
          </div>
        </div>

        {/* Mobile: compact top bar + menu */}
        <div className="flex items-center gap-2 lg:hidden">
          <a href={resumeUrl} target="_blank" rel="noopener noreferrer" className="nav-resume text-xs py-2 px-2">
            Resume
          </a>
          <a href="#contact" className="contact-btn group" {...linkProps}>
            <div className="inner py-1.5 px-2.5 text-xs">
              <span>Contact</span>
            </div>
          </a>
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2.5 rounded-lg text-[var(--gh-text)] hover:bg-[var(--gh-bg-elevated)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--gh-accent)]/50"
            aria-expanded={mobileOpen}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="mobile-menu lg:hidden">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.link} className="block py-3 px-4 text-[var(--gh-text-muted)] hover:text-[var(--gh-text)] hover:bg-[var(--gh-bg)] rounded-lg transition-colors text-sm font-medium" {...linkProps}>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-2 pt-4 border-t border-[var(--gh-border)]">
            {githubLink && (
              <a href={githubLink.url} target="_blank" rel="noopener noreferrer" className="nav-link-icon p-2 rounded-lg" aria-label="GitHub">
                <img src={githubLink.imgPath} alt="GitHub" className="size-5" />
              </a>
            )}
            {linkedinLink && (
              <a href={linkedinLink.url} target="_blank" rel="noopener noreferrer" className="nav-link-icon p-2 rounded-lg" aria-label="LinkedIn">
                <img src={linkedinLink.imgPath} alt="LinkedIn" className="size-5" />
              </a>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
