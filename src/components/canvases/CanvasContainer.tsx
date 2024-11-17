"use client";

import { Canvas } from "@react-three/fiber";
import React from "react";
import Solar from "@/components/canvases/intro/Solar";
import { Camera } from "three";
import { OrbitControls, Stars } from "@react-three/drei";
import { OrbitControls as OrbitControlsType } from "three-stdlib";

interface Props {
  isAnimating: boolean;
  cameraRef: React.MutableRefObject<Camera>;
  controlsRef: React.LegacyRef<OrbitControlsType>;
  onTargetPlanet: (planetId: string | null) => void;
}

const CanvasContainer = ({
  isAnimating,
  cameraRef,
  controlsRef,
  onTargetPlanet,
}: Props) => {
  return (
    <Canvas
      camera={{
        position: [0, 15, 100],
        fov: 75,
        near: 0.1,
        far: 1000,
      }}
      onCreated={({ camera }) => {
        cameraRef.current = camera;
      }}
    >
      <OrbitControls ref={controlsRef} />
      <Stars
        radius={100}
        depth={50}
        count={4000}
        factor={5}
        saturation={0}
        fade
        speed={1}
      />

      <Solar
        onTargetPlanet={onTargetPlanet}
        isAnimating={isAnimating}
        controlsRef={controlsRef}
      />
      <pointLight castShadow intensity={15000} position={[0, 0, 0]} />
      <ambientLight intensity={0.35} />
    </Canvas>
  );
};

export default CanvasContainer;
