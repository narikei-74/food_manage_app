import { Icon } from "@rneui/base";
import { useState } from "react";
import { View, Text } from "react-native";
import Modal from "react-native-modal";
import RecipeListButtonsStyle from "../styles/RecipeListButtonsStyle";
import { FillButton } from "./atoms/FillButton";

const RecipeListButtonsComponent = ({ navigation }) => {
  const styles = RecipeListButtonsStyle();
  const [isSearchModalVisible, setSearchModalVisibility] = useState(false);

  const showSearchModal = () => {
    setSearchModalVisibility(true);
  };

  const hideSearchModal = () => {
    setSearchModalVisibility(false);
  };

  return (
    <View>
      <View style={styles.iconWrapper}>
        <View style={styles.iconContainer}>
          <Icon
            raised
            name="search"
            type="material"
            color="#F06A47"
            onPress={showSearchModal}
            size={35}
          />
        </View>
        <View style={styles.iconContainer}>
          <Icon
            raised
            name="add"
            type="material"
            color="#F06A47"
            onPress={() => navigation.navigate("CreateRecipe")}
            size={35}
          />
        </View>
      </View>
      <Modal isVisible={isSearchModalVisible}>
        <View style={styles.searchModalContainer}>
          <Text style={styles.searchModalTitle}>検索条件</Text>
        </View>
        <View style={styles.modalButtonContainer}>
          <FillButton
            color="#6EC388"
            title="とじる"
            onPress={hideSearchModal}
            containerStyle={{ width: 100, marginTop: 20 }}
          />
        </View>
      </Modal>
    </View>
  );
};

export default RecipeListButtonsComponent;
