import { StyleSheet } from "react-native"

export const FillButtonStyle = (color, fontSize) => {
  return (
    StyleSheet.create({
      button: {
        backgroundColor: color,
        borderRadius: 30,
        borderColor: color,
      },
      title: {
        color: "#fff",
        fontSize: fontSize,
      }
    })
  )
}