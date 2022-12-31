import { StyleSheet } from "react-native";

const RecipeListStyle = () => {
  const styles = StyleSheet.create({
    blocks: {
      padding: "2%",
    },
    foodBlock: {
      width: "48%",
      height: 225,
      borderWidth: 1,
      borderColor: "#eee",
      borderRadius: 10,
      alignItems: "center",
      marginTop: 10,
      marginLeft: "1%",
      marginRight: "1%",
    },
    image: {
      width: "100%",
      height: 170,
      margin: 0,
      overflow: "hidden",
    },
    recipeNameTextContainer: {
      width: "100%",
      position: "absolute",
      bottom: 0,
      borderTopWidth: 3,
      borderTopColor: "#F06A47",
      height: 55,
      alignItems: "center",
      justifyContent: "center",
      // shadowColor: "#555",
      // shadowOffset: { width: 0, height: 0 },
      // shadowOpacity: 0.4,
      // shadowRadius: 8,
    },
    recipeNameText: {
      color: "#333",
      margin: 0,
      fontSize: 14,
      fontWeight: "bold",
    },
    emptyBlock: {
      width: "100%",
      height: "100%",
      alignItems: "center",
      justifyContent: "center",
    },
  });

  return styles;
};

export default RecipeListStyle;
