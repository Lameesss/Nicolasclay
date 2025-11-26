"use client";

import { motion, HTMLMotionProps, Variants, Transition } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "./cn";

/**
 * Reusable motion components with common animations
 */

interface MotionDivProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  variant?: Variants;
  delay?: number;
  duration?: number;
}

/**
 * Animated div component with fade-in-up animation by default
 */
export function MotionDiv({
  children,
  className,
  variant,
  delay = 0,
  duration = 0.3,
  initial = "hidden",
  animate = "visible",
  ...props
}: MotionDivProps) {
  const defaultVariant: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration,
        delay,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  return (
    <motion.div
      className={cn(className)}
      variants={variant || defaultVariant}
      initial={initial}
      animate={animate}
      {...props}
    >
      {children}
    </motion.div>
  );
}

interface MotionSectionProps extends HTMLMotionProps<"section"> {
  children: ReactNode;
  delay?: number;
}

/**
 * Animated section component
 */
export function MotionSection({
  children,
  className,
  delay = 0,
  ...props
}: MotionSectionProps) {
  return (
    <motion.section
      className={cn(className)}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay,
        ease: [0.4, 0, 0.2, 1],
      }}
      {...props}
    >
      {children}
    </motion.section>
  );
}

interface MotionHProps extends HTMLMotionProps<"h1" | "h2" | "h3" | "h4" | "h5" | "h6"> {
  children: ReactNode;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  delay?: number;
}

/**
 * Animated heading component
 */
export function MotionH({
  children,
  as: Component = "h2",
  className,
  delay = 0,
  ...props
}: MotionHProps) {
  const MotionComponent = motion[Component] as typeof motion.h2;

  return (
    <MotionComponent
      className={cn(className)}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.4,
        delay,
        ease: [0.4, 0, 0.2, 1],
      }}
      {...props}
    >
      {children}
    </MotionComponent>
  );
}

interface MotionPProps extends HTMLMotionProps<"p"> {
  children: ReactNode;
  delay?: number;
}

/**
 * Animated paragraph component
 */
export function MotionP({
  children,
  className,
  delay = 0,
  ...props
}: MotionPProps) {
  return (
    <motion.p
      className={cn(className)}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.4,
        delay,
        ease: [0.4, 0, 0.2, 1],
      }}
      {...props}
    >
      {children}
    </motion.p>
  );
}

interface MotionButtonProps extends HTMLMotionProps<"button"> {
  children: ReactNode;
  delay?: number;
}

/**
 * Animated button component with hover effects
 */
export function MotionButton({
  children,
  className,
  delay = 0,
  whileHover = { scale: 1.05 },
  whileTap = { scale: 0.95 },
  ...props
}: MotionButtonProps) {
  return (
    <motion.button
      className={cn(className)}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={whileHover}
      whileTap={whileTap}
      transition={{
        duration: 0.3,
        delay,
        ease: [0.4, 0, 0.2, 1],
      }}
      {...props}
    >
      {children}
    </motion.button>
  );
}

interface StaggerContainerProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  staggerDelay?: number;
}

/**
 * Container that staggers children animations
 */
export function StaggerContainer({
  children,
  className,
  staggerDelay = 0.1,
  ...props
}: StaggerContainerProps) {
  return (
    <motion.div
      className={cn(className)}
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

interface StaggerItemProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
}

/**
 * Item for stagger container
 */
export function StaggerItem({
  children,
  className,
  ...props
}: StaggerItemProps) {
  return (
    <motion.div
      className={cn(className)}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.3,
            ease: [0.4, 0, 0.2, 1],
          },
        },
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

