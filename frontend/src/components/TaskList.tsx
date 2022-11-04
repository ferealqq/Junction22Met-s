import { useState } from "react";
import { FlatList, SafeAreaView, StyleSheet } from "react-native";
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
  // TODO: Change
  const deleteItemById = (id: string) => {
    const filteredData = tasks.filter((item) => item.id !== id);
    setTasks(filteredData);
  };
  return (
    <SafeAreaView style={styles.scrollView}>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Task {...item} deleteItemById={deleteItemById} />
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: "pink",
    height: "100%",
    width: "100%",
  },
  itemSeparator: {
    flex: 1,
    height: 1,
    backgroundColor: "#444",
  },
});
