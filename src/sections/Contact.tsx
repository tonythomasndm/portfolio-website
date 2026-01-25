import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { socialLinks } from "../assets/assets/constants";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const socialsRef = useRef<HTMLDivElement>(null);

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

      if (formRef.current) {
        gsap.fromTo(
          formRef.current,
          {
            opacity: 0,
            x: -50,
          },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            scrollTrigger: {
              trigger: formRef.current,
              start: "top 85%",
            },
          }
        );
      }

      if (socialsRef.current) {
        gsap.fromTo(
          socialsRef.current.children,
          {
            opacity: 0,
            scale: 0,
          },
          {
            opacity: 1,
            scale: 1,
            duration: 0.5,
            stagger: 0.1,
            scrollTrigger: {
              trigger: socialsRef.current,
              start: "top 85%",
            },
          }
        );
      }
    }
  }, []);

  return (
    <section id="contact" ref={sectionRef} className="section-padding min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h2 ref={titleRef} className="text-4xl md:text-5xl font-bold mb-16 text-center">
          Get In Touch
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div ref={formRef}>
            <form className="space-y-6">
              <div>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" placeholder="Your Name" required />
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="your.email@example.com" required />
              </div>
              <div>
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              <a href="mailto:tony21360@iiitd.ac.in" className="block text-center">
                Send Message
              </a>
            </form>
          </div>
          <div className="flex flex-col justify-center">
            <div className="card-border rounded-xl p-8 mb-8">
              <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Email</p>
                  <a href="mailto:tony21360@iiitd.ac.in" className="text-gray-700 hover:text-purple-600 transition-colors">
                    tony21360@iiitd.ac.in
                  </a>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Phone</p>
                  <a href="tel:+919625718420" className="text-gray-700 hover:text-purple-600 transition-colors">
                    +91 9625718420
                  </a>
                </div>
              </div>
            </div>
            <div ref={socialsRef} className="flex gap-4 justify-center">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer socials icon"
                >
                  <img src={social.imgPath} alt={social.name} className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
