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
  const mesh = useRef<THREE.Mesh>();
  const { scene } = useThree();
  useFrame(() => {
    if (mesh.current === undefined) {
      return;
    }

    console.log(mesh.current);
    mesh.current.rotation.x += 0.01;
    mesh.current.rotation.y += 0.01;
  });

  useEffect(() => {
    const geometry = new THREE.TorusGeometry(1, 0.5, 16, 100);
    const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    mesh.current = new THREE.Mesh(geometry, material);

    const light = new THREE.PointLight(0xffffff, 1, 1000);
    light.position.set(50, 50, 50);
    scene.add(light);
  }, []);

  return (
    <>
      <pointLight position={[10, 10, 10]} />
      <perspectiveCamera position={[0, 0, 5]} />
      <mesh ref={mesh}>
        <torusGeometry attach="geometry" args={[1, 0.5, 16, 100]} />
        <meshBasicMaterial attach="material" color={0xff0000} />
      </mesh>
    </>
  );
};

export default Donut;
