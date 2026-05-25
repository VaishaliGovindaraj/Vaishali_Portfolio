import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

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

export const Hero = () => {
  return (
    <motion.section
      id="home"
      className="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <div className="hero-container">
        <motion.div
          className="hero-content"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div className="hero-badge" variants={fadeInUp}>
            <span>Hello, I&apos;m Vaishali</span>
          </motion.div>
          <motion.h1
            className="glitch"
            variants={fadeInUp}
            whileHover={{ scale: 1.02 }}
          >
            Frontend developer with a QA mindset.
          </motion.h1>
          <motion.h2 className="hero-subtitle" variants={fadeInUp}>
            React, Next.js, TypeScript, and thoughtful user experience.
          </motion.h2>
          <motion.p className="hero-description" variants={fadeInUp}>
            I build responsive, reliable web experiences with a strong eye for
            quality. My QA background helps me design interfaces that are
            polished, testable, and easy for people to use.
          </motion.p>

          <motion.div className="cta-buttons" variants={staggerContainer}>
            <motion.a
              href="#projects"
              className="cta-primary"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
            >
              View My Work
            </motion.a>
            <motion.a
              href="#contact"
              className="cta-secondary"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
            >
              Contact Me
            </motion.a>
          </motion.div>
          <motion.div className="social-links" variants={staggerContainer}>
            <motion.a
              href="https://github.com/VaishaliGovindaraj"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
              title="GitHub"
            >
              <Github size={24} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/vaishali-govindaraj/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
              title="LinkedIn"
            >
              <Linkedin size={24} />
            </motion.a>
            <motion.a href="#contact" aria-label="Contact Vaishali" title="Contact">
              <Mail size={24} />
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-image-container"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="code-display">
            <pre>
              <code>{`const vaishali = {
  path: "QA Engineer turned Frontend Developer",
  role: "Frontend Developer",
  stack: {
    languages: ["JavaScript", "TypeScript", "SQL"],
    frameworks: ["React", "Next.js", "TailwindCSS", "Supabase"],
  },
  strengths: [
    "detail-oriented problem solver",
    "quality-focused developer",
    "UI/UX enthusiast",
    "continuous learner",
  ],
  mission:
    "Turn ideas into interfaces people trust",
  availability: "Open for LIA / internship opportunities"
};`}</code>
            </pre>
          </div>

          <motion.div
            className="floating-card"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="card-content">
              <span className="card-icon">01</span>
              <span className="card-text">
                Building thoughtful products with a tester&apos;s precision.
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};
