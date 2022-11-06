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
      borderWidth: 2,
      borderColor: "#fff",
      borderRadius: 10,
    },
    image: {
      width: "100%",
      height: "100%",
    },
  });

  return styles;
};

export default RecipeListStyle;
