import type { Metadata } from "next";
import { Fraunces, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  style: ["normal", "italic"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Devansh Singh — Data Science & ML Engineering Portfolio",
  description:
    "Data Science & ML Engineering portfolio of Devansh Singh (VIT Chennai). Building retrieval pipelines, applied ML classifiers, and end-to-end full-stack AI systems.",
  keywords: [
    "Devansh Singh",
    "Data Science",
    "ML Engineer",
    "Machine Learning",
    "Information Retrieval",
    "VIT Chennai",
    "VitalAgent",
    "Motorq",
  ],
  authors: [{ name: "Devansh Singh" }],
  openGraph: {
    title: "Devansh Singh — Data Science & ML Engineering Portfolio",
    description:
      "Building systems that turn data into decisions. Retrieval pipelines, ML classifiers, and full-stack AI applications.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable} ${ibmPlexMono.variable}`}>
      <body className="bg-ink text-paper antialiased selection:bg-teal selection:text-ink">
        {children}
      </body>
    </html>
  );
}
