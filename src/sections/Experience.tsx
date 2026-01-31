import { useRef } from "react";
import { motion } from "framer-motion";
import { expCards } from "../assets/assets/constants";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: (i: number) => ({
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: i * 0.05 },
  }),
};

const itemVariants = {
  hidden: { opacity: 0, x: -24, y: 16 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const titleVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const Experience = () => {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section id="experience" ref={sectionRef} className="section-padding">
      <div className="content-max">
        <motion.h2
          className="section-title"
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          Experience
        </motion.h2>
        <div className="relative pl-10 sm:pl-12 md:pl-14">
          <div className="timeline-wrapper">
            <div className="timeline" />
          </div>
          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            {expCards.map((exp, i) => (
              <motion.div key={i} variants={itemVariants} className="relative">
                <div className="timeline-logo">
                  <img src={exp.logoPath} alt="" />
                </div>
                <motion.div
                  className="card-border p-4 sm:p-5 md:p-6"
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-lg md:text-xl font-semibold text-[var(--gh-text)]">{exp.title}</h3>
                      <p className="text-[var(--gh-text-muted)] text-sm">{exp.company} · {exp.location}</p>
                    </div>
                    <p className="text-sm text-[var(--gh-text-muted)] shrink-0">{exp.date}</p>
                  </div>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((r, j) => (
                      <li key={j} className="flex gap-2 text-sm text-[var(--gh-text)]">
                        <span className="text-[var(--gh-accent)] mt-0.5 flex-shrink-0">▸</span>
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
