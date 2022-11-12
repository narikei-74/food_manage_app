import { ScrollView } from "react-native";
import BaseStyle from "../styles/BaseStyle";
import RecipeListComponent from "../components/RecipeListComponent";
import { useSelector } from "react-redux";

const RecipeListScreen = ({ navigation }) => {
  const styles = BaseStyle();

  /// state ///
  // 現在保存されているマイレシピ
  const recipeData = useSelector((state) => state.recipeData);

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
