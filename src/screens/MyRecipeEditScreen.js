import { View } from "react-native";
import MyRecipeListComponent from "../components/MyRecipeListComponent";
import WeekBlockComponent from "../components/WeekBlockComponent";
import BaseStyle from "../styles/BaseStyle";

const MyRecipeEditScreen = ({ navigation }) => {
  const styles = BaseStyle();

  return (
    <View style={styles.container}>
      <WeekBlockComponent />
      <View style={styles.bar}></View>
      <MyRecipeListComponent
        onPress={() => {
          navigation.navigate("MyRecipeDetail");
        }}
        navigation={navigation}
      />
    </View>
  );
};

export default MyRecipeEditScreen;
