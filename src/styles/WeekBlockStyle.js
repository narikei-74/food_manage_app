import { StyleSheet } from "react-native";

const WeekBlockStyle = () => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: "100%",
      height: 130,
      top: "4%",
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
      fontSize: 16,
    },
    iconWrapper: {
      flexDirection: "row",
      justifyContent: "space-between",
      width: "70%",
      alignItems: "center",
      marginRight: 30,
      marginLeft: 30,
    },
    iconContainer: {
      // width: 100,
      alignItems: "center",
      justifyContent: "space-between",
      marginHorizontal: 10,
    },
  });

  return styles;
};

export default WeekBlockStyle;
