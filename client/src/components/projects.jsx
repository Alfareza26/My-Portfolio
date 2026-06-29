import { motion } from 'framer-motion';

export default function Projects({ data }) {
  return (
    <section id="works" className="max-w-7xl mx-auto px-4 md:px-12 py-10 md:py-32 border-t border-gray-800/50">
      <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="mb-6 md:mb-12">
        <h2 className="text-4xl sm:text-6xl md:text-8xl font-black uppercase mb-2 md:mb-4">{data.title}</h2>
        <p className="text-gray-400 text-sm md:text-lg max-w-xl">{data.subtitle}</p>
      </motion.div>

      {/* space-y-4 di HP, space-y-6 di Desktop */}
      <div className="space-y-4 md:space-y-6">
        {data.list.map((project, index) => (
          <motion.a
            key={index} href={project.link} target="_blank" rel="noopener noreferrer"
            initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1, duration: 0.6 }}
            whileHover={{ x: 12 }}
            className="group block border border-gray-800 hover:border-gray-600 p-5 md:p-10 transition-all duration-500 relative overflow-hidden"
          >
            <div className="relative z-10 flex flex-col gap-4 md:gap-6">
              <div className="flex-1">
                <span className="text-[10px] md:text-xs font-bold text-gray-600 tracking-widest mb-1 md:mb-2 block">PROJECT {String(index + 1).padStart(2, '0')}</span>
                
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-2xl sm:text-3xl md:text-5xl font-black uppercase tracking-tight text-white group-hover:text-neon transition-colors duration-300 break-words">
                    {project.name}
                  </h3>
                  <div className="flex-shrink-0 md:hidden">
                    <div className="w-9 h-9 md:w-10 md:h-10 border border-gray-700 flex items-center justify-center group-hover:border-neon group-hover:bg-neon transition-all duration-300">
                      <span className="text-lg text-gray-500 group-hover:text-dark transition-colors">→</span>
                    </div>
                  </div>
                </div>

                <span className="inline-block mt-2 md:mt-3 text-[10px] md:text-xs font-bold uppercase tracking-widest px-2 py-1 border border-gray-700 text-gray-400 group-hover:border-neon/50 group-hover:text-neon transition-all">
                  {project.tech}
                </span>
                <p className="mt-3 md:mt-4 text-gray-400 text-xs md:text-base max-w-lg leading-relaxed">{project.desc}</p>
              </div>

              <div className="hidden md:flex flex-shrink-0 justify-end">
                <motion.div whileHover={{ scale: 1.1 }} className="w-16 h-16 border border-gray-700 flex items-center justify-center group-hover:border-neon group-hover:bg-neon transition-all duration-300">
                  <span className="text-2xl text-gray-500 group-hover:text-dark transition-colors">→</span>
                </motion.div>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}