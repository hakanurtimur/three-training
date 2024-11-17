import { PlanetModel } from "@/models/planetModel";
import { useTexture } from "@react-three/drei";
import { Mesh } from "three";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

interface Props {
  planet: PlanetModel;
  onPlanetClick: (planet: Mesh) => void;
}

const Planet = ({ planet, onPlanetClick }: Props) => {
  const texture = useTexture(planet.imageUri);
  const planetRef = useRef<Mesh>(null!);

  useFrame((_, delta) => {
    const planetObj = planetRef.current;
    if (!planet) return;
    planetObj.rotation.y += delta * planet.rotationSpeed * 100;
  });

  return (
    <mesh
      castShadow
      receiveShadow
      rotation={[0, 0, 0]}
      position={[planet.scaledDistance, 0, 0]}
      ref={planetRef}
      onClick={() => {
        onPlanetClick(planetRef.current);
      }}
      onPointerEnter={() => {
        document.body.style.cursor = "pointer";
      }}
      onPointerLeave={() => {
        document.body.style.cursor = "auto";
      }}
    >
      <sphereGeometry args={[planet.scaledRadius, 32, 16]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
};

export default Planet;
