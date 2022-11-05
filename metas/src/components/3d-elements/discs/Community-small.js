/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export function CommunitySmall(props) {
  const mesh = useRef(null);
  useFrame(
    (state, delta) => (mesh.current.rotation.y += props.rotationSpeed / 100)
  );
  const { nodes, materials } = useGLTF("/community-small.gltf");
  return (
    <group {...props} dispose={null} ref={mesh}>
      <mesh
        geometry={nodes.AAGround.geometry}
        material={materials.Ground}
        position={[0, -0.01, 0]}
        scale={[1.67, 0.57, 1.67]}
      />
      <group
        position={[-0.28, 0.01, -0.64]}
        rotation={[0, 0.16, 0]}
        scale={0.11}
      >
        <mesh
          geometry={nodes.Sphere006.geometry}
          material={materials["Material.009"]}
        />
        <mesh
          geometry={nodes.Sphere006_1.geometry}
          material={materials["Material.020"]}
        />
        <mesh
          geometry={nodes.Sphere006_2.geometry}
          material={materials["Material.021"]}
        />
      </group>
      <mesh
        geometry={nodes.Bedrock002.geometry}
        material={materials.Bedrock}
        position={[0.42, 0.46, -0.12]}
        rotation={[0, 0, -Math.PI]}
        scale={[1.73, 2.33, 1.52]}
      />
      <mesh
        geometry={nodes["Grass-s003"].geometry}
        material={materials["Material.024"]}
        position={[-0.09, 0.04, -0.57]}
        rotation={[1.51, -0.1, -0.54]}
        scale={0.09}
      />
      <mesh
        geometry={nodes["Grass-m003"].geometry}
        material={materials["Material.019"]}
        position={[-0.34, 0.04, -0.65]}
        rotation={[Math.PI / 2, 0, -0.2]}
        scale={0.14}
      />
      <mesh
        geometry={nodes.Rock003.geometry}
        material={materials["Material.025"]}
        position={[-0.09, 0.01, -0.5]}
        rotation={[0, -0.47, 0]}
        scale={0.09}
      />
      <group
        position={[-0.03, 0.01, -0.48]}
        rotation={[0, -0.98, 0]}
        scale={0.11}
      >
        <mesh
          geometry={nodes.Sphere007.geometry}
          material={materials["Material.029"]}
        />
        <mesh
          geometry={nodes.Sphere007_1.geometry}
          material={materials["Material.027"]}
        />
        <mesh
          geometry={nodes.Sphere007_2.geometry}
          material={materials["Material.026"]}
        />
      </group>
      <mesh
        geometry={nodes["Grass-m004"].geometry}
        material={materials["Material.028"]}
        position={[-0.54, 0.04, -0.16]}
        rotation={[Math.PI / 2, 0, -0.76]}
        scale={0.11}
      />
      <group
        position={[-0.5, 0.01, -0.48]}
        rotation={[0, 0.16, 0]}
        scale={[0.05, 0.02, 0.05]}
      >
        <mesh
          geometry={nodes.Circle002.geometry}
          material={materials["Orange-leaves"]}
        />
        <mesh
          geometry={nodes.Circle002_1.geometry}
          material={materials.Trunk}
        />
      </group>
      <mesh
        geometry={nodes["Grass-s004"].geometry}
        material={materials["Material.003"]}
        position={[-0.53, 0.03, -0.5]}
        rotation={[1.48, 0.08, -2.33]}
        scale={0.06}
      />
      <group position={[-0.51, 0, -0.22]} rotation={[0, 0.16, 0]} scale={0.04}>
        <mesh
          geometry={nodes.Icosphere002.geometry}
          material={materials["Light-leave"]}
        />
        <mesh
          geometry={nodes.Icosphere002_1.geometry}
          material={materials["Yellow-leaves"]}
        />
      </group>
      <mesh
        geometry={nodes["Grass-m006"].geometry}
        material={materials["Material.001"]}
        position={[-0.56, 0.04, -0.21]}
        rotation={[Math.PI / 2, 0, -2.37]}
        scale={0.08}
      />
      <group
        position={[-0.33, 0.01, -0.23]}
        rotation={[0, 0.16, 0]}
        scale={[0.06, 0.05, 0.06]}
      >
        <mesh
          geometry={nodes.Circle005.geometry}
          material={materials["Orange-pine"]}
        />
        <mesh
          geometry={nodes.Circle005_1.geometry}
          material={materials.Trunk}
        />
      </group>
      <group
        position={[-0.32, 0.01, -0.52]}
        rotation={[0, 0.16, 0]}
        scale={[0.05, 0.04, 0.05]}
      >
        <mesh
          geometry={nodes.Circle004.geometry}
          material={materials["Orange-pine"]}
        />
        <mesh
          geometry={nodes.Circle004_1.geometry}
          material={materials.Trunk}
        />
      </group>
      <mesh
        geometry={nodes.Rock004.geometry}
        material={materials["Material.002"]}
        position={[-0.36, 0.01, -0.37]}
        rotation={[-Math.PI, 1.34, -Math.PI]}
        scale={0.09}
      />
      <group position={[0.1, 0.01, -0.03]} rotation={[0, 1.48, 0]} scale={0.11}>
        <mesh
          geometry={nodes.Sphere008.geometry}
          material={materials["Material.007"]}
        />
        <mesh
          geometry={nodes.Sphere008_1.geometry}
          material={materials["Material.005"]}
        />
        <mesh
          geometry={nodes.Sphere008_2.geometry}
          material={materials["Material.004"]}
        />
      </group>
      <mesh
        geometry={nodes["Grass-m007"].geometry}
        material={materials["Material.006"]}
        position={[0.08, 0.04, 0.03]}
        rotation={[Math.PI / 2, 0, -2.35]}
        scale={0.14}
      />
      <mesh
        geometry={nodes["Grass-m008"].geometry}
        material={materials["Material.008"]}
        position={[0.13, 0.04, 0]}
        rotation={[Math.PI / 2, 0, 1.33]}
        scale={0.14}
      />
      <mesh
        geometry={nodes["Grass-s005"].geometry}
        material={materials["Material.011"]}
        position={[-0.42, 0.04, -0.33]}
        rotation={[1.52, 0.1, -2.7]}
        scale={0.09}
      />
      <group
        position={[-0.19, 0.01, -0.4]}
        rotation={[0, 0.16, 0]}
        scale={0.03}
      >
        <mesh
          geometry={nodes.Circle006.geometry}
          material={materials["Orange-pine"]}
        />
        <mesh
          geometry={nodes.Circle006_1.geometry}
          material={materials["Trunk.001"]}
        />
      </group>
      <mesh
        geometry={nodes.Bush5.geometry}
        material={materials["Yellow-leaves"]}
        position={[-0.12, 0.01, -0.28]}
        rotation={[0, 0.16, 0]}
        scale={0.05}
      />
      <group
        position={[-0.04, 0.01, -0.34]}
        rotation={[3.14, -0.82, 3.14]}
        scale={0.05}
      >
        <mesh
          geometry={nodes.Circle053.geometry}
          material={materials["Orange-leaves"]}
        />
        <mesh
          geometry={nodes.Circle053_1.geometry}
          material={materials.Trunk}
        />
      </group>
      <group
        position={[-0.24, 0, 0.01]}
        rotation={[Math.PI, -0.74, Math.PI]}
        scale={0.04}
      >
        <mesh
          geometry={nodes.Icosphere007.geometry}
          material={materials["Light-leave.003"]}
        />
        <mesh
          geometry={nodes.Icosphere007_1.geometry}
          material={materials["Yellow-leaves"]}
        />
      </group>
      <mesh
        geometry={nodes.Bush2006.geometry}
        material={materials["Purple-bush"]}
        position={[0.16, 0, -0.42]}
        rotation={[0, -0.42, 0]}
        scale={0.04}
      />
      <group position={[0.37, 0, 0.06]} rotation={[0, -1.12, 0]} scale={0.04}>
        <mesh
          geometry={nodes.Icosphere013.geometry}
          material={materials["Light-leave.005"]}
        />
        <mesh
          geometry={nodes.Icosphere013_1.geometry}
          material={materials["blue-bush"]}
        />
      </group>
      <mesh
        geometry={nodes.Bush2008.geometry}
        material={materials["Yellow-leaves"]}
        position={[-0.77, 0, 0.11]}
        rotation={[0, 1.15, 0]}
        scale={0.04}
      />
      <mesh
        geometry={nodes.Bush5002.geometry}
        material={materials["Yellow-leaves"]}
        position={[-0.51, 0.01, 0.27]}
        rotation={[Math.PI, -0.74, Math.PI]}
        scale={0.05}
      />
      <mesh
        geometry={nodes.Bush5003.geometry}
        material={materials["Purple-bush"]}
        position={[0.5, 0.01, -0.24]}
        rotation={[0, -0.42, 0]}
        scale={0.05}
      />
      <mesh
        geometry={nodes.Bush5004.geometry}
        material={materials["blue-bush"]}
        position={[0.41, 0.01, 0.41]}
        rotation={[0, -1.12, 0]}
        scale={0.05}
      />
      <mesh
        geometry={nodes.Bush5005.geometry}
        material={materials["Yellow-leaves"]}
        position={[-0.66, 0.01, 0.1]}
        rotation={[Math.PI, -1.25, Math.PI]}
        scale={0.05}
      />
      <group
        position={[-0.14, 0.01, 0.44]}
        rotation={[Math.PI, -0.74, Math.PI]}
        scale={[0.05, 0.04, 0.05]}
      >
        <mesh
          geometry={nodes.Circle013.geometry}
          material={materials["Orange-pine"]}
        />
        <mesh
          geometry={nodes.Circle013_1.geometry}
          material={materials["Trunk.003"]}
        />
      </group>
      <group
        position={[-0.32, 0.01, 0.41]}
        rotation={[Math.PI, -0.74, Math.PI]}
        scale={0.03}
      >
        <mesh
          geometry={nodes.Circle003.geometry}
          material={materials["Orange-pine"]}
        />
        <mesh
          geometry={nodes.Circle003_1.geometry}
          material={materials["Trunk.002"]}
        />
      </group>
      <group
        position={[-0.3, 0.01, 0.2]}
        rotation={[Math.PI, -0.74, Math.PI]}
        scale={[0.06, 0.05, 0.06]}
      >
        <mesh
          geometry={nodes.Circle012.geometry}
          material={materials["Orange-pine"]}
        />
        <mesh
          geometry={nodes.Circle012_1.geometry}
          material={materials["Trunk.003"]}
        />
      </group>
      <group
        position={[0.27, 0.01, -0.23]}
        rotation={[0, -0.42, 0]}
        scale={[0.05, 0.04, 0.05]}
      >
        <mesh
          geometry={nodes.Circle017.geometry}
          material={materials["Trunk.004"]}
        />
        <mesh
          geometry={nodes.Circle017_1.geometry}
          material={materials["Purble-pine"]}
        />
      </group>
      <group
        position={[0.41, 0.01, -0.39]}
        rotation={[0, -0.42, 0]}
        scale={0.03}
      >
        <mesh
          geometry={nodes.Circle018.geometry}
          material={materials["Trunk.005"]}
        />
        <mesh
          geometry={nodes.Circle018_1.geometry}
          material={materials["Purble-pine"]}
        />
      </group>
      <group
        position={[0.39, 0.01, -0.57]}
        rotation={[0, -0.42, 0]}
        scale={[0.05, 0.04, 0.05]}
      >
        <mesh
          geometry={nodes.Circle016.geometry}
          material={materials["Purble-pine"]}
        />
        <mesh
          geometry={nodes.Circle016_1.geometry}
          material={materials["Trunk.004"]}
        />
      </group>
      <group
        position={[0.62, 0.01, 0.11]}
        rotation={[0, -1.12, 0]}
        scale={[0.05, 0.04, 0.05]}
      >
        <mesh
          geometry={nodes.Circle023.geometry}
          material={materials["blue-pine"]}
        />
        <mesh
          geometry={nodes.Circle023_1.geometry}
          material={materials["Trunk.007"]}
        />
      </group>
      <group
        position={[0.51, 0.01, 0.31]}
        rotation={[0, -1.12, 0]}
        scale={0.03}
      >
        <mesh
          geometry={nodes.Circle021.geometry}
          material={materials["blue-pine"]}
        />
        <mesh
          geometry={nodes.Circle021_1.geometry}
          material={materials["Trunk.006"]}
        />
      </group>
      <group
        position={[0.31, 0.01, 0.23]}
        rotation={[0, -1.12, 0]}
        scale={[0.06, 0.05, 0.06]}
      >
        <mesh
          geometry={nodes.Circle022.geometry}
          material={materials["blue-pine"]}
        />
        <mesh
          geometry={nodes.Circle022_1.geometry}
          material={materials["Trunk.007"]}
        />
      </group>
      <group
        position={[-0.5, 0.01, 0]}
        rotation={[Math.PI, -1.25, Math.PI]}
        scale={[0.05, 0.04, 0.05]}
      >
        <mesh
          geometry={nodes.Circle025.geometry}
          material={materials["Orange-pine"]}
        />
        <mesh
          geometry={nodes.Circle025_1.geometry}
          material={materials["Trunk.008"]}
        />
      </group>
      <group
        position={[-0.7, 0.02, -0.09]}
        rotation={[Math.PI, -0.9, Math.PI]}
        scale={0.02}
      >
        <mesh
          geometry={nodes.Circle026.geometry}
          material={materials["Orange-pine"]}
        />
        <mesh
          geometry={nodes.Circle026_1.geometry}
          material={materials["Trunk.009"]}
        />
      </group>
      <group
        position={[-0.05, 0.01, -0.08]}
        rotation={[0, 0.77, 0]}
        scale={[0.06, 0.05, 0.06]}
      >
        <mesh
          geometry={nodes.Circle028.geometry}
          material={materials["Orange-pine"]}
        />
        <mesh
          geometry={nodes.Circle028_1.geometry}
          material={materials["Trunk.011"]}
        />
      </group>
      <group
        position={[0.14, 0.01, 0.44]}
        rotation={[0, -1.12, 0]}
        scale={[0.05, 0.04, 0.05]}
      >
        <mesh
          geometry={nodes.Circle030.geometry}
          material={materials["blue-pine"]}
        />
        <mesh
          geometry={nodes.Circle030_1.geometry}
          material={materials["Trunk.013"]}
        />
      </group>
      <group position={[0.24, 0.01, 0.6]} rotation={[0, -1.12, 0]} scale={0.02}>
        <mesh
          geometry={nodes.Circle031.geometry}
          material={materials["blue-pine"]}
        />
        <mesh
          geometry={nodes.Circle031_1.geometry}
          material={materials["Trunk.014"]}
        />
      </group>
      <group
        position={[-0.67, 0.01, 0.3]}
        rotation={[Math.PI, -0.49, Math.PI]}
        scale={0.11}
      >
        <mesh
          geometry={nodes.Sphere004.geometry}
          material={materials["Material.056"]}
        />
        <mesh
          geometry={nodes.Sphere004_1.geometry}
          material={materials["Material.058"]}
        />
        <mesh
          geometry={nodes.Sphere004_2.geometry}
          material={materials["Material.059"]}
        />
      </group>
      <group
        position={[-0.41, 0.01, 0.57]}
        rotation={[-Math.PI, 0.4, -Math.PI]}
        scale={0.11}
      >
        <mesh
          geometry={nodes.Sphere005.geometry}
          material={materials["Material.044"]}
        />
        <mesh
          geometry={nodes.Sphere005_1.geometry}
          material={materials["Material.046"]}
        />
        <mesh
          geometry={nodes.Sphere005_2.geometry}
          material={materials["Material.047"]}
        />
      </group>
      <group
        position={[-0.11, 0.01, 0.57]}
        rotation={[Math.PI, -0.74, Math.PI]}
        scale={0.11}
      >
        <mesh
          geometry={nodes.Sphere015.geometry}
          material={materials["Material.054"]}
        />
        <mesh
          geometry={nodes.Sphere015_1.geometry}
          material={materials["Material.051"]}
        />
        <mesh
          geometry={nodes.Sphere015_2.geometry}
          material={materials["Material.050"]}
        />
      </group>
      <group
        position={[0.48, 0.01, -0.66]}
        rotation={[0, -0.42, 0]}
        scale={0.11}
      >
        <mesh
          geometry={nodes.Sphere016.geometry}
          material={materials["Material.071"]}
        />
        <mesh
          geometry={nodes.Sphere016_1.geometry}
          material={materials["Material.074"]}
        />
        <mesh
          geometry={nodes.Sphere016_2.geometry}
          material={materials["Material.075"]}
        />
      </group>
      <group
        position={[0.61, 0.01, -0.37]}
        rotation={[0, -1.56, 0]}
        scale={0.11}
      >
        <mesh
          geometry={nodes.Sphere017.geometry}
          material={materials["Material.081"]}
        />
        <mesh
          geometry={nodes.Sphere017_1.geometry}
          material={materials["Material.079"]}
        />
        <mesh
          geometry={nodes.Sphere017_2.geometry}
          material={materials["Material.078"]}
        />
      </group>
      <group
        position={[0.47, 0.01, -0.1]}
        rotation={[Math.PI, -1.03, Math.PI]}
        scale={0.11}
      >
        <mesh
          geometry={nodes.Sphere018.geometry}
          material={materials["Material.069"]}
        />
        <mesh
          geometry={nodes.Sphere018_1.geometry}
          material={materials["Material.067"]}
        />
        <mesh
          geometry={nodes.Sphere018_2.geometry}
          material={materials["Material.066"]}
        />
      </group>
      <group
        position={[0.28, 0.01, 0.5]}
        rotation={[Math.PI, -0.32, Math.PI]}
        scale={0.11}
      >
        <mesh
          geometry={nodes.Sphere019.geometry}
          material={materials["Material.094"]}
        />
        <mesh
          geometry={nodes.Sphere019_1.geometry}
          material={materials["Material.096"]}
        />
        <mesh
          geometry={nodes.Sphere019_2.geometry}
          material={materials["Material.097"]}
        />
      </group>
      <group
        position={[0.66, 0.01, 0.39]}
        rotation={[Math.PI, -0.87, Math.PI]}
        scale={0.11}
      >
        <mesh
          geometry={nodes.Sphere020.geometry}
          material={materials["Material.082"]}
        />
        <mesh
          geometry={nodes.Sphere020_1.geometry}
          material={materials["Material.084"]}
        />
        <mesh
          geometry={nodes.Sphere020_2.geometry}
          material={materials["Material.085"]}
        />
      </group>
      <group position={[0.75, 0.01, 0.1]} rotation={[0, -1.12, 0]} scale={0.11}>
        <mesh
          geometry={nodes.Sphere021.geometry}
          material={materials["Material.092"]}
        />
        <mesh
          geometry={nodes.Sphere021_1.geometry}
          material={materials["Material.089"]}
        />
        <mesh
          geometry={nodes.Sphere021_2.geometry}
          material={materials["Material.088"]}
        />
      </group>
      <group
        position={[0.03, 0.01, 0.63]}
        rotation={[-Math.PI, 0.53, -Math.PI]}
        scale={0.11}
      >
        <mesh
          geometry={nodes.Sphere022.geometry}
          material={materials["Material.107"]}
        />
        <mesh
          geometry={nodes.Sphere022_1.geometry}
          material={materials["Material.106"]}
        />
        <mesh
          geometry={nodes.Sphere022_2.geometry}
          material={materials["Material.105"]}
        />
      </group>
      <mesh
        geometry={nodes["Grass-m009"].geometry}
        material={materials["Material.055"]}
        position={[-0.66, 0.04, 0.26]}
        rotation={[Math.PI / 2, 0, -0.82]}
        scale={0.14}
      />
      <mesh
        geometry={nodes["Grass-m017"].geometry}
        material={materials["Material.057"]}
        position={[-0.61, 0.04, 0.29]}
        rotation={[Math.PI / 2, 0, 1.78]}
        scale={0.14}
      />
      <mesh
        geometry={nodes["Grass-m018"].geometry}
        material={materials["Material.062"]}
        position={[0.09, 0.04, -0.12]}
        rotation={[Math.PI / 2, 0, -2.98]}
        scale={0.08}
      />
      <mesh
        geometry={nodes["Grass-m019"].geometry}
        material={materials["Material.045"]}
        position={[0.13, 0.04, -0.09]}
        rotation={[Math.PI / 2, 0, -1.37]}
        scale={0.11}
      />
      <mesh
        geometry={nodes["Grass-m020"].geometry}
        material={materials["Material.052"]}
        position={[-0.06, 0.04, 0.54]}
        rotation={[Math.PI / 2, 0, 2.36]}
        scale={0.14}
      />
      <mesh
        geometry={nodes["Grass-m021"].geometry}
        material={materials["Material.073"]}
        position={[0.43, 0.04, -0.7]}
        rotation={[Math.PI / 2, 0, 0.38]}
        scale={0.14}
      />
      <mesh
        geometry={nodes["Grass-m022"].geometry}
        material={materials["Material.080"]}
        position={[-0.03, 0.04, -0.61]}
        rotation={[Math.PI / 2, 0, -0.18]}
        scale={0.11}
      />
      <mesh
        geometry={nodes["Grass-m023"].geometry}
        material={materials["Material.063"]}
        position={[-0.02, 0.04, -0.66]}
        rotation={[Math.PI / 2, 0, -1.79]}
        scale={0.08}
      />
      <mesh
        geometry={nodes["Grass-m024"].geometry}
        material={materials["Material.068"]}
        position={[0.52, 0.04, -0.15]}
        rotation={[Math.PI / 2, 0, 1.24]}
        scale={0.14}
      />
      <mesh
        geometry={nodes["Grass-m025"].geometry}
        material={materials["Material.070"]}
        position={[0.46, 0.04, -0.14]}
        rotation={[Math.PI / 2, 0, -1.36]}
        scale={0.14}
      />
      <mesh
        geometry={nodes["Grass-m026"].geometry}
        material={materials["Material.093"]}
        position={[0.29, 0.04, 0.46]}
        rotation={[Math.PI / 2, 0, -0.65]}
        scale={0.14}
      />
      <mesh
        geometry={nodes["Grass-m027"].geometry}
        material={materials["Material.095"]}
        position={[0.34, 0.04, 0.49]}
        rotation={[Math.PI / 2, 0, 1.94]}
        scale={0.14}
      />
      <mesh
        geometry={nodes["Grass-m028"].geometry}
        material={materials["Material.100"]}
        position={[0.4, 0.04, 0.01]}
        rotation={[Math.PI / 2, 0, -1.09]}
        scale={0.08}
      />
      <mesh
        geometry={nodes["Grass-m029"].geometry}
        material={materials["Material.083"]}
        position={[0.29, 0.04, 0.04]}
        rotation={[Math.PI / 2, 0, 0.52]}
        scale={0.11}
      />
      <mesh
        geometry={nodes["Grass-m030"].geometry}
        material={materials["Material.090"]}
        position={[0.74, 0.04, 0.04]}
        rotation={[Math.PI / 2, 0, 1.08]}
        scale={0.14}
      />
      <mesh
        geometry={nodes["Grass-m031"].geometry}
        material={materials["Material.102"]}
        position={[-0.8, 0.04, 0.16]}
        rotation={[Math.PI / 2, 0, 2.92]}
        scale={0.08}
      />
      <mesh
        geometry={nodes["Grass-m032"].geometry}
        material={materials["Material.101"]}
        position={[-0.75, 0.04, 0.17]}
        rotation={[Math.PI / 2, 0, -1.75]}
        scale={0.11}
      />
      <mesh
        geometry={nodes["Grass-m034"].geometry}
        material={materials["Material.108"]}
        position={[0.37, 0.04, 0.61]}
        rotation={[Math.PI / 2, 0, 2.66]}
        scale={0.08}
      />
      <mesh
        geometry={nodes["Grass-s006"].geometry}
        material={materials["Material.053"]}
        position={[-0.16, 0.04, 0.24]}
        rotation={[1.56, -0.12, -0.14]}
        scale={0.09}
      />
      <mesh
        geometry={nodes["Grass-s007"].geometry}
        material={materials["Material.060"]}
        position={[0, 0.03, 0.13]}
        rotation={[1.6, -0.11, 0.23]}
        scale={0.06}
      />
      <mesh
        geometry={nodes["Grass-s014"].geometry}
        material={materials["Material.049"]}
        position={[-0.31, 0.04, 0.62]}
        rotation={[1.67, 0.06, 2.02]}
        scale={0.09}
      />
      <mesh
        geometry={nodes["Grass-s015"].geometry}
        material={materials["Material.076"]}
        position={[0.61, 0.04, -0.49]}
        rotation={[1.58, -0.12, 0.04]}
        scale={0.09}
      />
      <mesh
        geometry={nodes["Grass-s016"].geometry}
        material={materials["Material.065"]}
        position={[0.2, 0.03, -0.68]}
        rotation={[1.45, 0.02, -1.76]}
        scale={0.06}
      />
      <mesh
        geometry={nodes["Grass-s017"].geometry}
        material={materials["Material.072"]}
        position={[0.13, 0.04, -0.59]}
        rotation={[1.47, 0.06, -2.12]}
        scale={0.09}
      />
      <mesh
        geometry={nodes["Grass-s018"].geometry}
        material={materials["Material.091"]}
        position={[0.48, 0.04, 0.14]}
        rotation={[1.45, -0.02, -1.42]}
        scale={0.09}
      />
      <mesh
        geometry={nodes["Grass-s019"].geometry}
        material={materials["Material.098"]}
        position={[0.49, 0.03, -0.01]}
        rotation={[1.47, -0.06, -1.06]}
        scale={0.06}
      />
      <mesh
        geometry={nodes["Grass-s020"].geometry}
        material={materials["Material.087"]}
        position={[0.74, 0.04, 0.31]}
        rotation={[1.65, -0.08, 0.75]}
        scale={0.09}
      />
      <mesh
        geometry={nodes["Grass-s021"].geometry}
        material={materials["Material.103"]}
        position={[0.12, 0.04, 0.68]}
        rotation={[1.67, 0.07, 2.15]}
        scale={0.09}
      />
      <mesh
        geometry={nodes.Rock005.geometry}
        material={materials["Material.061"]}
        position={[-0.19, 0.01, 0.3]}
        rotation={[0, -0.76, 0]}
        scale={0.09}
      />
      <mesh
        geometry={nodes.Rock008.geometry}
        material={materials["Material.048"]}
        position={[-0.35, 0.01, 0.55]}
        rotation={[-Math.PI, -0.11, -Math.PI]}
        scale={0.09}
      />
      <mesh
        geometry={nodes.Rock009.geometry}
        material={materials["Material.077"]}
        position={[0.56, 0.01, -0.43]}
        rotation={[0, -1.05, 0]}
        scale={0.09}
      />
      <mesh
        geometry={nodes.Rock019.geometry}
        material={materials["Material.064"]}
        position={[0.27, 0.01, -0.47]}
        rotation={[0, 1.22, 0]}
        scale={0.09}
      />
      <mesh
        geometry={nodes.Rock020.geometry}
        material={materials["Material.099"]}
        position={[0.53, 0.01, 0.19]}
        rotation={[0, 0.51, 0]}
        scale={0.09}
      />
      <mesh
        geometry={nodes.Rock021.geometry}
        material={materials["Material.086"]}
        position={[0.66, 0.01, 0.33]}
        rotation={[-Math.PI, -1.39, -Math.PI]}
        scale={0.09}
      />
      <mesh
        geometry={nodes.Rock022.geometry}
        material={materials["Material.104"]}
        position={[0.08, 0.01, 0.62]}
        rotation={[-Math.PI, 0.02, -Math.PI]}
        scale={0.09}
      />
      <group
        position={[-0.54, 0.01, 0.43]}
        rotation={[0.01, 1.4, -0.01]}
        scale={0.04}
      >
        <mesh
          geometry={nodes.Circle001.geometry}
          material={materials["Orange-leaves"]}
        />
        <mesh
          geometry={nodes.Circle001_1.geometry}
          material={materials["Trunk.003"]}
        />
      </group>
      <group
        position={[0.6, 0.01, -0.26]}
        rotation={[3.14, -0.24, -3.14]}
        scale={0.03}
      >
        <mesh
          geometry={nodes.Circle019.geometry}
          material={materials["Purple-leaves"]}
        />
        <mesh
          geometry={nodes.Circle019_1.geometry}
          material={materials["Trunk.004"]}
        />
      </group>
      <group
        position={[0.5, 0.01, 0.47]}
        rotation={[3.14, 0.47, -3.14]}
        scale={0.05}
      >
        <mesh
          geometry={nodes.Circle020.geometry}
          material={materials["Blue-leaves"]}
        />
        <mesh
          geometry={nodes.Circle020_1.geometry}
          material={materials["Trunk.007"]}
        />
      </group>
      <group
        position={[-0.6, 0.01, -0.3]}
        rotation={[0.16, 1.55, -0.16]}
        scale={0.04}
      >
        <mesh
          geometry={nodes.Circle027.geometry}
          material={materials["Orange-leaves"]}
        />
        <mesh
          geometry={nodes.Circle027_1.geometry}
          material={materials["Trunk.010"]}
        />
      </group>
      <group
        position={[-0.07, 0.01, 0.18]}
        rotation={[Math.PI, -0.74, Math.PI]}
        scale={[0.07, 0.03, 0.07]}
      >
        <mesh
          geometry={nodes.Circle014.geometry}
          material={materials["Orange-leaves"]}
        />
        <mesh
          geometry={nodes.Circle014_1.geometry}
          material={materials["Trunk.003"]}
        />
      </group>
      <group
        position={[0.21, 0.01, -0.64]}
        rotation={[0, -0.42, 0]}
        scale={[0.05, 0.02, 0.05]}
      >
        <mesh
          geometry={nodes.Circle015.geometry}
          material={materials["Purple-leaves"]}
        />
        <mesh
          geometry={nodes.Circle015_1.geometry}
          material={materials["Trunk.004"]}
        />
      </group>
      <group
        position={[0.48, 0.01, 0.06]}
        rotation={[0, -1.12, 0]}
        scale={[0.07, 0.03, 0.07]}
      >
        <mesh
          geometry={nodes.Circle024.geometry}
          material={materials["Blue-leaves"]}
        />
        <mesh
          geometry={nodes.Circle024_1.geometry}
          material={materials["Trunk.007"]}
        />
      </group>
      <group
        position={[-0.21, 0.01, 0.63]}
        rotation={[-Math.PI, 0.61, -Math.PI]}
        scale={[0.07, 0.03, 0.07]}
      >
        <mesh
          geometry={nodes.Circle029.geometry}
          material={materials["Orange-leaves"]}
        />
        <mesh
          geometry={nodes.Circle029_1.geometry}
          material={materials["Trunk.012"]}
        />
      </group>
      <mesh
        geometry={nodes.Bush5006.geometry}
        material={materials["Purple-bush.001"]}
        position={[0.15, 0.01, -0.53]}
        rotation={[0, -0.42, 0]}
        scale={0.05}
      />
    </group>
  );
}

useGLTF.preload("/community-small.gltf");
