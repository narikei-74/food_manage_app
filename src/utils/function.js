import { addDays, addWeeks, endOfWeek, format, startOfWeek, subWeeks } from "date-fns";
import {ja} from "date-fns/locale"

//今日の日付を返す
export const getDateString = () =>{
    const date = new Date();
    return format(date,"yyyy-MM-dd");
}

/**
 * 日付のフォーマット 表示用
 * @param Date
 * */ 
export const formatDate = (date) =>{
    return format(date,"MM月dd日(E)",{locale:ja});
}

/**
 * 日付のフォーマット
 * @param Date
 * @return String "yyyy-MM-dd"
 */
export const formatDateToString = (date) => {
    return format(date,"yyyy-MM-dd");
}

/**
 * 1週間前の日付
 * @param String "yyyy-MM-dd"
 * @return String "yyyy-MM-dd"
*/
export const getPreviousWeek = (date)=>{
    return format(subWeeks(new Date(date), 1),"yyyy-MM-dd");
}

/**
 * 13日後の日付
 * @param String "yyyy-MM-dd"
 * @return String "yyyy-MM-dd"
*/
export const getNextWeek = (date)=>{
    return format(addDays(new Date(date), 13),"yyyy-MM-dd");
}