import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
import RecipeListStyle from "../styles/RecipeListStyle";
import { Icon } from "@rneui/themed";
import { useRoute } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentDateMyRecipe } from "../utils/function";
import { MiniButton } from "./atoms/MiniButton";

const MyRecipeListComponent = (props) => {
  const { onPress, navigation } = props;
  const styles = RecipeListStyle();
  const route = useRoute();

  const myRecipeData = useSelector((state) => state.myRecipe);

  if (myRecipeData.loader == false) {
    const currentDate = useSelector((state) => state.currentDate).currentDate;
    const myRecipe = getCurrentDateMyRecipe(myRecipeData.data, currentDate);
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
              <TouchableOpacity onPress={() => onPress(recipe.Recipe)}>
                <ImageBackground
                  source={{ uri: recipe.Recipe.Image_key }}
                  resizeMode="cover"
                  style={styles.image}
                  imageStyle={{ borderRadius: 4 }}
                >
                  <Text>{recipe.Recipe.Name}</Text>
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
                  name="add"
                  type="material"
                  color="#f50"
                  onPress={() => {
                    navigation.navigate("RecipeList", {
                      editRecipeID: null,
                      previousScreen: route.name,
                      i: i,
                    });
                  }}
                />
              </View>
            ) : (
              <View style={styles.emptyBlock}></View>
            )}
          </View>
        );
        items.push(item);
      }
      return items;
    };

    return <View style={styles.blocks}>{recipeView()}</View>;
  } else {
    return (
      <View style={styles.blocks}>
        <Text>Loading...</Text>
      </View>
    );
  }
};

export default MyRecipeListComponent;
