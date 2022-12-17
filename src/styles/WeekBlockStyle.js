import { StyleSheet } from "react-native";

const WeekBlockStyle = () => {
  const styles = StyleSheet.create({
    container: {
      width: "100%",
      height: 100,
      top: "4%",
      alignItems: "center",
      textAlign: "center",
    },
    contents: {
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
      fontSize: 16,
    },
  });

  return styles;
};

export default WeekBlockStyle;
