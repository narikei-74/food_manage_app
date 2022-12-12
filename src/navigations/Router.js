import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MyRecipeListScreen from "../screens/MyRecipeListScreen";
import MyRecipeDetailScreen from "../screens/MyRecipeDetailScreen";
import RecipeListScreen from "../screens/RecipeListScreen";
import RecipeDetailScreen from "../screens/RecipeDetailScreen";
import BottomTabNavigator from "./BottomTabNavigator";
import MyRecipeEditScreen from "../screens/MyRecipeEditScreen";
import CreateRecipeScreen from "../screens/CreateRecipeScreen";
import LoginScreen from "../screens/LoginScreen";
import { UserProvider } from "../context/UserContext";
import { DateProvider } from "../context/DateContext";

const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <UserProvider>
        <DateProvider>
          <Stack.Navigator initialRouteName="Login">
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
        </DateProvider>
      </UserProvider>
    </NavigationContainer>
  );
};

export default MainNavigator;
