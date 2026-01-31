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
      gsap.fromTo(navRef.current, { y: -50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" });
    }
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
  }, [mobileOpen]);

  const githubLink = socialLinks.find((s) => s.name === "github");
  const linkedinLink = socialLinks.find((s) => s.name === "linkedin");
  const closeMenu = () => setMobileOpen(false);

  return (
    <nav ref={navRef} className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
      <div className="navbar-inner">
        <a href="#hero" className="navbar-logo" onClick={closeMenu}>
          Tony Thomas
        </a>

        {/* Desktop */}
        <div className="navbar-desktop">
          {navLinks.map((link) => (
            <a key={link.name} href={link.link} className="navbar-link">
              {link.name}
            </a>
          ))}
          {githubLink && (
            <a href={githubLink.url} target="_blank" rel="noopener noreferrer" className="navbar-icon" aria-label="GitHub">
              <img src={githubLink.imgPath} alt="" className="size-5" />
            </a>
          )}
          {linkedinLink && (
            <a href={linkedinLink.url} target="_blank" rel="noopener noreferrer" className="navbar-icon" aria-label="LinkedIn">
              <img src={linkedinLink.imgPath} alt="" className="size-5" />
            </a>
          )}
          <a href={resumeUrl} target="_blank" rel="noopener noreferrer" className="navbar-resume">
            Resume
          </a>
          <a href="#contact" className="navbar-cta" onClick={closeMenu}>
            Contact
          </a>
        </div>

        {/* Mobile */}
        <div className="navbar-mobile">
          <a href={resumeUrl} target="_blank" rel="noopener noreferrer" className="navbar-resume-mobile">
            Resume
          </a>
          <a href="#contact" className="navbar-cta-mobile" onClick={closeMenu}>
            Contact
          </a>
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="navbar-hamburger"
            aria-expanded={mobileOpen}
            aria-label="Menu"
          >
            {mobileOpen ? (
              <svg className="size-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="size-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="navbar-dropdown">
          {navLinks.map((link) => (
            <a key={link.name} href={link.link} className="navbar-dropdown-link" onClick={closeMenu}>
              {link.name}
            </a>
          ))}
          <a href="#contact" className="navbar-dropdown-link" onClick={closeMenu}>
            Contact
          </a>
          <div className="navbar-dropdown-socials">
            {githubLink && (
              <a href={githubLink.url} target="_blank" rel="noopener noreferrer" className="navbar-icon" aria-label="GitHub">
                <img src={githubLink.imgPath} alt="" className="size-5" />
              </a>
            )}
            {linkedinLink && (
              <a href={linkedinLink.url} target="_blank" rel="noopener noreferrer" className="navbar-icon" aria-label="LinkedIn">
                <img src={linkedinLink.imgPath} alt="" className="size-5" />
              </a>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
