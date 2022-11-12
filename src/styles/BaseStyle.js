import { StyleSheet } from "react-native";

const BaseStyle = () => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
    },
    bar: {
      height: 4,
      backgroundColor: "#aaa",
    },
  });

  return styles;
};

export default BaseStyle;
