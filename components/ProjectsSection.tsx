"use client";

import FadeIn from "./FadeIn";
import { ArrowUpRight, Github } from "lucide-react";

interface Project {
  id: string;
  index: string;
  title: string;
  category: string;
  primaryTech: string;
  description: string;
  highlight: string;
  chips: string[];
  githubUrl: string;
  demoUrl?: string;
}

const projectsData: Project[] = [
  {
    id: "production-rag",
    index: "01",
    title: "Production-Grade RAG Application",
    category: "Applied LLMs / Vector Search",
    primaryTech: "Python · LangChain · Groq",
    description:
      "A high-throughput Retrieval-Augmented Generation (RAG) system featuring modular chunking, hybrid vector search (FAISS + ChromaDB), metadata filtering, cross-encoder re-ranking, and low-latency LLM synthesis built with LangGraph and monitored via LangSmith.",
    highlight:
      "Engineered for sub-100ms retrieval latencies and high context precision: combines dense vector embeddings with BM25 sparse fallback, with evaluation traces logged via LangSmith for continuous performance optimization.",
    chips: [
      "LangChain",
      "LangGraph",
      "LangSmith",
      "Groq LLM",
      "FAISS",
      "ChromaDB",
      "Sentence-Transformers",
      "FastAPI",
    ],
    githubUrl: "https://github.com/DevanshSingh151/Cold-email-generator",
    demoUrl: "https://cold-email-generator-blush.vercel.app",
  },
  {
    id: "cold-email",
    index: "02",
    title: "Cold Email Generator",
    category: "Applied LLM / RAG",
    primaryTech: "Python · Streamlit",
    description:
      "A tool that reads a job or careers page, extracts the role, required skills, and context, then drafts a tailored cold email and auto-attaches the most relevant portfolio links — matched via a local vector store rather than hardcoded rules.",
    highlight:
      "LangChain + Groq (llama-3.1-8b-instant) for generation, ChromaDB for persistent portfolio retrieval, clean Streamlit interface end to end.",
    chips: ["LangChain", "Groq LLM", "ChromaDB", "Streamlit", "pandas"],
    githubUrl: "https://github.com/DevanshSingh151/Cold-email-generator",
    demoUrl: "https://cold-email-generator-blush.vercel.app",
  },
  {
    id: "vital-agent",
    index: "03",
    title: "VitalAgent — AI Medical Voice Agent",
    category: "Voice AI / Full-Stack",
    primaryTech: "Next.js · Postgres",
    description:
      "A full-stack Next.js app where a user has a live, real-time voice consultation with one of eight AI specialist personas (GP, Cardiologist, Psychologist, and more), and walks away with a structured, doctor-style report — chief complaint, symptoms, medications mentioned, and recommendations — generated automatically from the conversation.",
    highlight:
      "Vapi handles the real-time voice pipeline (STT → LLM → TTS) end to end; on call-end, the full transcript is passed to Gemini 2.5 Flash, which returns structured JSON that's persisted to Postgres via Drizzle ORM and rendered in a consultation history dashboard.",
    chips: [
      "Next.js 16",
      "Vapi Voice AI",
      "Google Gemini",
      "Clerk Auth",
      "Drizzle ORM",
      "Neon Postgres",
      "shadcn/ui",
    ],
    githubUrl: "https://github.com/DevanshSingh151/ai-medical-voice-agent",
    demoUrl: "https://ai-medical-voice-agent-navy.vercel.app",
  },
  {
    id: "utility-ir",
    index: "04",
    title: "Utility-Based Information Retrieval System",
    category: "Information Retrieval",
    primaryTech: "Python · Flask",
    description:
      "A hybrid semantic search engine over local PDFs and PPTs, routing every query through a three-stage pipeline: sparse + dense retrieval, cross-encoder re-ranking, and an implicit utility agent that adapts to user preference via Bayesian probability updates.",
    highlight:
      "Stage 1 — BM25 + Sentence-BERT/FAISS pulls top 50 candidates. Stage 2 — ms-marco-MiniLM-L6-v2 cross-encoder re-ranks to top 15. Stage 3 — an 8-axis utility scorer learns from behavior.",
    chips: [
      "BM25",
      "FAISS",
      "Sentence-BERT",
      "Cross-Encoder",
      "MongoDB",
      "Docker",
    ],
    githubUrl:
      "https://github.com/DevanshSingh151/Utility-Based-Information-Retrieval-System",
    demoUrl: "https://utility-based-information-retrieval.vercel.app",
  },
  {
    id: "meds-mate",
    index: "05",
    title: "Meds-Mate — IOP Risk Predictor",
    category: "ML / Healthtech",
    primaryTech: "React · Flask",
    description:
      "A full-stack tool that predicts intraocular pressure (IOP) related risk from patient inputs, pairing a Random Forest classifier with a clean clinical-facing interface.",
    highlight:
      "Random Forest Classifier trained to 93–94% accuracy, served through a Flask API to a React + Next.js frontend.",
    chips: ["Random Forest", "Flask API", "React", "Next.js", "scikit-learn"],
    githubUrl: "https://github.com/DevanshSingh151/Meds-Mate",
  },
];

