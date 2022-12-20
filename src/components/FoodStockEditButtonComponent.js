import { Icon } from "@rneui/base";
import { View } from "react-native";
import FoodStockEditButtonStyle from "../styles/FoodStockEditButtonStyle";

const FoodStockEditButtonComponent = ({ navigation }) => {
  const styles = FoodStockEditButtonStyle();

  return (
    <View style={styles.iconWrapper}>
      <View style={styles.iconContainer}>
        <Icon
          raised
          name="pencil"
          type="simple-line-icon"
          color="#F32A00"
          onPress={() => navigation.navigate("FoodStockEdit")}
          size={35}
        />
      </View>
    </View>
  );
};

export default FoodStockEditButtonComponent;
