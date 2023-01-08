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
  startMyRecipeLoader,
  updateMyRecipeIntoDB,
} from "../redux/MyRecipeSlice";
import { getCurrentDateMyRecipe } from "../utils/function";
import {
  editOffset,
  fetchAddRecipe,
  startRecipeLoader,
} from "../redux/RecipeSlice";
import { awsInfo } from "../config/Info";

const RecipeListComponent = (props) => {
  const { onPress, recipes, editRecipeID, navigation, index } = props;
  const styles = RecipeListStyle();
  const route = useRoute();
  const recipeData = recipes.data;

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
    dispatch(startMyRecipeLoader());
    dispatch(addMyRecipeIntoDB(addData));
    navigation.goBack();
  };

  const onPressUpdate = async (updateData) => {
    dispatch(startMyRecipeLoader());
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

  const dishCategoryInfo = (dishCategory) => {
    let returnObject = {};
    if (dishCategory == 1) {
      returnObject = { str: "主食", color: "#E9D0A6" };
    } else if (dishCategory == 2) {
      returnObject = { str: "主菜", color: "#F06A47" };
    } else if (dishCategory == 3) {
      returnObject = { str: "副菜", color: "#6EC388" };
    } else if (dishCategory == 4) {
      returnObject = { str: "汁物", color: "#C66600" };
    } else {
      returnObject = { str: "", color: "#C66600" };
    }
    return returnObject;
  };

  const previousScreen =
    route.params != undefined && "previousScreen" in route.params
      ? route.params.previousScreen
      : "";
  return (
    <FlatList
      style={styles.blocks}
      data={recipeData}
      numColumns={2}
      onEndReached={() => {
        if (recipes.currentOffset + 20 == recipeData.length) {
          dispatch(startRecipeLoader());
          dispatch(
            fetchAddRecipe({
              offset: recipeData.length - 1,
              searchInfo: recipes.search,
            })
          );
          dispatch(editOffset(recipes.currentOffset + 20));
        }
      }}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={styles.foodBlock}
          onPress={() => onPress(item)}
        >
          <ImageBackground
            source={{ uri: awsInfo.imageUrl + item.Image_key }}
            resizeMode="cover"
            style={styles.image}
            imageStyle={{ borderTopLeftRadius: 10, borderTopRightRadius: 10 }}
          >
            <View
              style={{
                margin: 5,
                width: 50,
                height: 30,
                backgroundColor: dishCategoryInfo(item.Dish_category).color,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 15,
              }}
            >
              <Text style={{ fontWeight: "bold", color: "#fff" }}>
                {dishCategoryInfo(item.Dish_category).str}
              </Text>
            </View>
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
                          People_num: route.params.peopleNum,
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
