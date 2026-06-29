import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import { portfolioData } from './data'; // Import langsung dari file data

function App() {
  const data = portfolioData; // Data langsung tersedia, tidak perlu loading

  return (
    <div className="min-h-screen bg-dark text-white overflow-x-hidden">
      <Navbar />
      <Hero data={data.hero} />
      <About data={data.about} />
      <Skills data={data.skills} />
      <Projects data={data.projects} />
      <Footer data={data.footer} />
    </div>
  );
}

export default App;