import React, { useMemo, useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Html } from '@react-three/drei';
import * as THREE from 'three';
import { SVGLoader } from 'three-stdlib';

// Raw SVG string of logo.svg for synchronous instant extrusion parsing
const LOGO_SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="414" height="458" viewBox="0 0 414 458">
	<path d="M 209 7.572 C 207.625 7.804, 202.450 8.499, 197.500 9.116 C 186.757 10.455, 169.100 14.665, 156 19.010 C 136.945 25.331, 103.552 43.579, 92 53.984 C 90.075 55.718, 89.075 56.847, 89.778 56.492 C 90.481 56.137, 92.281 55.692, 93.778 55.503 C 95.275 55.313, 100.325 54.459, 105 53.604 C 138.583 47.464, 180.507 50.915, 214.947 62.654 C 256.142 76.695, 287.787 98.205, 315.037 130.688 C 327.866 145.980, 336.653 151.628, 351.243 153.959 C 378.030 158.238, 403.933 135.403, 403.988 107.460 C 404.015 93.566, 399.203 83.232, 387 70.981 C 362.223 46.107, 327.060 25.580, 291.969 15.507 C 270.621 9.378, 259.363 7.816, 234 7.462 C 221.625 7.290, 210.375 7.339, 209 7.572 M 192.091 28.009 C 169.872 29.869, 147.720 34.466, 125.500 41.827 C 113.516 45.798, 95.627 52.961, 96.219 53.552 C 96.391 53.724, 101.699 52.321, 108.016 50.434 C 135.184 42.318, 158.266 38.900, 186.500 38.811 C 217.301 38.715, 237.414 41.737, 261.692 50.108 C 284.541 57.987, 308.218 72.086, 320.941 85.392 C 324.034 88.625, 324.356 89.493, 324.120 93.940 C 323.625 103.277, 329.336 112.285, 338.500 116.617 C 358.822 126.224, 380.169 104.098, 369.981 83.987 C 365.689 75.515, 358.024 70.868, 348.248 70.811 C 341.758 70.774, 341.649 70.727, 332.939 64.137 C 309.881 46.692, 278.828 34.358, 245.858 29.548 C 232.629 27.619, 205.897 26.853, 192.091 28.009 M 112 82.026 C 85.772 86.684, 64.005 95.725, 45.257 109.749 C 36.174 116.543, 35.221 117.778, 28.565 131.382 C 18.146 152.677, 11.590 172.667, 7.882 194.443 C 5.262 209.834, 4.323 237.773, 5.910 253.138 C 11.257 304.903, 32.784 351.294, 68.426 387.862 C 85.857 405.746, 104.959 420.102, 125.254 430.571 L 134.500 435.340 130.891 430.920 C 115.271 411.792, 100.819 380.024, 95.081 352.205 C 90.984 332.340, 89.720 316.377, 90.317 292 C 91.034 262.727, 93.976 243.279, 101.563 217.654 C 112.274 181.480, 126.736 156.342, 147.256 138.227 C 170.722 117.512, 198.441 107.099, 230.500 106.954 L 242.500 106.900 234 102.493 C 214.365 92.313, 190.240 84.646, 168.148 81.564 C 152.482 79.379, 125.662 79.600, 112 82.026 M 65.105 133.635 C 59.446 136.455, 54.915 141.697, 52.926 147.725 C 51.303 152.641, 52.330 162.199, 54.959 166.654 L 57.105 170.293 53.569 183.397 C 49.408 198.815, 47.796 206.413, 45.380 222 C 42.888 238.077, 42.852 273.108, 45.311 288.790 C 51.273 326.816, 64.798 359.079, 87.595 389.657 C 94.828 399.358, 116.106 421.277, 124.361 427.529 L 130.500 432.179 125.500 427.335 C 97.952 400.648, 77.111 366.065, 67.142 330.500 C 55.409 288.640, 57.488 242.608, 73.167 197.137 C 79.316 179.305, 79.168 179.566, 83.928 178.140 C 89.344 176.517, 95.803 170.666, 98.241 165.174 C 100.524 160.029, 100.748 150.721, 98.704 145.844 C 93.315 132.982, 77.759 127.329, 65.105 133.635 M 119.393 307.500 C 120.767 362.428, 141.177 408.357, 175.854 434.555 C 186.160 442.341, 202.780 450.931, 214.768 454.669 L 223.445 457.375 241.973 456.172 C 270.122 454.344, 290.613 449.876, 314.291 440.404 C 344.063 428.494, 379.033 404.299, 389.191 388.584 C 394.374 380.564, 397 371.660, 397 362.105 C 397 347.454, 392.564 336.601, 382.342 326.240 C 371.793 315.549, 357.016 310.062, 342.581 311.476 C 331.181 312.593, 322.184 316.619, 312.657 324.864 C 280.259 352.904, 237.731 362.563, 195.500 351.471 C 170.542 344.916, 141.840 324.098, 127.176 301.914 C 124.054 297.192, 120.924 292.467, 120.221 291.414 C 119.167 289.836, 119.021 292.660, 119.393 307.500 M 121.051 297.500 C 120.944 299.675, 126.125 316.978, 129.319 325.112 C 145.263 365.713, 173.253 394.246, 207.031 404.331 C 220.558 408.369, 226.019 409.129, 242.232 409.228 C 264.102 409.361, 283.642 405.530, 308.377 396.261 L 320.253 391.811 324.307 393.639 C 330.633 396.491, 338.376 396.051, 344.923 392.468 C 361.921 383.165, 361.995 359.833, 345.055 350.624 C 330.655 342.794, 312.646 351.225, 310.071 367 C 309.532 370.305, 308.915 370.787, 299 375.654 C 276.267 386.814, 251.858 393.079, 231 393.108 C 206.576 393.143, 186.604 385.881, 167.450 370 C 150.666 356.085, 133.462 330.314, 124.390 305.500 C 122.580 300.550, 121.078 296.950, 121.051 297.500" stroke="none" fill="black" fill-rule="evenodd"/>
