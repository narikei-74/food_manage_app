import { StyleSheet } from "react-native"

export const LoginScreenStyle = () => {
  return (
    StyleSheet.create({
      container: {
        flex: 1,
      },
      logoContainer: {
        flex: 1,
        height: "50%",
        justifyContent: "center",
      },
      buttonWrapper: {
        flex: 1,
        alignItems: "center",
      },
      buttonContainer: {
        width: 200,
        marginTop: 50,
        marginBottom: 30,
        padding: 5,
      }
    })
  )
}