"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: { staggerChildren: 0.1 },
  },
};

export const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);

  const projects = [
    {
      title: "AI SaaS Platform",
      description:
        "A modern SaaS platform built with Next.js and OpenAI integration, featuring real-time AI-powered content generation and analytics.",
      image: "/projects/ai-saas.png",
      tech: ["Next.js", "OpenAI", "TailwindCSS"],
      videoUrl: "/videos/ai-saas.mp4",
    },
    {
      title: "Social Media Dashboard",
      description:
        "A comprehensive social media management dashboard with analytics, scheduling, and engagement tracking features.",
      image: "/projects/social-media.png",
      tech: ["React", "Node.js", "MongoDB"],
      videoUrl: "/videos/social-dashboard.mp4",
    },
    {
      title: "Productivity Timer",
      description:
        "A sleek productivity timer application with customizable work sessions, statistics tracking, and dark mode support.",
      image: "/projects/stopwatch.png",
      tech: ["React", "TypeScript", "TailwindCSS"],
      videoUrl: "/videos/productivity-timer.mp4",
    },
  ];

  return (
    <motion.section
      id="projects"
      className="projects px-6 py-12"
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
        className="text-3xl font-bold text-center mb-8"
      >
        My Projects
      </motion.h2>

      <motion.div
        className="project-grid grid gap-8 md:grid-cols-3"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        {projects.map((project, i) => (
          <motion.div
            key={i}
            className="project-card bg-white rounded-2xl shadow-lg overflow-hidden max-w-[100] p-4 text-center cursor-pointer"
            variants={fadeInUp}
            whileHover={{ y: -10, transition: { duration: 0.2 } }}
            onClick={() => setActiveProject(project)}
          >
            {/* Image */}
            <div className="relative w-full h-48 overflow-hidden rounded-xl">
              <motion.div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-200"
                style={{ backgroundImage: `url(${project.image})`, pointerEvents: "none" }}
                whileHover={{ scale: 1.05 }}
              />
            </div>

            {/* Title */}
            <h3 className="mt-4 text-xl font-semibold hover:text-blue-500 transition-colors relative z-10">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 mt-2">{project.description}</p>

            {/* Tech stack */}
            <div className="project-tech flex justify-center gap-3 mt-3 text-sm text-gray-500 flex-wrap">
              {project.tech.map((t, j) => (
                <span key={j} className="bg-gray-100 px-2 py-1 rounded">{t}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>


  <AnimatePresence>
  {activeProject && (
    <motion.div
      className="fixed inset-0 "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setActiveProject(null)}
    >
      <motion.div
        className="relative bg-white rounded-2xl shadow-2xl mx-auto my-10 overflow-hidden"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.2 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b">
          <h3 className="text-xl font-semibold truncate">{activeProject.title}</h3>
          <button
            onClick={() => setActiveProject(null)}
            className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold rounded-full w-8 h-8 flex items-center justify-center transition"
          >
            ×
          </button>
        </div>

        {/* Video */}
        <div className="w-full">
          <video
            src={activeProject.videoUrl}
            controls
            autoPlay
            className="w-full"
          />
        </div>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>



    </motion.section>
  );
};
