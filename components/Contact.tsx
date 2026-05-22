'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Phone, Send, Linkedin } from 'lucide-react';
import styles from './Contact.module.css';

export default function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={styles.content}
        >
          <h2 className={styles.title}>Get In Touch</h2>
          <p className={styles.subtitle}>
            Have a project in mind or just want to say hi? Feel free to reach out!
          </p>

          <div className={styles.links}>
            <a href="mailto:faisalabubakar.works@gmail.com" className={styles.linkCard}>
              <Mail className={styles.icon} />
              <span>faisalabubakar.works@gmail.com</span>
            </a>
            <a href="https://wa.me/+6282216386576" className={styles.linkCard}>
              <Phone className={styles.icon} />
              <span>+62 822 1638 6576</span>
            </a>
            <a href="https://github.com/faisalABR" className={styles.linkCard}>
              <Github className={styles.icon} />
              <span>github.com/faisalABR</span>
            </a>
            <a href="https://www.linkedin.com/in/faisal-abu-bakar-riza-0271b2223/" className={styles.linkCard}>
              <Linkedin className={styles.icon} />
              <span>Faisal Abu Bakar Riza</span>
            </a>
          </div>

          <a href="mailto:faisalabubakar.works@gmail.com" className={styles.button}>
            Send Email <Send size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
