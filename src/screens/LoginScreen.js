import { Button } from "@rneui/base";
import { View, Text } from "react-native";
import { storage } from "../storage/storage";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addGuestUser, saveStoreCurrentUser } from "../redux/UserSlice";

const LoginScreen = ({ navigation }) => {
  const currentUser = useSelector((state) => state.currentUser);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(saveStoreCurrentUser());
  }, [dispatch]);

  const onPressRegisterGuest = () => {
    dispatch(addGuestUser());
  };
  console.log(currentUser);
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
        <View>
          <Button
            title={"削除(テスト用)"}
            onPress={() => {
              storage.remove({ key: "userId" });
            }}
          />
          <Text>{currentUser.data.ID}</Text>
        </View>
      );
    } else {
      return (
        <View>
          <Text>ログインページ</Text>
          <Button title={"ゲスト利用する"} onPress={onPressRegisterGuest} />
          <Text>{currentUser && currentUser.userId}</Text>
        </View>
      );
    }
  }
};

export default LoginScreen;
