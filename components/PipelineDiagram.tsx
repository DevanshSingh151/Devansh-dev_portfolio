"use client";

import React from "react";

interface PipelineNode {
  step: string;
  name: string;
  caption: string;
}

const pipelineData: PipelineNode[] = [
  { step: "01", name: "Ingest", caption: "raw data, docs, queries" },
  { step: "02", name: "Index", caption: "BM25 + dense embeddings" },
  { step: "03", name: "Rank", caption: "cross-encoder / Bayesian" },
  { step: "04", name: "Serve", caption: "API, UI, decision" },
];

export default function PipelineDiagram() {
  return (
    <div className="w-full mt-12 p-5 md:p-6 bg-ink-2/60 border border-line rounded-sm">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 md:gap-0 relative">
        {pipelineData.map((node, idx) => {
          const isLast = idx === pipelineData.length - 1;
          return (
            <React.Fragment key={node.step}>
              {/* Node Column */}
              <div className="flex-1 flex flex-col items-start relative z-10">
                <div className="flex items-center space-x-2 mb-1.5">
                  <span className="w-2 h-2 bg-teal rounded-sm inline-block shadow-[0_0_8px_rgba(63,184,166,0.6)]" />
                  <span className="font-mono text-xs font-semibold tracking-wider text-paper uppercase">
                    {node.step} — {node.name}
                  </span>
                </div>
                <p className="font-mono text-[11px] text-paper-dim leading-normal pl-4 border-l border-line md:border-l-0 md:pl-0">
                  {node.caption}
                </p>
              </div>

              {/* Connecting animated line between nodes (desktop view) */}
              {!isLast && (
                <div className="hidden md:flex items-center justify-center pt-1 px-2 self-start w-16 lg:w-24 relative">
                  <div className="w-full h-[1px] bg-line relative overflow-hidden">
                    <div className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-teal to-transparent animate-flow-dot" />
                  </div>
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}
