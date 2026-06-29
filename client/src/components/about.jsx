import { motion } from 'framer-motion';

export default function About({ data }) {
  return (
    // py-10 di HP, py-32 di Desktop
    <section id="about" className="max-w-7xl mx-auto px-4 md:px-12 py-10 md:py-32 border-t border-gray-800/50">
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        
        <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.8 }}>
          <h2 className="text-4xl sm:text-6xl md:text-8xl font-black uppercase leading-[0.9] mb-4 md:mb-8">
            <span className="block text-white">{data.title_line1}</span>
            <span className="block text-neon text-glow">{data.title_line2}</span>
            <span className="block text-white">{data.title_line3}</span>
          </h2>

          <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-2 md:mb-4">{data.description}</p>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-6 md:mb-8">{data.personalIntro}</p>

          <div className="flex flex-wrap gap-6 md:gap-8">
            {data.stats.map((stat, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}>
                <div className="text-2xl md:text-4xl font-black text-neon">{stat.number}</div>
                <div className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-gray-500 mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.8 }} className="relative mt-6 lg:mt-0">
          <div className="relative overflow-hidden rounded-sm">
            <img src={data.image} alt="Digital Craft" className="w-full h-[250px] md:h-[500px] object-cover grayscale hover:grayscale-0 transition-all duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}
            className="relative md:absolute -bottom-4 md:-bottom-8 left-0 md:-left-8 bg-dark border border-gray-800 p-4 md:p-6 max-w-[90%] md:max-w-xs shadow-2xl mt-4 md:mt-0 mx-auto md:mx-0"
          >
            <div className="text-neon text-2xl md:text-3xl font-black mb-1 md:mb-2">"</div>
            <p className="text-gray-200 text-xs md:text-sm font-medium italic leading-relaxed">{data.quote}</p>
            <div className="mt-2 md:mt-3 text-[10px] font-bold uppercase tracking-widest text-gray-500">— Alfareza</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}