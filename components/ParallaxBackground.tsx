'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './ParallaxBackground.module.css';

export default function ParallaxBackground() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 500]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -45]);

  return (
    <div ref={ref} className={styles.container}>
      <motion.div 
        style={{ y: y1, rotate: rotate1 }} 
        className={`${styles.shape} ${styles.shape1}`} 
      />
      <motion.div 
        style={{ y: y2, rotate: rotate2 }} 
        className={`${styles.shape} ${styles.shape2}`} 
      />
      <motion.div 
        style={{ y: y3 }} 
        className={`${styles.shape} ${styles.shape3}`} 
      />
      <div className={styles.grid} />
    </div>
  );
}
