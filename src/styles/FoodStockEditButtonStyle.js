import { StyleSheet } from "react-native";

const FoodStockEditButtonStyle = () => {
  const styles = StyleSheet.create({
    iconWrapper: {
      position: "absolute",
      top: "auto",
      left: "auto",
      right: 20,
      bottom: 40,
      justifyContent: "center",
      alignItems: "center",
    },
    iconContainer: {
      alignItems: "center",
      marginTop: 8,
      marginHorizontal: 10,
    },
  });

  return styles;
};

export default FoodStockEditButtonStyle;