</svg>`;

/**
 * Logo3D Mesh Component
 * Extrudes the Career Craftly SVG logo into a 3D glass/pearl object
 * with transmission, clearcoat, soft bobbing, slow rotation, and mouse tilt.
 */
const Logo3D = () => {
  const groupRef = useRef(null);

  // Generate 3D ExtrudeGeometry from SVG paths
  const geometry = useMemo(() => {
    const loader = new SVGLoader();
    const svgData = loader.parse(LOGO_SVG);
    const shapes = [];
    svgData.paths.forEach((path) => {
      const pathShapes = SVGLoader.createShapes(path);
      shapes.push(...pathShapes);
    });

    const extrudeSettings = {
      depth: 22,
      bevelEnabled: true,
      bevelSegments: 5,
      steps: 2,
      bevelSize: 2.5,
      bevelThickness: 3.5,
    };

    const geo = new THREE.ExtrudeGeometry(shapes, extrudeSettings);
    geo.center(); // Center around origin (0, 0, 0)
    return geo;
  }, []);

  // Frame animation: float up & down, continuous slow Y-rotation, mouse tilt easing
  useFrame((state, delta) => {
    if (!groupRef.current) return;
    const time = state.clock.getElapsedTime();

    // Floating sinusoidal Y translation
    const floatY = Math.sin(time * 1.5) * 0.22;

    // Target rotation angles based on continuous time + mouse pointer coordinates
    const targetRotY = time * 0.35 + state.pointer.x * 0.45;
    const targetRotX = -state.pointer.y * 0.35;

    // Smooth lerp easing towards target transform
    groupRef.current.position.y = THREE.MathUtils.lerp(
      groupRef.current.position.y,
      floatY,
      delta * 4
    );

    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      targetRotY,
      delta * 4
    );

    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      targetRotX,
      delta * 4
    );
  });

  return (
    <group ref={groupRef}>
      {/* Scale normalized: invert Y so SVG path is right-side up */}
      <mesh geometry={geometry} scale={[0.0125, -0.0125, 0.0125]}>
        {/* Soft Pearl / Glass Material as requested */}
        <meshPhysicalMaterial
          color="#f4f6ff"
          transmission={0.6}
          roughness={0.15}
          clearcoat={1}
          clearcoatRoughness={0.1}
          reflectivity={0.9}
          ior={1.5}
          thickness={2.8}
          attenuationColor="#818cf8"
          attenuationDistance={12}
          transparent={true}
          opacity={0.96}
        />
      </mesh>

      {/* Floating HTML Chips orbiting the 3D Object */}
      <Html position={[-2.8, 1.4, 0]} center transform sprite>
        <span className="px-3 py-1 text-[11px] font-semibold text-[#0F1222] bg-white/90 backdrop-blur-md border border-[#E8EAF0] rounded-full shadow-[0_8px_20px_rgba(20,24,60,0.08)] whitespace-nowrap select-none">
          AI Automation
        </span>
      </Html>
      <Html position={[2.9, 0.4, 0]} center transform sprite>
        <span className="px-3 py-1 text-[11px] font-semibold text-[#0F1222] bg-white/90 backdrop-blur-md border border-[#E8EAF0] rounded-full shadow-[0_8px_20px_rgba(20,24,60,0.08)] whitespace-nowrap select-none">
          Software
        </span>
      </Html>
      <Html position={[-1.2, -2.0, 0]} center transform sprite>
        <span className="px-3 py-1 text-[11px] font-semibold text-[#0F1222] bg-white/90 backdrop-blur-md border border-[#E8EAF0] rounded-full shadow-[0_8px_20px_rgba(20,24,60,0.08)] whitespace-nowrap select-none">
          Growth
        </span>
      </Html>
    </group>
  );
};

/**
 * Hero3DCanvas Component
 * Manages the React Three Fiber Canvas with lighting, studio HDRI, and off-screen rendering optimization.
 */
const Hero3DCanvas = () => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        setIsVisible(entries[0].isIntersecting);
      },
      { threshold: 0.05 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[220px] sm:h-[260px] flex items-center justify-center"
    >
      <Canvas
        dpr={[1, 2]} // Cap pixel ratio at 2 as requested
        camera={{ position: [0, 0, 8.5], fov: 45 }}
        frameloop={isVisible ? 'always' : 'never'} // Pause rendering when off-screen
        className="w-full h-full pointer-events-auto cursor-grab active:cursor-grabbing"
      >
        {/* Ambient & Key Studio Lights */}
        <ambientLight intensity={0.85} />
        <directionalLight position={[2, 10, 10]} intensity={1.2} />

        {/* Soft Lavender Point Light (edge glow) */}
        <pointLight
          color="#818cf8"
          intensity={6}
          distance={20}
          position={[-6, 6, 5]}
        />

        {/* Soft Blue Point Light (edge glow) */}
        <pointLight
          color="#3b82f6"
          intensity={6}
          distance={20}
          position={[6, -6, 5]}
        />

        {/* Soft Studio HDRI Environment */}
        <Environment preset="studio" />

        {/* The 3D Extruded Pearl Logo */}
        <Logo3D />
      </Canvas>
    </div>
  );
};

export default Hero3DCanvas;
