// import { useQuery } from "@tanstack/react-query";
import { useRef } from "react";
import { Animated, StyleSheet, View } from "react-native";
import { TaskList } from "./components/TaskList";
import { World } from "./components/World";

export default function Root() {
  const scrollOffsetY = useRef(new Animated.Value(0)).current;
  return (
    <View style={styles.container}>
      <World animWorldValue={scrollOffsetY} />
      <TaskList scrollOffsetY={scrollOffsetY} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "tomato",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});
