import { Button, CheckBox } from "@rneui/base";
import { useEffect, useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import { addSettings, fetchSettings, resetSettingsIsApiConnected } from "../redux/AutoCreateRecipeSettingsSlice";
import BaseStyle from "../styles/BaseStyle";

const CreateRecipeScreen = ({ navigation }) => {
  const baseStyles = BaseStyle();
  const [foods, setFoods] = useState([]);
  const [foodNames, setFoodNames] = useState([]);
  const [isRiceOnly, setIsRiceOnly] = useState(false);
  const [isFishOnly, setIsFishOnly] = useState(false);
  const [isMeatOnly, setIsMeatOnly] = useState(false);
  const [isGram, setIsGram] = useState();

  const dispatch = useDispatch();
  const autoCreateRecipeSettings = useSelector(
    (state) => state.autoCreateRecipeSettings
  );
  const currentUser = useSelector((state) => state.currentUser);

  if (autoCreateRecipeSettings.isApiConnected) {
    dispatch(fetchSettings(currentUser.data.ID));
    dispatch(resetSettingsIsApiConnected())
  }

  useEffect(() => {
    dispatch(fetchSettings(currentUser.data.ID));
  }, [dispatch])

  useEffect(() => {
    const currentFoods = [];
    const currentFoodNames = [];
    autoCreateRecipeSettings.data.Hate_foods.forEach((food) => {
      currentFoods.push(food.ID);
      currentFoodNames.push(food.Name);
    });
    setFoods(currentFoods);
    setFoodNames(currentFoodNames);
    setIsRiceOnly(autoCreateRecipeSettings.data.Is_only_rice == 1 ? true : false);
    setIsMeatOnly(autoCreateRecipeSettings.data.Is_only_meat == 1 ? true : false);
    setIsFishOnly(autoCreateRecipeSettings.data.Is_only_fish == 1 ? true : false);
  }, [autoCreateRecipeSettings]);

  const addFood = (foodID) => {
    setFoods([...foods, foodID]);
  };

  const addFoodName = (foodName) => {
    setFoodNames([...foodNames, foodName]);
  };

  const deleteHateFood = (index) => {
    foods.splice(index, 1);
    foodNames.splice(index, 1);

    setFoods([...foods]);
    setFoodNames([...foodNames]);
  }

  const startAutoCreateRecipe = () => {
    const hateFoods = [];
    foods.forEach((food, index) => {
      hateFoods.push({ID: food, Name: foodNames[index]});
    })
    const data = {
      UserID: currentUser.data.ID,
      Hate_foods: JSON.stringify({data: hateFoods}),
      Is_only_rice: isRiceOnly == undefined ? 0 : (isRiceOnly == true ? 1 : 0),
      Is_only_meat: isMeatOnly == undefined ? 0 : (isMeatOnly == true ? 1 : 0),
      Is_only_fish: isFishOnly == undefined ? 0 : (isFishOnly == true ? 1 : 0)
    }

    dispatch(addSettings(data));
  }

  return (
    <View style={styles.container}>
      <View style={baseStyles.wrapper}>
        <View style={baseStyles.subTitleContainer}>
          <Text style={baseStyles.subTitle}>作成条件を設定</Text>
        </View>
        <Text style={baseStyles.comment}>※条件設定は任意です。</Text>
        <View style={styles.hateFoodContaier}>
          <Text style={styles.title}>・アレルギー・嫌いな食材</Text>
          <Button
            buttonStyle={styles.addFoodBtn}
            titleStyle={styles.addFoodBtnTitle}
            title="食材を追加"
            onPress={() => {
              navigation.navigate("FoodSelect", {
                setFoodID: addFood,
                setFoodName: addFoodName,
                setIsGram: setIsGram,
              });
            }}
          />
          <FlatList
            style={styles.hateFoodList}
            data={foodNames}
            renderItem={({ item, index }) => (
              <View style={styles.hateFoodBlock}>
                <Text style={styles.hateFoodText}>{item}</Text>
                <Button
                  buttonStyle={styles.hateFoodDeleteBtn}
                  titleStyle={styles.hateFoodDeleteBtnTitle}
                  title="削除"
                  onPress={() => {deleteHateFood(index)}}
                />
              </View>
            )}
          />
        </View>
        <View style={styles.createRoleSettingContainer}>
          <Text style={styles.title}>・作成条件</Text>
          <View>
            <CheckBox
              title="主食を全て白米にする"
              textStyle={styles.checkBoxText}
              containerStyle={styles.checkBox}
              onPress={() => setIsRiceOnly(!isRiceOnly)}
              checked={isRiceOnly}
            />
            <CheckBox
              title="主菜を全て肉料理にする"
              textStyle={styles.checkBoxText}
              containerStyle={styles.checkBox}
              onPress={() => setIsMeatOnly(!isMeatOnly)}
              checked={isMeatOnly}
            />
            <CheckBox
              title="主菜を全て魚料理にする"
              textStyle={styles.checkBoxText}
              containerStyle={styles.checkBox}
              onPress={() => setIsFishOnly(!isFishOnly)}
              checked={isFishOnly}
            />
          </View>
        </View>
        <Button title="自動作成開始" onPress={startAutoCreateRecipe} />
      </View>
    </View>
  );
};

export default CreateRecipeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#333",
    marginTop: 30,
    marginBottom: 8,
  },
  hateFoodContaier: {
    marginBottom: 15,
  },
  addFoodBtn: {
    width: 100,
    height: 30,
    borderColor: "#ff4500",
    borderWidth: 1,
    borderRadius: 6,
    padding: 5,
    backgroundColor: "#fff",
    marginLeft: 8,
    marginTop: 10,
    marginBottom: 10,
  },
  addFoodBtnTitle: {
    fontSize: 14,
    color: "#ff4500",
  },
  hateFoodList: {
    width: "100%",
    maxHeight: 300,
  },
  hateFoodBlock: {
    width: "95%",
    marginLeft: "auto",
    marginRight: "auto",
    height: 30,
    borderBottomWidth: 1,
    borderBottomColor: "#555",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    marginBottom: 4,
  },
  hateFoodText: {
    fontSize: 14,
    color: "#555",
    fontWeight: "bold",
  },
  hateFoodDeleteBtn: {
    borderRadius: 4,
    backgroundColor: "red",
    height: 25,
    padding: 0,
  },
  hateFoodDeleteBtnTitle: {
    fontSize: 14,
    color: "#fff",
    fontWeight: "bold",
  },
  createRoleSettingContainer: {
    marginBottom: 50,
  },
  checkBox: {
    margin: 0,
    padding: 0,
    marginTop: 8,
  },
  checkBoxText: {
    color: "#555",
    fontSize: 14,
  },
});
