import { ScrollView, View, Text, Alert } from "react-native";
import BaseStyle from "../styles/BaseStyle";
import { useDispatch, useSelector } from "react-redux";
import FoodStockAddFormComponent from "../components/FoodStockAddFormComponent";
import FoodStockListComponent from "../components/FoodStockListComponent";
import {
  fetchFoodStock,
  resetError,
  resetIsApiConnected,
} from "../redux/FoodStockSlice";

const FoodStockEditScreen = ({ navigation }) => {
  const styles = BaseStyle();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.currentUser).data;
  const foodStock = useSelector((state) => state.foodStock);

  if (foodStock.isApiConnected === true) {
    dispatch(fetchFoodStock(user.ID));
    dispatch(resetIsApiConnected());
  }

  if (foodStock.error !== undefined) {
    Alert.alert(foodStock.error);
    dispatch(resetError());
  }

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
        <FoodStockListComponent editFlag={true} navigation={navigation} />
      </ScrollView>
    </View>
  );
};

export default FoodStockEditScreen;
