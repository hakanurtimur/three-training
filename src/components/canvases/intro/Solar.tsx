"use client";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Group, Mesh, Object3DEventMap } from "three";
import { useTexture } from "@react-three/drei";
import Planet from "@/components/canvases/intro/Planet";

const Solar = () => {
  const texture = useTexture("/sunTexture.jpg");
  const earthTexture = useTexture("/worldTexture.jpg");
  const mercuryTexture = useTexture("/mercuryTexture.jpg");
  const venusTexture = useTexture("/venusTexture.jpg");
  const marsTexture = useTexture("/marsTexture.jpg");
  const jupiterTexture = useTexture("/jupyterTexture.jpg");
  const saturnTexture = useTexture("/saturnTexture.jpg");
  const saturnRingTexture = useTexture("/saturnRingTexture.png");
  const sunRef = useRef<Mesh>(null!);
  const earthRef = useRef<Group<Object3DEventMap>>(null!);
  const mercuryRef = useRef<Group<Object3DEventMap>>(null!);
  const venusRef = useRef<Group<Object3DEventMap>>(null!);
  const marsRef = useRef<Group<Object3DEventMap>>(null!);
  const jupiterRef = useRef<Group<Object3DEventMap>>(null!);
  const saturnRef = useRef<Group<Object3DEventMap>>(null!);
  useFrame((_, delta) => {
    const sun = sunRef.current;
    const earth = earthRef.current;
    const mercury = mercuryRef.current;
    const venus = venusRef.current;
    const mars = marsRef.current;
    const jupiter = jupiterRef.current;
    const saturn = saturnRef.current;
    if (!sun || !earth || !mercury || !venus || !mars || !jupiter || !saturn)
      return;
    sun.rotation.y += delta;
    mercury.rotation.y += delta * 1.6;
    venus.rotation.y += delta * 1.18;
    earth.rotation.y += delta;
    mars.rotation.y += delta * 0.81;
    jupiter.rotation.y += delta * 0.44;
    saturn.rotation.y += delta * 0.32;
  });

  return (
    <>
      <mesh ref={sunRef} position={[0, 0, 0]}>
        <sphereGeometry args={[2, 32, 16]} />
        <meshPhysicalMaterial
          color="white"
          transmission={1.5}
          thickness={1}
          roughness={0}
          metalness={0}
          ior={1.5}
          map={texture}
        />
      </mesh>
      <group ref={mercuryRef} position={[0, 0, 0]}>
        <Planet
          animate={true}
          size={0.14}
          position={[3.8, 0, 0]}
          texture={mercuryTexture}
        />
      </group>
      <group ref={venusRef} position={[0, 0, 0]}>
        <Planet
          animate={true}
          size={0.47}
          position={[7.2, 0, 0]}
          texture={venusTexture}
        />
      </group>
      <group ref={earthRef} position={[0, 0, 0]}>
        <Planet
          animate={true}
          size={0.5}
          position={[10, 0, 0]}
          texture={earthTexture}
        />
      </group>
      <group ref={marsRef} position={[0, 0, 0]}>
        <Planet
          animate={true}
          size={0.27}
          position={[15.2, 0, 0]}
          texture={marsTexture}
        />
      </group>
      <group ref={jupiterRef} position={[0, 0, 0]}>
        <Planet
          animate={true}
          size={1.4}
          position={[20, 0, 0]}
          texture={jupiterTexture}
        />
      </group>
      <group ref={saturnRef} position={[0, 0, 0]}>
        <Planet
          animate={true}
          size={1}
          position={[25, 0, 0]}
          texture={saturnTexture}
        />
        <mesh position={[25, 0, 0]}>
          <torusGeometry args={[1.2, 0.4, 2, 100]} />
          <meshStandardMaterial map={saturnRingTexture} />
        </mesh>
      </group>
    </>
  );
};

export default Solar;
