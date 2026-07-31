# Devansh Singh — Data Science & ML Engineering Portfolio

> **Engineering models into production software.**
> Single-page personal portfolio framed around a data pipeline architecture: **Ingest → Index → Rank → Serve**.

[![Next.js](https://img.shields.io/badge/Next.js-15.1.0-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6.3-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.14-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.11.9-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)

---

## 💡 Concept & Architecture

The entire portfolio is designed around the core stages of an end-to-end data pipeline:

```
┌─────────────────┐       ┌─────────────────┐       ┌─────────────────┐       ┌─────────────────┐
│   01 — INGEST   │  ───► │   02 — INDEX    │  ───► │    03 — RANK    │  ───► │    04 — SERVE   │
│ About & Facts   │       │ Technical Stack │       │ Selected Work   │       │ Trajectory      │
└─────────────────┘       └─────────────────┘       └─────────────────┘       └─────────────────┘
```

Rather than arbitrary section numbers, each part of the portfolio represents a data lifecycle stage:
- **`01 — Ingest / About`**: Academic background (VIT Chennai, B.Tech CSE AI & ML) and engineering focus.
- **`02 — Index / Stack`**: Categorized technical stack spanning Languages, ML/Data Science, Applied AI/LLMs, and Full-Stack tooling.
- **`03 — Rank / Selected Work`**: Highlighted systems and production projects ranked by technical depth.
- **`04 — Serve / Path`**: Trajectory, focus areas (Agentic AI, Gen AI), and future engineering goals.

---

## 🛠️ Featured Systems & Projects

### 1. Production-Grade RAG Application
- **Category**: Applied LLMs / Vector Search / Agentic AI
- **Tech Stack**: `Python`, `LangChain`, `LangGraph`, `LangSmith`, `Groq LLM`, `FAISS`, `ChromaDB`, `Sentence-Transformers`, `FastAPI`
- **Key Highlight**: High-throughput Retrieval-Augmented Generation system with dense + sparse vector indexing, sub-100ms retrieval latencies, and LangSmith evaluation tracing.

### 2. Cold Email Generator
- **Category**: Applied LLM / RAG
- **Tech Stack**: `Python`, `LangChain`, `Groq LLM`, `ChromaDB`, `Streamlit`, `pandas`
- **Key Highlight**: Automated context extraction from job postings with dynamic portfolio link matching via a local vector store.

### 3. VitalAgent — AI Medical Voice Agent
- **Category**: Voice AI / Full-Stack
- **Tech Stack**: `Next.js 16`, `Vapi Voice AI`, `Google Gemini`, `Clerk Auth`, `Drizzle ORM`, `Neon Postgres`, `shadcn/ui`
- **Key Highlight**: Real-time voice consultation pipeline (STT → LLM → TTS) converting voice calls into structured JSON clinical reports stored in Postgres.

### 4. Utility-Based Information Retrieval System
- **Category**: Information Retrieval / Semantic Search
- **Tech Stack**: `BM25`, `FAISS`, `Sentence-BERT`, `Cross-Encoder`, `MongoDB`, `Docker`
- **Key Highlight**: Three-stage retrieval engine (Sparse + Dense search → Cross-encoder reranking → 8-axis Bayesian utility learning scorer).

### 5. Meds-Mate — IOP Risk Predictor
- **Category**: ML / Healthtech
- **Tech Stack**: `Random Forest`, `Flask API`, `React`, `Next.js`, `scikit-learn`
- **Key Highlight**: Random Forest classifier (93–94% accuracy) predicting intraocular pressure risk served via Flask API to a clinical web UI.

---

## 🎨 Design Tokens & System

- **Ink Background**: `#14171c`
- **Card Fill**: `#1b1f26`
- **Paper Text**: `#ece9e1`
- **Teal Accent**: `#3fb8a6`
- **Amber Highlight**: `#e3a63e`
- **Typography**:
  - *Serif*: Fraunces (Google Font with italic accents)
  - *Sans*: Inter (Google Font)
  - *Mono*: IBM Plex Mono (Google Font)
- **Radii**: Sharp 2px borders for an engineering notebook feel.

---

## 💻 Local Development

1. **Clone the repository**:
   ```bash
   git clone https://github.com/DevanshSingh151/Devansh-dev_portfolio.git
   cd Devansh-dev_portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start local development server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:3000` in your browser.

4. **Build static export**:
   ```bash
   npm run build
   ```
   Generates a static production bundle in the `out/` directory ready for deployment.

---

## 🚀 Deployment

Pre-configured with Next.js static export (`output: 'export'`) for zero-configuration deployment to **Vercel**, **GitHub Pages**, or any static host.

```js
// next.config.js
module.exports = {
  output: 'export',
  images: { unoptimized: true }
};
```

---

## 📬 Contact

- **Email**: [devanshsin2020@gmail.com](mailto:devanshsin2020@gmail.com)
- **GitHub**: [github.com/DevanshSingh151](https://github.com/DevanshSingh151)
- **LinkedIn**: [linkedin.com/in/devansh-singh-08139631b/](https://www.linkedin.com/in/devansh-singh-08139631b/)
