import React from 'react';
import Tilt from 'react-parallax-tilt';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  tiltMaxAngleX?: number;
  tiltMaxAngleY?: number;
  scale?: number;
  transitionSpeed?: number;
}

const TiltCard: React.FC<TiltCardProps> = ({
  children,
  className = '',
  tiltMaxAngleX = 10,
  tiltMaxAngleY = 10,
  scale = 1.02,
  transitionSpeed = 400,
}) => {
  return (
    <Tilt
      tiltMaxAngleX={tiltMaxAngleX}
      tiltMaxAngleY={tiltMaxAngleY}
      scale={scale}
      transitionSpeed={transitionSpeed}
      className={className}
      glareEnable={false}
    >
      {children}
    </Tilt>
  );
};

export default TiltCard;
