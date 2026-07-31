"use client";

import FadeIn from "./FadeIn";

interface TimelineItem {
  status: string;
  title: string;
  subtitle?: string;
  description: string;
  highlight?: boolean;
}

const timelineData: TimelineItem[] = [
  {
    status: "Ongoing",
    title: "B.Tech, Computer Science — AI & ML Specialization",
    subtitle: "VIT Chennai (2022 – 2026)",
    description:
      "Coursework and intensive hands-on development spanning machine learning, deep learning, information retrieval systems, and advanced algorithm design.",
  },
  {
    status: "Focus",
    title: "Agentic AI & Generative AI Systems",
    subtitle: "Advanced Deep Dive",
    description:
      "Mastering complex Agentic AI frameworks (LangGraph, AutoGen), RAG evaluation (Ragas, LangSmith), autonomous decision-making agents, and multi-modal pipeline architecture.",
    highlight: true,
  },
  {
    status: "Goal",
    title: "Engineering Opportunities & High-Impact Projects",
    subtitle: "Data Science & ML Engineering",
    description:
      "Looking forward to Data Science and ML Engineering roles to build production-scale data ingestion, modeling, evaluation, and real-time deployment pipelines.",
  },
];

export default function PathSection() {
  return (
    <section id="path" className="py-20 md:py-24 border-b border-line">
      <div className="max-w-[1040px] mx-auto px-4 md:px-6">
        <FadeIn>
          {/* Eyebrow */}
          <div className="font-mono text-xs text-amber tracking-widest uppercase mb-3">
            04 — Serve / Path
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl font-normal text-paper mb-10">
            Trajectory &amp; Current Focus
          </h2>

          {/* Timeline List */}
          <div className="bg-ink-2/30 border border-line rounded-sm divide-y divide-line">
            {timelineData.map((item) => (
              <div
                key={item.title}
                className={`p-6 sm:p-8 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start transition-colors ${
                  item.highlight ? "bg-ink-2/70" : ""
                }`}
              >
                {/* Left Column: Date / Label */}
                <div className="md:col-span-3">
                  <span
                    className={`inline-block font-mono text-xs uppercase tracking-widest px-2.5 py-1 rounded-sm border ${
                      item.highlight
                        ? "bg-teal/10 text-teal border-teal/40 font-semibold"
                        : "bg-ink-2 text-paper-dim border-line"
                    }`}
                  >
                    {item.status}
                  </span>
                </div>

                {/* Right Column: Title & Content */}
                <div className="md:col-span-9 space-y-1.5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h3 className="font-serif text-lg md:text-xl text-paper font-normal">
                      {item.title}
                    </h3>
                    {item.subtitle && (
                      <span className="font-mono text-xs text-paper-dim">
                        {item.subtitle}
                      </span>
                    )}
                  </div>
                  <p className="font-sans text-sm text-paper-dim leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
