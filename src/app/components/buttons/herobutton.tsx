'use client'

import { MoveUpRight } from "lucide-react";
import { motion } from "framer-motion";

interface HeroButtonProps {
  link: string;
  label?: string;
}

const HeroButton: React.FC<HeroButtonProps> = ({ link, label }) => {
  return (
      <motion.a
        className="Hero-button flex items-center gap-2"
        whileHover={{ scale: 1.05 }}
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
          {label}
          <MoveUpRight className="Icon-Arrow" />
      </motion.a>
  );
};

export default HeroButton;
