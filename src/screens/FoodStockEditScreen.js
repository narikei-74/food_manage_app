import { ScrollView, View, Text } from "react-native";
import BaseStyle from "../styles/BaseStyle";
import FoodStockAddFormComponent from "../components/FoodStockAddFormComponent";
import FoodStockListComponent from "../components/FoodStockListComponent";

const FoodStockEditScreen = ({ navigation }) => {
  const styles = BaseStyle();

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
