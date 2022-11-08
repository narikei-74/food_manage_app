// コア
import { View, ScrollView } from "react-native";
import { useState } from "react";
// スタイル
import BaseStyle from "../styles/BaseStyle";
// カスタムコンポーネント
import HeaderComponent from "../components/HeaderComponent";
import RecipeListComponent from "../components/RecipeListComponent";
// サービス
import GetMyRecipeDataService from "../services/GetMyRecipeDataService";

const MyRecipeListScreen = ({ navigation }) => {
  const styles = BaseStyle();

  /// state ///
  // 指定されている曜日
  const nowWeek = new Date().getDay();
  const [currentWeek, setCurrentWeek] = useState(nowWeek);
  // 現在保存されているマイレシピ
  const [myRecipeData, setMyRecipeData] = useState(GetMyRecipeDataService());

  return (
    <ScrollView style={styles.container}>
      <HeaderComponent
        currentWeek={currentWeek}
        setCurrentWeek={setCurrentWeek}
      />
      <View style={styles.bar}></View>
      <RecipeListComponent
        onPress={() => {
          navigation.setOptions({ title: "私の献立" });
          navigation.navigate("レシピ");
        }}
        myRecipeData={myRecipeData}
        currentWeek={currentWeek}
        isMyRecipe={true}
      />
    </ScrollView>
  );
};

export default MyRecipeListScreen;
