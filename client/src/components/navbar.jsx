import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['About', 'Skills', 'Works'];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled || isOpen ? 'bg-dark/95 backdrop-blur-md border-b border-gray-800' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-12 py-4 flex items-center justify-between">
          <a href="#" className="text-xl font-black tracking-tighter text-neon" onClick={() => setIsOpen(false)}>
            MUHAMMAD RIZKI ALFAREZA<span className="text-white">.</span>
          </a>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-bold uppercase tracking-widest text-gray-400 hover:text-neon transition-colors duration-300">
                {item}
              </a>
            ))}
            <a href="https://github.com/Alfareza26" target="_blank" rel="noopener noreferrer" className="px-5 py-2 border border-neon text-neon text-sm font-bold uppercase tracking-wider hover:bg-neon hover:text-dark transition-all duration-300">
              GitHub
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button 
            className="md:hidden text-white text-3xl focus:outline-none z-50"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? '✕' : '≡'}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-dark/98 backdrop-blur-lg flex flex-col items-center justify-center md:hidden"
          >
            <div className="flex flex-col items-center gap-8">
              {navLinks.map((item, i) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => setIsOpen(false)}
                  className="text-3xl font-black uppercase tracking-widest text-white hover:text-neon transition-colors"
                >
                  {item}
                </motion.a>
              ))}
              <motion.a
                href="https://github.com/Alfareza26"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                onClick={() => setIsOpen(false)}
                className="mt-4 px-8 py-3 bg-neon text-dark font-black uppercase tracking-wider text-lg"
              >
                View GitHub
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}