import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const Donut: React.FC = () => {
  const mesh = useRef<MeshProps>(null);
  useFrame(() => {
    if (mesh.current === null) {
      return;
    }
    mesh.current.rotation.x = mesh.current.rotation.y += 0.01;
  });
  return (
    <mesh {...props} ref={mesh} scale={[1.5, 1.5, 1.5]}>
      <primitive object={allShapes[props.shape]} attach={"geometry"} />
      <meshStandardMaterial color={allColors[props.shape]} />
    </mesh>
  );
};

export default Donut;
