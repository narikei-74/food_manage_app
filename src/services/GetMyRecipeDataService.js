import { useContext } from "react";
import { UserContext } from "../context/UserContext";

/**
 *
 * @return {object} - my献立を返す
 */
const GetMyRecipeDataService = async () => {
  // const { currentUser } = useContext(UserContext);
  return data = await fetch("http://18.183.189.68:8080/myrecipedata/get", { method: 'post', body: JSON.stringify({ UserID: 88 }) })
    .then(res => res.json())
    .then((resJson) => {
      return resJson;
    })
    .catch((err) => console.log(err));
};


export default GetMyRecipeDataService;
