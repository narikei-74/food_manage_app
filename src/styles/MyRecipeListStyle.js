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
      backgroundColor: "#e3e3e3",
      borderRadius: 10,
    },
    recipeInfoContainer: {
      flexDirection: "row",
      marginTop: 20,
      marginBottom: 10,
      width: "90%",
      marginLeft: "auto",
      marginRight: "auto",
      justifyContent: "center",
      alignItems: "center",
    },
    peopleNum: {
      fontSize: 18,
      fontWeight: "bold",
      color: "#555",
    },
    totalCookingTime: {
      fontSize: 18,
      fontWeight: "bold",
      color: "#555",
      marginRight: 10,
    },
    inputPeopleNum: {
      borderWidth: 1,
      borderColor: "#555",
      borderRadius: 4,
      width: 55,
      height: 30,
      marginLeft: 6,
      marginRight: 6,
      padding: 4,
      fontSize: 18,
    },
    peopleNumButton: {
      width: 90,
      height: 32,
      padding: 4,
      backgroundColor: "#ff4500",
      marginLeft: 15,
      borderRadius: 6,
    },
    peopleNumButtonTitle: {
      fontSize: 14,
    },
  });

  return styles;
};

export default MyRecipeListStyle;
