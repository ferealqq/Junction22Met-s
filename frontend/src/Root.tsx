import { StyleSheet, Text, View } from "react-native";
import Forestview from "./Forestview";

export default function Root() {
  return (
    <View style={styles.container}>
      <Text>Lorem ipsum sattana perkele!!!!!!!!</Text>
      <View style={styles.canvas}>
        <Forestview />
      </View>
      <Text>Lorem ipsum sattana perkele</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    //width: "100%",
    flex: 1,
    backgroundColor: "#a9fda5",
    alignItems: "center",
    justifyContent: "center",
  },

  canvas: {
    width: "100%",
    height: "50%",
    backgroundColor: "#fff",
  },
});
