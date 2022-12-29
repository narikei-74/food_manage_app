import { Button } from "@rneui/base";
import { View } from "react-native";
import SwitchFoodManageButtonsStyle from "../styles/SwitchFoodManageButtonsStyle";

const SwitchFoodManageButtonsComponent = (props) => {
  const { switchFoodManage, setSwitchFoodManage } = props;
  const styles = SwitchFoodManageButtonsStyle();

  return (
    <View style={styles.container}>
      <Button
        buttonStyle={
          switchFoodManage == 0 ? styles.currentButton : styles.otherButton
        }
        titleStyle={
          switchFoodManage == 0
            ? styles.currentButtonText
            : styles.otherButtonText
        }
        title="残りの食材"
        onPress={() => setSwitchFoodManage(0)}
      />
      <Button
        buttonStyle={
          switchFoodManage == 1 ? styles.currentButton : styles.otherButton
        }
        titleStyle={
          switchFoodManage == 1
            ? styles.currentButtonText
            : styles.otherButtonText
        }
        title="足りない食材"
        onPress={() => setSwitchFoodManage(1)}
      />
    </View>
  );
};

export default SwitchFoodManageButtonsComponent;
