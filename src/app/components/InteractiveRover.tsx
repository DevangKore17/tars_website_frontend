import React, { useRef, Suspense, Component } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, ContactShadows, Environment, useGLTF } from '@react-three/drei';
import * as THREE from 'three';

/* ─────────────────────────────────────────────
 * GLB Model Path — drop your .glb file here:
 *   public/models/rover.glb
 * ───────────────────────────────────────────── */
const GLB_MODEL_PATH = '/models/rover.glb';

/**
 * Error boundary that catches GLB load failures and shows a placeholder.
 */
class ModelErrorBoundary extends Component<
  { children: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <PlaceholderModel />;
    }
    return this.props.children;
  }
}

/**
 * Placeholder shown when no .glb file is found.
 */
function PlaceholderModel() {
  const group = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <group ref={group}>
      <mesh>
        <boxGeometry args={[1.5, 1.5, 1.5]} />
        <meshStandardMaterial color="#333" wireframe />
      </mesh>
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[1.52, 1.52, 1.52]} />
        <meshStandardMaterial color="#00ff41" wireframe opacity={0.3} transparent />
      </mesh>
    </group>
  );
}

/**
 * Loads and renders an external .glb model.
 * Auto-scales and centers the model to fit the viewport regardless of its original size.
 */
function RoverModel() {
  const { scene } = useGLTF(GLB_MODEL_PATH);
  const group = useRef<THREE.Group>(null);

  React.useEffect(() => {
    // Compute bounding box and auto-scale the model to a reasonable size
    const box = new THREE.Box3().setFromObject(scene);
    const size = new THREE.Vector3();
    const center = new THREE.Vector3();
    box.getSize(size);
    box.getCenter(center);

    // Scale the model so the largest dimension is ~3 units
    const maxDim = Math.max(size.x, size.y, size.z);
    if (maxDim > 0) {
      const scale = 3 / maxDim;
      scene.scale.setScalar(scale);
    }

    // Re-center after scaling
    const scaledBox = new THREE.Box3().setFromObject(scene);
    const scaledCenter = new THREE.Vector3();
    scaledBox.getCenter(scaledCenter);
    scene.position.sub(scaledCenter);

    // Enhance materials
    scene.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;

        const mat = child.material as THREE.MeshStandardMaterial;
        if (mat && mat.isMeshStandardMaterial) {
          const isWhite = mat.color && mat.color.r > 0.9 && mat.color.g > 0.9 && mat.color.b > 0.9;
          if (isWhite) {
            mat.color.set('#e0e0e0');
            mat.metalness = 0.15;
            mat.roughness = 0.6;
          }
          mat.envMapIntensity = 1.2;
          mat.needsUpdate = true;
        }
      }
    });
  }, [scene]);

  // Gentle floating animation
  useFrame((state) => {
    if (group.current) {
      group.current.position.y = Math.sin(state.clock.elapsedTime) * 0.05;
    }
  });

  return (
    <group ref={group}>
      <primitive object={scene} />
    </group>
  );
}

/**
 * Simple loading indicator shown while the GLB file is being fetched.
 */
function LoadingFallback() {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 2;
    }
  });

  return (
    <mesh ref={ref}>
      <octahedronGeometry args={[0.5]} />
      <meshStandardMaterial color="#00ff41" wireframe />
    </mesh>
  );
}

export function InteractiveRover() {
  return (
    <div className="w-full h-full min-h-[300px] md:min-h-[400px] lg:min-h-[500px] xl:min-h-[600px] relative" style={{ cursor: 'grab' }}>
      {/* Original light background */}
      <div className="absolute inset-0 z-0 bg-[#f8f9fa]">
        <Canvas camera={{ position: [6, 4, 7], fov: 40 }} shadows>
          <color attach="background" args={['#f8f9fa']} />
          <ambientLight intensity={0.5} />
          <hemisphereLight args={['#b1c4de', '#4a4a4a', 0.6]} />
          <directionalLight 
            position={[10, 15, 10]} 
            intensity={1.5} 
            castShadow 
            shadow-mapSize={[1024, 1024]}
          />
          <directionalLight position={[-8, 10, -5]} intensity={0.8} />
          <directionalLight position={[0, -5, 10]} intensity={0.3} />
          <Environment preset="city" />
          
          <ModelErrorBoundary>
            <Suspense fallback={<LoadingFallback />}>
              <RoverModel />
            </Suspense>
          </ModelErrorBoundary>
          
          {/* Soft floor shadow */}
          <ContactShadows position={[0, -0.6, 0]} opacity={0.6} scale={10} blur={2} far={4} />
          
          <OrbitControls 
            enableZoom={true}
            enablePan={true}
            autoRotate={true}
            autoRotateSpeed={0.5}
            maxPolarAngle={Math.PI / 1.2}
            minDistance={1}
            maxDistance={50}
          />
        </Canvas>
        
        {/* Decorative Overlay UI */}
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
