import { StyleSheet } from "react-native";

export const NotEnoughFoodListStyle = () => {
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
      color: "red",
    },
    quantityUnit: {
      fontSize: 16,
      color: "red",
    },
    warningText: {
      marginBottom: 20,
      color: "#555",
      fontWeight: "bold",
    },
  });
};
