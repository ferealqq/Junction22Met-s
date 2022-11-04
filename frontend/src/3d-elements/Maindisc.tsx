import React, { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber/native";


export default function Maindisc(props: any) {
  const mesh = useRef(null);
  const [active, setActive] = useState(false);
  // @ts-ignore
  useFrame((state, delta) => (mesh.current.rotation.y += 0.01));

 // const geometry = new THREE.CylinderGeometry(5, 5, 20, 32);
  return (
    <mesh ref={mesh} scale={active ? 1.5 : 1} {...props}>
      <cylinderGeometry args={[3, 3, 0.2, 64]} />
      <meshStandardMaterial color={"grey"} />
    </mesh>
  );
}
