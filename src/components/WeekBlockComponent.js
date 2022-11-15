import { addDays, startOfWeek } from "date-fns";
import { useState } from "react";
import { View, Text, Button } from "react-native";
import WeekBlockStyle from "../styles/WeekBlockStyle";
import { formatDate, getEndOfWeek, getStartOfWeek, getWeekName } from "../utils/function";

const WeekBlockComponent = ({ currentWeek, setCurrentWeek }) => {
  const styles = WeekBlockStyle();
  const today = new Date();
  const startOfWeekString = getStartOfWeek();
  const endOfWeek = getEndOfWeek();
  const [currentDay, setCurrentDay] = useState(today);
  const [currentWeekName, setCurrentWeekName] = useState(getWeekName(currentWeek));
  const week = [
    {
      id: 0,
      title: "月",
    },
    {
      id: 1,
      title: "火",
    },
    {
      id: 2,
      title: "水",
    },
    {
      id: 3,
      title: "木",
    },
    {
      id: 4,
      title: "金",
    },
    {
      id: 5,
      title: "土",
    },
    {
      id: 6,
      title: "日",
    },
  ];

  return (
    <View style={styles.header}>
      <Text>
        {startOfWeekString}<Text style={styles.week}>(月)</Text>　〜 {endOfWeek}
        <Text style={styles.week}>(日)</Text>
      </Text>
      <View style={styles.weekBar}>
        {week.map((day) => {
          return (
            <View
              style={[
                styles.day,
                currentWeek == day.id ? styles.currentWeek : "",
              ]}
            >
              <Button
                title={day.title}
                onPress={() => {
                  setCurrentWeek(day.id);
                  setCurrentWeekName(getWeekName(day.id));
                  setCurrentDay(addDays(startOfWeek(today),day.id+1));
                }}
                color={currentWeek == day.id ? "#fff" : "#333"}
              />
            </View>
          );
        })}
      </View>
      <View style={{alignItems:"center",justifyContent:"flex-start", flex:1,height:30}}>
        <Text>{formatDate(currentDay)}({currentWeekName})</Text>
      </View>
    </View>
  );
};

export default WeekBlockComponent;
