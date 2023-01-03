import { View, ScrollView, Text } from "react-native";
import { useEffect } from "react";
import BaseStyle from "../styles/BaseStyle";
import WeekBlockComponent from "../components/WeekBlockComponent";
import { useDispatch, useSelector } from "react-redux";
import MyRecipeListComponent from "../components/MyRecipeListComponent";
import { fetchMyRecipe, resetError } from "../redux/MyRecipeSlice";
import { fetchFoodStock } from "../redux/FoodStockSlice";
import { fetchNotEnoughFood } from "../redux/NotEnoughFoodSlice";

const MyRecipeListScreen = (props) => {
  const styles = BaseStyle();
  const { navigation } = props;

  const dispatch = useDispatch();
  const myRecipe = useSelector((state) => state.myRecipe);
  const currentUser = useSelector((state) => state.currentUser).data;
  const foodStock = useSelector((state) => state.foodStock);

  useEffect(() => {
    dispatch(fetchMyRecipe(currentUser.ID)).catch((error) => error.massage);
    dispatch(fetchFoodStock(currentUser.ID));
  }, [dispatch]);

  useEffect(() => {
    dispatch(
      fetchNotEnoughFood({
        myRecipes: myRecipe.data,
        foodStock: foodStock.data,
        additionalDate: 3,
      })
    );
  }, [myRecipe, foodStock]);

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
          navigation={navigation}
        // myRecipeData={myRecipe.data}
        // isMyRecipe={true}
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
