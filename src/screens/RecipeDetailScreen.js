import { useRoute } from "@react-navigation/native";
import { Icon } from "@rneui/base";
import { ListItem } from "@rneui/themed";
import { ScrollView, StyleSheet } from "react-native";
import { View, Text, Image } from "react-native";

const RecipeDetailScreen = () => {
  const route = useRoute();
  const { recipe } = route.params;
  const toJson = (recipe) => {
    try {
      return JSON.parse(recipe.How_to_cook)
    } catch {
      return [recipe.How_to_cook];
    };
  }
  const json = toJson(recipe);

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
          <View style={styles.materialContainer}>
            {recipe.Recipe_materials.map((material, i) => {
              return (
                <View key={i} style={styles.materialTextContainer}>
                  <Text style={styles.textLeft}>
                    {material.Unit ? material.Unit : "　"}
                    {material.Food.Name}
                  </Text>
                  <Text style={styles.textRight}>・・・{material.Quantity_label}</Text>
                </View>
              )
            })}
          </View>
        </View>
        <View style={styles.cookTextContainer}>
          <Text style={styles.materialTitle}>作り方</Text>
          <View style={{ justifyContent: "flex-start" }}>
            {json.map((text, index) => {
              return (
                <View style={styles.howToContainer}>
                  <Text key={index} style={styles.howToNum}>{index + 1}. </Text>
                  <Text style={styles.howToText}>{text}</Text>
                </View>
              )
            })}
          </View>
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
    fontSize: 20,
    marginTop: 30,
  },
  contents: {
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
    margin: 20,
  },
  timerContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  timeText: {
    merginLeft: 5,
    fontSize: 16
  },
  cookInfoContainer: {
    marginTop: 100,
    alignItems: "center"
  },
  materialTitle: {
    fontSize: 18,
    fontWeight: "bold",
    margin: 10
  },
  materialContainer: {
    width: "80%",
    backgroundColor: "#fff",
    borderRadius: 10
  },
  materialTextContainer:
  {
    height: 35,
    padding: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
  },
  cookTextContainer: {
    width: "85%",
    alignItems: "center",
    height: "100%",
    margin: 20,
  },
  textLeft: {
  },
  textRight: {
  },
  howToContainer: {
    flexDirection: "row",
    // justifyContent: "center",
    margin: 8,
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc"
  },
  howToNum: {
    fontSize: 18
  }
  ,
  howToText: {

  }
})

export default RecipeDetailScreen;