export default function ProjectsSection() {
  return (
    <section id="work" className="py-20 md:py-24 border-b border-line">
      <div className="max-w-[1040px] mx-auto px-4 md:px-6">
        <FadeIn>
          {/* Eyebrow */}
          <div className="font-mono text-xs text-amber tracking-widest uppercase mb-3">
            03 — Rank / Selected Work
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl font-normal text-paper mb-12">
            Featured Projects &amp; Systems
          </h2>

          {/* Project Entries */}
          <div className="space-y-12">
            {projectsData.map((project) => (
              <div
                key={project.id}
                className="pt-10 border-t border-line grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start"
              >
                {/* Left Column (Fixed Width Meta: Index + Category + Tech) */}
                <div className="md:col-span-4 lg:col-span-3 flex flex-row md:flex-col justify-between md:justify-start items-baseline md:items-start gap-2">
                  <span className="font-mono text-4xl md:text-5xl font-medium text-paper-dim/40 leading-none select-none">
                    {project.index}
                  </span>
                  <div className="md:mt-4 space-y-1 text-right md:text-left">
                    <div className="font-mono text-xs uppercase tracking-wider text-teal">
                      {project.category}
                    </div>
                    <div className="font-mono text-[11px] text-paper-dim">
                      {project.primaryTech}
                    </div>
                  </div>
                </div>

                {/* Right Column (Project Details) */}
                <div className="md:col-span-8 lg:col-span-9 space-y-4">
                  <h3 className="font-serif text-xl sm:text-2xl font-normal text-paper">
                    {project.title}
                  </h3>

                  <p className="font-sans text-sm md:text-base text-paper-dim leading-relaxed">
                    {project.description}
                  </p>

                  {/* Highlight (Amber, Left-bordered) */}
                  <div className="border-l-2 border-amber bg-ink-2/60 p-3.5 md:p-4 rounded-r-sm my-3">
                    <p className="font-mono text-xs text-paper/90 leading-relaxed">
                      <span className="text-amber font-medium uppercase mr-2 tracking-wider">
                        KEY HIGHLIGHT:
                      </span>
                      {project.highlight}
                    </p>
                  </div>

                  {/* Tech Chips */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.chips.map((chip) => (
                      <span
                        key={chip}
                        className="font-mono text-[11px] text-paper-dim bg-ink-2 px-2 py-0.5 rounded-sm border border-line"
                      >
                        {chip}
                      </span>
                    ))}
                  </div>

                  {/* Links Row */}
                  <div className="flex flex-wrap items-center gap-4 pt-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1.5 font-mono text-xs text-paper hover:text-teal transition-colors"
                    >
                      <Github className="w-3.5 h-3.5 text-paper-dim" />
                      <span>Source</span>
                      <ArrowUpRight className="w-3 h-3 text-paper-dim" />
                    </a>

                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-1.5 font-mono text-xs text-teal hover:underline transition-all font-medium"
                      >
                        <span>Live Demo</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
