import { StyleSheet } from "react-native";

export const FoodListStyle = () => {
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
      height: 45,
      backgroundColor: "#fff",
    },
    foodName: {
      fontSize: 16,
    },
    button: {
      height: 35,
      backgroundColor: "#fff",
    },
    buttonTitle: {
      fontSize: 16,
      color: "#0000ff",
    },
  });
};
