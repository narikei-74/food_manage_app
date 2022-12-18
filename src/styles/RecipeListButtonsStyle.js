import { StyleSheet } from "react-native";

const RecipeListButtonsStyle = () => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: "100%",
      height: 140,
      top: 18,
      alignItems: "center",
      textAlign: "center",
    },
    iconWrapper: {
      position: "absolute",
      top: "auto",
      left: "auto",
      right: 20,
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
      borderRadius: 8,
    },
    searchModalTitle: {
      fontSize: 20,
      letterSpacing: 1,
      marginTop: 25,
      fontWeight: "bold",
      marginBottom: 15,
    },
    modalButtonContainer: {
      alignItems: "center",
    },
    inputContainer: {
      flexDirection: "row",
      width: 270,
      justifyContent: "space-between",
      marginTop: 14,
      marginBottom: 14,
      alignItems: "center",
    },
    serachInput: {
      borderWidth: 1,
      borderColor: "#777",
      width: 180,
      borderRadius: 4,
      height: 30,
      paddingRight: 8,
      paddingLeft: 8,
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
    searchCategory: {
      width: 180,
      alignItems: "center",
      fontSize: 16,
      height: 30,
      borderRadius: 4,
      borderWidth: 1,
      borderColor: "#777",
    },
    searchButton: {
      width: 200,
      backgroundColor: "#ff4500",
      paddingLeft: 5,
      paddingRight: 5,
      borderRadius: 6,
      marginTop: 25,
    },
  });

  return styles;
};

export default RecipeListButtonsStyle;
