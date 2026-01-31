import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { socialLinks, formspreeEndpoint, resumeUrl } from "../assets/assets/constants";

const titleVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const Contact = () => {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;

    const formData = new FormData(form);
    const name = (formData.get("name") as string) || "Someone";
    formData.set("_subject", `Portfolio Contact from ${name}`);

    setStatus("sending");

    try {
      const res = await fetch(formspreeEndpoint, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="section-padding">
      <div className="content-max">
        <motion.h2
          className="section-title"
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          Contact
        </motion.h2>
        <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 min-w-0">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
          >
            <form ref={formRef} className="space-y-4" onSubmit={handleSubmit}>
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
                <textarea id="message" name="message" rows={4} placeholder="Your message" required />
              </div>
              <button
                type="submit"
                disabled={status === "sending"}
                className="block w-full py-3 text-center font-medium text-[var(--gh-bg)] bg-[var(--gh-accent)] rounded-lg hover:bg-[var(--gh-accent-hover)] transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === "sending" ? "Sending..." : status === "success" ? "Sent!" : "Send Message"}
              </button>
              {status === "success" && (
                <p className="text-sm text-green-400">Thanks! I&apos;ll get back to you soon.</p>
              )}
              {status === "error" && (
                <p className="text-sm text-red-400">
                  Something went wrong. Please email me directly at ttonythomasndm@gmail.com
                </p>
              )}
            </form>
          </motion.div>
          <motion.div
            className="card-border p-5 sm:p-6 min-w-0"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
          >
            <h3 className="font-semibold text-[var(--gh-text)] mb-4">Get in touch</h3>
            <div className="space-y-4">
              <div>
                <p className="text-xs text-[var(--gh-text-muted)] uppercase tracking-wider mb-1">Email</p>
                <a href="mailto:ttonythomasndm@gmail.com" className="text-[var(--gh-accent)] hover:underline text-sm">
                  ttonythomasndm@gmail.com
                </a>
              </div>
              <div>
                <p className="text-xs text-[var(--gh-text-muted)] uppercase tracking-wider mb-1">Phone</p>
                <a href="tel:9625718420" className="text-[var(--gh-accent)] hover:underline text-sm">
                  +91 9625718420
                </a>
              </div>
              <div>
                <p className="text-xs text-[var(--gh-text-muted)] uppercase tracking-wider mb-1">Resume</p>
                <a
                  href={resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-[var(--gh-accent)] border border-[var(--gh-accent)]/50 rounded-lg hover:bg-[var(--gh-accent)]/10 hover:border-[var(--gh-accent)] transition-colors"
                >
                  View Resume →
                </a>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-[var(--gh-border)]">
              <p className="text-xs text-[var(--gh-text-muted)] mb-2">Connect</p>
              <div className="flex gap-2">
                {socialLinks.map((s, i) => (
                  <a
                    key={i}
                    href={s.url}
                    target={s.name === "email" ? undefined : "_blank"}
                    rel={s.name === "email" ? undefined : "noopener noreferrer"}
                    className="p-2 rounded-lg border border-[var(--gh-border)] hover:border-[var(--gh-accent)]/50 hover:text-[var(--gh-accent)] transition-colors"
                  >
                    <img src={s.imgPath} alt={s.name} className="size-5" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
