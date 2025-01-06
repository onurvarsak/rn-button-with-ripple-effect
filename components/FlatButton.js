import { View, Text, Pressable } from "react-native"
import React from "react"

const FlatButton = ({ children, onPress }) => {
  return (
    <Pressable onPress={onPress}>
      <View>
        {/* tüm stil özellikleri Text'e uygulanmadığı için View kullanıldı */}
        <Text>{children}</Text>
      </View>
    </Pressable>
  )
}

export default FlatButton
