"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import React from "react";

interface GlassCardProps extends Omit<HTMLMotionProps<"div">, "ref"> {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(
  ({ children, className, delay = 0, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          delay: delay,
        }}
        whileHover={{
          scale: 1.02,
          rotateX: 2,
          rotateY: -2,
        }}
        className={cn(
          "relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-[25px]",
          "border border-white/15 shadow-[0_8px_32px_0_rgba(31,38,135,0.2)]",
          "hover:shadow-[0_12px_40px_0_rgba(80,200,255,0.25)] transition-shadow duration-500",
          className
        )}
        style={{ transformStyle: "preserve-3d" }}
        {...props}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none rounded-2xl" />
        <div className="relative z-10 p-6 h-full flex flex-col">{children}</div>
      </motion.div>
    );
  }
);

GlassCard.displayName = "GlassCard";
