'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import styles from './Experience.module.css';

const experiences = [
  {
    id: 1,
    role: "Software Engineer",
    company: "PT Safanah Alvan Maksima",
    logo: "/logo/sam.jpeg",
    year: "Feb 2026 - April 2026",
    description: "Successfully accelerated setup, deployment, and incident response times by up to 80% through CI/CD pipeline automation and real-time monitoring. Additionally, optimized system performance by reducing data latency to under 1 second using MQTT communication, while ensuring near-zero data loss through a robust Point-in-Time Recovery strategy."
  },
  {
    id: 2,
    role: "Fullstack Engineer",
    company: "Cloud Ace Indonesia",
    logo: "/logo/cloud_ace.jpeg",
    year: "Jul 2025 - Nov 2025",
    description: "Engineered full-stack ERP systems using NestJS and React, integrating machine learning and GCP for scalable factory operations. Managed the end-to-end lifecycle—from developing real-time production modules to conducting client-focused testing and feedback refinement.",
  },
  {
    id: 3,
    role: "Frontend Engineer",
    company: "DOT Indonesia",
    logo: "/logo/dot.jpeg",
    year: "Aug 2024 - Feb 2025",
    description: "Contributed to 3 large and mid-scale projects using React and Next.js, implementing an Atomic Design system and advanced styling tools like Tailwind and Ant Design. Collaborated within an Agile Scrum environment to accelerate feature delivery through iterative sprints and continuous feedback."
  },
  {
    id: 4,
    role: "Programmer",
    company: "Eduwork",
    logo: "/logo/eduwork.jpeg",
    year: "Mar 2024 - Jun 2024",
    description: "Delivered responsive UIs for 7 projects using React and JavaScript, leveraging Redux for scalable state management and Agile (Scrum) practices to boost team productivity by 20%.",
  },
  {
    id: 5,
    role: "Frontend Engineer",
    company: "Torche",
    logo: "/logo/torche.jpeg",
    year: "Mar 2023 - Jun 2023",
    description: "Developed a reusable React component library that reduced development time by 20%, while collaborating with UX/UI teams to optimize interfaces and driving the adoption of innovative technologies to streamline development workflows."
  }
];

export default function Experience() {
  return (
    <section id="experience" className={styles.section}>
      <div className={styles.container}>
        <motion.h2 
          className={styles.title}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          Experience
        </motion.h2>

        <div className={styles.timeline}>
          {experiences.map((exp, index) => (
            <motion.div 
              key={exp.id}
              className={styles.card}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className={styles.iconWrapper}>
                <Briefcase size={20} className={styles.icon} />
                <div className={styles.line} />
              </div>
              <div className={styles.content}>
                <span className={styles.year}>{exp.year}</span>
                <div className={styles.header}>
                  <img src={exp.logo} alt={exp.company} className={styles.logo} fetchPriority='low' loading='lazy'/>
                  <div>
                    <h3 className={styles.role}>{exp.role}</h3>
                    <h4 className={styles.company}>{exp.company}</h4>
                  </div>
                </div>
                <p className={styles.description}>{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className={styles.backgroundGlow} />
    </section>
  );
}
