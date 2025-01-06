import { View, Text, Pressable, StyleSheet } from "react-native"
import React from "react"

const FlatButton = ({ children, onPress }) => {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.buttonContainer}>
        {/* tüm stil özellikleri Text'e uygulanmadığı için View kullanıldı */}
        <Text style={styles.textContainer}>{children}</Text>
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  buttonContainer: {
    paddingHorizontal: 16, // container'ın sağ ve sol kenarlarından 16 birim içeriye boşluk ekler
    paddingVertical: 10, // container'ın üst ve alt kenarlarından 10 birim içeriye boşluk ekler
    backgroundColor: "#FF6700",
    borderRadius: 5,
    elevation: 3, // android'de gölgelendirme efekti ekler,
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
