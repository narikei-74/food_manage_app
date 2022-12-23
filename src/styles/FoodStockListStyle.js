import { StyleSheet } from "react-native";

export const FoodStockListStyle = () => {
  return StyleSheet.create({
    list: {
      marginTop: 10,
    },
    listItem: {
      width: "100%",
      marginRight: "auto",
      marginLeft: "auto",
      paddingBottom: 5,
      paddingTop: 5,
      paddingRight: 5,
      paddingLeft: 8,
      borderBottomWidth: 3,
      borderBottomColor: "#ddd",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      height: 50,
      backgroundColor: "#fff",
    },
    foodName: {
      fontSize: 16,
      fontWeight: "bold",
      color: "#555",
    },
    checkBox: {
      height: "100%",
      padding: 0,
      margin: 0,
      marginLeft: -1,
      justifyContent: "center",
    },
    inputContainer: {
      flexDirection: "row",
      justifyContent: "flex-end",
      alignItems: "flex-end",
    },
    foodQuantityInput: {
      borderWidth: 1,
      borderColor: "#777",
      width: 60,
      borderRadius: 4,
      height: 28,
      paddingRight: 6,
      paddingLeft: 6,
      marginRight: 4,
    },
    quantityUnit: {
      fontSize: 16,
      color: "#555",
    },
    buttons: {
      flexDirection: "row",
      width: 240,
      marginLeft: "auto",
      marginRight: "auto",
      justifyContent: "space-around",
    },
    submitButton: {
      width: 100,
      borderColor: "#ff4500",
      borderWidth: 1,
      borderRadius: 6,
      padding: 5,
      backgroundColor: "#fff",
      marginLeft: "auto",
      marginRight: "auto",
    },
    submitButtonTitle: {
      color: "#ff4500",
      fontSize: 14,
    },
    resetButton: {
      width: 100,
      borderColor: "#999",
      borderWidth: 1,
      borderRadius: 6,
      padding: 5,
      backgroundColor: "#999",
      marginLeft: "auto",
      marginRight: "auto",
    },
    resetButtonTitle: {
      color: "#fff",
      fontSize: 14,
    },
    keyboardCompBtn: {
      width: 60,
      alignItems: "center",
      padding: 10,
    },
    keyboardCompBtnText: {
      fontSize: 18,
      fontWeight: "bold",
      color: "hsl(210, 100%, 60%)",
    },
  });
};
