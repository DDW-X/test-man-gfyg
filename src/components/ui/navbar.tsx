"use client";

import { motion } from "framer-motion";
import { Layers } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const links = [
  { name: "Overview", href: "#overview" },
  { name: "API Docs", href: "#api-docs" },
  { name: "Analytics", href: "#analytics" },
  { name: "Settings", href: "#settings" },
];

export function Navbar() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      className="fixed top-0 left-0 right-0 z-50 p-6 pointer-events-none"
    >
      <div className="mx-auto max-w-7xl">
        <div className="pointer-events-auto flex items-center justify-between px-6 py-4 rounded-full bg-white/5 backdrop-blur-[25px] border border-white/15 shadow-[0_8px_32px_0_rgba(31,38,135,0.15)]">
          <Link href="/" className="flex items-center gap-2 text-white group">
            <Layers className="w-6 h-6 text-cyan-300 group-hover:text-fuchsia-300 transition-colors duration-500" />
            <span className="font-semibold tracking-wide text-lg">Nexus</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {links.map((link, i) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative text-sm font-medium text-white/70 hover:text-white transition-colors py-2 px-1"
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {link.name}
                {hoveredIndex === i && (
                  <motion.div
                    layoutId="navbar-underline"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-cyan-400 to-fuchsia-400 rounded-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  />
                )}
              </Link>
            ))}
          </div>

          <button className="px-6 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white text-sm font-medium transition-all hover:scale-105 active:scale-95 shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(255,255,255,0.3)]">
            Connect
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
