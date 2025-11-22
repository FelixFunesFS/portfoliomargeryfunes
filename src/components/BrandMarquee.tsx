import { motion } from "framer-motion";
import usafLogo from "@/assets/brands/usaf-logo.png";
import boeingLogo from "@/assets/brands/boeing-logo.png";
import marineCorpsLogo from "@/assets/brands/marine-corps-logo.webp";
import bbvawLogo from "@/assets/brands/bbvaw-logo.png";
import elSalvadorLogo from "@/assets/brands/el-salvador-tourism-logo.png";
import visionsOfHopeLogo from "@/assets/brands/visions-of-hope-logo.png";
import soulTrainLogo from "@/assets/brands/soul-train-logo.png";

const BrandMarquee = () => {
  const brands = [
    { name: "U.S. Air Force", logo: usafLogo },
    { name: "Boeing", logo: boeingLogo },
    { name: "U.S. Marine Corps", logo: marineCorpsLogo },
    { name: "BBVAW", logo: bbvawLogo },
    { name: "El Salvador Tourism", logo: elSalvadorLogo },
    { name: "Visions of Hope", logo: visionsOfHopeLogo },
    { name: "Soul Train's Eatery", logo: soulTrainLogo },
  ];

  return (
    <section 
      className="py-12 border-t border-border/40 bg-card/30 overflow-hidden"
      aria-label="Organizations I've worked with"
    >
      <div className="container">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-lg font-semibold text-muted-foreground mb-8"
        >
          Trusted By
        </motion.h2>
        
        <div className="relative">
          <div className="overflow-hidden">
            <motion.div 
              className="flex gap-16 sm:gap-20 animate-marquee hover:[animation-play-state:paused]"
            >
              {/* First set of logos */}
              {brands.map((brand, index) => (
                <div
                  key={`brand-1-${index}`}
                  className="flex-shrink-0 flex items-center justify-center"
                >
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="h-20 sm:h-32 w-auto object-contain transition-all duration-300 opacity-100"
                  />
                </div>
              ))}
              
              {/* Duplicate set for seamless loop */}
              {brands.map((brand, index) => (
                <div
                  key={`brand-2-${index}`}
                  className="flex-shrink-0 flex items-center justify-center"
                >
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="h-20 sm:h-32 w-auto object-contain transition-all duration-300 opacity-100"
                  />
                </div>
              ))}
            </motion.div>
          </div>
          
          {/* Gradient overlays for fade effect */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-card/30 to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-card/30 to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
};

export default BrandMarquee;
