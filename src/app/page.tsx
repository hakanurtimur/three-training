"use client";

import CanvasContainer from "@/components/canvases/CanvasContainer";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowDownLeftIcon,
  ArrowUpRightIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronUpIcon,
} from "@heroicons/react/24/outline";
import { PerspectiveCamera } from "three";

export default function Home() {
  const cameraRef = useRef<PerspectiveCamera>(null!);
  return (
    <div className="h-screen w-screen grid grid-cols-2 bg-transparent text-white p-5">
      <div className="grid grid-cols-3 absolute bottom-5 right-5 gap-4 z-50">
        <Button
          size={"icon"}
          onClick={() => {
            if (
              cameraRef.current &&
              cameraRef.current.position.z > 0 &&
              cameraRef.current.position.z < 10
            )
              cameraRef.current.position.z -= 1;
          }}
        >
          <ArrowDownLeftIcon />
        </Button>
        <Button
          size={"icon"}
          onClick={() => {
            if (
              cameraRef.current &&
              cameraRef.current.position.y > -1 &&
              cameraRef.current.position.y < 10
            )
              cameraRef.current.position.y += 1;
          }}
        >
          <ChevronUpIcon />
        </Button>
        <Button
          size={"icon"}
          onClick={() => {
            if (
              cameraRef.current &&
              cameraRef.current.position.z > -1 &&
              cameraRef.current.position.z < 10
            )
              cameraRef.current.position.z += 1;
          }}
        >
          <ArrowUpRightIcon />
        </Button>
        <Button
          size={"icon"}
          onClick={() => {
            if (
              cameraRef.current &&
              cameraRef.current.position.x > 0 &&
              cameraRef.current.position.x < 10
            )
              cameraRef.current.position.x -= 1;
          }}
        >
          <ChevronLeftIcon />
        </Button>
        <Button
          size={"icon"}
          onClick={() => {
            if (
              cameraRef.current &&
              cameraRef.current.position.y > -1 &&
              cameraRef.current.position.y < 10
            )
              cameraRef.current.position.y -= 1;
          }}
        >
          <ChevronDownIcon />
        </Button>
        <Button
          size={"icon"}
          onClick={() => {
            if (
              cameraRef.current &&
              cameraRef.current.position.x > -1 &&
              cameraRef.current.position.x < 10
            )
              cameraRef.current.position.x += 1;
          }}
        >
          <ChevronRightIcon />
        </Button>
      </div>
      <div className="col-span-2 overflow-hidden w-full h-full">
        <CanvasContainer cameraRef={cameraRef} />
      </div>
    </div>
  );
}
