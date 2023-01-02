import { StyleSheet } from "react-native";

const SwitchFoodManageButtonsStyle = () => {
  return StyleSheet.create({
    container: {
      width: 260,
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: 36,
      marginLeft: "auto",
      marginRight: "auto",
    },
    currentButton: {
      backgroundColor: "#ff4500",
      width: 120,
      borderColor: "#ff4500",
      borderWidth: 1,
      borderRadius: 8,
    },
    currentButtonText: {
      color: "#fff",
      fontSize: 14,
    },
    otherButton: {
      backgroundColor: "#fff",
      width: 120,
      borderColor: "#ff4500",
      borderWidth: 1,
      borderRadius: 8,
    },
    otherButtonText: {
      color: "#ff4500",
      fontSize: 14,
    },
  });
};

export default SwitchFoodManageButtonsStyle;
