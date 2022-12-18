import { ListItem } from "@rneui/themed";
import { ScrollView, View, Text, Linking, Button, Alert } from "react-native";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFood } from "../redux/FoodSlice";

const FoodMarketScreen = () => {
  const dispatch = useDispatch();
  const food = useSelector((state) => state.food);
  const foodList = food.data;

  useEffect(() => {
    dispatch(fetchFood());
  }, [dispatch]);

  const openAmazonPage = async (url) => {
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert("ページを開けませんでした。");
    }
  };

  const foodListView = () => {
    if (food.loader === true) {
      return (
        <View>
          <Text>Loading...</Text>
        </View>
      );
    } else {
      return foodList.map((food, i) => (
        <ListItem key={i} bottomDivider>
          <ListItem.Content>
            <ListItem.Title right>{food.Name}</ListItem.Title>
          </ListItem.Content>
          <ListItem.Content right>
            <Button
              onPress={() => openAmazonPage(food.Amazon_url)}
              title="amazon購入ページへ ＞"
            />
          </ListItem.Content>
        </ListItem>
      ));
    }
  };

  return <ScrollView>{foodListView()}</ScrollView>;
};

export default FoodMarketScreen;
