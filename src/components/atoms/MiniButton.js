import { Button } from "@rneui/themed";
import { MiniButtonStyle } from "../../styles/MiniButtonStyle";
import { OutlineButtonStyle } from "../../styles/OutlineButtonStyle";

export const MiniButton = (props) => {
    const { title, onPress, color = "#F32A00" } = props;

    const styles = MiniButtonStyle(color);
    return (
        <Button
            title={title}
            type="outline"
            style={styles.button}
            titleStyle={styles.title}
            buttonStyle={styles.button}
            containerStyle={{
                marginRight: 8,
                marginLeft: 8,
            }}
            onPress={onPress}
        />
    );
};
