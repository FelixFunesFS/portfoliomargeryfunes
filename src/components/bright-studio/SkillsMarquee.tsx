import { motion } from 'framer-motion';
import usafLogo from '@/assets/brands/usaf-logo.png';
import boeingLogo from '@/assets/brands/boeing-logo.png';
import marineCorpsLogo from '@/assets/brands/marine-corps-logo.webp';
import bbvawLogo from '@/assets/brands/bbvaw-logo.png';
import elSalvadorLogo from '@/assets/brands/el-salvador-tourism-logo.png';
import visionsOfHopeLogo from '@/assets/brands/visions-of-hope-logo.png';
import soulTrainLogo from '@/assets/brands/soul-train-logo.png';

const SkillsMarquee = () => {
  const brands = [
    { name: 'U.S. Air Force', logo: usafLogo },
    { name: 'Boeing', logo: boeingLogo },
    { name: 'U.S. Marine Corps', logo: marineCorpsLogo },
    { name: 'BBVAW', logo: bbvawLogo },
    { name: 'El Salvador Tourism', logo: elSalvadorLogo },
    { name: 'Visions of Hope', logo: visionsOfHopeLogo },
    { name: "Soul Train's Eatery", logo: soulTrainLogo },
  ];

  const skills = [
    'User Research',
    'Journey Mapping',
    'Usability Testing',
    'Persona Development',
    'Systems Analysis',
    'Wireframing',
    'Prototyping',
    'A/B Testing',
    'Heuristic Evaluation',
    'Stakeholder Interviews',
    'Data Analysis',
    'Information Architecture',
  ];

  return (
    <section className="py-16 bg-[#FAFAFA] overflow-hidden border-y border-gray-200" aria-label="Organizations and methodologies">
      {/* Brands Marquee */}
      <div className="mb-12">
        <div className="relative">
          <motion.div
            className="flex gap-12 items-center"
            animate={{ x: [0, -1920] }}
            transition={{
              x: {
                duration: 30,
                repeat: Infinity,
                ease: 'linear',
              },
            }}
          >
            {[...brands, ...brands, ...brands].map((brand, index) => (
              <div
                key={`brand-${index}`}
                className="flex-shrink-0 w-28 h-28 rounded-2xl bg-white shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center p-4 group"
              >
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Skills Marquee (Reverse Direction) */}
      <div>
        <div className="relative">
          <motion.div
            className="flex gap-4 items-center"
            animate={{ x: [-1920, 0] }}
            transition={{
              x: {
                duration: 40,
                repeat: Infinity,
                ease: 'linear',
              },
            }}
          >
            {[...skills, ...skills, ...skills, ...skills].map((skill, index) => (
              <div
                key={`skill-${index}`}
                className="flex-shrink-0 px-6 py-3 rounded-full bg-white border-2 border-gray-200 text-gray-700 font-medium text-base shadow-sm hover:shadow-md hover:border-[#3B82F6] hover:text-[#3B82F6] transition-all duration-300"
              >
                {skill}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsMarquee;
