import { Button } from "@/components/ui/button";
import React from "react";
import { PauseIcon, PlayPauseIcon } from "@heroicons/react/24/outline";

interface Props {
  startAnimation: () => void;
  stopAnimation: () => void;
}

const AnimationControls = ({ startAnimation, stopAnimation }: Props) => {
  return (
    <>
      <Button size={"icon"} onClick={stopAnimation}>
        <PauseIcon />
      </Button>
      <Button size={"icon"} onClick={startAnimation}>
        <PlayPauseIcon />
      </Button>
    </>
  );
};

export default AnimationControls;
