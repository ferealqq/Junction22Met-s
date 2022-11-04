import { Animated } from "react-native";
export const World = (props: any) => {
  const Header_Max_Height = 500;
  const Header_Min_Height = 10;
  const animateWorldHeight = props.animWorldValue.interpolate({
    inputRange: [0, Header_Max_Height - Header_Min_Height],
    outputRange: [Header_Max_Height, Header_Min_Height],
    extrapolate: "clamp",
  });
  return <Animated.View style={{ height: animateWorldHeight }}></Animated.View>;
};
