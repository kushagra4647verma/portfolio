import React, { useRef, useEffect, Component, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, useAnimations, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { Cpu } from 'lucide-react';

class ThreeErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

// 3D Sphere Robot loaded from /360_sphere_robot_no_glass.glb with cursor tracking & animations
const SphereRobot = () => {
  const groupRef = useRef();
  const { scene, animations } = useGLTF('/360_sphere_robot_no_glass.glb');
  const { actions } = useAnimations(animations, groupRef);

  // Play built-in GLTF animations if available
  useEffect(() => {
    if (actions && Object.keys(actions).length > 0) {
      Object.keys(actions).forEach((key) => {
        actions[key]?.reset().fadeIn(0.5).play();
      });
    }
  }, [actions]);

  // Cursor Tracking Animation & Smooth Lerp Rotation
  useFrame((state) => {
    if (groupRef.current) {
      // Cursor pointer relative coordinates (-1 to +1)
      const targetRotationY = (state.pointer.x * Math.PI) / 3;
      const targetRotationX = (-state.pointer.y * Math.PI) / 4;

      // Smoothly interpolate current rotation to cursor direction
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        targetRotationY,
        0.08
      );
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        targetRotationX,
        0.08
      );

      // Subtle ambient floating motion
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 1.5) * 0.1 - 0.2;
    }
  });

  return (
    <group ref={groupRef} scale={8} position={[0, -0.2, 0]}>
      <primitive object={scene} />
    </group>
  );
};

// Preload the GLB model asset
useGLTF.preload('/360_sphere_robot_no_glass.glb');

const ThreeFallback = ({ theme = 'dark' }) => {
  const isDark = theme === 'dark';
  return (
    <div className={`w-full h-full min-h-[300px] flex flex-col items-center justify-center p-6 border rounded-3xl text-center space-y-4 font-sans ${
      isDark ? 'bg-apple-card border-white/10 text-white' : 'bg-white border-black/10 text-black shadow-md'
    }`}>
      <div className={`p-3 rounded-2xl border ${isDark ? 'bg-white/5 border-white/10 text-white' : 'bg-black/5 border-black/10 text-black'}`}>
        <Cpu className="w-8 h-8 text-apple-blue" />
      </div>
      <div>
        <h4 className="font-semibold text-sm tracking-tight">
          3D Robot Interactive Visualizer
        </h4>
        <p className="text-xs opacity-70 mt-1">
          Model Loading... Move cursor to interact
        </p>
      </div>
    </div>
  );
};

export const Hero3D = ({ theme = 'dark' }) => {
  return (
    <div className="w-full h-[360px] sm:h-[460px] lg:h-[520px] relative flex items-center justify-center">
      <ThreeErrorBoundary fallback={<ThreeFallback theme={theme} />}>
        <Canvas
          camera={{ position: [0, 0, 5.0], fov: 45 }}
          gl={{ antialias: true, alpha: true }}
          className="w-full h-full relative z-10"
        >
          {/* Studio Lighting Setup */}
          <ambientLight intensity={2.0} />
          <directionalLight position={[10, 10, 8]} intensity={3.0} color="#ffffff" />
          <directionalLight position={[-8, -8, 6]} intensity={2.0} color="#2997ff" />
          <spotLight position={[0, 10, 5]} intensity={2.5} angle={0.6} penumbra={0.8} color="#ffffff" />

          <Suspense fallback={null}>
            <SphereRobot />
          </Suspense>

          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate={false}
            maxPolarAngle={Math.PI / 1.4}
            minPolarAngle={Math.PI / 3}
          />
        </Canvas>
      </ThreeErrorBoundary>
    </div>
  );
};
