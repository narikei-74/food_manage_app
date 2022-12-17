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
    },
    image: {
      width: "100%",
      height: "100%",
      opacity: 0.9,
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
