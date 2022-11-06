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
};
