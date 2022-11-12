/**
 *
 * @param {object} recipeData - レシピデータ
 * @param {int} currentWeek - 0〜6の数値
 * @return {object} - 指定の曜日のレシピデータ
 */
const findCurrentWeekRecipe = (recipeData, currentWeek) => {
  switch (currentWeek) {
    case 0:
      return recipeData.monday;
    case 1:
      return recipeData.tuesday;
    case 2:
      return recipeData.wednesday;
    case 3:
      return recipeData.thursday;
    case 4:
      return recipeData.friday;
    case 5:
      return recipeData.saturday;
    case 6:
      return recipeData.sunday;
  }
};

export default findCurrentWeekRecipe;
