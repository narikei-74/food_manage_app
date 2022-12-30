import { StyleSheet } from "react-native";

const DeleteConfirmModalStyle = () => {
  const styles = StyleSheet.create({
    confirmModal: {
      marginLeft: "auto",
      marginRight: "auto",
      width: "70%",
      height: 120,
      backgroundColor: "#fff",
      alignItems: "center",
      borderRadius: 8,
    },
    confirmModalText: {
      marginTop: 25,
      fontSize: 16,
    },
    confirmModalButtons: {
      flexDirection: "row",
      width: "80%",
      justifyContent: "space-around",
      marginTop: 20,
    },
    confirmModalOK: {
      width: 90,
      backgroundColor: "#ff4500",
      borderRadius: 8,
    },
    confirmModalOKText: {
      color: "#fff",
      fontSize: 14,
    },
    confirmModalCancel: {
      width: 90,
      backgroundColor: "#888",
      borderRadius: 8,
    },
    confirmModalCancelText: {
      fontSize: 14,
    },
  });

  return styles;
};

export default DeleteConfirmModalStyle;
