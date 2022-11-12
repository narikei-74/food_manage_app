import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MyRecipeListScreen from "../screens/MyRecipeListScreen";
import MyRecipeDetailScreen from "../screens/MyRecipeDetailScreen";
import RecipeListScreen from "../screens/RecipeListScreen";
import RecipeDetailScreen from "../screens/RecipeDetailScreen";
import BottomTabNavigator from "./BottomTabNavigator";

const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
