import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View } from "react-native"
import FlatButton from "./components/FlatButton"

export default function App() {
  const handlePress = () => {
    console.log("Button pressed")
  }

  return (
    <View style={styles.container}>
      <View style={styles.buttons}>
        <FlatButton onPress={handlePress}>Press me</FlatButton>
        <FlatButton
          onPress={handlePress}
          bgColor={"#EBEBEB"}
          rippleColor='#B1B1B1'
          textColor={"black"}
        >
          Press me
        </FlatButton>
      </View>
      <StatusBar style='auto' />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center", // ios'ta içindeki element'lerin width değeri 100% ise yatayda merkezler ve element'lerin içeriği kadar değer yapar bu 100% değerini
    justifyContent: "center"
  },
  buttons: {
    width: "80%"
  }
})
