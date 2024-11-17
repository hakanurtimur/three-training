"use client";

import CanvasContainer from "@/components/canvases/CanvasContainer";
import { useRef, useState } from "react";
import * as THREE from "three";
import { PerspectiveCamera } from "three";
import { Button } from "@/components/ui/button";
import gsap from "gsap";
import { OrbitControls } from "three-stdlib";
import { planetInfoList } from "@/constants/planetInfoList";

export default function Home() {
  const cameraRef = useRef<PerspectiveCamera>(null!);
  const controlsRef = useRef<OrbitControls>(null!);
  const [isAnimating, setIsAnimating] = useState(false);
  const [targetPlanetId, setTargetPlanetId] = useState<
    string | null | undefined
  >(undefined);

  const handleBtnClick = () => {
    setIsAnimating(!isAnimating);
  };

  const handleResetCamera = () => {
    const planetWorldPosition = new THREE.Vector3(0, 10, 100);

    const direction = new THREE.Vector3();
    direction
      .subVectors(cameraRef.current.position, planetWorldPosition)
      .normalize();

    const destination = planetWorldPosition.clone();

    const targetQuaternion = new THREE.Quaternion();

    const initialPosition = cameraRef.current.position.clone();
    const initialQuaternion = cameraRef.current.quaternion.clone();

    cameraRef.current.position.copy(destination);
    cameraRef.current.lookAt(planetWorldPosition);
    targetQuaternion.copy(cameraRef.current.quaternion);

    cameraRef.current.position.copy(initialPosition);
    cameraRef.current.quaternion.copy(initialQuaternion);

    gsap.to(cameraRef.current.position, {
      x: destination.x,
      y: destination.y,
      z: destination.z,
      duration: 1,
      ease: "power2.out",
    });

    gsap.to(cameraRef.current.quaternion, {
      x: targetQuaternion.x,
      y: targetQuaternion.y,
      z: targetQuaternion.z,
      w: targetQuaternion.w,
      duration: 1,
      ease: "power2.out",
      onUpdate: () => {
        controlsRef.current.enabled = false;
        cameraRef.current.quaternion.normalize();
        controlsRef.current.enabled = true;
      },
    });
  };

  const handleTargetPlanet = (planetId: string | null | undefined) => {
    setTargetPlanetId(planetId);
  };

  const planet = planetInfoList.find((planet) => planet.id === targetPlanetId);

  console.log(targetPlanetId);

  return (
    <div className="h-screen w-screen bg-transparent text-white p-5 relative flex font-pixefilly">
      <div className="overflow-hidden min-w-[1080px] min-h-[1080px] relative">
        <CanvasContainer
          isAnimating={isAnimating}
          cameraRef={cameraRef}
          controlsRef={controlsRef}
          onTargetPlanet={handleTargetPlanet}
        />
        {targetPlanetId && (
          <div
            className="absolute top-20 left-20
          animate-in z-10 fade-in-5 slide-in-from-bottom-44 duration-1000 text-6xl"
          >
            {targetPlanetId}
          </div>
        )}
      </div>
      <div className="flex-grow-0 flex-shrink flex flex-col space-y-4 px-4 items-stretch">
        {targetPlanetId === undefined ? (
          <>
            <h1 className="text-6xl text-center">
              Welcome to the Solar System Exploration!
            </h1>
            <p className="text-xl text-center">
              Embark on an interactive journey through our solar system. Witness
              the mesmerizing orbits of the planets around the sun in real-time
              animation. To delve deeper into each {"planet's"} unique features,
              stop the animation and select a planet to explore more. Click{" "}
              {"'Stop Animation'"} to begin your adventure!
            </p>
          </>
        ) : planet ? (
          <div className="flex flex-col w-full space-y-4 animate-in slide-in-from-bottom-44 duration-1000">
            <h1 className="text-6xl text-center">{planet.name}</h1>
            <p className="text-xl text-center ">{planet.description}</p>
            {/*<p className="text-lg text-center ">{planet.more_information}</p>*/}
          </div>
        ) : (
          <div className="w-full">Loading... </div>
        )}
        {targetPlanetId === undefined && (
          <Button onClick={handleBtnClick} className="animate-pulse">
            {isAnimating ? "Stop Animation" : "Start Animation"}
          </Button>
        )}
        {targetPlanetId !== null && (
          <Button
            className="animate-in slide-in-from-bottom-44 duration-1000"
            onClick={() => {
              setTargetPlanetId(undefined);
              handleResetCamera();
            }}
          >
            Zoom Out
          </Button>
        )}
      </div>
    </div>
  );
}
