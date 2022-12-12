import { useContext } from "react";
import { Alert } from "react-native";
import { useDispatch } from "react-redux";
import { DateContext } from "../context/DateContext";
import { UserContext } from "../context/UserContext";
import { setMyRecipeData } from "../redux/MyRecipeDataSlice";

export const addMyRecipe = async (userID, recipeID, index, currentDate, navigation, setHasMyRecipeData) => {
    const req = { UserID: userID, RecipeID: recipeID, Index: index, Date: currentDate };
    return data = await fetch("http://18.183.189.68:8080/myrecipedata/create", { method: 'post', body: JSON.stringify(req) })
        .then(res => res.json())
        .then((resJson) => {
            if ("success" in resJson && resJson.success == true) {
                setHasMyRecipeData(false);
                navigation.replace("MyRecipeEdit");
            } else {
                Alert.alert("レシピの追加に失敗しました。");
            }
            return resJson;
        })
        .catch((err) => console.log(err));

};

export const updateMyRecipe = async (ID, userID, recipeID, index, currentDate, navigation, setHasMyRecipeData) => {
    const req = { ID: ID, UserID: userID, RecipeID: recipeID, Index: index, Date: currentDate };
    return data = await fetch("http://18.183.189.68:8080/myrecipedata/update", { method: 'post', body: JSON.stringify(req) })
        .then(res => res.json())
        .then((resJson) => {
            console.log("updateのレスポンス");
            console.log(ID);
            if ("success" in resJson && resJson.success == true) {
                setHasMyRecipeData(false);
                // navigation.goBack();
                navigation.replace("MyRecipeEdit");
            } else {
                Alert.alert("レシピの編集に失敗しました。");
            }
            return resJson;
        })
        .catch((err) => console.log(err));

}
