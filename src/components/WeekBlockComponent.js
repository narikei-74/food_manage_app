import { useState } from "react";
import { View, Text } from "react-native";
import WeekBlockStyle from "../styles/WeekBlockStyle";
import {
  formatDate,
  getDateString,
  getNextWeek,
  getPreviousWeek,
} from "../utils/function";
import { Calendar, LocaleConfig } from "react-native-calendars";
import Modal from "react-native-modal";
import { useDispatch, useSelector } from "react-redux";
import { editCurrentDate } from "../redux/CurrentDateSlice";
import { FillButton } from "./atoms/FillButton";
import { Icon } from "@rneui/themed";
import { useRoute } from "@react-navigation/native";

const WeekBlockComponent = ({ navigation }) => {
  const styles = WeekBlockStyle();

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const dispatch = useDispatch();
  const currentDate = useSelector((state) => state.currentDate).currentDate;

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };
  const route = useRoute();

  return (
    <View style={styles.container}>
      <View style={styles.contents}>
        <Text style={styles.dateText}>
          ー&nbsp;&nbsp;
          {formatDate(new Date(currentDate))}
          &nbsp;&nbsp;ー
        </Text>
        <View style={styles.iconWrapper}>
          {route.name == "MyRecipeList" &&
            <View style={styles.iconContainer}>
              <Icon
                raised
                name='pencil'
                type='simple-line-icon'
                color='#F32A00'
                onPress={() => navigation.navigate("MyRecipeEdit")}
                size={20}
              />
              <Text>レシピ編集</Text>
            </View>
          }
          <View style={styles.iconContainer}>
            <Icon
              raised
              name="calendar"
              type="simple-line-icon"
              color="#F32A00"
              onPress={showDatePicker}
              size={20}
            />
            <Text>カレンダー</Text>
          </View>
          {route.name == "MyRecipeList" &&
            <View style={styles.iconContainer}>
              <Icon
                raised
                name='psychology'
                type='material'
                color='#F32A00'
                onPress={() => navigation.navigate("CreateRecipe")}
                size={20}
              />
              <Text>自動作成</Text>
            </View>
          }d
        </View>
      </View>
      <View>
        <Modal isVisible={isDatePickerVisible}>
          <Calendar
            initialDate={currentDate}
            monthFormat={"yyyy年 MM月"}
            minDate={getPreviousWeek(getDateString())}
            maxDate={getNextWeek(getDateString())}
            onDayPress={(day) => {
              dispatch(editCurrentDate(day.dateString));
              setDatePickerVisibility(false);
            }}
            enableSwipeMonths
          />
          <View style={styles.modalButtonContainer}>
            <FillButton
              color="#00ACF5"
              title="とじる"
              onPress={hideDatePicker}
              containerStyle={{ width: 100, marginTop: 20 }}
            />
          </View>
        </Modal>
      </View>
    </View>
  );
};

//react-native-calendarsの設定
LocaleConfig.locales.jp = {
  monthNames: [
    "1月",
    "2月",
    "3月",
    "4月",
    "5月",
    "6月",
    "7月",
    "8月",
    "9月",
    "10月",
    "11月",
    "12月",
  ],
  monthNamesShort: [
    "1月",
    "2月",
    "3月",
    "4月",
    "5月",
    "6月",
    "7月",
    "8月",
    "9月",
    "10月",
    "11月",
    "12月",
  ],
  dayNames: [
    "日曜日",
    "月曜日",
    "火曜日",
    "水曜日",
    "木曜日",
    "金曜日",
    "土曜日",
  ],
  dayNamesShort: ["日", "月", "火", "水", "木", "金", "土"],
};
LocaleConfig.defaultLocale = "jp";

export default WeekBlockComponent;
