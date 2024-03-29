import { useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import { Mesh, Vector3 } from "three";

const DONUT_SPEED = 0.1;

const Donut: React.FC = () => {
  return (
    <div>
      <Canvas style={{ height: "500px" }}>
        <Scene />
      </Canvas>
    </div>
  );
};

const generateSprinkles = () => {
  const sprinkles: {
    position: THREE.Vector3;
    rotation: THREE.Euler;
    color: number;
  }[] = [];

  // Generate a higher number of sprinkles to ensure that a majority of the donut is covered
  const numSprinkles = 420;

  const colors = [0x06b583, 0xefdd00, 0xf99f0d, 0x9c2fbc, 0xe30427, 0x0994e3];

  for (let i = 0; i < numSprinkles; i++) {
    // Generate random angle and radius values
    const angle = Math.random() * 2 * Math.PI;
    const min = 0.6;
    const max = 1.4;
    const radius = min + Math.random() * (max - min);

    // Calculate position based on angle and radius
    const x = radius * Math.cos(angle);
    const y = radius * Math.sin(angle);
    let z = 0.5; // front of donut

    // If the sprinkle is close to the inside of the donut, set the z-index further away from the camera
    if (radius < 0.7 || radius > 1.3) {
      z = 0.35;
    } else if (radius > 1.2) {
      z = 0.45;
    }

    const position = new THREE.Vector3(x, y, z);

    // Generate random rotation
    const rotation = new THREE.Euler(
      Math.random() * 2 * Math.PI,
      Math.random() * 2 * Math.PI,
      Math.random() * 2 * Math.PI
    );

    // Generate random color
    const color = colors[Math.floor(Math.random() * colors.length)];

    sprinkles.push({ position, rotation, color });
  }

  return sprinkles;
};

const Scene: React.FC = () => {
  const [rotation, setRotation] = useState<number>(0);
  const [sprinkles, setSprinkles] = useState<
    { position: THREE.Vector3; rotation: THREE.Euler; color: number }[]
  >([]);

  // Generate the sprinkles when the component mounts
  useEffect(() => {
    setSprinkles(generateSprinkles());
  }, []);
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
      <meshBasicMaterial
        attach="material"
        color={0xff0080}
        depthTest={true}
        depthWrite={true}
      />
    </mesh>
  );
  // Create the donut
  const icingRef = useRef<Mesh>(null);
  const icing = (
    <mesh
      scale={new Vector3(0.98, 0.98, 0.4)}
      position={[0, 0, 0.32]}
      ref={icingRef}
    >
      <torusGeometry attach="geometry" args={[1, 0.5, 32, 8]} />
      <meshBasicMaterial attach="material" color={0xffffff} />
    </mesh>
  );

  if (donutRef.current && icingRef.current) {
    donutRef.current.add(icingRef.current);
  }
  return (
    <>
      {donut}
      {icing}
      {sprinkles.map((sprinkle, index) => (
        <Sprinkle
          key={index}
          position={sprinkle.position}
          rotation={sprinkle.rotation}
          donutRef={donutRef}
          color={sprinkle.color}
        />
      ))}
    </>
  );
};

const Sprinkle: React.FC<{
  position: THREE.Vector3;
  rotation: THREE.Euler;
  donutRef: React.RefObject<Mesh | undefined>;
  color: number;
}> = ({ position, rotation, donutRef, color }) => {
  const sprinkleRef = useRef<Mesh>(null);
  useEffect(() => {
    if (donutRef.current && sprinkleRef.current) {
      sprinkleRef.current.parent = donutRef.current;
    }
  }, []);
  return (
    <mesh
      ref={sprinkleRef}
      position={position}
      rotation={rotation}
      scale={0.025}
    >
      <capsuleGeometry attach="geometry" args={[1, 3, 5, 16]} />
      <meshBasicMaterial attach="material" color={color} />
    </mesh>
  );
};

export default Donut;
