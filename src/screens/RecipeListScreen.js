import { ScrollView } from "react-native";
import BaseStyle from "../styles/BaseStyle";
import RecipeListComponent from "../components/RecipeListComponent";
import { useSelector } from "react-redux";
import { useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";

const RecipeListScreen = ({ navigation }) => {
  const styles = BaseStyle();
  const route = useRoute();
  const editRecipeName = route.params!=undefined ? route.params.editRecipeName : null;
  // 現在保存されているマイレシピ
  const recipeData = useSelector((state) => state.recipeData)._z.data;
  console.log(recipeData);

  return (
    <ScrollView style={styles.container}>
      <RecipeListComponent
        onPress={() => {
          navigation.navigate("RecipeDetail");
        }}
        myRecipeData={recipeData}
        currentWeek={false}
        isMyRecipe={false}
        recipeName={editRecipeName}
        navigation={navigation}
      />
    </ScrollView>
  );
};

export default RecipeListScreen;
