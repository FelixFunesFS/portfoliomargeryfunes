import React, { useRef, useMemo, useCallback } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

interface ParticleSystemProps {
  count?: number;
  mousePosition: { x: number; y: number };
}

function ParticleSystem({ count = 2000, mousePosition }: ParticleSystemProps) {
  const ref = useRef<THREE.Points>(null);
  const { viewport } = useThree();
  
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return pos;
  }, [count]);

  const originalPositions = useMemo(() => [...positions], [positions]);

  useFrame((state) => {
    if (!ref.current) return;
    
    const time = state.clock.elapsedTime;
    const positions = ref.current.geometry.attributes.position.array as Float32Array;
    
    // Mouse influence
    const mouseInfluence = 0.8;
    const mouseX = (mousePosition.x / window.innerWidth - 0.5) * 2;
    const mouseY = -(mousePosition.y / window.innerHeight - 0.5) * 2;
    
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      
      // Get original positions
      const originalX = originalPositions[i3];
      const originalY = originalPositions[i3 + 1];
      const originalZ = originalPositions[i3 + 2];
      
      // Add gentle floating animation
      const floatX = Math.sin(time * 0.5 + originalX * 0.1) * 0.2;
      const floatY = Math.cos(time * 0.3 + originalY * 0.1) * 0.2;
      const floatZ = Math.sin(time * 0.4 + originalZ * 0.1) * 0.1;
      
      // Calculate distance from mouse (in screen space)
      const distance = Math.sqrt(
        Math.pow(originalX - mouseX * 10, 2) + 
        Math.pow(originalY - mouseY * 10, 2)
      );
      
      // Mouse repulsion effect
      const mouseEffect = Math.max(0, 1 - distance / 5);
      const repulsionX = (originalX - mouseX * 10) * mouseEffect * mouseInfluence;
      const repulsionY = (originalY - mouseY * 10) * mouseEffect * mouseInfluence;
      
      // Update positions
      positions[i3] = originalX + floatX + repulsionX;
      positions[i3 + 1] = originalY + floatY + repulsionY;
      positions[i3 + 2] = originalZ + floatZ;
    }
    
    ref.current.geometry.attributes.position.needsUpdate = true;
    
    // Rotate the entire system slowly
    ref.current.rotation.x = time * 0.05;
    ref.current.rotation.y = time * 0.02;
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="hsl(215, 85%, 35%)"
        size={0.02}
        sizeAttenuation={true}
        alphaTest={0.1}
        opacity={0.6}
      />
    </Points>
  );
}

interface Interactive3DParticlesProps {
  mousePosition: { x: number; y: number };
}

export const Interactive3DParticles: React.FC<Interactive3DParticlesProps> = ({ mousePosition }) => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 75 }}
        dpr={[1, 2]}
        performance={{ min: 0.5 }}
      >
        <ParticleSystem mousePosition={mousePosition} />
      </Canvas>
    </div>
  );
};