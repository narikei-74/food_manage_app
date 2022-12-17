// コア
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// スクリーン
import MyRecipeListScreen from "../screens/MyRecipeListScreen";
import RecipeListScreen from "../screens/RecipeListScreen";
import FoodStockListScreen from "../screens/FoodStockListScreen";
import UserInfoSettingScreen from "../screens/UserInfoSettingScreen";
import CreateRecipeScreen from "../screens/CreateRecipeScreen";
import LoginScreen from "../screens/LoginScreen";

const BottomTabNavigator = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="MyRecipeList"
        component={MyRecipeListScreen}
        options={{ title: "マイレシピ" }}
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
      <Tab.Screen
        name="UserInfoSetting"
        component={UserInfoSettingScreen}
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
