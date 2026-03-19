import React, { useEffect, useState, useCallback } from 'react';

interface SlideLayoutProps {
  children: React.ReactNode;
}

export default function SlideLayout({ children }: SlideLayoutProps) {
  const [scale, setScale] = useState(1);

  const updateScale = useCallback(() => {
    const scaleX = window.innerWidth / 1920;
    const scaleY = window.innerHeight / 1080;
    setScale(Math.min(scaleX, scaleY));
  }, []);

  useEffect(() => {
    updateScale();
    window.addEventListener('resize', updateScale);
    return () => window.removeEventListener('resize', updateScale);
  }, [updateScale]);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-[hsl(217,91%,4%)]">
      <div
        className="absolute w-[1920px] h-[1080px] left-1/2 top-1/2"
        style={{
          marginLeft: -960,
          marginTop: -540,
          transform: `scale(${scale})`,
          transformOrigin: 'center center',
        }}
      >
        <div className="slide-content w-full h-full text-white">
          {children}
        </div>
      </div>
    </div>
  );
}
