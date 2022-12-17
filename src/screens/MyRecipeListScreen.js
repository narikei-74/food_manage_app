import { View, ScrollView, Text } from "react-native";
import { useContext, useEffect, useState } from "react";
import BaseStyle from "../styles/BaseStyle";
import WeekBlockComponent from "../components/WeekBlockComponent";
import { RecipeEditbuttonsComponent } from "../components/RecipeEditbuttonsComponent";
import { useDispatch, useSelector } from "react-redux";
import { UserContext } from "../context/UserContext";
import MyRecipeListComponent from "../components/MyRecipeListComponent";
import { fetchMyRecipe } from "../redux/MyRecipeSlice";

const MyRecipeListScreen = (props) => {
  const styles = BaseStyle();
  const { navigation } = props;

  const nowWeek = new Date().getDay();
  const [currentWeek, setCurrentWeek] = useState(nowWeek);
  const { currentUser } = useContext(UserContext);

  const dispatch = useDispatch();
  const myRecipe = useSelector((state) => state.myRecipe);

  useEffect(() => {
    dispatch(fetchMyRecipe()).catch((error) => error.massage);
  }, [dispatch]);

  useEffect(() => {
    if (!currentUser) {
      navigation.navigate("Login");
    }
  }, []);

  const myRecipeListView = () => {
    if (myRecipe.loader === true) {
      return (
        <View>
          <Text>Loading...</Text>
        </View>
      );
    } else {
      if (myRecipe.error === undefined) {
        return (
          <MyRecipeListComponent
            onPress={(recipe) => {
              navigation.navigate("RecipeDetail", { recipe: recipe });
            }}
            myRecipeData={myRecipe.data}
            currentWeek={currentWeek}
            isMyRecipe={true}
          />
        );
      } else {
        alert(myRecipe.error);
        <MyRecipeListComponent
          onPress={(recipe) => {
            navigation.navigate("RecipeDetail", { recipe: recipe });
          }}
          myRecipeData={[]}
          currentWeek={currentWeek}
          isMyRecipe={true}
        />;
      }
    }
  };

  return (
    <ScrollView style={styles.container}>
      {}
      <WeekBlockComponent
        currentWeek={currentWeek}
        setCurrentWeek={setCurrentWeek}
      />
      <RecipeEditbuttonsComponent navigation={navigation} />
      <View style={styles.bar}></View>
      {myRecipeListView()}
    </ScrollView>
  );
};

export default MyRecipeListScreen;
