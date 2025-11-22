import { motion, useScroll } from 'framer-motion';

const ScrollProgressIndicator = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-primary/20 z-50"
      style={{ scaleX: scrollYProgress, transformOrigin: '0%' }}
    >
      <motion.div
        className="h-full bg-gradient-to-r from-primary via-accent to-success"
        style={{ width: '100%' }}
      />
    </motion.div>
  );
};

export default ScrollProgressIndicator;
