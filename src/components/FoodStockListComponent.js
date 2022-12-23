import {
  View,
  Text,
  TextInput,
  Keyboard,
  InputAccessoryView,
  TouchableOpacity,
} from "react-native";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteFoodStockFromDB,
  fetchFoodStock,
  updateFoodStockIntoDB,
} from "../redux/FoodStockSlice";
import { Button, CheckBox, Icon } from "@rneui/base";
import { FoodStockListStyle } from "../styles/FoodStockListStyle";

const FoodStockListComponent = (props) => {
  const { editFlag, navigation } = props;
  const styles = FoodStockListStyle();

  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.currentUser);
  const foodStock = useSelector((state) => state.foodStock);
  const foodStockList = foodStock.data;
  const [checkedIDs, setCheckedIDs] = useState([]);
  const [foodStockUnits, setFoodStockUnits] = useState({});

  useEffect(() => {
    dispatch(fetchFoodStock(currentUser.data.ID));

    let units = {};
    foodStockList.map((foodStock) => {
      units[foodStock.ID] =
        foodStock.Food.Unit == 0
          ? { unit: `${foodStock.Gram}`, isUpdate: false }
          : { unit: `${foodStock.Quantity}`, isUpdate: false };
    });
    setFoodStockUnits(units);
  }, [dispatch]);

  const checked = (food) => {
    if (checkedIDs.includes(food.ID)) {
      checkedIDs.splice(checkedIDs.indexOf(food.ID), 1);
    } else {
      checkedIDs.push(food.ID);
    }
    setCheckedIDs([...checkedIDs]);
  };

  const changeUnit = (food, unit) => {
    foodStockUnits[food.ID] = { unit: unit, isUpdate: true };
    setFoodStockUnits({ ...foodStockUnits });
  };

  const onPressSave = () => {
    let updates = [];
    foodStockList.map((foodStock) => {
      if (
        foodStockUnits[foodStock.ID].isUpdate === true &&
        foodStockUnits[foodStock.ID].unit !== ""
      ) {
        let newFoodStock = { ID: foodStock.ID };
        if (foodStock.Food.Unit == 0) {
          newFoodStock.Gram = parseInt(foodStockUnits[foodStock.ID].unit);
        } else {
          newFoodStock.Quantity = parseFloat(foodStockUnits[foodStock.ID].unit);
        }
        updates.push(newFoodStock);
      }
    });

    if (updates.length == 0) {
      alert("食材を保存しました。");
    }
    dispatch(updateFoodStockIntoDB(updates));
    navigation.navigate("FoodStockList");
  };

  const onPressDelete = () => {
    if (checkedIDs.length == 0) {
      alert("削除する食材にチェックを入れてください。");
      return;
    }

    dispatch(deleteFoodStockFromDB(checkedIDs));
  };

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
          <View style={styles.listItem} key={i} bottomDivider>
            {editFlag ? (
              <CheckBox
                containerStyle={styles.checkBox}
                textStyle={styles.foodName}
                title={foodStock.Food.Name}
                onPress={() => {
                  checked(foodStock);
                }}
                checked={checkedIDs.includes(foodStock.ID)}
              />
            ) : (
              <Text style={styles.foodName}>{foodStock.Food.Name}</Text>
            )}
            {editFlag ? (
              <View>
                <View style={styles.inputContainer}>
                  <TextInput
                    style={styles.foodQuantityInput}
                    value={foodStockUnits[foodStock.ID]?.unit}
                    onChangeText={(text) => changeUnit(foodStock, text)}
                    inputAccessoryViewID="foodQuantity"
                  />
                  <Text style={styles.quantityUnit}>
                    {foodStock.Gram ? "g" : "個"}
                  </Text>
                </View>
                <InputAccessoryView
                  nativeID="foodQuantity"
                  backgroundColor="#ddd"
                >
                  <View style={{ alignItems: "flex-end" }}>
                    <TouchableOpacity
                      style={styles.keyboardCompBtn}
                      onPress={() => Keyboard.dismiss()}
                    >
                      <Text style={styles.keyboardCompBtnText}>完了</Text>
                    </TouchableOpacity>
                  </View>
                </InputAccessoryView>
              </View>
            ) : (
              <Text style={styles.quantityUnit}>
                {foodStock.Gram
                  ? foodStock.Gram + "g"
                  : foodStock.Quantity + "個"}
              </Text>
            )}
          </View>
        ));
      }
    }
  };

  return (
    <View>
      {editFlag && <Button title="食材を保存" onPress={onPressSave} />}
      {editFlag && (
        <Button
          buttonStyle={{ backgroundColor: "red" }}
          title="食材を削除"
          onPress={onPressDelete}
        />
      )}
      <View style={{ marginTop: 8 }}>{foodStockListView()}</View>
    </View>
  );
};

export default FoodStockListComponent;