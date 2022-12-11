import { ScrollView } from "react-native";
import BaseStyle from "../styles/BaseStyle";
import RecipeListComponent from "../components/RecipeListComponent";
import { useSelector } from "react-redux";
import { useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";

const RecipeListScreen = ({ navigation }) => {
  const styles = BaseStyle();
  const route = useRoute();
  const editRecipeID = route.params!=undefined && "editRecipeID" in route.params ? route.params.editRecipeID : null;
  const index = route.params!=undefined && "i" in route.params ? route.params.i : null;

  // 現在保存されているマイレシピ
  const recipeData = useSelector((state) => state.recipeData)._z.data;

  return (
    <ScrollView style={styles.container}>
      <RecipeListComponent
        onPress={(recipe) => {
          navigation.navigate("RecipeDetail",{recipe:recipe});
        }}
        myRecipeData={recipeData}
        currentWeek={false}
        isMyRecipe={false}
        editRecipeID={editRecipeID}
        navigation={navigation}
        index={index}
      />
    </ScrollView>
  );
};

export default RecipeListScreen;
