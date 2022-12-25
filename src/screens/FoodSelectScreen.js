import { ScrollView, View, Text } from "react-native";
import { useRoute } from "@react-navigation/native";
import FoodListComponent from "../components/FoodListComponent";
import BaseStyle from "../styles/BaseStyle";
import { SearchBar } from "@rneui/base";
import { useState } from "react";

const FoodSelectScreen = ({ navigation }) => {
  const styles = BaseStyle();
  const route = useRoute();
  const [searchInputText, setSearchInputText] = useState("");

  return (
    <ScrollView style={styles.container}>
      <SearchBar
        containerStyle={styles.searchBar}
        inputContainerStyle={styles.searchBarInput}
        inputStyle={styles.searchInputText}
        placeholder="食材名で検索"
        onChangeText={(text) => {
          setSearchInputText(text);
        }}
        value={searchInputText}
        onClear={() => {
          setSearchInputText("");
        }}
      />
      <View style={styles.wrapper}>
        <View style={styles.subTitleContainer}>
          <Text style={styles.subTitle}>食材一覧</Text>
        </View>
        <FoodListComponent
          isMarket={false}
          setFoodName={route.params.setFoodName}
          setFoodID={route.params.setFoodID}
          setIsGram={route.params.setIsGram}
          navigation={navigation}
          searchInputText={searchInputText}
        />
      </View>
    </ScrollView>
  );
};

export default FoodSelectScreen;
