import React from "react";
import { motion } from "framer-motion";

/**
 * Scroll-reveal wrapper. Children animate in when scrolled into view.
 * props: direction ("up" | "down" | "left" | "right"), delay, width
 */
const Reveal = ({ children, direction = "up", delay = 0, width = "100%", style }) => {
  const offset = 40;
  const variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? offset : direction === "down" ? -offset : 0,
      x: direction === "left" ? offset : direction === "right" ? -offset : 0,
    },
    visible: { opacity: 1, y: 0, x: 0 },
  };

  return (
    <motion.div
      style={{ width, ...style }}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.4, 0.25, 1] }}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
