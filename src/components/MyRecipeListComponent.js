import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
import { Icon } from "@rneui/themed";
import { useRoute } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { getCurrentDateMyRecipe } from "../utils/function";
import { MiniButton } from "./atoms/MiniButton";
import MyRecipeListStyle from "../styles/MyRecipeListStyle";

const MyRecipeListComponent = (props) => {
  const { onPress, navigation } = props;
  const styles = MyRecipeListStyle();
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
      if (myRecipe.length == 0 && route.name != "MyRecipeEdit") {
        return (
          <View
            style={{
              width: "90%",
              marginLeft: "auto",
              marginRight: "auto",
              alignItems: "center",
            }}
          >
            <Icon
              name="description"
              type="material"
              color="#999"
              size={70}
              style={{ marginTop: 80 }}
            />
            <Text
              style={{
                fontSize: 20,
                marginTop: 15,
                color: "#999",
                fontWeight: "bold",
              }}
            >
              レシピがありません。
            </Text>
            <Text
              style={{
                fontSize: 16,
                marginTop: 30,
                color: "#999",
              }}
            >
              「レシピ編集」または「自動作成」から
            </Text>
            <Text
              style={{
                fontSize: 16,
                marginTop: 8,
                color: "#999",
              }}
            >
              マイレシピを作成しましょう！
            </Text>
          </View>
        );
      } else {
        const items = [];
        for (let i = 0; i < 6; i++) {
          let recipe = myRecipe.find((data) => data.Index == i);
          let item = (
            <View style={styles.foodBlock}>
              {recipe != undefined ? (
                <TouchableOpacity
                  style={{
                    width: "100%",
                    height: "100%",
                    alignItems: "center",
                    paddingBottom: "4%",
                    backgroundColor: "#fff",
                    borderRadius: 10,
                  }}
                  onPress={() => onPress(recipe.Recipe)}
                >
                  <ImageBackground
                    source={{ uri: recipe.Recipe.Image_key }}
                    resizeMode="cover"
                    style={styles.image}
                    imageStyle={{
                      borderTopLeftRadius: 9,
                      borderTopRightRadius: 9,
                    }}
                  >
                    {route.name == "MyRecipeEdit" && (
                      <View
                        style={{
                          width: "100%",
                          height: "100%",
                          flexDirection: "row",
                          justifyContent: "center",
                          alignItems: "flex-end",
                          position: "absolute",
                          bottom: 20,
                        }}
                      >
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
                        <MiniButton
                          title={"削除"}
                          onPress={() => {
                            navigation.navigate("RecipeList", {
                              editRecipeID: recipe.ID,
                              previousScreen: route.name,
                              i: i,
                            });
                          }}
                          color="#888"
                        />
                      </View>
                    )}
                  </ImageBackground>
                  <View style={styles.recipeNameTextContainer}>
                    <Text style={styles.recipeNameText}>
                      {recipe.Recipe.Name}
                    </Text>
                  </View>
                </TouchableOpacity>
              ) : route.name == "MyRecipeEdit" ? (
                <View style={styles.emptyBlock}>
                  <Icon
                    raised
                    name="add"
                    type="material"
                    color="#F32A00"
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
      }
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
