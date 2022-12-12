import { Button } from "@rneui/base";
import { View, Text, Alert } from "react-native";
import { StackActions, NavigationActions } from '@react-navigation/native';
import { storage } from "../storage/storage";
import { useContext, useEffect } from "react";
import { UserContext } from "../context/UserContext";

const LoginScreen = ({ navigation }) => {
  const { currentUser, setCurrentUser } = useContext(UserContext);

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
      fetch("http://18.183.189.68:8080/user/register/guest", { method: "POST", body: JSON.stringify({ Guest_flag: 1 }), headers: { 'Content-Type': 'application/json' } })
        .then(res => res.json())
        .then(res => {
          if (res.success == true) {
            storage.save({ key: "userInfo", data: { userId: res.userId } });
            storage.load({ key: "userInfo" })
              .then(data => setCurrentUser(data));
            navigation.navigate("BottomTab", { screen: "MyRecipeList" });
          } else {
            Alert.alert("エラーが発生しました。もう一度お試しください。");
          }
        })
        .catch(err => console.log(err))
    }
  };

  return (
    <View>
      <Text>ログインページ</Text>
      <Button
        title={"ゲスト利用する"}
        onPress={onPressRegisterGuest}
      />
      <Button
        title={"削除(テスト用)"}
        onPress={() => {
          storage.remove({ key: "userInfo" })
        }}
      />
    </View>
  );
};

export default LoginScreen;
