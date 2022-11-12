import { ScrollView } from "react-native";
import { useState } from "react";
import BaseStyle from "../styles/BaseStyle";
import RecipeListComponent from "../components/RecipeListComponent";
import GetRecipeDataService from "../services/GetRecipeDataService";

const RecipeListScreen = ({ navigation }) => {
  const styles = BaseStyle();

  /// state ///
  // 現在保存されているマイレシピ
  const [recipeData, setRecipeData] = useState(GetRecipeDataService());

  return (
    <ScrollView style={styles.container}>
      <RecipeListComponent
        onPress={() => {
          navigation.navigate("RecipeDetail");
        }}
        myRecipeData={recipeData}
        currentWeek={false}
        isMyRecipe={false}
      />
    </ScrollView>
  );
};

export default RecipeListScreen;
