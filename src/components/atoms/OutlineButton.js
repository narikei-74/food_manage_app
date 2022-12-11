import { Button } from "@rneui/themed";
import { OutlineButtonStyle } from "../../styles/OutlineButtonStyle";

export const OutlineButton = (props) => {
  const { title, onPress } = props;

  const styles = OutlineButtonStyle();
  return (
    <Button
      title={title}
      type="outline"
      style={styles.button}
      titleStyle={styles.title}
      buttonStyle={styles.button}
      containerStyle={{
        width: 100,
        marginHorizontal: 20,
        marginTop: 10,
        marginBottom: 15,
      }}
      onPress={onPress}
    />
  );
};
