// コアコンポーネント
import { View, ScrollView } from "react-native";
// スタイル
import BaseStyle from "../styles/BaseStyle";
// カスタムコンポーネント
import RecipeListComponent from "../components/RecipeListComponent";
// フック
import { useState } from "react";
// サービス
import GetRecipeDataService from "../services/GetRecipeDataService";

const RecipeListScreen = ({ navigation }) => {
  const styles = BaseStyle();

  // 指定されている曜日
  const currentWeek = false;

  // 現在保存されているマイレシピ
  const [recipeData, setRecipeData] = useState(GetRecipeDataService());

  return (
    <ScrollView style={styles.container}>
      <RecipeListComponent
        onPress={() => {
          navigation.navigate("レシピ");
        }}
        myRecipeData={recipeData}
        currentWeek={currentWeek}
        isMyRecipe={false}
      />
    </ScrollView>
  );
};

export default RecipeListScreen;
