import { motion } from "framer-motion";

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
      <motion.h2
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        My Projects
      </motion.h2>
      <motion.div
        className="project-grid"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >

        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
          onClick={() => window.open("https://social-media-dashboard.vercel.app", "_blank")}
          style={{ cursor: "pointer" }}
        >

          {/* Project 1 */}
          <motion.div
            className="project-image"
            style={{
              backgroundImage: "url('/flavorvault.png')",
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          />
          <h3>Flavor Vault</h3>
          <p>
         A modern recipe discovery app using React Context and an external meal API. It lets users browse meals, view ingredients, and save favorites — perfect for cooking inspiration.
         For login - User1, User2, User3
          </p>
          <div className="project-tech">
            <span>React</span>
            <span>Node.js</span>
            <span>MongoDB</span>
          </div>
        </motion.div>

          <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
          onClick={() => window.open("https://social-media-dashboard.vercel.app", "_blank")}
          style={{ cursor: "pointer" }}
        >
          <motion.div
            className="project-image"
            style={{
              backgroundImage: "url('/projects/social-media.png')",
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          />
          <h3>Social Media Dashboard</h3>
          <p>
            A comprehensive dashboard for social media analytics, scheduling,
            and engagement tracking.
          </p>
          <div className="project-tech">
            <span>React</span>
            <span>Node.js</span>
            <span>MongoDB</span>
          </div>
        </motion.div>

        {/* --- Project 1 --- */}
        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
          onClick={() => window.open("https://4pic1word.vercel.app/", "_blank")}
          style={{ cursor: "pointer" }}
        >
          <motion.div
            className="project-image"
            style={{ backgroundImage: "url('/4pic1word_game.png')" }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          />
          <h3>4 Pic 1 Word Game</h3>
          <p>
            A fun guessing game where you deduce the word based on four related
            pictures — built with HTML, CSS, and JavaScript.
          </p>
          <div className="project-tech">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
          </div>
        </motion.div>

        {/* --- Project 2 --- */}
        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
          onClick={() => window.open("https://social-media-dashboard.vercel.app", "_blank")}
          style={{ cursor: "pointer" }}
        >
          <motion.div
            className="project-image"
            style={{
              backgroundImage: "url('/projects/social-media.png')",
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          />
          <h3>Social Media Dashboard</h3>
          <p>
            A comprehensive dashboard for social media analytics, scheduling,
            and engagement tracking.
          </p>
          <div className="project-tech">
            <span>React</span>
            <span>Node.js</span>
            <span>MongoDB</span>
          </div>
        </motion.div>

        {/* --- Project 3 --- */}
        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
          onClick={() => window.open("https://productivity-timer.vercel.app", "_blank")}
          style={{ cursor: "pointer" }}
        >
          <motion.div
            className="project-image"
            style={{
              backgroundImage: "url('/projects/stopwatch.png')",
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          />
          <h3>Productivity Timer</h3>
          <p>
            A sleek productivity timer app with customizable sessions, stats,
            and dark mode support.
          </p>
          <div className="project-tech">
            <span>React</span>
            <span>TypeScript</span>
            <span>TailwindCSS</span>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};
