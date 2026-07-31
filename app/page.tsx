import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import StackSection from "../components/StackSection";
import ProjectsSection from "../components/ProjectsSection";
import PathSection from "../components/PathSection";
import ContactFooter from "../components/ContactFooter";

export default function Home() {
  return (
    <main className="min-h-screen bg-ink text-paper selection:bg-teal selection:text-ink">
      <Navbar />
      <Hero />
      <AboutSection />
      <StackSection />
      <ProjectsSection />
      <PathSection />
      <ContactFooter />
    </main>
  );
}
