import { useRoute } from "@react-navigation/native";
import { Icon } from "@rneui/base";
import { ListItem } from "@rneui/themed";
import { ScrollView, StyleSheet } from "react-native";
import { View, Text, Image } from "react-native";

const RecipeDetailScreen = () => {
  const route = useRoute();
  const { recipe } = route.params;
  return (
    <ScrollView style={styles.scrollContainer}>
      <View style={styles.contents}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.imageInner}
            source={{ uri: recipe.Image_key }} />
          <Text style={styles.nameText}>{recipe.Name}</Text>
          <View style={styles.timerContainer}>
            <Icon name="timer" type="material" color="#F06A47" size={28} />
            <Text style={styles.timeText}>&nbsp;およそ{recipe.Cooking_time}分</Text>
          </View>
        </View>
        <View style={styles.cookInfoContainer}>

          <Text style={styles.materialTitle}>
            材料
          </Text>
          {recipe.Recipe_materials.map((material, i) => {
            return (
              <ListItem key={i} bottomDivider>
                <ListItem.Content>
                  <ListItem.Title right>{material.Food.Name}</ListItem.Title>
                </ListItem.Content>
              </ListItem>
            )
          })}

        </View>
        <View style={styles.cookTextContainer}>
          <Text>
            {recipe.How_to_cook}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1
  },
  scrollContainer: {
    flexGrow: 1,
    // alignItems: 'center',
    fontSize: 20,
    marginTop: 30,
  },
  contents: {
    // height: "100%",
  },
  imageContainer: {
    width: "90%",
    height: 350,
    alignItems: "center",
    marginRight: "5%",
    marginLeft: "5%",
    marginBottom: 0
  },
  imageInner: {
    width: "100%",
    height: "100%",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10
  },
  nameText: {
    fontWeight: "bold",
    fontSize: 18,
    marginTop: 5,
  },
  timerContainer: {
    flexDirection: "row",
    alignItems: "center"
  },
  timeText: {
    merginLeft: 5,
    fontSize: 16
  },
  cookInfoContainer: {
    marginTop: 50,
    // height: 500
  },
  materialTitle: {
    fontSize: 16
  },
  cookTextContainer: {
    height: "100%"
  }
})

export default RecipeDetailScreen;
