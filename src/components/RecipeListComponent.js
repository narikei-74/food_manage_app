import { View, Text, ImageBackground, TouchableOpacity, Alert } from "react-native";
import RecipeListStyle from "../styles/RecipeListStyle";
import FindCurrentWeekRecipeService from "../services/FindCurrentWeekRecipeService";
import { Button } from "@rneui/themed";
import { OutlineButton } from "./atoms/OutlineButton";
import { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";

const RecipeListComponent = (props) => {
  const {onPress, myRecipeData, currentWeek, isMyRecipe, recipeName, navigation} = props;
  const styles = RecipeListStyle();
  const route = useRoute();

  const myRecipe =
    isMyRecipe === true
      ? FindCurrentWeekRecipeService(myRecipeData, currentWeek)
      : myRecipeData;

    const recipeView = myRecipe?.map((recipe) => {
      console.log(recipe);
      console.log("##");
      // const imagePath = require("../../assets/images/"+ imagePath);
    return (
      <TouchableOpacity style={styles.foodBlock} onPress={onPress}>
        <ImageBackground
          source={{uri:recipe.Image_key}}
          resizeMode="cover"
          style={styles.image}
          imageStyle={{ borderRadius: 4 }}
        >
          {/* <img src={`../../${recipe.Image_key}`} /> */}
          {/* <Text>{{uri:recipe.Image_key}}</Text> */}
          <Text>{recipe.Name}</Text>
          {route.name=="MyRecipeEdit" &&
            <Button 
            title={"編集"}
            containerStyle={{width:100,alignItems:"center",right:-120}}
            onPress={()=>{
              navigation.navigate("RecipeList",{editRecipeName:recipe.name});
            }}
          />
          }
          {
          route.name=="RecipeList" && recipeName &&
            <Button 
            title={"追加"}
            containerStyle={{width:100,alignItems:"center",right:-120}}
            onPress={()=>Alert.alert(recipeName)}
          />
          }
        </ImageBackground>
      </TouchableOpacity>
    );
  });

  return <View style={styles.blocks}>{recipeView}</View>;
};

export default RecipeListComponent;
