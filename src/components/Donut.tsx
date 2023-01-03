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

  // Create the sprinks
  const sprinkleRef = useRef<Mesh>(null);
  const sprinkle = (
    <mesh ref={sprinkleRef} position={[0.05, 1, 0.5]} scale={0.025}>
      <capsuleGeometry attach="geometry" args={[1, 3, 5, 16]} />
      <meshBasicMaterial attach="material" color={0x9c2fbc} />
    </mesh>
  );
  const sprinkle2Ref = useRef<Mesh>(null);
  const sprinkle2 = (
    <mesh
      ref={sprinkle2Ref}
      position={[0.2, 1, 0.5]}
      scale={0.025}
      rotation={[0, 0, 1]}
    >
      <capsuleGeometry attach="geometry" args={[1, 3, 5, 16]} />
      <meshBasicMaterial attach="material" color={0x0994e3} />
    </mesh>
  );
  const sprinkle3Ref = useRef<Mesh>(null);
  const sprinkle3 = (
    <mesh
      ref={sprinkle3Ref}
      position={[0.1, 0.85, 0.5]}
      scale={0.025}
      rotation={[0, 0, -1]}
    >
      <capsuleGeometry attach="geometry" args={[1, 3, 5, 16]} />
      <meshBasicMaterial attach="material" color={0xf99f0d} />
    </mesh>
  );
  const sprinkle4Ref = useRef<Mesh>(null);
  const sprinkle4 = (
    <mesh
      ref={sprinkle4Ref}
      position={[0.1, 1.15, 0.5]}
      scale={0.025}
      rotation={[0, 0, 0.8]}
    >
      <capsuleGeometry attach="geometry" args={[1, 3, 5, 16]} />
      <meshBasicMaterial attach="material" color={0xefdd00} />
    </mesh>
  );
  const sprinkle5Ref = useRef<Mesh>(null);
  const sprinkle5 = (
    <mesh
      ref={sprinkle5Ref}
      position={[0.1, 0.7, 0.42]}
      scale={0.025}
      rotation={[0, 0, -1.5]}
    >
      <capsuleGeometry attach="geometry" args={[1, 3, 5, 16]} />
      <meshBasicMaterial attach="material" color={0x06b583} />
    </mesh>
  );

  const sprinkle6Ref = useRef<Mesh>(null);
  const sprinkle6 = (
    <mesh ref={sprinkle6Ref} position={[0.05, 1, 0.5]} scale={0.025}>
      <capsuleGeometry attach="geometry" args={[1, 3, 5, 16]} />
      <meshBasicMaterial attach="material" color={0x9c2fbc} />
    </mesh>
  );
  const sprinkle7Ref = useRef<Mesh>(null);
  const sprinkle7 = (
    <mesh
      ref={sprinkle7Ref}
      position={[0.2, 1, 0.5]}
      scale={0.025}
      rotation={[0, 0, 1]}
    >
      <capsuleGeometry attach="geometry" args={[1, 3, 5, 16]} />
      <meshBasicMaterial attach="material" color={0x0994e3} />
    </mesh>
  );
  const sprinkle8Ref = useRef<Mesh>(null);
  const sprinkle8 = (
    <mesh
      ref={sprinkle8Ref}
      position={[0.4, 0.7, 0.5]}
      scale={0.025}
      rotation={[0, 0, -0.9]}
    >
      <capsuleGeometry attach="geometry" args={[1, 3, 5, 16]} />
      <meshBasicMaterial attach="material" color={0xf99f0d} />
    </mesh>
  );
  const sprinkle9Ref = useRef<Mesh>(null);
  const sprinkle9 = (
    <mesh
      ref={sprinkle9Ref}
      position={[0.4, 0.9, 0.5]}
      scale={0.025}
      rotation={[0, 0, 0.4]}
    >
      <capsuleGeometry attach="geometry" args={[1, 3, 5, 16]} />
      <meshBasicMaterial attach="material" color={0xefdd00} />
    </mesh>
  );
  const sprinkle10Ref = useRef<Mesh>(null);
  const sprinkle10 = (
    <mesh
      ref={sprinkle10Ref}
      position={[0.6, 0.7, 0.5]}
      scale={0.025}
      rotation={[0, 0, -1.2]}
    >
      <capsuleGeometry attach="geometry" args={[1, 3, 5, 16]} />
      <meshBasicMaterial attach="material" color={0x06b583} />
    </mesh>
  );

  if (
    donutRef.current &&
    sprinkleRef.current &&
    sprinkle2Ref.current &&
    sprinkle3Ref.current &&
    sprinkle4Ref.current &&
    sprinkle5Ref.current &&
    sprinkle6Ref.current &&
    sprinkle7Ref.current &&
    sprinkle8Ref.current &&
    sprinkle9Ref.current &&
    sprinkle10Ref.current
  ) {
    donutRef.current.add(sprinkleRef.current);
    donutRef.current.add(sprinkle2Ref.current);
    donutRef.current.add(sprinkle3Ref.current);
    donutRef.current.add(sprinkle4Ref.current);
    donutRef.current.add(sprinkle5Ref.current);
    donutRef.current.add(sprinkle6Ref.current);
    donutRef.current.add(sprinkle7Ref.current);
    donutRef.current.add(sprinkle8Ref.current);
    donutRef.current.add(sprinkle9Ref.current);
    donutRef.current.add(sprinkle10Ref.current);
  }

  return (
    <>
      {donut}
      {sprinkle}
      {sprinkle2}
      {sprinkle3}
      {sprinkle4}
      {sprinkle5}
      {sprinkle6}
      {sprinkle7}
      {sprinkle8}
      {sprinkle9}
      {sprinkle10}
    </>
  );
};

export default Donut;
