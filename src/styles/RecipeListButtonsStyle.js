import { StyleSheet } from "react-native";

const RecipeListButtonsStyle = () => {
  const styles = StyleSheet.create({
    iconWrapper: {
      position: "absolute",
      top: "auto",
      left: "auto",
      right: 25,
      bottom: 25,
      justifyContent: "center",
      alignItems: "center",
    },
    iconContainer: {
      alignItems: "center",
      marginTop: 8,
      marginHorizontal: 10,
    },
    searchModalContainer: {
      marginLeft: "auto",
      marginRight: "auto",
      width: "90%",
      height: 400,
      backgroundColor: "#fff",
      alignItems: "center",
    },
    searchModalTitle: {
      fontSize: 20,
      letterSpacing: 1,
      marginTop: 10,
      fontWeight: "bold",
    },
    modalButtonContainer: {
      alignItems: "center",
    },
  });

  return styles;
};

export default RecipeListButtonsStyle;
