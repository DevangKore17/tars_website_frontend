import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, ContactShadows, Environment } from '@react-three/drei';
import * as THREE from 'three';

function RealisticDummyRover() {
  const group = useRef<THREE.Group>(null);
  
  // Gentle floating animation
  useFrame((state) => {
    if (group.current) {
      group.current.position.y = Math.sin(state.clock.elapsedTime) * 0.05;
    }
  });

  return (
    <group ref={group} position={[0, 0.4, 0]}>
      {/* Main Body (Aluminum) */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[2, 0.8, 3]} />
        <meshStandardMaterial color="#dcdcdc" metalness={0.6} roughness={0.4} />
      </mesh>

      {/* Solar Panel (Top) */}
      <mesh position={[0, 0.45, -0.5]}>
        <boxGeometry args={[1.8, 0.05, 1.8]} />
        <meshStandardMaterial color="#1a2332" metalness={0.9} roughness={0.1} />
      </mesh>
      
      {/* Electronics Box (Gold/Kapton foil look) */}
      <mesh position={[0, 0.6, 0.8]}>
        <boxGeometry args={[1, 0.4, 0.8]} />
        <meshStandardMaterial color="#cc9933" metalness={0.3} roughness={0.6} />
      </mesh>

      {/* Mast */}
      <mesh position={[0, 1.2, 1]}>
        <cylinderGeometry args={[0.08, 0.08, 1.5]} />
        <meshStandardMaterial color="#aaaaaa" metalness={0.8} roughness={0.2} />
      </mesh>
      
      {/* Mast Head (Camera Pan/Tilt unit) */}
      <mesh position={[0, 2.0, 1]}>
        <boxGeometry args={[0.5, 0.4, 0.4]} />
        <meshStandardMaterial color="#e0e0e0" metalness={0.5} roughness={0.5} />
      </mesh>
      
      {/* Camera Lenses */}
      <mesh position={[0.15, 2.0, 1.2]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.08, 0.08, 0.1, 16]} />
        <meshStandardMaterial color="#050505" metalness={0.9} roughness={0.1} />
      </mesh>
      <mesh position={[-0.15, 2.0, 1.2]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.08, 0.08, 0.1, 16]} />
        <meshStandardMaterial color="#050505" metalness={0.9} roughness={0.1} />
      </mesh>

      {/* Suspension / Rocker-Bogie (Simple representation) */}
      <mesh position={[1.05, -0.2, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.05, 0.05, 2.8]} />
        <meshStandardMaterial color="#555" metalness={0.7} roughness={0.3} />
      </mesh>
      <mesh position={[-1.05, -0.2, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.05, 0.05, 2.8]} />
        <meshStandardMaterial color="#555" metalness={0.7} roughness={0.3} />
      </mesh>

      {/* Wheels (Black rubber with metallic hubs) */}
      {[-1.4, 0, 1.4].map((zPos, i) => (
        <React.Fragment key={i}>
          {/* Left Wheel */}
          <group position={[1.3, -0.4, zPos]} rotation={[0, 0, Math.PI / 2]}>
            <mesh>
              <cylinderGeometry args={[0.4, 0.4, 0.3, 32]} />
              <meshStandardMaterial color="#111" roughness={0.9} />
            </mesh>
            <mesh position={[0, 0.16, 0]}>
              <cylinderGeometry args={[0.2, 0.2, 0.05, 16]} />
              <meshStandardMaterial color="#aaa" metalness={0.8} roughness={0.2} />
            </mesh>
          </group>
          {/* Right Wheel */}
          <group position={[-1.3, -0.4, zPos]} rotation={[0, 0, Math.PI / 2]}>
            <mesh>
              <cylinderGeometry args={[0.4, 0.4, 0.3, 32]} />
              <meshStandardMaterial color="#111" roughness={0.9} />
            </mesh>
            <mesh position={[0, -0.16, 0]}>
              <cylinderGeometry args={[0.2, 0.2, 0.05, 16]} />
              <meshStandardMaterial color="#aaa" metalness={0.8} roughness={0.2} />
            </mesh>
          </group>
        </React.Fragment>
      ))}
    </group>
  );
}

export function InteractiveRover() {
  return (
    <div className="w-full h-full min-h-[300px] md:min-h-[400px] lg:min-h-[500px] xl:min-h-[600px] relative" style={{ cursor: 'grab' }}>
      {/* Clean White Studio Background */}
      <div className="absolute inset-0 z-0 bg-[#f8f9fa]">
        <Canvas camera={{ position: [6, 4, 7], fov: 40 }} shadows>
          <color attach="background" args={['#f8f9fa']} />
          <ambientLight intensity={0.5} />
          <directionalLight 
            position={[10, 15, 10]} 
            intensity={1.5} 
            castShadow 
            shadow-mapSize={[1024, 1024]}
          />
          <Environment preset="city" />
          
          <RealisticDummyRover />
          
          {/* Soft floor shadow */}
          <ContactShadows position={[0, -0.6, 0]} opacity={0.6} scale={10} blur={2} far={4} />
          
          <OrbitControls 
            enableZoom={true}
            enablePan={false}
            autoRotate={true}
            autoRotateSpeed={0.5}
            maxPolarAngle={Math.PI / 2}
            minDistance={4}
            maxDistance={15}
          />
        </Canvas>
        
        {/* Decorative Overlay UI - Adjusted for light background */}
        <div className="absolute top-4 left-4 pointer-events-none z-10">
          <span className="font-body text-gray-800 text-sm tracking-widest flex flex-col bg-white/50 p-2 rounded">
            <span>ARES_CAD_PREVIEW</span>
            <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span> STUDIO RENDER</span>
          </span>
        </div>
        <div className="absolute bottom-4 right-4 pointer-events-none z-10">
          <span className="font-heading text-gray-600 text-[8px] border border-gray-300 p-2 bg-white/80">
            DRAG TO ROTATE
          </span>
        </div>
      </div>
    </div>
  );
}
