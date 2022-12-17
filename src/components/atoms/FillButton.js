import { Button } from "@rneui/themed";
import { FillButtonStyle } from "../../styles/FillButtonStyle";

export const FillButton = (props) => {
    const { title, onPress, color = "#FA514B" } = props;

    const styles = FillButtonStyle(color);
    return (
        <Button
            title={title}
            type="outline"
            style={styles.button}
            titleStyle={styles.title}
            buttonStyle={styles.button}
            containerStyle={{
                position: "absolute",
                justifyContent: "center",
                left: 0,
                right: 0,
                alignItems: "center",
                bottom: 20,
            }}
            onPress={onPress}
        />
    );
};
