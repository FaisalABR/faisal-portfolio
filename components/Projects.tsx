'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ChevronDown, ChevronUp } from 'lucide-react';
import styles from './Projects.module.css';

const projects = [
  {
    id: 9,
    title: "SAM AI Surveillance System",
    year: "April 2026",
    description: "An AI-powered surveillance system for monitoring and analyzing security footage in real-time.",
    stack: ["Python", "ExpressJS", "PostgreSQL", "MQTT"],
    link: "https://vms.samtek.id/login",
    github: null,
    image: "/sam-ai.webp"
  },
  {
    id: 1,
    title: "Meiwa Mold Dev System",
    year: "Nov 2025",
    description: "An ERP system for streamlining end-to-end molding development process.",
    stack: ["NestJS", "Prisma", "React", "MaterialUI", "GCP"],
    link: "https://meiwa-mold-staging.cloud-ace.id/login",
    github: null,
    image: "/meiwa.webp"
  },
   {
    id: 2,
    title: "Aciro Inventory Management System",
    year: "Nov 2025",
    description: "A web app for managing inventory warehouse for medium sized retail store.",
    stack: ["Laravel", "ReactJS", "AntDesign", "Inertia"],
    link: null,
    github: 'https://github.com/FaisalABR/aciro-inventory-management',
    image: "/aciro.webp"
  },
  {
    id: 3,
    title: "DOT Revamp",
    year: "Feb 2025",
    description: "Revamping DOT’s web company profile with fresh and new looks.",
    stack: ["NextJS", "Strapi", "Tailwind", "Redux", "FramerMotion"],
    link: "https://www.dot.co.id/",
    github: null,
    image: "/dot.webp"
  },
  {
    id: 4,
    title: "Mind ID Portal Recruitment",
    year: "Feb 2025",
    description: "A web app recruitment system for PT MIND ID and its subsidiaries to streamline hiring.",
    stack: ["NestJS", "ReactJS", "AntDesign", "Inertia"],
    link: "https://career.mind.id/?sort=latest",
    github: null,
    image: "/mindid.webp"
  },
   {
    id: 5,
    title: "Mini Soccer Microservices",
    year: "May 2024",
    description: "A web app for mini soccer field booking system in Go using microservices architecture.",
    stack: ["Golang", "NextJS", "GCP", "PostgreSQL", "Redis", "Jenkins", "Docker"],
    link: null,
    github: "https://github.com/FaisalABR/order-service",
    image: "https://faisal-portfolio-nu.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmini-soccer.5c05c848.png&w=1920&q=75"
  },
  {
    id: 6,
    title: "DOT Project Monitoring",
    year: "Sep 2024",
    description: "A web app dedicated to managing DOT’s projects.",
    stack: ["NestJS", "ReactJS", "AntDesign", "PostgreSQL"],
    link: "https://project-monitoring-dev.dot.co.id/auth/login",
    github: null,
    image: "https://faisal-portfolio-nu.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmonitoring.3426123d.png&w=1920&q=75"
  },
  {
    id: 7,
    title: "TRUS Landing Page",
    year: "Dec 2023",
    description: "A landing page for TRUS company.",
    stack: ["ReactJS", "Tailwind"],
    link: " https://trus.co.id/",
    github: null,
    image: "/trus.webp"
  },
  {
    id: 8,
    title: "Eduwork V2",
    year: "2024",
    description: "A new version of web educational non-formal from eduwork.",
    stack: ["Javascript", "Alpine", "Laravel"],
    link: "https://eduwork.id/",
    github: null,
    image: "/eduwork.webp"
  }
];

export default function Projects() {
  const [isExpanded, setIsExpanded] = useState(false);
  const displayedProjects = isExpanded ? projects : projects.slice(0, 8);

  return (
    <section id="projects" className={styles.section}>
      <div className={styles.container}>
        <motion.h2 
          className={styles.title}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          Projects
        </motion.h2>

        <motion.div layout className={styles.grid}>
          <AnimatePresence>
            {displayedProjects.map((project, index) => (
              <motion.div 
                layout
                key={project.id}
                className={styles.card}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -10 }}
              >
                <div className={styles.imageWrapper}>
                  <img src={project.image} alt={project.title} className={styles.image} loading='lazy'
                  fetchPriority='low'
                  />
                  <div className={styles.overlay} />
                </div>
                <div className={styles.cardContent}>
                  <div className={styles.header}>
                    <h3 className={styles.projectTitle}>{project.title}</h3>
                    <span className={styles.year}>{project.year}</span>
                  </div>
                  <p className={styles.description}>{project.description}</p>
                  <div className={styles.stack}>
                    {project.stack.map(tech => (
                      <span key={tech} className={styles.tech}>{tech}</span>
                    ))}
                  </div>
                  <div className={styles.links}>
                    {
                      project.link && (
                        <a href={project.link} className={styles.link}>
                          <ExternalLink size={18} /> Live Demo
                        </a>
                      )
                    } 
                    {
                      project.github && (
                        <a href={project.github} className={styles.link}>
                          <Github size={18} /> Code
                        </a>
                      )
                    }
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        
      </div>
    </section>
  );
}
