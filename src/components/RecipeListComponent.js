import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Alert,
} from "react-native";
import RecipeListStyle from "../styles/RecipeListStyle";
import { Button } from "@rneui/themed";
import { useRoute } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { FillButton } from "./atoms/FillButton";
import {
  addMyRecipeIntoDB,
  fetchMyRecipe,
  updateMyRecipeIntoDB,
  resetIsApiConnected,
  resetError,
} from "../redux/MyRecipeSlice";

const RecipeListComponent = (props) => {
  const { onPress, recipeData, editRecipeID, navigation, index } = props;
  const styles = RecipeListStyle();
  const route = useRoute();

  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.currentUser).data;
  const currentDate = useSelector((state) => state.currentDate).currentDate;
  const myRecipe = useSelector((state) => state.myRecipe);

  if (myRecipe.isApiConnected === true) {
    dispatch(fetchMyRecipe(currentUser.ID)).catch((error) => error.massage);
    navigation.goBack();
    dispatch(resetIsApiConnected());
  }

  if (myRecipe.error !== undefined) {
    Alert.alert(myRecipe.error);
    dispatch(resetError());
  }

  const onPressAdd = async (addData) => {
    dispatch(addMyRecipeIntoDB(addData));
  };

  const onPressUpdate = async (updateData) => {
    dispatch(updateMyRecipeIntoDB(updateData));
  };

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
        <Text style={styles.recipeNameText}>{recipe.Name}</Text>
        <ImageBackground
          source={{ uri: recipe.Image_key }}
          resizeMode="cover"
          style={styles.image}
          imageStyle={{ borderRadius: 4 }}
        >
          {route.name == "RecipeList" && previousScreen == "MyRecipeEdit" && (
            <FillButton
              title={"マイレシピに追加"}
              onPress={() => {
                editRecipeID
                  ? onPressUpdate({
                      ID: editRecipeID,
                      UserID: currentUser.ID,
                      RecipeID: recipe.ID,
                      Index: index,
                      Date: currentDate,
                    })
                  : onPressAdd({
                      UserID: currentUser.ID,
                      RecipeID: recipe.ID,
                      Index: index,
                      Date: currentDate,
                    });
              }}
              containerStyle={{
                position: "absolute",
                justifyContent: "center",
                left: 0,
                right: 0,
                alignItems: "center",
                bottom: 20,
              }}
              fontSize={14}
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
