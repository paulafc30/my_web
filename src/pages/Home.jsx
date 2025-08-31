import Hero from "../components/Hero.jsx";
import About from "../components/About.jsx";
import Experience from "../components/Experience.jsx";
import Projects from "../components/Projects.jsx";
import TechStack from "../components/TechStack.jsx";


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
