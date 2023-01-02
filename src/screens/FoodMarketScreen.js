import { ScrollView, View, Text } from "react-native";
import FoodListComponent from "../components/FoodListComponent";
import BaseStyle from "../styles/BaseStyle";
import { SearchBar } from "@rneui/base";
import { useState } from "react";
import SwitchFoodManageButtonsComponent from "../components/SwitchFoodManageButtonsComponent";
import NotEnoughFoodListComponent from "../components/NotEnoughFoodListComponent";

const FoodMarketScreen = () => {
  const styles = BaseStyle();
  const [searchInputText, setSearchInputText] = useState("");
  const [switchFoodManage, setSwitchFoodManage] = useState(0);

  return (
    <ScrollView style={{ backgroundColor: "#fff" }}>
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
        disabled={switchFoodManage == 1 ? true : false}
      />
      <View style={styles.wrapper}>
        <Text style={styles.commentAmazon}>
          こちらの機能はamazonプライム会員、 特定の地域の方のみ利用可能です。
          詳しくはamazonライフのページをご覧ください。
        </Text>
        <Text style={styles.comment}>
          ※購入ボタンを押すと、{"\n"}
          amazonライフの商品ページに遷移します。
        </Text>
        <SwitchFoodManageButtonsComponent
          switchFoodManage={switchFoodManage}
          setSwitchFoodManage={setSwitchFoodManage}
          isMarket={true}
        />
        <View style={styles.subTitleContainer}>
          <Text style={styles.subTitle}>
            {switchFoodManage == 0 ? "食材一覧" : "足りない食材"}
          </Text>
        </View>
        {switchFoodManage == 0 ? (
          <FoodListComponent
            isMarket={true}
            searchInputText={searchInputText}
          />
        ) : (
          <NotEnoughFoodListComponent isMarket={true} />
        )}
      </View>
    </ScrollView>
  );
};

export default FoodMarketScreen;
