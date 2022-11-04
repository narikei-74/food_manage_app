import { StatusBar } from "expo-status-bar";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useState, useEffect } from "react";
import GetMyRecipeDataService from "../service/GetMyRecipeDataService";

export default function MenuScreen({ navigation }) {
  const [recipeData, setRecipeData] = useState([]);

  useEffect(() => {
    setRecipeData(GetMyRecipeDataService());
  }, []);

  const onPress = () => {
    navigation.navigate("レシピ");
  };

  const recipeView = recipeData.map((recipe) => {
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

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text>
          11月7日<Text style={styles.week}>(月)</Text>　〜　11月13日
          <Text style={styles.week}>(日)</Text>
        </Text>
      </View>
      <View style={styles.bar}></View>
      <View style={styles.blocks}>{recipeView}</View>
      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  blocks: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  header: {
    width: "100%",
    height: 80,
    top: "7%",
    alignItems: "center",
    textAlign: "center",
  },

  week: {
    fontSize: 12,
    fontWeight: "normal",
  },
  bar: {
    backgroundColor: "#eee",
    width: "100%",
    height: 4,
  },

  foodBlock: {
    width: "50%",
    height: 200,
    borderWidth: 2,
    borderColor: "#fff",
    borderRadius: 10,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
