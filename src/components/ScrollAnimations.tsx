'use client';

import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useRef } from 'react';

interface ScrollAnimationProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  distance?: number;
}

export const ScrollAnimation = ({ 
  children, 
  className = '', 
  delay = 0, 
  direction = 'up', 
  distance = 50 
}: ScrollAnimationProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const getInitialTransform = () => {
    switch (direction) {
      case 'up':
        return { y: distance, opacity: 0 };
      case 'down':
        return { y: -distance, opacity: 0 };
      case 'left':
        return { x: distance, opacity: 0 };
      case 'right':
        return { x: -distance, opacity: 0 };
      default:
        return { y: distance, opacity: 0 };
    }
  };

  const getAnimateTransform = () => {
    switch (direction) {
      case 'up':
        return { y: 0, opacity: 1 };
      case 'down':
        return { y: 0, opacity: 1 };
      case 'left':
        return { x: 0, opacity: 1 };
      case 'right':
        return { x: 0, opacity: 1 };
      default:
        return { y: 0, opacity: 1 };
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={getInitialTransform()}
      animate={isInView ? getAnimateTransform() : getInitialTransform()}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

interface ParallaxProps {
  children: React.ReactNode;
  className?: string;
  speed?: number;
}

export const Parallax = ({ children, className = '', speed = 0.5 }: ParallaxProps) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", `${speed * 100}%`]);

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
};

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
}

export const FadeIn = ({ children, className = '', delay = 0, duration = 0.6 }: FadeInProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: isInView ? 1 : 0 }}
      transition={{ duration, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

interface ScaleInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  scale?: number;
}

export const ScaleIn = ({ children, className = '', delay = 0, scale = 0.8 }: ScaleInProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ scale, opacity: 0 }}
      animate={{ scale: isInView ? 1 : scale, opacity: isInView ? 1 : 0 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

interface StaggerContainerProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
}

export const StaggerContainer = ({ children, className = '', staggerDelay = 0.1 }: StaggerContainerProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: staggerDelay
          }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

interface StaggerItemProps {
  children: React.ReactNode;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right';
  distance?: number;
}

export const StaggerItem = ({ 
  children, 
  className = '', 
  direction = 'up', 
  distance = 20 
}: StaggerItemProps) => {
  const getVariants = () => {
    switch (direction) {
      case 'up':
        return {
          hidden: { y: distance, opacity: 0 },
          visible: { y: 0, opacity: 1 }
        };
      case 'down':
        return {
          hidden: { y: -distance, opacity: 0 },
          visible: { y: 0, opacity: 1 }
        };
      case 'left':
        return {
          hidden: { x: distance, opacity: 0 },
          visible: { x: 0, opacity: 1 }
        };
      case 'right':
        return {
          hidden: { x: -distance, opacity: 0 },
          visible: { x: 0, opacity: 1 }
        };
      default:
        return {
          hidden: { y: distance, opacity: 0 },
          visible: { y: 0, opacity: 1 }
        };
    }
  };

  return (
    <motion.div
      variants={getVariants()}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

interface RevealTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
}

export const RevealText = ({ text, className = '', delay = 0, duration = 0.6 }: RevealTextProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
      transition={{ duration, delay }}
      className={className}
    >
      {text}
    </motion.div>
  );
};

interface FloatingElementProps {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
  duration?: number;
}

export const FloatingElement = ({ 
  children, 
  className = '', 
  intensity = 10, 
  duration = 4 
}: FloatingElementProps) => {
  return (
    <motion.div
      animate={{ y: [-intensity, intensity, -intensity] }}
      transition={{ duration, repeat: Infinity, ease: "easeInOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

interface RotatingElementProps {
  children: React.ReactNode;
  className?: string;
  duration?: number;
  direction?: 'clockwise' | 'counterclockwise';
}

export const RotatingElement = ({ 
  children, 
  className = '', 
  duration = 20, 
  direction = 'clockwise' 
}: RotatingElementProps) => {
  const rotation = direction === 'clockwise' ? 360 : -360;

  return (
    <motion.div
      animate={{ rotate: rotation }}
      transition={{ duration, repeat: Infinity, ease: "linear" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

interface PulseElementProps {
  children: React.ReactNode;
  className?: string;
  scale?: number;
  duration?: number;
}

export const PulseElement = ({ 
  children, 
  className = '', 
  scale = 1.05, 
  duration = 2 
}: PulseElementProps) => {
  return (
    <motion.div
      animate={{ scale: [1, scale, 1] }}
      transition={{ duration, repeat: Infinity, ease: "easeInOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Export all animation components
export {
  ScrollAnimation,
  Parallax,
  FadeIn,
  ScaleIn,
  StaggerContainer,
  StaggerItem,
  RevealText,
  FloatingElement,
  RotatingElement,
  PulseElement
};
