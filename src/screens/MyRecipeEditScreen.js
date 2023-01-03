import { ScrollView, Text, View } from "react-native";
import MyRecipeListComponent from "../components/MyRecipeListComponent";
import WeekBlockComponent from "../components/WeekBlockComponent";
import BaseStyle from "../styles/BaseStyle";

const MyRecipeEditScreen = ({ navigation }) => {
  const styles = BaseStyle();

  return (
    <ScrollView style={styles.container}>
      <WeekBlockComponent />
      <View style={styles.bar}></View>
      <View style={{ alignItems: "center", margin: 10 }}>
        <Text>献立を6品まで追加できます</Text>
      </View>
      <MyRecipeListComponent
        navigation={navigation}
      />
    </ScrollView>
  );
};

export default MyRecipeEditScreen;
