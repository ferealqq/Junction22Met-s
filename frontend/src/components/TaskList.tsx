import { SafeAreaView, ScrollView, StyleSheet } from "react-native";
import { Task } from "./Task";
export const TaskList = () => {
  return (
    <SafeAreaView style={styles.scrollView}>
      <ScrollView style={styles.scrollView}>
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: "pink",
    height: "100%",
    marginHorizontal: 20,
    alignSelf: "stretch",
  },
});
