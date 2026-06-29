import { motion } from 'framer-motion';

export default function Skills({ data }) {
  return (
    <section id="skills" className="max-w-7xl mx-auto px-4 md:px-12 py-10 md:py-32 border-t border-gray-800/50">
      <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="mb-6 md:mb-12">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 md:gap-4 mb-3 md:mb-4">
          <h2 className="text-4xl sm:text-6xl md:text-8xl font-black uppercase">{data.title}</h2>
          <span className="px-3 py-1 border border-neon text-neon text-[10px] font-black uppercase tracking-widest animate-pulse">
            {data.status}
          </span>
        </div>
        <p className="text-gray-400 text-sm md:text-lg max-w-xl">"{data.subtitle}"</p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-4 md:gap-6">
        {data.categories.map((category, catIndex) => (
          <motion.div key={catIndex} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: catIndex * 0.15, duration: 0.6 }} className="group bg-gray-900/30 border border-gray-800 p-5 md:p-8 hover:border-neon/50 transition-all duration-500">
            <div className="flex items-center gap-3 mb-4 md:mb-6">
              <span className="text-neon text-lg">{category.icon}</span>
              <h3 className="text-xs md:text-sm font-black uppercase tracking-widest text-white">{category.name}</h3>
            </div>
            <div className="space-y-2 md:space-y-3">
              {category.items.map((skill, i) => (
                <motion.div key={i} whileHover={{ x: 8 }} className="flex items-center justify-between py-1.5 md:py-2 border-b border-gray-800/50 group-hover:border-gray-700 transition-colors">
                  <span className="text-gray-300 font-medium text-xs md:text-sm">{skill}</span>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, dotIndex) => (
                      <div key={dotIndex} className={`w-1 h-1 md:w-1.5 md:h-1.5 rounded-full ${dotIndex < 4 ? 'bg-neon' : 'bg-gray-700'}`} />
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}