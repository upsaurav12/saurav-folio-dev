import Header from "@/components/Header";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Footer />
    </div>
  );
};

export default Index;
