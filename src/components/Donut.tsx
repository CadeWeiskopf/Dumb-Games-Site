import { useEffect, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { Typography } from "@mui/material";

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
  useEffect(() => {
    setRotation((prevRotation) => prevRotation + 0.1);
  }, [rotation]);
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <perspectiveCamera position={[0, 0, 5]} />
      <mesh rotation={new THREE.Euler(rotation, rotation, rotation)}>
        <torusGeometry attach="geometry" />
        <meshBasicMaterial attach="material" color={0xff0080} />
      </mesh>
    </>
  );
};

export default Donut;
