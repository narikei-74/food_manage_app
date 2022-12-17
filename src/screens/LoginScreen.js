import { Button, Icon } from "@rneui/base";
import { View, Text, Alert } from "react-native";
import { storage } from "../storage/storage";
import { useContext, useEffect } from "react";
import { UserContext } from "../context/UserContext";
import { useDispatch } from "react-redux";
import { OutlineButton } from "../components/atoms/OutlineButton";
import { FillButton } from "../components/atoms/FillButton";
import { LoginScreenStyle } from "../styles/LoginScreenStyle";

const LoginScreen = ({ navigation }) => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const styles = LoginScreenStyle();

  useEffect(() => {
    (async () => {
      if (await currentUser) {
        navigation.navigate("BottomTab", { screen: "MyRecipeList" });
      }
    })();
  }, []);

  const onPressRegisterGuest = () => {
    if (currentUser) {
      navigation.navigate("BottomTab", { screen: "MyRecipeList" });
    } else {
      fetch("http://18.183.189.68:8080/user/register/guest", {
        method: "POST",
        body: JSON.stringify({ Guest_flag: 1 }),
        headers: { "Content-Type": "application/json" },
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.success == true) {
            storage.save({ key: "userInfo", data: { userId: res.userId } });
            storage
              .load({ key: "userInfo" })
              .then((data) => setCurrentUser(data));
            navigation.navigate("BottomTab", { screen: "MyRecipeList" });
          } else {
            Alert.alert("エラーが発生しました。もう一度お試しください。");
          }
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Icon
          name='grain'
          type='material'
          color='#F32A00'
          size={150}
        />
      </View>
      <View style={styles.buttonWrapper}>
        <FillButton title={"ユーザー登録"} onPress={onPressRegisterGuest} containerStyle={styles.buttonContainer} />
        <FillButton title={"ゲスト利用する"} onPress={onPressRegisterGuest} containerStyle={styles.buttonContainer} />
        <FillButton
          title={"削除(テスト用)"}
          onPress={() => {
            storage.remove({ key: "userInfo" });
          }}
          containerStyle={styles.buttonContainer}
        />
        <Text>{currentUser && currentUser.userId}</Text>
      </View>
    </View>
  );
};

export default LoginScreen;
