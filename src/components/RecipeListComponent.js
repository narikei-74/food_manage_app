import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Alert,
  FlatList,
} from "react-native";
import RecipeListStyle from "../styles/RecipeListStyle";
import { useRoute } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { FillButton } from "./atoms/FillButton";
import {
  addMyRecipeIntoDB,
  updateMyRecipeIntoDB,
} from "../redux/MyRecipeSlice";
import { getCurrentDateMyRecipe } from "../utils/function";
import { fetchRecipe } from "../redux/RecipeSlice";

const RecipeListComponent = (props) => {
  const { onPress, recipeData, editRecipeID, navigation, index } = props;
  const styles = RecipeListStyle();
  const route = useRoute();

  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.currentUser).data;
  const currentDate = useSelector((state) => state.currentDate).currentDate;
  const myRecipe = useSelector((state) => state.myRecipe);

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
  return (
    <FlatList
      data={recipeData}
      numColumns={2}
      onEndReached={() => {
        dispatch(fetchRecipe(recipeData.length - 1));
      }}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={styles.foodBlock}
          onPress={() => onPress(item)}
        >
          <ImageBackground
            source={{ uri: item.Image_key }}
            resizeMode="cover"
            style={styles.image}
            imageStyle={{ borderTopLeftRadius: 10, borderTopRightRadius: 10 }}
          >
            {route.name == "RecipeList" && previousScreen == "MyRecipeEdit" && (
              <FillButton
                title={"マイレシピに追加"}
                onPress={() => {
                  const isDuplication = isDuplicationRecipe(item);
                  if (!isDuplication) {
                    editRecipeID
                      ? onPressUpdate({
                          ID: editRecipeID,
                          UserID: currentUser.ID,
                          RecipeID: item.ID,
                          Index: index,
                          Date: currentDate,
                        })
                      : onPressAdd({
                          UserID: currentUser.ID,
                          RecipeID: item.ID,
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
            <Text style={styles.recipeNameText}>{item.Name}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default RecipeListComponent;
