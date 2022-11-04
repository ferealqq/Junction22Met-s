/* eslint-disable indent */
import { useState } from "react";
import { Animated, Button, ScrollView, StyleSheet, View } from "react-native";
import { Task } from "./Task";

export const TaskList = (props: any) => {
  const [tasks, setTasks] = useState([
    {
      id: "1",
      title: "Modern JS: \n\nA curated collection",
    },
    {
      id: "2",
      title: "Modern JS: \n\nA curated collection",
    },
    {
      id: "3",
      title: "Modern JS: \n\nA curated collection",
    },
    {
      id: "4",
      title: "Modern JS: \n\nA curated collection",
    },
    {
      id: "5",
      title: "Modern JS: \n\nA curated collection",
    },
    {
      id: "6",
      title: "Modern JS: \n\nA curated collection",
    },
    {
      id: "7",
      title: "Modern JS: \n\nA curated collection",
    },
    {
      id: "8",
      title: "Modern JS: \n\nA curated collection",
    },
  ]);
  const [allTasks, setAllTasks] = useState(false);
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
    <ScrollView
      scrollEventThrottle={16}
      onScroll={Animated.event(
        [{ nativeEvent: { contentOffset: { y: props.scrollOffsetY } } }],
        { useNativeDriver: false }
      )}
      style={styles.scrollView}
    >
      {allTasks ? (
        tasks.map((item) => {
          return (
            <Task
              {...item}
              key={item.id}
              didntDoTask={didntDoTask}
              didDoTask={didDoTask}
            />
          );
        })
      ) : (
        <View>
          {tasks.slice(0, 2).map((item) => {
            return (
              <Task
                {...item}
                key={item.id}
                didntDoTask={didntDoTask}
                didDoTask={didDoTask}
              />
            );
          })}
          <View style={{ paddingBottom: 10 }}>
            <Button title="All tasks" onPress={() => setAllTasks(true)} />
          </View>
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    height: "100%",
    width: "100%",
  },
});
