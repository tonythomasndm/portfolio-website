import { motion } from "framer-motion";
import { education } from "../assets/assets/constants";

const titleVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const About = () => (
  <section id="about" className="section-padding">
    <div className="content-max">
      <motion.h2
        className="section-title"
        variants={titleVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        About
      </motion.h2>
      <motion.p
        className="text-[var(--gh-text-muted)] text-center max-w-2xl mx-auto mb-10 leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        Associate Software Engineer at National Australia Bank. B.Tech in Computer Science and Design from IIIT Delhi.
        I build scalable systems with Spring Boot, React, and modern cloud tools—focusing on clean architecture and user impact.
      </motion.p>
      <motion.div
        className="card-border p-5 sm:p-6 max-w-md mx-auto"
        initial={{ opacity: 0, y: 24, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, delay: 0.15 }}
        whileHover={{ y: -4, transition: { duration: 0.2 } }}
      >
        <h3 className="text-sm font-semibold text-[var(--gh-accent)] mb-2">Education</h3>
        {education.map((edu, i) => (
          <div key={i}>
            <p className="font-medium text-[var(--gh-text)]">{edu.institution}</p>
            <p className="text-sm text-[var(--gh-text-muted)]">{edu.degree}</p>
            <p className="text-sm text-[var(--gh-text-muted)]">{edu.period} · {edu.grade}</p>
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default About;
