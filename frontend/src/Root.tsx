// import { useQuery } from "@tanstack/react-query";
import { useRef } from "react";
import { Animated, StatusBar, StyleSheet, View } from "react-native";
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
    margin: 10,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  scrollView: {
    height: "100%",
    width: "100%",
  },
});
