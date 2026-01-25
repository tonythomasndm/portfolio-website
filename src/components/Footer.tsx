import { socialLinks } from "../assets/assets/constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="text-sm">© 2025 Tony Thomas. All rights reserved.</p>
        <div className="socials">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="icon"
            >
              <img src={social.imgPath} alt={social.name} className="w-5 h-5 md:w-6 md:h-6" />
            </a>
          ))}
        </div>
        <p className="text-sm text-center md:text-end">
          Built with React, Three.js & GSAP
        </p>
      </div>
    </footer>
  );
};

export default Footer;
