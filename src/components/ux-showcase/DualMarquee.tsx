import usafLogo from '@/assets/brands/usaf-logo.png';
import boeingLogo from '@/assets/brands/boeing-logo.png';
import marineCorpsLogo from '@/assets/brands/marine-corps-logo.webp';
import elSalvadorLogo from '@/assets/brands/el-salvador-tourism-logo.png';
import visionsLogo from '@/assets/brands/visions-of-hope-logo.png';
import soulTrainLogo from '@/assets/brands/soul-train-logo.png';
import bbvawLogo from '@/assets/brands/bbvaw-logo.png';

const DualMarquee = () => {
  const brands = [
    { src: usafLogo, alt: 'US Air Force' },
    { src: boeingLogo, alt: 'Boeing' },
    { src: marineCorpsLogo, alt: 'Marine Corps' },
    { src: elSalvadorLogo, alt: 'El Salvador Tourism' },
    { src: visionsLogo, alt: 'Visions of Hope' },
    { src: soulTrainLogo, alt: "Soul Train's Eatery" },
    { src: bbvawLogo, alt: 'Benefits Beyond VA Wall' },
  ];

  const methods = [
    'User Research',
    'Journey Mapping',
    'Usability Testing',
    'Persona Development',
    'Systems Analysis',
    'Wireframing',
    'Prototyping',
    'A/B Testing',
    'Heuristic Evaluation',
    'Card Sorting',
    'Affinity Mapping',
    'Contextual Inquiry',
  ];

  return (
    <section className="py-12 bg-muted/30 border-y border-border overflow-hidden">
      <div className="mb-8">
        <h2 className="text-center text-sm font-semibold tracking-wider text-muted-foreground uppercase mb-6">
          Trusted By
        </h2>
        
        {/* Brands Marquee */}
        <div className="relative flex overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...brands, ...brands].map((brand, idx) => (
              <div
                key={`brand-1-${idx}`}
                className="mx-8 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
              >
                <img
                  src={brand.src}
                  alt={brand.alt}
                  className="h-12 w-auto object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
          <div className="flex absolute top-0 animate-marquee whitespace-nowrap" aria-hidden="true">
            {[...brands, ...brands].map((brand, idx) => (
              <div
                key={`brand-2-${idx}`}
                className="mx-8 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
              >
                <img
                  src={brand.src}
                  alt={brand.alt}
                  className="h-12 w-auto object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-center text-sm font-semibold tracking-wider text-muted-foreground uppercase mb-6">
          Research Methods
        </h2>
        
        {/* Methods Marquee */}
        <div className="relative flex overflow-hidden">
          <div className="flex animate-marquee-reverse whitespace-nowrap">
            {[...methods, ...methods].map((method, idx) => (
              <div
                key={`method-1-${idx}`}
                className="mx-4 flex items-center justify-center"
              >
                <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
                  {method}
                </span>
              </div>
            ))}
          </div>
          <div className="flex absolute top-0 animate-marquee-reverse whitespace-nowrap" aria-hidden="true">
            {[...methods, ...methods].map((method, idx) => (
              <div
                key={`method-2-${idx}`}
                className="mx-4 flex items-center justify-center"
              >
                <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
                  {method}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DualMarquee;
