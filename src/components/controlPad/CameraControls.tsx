import React from "react";
import {
  ArrowDownLeftIcon,
  ArrowUpRightIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronUpIcon,
} from "@heroicons/react/24/outline";
import { Button } from "@/components/ui/button";
import { PerspectiveCamera } from "three";

interface Props {
  cameraRef: React.MutableRefObject<PerspectiveCamera>;
}

const CameraControls = ({ cameraRef }: Props) => {
  const moveCamera = (
    axis: "x" | "y" | "z",
    delta: number,
    min: number,
    max: number,
  ) => {
    if (cameraRef.current) {
      const newPosition = cameraRef.current.position[axis] + delta;
      if (newPosition >= min && newPosition <= max) {
        cameraRef.current.position[axis] = newPosition;
      }
    }
  };

  const MIN_POSITION = -40;
  const MAX_POSITION = 40;

  return (
    <>
      <Button
        size={"icon"}
        onClick={() => moveCamera("z", 1, MIN_POSITION, MAX_POSITION)}
      >
        <ArrowDownLeftIcon />
      </Button>
      <Button
        size={"icon"}
        onClick={() => moveCamera("y", 1, MIN_POSITION, MAX_POSITION)}
      >
        <ChevronUpIcon />
      </Button>
      <Button
        size={"icon"}
        onClick={() => moveCamera("z", -1, MIN_POSITION, MAX_POSITION)}
      >
        <ArrowUpRightIcon />
      </Button>
      <Button
        size={"icon"}
        onClick={() => moveCamera("x", -1, MIN_POSITION, MAX_POSITION)}
      >
        <ChevronLeftIcon />
      </Button>
      <Button
        size={"icon"}
        onClick={() => moveCamera("y", -1, MIN_POSITION, MAX_POSITION)}
      >
        <ChevronDownIcon />
      </Button>
      <Button
        size={"icon"}
        onClick={() => moveCamera("x", 1, MIN_POSITION, MAX_POSITION)}
      >
        <ChevronRightIcon />
      </Button>
    </>
  );
};

export default CameraControls;
