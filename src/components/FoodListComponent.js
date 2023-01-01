import { View, Text, Linking, Alert } from "react-native";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFood } from "../redux/FoodSlice";
import { FoodListStyle } from "../styles/FoodListStyle";
import { Button } from "@rneui/themed";
import { kanaToHira } from "../utils/function";

const FoodListComponent = (props) => {
  const {
    isMarket,
    setFoodName = null,
    setFoodID = null,
    setIsGram = null,
    navigation = null,
    searchInputText = "",
  } = props;
  const styles = FoodListStyle();
  const dispatch = useDispatch();
  const food = useSelector((state) => state.food);
  const [foodList, setFoodList] = useState([]);

  useEffect(() => {
    dispatch(fetchFood());
  }, [dispatch]);

  useEffect(() => {
    setFoodList(food.data);
  }, [food]);

  useEffect(() => {
    if (searchInputText != "") {
      const hiraSearchInputText = kanaToHira(searchInputText);
      setFoodList(
        food.data.filter((food) => {
          return food.Name.includes(hiraSearchInputText)
            ? food.Name.includes(hiraSearchInputText)
            : food.Hiragana_name.includes(hiraSearchInputText);
        })
      );
    } else {
      setFoodList(food.data);
    }
  }, [searchInputText]);

  const openAmazonPage = async (url) => {
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert("ページを開けませんでした。");
    }
  };

  const selectFood = (food) => {
    setFoodID(food.ID);
    setFoodName(food.Name);
    food.Unit == 1 ? setIsGram(true) : setIsGram(false);
    navigation.goBack();
  };

  const foodListView = () => {
    if (food.loader === true) {
      return (
        <View>
          <Text>Loading...</Text>
        </View>
      );
    } else {
      return foodList.map((food, i) => {
        if (!isMarket && food.Spices_flag) {
          return;
        } else {
          return (
            <View style={styles.listItem} key={i} bottomDivider>
              <Text style={styles.foodName}>{food.Name}</Text>
              <Button
                buttonStyle={styles.button}
                titleStyle={styles.buttonTitle}
                onPress={() =>
                  isMarket ? openAmazonPage(food.Amazon_url) : selectFood(food)
                }
                title={isMarket ? "購入" : "選択"}
              />
            </View>
          );
        }
      });
    }
  };

  return <View style={styles.list}>{foodListView()}</View>;
};

export default FoodListComponent;
