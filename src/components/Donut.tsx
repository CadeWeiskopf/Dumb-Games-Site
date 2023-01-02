import { useEffect, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { Typography } from "@mui/material";

const DONUT_SPEED = 0.01;

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

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <perspectiveCamera position={[0, 0, 5]} />
      <mesh
        rotation={
          new THREE.Euler(
            rotation * DONUT_SPEED,
            rotation * DONUT_SPEED,
            rotation * DONUT_SPEED
          )
        }
      >
        <torusGeometry attach="geometry" />
        <meshBasicMaterial attach="material" color={0xff0080} />
      </mesh>
      <mesh
        rotation={
          new THREE.Euler(
            rotation * DONUT_SPEED,
            rotation * DONUT_SPEED,
            rotation * DONUT_SPEED
          )
        }
        position={[0, 0, -1]}
      >
        <torusGeometry attach="geometry" />
        <meshBasicMaterial attach="material" color={0xffffff} />
      </mesh>
    </>
  );
};

export default Donut;
