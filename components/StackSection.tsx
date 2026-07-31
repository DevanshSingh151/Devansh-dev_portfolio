"use client";

import FadeIn from "./FadeIn";

interface StackGroup {
  category: string;
  items: string[];
}

const stackData: StackGroup[] = [
  {
    category: "Languages",
    items: ["Python", "JavaScript", "TypeScript", "Java", "C++", "C"],
  },
  {
    category: "ML / Data Science",
    items: [
      "scikit-learn",
      "Random Forest",
      "Sentence-BERT",
      "FAISS",
      "BM25",
      "Cross-Encoders",
      "Bayesian Inference",
      "pandas",
    ],
  },
  {
    category: "Applied AI / LLMs & Agents",
    items: [
      "LangChain",
      "LangGraph",
      "LangSmith",
      "Groq LLM",
      "Google Gemini",
      "Vapi Voice AI",
      "ChromaDB",
      "FAISS",
      "RAG Systems",
      "Agentic Workflows",
      "Prompt Engineering",
    ],
  },
  {
    category: "Full-Stack & Tools",
    items: [
      "React",
      "Next.js",
      "Flask",
      "Node.js",
      "PostgreSQL",
      "Drizzle ORM",
      "MongoDB",
      "Clerk Auth",
      "Docker",
      "Streamlit",
      "Vercel",
      "Git",
    ],
  },
];

export default function StackSection() {
  return (
    <section id="stack" className="py-20 md:py-24 border-b border-line">
      <div className="max-w-[1040px] mx-auto px-4 md:px-6">
        <FadeIn>
          {/* Eyebrow */}
          <div className="font-mono text-xs text-amber tracking-widest uppercase mb-3">
            02 — Index / Stack
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl font-normal text-paper mb-10">
            Technical Stack &amp; Tools
          </h2>

          {/* 2x2 Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10">
            {stackData.map((group) => (
              <div
                key={group.category}
                className="bg-ink-2/30 border border-line p-5 md:p-6 rounded-sm flex flex-col justify-start"
              >
                {/* Mono Uppercase Heading in Teal with Hairline */}
                <h3 className="font-mono text-xs uppercase tracking-widest text-teal font-medium pb-2.5 mb-4 border-b border-line">
                  {group.category}
                </h3>

                {/* Chips Container */}
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="font-mono text-xs text-paper-dim bg-ink-2 px-2.5 py-1 rounded-sm border border-line hover:border-paper-dim hover:text-paper transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
