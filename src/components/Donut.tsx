import { useEffect, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { Typography } from "@mui/material";

const Donut: React.FC = () => {
  return (
    <div>
      <Typography variant="h6">donut</Typography>
      <Canvas style={{ height: "500px" }}>
        <Scene />
      </Canvas>
    </div>
  );
};

const Scene: React.FC = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <perspectiveCamera position={[0, 0, 5]} />
      <mesh>
        <torusGeometry attach="geometry" />
        <meshBasicMaterial attach="material" color={0xff0000} />
      </mesh>
    </>
  );
};

export default Donut;
