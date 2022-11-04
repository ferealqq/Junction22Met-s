import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export const Task = () => {
  //   return <Button style={{ backgroundColor: "red", height: "100%" }}></Button>
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>TouchableOpacity</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    width: "100%",
  },
  button: {
    marginBottom: 5,
    // width: 400,
    width: "100%",
    alignItems: "center",
    backgroundColor: "#2196F3",
    borderRadius: 15,
  },
  buttonText: {
    textAlign: "center",
    padding: 20,
    color: "white",
  },
});
