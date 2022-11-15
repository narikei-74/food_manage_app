import { addDays, endOfWeek, format, startOfWeek } from "date-fns";

//今日の日付を返す
export const getDateString = () =>{
    const date = new Date();
    return `${date.getMonth()+1}月${date.getDate()}日`
}

//現在の週の初め(月曜日)を文字列で返す
export const getStartOfWeek = () =>{
    return format(addDays(startOfWeek(new Date()),1),"MM月dd日");
}

//現在の週の終わり(日曜日)を文字列で返す
export const getEndOfWeek = () =>{
    return format(addDays(endOfWeek(new Date()),1),"MM月dd日");
}

//曜日名を返す
export const getWeekName = (currentWeek) =>{
    const Week ={0:"月", 1:"火", 2:"水", 3:"木", 4:"金", 5:"土", 6:"日"}
    return Week[currentWeek];
}

//日付のフォーマット
export const formatDate = (date) =>{
    return format(date,"MM月dd日");
}