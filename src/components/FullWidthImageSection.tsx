import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';

interface FullWidthImageSectionProps {
  imageSrc: string;
  alt: string;
  overlayGradient?: string;
  height?: 'sm' | 'md' | 'lg';
  children?: React.ReactNode;
}

const FullWidthImageSection = ({ 
  imageSrc, 
  alt, 
  overlayGradient = 'from-background/80 via-background/40 to-background/80',
  height = 'md',
  children 
}: FullWidthImageSectionProps) => {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  const heightClasses = {
    sm: 'h-64 md:h-80',
    md: 'h-80 md:h-96 lg:h-[500px]',
    lg: 'h-96 md:h-[500px] lg:h-[600px]'
  };

  return (
    <div ref={ref} className="relative w-full overflow-hidden">
      <motion.div
        className={`relative ${heightClasses[height]}`}
        initial={{ opacity: 0, scale: 1.1 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 1.1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Background Image with Parallax */}
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${imageSrc})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          initial={{ y: 0 }}
          animate={isInView ? { y: -20 } : { y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />

        {/* Gradient Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-b ${overlayGradient}`} />

        {/* Content Overlay */}
        {children && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="container-custom">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                {children}
              </motion.div>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default FullWidthImageSection;
