import { Button, ButtonGroup, Stack } from "@rneui/themed"
import { StyleSheet, TouchableOpacity, View } from "react-native"
import { RecipeEditbuttonsComponentStyle } from "../styles/RecipeEditbuttonsComponentStyle";
import { OutlineButton } from "./atoms/OutlineButton"

export const RecipeEditbuttonsComponent = (props) => {
    const {navigation} = props;
    const styles = RecipeEditbuttonsComponentStyle();
    
    return (
        <View style={styles.container}>
            <OutlineButton title="献立編集" route="MyRecipeEdit" navigation={navigation} />
            <OutlineButton title="献立自動作成" route="CreateRecipe" navigation={navigation} />
        </View>
    )
}

