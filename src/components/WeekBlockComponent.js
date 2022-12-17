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
import { OutlineButton } from "./atoms/OutlineButton";
import { useDispatch, useSelector } from "react-redux";
import { editCurrentDate } from "../redux/CurrentDateSlice";

const WeekBlockComponent = () => {
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

  return (
    <View style={styles.container}>
      <View style={styles.contents}>
        <Text>{formatDate(new Date(currentDate))}</Text>
        <OutlineButton title="日付選択" onPress={showDatePicker} />
      </View>
      <View>
        <Modal isVisible={isDatePickerVisible}>
          <Calendar
            initialDate={currentDate}
            monthFormat={'yyyy年 MM月'}
            minDate={getPreviousWeek(getDateString())}
            maxDate={getNextWeek(getDateString())}
            onDayPress={(day) => {
              dispatch(editCurrentDate(day.dateString));
              setDatePickerVisibility(false);
            }}
          />
          <View style={styles.modalButtonContainer} >
            <OutlineButton title="とじる" onPress={hideDatePicker} />
          </View>
        </Modal>
      </View>
    </View>
  );
};

//react-native-calendarsの設定
LocaleConfig.locales.jp = {
  monthNames: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
  monthNamesShort: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
  dayNames: ['日曜日', '月曜日', '火曜日', '水曜日', '木曜日', '金曜日', '土曜日'],
  dayNamesShort: ['日', '月', '火', '水', '木', '金', '土'],
};
LocaleConfig.defaultLocale = 'jp';

export default WeekBlockComponent;
