import { motion } from "framer-motion";
import { skillsByCategory, skillLogos } from "../assets/assets/constants";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.05 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      staggerChildren: 0.03,
      delayChildren: 0.1,
    },
  },
};

const tagVariants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3 },
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

const Skills = () => (
  <section id="skills" className="section-padding">
    <div className="content-max content-max-wide">
      <motion.h2
        className="section-title"
        variants={titleVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        Skills
      </motion.h2>
      <motion.div
        className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 min-w-0"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
      >
        {skillsByCategory.map((cat, i) => (
          <motion.div
            key={i}
            variants={cardVariants}
            className="card-border p-4 sm:p-5 min-w-0"
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
          >
            <h3 className="text-sm font-semibold text-[var(--gh-accent)] mb-3">{cat.category}</h3>
            <div className="flex flex-wrap gap-2">
              {cat.items.map((item, j) => {
                const logo = skillLogos[item];
                return (
                  <motion.span
                    key={j}
                    className="skill-tag inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs bg-[var(--gh-bg)] border border-[var(--gh-border)] rounded-md text-[var(--gh-text)]"
                    variants={tagVariants}
                  >
                    {logo ? (
                      <img src={logo} alt="" className="w-4 h-4 object-contain flex-shrink-0" />
                    ) : null}
                    <span>{item}</span>
                  </motion.span>
                );
              })}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default Skills;
