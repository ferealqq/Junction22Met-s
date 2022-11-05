import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
//import { DiscSmall } from "./discs/Disc-small";
import { OrbitControls } from "@react-three/drei";
import { WrapperForDiscs } from "./discs/Wrapper";

export default function Main3D() {
  return (
    <Canvas camera={{ position: [0, 0, 30], zoom: 3 }}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Suspense fallback={null}>
        <WrapperForDiscs />
      </Suspense>
      <OrbitControls
        enableZoom={true}
        zoomSpeed={0.5}
        minDistance={2}
        maxDistance={5}
        minPolarAngle={Math.PI / 2.4}
        maxPolarAngle={Math.PI / 2.4}
      />
    </Canvas>
  );
}
