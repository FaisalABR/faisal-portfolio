'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import styles from './Experience.module.css';

const experiences = [
  {
    id: 1,
    role: "Fullstack Engineer",
    company: "Cloud Ace Indonesia",
    logo: "https://media.licdn.com/dms/image/v2/C510BAQGof1e7qGWoEA/company-logo_100_100/company-logo_100_100/0/1630626255281/cloud_ace_logo?e=1767830400&v=beta&t=gh1ukJdbZFEbytTcMZrDsfW3APjFJNnGFY4z3CwAvF8",
    year: "Jul 2025 - Nov 2025",
    description: "Engineered full-stack ERP systems using NestJS and React, integrating machine learning and GCP for scalable factory operations. Managed the end-to-end lifecycle—from developing real-time production modules to conducting client-focused testing and feedback refinement.",
  },
  {
    id: 2,
    role: "Frontend Engineer",
    company: "DOT Indonesia",
    logo: "https://media.licdn.com/dms/image/v2/C510BAQGsUwLlWag9yw/company-logo_100_100/company-logo_100_100/0/1631408920140/dot_indonesia_logo?e=1767830400&v=beta&t=SvgEZKx36PYoRGv4L6kwQsm43-erYoyN2ETCzyyT0VI",
    year: "Aug 2024 - Feb 2025",
    description: "Contributed to 3 large and mid-scale projects using React and Next.js, implementing an Atomic Design system and advanced styling tools like Tailwind and Ant Design. Collaborated within an Agile Scrum environment to accelerate feature delivery through iterative sprints and continuous feedback."
  },
  {
    id: 3,
    role: "Programmer",
    company: "Eduwork",
    logo: "https://media.licdn.com/dms/image/v2/D560BAQFlHotZc1i2yA/company-logo_100_100/B56Zc6YOpyG0AU-/0/1749031120016/eduwork_id_logo?e=1767830400&v=beta&t=bl1gqmGMR-iL3sJFgy2SeFcj_Fr23_95AO0IwZcOOzw",
    year: "Mar 2024 - Jun 2024",
    description: "Delivered responsive UIs for 7 projects using React and JavaScript, leveraging Redux for scalable state management and Agile (Scrum) practices to boost team productivity by 20%.",
  },
  {
    id: 4,
    role: "Frontend Engineer",
    company: "Torche",
    logo: "https://media.licdn.com/dms/image/v2/C560BAQHfriuisiPb2A/company-logo_200_200/company-logo_200_200/0/1649081016459?e=1767830400&v=beta&t=jGib7I6L9JOEdEg2-d5llFNWtW-jrVxtRJ1N1ukekyU",
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
