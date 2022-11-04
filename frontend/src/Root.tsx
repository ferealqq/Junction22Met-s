// import { useQuery } from "@tanstack/react-query";
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";
import { TaskList } from "./components/TaskList";

export default function Root() {
  return (
    <View style={styles.container}>
      <Text style={{ marginTop: 500, marginBottom: 20 }}>asdfasdfas</Text>
      <SafeAreaView style={styles.scrollView}>
        <TaskList />
      </SafeAreaView>
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
    backgroundColor: "pink",
    height: "100%",
    width: "100%",
  },
});
