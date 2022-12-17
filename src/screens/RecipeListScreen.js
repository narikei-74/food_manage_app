import { ScrollView, View, Text } from "react-native";
import BaseStyle from "../styles/BaseStyle";
import RecipeListComponent from "../components/RecipeListComponent";
import { useDispatch, useSelector } from "react-redux";
import { useRoute } from "@react-navigation/native";
import { useEffect } from "react";
import { fetchRecipe } from "../redux/RecipeSlice";

const RecipeListScreen = ({ navigation }) => {
  const styles = BaseStyle();

  const route = useRoute();
  const editRecipeID =
    route.params != undefined && "editRecipeID" in route.params
      ? route.params.editRecipeID
      : null;
  const index =
    route.params != undefined && "i" in route.params ? route.params.i : null;

  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.recipe);

  useEffect(() => {
    dispatch(fetchRecipe()).catch((error) => error.massage);
  }, [dispatch]);

  const recipeListView = () => {
    if (recipes.loader === true) {
      return (
        <View>
          <Text>Loading...</Text>
        </View>
      );
    } else {
      if (recipes.error === undefined) {
        return (
          <RecipeListComponent
            onPress={(recipe) => {
              navigation.navigate("RecipeDetail", { recipe: recipe });
            }}
            recipeData={recipes.data}
            currentWeek={false}
            isMyRecipe={false}
            editRecipeID={editRecipeID}
            navigation={navigation}
            index={index}
          />
        );
      } else {
        alert(recipes.error);
        return (
          <RecipeListComponent
            onPress={(recipe) => {
              navigation.navigate("RecipeDetail", { recipe: recipe });
            }}
            recipeData={[]}
            currentWeek={false}
            isMyRecipe={false}
            editRecipeID={editRecipeID}
            navigation={navigation}
            index={index}
          />
        );
      }
    }
  };

  return <ScrollView style={styles.container}>{recipeListView()}</ScrollView>;
};

export default RecipeListScreen;
