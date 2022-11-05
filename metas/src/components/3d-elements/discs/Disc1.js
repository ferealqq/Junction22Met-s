/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function DiscSmall(props) {
  const { nodes, materials } = useGLTF('/disc1.gltf')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Cylinder.geometry} material={materials['Material.002']} position={[0, -0.02, 0]} scale={[1, 1.68, 1]} />
      <group position={[0.27, -0.01, -0.14]} scale={0.44}>
        <mesh geometry={nodes.Sphere003.geometry} material={materials['Material.009']} />
        <mesh geometry={nodes.Sphere003_1.geometry} material={materials['Material.020']} />
        <mesh geometry={nodes.Sphere003_2.geometry} material={materials['Material.021']} />
      </group>
      <mesh geometry={nodes.ImperfectRock002.geometry} material={materials['Material.001']} position={[0.24, 0.22, -0.07]} rotation={[0, 0, -Math.PI]} scale={[1.04, 1.4, 0.91]} />
      <mesh geometry={nodes.Plane001.geometry} material={materials['Material.024']} position={[-0.16, 0.07, 0.09]} rotation={[1.48, 0.07, -2.29]} scale={0.33} />
      <mesh geometry={nodes.Plane006.geometry} material={materials['Material.019']} position={[-0.07, 0.12, -0.22]} rotation={[Math.PI / 2, 0, -0.04]} scale={0.51} />
      <mesh geometry={nodes.Rock006.geometry} material={materials['Material.025']} position={[0.12, -0.02, 0.04]} rotation={[0, 1.29, 0]} scale={0.37} />
    </group>
  )
}

useGLTF.preload('/disc1.gltf')
