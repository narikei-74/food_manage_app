import { View, ScrollView } from "react-native";
import { useState } from "react";
import BaseStyle from "../styles/BaseStyle";
import WeekBlockComponent from "../components/WeekBlockComponent";
import RecipeListComponent from "../components/RecipeListComponent";
import { RecipeEditbuttonsComponent } from "../components/RecipeEditbuttonsComponent";
import { useSelector } from "react-redux";

const MyRecipeListScreen = ({ navigation }) => {
  const styles = BaseStyle();

  /// state ///
  // 指定されている曜日
  const nowWeek = new Date().getDay();
  const [currentWeek, setCurrentWeek] = useState(nowWeek);
  // 現在保存されているマイレシピ
  const myRecipeData = useSelector((state) => state.myRecipeData);

  return (
    <ScrollView style={styles.container}>
      <WeekBlockComponent
        currentWeek={currentWeek}
        setCurrentWeek={setCurrentWeek}
      />
      <RecipeEditbuttonsComponent navigation={navigation} />
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
