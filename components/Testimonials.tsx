'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import styles from './Testimonials.module.css';

const testimonials = [
  {
    id: 1,
    name: "Muhammad Satria Putra Trinanda",
    role: "Product Manager",
    company: "Eduwork",
    text: "Faisal is a great Programmer, he is professional and willing to provide extra help if anyone needs it He deeply understands and is able to implement several program languages for organizational as well as company needs. His contribution to the team is invaluable, and as such, any organization would be lucky to have Faisal as their colleague",
    image: "/satria.png"
  },
  {
    id: 2,
    name: "Dodi Prakoso Wibowo",
    role: "CEO",
    company: "Eduwork",
    text: "Thank you, Faisal, for your contributions as a programmer at Eduwork. You are reliable, disciplined, and have strong technical skills. Good luck in the future, and all the best. Thank you!",
    image: "/dodi.png"
  },
  {
    id: 3,
    comingSoon: true
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className={styles.section}>
      <div className={styles.container}>
        <motion.h2 
          className={styles.title}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          Testimonials
        </motion.h2>

        <div className={styles.grid}>
          {testimonials.map((item, index) => (
            <motion.div 
              key={item.id}
              className={`${styles.card} ${item.comingSoon ? styles.comingSoonCard : ''}`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              {item.comingSoon ? (
                <p className={styles.comingSoonText}>More Testimonials Coming Soon...</p>
              ) : (
                <>
                  <Quote className={styles.quoteIcon} size={32} />
                  <p className={styles.text}>{item.text}</p>
                  <div className={styles.author}>
                    <img src={item.image} alt={item.name} className={styles.avatar} />
                    <div>
                      <h3 className={styles.name}>{item.name}</h3>
                      <p className={styles.role}>{item.role} at <span className={styles.company}>{item.company}</span></p>
                    </div>
                  </div>
                </>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
