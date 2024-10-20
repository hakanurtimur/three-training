import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh } from "three";
import colors from "tailwindcss/colors";

const IntroScene = () => {
  const boxRef = useRef<Mesh>(null!);
  useFrame((_, delta) => {
    if (!boxRef || !boxRef.current) return;
    boxRef.current.rotation.y += delta;
    boxRef.current.rotation.z += delta;
  });
  return (
    <>
      <mesh ref={boxRef} position={[0, 1, 0]}>
        <boxGeometry />
        <meshBasicMaterial color={colors.slate["900"]} />
      </mesh>
    </>
  );
};

export default IntroScene;
