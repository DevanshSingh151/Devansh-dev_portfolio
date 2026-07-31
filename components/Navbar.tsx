"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 border-b ${
        scrolled
          ? "bg-ink/90 backdrop-blur-md border-line py-3 shadow-sm"
          : "bg-ink/50 backdrop-blur-sm border-transparent py-5"
      }`}
    >
      <div className="max-w-[1040px] mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Monogram Wordmark */}
        <Link
          href="#"
          className="font-mono text-sm tracking-wider font-semibold text-paper hover:opacity-90 transition-opacity"
        >
          DEVANSH<span className="text-teal font-bold">.</span>SINGH
        </Link>

        {/* Navigation Links */}
        <nav className="flex items-center space-x-5 md:space-x-8">
          {[
            { name: "ABOUT", href: "#about" },
            { name: "STACK", href: "#stack" },
            { name: "WORK", href: "#work" },
            { name: "PATH", href: "#path" },
            { name: "CONTACT", href: "#contact" },
          ].map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="font-mono text-[11px] md:text-xs tracking-widest text-paper-dim hover:text-teal transition-colors uppercase py-1"
            >
              {item.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
