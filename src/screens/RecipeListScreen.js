// コア
import { ScrollView } from "react-native";
import { useState } from "react";
// スタイル
import BaseStyle from "../styles/BaseStyle";
// カスタムコンポーネント
import RecipeListComponent from "../components/RecipeListComponent";
// サービス
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
          navigation.navigate("レシピ");
        }}
        myRecipeData={recipeData}
        currentWeek={false}
        isMyRecipe={false}
      />
    </ScrollView>
  );
};

export default RecipeListScreen;
