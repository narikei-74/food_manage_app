import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MyRecipeListScreen from "./src/screens/MyRecipeListScreen";
import MyRecipeDetailScreen from "./src/screens/MyRecipeDetailScreen";

const Stack = createStackNavigator();

export default App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="献立" component={MyRecipeListScreen} />
        <Stack.Screen name="レシピ" component={MyRecipeDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
