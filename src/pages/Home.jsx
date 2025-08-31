import Hero from "../components/Hero.jsx";
import About from "../components/About.jsx";
import Experience from "../components/Experience.jsx";
import Projects from "../components/Projects.jsx";
import TechStack from "../components/TechStack.jsx";
import Contact from "../components/Contact.jsx";
import Footer from "../components/Footer.jsx";

export default function Home() {
  return (
    <main className="bg-gray-900">
      <Hero />
      <About />
      <Experience />
      <Projects />
      <TechStack />
      <Contact />
      <Footer />
    </main>
  );
}
