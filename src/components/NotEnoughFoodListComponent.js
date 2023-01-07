import { View, Text, Linking, Alert } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Icon } from "@rneui/base";
import { NotEnoughFoodListStyle } from "../styles/NotEnoughFoodListStyle";
import { Button } from "@rneui/themed";
import SelectDropdown from "react-native-select-dropdown";
import {
  editAdditionalDate,
  fetchNotEnoughFood,
} from "../redux/NotEnoughFoodSlice";

const NotEnoughFoodListComponent = (props) => {
  const styles = NotEnoughFoodListStyle();
  const { isMarket } = props;

  const dispatch = useDispatch();
  const notEnoughFoods = useSelector((state) => state.notEnoughFood);
  const myRecipe = useSelector((state) => state.myRecipe);
  const foodStock = useSelector((state) => state.foodStock);

  const openAmazonPage = async (url) => {
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert("ページを開けませんでした。");
    }
  };

  const notEnoughFoodsView = () => {
    if (notEnoughFoods.loader === true) {
      return (
        <View>
          <Text>Loading...</Text>
        </View>
      );
    } else {
      if (notEnoughFoods.data.length == 0) {
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
              {isMarket === true ? (
                <Button
                  buttonStyle={styles.button}
                  titleStyle={styles.buttonTitle}
                  onPress={() => openAmazonPage(food.Amazon_url)}
                  title="購入"
                />
              ) : (
                <Text style={styles.quantityUnit}>
                  {food.unit == 1 ? food.gram + "g" : food.quantity + "個"}
                </Text>
              )}
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
      <View style={styles.additionalDateContainer}>
        <SelectDropdown
          buttonStyle={styles.selectButton}
          buttonTextStyle={styles.selectText}
          data={[1, 2, 3, 4, 5, 6, 7]}
          onSelect={(selectedItem, index) => {
            dispatch(editAdditionalDate(selectedItem));
            dispatch(
              fetchNotEnoughFood({
                myRecipes: myRecipe.data,
                foodStock: foodStock.data,
              })
            );
          }}
          buttonTextAfterSelection={(selectedItem, index) => {
            return selectedItem;
          }}
          rowTextForSelection={(item, index) => {
            return item;
          }}
          defaultValue={notEnoughFoods.additionalDate}
          renderDropdownIcon={() => {
            return (
              <Icon
                name="arrow-drop-down"
                type="material"
                color="#555"
                size={26}
                iconStyle={styles.arrowIcon}
                containerStyle={{ width: 20 }}
              />
            );
          }}
        />
        <Text style={styles.selectAfterText}>日後までを表示</Text>
      </View>
      {notEnoughFoodsView()}
    </View>
  );
};

export default NotEnoughFoodListComponent;
