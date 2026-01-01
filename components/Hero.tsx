'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, File, FileText } from 'lucide-react';
import styles from './Hero.module.css';

const Typewriter = () => {
  const phrases = [
    "Building robust solutions, one challenge at a time.",
    "Eager to learn, ready to contribute.",
    "Turning complexity into clean code."
  ];
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % phrases.length;
      const fullText = phrases[i];

      setText(isDeleting 
        ? fullText.substring(0, text.length - 1) 
        : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 30 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, phrases]);

  return (
    <div className={styles.typewriter}>
      <span className={styles.commandPrompt}>&gt;</span>
      <span className={styles.typewriterText}>{text}</span>
      <span className={styles.cursor}>|</span>
    </div>
  );
};

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const yText = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const yImage = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const scaleImage = useTransform(scrollYProgress, [0, 1], [1, 1.1]); // Subtle zoom on scroll

  return (
    <section id="hero" className={styles.hero} ref={containerRef}>
      <div className={styles.container}>

        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className={styles.leftContent}
        >
          <div className={styles.badge}>
            <span className={styles.dot}></span> Available for Work
          </div>
          <h2 className={styles.mainHeading}>
            Software Engineer
          </h2>
        </motion.div>

        {/* Right Content */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={styles.rightContent}
        >
          <Typewriter />
          <p className={styles.bio}>
            Hi, I'm Faisal Abu Bakar Riza - a <span className={styles.highlight}>Software Engineer</span> passionate about creating seamless digital experiences that connect and convert.
          </p>
          <a href="https://drive.google.com/file/d/1nwzwPoOfiF23zOpp5-_AWSQ8aB61O7N8/view?usp=sharing" className={styles.ctaButton}>
            <File size={20} />
            Resume
          </a>
        </motion.div>

        {/* Center Stage */}
        <div className={styles.centerStage}>
          {/* Back Layer (Solid) */}
          <motion.h1 
            className={styles.bigName}
            initial={{ scale: 1.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            style={{ y: yText }}
          >
            FAISAL
          </motion.h1>

          <div className={styles.imageContainer}>
            <motion.div 
              className={styles.imageWrapper}
              initial={{ scale: 1.5, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
              style={{ y: yImage }}
            >
              <img 
                src="/faisal-biru-3.webp" 
                alt="Faisal Abu Bakar Riza" 
                className={styles.profileImage} 
                fetchPriority="high"
              />
            </motion.div>

            <div className={styles.orbContainer}>
              {[
                { icon: "https://cdn.simpleicons.org/laravel/FF2D20", name: "Laravel" },
                { icon: "https://cdn.simpleicons.org/go/00ADD8", name: "Go" },
                { icon: "https://cdn.simpleicons.org/nodedotjs/339933", name: "Node.js" }
              ].map((tech, index) => (
                <div key={index} className={styles.orb}>
                  <div className={styles.cube}>
                    <div className={styles.face + ' ' + styles.front}>
                      <img src={tech.icon} alt={tech.name} className={styles.orbIcon} />
                    </div>
                    <div className={styles.face + ' ' + styles.back}>
                      <img src={tech.icon} alt={tech.name} className={styles.orbIcon} />
                    </div>
                    <div className={styles.face + ' ' + styles.right}>
                      <img src={tech.icon} alt={tech.name} className={styles.orbIcon} />
                    </div>
                    <div className={styles.face + ' ' + styles.left}>
                      <img src={tech.icon} alt={tech.name} className={styles.orbIcon} />
                    </div>
                    <div className={styles.face + ' ' + styles.top}></div>
                    <div className={styles.face + ' ' + styles.bottom}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Front Layer (Outline) */}
          <motion.h3 
            className={`${styles.bigName} ${styles.bigNameFront}`}
            initial={{ scale: 1.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            style={{ y: yText }}
            aria-hidden="true"
          >
            FAISAL
          </motion.h3>
        </div>
        
        <div className={styles.backgroundGlow} />
      </div>
    </section>
  );
}
