import { Mesh, Texture } from "three";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

interface Props {
  position: [number, number, number];
  size: number;
  animate: boolean;
  texture: Texture;
}

const Planet = ({ position, size, animate, texture }: Props) => {
  const cubeRef = useRef<Mesh>(null!);

  useFrame((_, delta) => {
    if (!cubeRef.current || !animate) return;
    cubeRef.current.rotation.x += delta;
    cubeRef.current.rotation.y += delta;
    cubeRef.current.rotation.z += delta;
  });

  return (
    <mesh ref={cubeRef} position={position}>
      <sphereGeometry args={[size, 32, 16]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
};

export default Planet;
