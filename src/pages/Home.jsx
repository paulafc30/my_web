import Hero from "../sections/Hero";
import About from "../sections/About";
import Experience from "../sections/Experience";
import Projects from "../sections/Projects";
import TechStack from "../sections/TechStack";

export default function Home() {
  return (
    <main className="pt-20 space-y-12">
      <Hero />
      <About />
      <Experience />
      <Projects />
      <TechStack />
    </main>
  );
}
