import { View, Text, Pressable, StyleSheet } from "react-native"
import React from "react"

const FlatButton = ({ children, onPress }) => {
  return (
    <View style={styles.container}>
      <Pressable
        style={styles.buttonContainer}
        onPress={onPress}
        android_ripple={{ color: "#C75406" }}
      >
        {/* tüm stil özellikleri Text'e uygulanmadığı için View kullanıldı */}
        <Text style={styles.textContainer}>{children}</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    overflow: "hidden", // container'ın içindeki elementlerin container'ın dışına taşmasını engeller
    elevation: 3 // android'de gölgelendirme efekti ekler,
  },

  buttonContainer: {
    paddingHorizontal: 16, // container'ın sağ ve sol kenarlarından 16 birim içeriye boşluk ekler
    paddingVertical: 10, // container'ın üst ve alt kenarlarından 10 birim içeriye boşluk ekler
    backgroundColor: "#FF6700",
    width: "100%"
  },
  textContainer: {
    color: "#fff",
    fontWeight: "bold",
    textTransform: "uppercase",
    fontSize: 16,
    textAlign: "center"
  }
})

export default FlatButton
