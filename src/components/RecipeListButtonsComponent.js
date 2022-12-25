import { Icon } from "@rneui/base";
import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Keyboard,
  InputAccessoryView,
  TouchableOpacity,
} from "react-native";
import Modal from "react-native-modal";
import RecipeListButtonsStyle from "../styles/RecipeListButtonsStyle";
import { FillButton } from "./atoms/FillButton";
import SelectDropdown from "react-native-select-dropdown";
import { Button } from "@rneui/themed";

const RecipeListButtonsComponent = ({ navigation }) => {
  const styles = RecipeListButtonsStyle();
  const [isSearchModalVisible, setSearchModalVisibility] = useState(false);
  const [SearchRecipeName, setSearchRecipeName] = useState("");
  const [SearchMaterial, setSearchMaterial] = useState("");
  const [SearchCategory, setSearchCategory] = useState("");
  const [SearchFree, setSearchFree] = useState("");

  const dishCategories = ["未選択", "主食", "主菜", "副菜", "汁物"];

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
            onPress={() => navigation.navigate("CreatePrivateRecipe")}
            size={35}
          />
        </View>
      </View>
      <Modal isVisible={isSearchModalVisible}>
        <View style={styles.searchModalContainer}>
          <Text style={styles.searchModalTitle}>レシピを検索</Text>
          <View style={styles.inputContainer}>
            <Text>レシピ名</Text>
            <TextInput
              style={styles.serachInput}
              onChangeText={(text) => setSearchRecipeName(text)}
              value={SearchRecipeName}
              inputAccessoryViewID="searchRecipeName"
              placeholder="例　唐揚げ"
              placeholderTextColor="#999"
            />
          </View>
          <InputAccessoryView
            nativeID="searchRecipeName"
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
          <View style={styles.inputContainer}>
            <Text>材料</Text>
            <TextInput
              style={styles.serachInput}
              onChangeText={(text) => setSearchMaterial(text)}
              value={SearchMaterial}
              inputAccessoryViewID="searchMaterial"
              placeholder="例　豚肉"
              placeholderTextColor="#999"
            />
          </View>
          <InputAccessoryView nativeID="searchMaterial" backgroundColor="#ddd">
            <View style={{ alignItems: "flex-end" }}>
              <TouchableOpacity
                style={styles.keyboardCompBtn}
                onPress={() => Keyboard.dismiss()}
              >
                <Text style={styles.keyboardCompBtnText}>完了</Text>
              </TouchableOpacity>
            </View>
          </InputAccessoryView>
          <View style={styles.inputContainer}>
            <Text>カテゴリ</Text>
            <SelectDropdown
              buttonStyle={styles.searchCategory}
              data={dishCategories}
              onSelect={(selectedItem, index) => {
                setSearchCategory(selectedItem);
              }}
              buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem;
              }}
              rowTextForSelection={(item, index) => {
                return item;
              }}
              defaultValue={SearchCategory ? SearchCategory : "未選択"}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text>フリーワード</Text>
            <TextInput
              style={styles.serachInput}
              onChangeText={(text) => setSearchFree(text)}
              value={SearchFree}
              inputAccessoryViewID="searchFree"
              placeholder="例　健康"
              placeholderTextColor="#999"
            />
          </View>
          <InputAccessoryView nativeID="searchFree" backgroundColor="#ddd">
            <View style={{ alignItems: "flex-end" }}>
              <TouchableOpacity
                style={styles.keyboardCompBtn}
                onPress={() => Keyboard.dismiss()}
              >
                <Text style={styles.keyboardCompBtnText}>完了</Text>
              </TouchableOpacity>
            </View>
          </InputAccessoryView>

          <Button
            buttonStyle={styles.searchButton}
            title="検索"
            onPress={() => { }}
          />
        </View>
        <View style={styles.modalButtonContainer}>
          <FillButton
            color="#888"
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
