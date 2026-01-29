import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { socialLinks } from "../assets/assets/constants";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const socialsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current && titleRef.current) {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
        }
      );
      if (formRef.current) {
        gsap.fromTo(
          formRef.current,
          { opacity: 0, x: -40 },
          { opacity: 1, x: 0, duration: 0.7, delay: 0.2, scrollTrigger: { trigger: formRef.current, start: "top 85%" } }
        );
      }
      if (infoRef.current) {
        gsap.fromTo(
          infoRef.current,
          { opacity: 0, x: 40 },
          { opacity: 1, x: 0, duration: 0.7, delay: 0.3, scrollTrigger: { trigger: infoRef.current, start: "top 85%" } }
        );
      }
      if (socialsRef.current) {
        gsap.fromTo(
          socialsRef.current.children,
          { opacity: 0, scale: 0.8 },
          { opacity: 1, scale: 1, duration: 0.4, stagger: 0.08, delay: 0.4, scrollTrigger: { trigger: socialsRef.current, start: "top 85%" } }
        );
      }
    }
  }, []);

  return (
    <section id="contact" ref={sectionRef} className="section-padding min-h-screen">
      <div className="max-w-5xl mx-auto">
        <h2 ref={titleRef} className="text-4xl md:text-5xl font-bold mb-4 text-center text-[var(--gh-text)]">
          Contact Me
        </h2>
        <p className="text-center text-[var(--gh-text-muted)] mb-16 max-w-2xl mx-auto">
          Have a project in mind or want to connect? Drop a message or reach out via the links below.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div ref={formRef}>
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" placeholder="Your name" required />
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="you@example.com" required />
              </div>
              <div>
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows={5} placeholder="Your message" required />
              </div>
              <a
                href="mailto:tony21360@iiitd.ac.in?subject=Portfolio%20Contact"
                className="inline-flex justify-center items-center w-full py-3 rounded-lg bg-[var(--gh-accent)] text-[var(--gh-bg)] font-medium hover:bg-[var(--gh-accent-hover)] transition-colors"
              >
                Send Message
              </a>
            </form>
          </div>
          <div ref={infoRef} className="flex flex-col justify-center space-y-6">
            <div className="card-border p-6">
              <h3 className="text-xl font-semibold mb-4 text-[var(--gh-text)]">Get in touch</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-xs uppercase tracking-wider text-[var(--gh-text-muted)] mb-1">Email</p>
                  <a href="mailto:tony21360@iiitd.ac.in" className="text-[var(--gh-accent)] hover:underline">
                    tony21360@iiitd.ac.in
                  </a>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-[var(--gh-text-muted)] mb-1">Phone</p>
                  <a href="tel:+919625718420" className="text-[var(--gh-accent)] hover:underline">
                    +91 9625718420
                  </a>
                </div>
              </div>
            </div>
            <div>
              <p className="text-sm text-[var(--gh-text-muted)] mb-3">Connect with me</p>
              <div ref={socialsRef} className="flex flex-wrap gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target={social.name === "email" ? undefined : "_blank"}
                    rel={social.name === "email" ? undefined : "noopener noreferrer"}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg border border-[var(--gh-border)] text-[var(--gh-text-muted)] hover:text-[var(--gh-accent)] hover:border-[var(--gh-accent)]/50 transition-all"
                  >
                    <img src={social.imgPath} alt={social.name} className="size-5" />
                    <span className="capitalize">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
