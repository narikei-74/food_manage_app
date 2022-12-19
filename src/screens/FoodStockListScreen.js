import { ListItem } from "@rneui/themed";
import { ScrollView, View, Text } from "react-native";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFoodStock } from "../redux/FoodStockSlice";
import { Icon } from "@rneui/base";
import FoodStockEditButtonComponent from "../components/FoodStockEditButtonComponent";
import BaseStyle from "../styles/BaseStyle";

const FoodStockListScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.currentUser);
  const foodStock = useSelector((state) => state.foodStock);
  const foodStockList = foodStock.data;
  const styles = BaseStyle();

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
      if (foodStockList.length == 0) {
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
              name="kitchen"
              type="material"
              color="#999"
              size={80}
              style={{ marginTop: 120 }}
            />
            <Text
              style={{
                fontSize: 20,
                marginTop: 15,
                color: "#999",
                fontWeight: "bold",
              }}
            >
              食材がありません。
            </Text>
            <Text
              style={{
                fontSize: 16,
                marginTop: 30,
                color: "#999",
              }}
            >
              余っている食材を登録しましょう！
            </Text>
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
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView>{foodStockListView()}</ScrollView>
      <FoodStockEditButtonComponent navigation={navigation} />
    </View>
  );
};

export default FoodStockListScreen;
