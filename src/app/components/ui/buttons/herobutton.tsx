// components/HeroButton.tsx
'use cliente'

import { MoveUpRight } from "lucide-react";
import { motion } from "framer-motion";

interface HeroButtonProps {
    link: string;
    label?: string;
}

export const HeroButton: React.FC<HeroButtonProps> = ({ link, label }) => {
    return ( <motion.button
        className="Hero-button"
        whileHover={{ scale: 1.05 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <a
          className="flex items-center gap-2"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {label}
          <MoveUpRight className="Icon-Arrow" />
        </a>
      </motion.button>
    );
}