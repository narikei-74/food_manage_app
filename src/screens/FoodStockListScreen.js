import { ScrollView, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import FoodStockEditButtonComponent from "../components/FoodStockEditButtonComponent";
import FoodStockListComponent from "../components/FoodStockListComponent";
import {
  fetchFoodStock,
  resetError,
  resetIsApiConnected,
} from "../redux/FoodStockSlice";
import BaseStyle from "../styles/BaseStyle";

const FoodStockListScreen = ({ navigation }) => {
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
        <FoodStockListComponent editFlag={false} />
      </ScrollView>
      <FoodStockEditButtonComponent navigation={navigation} />
    </View>
  );
};

export default FoodStockListScreen;
