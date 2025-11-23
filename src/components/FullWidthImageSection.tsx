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
  const {
    ref,
    isInView
  } = useInView({
    threshold: 0.2
  });
  const heightClasses = {
    sm: 'h-64 md:h-80',
    md: 'h-80 md:h-96 lg:h-[500px]',
    lg: 'h-96 md:h-[500px] lg:h-[600px]'
  };
  return <div ref={ref} className="relative w-full overflow-hidden">
      
    </div>;
};
export default FullWidthImageSection;