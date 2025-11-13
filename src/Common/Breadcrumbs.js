/* src/components/Breadcrumbs.jsx */

import React from 'react';
import { Link } from 'react-router-dom';
import { HomeIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';

const breadcrumbItemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

/**
 * Reusable Breadcrumbs component.
 */
const Breadcrumbs = ({ items }) => {
  return (
    <nav className="w-full max-w-screen-xl mx-auto px-4 md:px-8 py-4 relative z-20">
      <ol className="flex items-center space-x-2 text-sm text-muted-foreground">
        <motion.li
          variants={breadcrumbItemVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.1 }}
        >
          <Link to="/" className="flex items-center hover:text-foreground transition-colors">
            <HomeIcon className="h-4 w-4 mr-1" />
            Home
          </Link>
        </motion.li>

        {items.map((item, index) => (
          <motion.li
            key={item.name}
            variants={breadcrumbItemVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.1 * (index + 2) }} // Stagger delay
            className="flex items-center"
          >
            <ChevronRightIcon className="h-4 w-4 text-border mx-1" />
            {index === items.length - 1 ? (
              <span className="text-foreground font-medium">{item.name}</span>
            ) : (
              <Link to={item.href} className="hover:text-foreground transition-colors">
                {item.name}
              </Link>
            )}
          </motion.li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;