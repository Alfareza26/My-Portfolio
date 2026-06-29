import { motion } from 'framer-motion';

export default function Hero({ data }) {
  return (
    // min-h-[90vh] mencegah layar HP terlalu kosong di bagian bawah
    <section className="relative min-h-[90vh] md:min-h-screen flex flex-col justify-center items-start max-w-7xl mx-auto px-4 md:px-12 pt-20 md:pt-24 pb-8 md:pb-12 overflow-hidden">
      
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(rgba(255,204,0,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,204,0,0.3) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />

      <motion.div
        animate={{ x: [0, 50, 0], y: [0, -30, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 right-0 w-64 h-64 md:w-96 md:h-96 bg-neon/10 rounded-full blur-[100px] pointer-events-none"
      />

      <div className="relative z-10 w-full">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-neon text-xs md:text-sm font-bold uppercase tracking-[0.3em] mb-3 md:mb-6">
          ◆ Software Engineer Student
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl sm:text-7xl md:text-8xl lg:text-[10rem] font-black tracking-tighter leading-[0.85] uppercase break-words"
        >
          <span className="block text-white">{data.line1}</span>
          <span className="block text-white">{data.line2}</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-neon via-yellow-400 to-orange-500 text-glow">
            {data.line3}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-4 md:mt-8 text-base md:text-xl text-gray-400 max-w-lg font-light tracking-wide italic"
        >
          "{data.subtitle}"
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          // mt-6 di HP, mt-10 di Desktop
          className="mt-6 md:mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 w-full sm:w-auto"
        >
          <a href="#works" className="group w-full sm:w-auto text-center px-6 py-3 md:px-8 md:py-4 bg-neon text-dark font-black uppercase tracking-wider text-sm hover:scale-105 transition-transform duration-300">
            {data.cta} <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </a>
          <a href="https://github.com/Alfareza26" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto text-center px-6 py-3 md:px-8 md:py-4 border border-gray-600 text-gray-300 font-bold uppercase tracking-wider text-sm hover:border-neon hover:text-neon transition-all duration-300">
            View GitHub
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
      >
        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-500">{data.scrollText}</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }} className="w-px h-8 bg-gradient-to-b from-neon to-transparent" />
      </motion.div>
    </section>
  );
}