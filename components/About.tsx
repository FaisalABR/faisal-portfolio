'use client';

import React, { useEffect, useRef } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import styles from './About.module.css';

interface CounterProps {
  value: number;
  suffix: string;
  formatter?: (value: number) => string;
}

function Counter({ value, suffix, formatter }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView && ref.current) {
      const controls = animate(0, value, {
        duration: 2,
        ease: "easeOut",
        onUpdate: (latest) => {
          if (ref.current) {
            const formattedValue = formatter ? formatter(latest) : Math.floor(latest).toString();
            ref.current.textContent = formattedValue + suffix;
          }
        }
      });
      return () => controls.stop();
    }
  }, [isInView, value, suffix, formatter]);

  return <span ref={ref} className={styles.statValue}>0{suffix}</span>;
}

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.title}>About Me</h2>
          <div className={styles.content}>
            <p className={styles.text}>
              I am a passionate <span className={styles.highlight}>Software Engineer</span> dedicated to building <span className={styles.highlight}>high-quality</span>, <span className={styles.highlight}>scalable</span>, and <span className={styles.highlight}>user-centric</span> applications. 
              With a strong foundation in <span className={styles.highlight}>modern web technologies</span>, I thrive on <span className={styles.highlight}>solving complex problems</span> and <span className={styles.highlight}>delivering innovative solutions</span>. 
              My journey in tech is driven by curiosity and a continuous desire to learn and grow.
            </p>
            <p className={styles.text}>
              When I'm not coding, I enjoy exploring new technologies, building <span className={styles.highlight}>side projects</span>, and staying up-to-date with the latest <span className={styles.highlight}>industry trends</span>.
            </p>

            <div className={styles.statsGrid}>
              {[
                { label: "Total Projects", value: 8, suffix: "" },
                { 
                  label: "Lines of Code", 
                  value: 10000, 
                  suffix: "+",
                  formatter: (val: number) => val >= 1000 ? (val/1000).toFixed(0) + 'k' : Math.floor(val).toString()
                },
                { label: "Contributions", value: 600, suffix: "+" }
              ].map((stat, index) => (
                <div key={index} className={styles.statItem}>
                  <Counter 
                    value={stat.value} 
                    suffix={stat.suffix} 
                    formatter={stat.formatter}
                  />
                  <span className={styles.statLabel}>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
