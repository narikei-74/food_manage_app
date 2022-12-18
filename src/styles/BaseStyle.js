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
  });

  return styles;
};

export default BaseStyle;
