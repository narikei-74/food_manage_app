import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
import RecipeListStyle from "../styles/RecipeListStyle";
import { Button } from "@rneui/themed";
import { useContext } from "react";
import { useRoute } from "@react-navigation/native";
import { addMyRecipe, updateMyRecipe } from "../utils/api";
import { UserContext } from "../context/UserContext";
import { useSelector } from "react-redux";

const RecipeListComponent = (props) => {
  const { onPress, recipeData, editRecipeID, navigation, index } = props;
  const styles = RecipeListStyle();
  const { currentUser } = useContext(UserContext);
  const route = useRoute();

  const currentDate = useSelector((state) => state.currentDate).currentDate;

  const previousScreen =
    route.params != undefined && "previousScreen" in route.params
      ? route.params.previousScreen
      : "";

  const recipeView = recipeData?.map((recipe, i) => {
    return (
      <TouchableOpacity
        style={styles.foodBlock}
        onPress={() => onPress(recipe)}
      >
        <ImageBackground
          source={{ uri: recipe.Image_key }}
          resizeMode="cover"
          style={styles.image}
          imageStyle={{ borderRadius: 4 }}
        >
          <Text>{recipe.Name}</Text>
          {route.name == "MyRecipeEdit" && (
            <Button
              title={"編集"}
              containerStyle={{ width: 100, alignItems: "center", right: -120 }}
              onPress={() => {
                navigation.navigate("RecipeList", {
                  editRecipeID: recipe.ID,
                  previousScreen: route.name,
                  i: i,
                });
              }}
            />
          )}
          {route.name == "RecipeList" && previousScreen == "MyRecipeEdit" && (
            <Button
              title={"追加"}
              containerStyle={{ width: 100, alignItems: "center", right: -120 }}
              onPress={() => {
                editRecipeID
                  ? updateMyRecipe(
                      editRecipeID,
                      currentUser.userId,
                      recipe.ID,
                      index,
                      currentDate,
                      navigation
                    )
                  : addMyRecipe(
                      currentUser.userId,
                      recipe.ID,
                      index,
                      currentDate,
                      navigation
                    );
              }}
            />
          )}
        </ImageBackground>
      </TouchableOpacity>
    );
  });

  return (
    <View style={styles.blocks}>
      {recipeView}
      {route.name == "MyRecipeEdit" && myRecipe.length < 6 && (
        <TouchableOpacity
          style={styles.foodBlock}
          onPress={() => onPress(null)}
        >
          <Button
            title={"+"}
            containerStyle={{ width: 100, alignItems: "center", right: -120 }}
            onPress={() => {
              navigation.navigate("RecipeList", {
                editRecipeID: null,
                previousScreen: route.name,
              });
            }}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default RecipeListComponent;
