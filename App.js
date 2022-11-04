import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MenuScreen from "./src/screens/MenuScreen";
import DetailScreen from "./src/screens/DetailScreen";

const Stack = createStackNavigator();

export default App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="献立" component={MenuScreen} />
        <Stack.Screen name="レシピ" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
