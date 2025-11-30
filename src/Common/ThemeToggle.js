import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="p-2 rounded-full bg-muted text-muted-foreground hover:text-primary transition-colors"
    >
      {theme === "dark" ? (
        <SunIcon className="w-5 h-5" />
      ) : (
        <MoonIcon className="w-5 h-5" />
      )}
    </motion.button>
  );
};

export default ThemeToggle;
