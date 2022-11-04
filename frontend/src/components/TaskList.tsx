import { useState } from "react";
import { FlatList, StyleSheet } from "react-native";
import { Task } from "./Task";

export const TaskList = () => {
  const [tasks, setTasks] = useState([
    {
      id: "1",
      title: "Do the dishes",
    },
    {
      id: "2",
      title: "Bike to school",
    },
  ]);
  // TODO: Do something else
  const didntDoTask = (id: string) => {
    const filteredData = tasks.filter((item) => item.id !== id);
    setTasks(filteredData);
  };
  // TODO: Do something else
  const didDoTask = (id: string) => {
    const filteredData = tasks.filter((item) => item.id !== id);
    setTasks(filteredData);
  };
  return (
    <FlatList
      style={styles.scrollView}
      data={tasks}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Task {...item} didntDoTask={didntDoTask} didDoTask={didDoTask} />
      )}
    />
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: "pink",
    height: "100%",
    width: "100%",
  },
});
