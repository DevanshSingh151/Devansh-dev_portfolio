"use client";

import FadeIn from "./FadeIn";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-24 border-b border-line">
      <div className="max-w-[1040px] mx-auto px-4 md:px-6">
        <FadeIn>
          {/* Eyebrow */}
          <div className="font-mono text-xs text-amber tracking-widest uppercase mb-3">
            01 — Ingest / About
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl font-normal text-paper mb-10">
            Engineering models into production software.
          </h2>

          {/* Two-Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Bio Left Column (~60%) */}
            <div className="lg:col-span-7 space-y-5 font-sans text-sm md:text-base text-paper-dim leading-relaxed">
              <p>
                I&apos;m currently pursuing my B.Tech in Computer Science with a specialization in AI &amp; ML at VIT Chennai.
                My work sits at the intersection of applied machine learning and software engineering —
                I don&apos;t just train models, I ship them behind robust APIs and interfaces people can actually use.
              </p>
              <p>
                My engineering focus revolves around end-to-end data pipelines, retrieval-augmented generation (RAG), agentic workflows,
                and scalable machine learning systems built for real-world production environments.
              </p>
            </div>

            {/* Quick-Facts Right Column (~40%) */}
            <div className="lg:col-span-5 bg-ink-2/40 border border-line p-5 md:p-6 rounded-sm">
              <h3 className="font-mono text-xs uppercase tracking-wider text-paper font-medium mb-4 pb-2 border-b border-line">
                Quick Facts
              </h3>
              <div className="divide-y divide-line">
                {[
                  { label: "Based in", value: "Lucknow, India" },
                  { label: "Studying", value: "B.Tech CSE (AI & ML), VIT Chennai" },
                  { label: "Focus", value: "Applied ML · Retrieval & Gen AI · Agentic AI" },
                  { label: "Seeking", value: "Data Science / ML Engineering Intern" },
                  { label: "Email", value: "devanshsin2020@gmail.com", isLink: true },
                ].map((fact) => (
                  <div
                    key={fact.label}
                    className="py-3 flex flex-col sm:flex-row sm:items-center justify-between text-xs font-mono gap-1 sm:gap-4"
                  >
                    <span className="text-paper-dim uppercase tracking-wider text-[11px]">
                      {fact.label}
                    </span>
                    {fact.isLink ? (
                      <a
                        href={`mailto:${fact.value}`}
                        className="text-teal hover:underline text-right font-medium break-all"
                      >
                        {fact.value}
                      </a>
                    ) : (
                      <span className="text-paper font-medium text-right sm:text-right">
                        {fact.value}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
