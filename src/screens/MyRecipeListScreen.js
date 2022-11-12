import { View, ScrollView } from "react-native";
import { useState } from "react";
import BaseStyle from "../styles/BaseStyle";
import WeekBlockComponent from "../components/WeekBlockComponent";
import RecipeListComponent from "../components/RecipeListComponent";
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
      <WeekBlockComponent
        currentWeek={currentWeek}
        setCurrentWeek={setCurrentWeek}
      />
      <View style={styles.bar}></View>
      <RecipeListComponent
        onPress={() => {
          navigation.navigate("MyRecipeDetail");
        }}
        myRecipeData={myRecipeData}
        currentWeek={currentWeek}
        isMyRecipe={true}
      />
    </ScrollView>
  );
};

export default MyRecipeListScreen;
