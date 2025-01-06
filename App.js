import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View } from "react-native"
import FlatButton from "./components/FlatButton"

export default function App() {
  return (
    <View style={styles.container}>
      <FlatButton>Press me</FlatButton>
      <StatusBar style='auto' />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
})
