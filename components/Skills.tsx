'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './Skills.module.css';

// REVISED PLAN: Use https://cdn.simpleicons.org/
const skills = [
  { name: "React", icon: "https://cdn.simpleicons.org/react/00f0ff" },
  { name: 'Golang', icon: 'https://cdn.simpleicons.org/go/00ADD8' },
  {name: 'Laravel', icon: 'https://cdn.simpleicons.org/laravel/FF6C37'},
  { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/ffffff" },
  {name: 'NestJS', icon: 'https://cdn.simpleicons.org/nestjs/E92747'},
  { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript/3178C6" },
  { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/339933" },
  {name: 'Google Cloud', icon: 'https://cdn.simpleicons.org/googlecloud/4285F4'},
  {name: 'Docker', icon: 'https://cdn.simpleicons.org/docker/2496ED'},
  {name: 'Jenkins', icon: 'https://cdn.simpleicons.org/jenkins/0055FF'},
  {name: 'Redis', icon: 'https://cdn.simpleicons.org/redis/D82C20'},
  { name: "Postman", icon: "https://cdn.simpleicons.org/postman/FF6C37" },
  { name: "Github", icon: "https://cdn.simpleicons.org/github/121018" },
  { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
  { name: "AntDesign", icon: "https://cdn.simpleicons.org/antdesign/0055FF" },
  { name: "MaterialUI", icon: "https://cdn.simpleicons.org/mui/0055FF" },
  { name: "Framer Motion", icon: "https://cdn.simpleicons.org/framer/0055FF" },
  { name: "SQL", icon: "https://cdn.simpleicons.org/postgresql/4169E1" }, // Using Postgres as generic SQL representation or just generic database icon
  { name: "HTML5", icon: "https://cdn.simpleicons.org/html5/E34F26" },
  { name: "CSS3", icon: "https://cdn.simpleicons.org/css/1572B6" },
];

interface Star {
  id: number;
  top: string;
  left: string;
  size: string;
  delay: string;
  duration: string;
}

export default function Skills() {
  const containerRef = useRef(null);
  const [stars, setStars] = useState<Star[]>([]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  useEffect(() => {
    // Generate random stars only on client side
    const generatedStars = Array.from({ length: 50 }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: `${Math.random() * 2 + 1}px`, // 1px to 3px
      delay: `${Math.random() * 5}s`,
      duration: `${Math.random() * 3 + 2}s`, // 2s to 5s
    }));
    setStars(generatedStars);
  }, []);

  return (
    <section id="skills" className={styles.section} ref={containerRef}>
      <motion.div 
        className={styles.parallaxBackground}
        style={{ y: yBg }}
      >
        {stars.map((star) => (
          <div 
            key={star.id}
            className={styles.star}
            style={{
              top: star.top,
              left: star.left,
              width: star.size,
              height: star.size,
              '--delay': star.delay,
              '--duration': star.duration,
            } as React.CSSProperties}
          />
        ))}
      </motion.div>
      <div className={styles.overlay} />
      
      <div className={styles.container}>
        <motion.h2 
          className={styles.title}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          Skills
        </motion.h2>
        
        <div className={styles.grid}>
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className={styles.card}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05, 
                borderColor: 'rgba(0, 240, 255, 0.5)',
                backgroundColor: 'rgba(0, 240, 255, 0.1)',
                boxShadow: '0 0 15px rgba(0, 240, 255, 0.2)',
                color: '#ffffff'
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <img src={skill.icon} alt={skill.name} className={styles.icon} loading='lazy' fetchPriority='low' />
              <span>{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
