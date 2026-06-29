import Navbar from './components/navbar';
import Hero from './components/hero';
import About from './components/about';
import Skills from './components/skills';
import Projects from './components/projects';
import Footer from './components/footer';
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
