import { StyleSheet } from "react-native";

const HeaderStyle = () => {
  const styles = StyleSheet.create({
    header: {
      width: "100%",
      height: 100,
      top: "4%",
      alignItems: "center",
      textAlign: "center",
    },
    week: {
      fontSize: 12,
      fontWeight: "normal",
    },
    weekBar: {
      flex: 1,
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "center",
      marginTop: 10,
    },
    day: {
      width: 38,
    },
    currentWeek: {
      backgroundColor: "#FA514B",
      borderRadius: "50%",
      width: 38,
    },
  });

  return styles;
};

export default HeaderStyle;
