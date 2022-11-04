import { useQuery } from "@tanstack/react-query";
import { StyleSheet, Text, View } from "react-native";

export default function Root() {
  const { data, isLoading } = useQuery(["todos"], () =>
    fetch("https://randomuser.me/api/?results=20").then((res) => res.json())
  );
  console.log(data);
  console.log(isLoading);
  // https://tanstack.com/query/v4/docs/quick-start
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
