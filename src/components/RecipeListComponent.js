import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Alert,
} from "react-native";
import RecipeListStyle from "../styles/RecipeListStyle";
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
import { getCurrentDateMyRecipe } from "../utils/function";

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
    dispatch(resetIsApiConnected());
  }

  if (myRecipe.error !== undefined) {
    Alert.alert(myRecipe.error);
    dispatch(resetError());
  }

  //選択日のレシピデータ
  const CurrentDateMyRecipe = getCurrentDateMyRecipe(
    myRecipe.data,
    currentDate
  );

  const onPressAdd = async (addData) => {
    dispatch(addMyRecipeIntoDB(addData));
    navigation.goBack();
  };

  const onPressUpdate = async (updateData) => {
    dispatch(updateMyRecipeIntoDB(updateData));
    navigation.goBack();
  };

  //レシピの重複チェック
  const isDuplicationRecipe = (recipe) => {
    let isDuplication = false;
    CurrentDateMyRecipe.map((myRec) => {
      if (myRec.Recipe.ID == recipe.ID) {
        isDuplication = true;
        Alert.alert("", "この品はすでに追加されています。", [
          {
            text: "確認",
          },
        ]);
      }
    });
    return isDuplication;
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
        <ImageBackground
          source={{ uri: recipe.Image_key }}
          resizeMode="cover"
          style={styles.image}
          imageStyle={{ borderTopLeftRadius: 10, borderTopRightRadius: 10 }}
        >
          {route.name == "RecipeList" && previousScreen == "MyRecipeEdit" && (
            <FillButton
              title={"マイレシピに追加"}
              onPress={() => {
                const isDuplication = isDuplicationRecipe(recipe);
                if (!isDuplication) {
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
                }
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
        <View style={styles.recipeNameTextContainer}>
          <Text style={styles.recipeNameText}>{recipe.Name}</Text>
        </View>
      </TouchableOpacity>
    );
  });

  return <View style={styles.blocks}>{recipeView}</View>;
};

export default RecipeListComponent;
