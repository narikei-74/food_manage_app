import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
import RecipeListStyle from "../styles/RecipeListStyle";
import { Icon } from '@rneui/themed';
import { useContext } from "react";
import { useRoute } from "@react-navigation/native";
import { addMyRecipe } from "../utils/api";
import { UserContext } from "../context/UserContext";
import { useSelector } from "react-redux";
import { getCurrentDateMyRecipe } from "../utils/function";
import { MiniButton } from "./atoms/MiniButton";

const MyRecipeListComponent = (props) => {
  const { onPress, myRecipeData, navigation, index } = props;
  const styles = RecipeListStyle();

  const { currentUser } = useContext(UserContext);
  const route = useRoute();

  const currentDate = useSelector((state) => state.currentDate).currentDate;
  const myRecipe = getCurrentDateMyRecipe(myRecipeData, currentDate);

  const previousScreen =
    route.params != undefined && "previousScreen" in route.params
      ? route.params.previousScreen
      : "";

  const recipeView = () => {
    const items = [];
    for (let i = 0; i < 6; i++) {
      let recipe = myRecipe.find((data) => data.Index == i);
      let item = (
        <View style={styles.foodBlock}>
          {recipe != undefined ? (
            <TouchableOpacity style={{ width: "100%", height: "100%", alignItems: "center", paddingBottom: "4%" }} onPress={() => onPress(recipe.Recipe)}>
              <Text style={styles.recipeNameText}>{recipe.Recipe.Name}</Text>
              <ImageBackground
                source={{ uri: recipe.Recipe.Image_key }}
                resizeMode="cover"
                style={styles.image}
                imageStyle={{ borderRadius: 4 }}
              >
                {route.name == "MyRecipeEdit" && (
                  <MiniButton
                    title={"編集"}
                    onPress={() => {
                      navigation.navigate("RecipeList", {
                        editRecipeID: recipe.ID,
                        previousScreen: route.name,
                        i: i,
                      });
                    }}
                  />
                )}
              </ImageBackground>
            </TouchableOpacity>
          ) : route.name == "MyRecipeEdit" ? (
            <View style={styles.emptyBlock}>
              <Icon
                raised
                name='add'
                type='material'
                color='#F32A00'
                onPress={() => {
                  navigation.navigate("RecipeList", {
                    editRecipeID: null,
                    previousScreen: route.name,
                    i: i,
                  });
                }} />
            </View>
          ) : (
            <View style={styles.emptyBlock}>
            </View>
          )}
        </View>
      );
      items.push(item);
    }
    return items;
  };

  return <View style={styles.blocks}>{recipeView()}</View>;
};

export default MyRecipeListComponent;
