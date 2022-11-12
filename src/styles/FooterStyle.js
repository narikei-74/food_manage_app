import { StyleSheet } from "react-native";

const FooterStyle = () => {
  const styles = StyleSheet.create({
    footer: {
      width: "100%",
      height: 70,
      position: "absolute",
      top: "100%",
      bottom: 0,
      left: 0,
      right: 0,
      borderTopWidth: 2,
      borderTopColor: "#aaa",
    },
  });

  return styles;
};

export default FooterStyle;
