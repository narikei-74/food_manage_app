import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MyRecipeListScreen from "./src/screens/MyRecipeListScreen";
import MyRecipeDetailScreen from "./src/screens/MyRecipeDetailScreen";
import RecipeListScreen from "./src/screens/RecipeListScreen";
import BottomTabNavigator from "./src/navigations/BottomTabNavigator";

const Stack = createStackNavigator();

export default App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Tab"
          component={BottomTabNavigator}
          options={{ headerShown: false, title: "私の献立" }}
        />
        <Stack.Screen
          name="私の献立"
          component={MyRecipeListScreen}
          options={{ title: "私の献立" }}
        />
        <Stack.Screen
          name="レシピ"
          component={MyRecipeDetailScreen}
          options={{ title: "レシピ" }}
        />
        <Stack.Screen name="献立一覧" component={RecipeListScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
