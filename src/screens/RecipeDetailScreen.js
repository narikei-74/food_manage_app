import { useRoute } from "@react-navigation/native";
import { ScrollView, StyleSheet } from "react-native";
import { View, Text, Image } from "react-native";

const RecipeDetailScreen = () => {
  const route = useRoute();
  const { recipe } = route.params;
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.imageContainer}>
        <Text>{recipe.Name}</Text>
        <Image
          style={styles.imageInner}
          source={{ uri: recipe.Image_key }} />
      </View>
      <View >
        <View>
          <Text>調理時間:{recipe.Cooking_time}分</Text>
          <Text>
            材料
          </Text>
          {recipe.Recipe_materials.map((material) => {
            return (
              <Text>
                {material.Food.Name}
              </Text>
            )
          })}
        </View>
        <Text style={styles.cookTextContainer}>
          {recipe.How_to_cook}
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    fontSize: 20
  },
  imageContainer: {

  },
  imageInner: {
    width: 256,
    height: 256,
  },
  cookTextContainer: {
  }
})

export default RecipeDetailScreen;
