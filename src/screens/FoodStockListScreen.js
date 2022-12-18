import { ListItem } from "@rneui/themed";
import { ScrollView, View, Text } from "react-native";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFoodStock } from "../redux/FoodStockSlice";

const FoodStockListScreen = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.currentUser);
  const foodStock = useSelector((state) => state.foodStock);
  const foodStockList = foodStock.data;

  useEffect(() => {
    dispatch(fetchFoodStock(currentUser.data.ID));
  }, [dispatch]);

  const foodStockListView = () => {
    if (foodStock.loader === true) {
      return (
        <View>
          <Text>Loading...</Text>
        </View>
      );
    } else {
      return foodStockList.map((foodStock, i) => (
        <ListItem key={i} bottomDivider>
          <ListItem.Content>
            <ListItem.Title right>{foodStock.Food.Name}</ListItem.Title>
          </ListItem.Content>
          <ListItem.Content right>
            <ListItem.Title right>
              {foodStock.Gram
                ? foodStock.Gram + "g"
                : foodStock.Quantity + "個"}
            </ListItem.Title>
          </ListItem.Content>
        </ListItem>
      ));
    }
  };

  return <ScrollView>{foodStockListView()}</ScrollView>;
};

export default FoodStockListScreen;
