import axios from "axios";
import { useEffect, useState } from "react";

/**
 *
 * @return {object} - レシピデータ30件返す
 */
const GetRecipeDataService = async () => {
  return data = await fetch("http://18.183.189.68:8080/recipedata/get", { method: 'post', body: JSON.stringify({ Offset: 0 }) })
    .then(res => res.json())
    .then((resJson) => {
      return resJson;
    })
    .catch((err) => console.log(err));
};

export default GetRecipeDataService;
