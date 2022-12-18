import { StyleSheet } from "react-native";

const WeekBlockStyle = () => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: "100%",
      height: 140,
      top: "1%",
      alignItems: "center",
      textAlign: "center",
    },
    contents: {
      width: "100%",
      alignItems: "center",
      justifyContent: "flex-start",
      flex: 1,
      height: 10,
      marginBottom: 0,
    },
    modalButtonContainer: {
      alignItems: 'center'
    },
    dateText: {
      fontSize: 15,
    },
    iconWrapper: {
      flexDirection: "row",
      justifyContent: "center",
      width: "70%",
      alignItems: "center",
      marginRight: 30,
      marginLeft: 30,
      marginTop: 12,
      marginBottom: 18,
    },
    iconContainer: {
      alignItems: "center",
      marginRight: 16,
      marginLeft: 16
    },
  });

  return styles;
};

export default WeekBlockStyle;
