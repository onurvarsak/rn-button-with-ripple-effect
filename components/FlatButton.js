import { View, Text, Pressable, StyleSheet } from "react-native"
import React from "react"

const FlatButton = ({ children, onPress }) => {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.container}>
        {/* tüm stil özellikleri Text'e uygulanmadığı için View kullanıldı */}
        <Text>{children}</Text>
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16, // container'ın sağ ve sol kenarlarından 16 birim içeriye boşluk ekler
    paddingVertical: 10, // container'ın üst ve alt kenarlarından 10 birim içeriye boşluk ekler
    backgroundColor: "#FF6700",
    borderRadius: 5,
    elevation: 3, // android'de gölgelendirme efekti ekler,
    width: "100%"
  }
})

export default FlatButton
