// import * as THREE from "three";
// import { useFrame } from "@react-three/fiber";
import { Medium1Disc } from "./Medium1disc";
import shallow from "zustand/shallow";
import { Large1Disc } from "./Large1disc";
import { CommunityFull } from "./Community-full";
import { CommunitySmall } from "./Community-small";
import { useWorldModelStore } from "../../../index";
export const WrapperForDiscs = () => {
  const personalModelNumber = useWorldModelStore(
    (state) => state.personalModelNumber,
    shallow
  );
  const communityModelNumber = useWorldModelStore(
    (state) => state.communityModelNumber,
    shallow
  );
  const isCommunityWorld = useWorldModelStore(
    (state) => state.isCommunityWorld,
    shallow
  );
  // TODO: animation & toast
  if (!isCommunityWorld && personalModelNumber === 1) {
    return <Medium1Disc rotationSpeed={0.3} />;
  }
  if (!isCommunityWorld && personalModelNumber === 2) {
    return <Large1Disc rotationSpeed={0.3} />;
  }
  if (isCommunityWorld && communityModelNumber === 1) {
    return <CommunitySmall rotationSpeed={0.1} />;
  }
  if (isCommunityWorld && communityModelNumber === 2) {
    return <CommunityFull rotationSpeed={0.1} />;
  }
  return <Large1Disc rotationSpeed={0.3} />;
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
};
