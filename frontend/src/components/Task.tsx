import { StyleSheet, Text, View } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";

interface IProps {
  id: string;
  title: string;
  didntDoTask: (id: string) => void;
  didDoTask: (id: string) => void;
}

export const Task = (props: IProps) => {
  const rightSwipeActions = () => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "red",
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            color: "#40394a",
            paddingHorizontal: 10,
            fontWeight: "600",
            paddingVertical: 20,
          }}
        >
          I{"'"}m a piece of shit actually
        </Text>
      </View>
    );
  };
  const swipeFromLeftOpen = () => {
    props.didDoTask(props.id);
  };
  const swipeFromRightOpen = () => {
    props.didntDoTask(props.id);
  };
  const leftSwipeActions = () => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#ccffbd",
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            color: "#40394a",
            paddingHorizontal: 10,
            fontWeight: "600",
            paddingVertical: 20,
          }}
        >
          Whoa, I did this!
        </Text>
      </View>
    );
  };
  return (
    <Swipeable
      renderLeftActions={leftSwipeActions}
      renderRightActions={rightSwipeActions}
      onSwipeableRightOpen={swipeFromRightOpen}
      onSwipeableLeftOpen={swipeFromLeftOpen}
    >
      <View style={styles.button}>
        <Text style={styles.buttonText}>{props.title}</Text>
      </View>
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    width: "100%",
  },
  button: {
    marginBottom: 12,
    width: "100%",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 15,
  },
  buttonText: {
    textAlign: "center",
    padding: 50,
    color: "black",
  },
});
