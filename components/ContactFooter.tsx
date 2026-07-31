"use client";

import FadeIn from "./FadeIn";
import { Mail, Github, Linkedin, ArrowUpRight } from "lucide-react";

export default function ContactFooter() {
  return (
    <footer id="contact" className="pt-20 md:pt-24 bg-ink">
      <div className="max-w-[1040px] mx-auto px-4 md:px-6">
        <FadeIn>
          {/* Main Contact Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 pb-20 items-start">
            {/* Left Column */}
            <div className="md:col-span-7 space-y-4">
              <div className="font-mono text-xs text-amber tracking-widest uppercase">
                Contact
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-normal text-paper">
                Let&apos;s talk.
              </h2>
              <p className="font-sans text-base text-paper-dim max-w-lg leading-relaxed">
                Open to Data Science Engineering internships and collaborative ML projects.
                The fastest way to reach me is email.
              </p>
            </div>

            {/* Right Column: Stacked Mono Links */}
            <div className="md:col-span-5 bg-ink-2/40 border border-line p-6 rounded-sm space-y-4">
              <h3 className="font-mono text-xs uppercase tracking-wider text-paper font-medium pb-2 border-b border-line">
                Direct Channels
              </h3>

              <div className="space-y-3 font-mono text-xs">
                <a
                  href="mailto:devanshsin2020@gmail.com"
                  className="flex items-center justify-between text-paper hover:text-teal transition-colors p-2 bg-ink-2 rounded-sm border border-line hover:border-teal/50"
                >
                  <div className="flex items-center space-x-2.5">
                    <Mail className="w-4 h-4 text-teal" />
                    <span>devanshsin2020@gmail.com</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-paper-dim" />
                </a>

                <a
                  href="https://github.com/DevanshSingh151"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between text-paper hover:text-teal transition-colors p-2 bg-ink-2 rounded-sm border border-line hover:border-teal/50"
                >
                  <div className="flex items-center space-x-2.5">
                    <Github className="w-4 h-4 text-teal" />
                    <span>github.com/DevanshSingh151</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-paper-dim" />
                </a>

                <a
                  href="https://www.linkedin.com/in/devansh-singh-08139631b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between text-paper hover:text-teal transition-colors p-2 bg-ink-2 rounded-sm border border-line hover:border-teal/50"
                >
                  <div className="flex items-center space-x-2.5">
                    <Linkedin className="w-4 h-4 text-teal" />
                    <span>linkedin.com/in/devansh-singh</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-paper-dim" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-line py-6 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-paper-dim gap-2">
            <span>© 2026 Devansh Singh</span>
            <span>Built for the pipeline, not just the page.</span>
          </div>
        </FadeIn>
      </div>
    </footer>
  );
}
