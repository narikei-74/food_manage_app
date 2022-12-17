import { StyleSheet } from "react-native"

export const OutlineButtonStyle = (color) => {
  return (
    StyleSheet.create({
      button: {
        borderColor: color,
        borderRadius: 30,
      },
      title: {
        color: color,
        fontSize: 14,
      }
    })
  )
}