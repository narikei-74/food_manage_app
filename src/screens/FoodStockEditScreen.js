import { ListItem } from "@rneui/themed";
import { ScrollView, View, Text } from "react-native";
import { Icon } from "@rneui/base";
import { useSelector } from "react-redux";
import BaseStyle from "../styles/BaseStyle";
import FoodStockAddFormComponent from "../components/FoodStockAddFormComponent";

const FoodStockEditScreen = ({ navigation }) => {
  const foodStock = useSelector((state) => state.foodStock);
  const foodStockList = foodStock.data;
  const styles = BaseStyle();

  const foodStockListView = () => {
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
            style={{ marginTop: 100 }}
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
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.wrapper}>
        <View style={styles.subTitleContainer}>
          <Text style={styles.subTitle}>食材追加</Text>
        </View>
        <FoodStockAddFormComponent navigation={navigation} />
        <View style={styles.subTitleContainer}>
          <Text style={styles.subTitle}>残り食材</Text>
        </View>
        {foodStockListView()}
      </ScrollView>
    </View>
  );
};

export default FoodStockEditScreen;
