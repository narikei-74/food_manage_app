// コアコンポーネント
import { StatusBar } from "expo-status-bar";
import { View, ScrollView } from "react-native";
// スタイル
import BaseStyle from "../styles/BaseStyle";
// カスタムコンポーネント
import HeaderComponent from "../components/HeaderComponent";
import RecipeListComponent from "../components/RecipeListComponent";
// フック
import { useState } from "react";
// サービス
import GetMyRecipeDataService from "../services/GetMyRecipeDataService";

const MyRecipeListScreen = ({ navigation }) => {
  const styles = BaseStyle();

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
          navigation.navigate("レシピ");
        }}
        myRecipeData={myRecipeData}
        currentWeek={currentWeek}
      />
      <StatusBar style="auto" />
    </ScrollView>
  );
};

export default MyRecipeListScreen;
