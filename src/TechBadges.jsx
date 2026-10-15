
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const technologies = [
  "React",
  "Java",
  "Spring Boot",
  "Python",
  "C#",
  "JavaScript",
  "Node.js",
  "NestJS",
  "MariaDB",
  "MongoDB",
  "SQL",
  "Git",
  "GitHub",
  "Docker",
  "Linux",
  "Windows",
  "API REST",
  "Postman",
  "Réseaux",
  "Soutien informatique",
  "Cybersécurité",
];

const positions = [
  "top-left",
  "top-right",
  "middle-left",
  "middle-right",
  "bottom-left",
  "bottom-right",
];

export default function TechBadges() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((previous) => (previous + 1) % technologies.length);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="tech-badges-container">
      {positions.map((position, i) => {
        const technology =
          technologies[(index + i * 3) % technologies.length];

        return (
          <motion.div
            key={position}
            className={`floating-tech floating-tech-${position}`}
            animate={{
              y: [0, -9, 0, 6, 0],
              rotate: [0, 1.5, 0, -1.5, 0],
            }}
            transition={{
              duration: 5 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.2,
            }}
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={technology}
                initial={{ opacity: 0, y: 8, filter: "blur(3px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -8, filter: "blur(3px)" }}
                transition={{ duration: 0.35 }}
              >
                {technology}
              </motion.span>
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
}
