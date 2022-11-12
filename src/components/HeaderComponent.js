// コア
import { View, Text, Button } from "react-native";
// スタイル
import HeaderStyle from "../styles/HeaderStyle";

const HeaderComponent = ({ currentWeek, setCurrentWeek }) => {
  const styles = HeaderStyle();
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
        11月7日<Text style={styles.week}>(月)</Text>　〜　11月13日
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
                }}
                color={currentWeek == day.id ? "#fff" : "#333"}
              />
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default HeaderComponent;
