// コアコンポーネント
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from "react-native";
// スタイル
import RecipeListStyle from "../styles/RecipeListStyle";
// サービス
import FindCurrentWeekRecipeService from "../services/FindCurrentWeekRecipeService";

const RecipeListComponent = ({
  onPress,
  myRecipeData,
  currentWeek,
  isMyRecipe,
}) => {
  const styles = RecipeListStyle();

  const myRecipe =
    isMyRecipe === true
      ? FindCurrentWeekRecipeService(myRecipeData, currentWeek)
      : myRecipeData;

  const recipeView = myRecipe?.map((recipe) => {
    return (
      <TouchableOpacity style={styles.foodBlock} onPress={onPress}>
        <ImageBackground
          source={recipe.img}
          resizeMode="cover"
          style={styles.image}
          imageStyle={{ borderRadius: 4 }}
        >
          <Text>{recipe.name}</Text>
        </ImageBackground>
      </TouchableOpacity>
    );
  });

  return <View style={styles.blocks}>{recipeView}</View>;
};

export default RecipeListComponent;
