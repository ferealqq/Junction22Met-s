import * as THREE from "three";
import React, { useRef, useState, Suspense } from "react";
import { Canvas, useFrame, ThreeElements, useLoader } from "@react-three/fiber";
//import { DiscSmall } from "./discs/Disc-small";
import { DiscSmall } from "./discs/Disc1";
import { Environment, OrbitControls } from "@react-three/drei";

export default function Main3D() {
  return (
    <Canvas camera={{ position: [0, 1.5, 10], zoom: 10 }}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Suspense fallback={null}>
        <DiscSmall rotationSpeed={0.5} />
      </Suspense>
      <OrbitControls
        minPolarAngle={Math.PI / 2.4}
        maxPolarAngle={Math.PI / 2.4}
      />
    </Canvas>
  );
}
