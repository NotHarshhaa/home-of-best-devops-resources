"use client";

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PageLoadingProps {
  /**
   * Time in milliseconds to show the loading indicator
   * Set to 0 to disable the loading animation and show content immediately
   * @default 800
   */
  loadingTime?: number;

  /**
   * Children to render after loading is complete
   */
  children: React.ReactNode;

  /**
   * Type of loading animation to show
   * @default "fade"
   */
  transitionType?: "fade" | "slide" | "scale";

  /**
   * When true, only shows the loading animation on initial page load
   * @default true
   */
  initialLoadOnly?: boolean;
}

/**
 * A component that shows a loading animation before rendering its children
 */
export function PageLoading({
  loadingTime = 800,
  children,
  transitionType = "fade",
  initialLoadOnly = true,
}: PageLoadingProps) {
  const [loading, setLoading] = useState(true);
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  useEffect(() => {
    // If we only want to show loading on initial load and this isn't the first load,
    // skip the loading state
    if (initialLoadOnly && !isFirstLoad) {
      setLoading(false);
      return;
    }

    setLoading(true);
    const timeout = setTimeout(() => {
      setLoading(false);
      setIsFirstLoad(false);
    }, loadingTime);

    return () => clearTimeout(timeout);
  }, [loadingTime, initialLoadOnly, isFirstLoad]);

  // Animation variants based on transition type
  const contentVariants = {
    hidden: {
      opacity: 0,
      y: transitionType === "slide" ? 20 : 0,
      scale: transitionType === "scale" ? 0.98 : 1,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <motion.div
          key="loading"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="flex min-h-[50vh] w-full items-center justify-center"
        >
          <LoadingIndicator />
        </motion.div>
      ) : (
        <motion.div
          key="content"
          initial="hidden"
          animate="visible"
          variants={contentVariants}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function LoadingIndicator() {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <div className="relative h-12 w-12">
        <motion.span
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
            ease: "linear",
          }}
          className="absolute inset-0 rounded-full border-2 border-t-primary border-r-transparent border-b-transparent border-l-transparent"
        />
        <motion.span
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            repeat: Infinity,
            duration: 2.5,
            ease: "linear",
          }}
          className="absolute inset-1 rounded-full border-2 border-r-accent border-l-transparent border-t-transparent border-b-transparent"
        />
        <motion.span
          animate={{
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
            ease: "easeInOut",
          }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="h-2 w-2 rounded-full bg-primary" />
        </motion.span>
      </div>
      <motion.p
        animate={{
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
          ease: "easeInOut",
        }}
        className="text-sm font-medium text-muted-foreground"
      >
        Loading...
      </motion.p>
    </div>
  );
}

export default PageLoading;
