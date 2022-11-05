import * as THREE from "three";
import React, { useRef, useState, Suspense } from "react";
import { Canvas, useFrame, ThreeElements, useLoader } from "@react-three/fiber";
//import { DiscSmall } from "./discs/Disc-small";
import { DiscSmall } from "./discs/Disc1";
import { TestModel } from "./discs/Test";


function Box(props: ThreeElements["mesh"]) {
    const mesh = useRef<THREE.Mesh>(null!);
    const [hovered, setHover] = useState(false);
    const [active, setActive] = useState(false);
    useFrame((state, delta) => (mesh.current.rotation.x += 0.01));
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
}

export default function Main3D() {
    return (
        <Canvas>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <Suspense fallback={null}>
                <TestModel/>
            </Suspense>
            <Box position={[-1.2, 0, 0]} />
            <Box position={[1.2, 0, 0]} />
        </Canvas>
    );
}
