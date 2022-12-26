import { View, ScrollView, Text } from "react-native";
import { useEffect } from "react";
import BaseStyle from "../styles/BaseStyle";
import WeekBlockComponent from "../components/WeekBlockComponent";
import { useDispatch, useSelector } from "react-redux";
import MyRecipeListComponent from "../components/MyRecipeListComponent";
import { fetchMyRecipe, resetError } from "../redux/MyRecipeSlice";

const MyRecipeListScreen = (props) => {
  const styles = BaseStyle();
  const { navigation } = props;

  const dispatch = useDispatch();
  const myRecipe = useSelector((state) => state.myRecipe);
  const currentUser = useSelector((state) => state.currentUser).data;

  useEffect(() => {
    dispatch(fetchMyRecipe(currentUser.ID)).catch((error) => error.massage);
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
      if (myRecipe.error !== undefined) {
        alert(myRecipe.error);
        dispatch(resetError());
      }

      return (
        <MyRecipeListComponent
          onPress={(recipe) => {
            navigation.navigate("RecipeDetail", { recipe: recipe });
          }}
          myRecipeData={myRecipe.data}
          isMyRecipe={true}
        />
      );
    }
  };

  return (
    <ScrollView style={styles.container}>
      <WeekBlockComponent navigation={navigation} />
      <View style={styles.bar}></View>
      {myRecipeListView()}
    </ScrollView>
  );
};

export default MyRecipeListScreen;
