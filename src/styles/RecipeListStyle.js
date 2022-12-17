import { StyleSheet } from "react-native";

const RecipeListStyle = () => {
  const styles = StyleSheet.create({
    blocks: {
      flexDirection: "row",
      flexWrap: "wrap",
    },
    foodBlock: {
      width: "50%",
      height: 200,
      borderWidth: 1,
      borderColor: "#ddd",
      borderRadius: 10,
      alignItems: "center",
      paddingBottom: 0,
    },
    image: {
      marginTop: "13%",
      width: "100%",
      height: "95%",
      opacity: 0.9,
      margin: 0,
      overflow: "hidden",
    },
    recipeNameText: {
      position: "absolute",
      top: 0,
      color: "#333",
      margin: 0,
      fontSize: 15,
      opacity: 0.8,
      paddingTop: "2%",
    },
    emptyBlock: {
      width: "100%",
      height: "100%",
      alignItems: "center",
      justifyContent: "center",
    }
  });

  return styles;
};

export default RecipeListStyle;
