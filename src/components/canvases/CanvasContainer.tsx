"use client";

import { Canvas } from "@react-three/fiber";
import React, { useRef } from "react";
import Solar from "@/components/canvases/intro/Solar";
import { Camera, PointLight } from "three";
import { OrbitControls } from "@react-three/drei";

// import { OrbitControls } from "@react-three/drei";

interface Props {
  cameraRef: React.MutableRefObject<Camera>;
}

const CanvasContainer = ({ cameraRef }: Props) => {
  const lightRef = useRef<PointLight>(null!);

  return (
    <Canvas
      camera={{
        position: [0, 10, 15],
        fov: 75,
        aspect: window.innerWidth / window.innerHeight,
        near: 0.1,
        far: 1000,
      }}
      onCreated={({ camera }) => {
        cameraRef.current = camera;
      }}
    >
      <OrbitControls />
      {/*<IntroScene />*/}
      {/*<IntroScene2 />*/}
      <Solar />
      <pointLight intensity={200} position={[0, 0, 0]} />
      <ambientLight intensity={0.1} />
    </Canvas>
  );
};

export default CanvasContainer;
