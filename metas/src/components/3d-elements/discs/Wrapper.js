import { useState } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { DiscSmall } from "./Disc1";
export const WrapperForDiscs = () => {
  //   const [zoom, setZoom] = useState(5);
  const [zoom, setZoom] = useState(false);
  const [focus, setFocus] = useState(true);
  const vec = new THREE.Vector3();
  useFrame((state) => {
    const step = 0.05;

    /*
      Need to find some way to lerp the lookAt
      */
    // @ts-ignore
    zoom ? vec.set(focus.x, focus.y, focus.z + 0.2) : vec.set(0, 0, 5);
    //
    state.camera.position.lerp(vec, step);
    state.camera.lookAt(0, 0, 0);
    // Update to new position/lookAt
    state.camera.updateProjectionMatrix();
  });

  //   controls.setLookAt(
  //     positionX,
  //     positionY,
  //     positionZ,
  //     targetX,
  //     targetY,
  //     targetZ,
  //     true
  //   );

  const zoomToView = (focusRef) => {
    setZoom(!zoom);
    setFocus(focusRef.current.position);
  };
  //   const zoomWorld = () => {
  //     console.log("asdfasdf");
  //     if (zoom === 2) {
  //       setZoom(5);
  //     } else {
  //       setZoom(2);
  //     }
  //   };
  return <DiscSmall rotationSpeed={0.5} zoomToView={zoomToView} />;
};
