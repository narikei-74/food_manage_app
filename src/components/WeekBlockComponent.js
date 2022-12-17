import { useState } from "react";
import { View, Text } from "react-native";
import WeekBlockStyle from "../styles/WeekBlockStyle";
import {
  formatDate,
  getDateString,
  getNextWeek,
  getPreviousWeek,
} from "../utils/function";
import { Calendar } from "react-native-calendars";
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
    <View style={styles.header}>
      <View
        style={{
          alignItems: "center",
          justifyContent: "flex-start",
          flex: 1,
          height: 30,
        }}
      >
        <Text>{formatDate(new Date(currentDate))}</Text>
        <OutlineButton title="日付表示" onPress={showDatePicker} />
      </View>
      <View>
        <Modal isVisible={isDatePickerVisible}>
          <OutlineButton title="日付非表示" onPress={hideDatePicker} />
          <Calendar
            initialDate={currentDate}
            minDate={getPreviousWeek(getDateString())}
            maxDate={getNextWeek(getDateString())}
            onDayPress={(day) => {
              dispatch(editCurrentDate(day.dateString));
              setDatePickerVisibility(false);
            }}
          />
        </Modal>
      </View>
    </View>
  );
};

export default WeekBlockComponent;
