import { Link } from "expo-router";
import { Text, View } from "react-native";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor : "#25292e",
    alignItems: "center",
    justifyContent: "center",
  },
  text:{
    color: "#fff",
  },
  button:{
    fontSize: 20,
    textDecorationLine: "underline",
    color: '#fff',  
  }
})

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Good Morning Innocent.</Text>
      <Link style={styles.button} href="/about">more Info in about page</Link>
    </View>
  );
}
