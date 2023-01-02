import { useRoute } from "@react-navigation/native";
import { Icon } from "@rneui/base";
import { ListItem } from "@rneui/themed";
import { ImageBackground, ScrollView, StyleSheet } from "react-native";
import { View, Text, Image } from "react-native";
import { awsInfo } from "../config/Info";

const RecipeDetailScreen = () => {
  const route = useRoute();
  const { recipe } = route.params;
  const toJson = (recipe) => {
    try {
      return JSON.parse(recipe.How_to_cook);
    } catch {
      return [recipe.How_to_cook];
    }
  };
  const json = toJson(recipe);

  //主菜　副菜アイコンの情報
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
      returnObject = { str: "主菜", color: "#F06A47" };
    }
    return returnObject;
  };


  return (
    <ScrollView style={styles.scrollContainer}>
      <View style={styles.contents}>
        <View style={styles.center}>
          <Text style={styles.nameText}>{recipe.Name}</Text>
        </View>
        <View style={styles.imageContainer}>
          <View style={styles.w100}>
            <ImageBackground
              style={styles.imageInner}
              source={{ uri: awsInfo.imageUrl + recipe.Image_key }}
            />
            <View
              style={{
                position: "absolute",
                top: 10,
                left: 10,
                width: 50,
                height: 30,
                backgroundColor: dishCategoryInfo(
                  recipe.Dish_category
                ).color,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 15,
              }}
            >
              <Text style={styles.textBoldFFF}>
                {dishCategoryInfo(recipe.Dish_category).str}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.cookInfoContainer}>
          <View style={styles.timerContainer}>
            <Icon name="timer" type="material" color="#F06A47" size={28} />
            <Text style={styles.timeText}>
              &nbsp;{recipe.Cooking_time}分
            </Text>
          </View>
          <View style={styles.tagContainer}>
            {recipe.Recipe_categories.length != 0 && recipe.Recipe_categories.map((tag, i) => {
              return (
                <View key={i} style={{ backgroundColor: dishCategoryInfo(recipe.Dish_category).color, borderWidth: 1, borderRadius: 10, borderColor: "#fff", margin: 5 }}>
                  <Text style={styles.tagText}>{tag.Category_name}</Text>
                </View>
              )
            })
            }
          </View>
        </View>
        <View style={styles.cookInfoContainer}>
          <Text style={styles.materialTitle}>材料(1人分)</Text>
          <View style={styles.materialContainer}>
            {recipe.Recipe_materials.map((material, i) => {
              return (
                <View key={i} style={styles.materialTextContainer}>
                  <Text style={styles.textLeft}>
                    <Text style={styles.unitText}>{material.Unit ? material.Unit : " "}</Text>
                    {material.Food.Name}
                  </Text>
                  <Text style={styles.textRight}>
                    ・・・{material.Quantity_label}
                  </Text>
                </View>
              );
            })}
          </View>
        </View>
        <View style={styles.cookTextContainer}>
          <Text style={styles.materialTitle}>作り方</Text>
          <View style={{ justifyContent: "flex-start" }}>
            {json.map((text, index) => {
              return (
                <View key={index} style={styles.howToContainer}>
                  <Text style={styles.howToNum}>
                    {index + 1}.{" "}
                  </Text>
                  <Text style={styles.howToText}>{text}</Text>
                </View>
              );
            })}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  // container: {
  //   flexGrow: 1,
  //   backgroundColor: "#fff",
  // },
  scrollContainer: {
    flexGrow: 1,
    fontSize: 20,
    paddingTop: 5,
    paddingBottom: 30,
    backgroundColor: "#fff",
  },
  contents: {
  },
  center: {
    alignItems: "center"
  },
  w100: {
    width: "100%"
  },
  textBoldFFF: {
    fontWeight: "bold",
    color: "#fff"
  },
  imageContainer: {
    width: "90%",
    height: 350,
    alignItems: "center",
    marginRight: "5%",
    marginLeft: "5%",
    marginBottom: 0,
  },
  imageInner: {
    width: "100%",
    height: "100%",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
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
    fontSize: 16,
  },
  cookInfoContainer: {
    marginTop: 10,
    alignItems: "center",
  },
  tagContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",
    justifyContent: "center"
  },
  tagText: {
    padding: 2,
    margin: 3,
    color: "#fff",
    fontWeight: "bold"
  },
  materialTitle: {
    fontSize: 18,
    fontWeight: "bold",
    margin: 10,
  },
  materialContainer: {
    width: "80%",
    backgroundColor: "#fff",
    borderRadius: 10,
  },
  materialTextContainer: {
    height: 35,
    padding: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
  },
  unitText: { color: "#C66600" },
  cookTextContainer: {
    width: "85%",
    alignItems: "center",
    height: "100%",
    margin: 20,
    paddingBottom: 50,
  },
  textLeft: {},
  textRight: {},
  howToContainer: {
    flexDirection: "row",
    // justifyContent: "center",
    margin: 8,
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  howToNum: {
    fontSize: 18,
  },
  howToText: {},
});

export default RecipeDetailScreen;
