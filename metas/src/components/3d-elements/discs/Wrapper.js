// import { useState } from "react";
// import * as THREE from "three";
// import { useFrame } from "@react-three/fiber";
import { Medium1Disc } from "./Medium1disc";
export const WrapperForDiscs = () => {
  //   const [zoom, setZoom] = useState(false);
  //   const [focus, setFocus] = useState(true);
  //   const vec = new THREE.Vector3();
  //   useFrame((state) => {
  //     const step = 0.05;

  //     /*
  //       Need to find some way to lerp the lookAt
  //       */
  //     // @ts-ignore
  //     zoom ? vec.set(focus.x, focus.y, focus.z + 0.2) : vec.set(0, 0, 5);
  //     //
  //     state.camera.position.lerp(vec, step);
  //     state.camera.lookAt(0, 0, 0);
  //     // Update to new position/lookAt
  //     state.camera.updateProjectionMatrix();
  //   });

  //   const zoomToView = (focusRef) => {
  //     setZoom(!zoom);
  //     setFocus(focusRef.current.position);
  //   };
  //   return <DiscSmall rotationSpeed={0.3} zoomToView={zoomToView} />;
  return <Medium1Disc rotationSpeed={0.3} />;
};