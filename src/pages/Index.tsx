import ParticleBackground from '@/components/ParticleBackground';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Education from '@/components/Education';
import Achievements from '@/components/Achievements';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <ParticleBackground />
      <Navigation />
      
      <main>
        <section id="home">
          <Hero />
        </section>
        <About />
        <Experience />
        <Projects />
        <Education />
        <Achievements />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
