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
      marginBottom: 26,
      color: "#555",
      fontWeight: "bold",
    },
    button: {
      height: 35,
      backgroundColor: "#fff",
    },
    buttonTitle: {
      fontSize: 16,
      color: "#0000ff",
    },
    arrowIcon: {
      fontWeight: "bold",
    },
    additionalDateContainer: {
      flexDirection: "row",
      justifyContent: "flex-end",
      alignItems: "center",
    },
    selectButton: {
      width: 65,
      height: 30,
      backgroundColor: "#fff",
      borderColor: "#555",
      borderWidth: 1,
      borderRadius: 6,
      padding: 0,
    },
    selectText: {
      color: "#555",
    },
    selectAfterText: {
      color: "#555",
      fontWeight: "bold",
    },
  });
};
