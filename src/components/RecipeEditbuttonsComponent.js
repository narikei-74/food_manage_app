import { View } from "react-native";
import { RecipeEditbuttonsComponentStyle } from "../styles/RecipeEditbuttonsComponentStyle";
import { OutlineButton } from "./atoms/OutlineButton";

export const RecipeEditbuttonsComponent = (props) => {
  const { navigation } = props;
  const styles = RecipeEditbuttonsComponentStyle();

  return (
    <View style={styles.container}>
      <OutlineButton
        title="献立編集"
        onPress={()=>{navigation.navigate("MyRecipeEdit")}}
      />
      <OutlineButton
        title="献立自動作成"
        onPress={()=>{navigation.navigate("CreateRecipe")}}
      />
    </View>
  );
};
