import { StyleSheet } from "react-native";

const MyRecipeListStyle = () => {
  const styles = StyleSheet.create({
    blocks: {
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "center",
    },
    foodBlock: {
      width: "90%",
      height: 300,
      borderWidth: 1,
      borderColor: "#eee",
      borderRadius: 10,
      alignItems: "center",
      marginTop: 10,
      shadowColor: "#555",
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.25,
      shadowRadius: 8,
    },
    image: {
      width: "100%",
      height: 250,
      opacity: 0.9,
      margin: 0,
      overflow: "hidden",
    },
    recipeNameTextContainer: {
      width: "100%",
      position: "absolute",
      bottom: 0,
      borderTopWidth: 3,
      borderTopColor: "#F06A47",
      height: 50,
      alignItems: "center",
      justifyContent: "center",
    },
    recipeNameText: {
      color: "#333",
      margin: 0,
      fontSize: 15,
      fontWeight: "bold",

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

export default MyRecipeListStyle;
