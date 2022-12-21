import {
  View,
  Text,
  Keyboard,
  InputAccessoryView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { FoodStockAddFormStyle } from "../styles/FoodStockAddFormStyle";
import { Button } from "@rneui/themed";
import { useState } from "react";

const FoodStockAddFormComponent = ({ navigation }) => {
  const styles = FoodStockAddFormStyle();
  const [foodID, setFoodID] = useState(null);
  const [isGram, setIsGram] = useState(true);
  const [foodName, setFoodName] = useState(null);
  const [foodQuantity, setFoodQuantity] = useState(null);

  const resetAddFood = () => {
    setFoodID(null);
    setFoodName(null);
    setFoodQuantity(null);
    setIsGram(true);
  };

  return (
    <View style={styles.container}>
      {!foodName ? (
        <Button
          buttonStyle={styles.foodNameButton}
          titleStyle={styles.foodNameButtonTitle}
          title="食材を選択"
          onPress={() => {
            navigation.navigate("FoodSelect", {
              setFoodID: setFoodID,
              setFoodName: setFoodName,
              setIsGram: setIsGram,
            });
          }}
        />
      ) : (
        <View style={styles.form}>
          <View style={styles.foodNameContainer}>
            <Text style={styles.formText}>{foodName}</Text>
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.foodQuantityInput}
              onChangeText={(text) => setFoodQuantity(text)}
              value={foodQuantity}
              inputAccessoryViewID="foodQuantity"
            />
            <Text style={styles.quantityUnit}>{isGram ? "g" : "個"}</Text>
          </View>
          <InputAccessoryView nativeID="foodQuantity" backgroundColor="#ddd">
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
      )}
      <View style={styles.buttons}>
        {foodName && foodQuantity && (
          <Button
            title="追加する"
            buttonStyle={styles.submitButton}
            titleStyle={styles.submitButtonTitle}
          />
        )}
        {foodName && (
          <Button
            title="リセット"
            buttonStyle={styles.resetButton}
            titleStyle={styles.resetButtonTitle}
            onPress={resetAddFood}
          />
        )}
      </View>
    </View>
  );
};

export default FoodStockAddFormComponent;
