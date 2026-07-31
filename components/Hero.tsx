"use client";

import PipelineDiagram from "./PipelineDiagram";
import { ArrowRight, Mail, Github, Linkedin } from "lucide-react";

export default function Hero() {
  return (
    <section className="pt-16 pb-20 md:pt-24 md:pb-24 border-b border-line">
      <div className="max-w-[1040px] mx-auto px-4 md:px-6">
        {/* Eyebrow */}
        <div className="flex items-center space-x-2 mb-4">
          <span className="font-mono text-xs md:text-sm text-teal tracking-widest uppercase">
            — DATA SCIENCE & ML ENGINEERING
          </span>
        </div>

        {/* H1 Heading */}
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal leading-[1.15] text-paper tracking-tight max-w-3xl mb-6">
          Building systems that turn data into{" "}
          <span className="italic text-teal font-normal">decisions.</span>
        </h1>

        {/* Subhead */}
        <p className="font-sans text-base md:text-lg text-paper-dim leading-relaxed max-w-2xl mb-8">
          I&apos;m Devansh Singh, a Computer Science student specializing in AI & ML at VIT Chennai.
          I build retrieval pipelines, ML classifiers, and full-stack applications end to end —
          from the model to the interface someone actually uses.
        </p>

        {/* CTA Row */}
        <div className="flex flex-wrap items-center gap-3 md:gap-4 mb-4">
          <a
            href="#work"
            className="inline-flex items-center space-x-2 font-mono text-xs md:text-sm font-medium bg-teal hover:bg-teal-dim text-ink px-5 py-2.5 rounded-sm transition-colors border border-teal"
          >
            <span>View Work</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="mailto:devanshsin2020@gmail.com"
            className="inline-flex items-center space-x-2 font-mono text-xs md:text-sm font-normal text-paper-dim hover:text-paper bg-ink-2/80 hover:bg-ink-2 px-4 py-2.5 rounded-sm transition-colors border border-line hover:border-paper-dim"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Email Me</span>
          </a>

          <a
            href="https://github.com/DevanshSingh151"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 font-mono text-xs md:text-sm font-normal text-paper-dim hover:text-paper bg-ink-2/80 hover:bg-ink-2 px-4 py-2.5 rounded-sm transition-colors border border-line hover:border-paper-dim"
          >
            <Github className="w-3.5 h-3.5" />
            <span>GitHub</span>
          </a>

          <a
            href="https://www.linkedin.com/in/devansh-singh-08139631b/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 font-mono text-xs md:text-sm font-normal text-paper-dim hover:text-paper bg-ink-2/80 hover:bg-ink-2 px-4 py-2.5 rounded-sm transition-colors border border-line hover:border-paper-dim"
          >
            <Linkedin className="w-3.5 h-3.5" />
            <span>LinkedIn</span>
          </a>
        </div>

        {/* Pipeline Signature Diagram */}
        <PipelineDiagram />
      </div>
    </section>
  );
}
