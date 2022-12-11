import { View, ScrollView } from "react-native";
import { useContext, useEffect, useState } from "react";
import BaseStyle from "../styles/BaseStyle";
import WeekBlockComponent from "../components/WeekBlockComponent";
import { RecipeEditbuttonsComponent } from "../components/RecipeEditbuttonsComponent";
import { useSelector } from "react-redux";
import { useRoute } from "@react-navigation/native";
import { UserContext } from "../context/UserContext";
import MyRecipeListComponent from "../components/MyRecipeListComponent";

const MyRecipeListScreen = (props) => {
  const {navigation} = props;
  const styles = BaseStyle();

  /// state ///
  // 指定されている曜日
  const nowWeek = new Date().getDay();
  const [currentWeek, setCurrentWeek] = useState(nowWeek);
  // 現在保存されているマイレシピ
  const myRecipeData = useSelector((state) => state.myRecipeData)._z.data;
  const {currentUser} = useContext(UserContext);

  useEffect(()=>{
    if(!currentUser){
      navigation.navigate("Login");
    }
  },[]);

  return (
    <ScrollView style={styles.container}>
      <WeekBlockComponent
        currentWeek={currentWeek}
        setCurrentWeek={setCurrentWeek}
      />
      <RecipeEditbuttonsComponent navigation={navigation} />
      <View style={styles.bar}></View>
      <MyRecipeListComponent
        onPress={(recipe) => {
          navigation.navigate("RecipeDetail",{recipe:recipe});
        }}
        myRecipeData={myRecipeData}
        currentWeek={currentWeek}
        isMyRecipe={true}
      />
    </ScrollView>
  );
};

export default MyRecipeListScreen;
