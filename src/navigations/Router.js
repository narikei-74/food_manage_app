import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MyRecipeDetailScreen from "../screens/MyRecipeDetailScreen";
import RecipeListScreen from "../screens/RecipeListScreen";
import RecipeDetailScreen from "../screens/RecipeDetailScreen";
import BottomTabNavigator from "./BottomTabNavigator";
import MyRecipeEditScreen from "../screens/MyRecipeEditScreen";
import CreateRecipeScreen from "../screens/CreateRecipeScreen";
import LoginScreen from "../screens/LoginScreen";
import FoodStockEditScreen from "../screens/FoodStockEditScreen";
import FoodSelectScreen from "../screens/FoodSelectScreen";

const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
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
        <Stack.Screen
          name="BottomTab"
          component={BottomTabNavigator}
          options={{ headerShown: false, title: "戻る" }}
        />
        <Stack.Screen
          name="MyRecipeDetail"
          component={MyRecipeDetailScreen}
          options={{ title: "レシピ" }}
        />
        <Stack.Screen
          name="RecipeDetail"
          component={RecipeDetailScreen}
          options={{ title: "レシピ" }}
        />
        <Stack.Screen
          name="MyRecipeEdit"
          component={MyRecipeEditScreen}
          options={{ title: "献立編集" }}
        />
        <Stack.Screen
          name="CreateRecipe"
          component={CreateRecipeScreen}
          options={{ title: "献立自動作成" }}
        />
        <Stack.Screen
          name="FoodStockEdit"
          component={FoodStockEditScreen}
          options={{ title: "残り食材編集" }}
        />
        <Stack.Screen
          name="FoodSelect"
          component={FoodSelectScreen}
          options={{ title: "食材選択" }}
        />
        <Stack.Screen
          name="RecipeList"
          component={RecipeListScreen}
          options={{ title: "献立一覧" }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ title: "ログイン" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
