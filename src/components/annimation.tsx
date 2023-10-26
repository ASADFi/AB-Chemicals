"use client";
import { AnimatePresence, motion } from "framer-motion";
import React, { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
}

export const AnnimationPage : React.FC<ContainerProps> = ({ children }) => (
  <div>
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 3, y: 1000 }}
        animate={{ opacity: 2, y: 0 }}
        exit={{ opacity: 2, y: 100 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  </div>
);
