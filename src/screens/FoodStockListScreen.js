import { useState } from "react";
import { ScrollView, View, Text } from "react-native";
import FoodStockEditButtonComponent from "../components/FoodStockEditButtonComponent";
import FoodStockListComponent from "../components/FoodStockListComponent";
import NotEnoughFoodListComponent from "../components/NotEnoughFoodListComponent";
import SwitchFoodManageButtonsComponent from "../components/SwitchFoodManageButtonsComponent";
import BaseStyle from "../styles/BaseStyle";

const FoodStockListScreen = ({ navigation }) => {
  const styles = BaseStyle();
  const [switchFoodManage, setSwitchFoodManage] = useState(0);

  return (
    <View style={styles.container}>
      <SwitchFoodManageButtonsComponent
        setSwitchFoodManage={setSwitchFoodManage}
        switchFoodManage={switchFoodManage}
        isMarket={false}
      />
      <ScrollView style={styles.wrapper}>
        {switchFoodManage == 0 ? (
          <View style={styles.subTitleContainer}>
            <Text style={styles.subTitle}>残りの食材</Text>
          </View>
        ) : (
          <View style={styles.subTitleContainer}>
            <Text style={styles.subTitle}>足りない食材</Text>
          </View>
        )}
        {switchFoodManage == 0 ? (
          <FoodStockListComponent editFlag={false} />
        ) : (
          <NotEnoughFoodListComponent />
        )}
      </ScrollView>
      <FoodStockEditButtonComponent navigation={navigation} />
    </View>
  );
};

export default FoodStockListScreen;
