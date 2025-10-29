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
          onClick={() => window.open("https://context-meal-db.vercel.app/", "_blank")}
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
            <span>Next js</span>
            <span>Typescript</span>
            <span>Context API</span>
          </div>
        </motion.div>

            {/* Project 2 */}
          <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
          onClick={() => window.open("https://shipshow-web.vercel.app/", "_blank")}
          style={{ cursor: "pointer" }}
        >
          <motion.div
            className="project-image"
            style={{
              backgroundImage: "url('/absoluteshipshow.png')",
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          />
          <h3>Absolute ShipShow</h3>
          <p>
           Absolute Shipshow is a fast-paced, chaotic co-op pirate combat game where you scavenge weapons, fight enemies, and claim treasure with friends. Simple controls and creative gameplay make every battle unpredictable and wildly fun.
          </p>
          <div className="project-tech">
            <span>React</span>
            <span>Next js</span>
            <span>Tailwind</span>
            <span>Typescript</span>
          </div>
        </motion.div>

        {/* --- Project 3 --- */}
        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
          onClick={() => window.open("https://enginelight-web.vercel.app/", "_blank")}
          style={{ cursor: "pointer" }}
        >
          <motion.div
            className="project-image"
            style={{
              backgroundImage: "url('/enginelight.png')",
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          />
          <h3>Engine Light</h3>
          <p>
            A website developed for a game which explains how in a post-apocalyptic world overrun by AI and machines, one survivor in Sweden rises from loss to seek revenge. Armed with a battered car, he embarks on a desperate mission to fight back against robotic overlords.
          </p>
          <div className="project-tech">
            <span>React</span>
            <span>Next js</span>
            <span>Tailwind</span>
            <span>Typescript</span>
          </div>
        </motion.div>

        {/* --- Project 4 --- */}
        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
          onClick={() => window.open("https://react-spa-travel.vercel.app/", "_blank")}
          style={{ cursor: "pointer" }}
        >
          <motion.div
            className="project-image"
            style={{
              backgroundImage: "url('/nomadnest.png')",
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          />
          <h3>Nomad Nest</h3>
          <p>
A dynamic single-page travel app built with React, showcasing beautiful destinations with smooth navigation and responsive design. It offers seamless exploration of travel spots and attractions through an elegant, user-friendly interface.          </p>
          <div className="project-tech">
            <span>React</span>
            <span>Javascript</span>
            <span>CSS</span>
          </div>
        </motion.div>

        {/* --- Project 5 --- */}
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

        

      </motion.div>
    </motion.section>
  );
};
