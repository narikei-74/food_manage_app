// コア
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// スクリーン
import MyRecipeListScreen from "../screens/MyRecipeListScreen";
import RecipeListScreen from "../screens/RecipeListScreen";

const BottomTabNavigator = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator>
      <Tab.Screen name="私の献立" component={MyRecipeListScreen} />
      <Tab.Screen name="献立一覧" component={RecipeListScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
