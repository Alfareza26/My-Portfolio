import { motion } from 'framer-motion';

export default function Footer({ data }) {
  return (
    <footer className="border-t border-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 md:px-12 py-10 md:py-20 overflow-hidden">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
          <h2 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter text-white/10 leading-none break-words">
            {data.name}
          </h2>
          <p className="mt-4 md:mt-6 text-neon font-bold text-sm md:text-lg italic text-center px-4">"{data.tagline}"</p>
          <p className="mt-2 text-gray-500 text-[10px] md:text-sm text-center px-4">{data.campus}</p>
        </motion.div>
      </div>

      <div className="border-t border-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 md:px-12 py-4 md:py-6 flex flex-col md:flex-row items-center justify-between gap-3 md:gap-4">
          <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-gray-600 text-center md:text-left">
            © {new Date().getFullYear()} {data.name}.
          </p>
          <div className="flex items-center gap-4 md:gap-6">
            {data.links.map((link, i) => (
              <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-neon transition-colors">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}