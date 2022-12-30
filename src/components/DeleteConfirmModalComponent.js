import DeleteConfirmModalStyle from "../styles/DeleteConfirmModalStyle";
import Modal from "react-native-modal";
import { Button } from "@rneui/themed";
import { View, Text } from "react-native";

const DeleteConfirmModalComponent = (props) => {
  const { deleteEvent, setIsVisibleDeleteConfirm, isVisibleDeleteConfirm } =
    props;
  const styles = DeleteConfirmModalStyle();

  return (
    <Modal isVisible={isVisibleDeleteConfirm}>
      <View style={styles.confirmModal}>
        <Text style={styles.confirmModalText}>削除してもよろしいですか？</Text>
        <View style={styles.confirmModalButtons}>
          <Button
            onPress={() => {
              setIsVisibleDeleteConfirm(false);
            }}
            title="キャンセル"
            titleStyle={styles.confirmModalCancelText}
            buttonStyle={styles.confirmModalCancel}
          />
          <Button
            onPress={() => {
              deleteEvent();
              setIsVisibleDeleteConfirm(false);
            }}
            title="OK"
            titleStyle={styles.confirmModalOKText}
            buttonStyle={styles.confirmModalOK}
          />
        </View>
      </View>
    </Modal>
  );
};

export default DeleteConfirmModalComponent;
