import { motion } from "framer-motion";
import { projects } from "../assets/assets/constants";
import type { Project } from "../assets/assets/constants";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
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

const Projects = () => (
  <section id="projects" className="section-padding">
    <div className="content-max content-max-wide">
      <motion.h2
        className="section-title"
        variants={titleVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        Projects
      </motion.h2>
      <motion.div
        className="grid gap-4 sm:gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
      >
        {projects.map((p: Project, i: number) => (
          <motion.div
            key={i}
            variants={cardVariants}
            className="card-border overflow-hidden min-w-0"
            whileHover={{ y: -6, transition: { duration: 0.25 } }}
          >
            <div className="h-32 sm:h-36 bg-[var(--gh-border-muted)]">
              <img src={p.imgPath} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="p-4 sm:p-5">
              <h3 className="font-semibold text-[var(--gh-text)]">{p.title}</h3>
              <p className="text-xs text-[var(--gh-text-muted)] mt-1">{p.tech}</p>
              <p className="text-sm text-[var(--gh-text-muted)] mt-2">{p.description}</p>
              <ul className="mt-3 space-y-1">
                {p.features.slice(0, 2).map((f, j) => (
                  <li key={j} className="text-xs text-[var(--gh-text)] flex gap-2">
                    <span className="text-[var(--gh-accent)]">•</span>
                    {f}
                  </li>
                ))}
              </ul>
              {(p.github || p.website) && (
                <a
                  href={p.github || p.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 text-sm font-medium text-[var(--gh-accent)] hover:underline"
                >
                  {p.github ? "GitHub →" : "View →"}
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default Projects;
