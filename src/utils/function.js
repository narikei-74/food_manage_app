import { addDays, format, subWeeks } from "date-fns";
import { ja } from "date-fns/locale";
import dayjs from "dayjs";

//今日の日付を返す
export const getDateString = () => {
  const date = new Date();
  return format(date, "yyyy-MM-dd");
};

/**
 * 日付のフォーマット 表示用
 * @param Date
 * */
export const formatDate = (date) => {
  return format(date, "MM月dd日(E)", { locale: ja });
};

/**
 * 日付のフォーマット
 * @param Date
 * @return String "yyyy-MM-dd"
 */
export const formatDateToString = (date) => {
  return format(date, "yyyy-MM-dd");
};

/**
 * 1週間前の日付
 * @param String "yyyy-MM-dd"
 * @return String "yyyy-MM-dd"
 */
export const getPreviousWeek = (date) => {
  return format(subWeeks(new Date(date), 1), "yyyy-MM-dd");
};

/**
 * 13日後の日付
 * @param String "yyyy-MM-dd"
 * @return String "yyyy-MM-dd"
 */
export const getNextWeek = (date) => {
  return format(addDays(new Date(date), 13), "yyyy-MM-dd");
};

/**
 * ユニークな値を生成
 */
export const makeUniqueID = () => {
  var strong = 1000;
  return (
    new Date().getTime().toString(16) +
    Math.floor(strong * Math.random()).toString(16)
  );
};

/**
 * 現在選択済みの日付のレシピデータを取得
 */
export const getCurrentDateMyRecipe = (recipeData, currentDate) => {
  const currentDateRecipe = recipeData.filter(
    (data) => formatDateToString(new Date(data.Date)) == currentDate
  );
  return currentDateRecipe;
};

/**
 * カタカナをひらがなに変換
 */
export const kanaToHira = (str) => {
  return str.replace(/[\u30A1-\u30FA]/g, (ch) =>
    String.fromCharCode(ch.charCodeAt(0) - 0x60)
  );
};

/**
 * 現在の日付に指定の日数加算する
 */
export const additionDate = (additionalDate) => {
  const now = new Date();
  now.setDate(now.getDate() + additionalDate);
  return getDateString(now);
};

/**
 * マイレシピの材料の食材と量を抽出し配列に格納
 */
export const makeMyRecipeMaterialsData = (myRecipes, additionalDate) => {
  let myRecipeMaterials = [];
  const now = dayjs();
  // マイレシピ配列
  myRecipes.forEach((myRecipe) => {
    const recipeDate = dayjs(myRecipe.Date).add(22, "h");
    if (recipeDate.isBefore(now)) {
      return;
    }
    // レシピ材料配列
    myRecipe.Recipe.Recipe_materials.forEach((food) => {
      // 調味料は対象外
      if (food.Food.Spices_flag == 1) {
        return;
      }
      // 材料の重複を制御
      const duplicationFood = myRecipeMaterials.findIndex(
        ({ ID }) => ID == food.FoodID
      );

      if (duplicationFood == -1) {
        myRecipeMaterials.push({
          ID: food.FoodID,
          Name: food.Food.Name,
          unit: food.Food.Unit,
          gram: food.Gram,
          quantity: food.Quantity,
          Amazon_url: food.Food.Amazon_url,
        });
      } else {
        if (myRecipeMaterials[duplicationFood].unit == 1) {
          myRecipeMaterials[duplicationFood].gram += food.Gram;
        } else {
          myRecipeMaterials[duplicationFood].quantity += food.Quantity;
        }
      }
    });
  });

  return myRecipeMaterials;
};

/**
 * マイレシピ材料から残り食材を引いて、足りない食材配列を作成する
 */
export const makeNotEnoughFoods = (materials, foodStock) => {
  const notEnoughFoods = [];
  materials.forEach((materialFood) => {
    const currentFoodStock = foodStock.find(
      ({ FoodID }) => FoodID == materialFood.ID
    );

    if (currentFoodStock == undefined) {
      notEnoughFoods.push(materialFood);
      return;
    }

    if (materialFood.unit == 1) {
      materialFood.gram -= currentFoodStock.Gram;
    } else {
      materialFood.quantity -= currentFoodStock.Quantity;
    }
    notEnoughFoods.push(materialFood);
  });
  return notEnoughFoods;
};
