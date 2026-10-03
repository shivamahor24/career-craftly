import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import * as THREE from 'three';
import { SVGLoader } from 'three-stdlib';

/* Extruded Logo Mesh Component */
const LogoMesh = ({ mousePos }) => {
  const meshRef = useRef();

  // Load the logo SVG
  const svgData = useLoader(SVGLoader, '/assets/logo.svg');

  // Generate centered ExtrudeGeometry from SVG paths
  const geometry = useMemo(() => {
    if (!svgData || !svgData.paths || svgData.paths.length === 0) {
      return null;
    }

    const shapes = [];
    svgData.paths.forEach((path) => {
      const pathShapes = SVGLoader.createShapes(path);
      shapes.push(...pathShapes);
    });

    if (shapes.length === 0) return null;

    const extrudeSettings = {
      depth: 16,
      bevelEnabled: true,
      bevelSegments: 5,
      steps: 2,
      bevelSize: 2.5,
      bevelThickness: 3.5,
    };

    const geom = new THREE.ExtrudeGeometry(shapes, extrudeSettings);
    geom.center(); // Center the geometry around origin
    return geom;
  }, [svgData]);

  // Smooth floating, rotation, and mouse tilt interpolation
  useFrame((state, delta) => {
    if (!meshRef.current) return;

    const time = state.clock.getElapsedTime();

    // 1. Soft up & down floating motion
    meshRef.current.position.y = Math.sin(time * 1.5) * 0.18;

    // 2. Slow continuous Y rotation
    meshRef.current.rotation.y += delta * 0.4;

    // 3. Smooth tilt toward mouse with lerp easing
    const targetTiltX = mousePos.current.y * 0.35;
    const targetTiltZ = -mousePos.current.x * 0.35;

    meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, targetTiltX, 0.06);
    meshRef.current.rotation.z = THREE.MathUtils.lerp(meshRef.current.rotation.z, targetTiltZ, 0.06);
  });

  if (!geometry) return null;

  return (
    <mesh
      ref={meshRef}
      geometry={geometry}
      scale={[0.009, -0.009, 0.009]} // Invert Y to fix SVG coordinate orientation
      position={[0, 0, 0]}
    >
      <meshPhysicalMaterial
        color="#F2F4FF"
        transmission={0.6}
        roughness={0.15}
        clearcoat={1}
        clearcoatRoughness={0.1}
        ior={1.52}
        thickness={2.0}
        reflectivity={0.9}
        attenuationColor="#5B5BF0"
        attenuationDistance={1.5}
        specularColor="#FFFFFF"
        specularIntensity={1}
      />
    </mesh>
  );
};

/* 3D Canvas Scene Wrapper */
const Hero3DLogo = ({ mousePos }) => {
  return (
    <div className="w-full h-full pointer-events-none flex items-center justify-center">
      <Canvas
        camera={{ position: [0, 0, 4.2], fov: 45 }}
        dpr={[1, 2]} // Cap pixel ratio at 2 for performance
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
        }}
        style={{ width: '100%', height: '100%' }}
      >
        {/* Soft Studio HDRI Environment */}
        <Environment preset="studio" />

        {/* Ambient & Directional Lights */}
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 8, 5]} intensity={1.2} />

        {/* Soft Lavender Point Light (Glows top-left edge) */}
        <pointLight
          position={[-3.5, 2.5, 3]}
          intensity={3.5}
          color="#C084FC"
          distance={10}
        />

        {/* Soft Blue Point Light (Glows bottom-right edge) */}
        <pointLight
          position={[3.5, -2.5, 3]}
          intensity={3.5}
          color="#3B82F6"
          distance={10}
        />

        {/* Extruded 3D Logo */}
        <React.Suspense fallback={null}>
          <LogoMesh mousePos={mousePos} />
        </React.Suspense>
      </Canvas>
    </div>
  );
};

export default Hero3DLogo;
