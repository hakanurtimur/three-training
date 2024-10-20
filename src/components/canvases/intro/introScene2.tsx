import { useMemo } from "react";

const IntroScene2 = () => {
  const amount = 200;

  const positionArray = useMemo(() => {
    const positions = new Float32Array(amount * 3);
    for (let i = 0; i < amount * 3; i++) {
      positions[i] = Math.random() - 0.5;
    }
    return positions;
  }, [amount]);

  return (
    <points>
      <bufferGeometry>
        {/* BufferAttribute için 'position' attach kullanımı */}
        <bufferAttribute
          attach="attributes-position"
          count={positionArray.length / 3}
          itemSize={3}
          array={positionArray}
        />
      </bufferGeometry>
      <pointsMaterial size={0.02} color="white" />
    </points>
  );
};

export default IntroScene2;
