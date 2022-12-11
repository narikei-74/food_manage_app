import { formatDate, formatDateToString } from "../utils/function";

/**
 *
 * @param {object} recipeData - レシピデータ
 * @param {int} currentWeek - 0〜6の数値
 * @return {object} - 指定の曜日のレシピデータ
 */
const findCurrentWeekRecipe = (recipeData, currentDate) => {
  const currentDateRecipe =  recipeData.filter(data=>formatDateToString(new Date(data.Date)) == currentDate);
  return currentDateRecipe;
};

export default findCurrentWeekRecipe;
