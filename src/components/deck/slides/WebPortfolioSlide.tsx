import { motion } from 'framer-motion';
import SlideLayout from '../SlideLayout';
import soulTrainHomepage from '@/assets/soul-train-homepage.png';
import elSalvadorImage from '@/assets/el-salvador-tourism.png';
import visionsOfHopeHero from '@/assets/visions-of-hope-hero.png';
import bbvawHero from '@/assets/bbvaw-hero.png';

const projects = [
  { title: "Soul Train's Eatery", metric: '40% fewer errors', image: soulTrainHomepage, link: 'https://train-catering-creations.lovable.app' },
  { title: 'Discover El Salvador', metric: '300% more bookings', image: elSalvadorImage, link: 'https://discover-elsalvador.com' },
  { title: 'Visions of Hope', metric: '200% more inquiries', image: visionsOfHopeHero, link: 'https://visionsofhope.ngo' },
  { title: 'Benefits Beyond the VA Wall', metric: '500+ veterans helped', image: bbvawHero, link: 'https://bbvaw.us' },
];

export default function WebPortfolioSlide() {
  return (
    <SlideLayout>
      <div className="flex flex-col justify-center h-full px-20">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <p className="text-[hsl(190,75%,45%)] text-[20px] font-medium tracking-[0.15em] uppercase mb-4">Live Projects</p>
          <h2 className="text-[52px] font-bold mb-12">
            <span className="text-white">Web Development </span>
            <span className="text-[hsl(215,85%,55%)]">Portfolio</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.1 }}
              className="group rounded-xl border border-white/10 bg-white/5 overflow-hidden hover:border-white/20 transition-all"
            >
              <div className="h-[200px] overflow-hidden">
                <img src={p.image} alt={p.title} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6 flex justify-between items-center">
                <div>
                  <h3 className="text-[20px] font-semibold text-white">{p.title}</h3>
                  <p className="text-[14px] text-white/40 mt-1">View live site →</p>
                </div>
                <div className="text-[hsl(190,75%,45%)] text-[16px] font-semibold">{p.metric}</div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </SlideLayout>
  );
}
