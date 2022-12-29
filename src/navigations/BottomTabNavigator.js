// コア
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// スクリーン
import MyRecipeListScreen from "../screens/MyRecipeListScreen";
import RecipeListScreen from "../screens/RecipeListScreen";
import FoodStockListScreen from "../screens/FoodStockListScreen";
import LoginScreen from "../screens/LoginScreen";
import FoodMarketScreen from "../screens/FoodMarketScreen";

const BottomTabNavigator = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#F06A47",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Tab.Screen
        name="MyRecipeList"
        component={MyRecipeListScreen}
        options={{ title: "マイレシピ" }}
      />
      <Tab.Screen
        name="RecipeList"
        component={RecipeListScreen}
        options={{ title: "レシピ一覧" }}
      />
      <Tab.Screen
        name="FoodStockList"
        component={FoodStockListScreen}
        options={{ title: "食材管理" }}
      />
      <Tab.Screen
        name="foodMarket"
        component={FoodMarketScreen}
        options={{ title: "食材購入" }}
      />
      <Tab.Screen
        name="Login"
        component={LoginScreen}
        options={{ title: "ログイン" }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
