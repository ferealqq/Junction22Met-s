// import { useQuery } from "@tanstack/react-query";
import { StatusBar, StyleSheet, View } from "react-native";
import { TaskList } from "./components/TaskList";

export default function Root() {
  return (
    <View style={styles.container}>
      <TaskList />
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
});
