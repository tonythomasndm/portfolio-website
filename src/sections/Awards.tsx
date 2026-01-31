import { motion } from "framer-motion";
import { awards } from "../assets/assets/constants";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

const itemVariants = (i: number) => ({
  hidden: { opacity: 0, x: i % 2 === 0 ? -36 : 36 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5,  },
  },
});

const titleVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6,  },
  },
};

const Awards = () => (
  <section id="awards" className="section-padding">
    <div className="content-max">
      <motion.h2
        className="section-title"
        variants={titleVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        Awards
      </motion.h2>
      <motion.div
        className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 min-w-0"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
      >
        {awards.map((a, i) => (
          <motion.div
            key={i}
            variants={itemVariants(i)}
            className="card-border p-4 sm:p-5 min-w-0"
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
          >
            <h3 className="font-semibold text-[var(--gh-text)]">{a.title}</h3>
            <p className="text-sm text-[var(--gh-text-muted)] mt-1">{a.desc}</p>
            <p className="text-xs text-[var(--gh-accent)] mt-2">{a.date}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default Awards;
