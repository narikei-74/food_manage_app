import { StyleSheet } from "react-native"

export const MiniButtonStyle = (color) => {
  return (
    StyleSheet.create({
      button: {
        backgroundColor: color,
        borderRadius: 30,
        borderColor: color,
        paddingHorizontal: 10,
      },
      title: {
        color: "#fff",
        fontSize: 14,
      }
    })
  )
}