import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
import RecipeListStyle from "../styles/RecipeListStyle";
import { Button } from "@rneui/themed";
import { useContext } from "react";
import { useRoute } from "@react-navigation/native";
import { addMyRecipe } from "../utils/api";
import { UserContext } from "../context/UserContext";
import { useSelector } from "react-redux";
import { getCurrentDateMyRecipe } from "../utils/function";

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
            <TouchableOpacity onPress={() => onPress(recipe.Recipe)}>
              <ImageBackground
                source={{ uri: recipe.Recipe.Image_key }}
                resizeMode="cover"
                style={styles.image}
                imageStyle={{ borderRadius: 4 }}
              >
                <Text>{recipe.Recipe.Name}</Text>
                {route.name == "MyRecipeEdit" && (
                  <Button
                    title={"編集"}
                    containerStyle={{
                      width: 100,
                      alignItems: "center",
                      right: -120,
                    }}
                    onPress={() => {
                      navigation.navigate("RecipeList", {
                        editRecipeID: recipe.ID,
                        previousScreen: route.name,
                        i: i,
                      });
                    }}
                  />
                )}
                {route.name == "RecipeList" &&
                  previousScreen == "MyRecipeEdit" && (
                    <Button
                      title={"追加"}
                      containerStyle={{
                        width: 100,
                        alignItems: "center",
                        right: -120,
                      }}
                      onPress={() =>
                        addMyRecipe(
                          currentUser.userId,
                          recipe.Recipe.ID,
                          index,
                          currentDate,
                          navigation
                        )
                      }
                    />
                  )}
              </ImageBackground>
            </TouchableOpacity>
          ) : route.name == "MyRecipeEdit" ? (
            <TouchableOpacity
              style={styles.foodBlock}
              onPress={() => onPress(null)}
            >
              <Button
                title={"+"}
                containerStyle={{
                  width: 100,
                  alignItems: "center",
                  right: -120,
                }}
                onPress={() => {
                  navigation.navigate("RecipeList", {
                    editRecipeID: null,
                    previousScreen: route.name,
                    i: i,
                  });
                }}
              />
            </TouchableOpacity>
          ) : (
            <View style={styles.foodBlock}></View>
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
