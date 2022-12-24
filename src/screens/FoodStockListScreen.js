import { ScrollView, View, Alert } from "react-native";
import FoodStockEditButtonComponent from "../components/FoodStockEditButtonComponent";
import FoodStockListComponent from "../components/FoodStockListComponent";
import BaseStyle from "../styles/BaseStyle";

const FoodStockListScreen = ({ navigation }) => {
  const styles = BaseStyle();

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
