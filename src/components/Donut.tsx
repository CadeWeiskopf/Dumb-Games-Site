import { useEffect, useRef, useState } from "react";
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { Typography } from "@mui/material";
import { Mesh } from "three";

const DONUT_SPEED = 0.005;

const Donut: React.FC = () => {
  return (
    <div>
      <Canvas style={{ height: "500px" }}>
        <Scene />
      </Canvas>
    </div>
  );
};

const Scene: React.FC = () => {
  const [rotation, setRotation] = useState<number>(0);
  const rafId = useRef<number>(0);
  const lastFrameTime = useRef<number>(0);
  const animate = (timeStamp: number) => {
    if (timeStamp - lastFrameTime.current > 50) {
      // update every 50ms
      setRotation((prevRotation) => prevRotation + 0.01);
      lastFrameTime.current = timeStamp;
    }
    setRotation((prevRotation) => prevRotation + 0.01);
    rafId.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    animate(performance.now());
    return () => {
      cancelAnimationFrame(rafId.current);
    };
  }, [rotation]);

  // Create the donut
  const donutRef = useRef<Mesh>(null);
  const donut = (
    <mesh
      rotation={
        new THREE.Euler(
          rotation * DONUT_SPEED,
          rotation * DONUT_SPEED,
          rotation * DONUT_SPEED
        )
      }
      position={[0, 0, 0]}
      ref={donutRef}
    >
      <torusGeometry attach="geometry" args={[1, 0.5, 32, 32]} />
      <meshBasicMaterial attach="material" color={0xff0080} />
    </mesh>
  );

  // Create the icing
  const sprinkleRef = useRef<Mesh>(null);

  const sprinkle = (
    <mesh ref={sprinkleRef} position={[0, 1, 0.5]} scale={0.025}>
      <capsuleGeometry attach="geometry" args={[1, 3, 5, 16]} />
      <meshBasicMaterial attach="material" color={0xffffff} />
    </mesh>
  );

  if (donutRef.current && sprinkleRef.current) {
    donutRef.current.add(sprinkleRef.current);
  }

  return (
    <>
      {donut}
      {sprinkle}
    </>
  );
};

export default Donut;
