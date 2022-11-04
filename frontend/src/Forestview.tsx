import { StyleSheet, Text, View } from "react-native";
import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber/native";
import Maindisc from "./3d-elements/Maindisc";
import { Model } from "./3d-elements/Pinetreetest3.js";


/*function Box(props: any) {
  const mesh = useRef(null);
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  // @ts-ignore
  //useFrame((state, delta) => (mesh.current.rotation.x += 0.01));
  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? 1.5 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
    </mesh>
  );
}*/
export default function Forestview() {
  return (
    <Canvas camera={{ fov: 75, position: [5, 2, 0] }}>
      <ambientLight />
      <directionalLight color="red" position={[0, 0, 5]} />
      <pointLight position={[10, 10, 10]} />
      <Model />
      <Maindisc position={[0, 0, 0]} />
    </Canvas>
  );
}

const styles = StyleSheet.create({
  canvas: {
    backgroundColor: "#fff",
  },
});
