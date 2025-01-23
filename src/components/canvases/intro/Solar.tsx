"use client";
import React, { createRef, useRef } from "react";
import * as THREE from "three";
import { Group, Mesh } from "three";
import { useTexture } from "@react-three/drei";
import Planet from "@/components/canvases/intro/Planet";
import { planetList } from "@/constants/planetList";
import { useFrame, useThree } from "@react-three/fiber";
import gsap from "gsap";
import { OrbitControls as OrbitControlsType } from "three-stdlib";

interface Props {
  isAnimating: boolean;
  controlsRef: React.LegacyRef<OrbitControlsType>;
  onTargetPlanet: (planetId: string | null) => void;
}

const Solar = ({ isAnimating, controlsRef, onTargetPlanet }: Props) => {
  const texture = useTexture("/sunTexture.jpg");
  const sunRef = useRef<Mesh>(null!);
  const saturnTorusTexture = useTexture("/saturnTorusTexture.png");
  const saturnTorusRef = useRef<Mesh>(null!);
  const { camera } = useThree();
  // const isAnimatingRef = useRef<boolean>(true);

  const handlePlanetClick = (planetMesh: Mesh, distance: number) => {
    const planetWorldPosition = new THREE.Vector3();
    planetMesh.getWorldPosition(planetWorldPosition);

    const direction = new THREE.Vector3();
    direction.subVectors(camera.position, planetWorldPosition).normalize();

    const offset = direction.multiplyScalar(distance);

    const destination = planetWorldPosition.clone().add(offset);

    const targetQuaternion = new THREE.Quaternion();

    const initialPosition = camera.position.clone();
    const initialQuaternion = camera.quaternion.clone();

    camera.position.copy(destination);
    camera.lookAt(planetWorldPosition);
    targetQuaternion.copy(camera.quaternion);

    camera.position.copy(initialPosition);
    camera.quaternion.copy(initialQuaternion);

    if (controlsRef) {
      // @ts-expect-error controlsRef is not null
      controlsRef.current.enabled = false;
    }

    gsap.to(camera.position, {
      x: destination.x,
      y: destination.y,
      z: destination.z,
      duration: 1,
      ease: "power2.out",
    });

    gsap.to(camera.quaternion, {
      x: targetQuaternion.x,
      y: targetQuaternion.y,
      z: targetQuaternion.z,
      w: targetQuaternion.w,
      duration: 1,
      ease: "power2.out",
      onUpdate: () => {
        camera.quaternion.normalize();
      },
      onComplete: () => {
        if (controlsRef) {
          // @ts-expect-error controlsRef is not null
          controlsRef.current.target.copy(planetWorldPosition);
          // @ts-expect-error controlsRef is not null
          controlsRef.current.update();
          // @ts-expect-error controlsRef is not null
          controlsRef.current.enabled = true;
        }
      },
    });
  };

  const planetGroupRefs = planetList.map(() => createRef<Group>());

  useFrame((_, delta) => {
    if (!isAnimating) return;
    const sun = sunRef.current;
    if (!sun) return;
    sun.rotation.y += delta;
    planetGroupRefs.forEach((group, index) => {
      const planetGroup = group.current;
      if (!planetGroup) return;
      planetGroup.rotation.y +=
        planetList[index].orbitalAngularSpeed * 10 * delta;
    });
  });

  useFrame((_, delta) => {
    if (saturnTorusRef.current) {
      saturnTorusRef.current.rotation.z += delta;
    }
  });

  return (
    <>
      <mesh
        ref={sunRef}
        onClick={(event) => {
          event.stopPropagation();
          onTargetPlanet(null);
          handlePlanetClick(sunRef.current, 10);
          setTimeout(() => {
            onTargetPlanet("Sun");
          }, 1000);
          handlePlanetClick(sunRef.current, 20);
        }}
        onPointerEnter={() => {
          document.body.style.cursor = "pointer";
        }}
        onPointerLeave={() => {
          document.body.style.cursor = "auto";
        }}
        position={[0, 0, 0]}
      >
        <sphereGeometry args={[8, 32, 16]} />
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
      <>
        {planetList.map((planet, index) =>
          planet.name === "Saturn" ? (
            <group
              ref={planetGroupRefs[index]}
              key={planet.name}
              position={[-15, 0, 0]}
              rotation={[0, planet.initialAngle, 0]}
            >
              <Planet
                planet={planet}
                onPlanetClick={(planetMesh: Mesh) => {
                  onTargetPlanet(null);
                  handlePlanetClick(planetMesh, 10);
                  setTimeout(() => {
                    onTargetPlanet(planet.name);
                  }, 1000);
                }}
              />
              <mesh
                rotation={[20, 0, 0]}
                position={[planet.scaledDistance, 0, 0]}
                ref={saturnTorusRef}
              >
                <torusGeometry
                  args={[planet.scaledRadius * 1.4, 0.3, 2, 200]}
                />
                <meshStandardMaterial map={saturnTorusTexture} />
              </mesh>
            </group>
          ) : (
            <group
              ref={planetGroupRefs[index]}
              key={planet.name}
              position={[-15, 0, 0]}
              rotation={[0, planet.initialAngle, 0]}
            >
              <Planet
                planet={planet}
                onPlanetClick={(planetMesh: Mesh) => {
                  onTargetPlanet(null);
                  handlePlanetClick(planetMesh, 10);
                  setTimeout(() => {
                    onTargetPlanet(planet.name);
                  }, 1000);
                }}
              />
            </group>
          ),
        )}
      </>
    </>
  );
};

export default Solar;
