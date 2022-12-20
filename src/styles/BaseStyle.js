import { StyleSheet } from "react-native";

const BaseStyle = () => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
    },
    bar: {
      height: 2,
      backgroundColor: "#eee",
    },
    subTitleContainer: {
      borderBottomWidth: 3,
      borderBottomColor: "#ff4500",
      paddingBottom: 4,
      marginTop: 30,
    },
    subTitle: {
      fontSize: 16,
      color: "#ff4500",
      fontWeight: "bold",
    },
    wrapper: {
      width: "90%",
      marginLeft: "auto",
      marginRight: "auto",
    },
  });

  return styles;
};

export default BaseStyle;
