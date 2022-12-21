import { StyleSheet } from "react-native";

const BaseStyle = () => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
    },
    bar: {
      height: 2,
      backgroundColor: "#eee",
    },
    subTitleContainer: {
      borderBottomWidth: 3,
      borderBottomColor: "#ff4500",
      paddingBottom: 4,
      marginTop: 30,
    },
    subTitle: {
      fontSize: 16,
      color: "#ff4500",
      fontWeight: "bold",
    },
    wrapper: {
      width: "94%",
      marginLeft: "auto",
      marginRight: "auto",
    },
    searchBar: {
      backgroundColor: "#fff",
      justifyContent: "flex-end",
      borderBottomColor: "#aaa",
      borderTopColor: "#fff",
    },
    searchBarInput: {
      backgroundColor: "#ccc",
      borderRadius: 8,
      height: 40,
      marginRight: "auto",
      marginLeft: "auto",
    },
    searchInputText: {
      color: "#333",
      fontSize: 16,
    },
    comment: {
      marginTop: 6,
    },
  });

  return styles;
};

export default BaseStyle;
