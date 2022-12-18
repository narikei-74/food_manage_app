import { StyleSheet } from "react-native"

export const MiniButtonStyle = (color) => {
  return (
    StyleSheet.create({
      button: {
        backgroundColor: color,
        borderRadius: 30,
        borderColor: color,
        paddingHorizontal: 10,
        opacity: 0.9,
      },
      title: {
        color: "#fff",
        fontSize: 14,
      }
    })
  )
}