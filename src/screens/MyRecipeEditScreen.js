import { useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { View, Text } from "react-native";
import RecipeListComponent from "../components/RecipeListComponent";
import WeekBlockComponent from "../components/WeekBlockComponent";
import GetMyRecipeDataService from "../services/GetMyRecipeDataService";
import BaseStyle from "../styles/BaseStyle";
import { getDateString, getStartOfWeek, getWeekName } from "../utils/function";

const MyRecipeEditScreen = ({navigation}) => {
  const styles = BaseStyle();
  // 指定されている曜日
  const startOfWeek = getStartOfWeek();
  const nowWeek = new Date().getDay();
  const [currentWeek, setCurrentWeek] = useState(nowWeek);
  // 現在保存されているマイレシピ
  const [myRecipeData, setMyRecipeData] = useState(GetMyRecipeDataService());

  return (
    <View style={styles.container}>
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
            navigation ={navigation}
      />
    </View>
  );
};

export default MyRecipeEditScreen;
