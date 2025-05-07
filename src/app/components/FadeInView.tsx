// components/FadeInView.tsx
import { motion } from "framer-motion";

const directions = {
  left: { x: -50, y: 0 },
  right: { x: 50, y: 0 },
  up: { x: 0, y: 50 },
  down: { x: 0, y: -50 },
};

export default function FadeInView({
  children,
  direction = "up",
  duration = 0.8,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  direction?: "left" | "right" | "up" | "down";
  duration?: number;
  delay?: number;
  className?: string;
}) {
  const { x, y } = directions[direction];

  return (
    <motion.div
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration, delay }}
      viewport={{ once: true }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
