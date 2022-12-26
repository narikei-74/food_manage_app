import { ScrollView, View, Text } from "react-native";
import FoodListComponent from "../components/FoodListComponent";
import BaseStyle from "../styles/BaseStyle";
import { SearchBar } from "@rneui/base";
import { useState } from "react";

const FoodMarketScreen = () => {
  const styles = BaseStyle();
  const [searchInputText, setSearchInputText] = useState("");

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
        <View style={styles.subTitleContainer}>
          <Text style={styles.subTitle}>食材一覧</Text>
        </View>
        <FoodListComponent isMarket={true} searchInputText={searchInputText} />
      </View>
    </ScrollView>
  );
};

export default FoodMarketScreen;
