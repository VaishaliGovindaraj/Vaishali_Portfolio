import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const projects = [
  {
    title: "Flavor Vault",
    url: "https://context-meal-db.vercel.app/",
    image: "/flavorvault.png",
    description:
      "A recipe discovery app using React Context and an external meal API. Users can browse meals, review ingredients, and save favorites for cooking inspiration.",
    tech: ["React", "Next.js", "TypeScript", "Context API"],
  },
  {
    title: "Absolute ShipShow",
    url: "https://shipshow-web.vercel.app/",
    image: "/absoluteshipshow.png",
    description:
      "A fast-paced co-op pirate combat game site with playful presentation, responsive pages, and focused calls to action for players.",
    tech: ["React", "Next.js", "Tailwind", "TypeScript"],
  },
  {
    title: "Engine Light",
    url: "https://enginelight-web.vercel.app/",
    image: "/enginelight.png",
    description:
      "A cinematic game website for a post-apocalyptic story set in Sweden, designed to present atmosphere, world-building, and gameplay clearly.",
    tech: ["React", "Next.js", "Tailwind", "TypeScript"],
  },
  {
    title: "Nomad Nest",
    url: "https://react-spa-travel.vercel.app/",
    image: "/nomadnest.png",
    description:
      "A single-page travel app with smooth navigation, responsive destination views, and a clean interface for exploring places and attractions.",
    tech: ["React", "JavaScript", "CSS"],
  },
  {
    title: "4 Pic 1 Word Game",
    url: "https://4pic1word.vercel.app/",
    image: "/4pic1word_game.png",
    description:
      "A browser guessing game where players infer the hidden word from four related pictures, built with focused HTML, CSS, and JavaScript.",
    tech: ["HTML", "CSS", "JavaScript"],
  },
];

export const Projects = () => {
  return (
    <motion.section
      id="projects"
      className="projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="section-heading"
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <span>Selected work</span>
        <h2>Featured Projects</h2>
      </motion.div>

      <motion.div
        className="project-grid"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        {projects.map((project) => (
          <motion.a
            className="project-card"
            href={project.url}
            key={project.title}
            rel="noreferrer"
            target="_blank"
            variants={fadeInUp}
            whileHover={{ y: -8, transition: { duration: 0.2 } }}
          >
            <motion.div
              className="project-image"
              style={{ backgroundImage: `url('${project.image}')` }}
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.2 }}
            />
            <div className="project-body">
              <div className="project-title-row">
                <h3>{project.title}</h3>
                <ExternalLink aria-hidden="true" size={18} />
              </div>
              <p>{project.description}</p>
              <div className="project-tech">
                {project.tech.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
          </motion.a>
        ))}
      </motion.div>
    </motion.section>
  );
};
