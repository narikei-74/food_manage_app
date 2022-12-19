import { Button, Icon } from "@rneui/base";
import { View, Text } from "react-native";
import { storage } from "../storage/storage";
import { useEffect } from "react";
import { FillButton } from "../components/atoms/FillButton";
import { useDispatch, useSelector } from "react-redux";
import { addGuestUser, saveStoreCurrentUser } from "../redux/UserSlice";
import { LoginScreenStyle } from "../styles/LoginScreenStyle";

const LoginScreen = ({ navigation }) => {
  const currentUser = useSelector((state) => state.currentUser);
  const dispatch = useDispatch();
  const styles = LoginScreenStyle();

  useEffect(() => {
    dispatch(saveStoreCurrentUser());
  }, [dispatch]);

  const onPressRegisterGuest = () => {
    dispatch(addGuestUser());
  };

  if (currentUser.loader === true) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  } else {
    if (currentUser.status === true) {
      navigation.navigate("BottomTab", { screen: "MyRecipeList" });
      return (
        <View style={styles.container}>
          <View style={styles.logoContainer}>
            <Icon name="grain" type="material" color="#F06A47" size={150} />
          </View>
          <View style={styles.buttonWrapper}>
            <FillButton
              title={"ユーザー登録"}
              onPress={onPressRegisterGuest}
              containerStyle={styles.buttonContainer}
            />
            <FillButton
              title={"ゲスト利用する"}
              onPress={onPressRegisterGuest}
              containerStyle={styles.buttonContainer}
            />
            <FillButton
              title={"削除(テスト用)"}
              onPress={() => {
                storage.remove({ key: "userId" });
              }}
              containerStyle={styles.buttonContainer}
            />
            <Text>{currentUser && currentUser.userId}</Text>
          </View>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <View style={styles.logoContainer}>
            <Icon name="grain" type="material" color="#F06A47" size={150} />
          </View>
          <View style={styles.buttonWrapper}>
            <FillButton
              title={"ユーザー登録"}
              onPress={onPressRegisterGuest}
              containerStyle={styles.buttonContainer}
            />
            <FillButton
              title={"ゲスト利用する"}
              onPress={onPressRegisterGuest}
              containerStyle={styles.buttonContainer}
            />
            <FillButton
              title={"削除(テスト用)"}
              onPress={() => {
                storage.remove({ key: "userId" });
              }}
              containerStyle={styles.buttonContainer}
            />
            <Text>{currentUser && currentUser.userId}</Text>
          </View>
        </View>
      );
    }
  }
};

export default LoginScreen;
