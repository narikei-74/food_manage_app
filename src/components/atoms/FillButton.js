import { Button } from "@rneui/themed";
import { FillButtonStyle } from "../../styles/FillButtonStyle";

export const FillButton = (props) => {
    const { title, onPress, color = "#F32A00", fontSize = 16, containerStyle = {} } = props;

    const styles = FillButtonStyle(color, fontSize);
    return (
        <Button
            title={title}
            type="outline"
            style={styles.button}
            titleStyle={styles.title}
            buttonStyle={styles.button}
            containerStyle={containerStyle}
            onPress={onPress}
        />
    );
};
