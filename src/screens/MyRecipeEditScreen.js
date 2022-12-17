import { useState } from "react";
import { View } from "react-native";
import { useSelector } from "react-redux";
import MyRecipeListComponent from "../components/MyRecipeListComponent";
import WeekBlockComponent from "../components/WeekBlockComponent";
import BaseStyle from "../styles/BaseStyle";

const MyRecipeEditScreen = ({ navigation }) => {
  const styles = BaseStyle();

  const nowWeek = new Date().getDay();
  const [currentWeek, setCurrentWeek] = useState(nowWeek);

  const myRecipeData = useSelector((state) => state.myRecipe).data;

  return (
    <View style={styles.container}>
      <WeekBlockComponent
        currentWeek={currentWeek}
        setCurrentWeek={setCurrentWeek}
      />
      <View style={styles.bar}></View>
      <MyRecipeListComponent
        onPress={() => {
          navigation.navigate("MyRecipeDetail");
        }}
        myRecipeData={myRecipeData}
        currentWeek={currentWeek}
        isMyRecipe={true}
        navigation={navigation}
      />
    </View>
  );
};

export default MyRecipeEditScreen;
