// コア
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// スクリーン
import MyRecipeListScreen from "../screens/MyRecipeListScreen";
import RecipeListScreen from "../screens/RecipeListScreen";
import FoodStockListScreen from "../screens/FoodStockListScreen";

const BottomTabNavigator = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="MyRecipeList"
        component={MyRecipeListScreen}
        options={{ title: "私の献立" }}
      />
      <Tab.Screen
        name="RecipeList"
        component={RecipeListScreen}
        options={{ title: "献立一覧" }}
      />
      <Tab.Screen
        name="FoodStockList"
        component={FoodStockListScreen}
        options={{ title: "残り食材一覧" }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
