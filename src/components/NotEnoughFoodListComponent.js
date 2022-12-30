import { View, Text } from "react-native";
import { useSelector } from "react-redux";
import { Icon } from "@rneui/base";
import { NotEnoughFoodListStyle } from "../styles/NotEnoughFoodListStyle";

const NotEnoughFoodListComponent = () => {
  const styles = NotEnoughFoodListStyle();

  const notEnoughFoods = useSelector((state) => state.notEnoughFood);

  const notEnoughFoodsView = () => {
    if (notEnoughFoods.loader === true) {
      return (
        <View>
          <Text>Loading...</Text>
        </View>
      );
    } else {
      if (notEnoughFoods.length == 0) {
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
              足りない食材はありません。
            </Text>
          </View>
        );
      } else {
        return notEnoughFoods.data.map((food, i) => {
          if (
            food.gram < 0 ||
            food.quantity < 0 ||
            (food.gram == 0 && food.quantity == 0)
          ) {
            return;
          }

          return (
            <View style={styles.listItem} key={i} bottomDivider>
              <Text style={styles.foodName}>{food.Name}</Text>
              <Text style={styles.quantityUnit}>
                {food.unit == 0 ? food.gram + "g" : food.quantity + "個"}
              </Text>
            </View>
          );
        });
      }
    }
  };

  return (
    <View style={{ marginTop: 15 }}>
      {notEnoughFoods.data.length != 0 && (
        <Text style={styles.warningText}>
          以下の食材が足りていません。食材を購入しましょう。
        </Text>
      )}
      {notEnoughFoodsView()}
    </View>
  );
};

export default NotEnoughFoodListComponent;
