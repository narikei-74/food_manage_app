import { ListItem } from "@rneui/themed";
import { View, Text, FlatList, ScrollView } from "react-native";

const FoodStockListScreen = () => {
  const foodStockList = [{
    name: "玉ねぎ",
    stock: "2個"
  },
  {
    name: "卵",
    stock: "3個"
  }]
  return (
    <ScrollView>
      {foodStockList.map((food, i) => (
        <ListItem
          key={i}
          bottomDivider
        >
          <ListItem.Content>
            <ListItem.Title right>
              {food.name}
            </ListItem.Title>
          </ListItem.Content>
          <ListItem.Content right>
            <ListItem.Title right>
              {food.stock}
            </ListItem.Title>
          </ListItem.Content>

        </ListItem>
      )
      )}
    </ScrollView>
  );
};

export default FoodStockListScreen;
