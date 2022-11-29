import { Button } from "@rneui/base";
import { View, Text } from "react-native";

const LoginScreen = () => {
  const onPressRegisterGuest = () =>{
    fetch("http://18.183.189.68:8080/user/register/guest",{method:"POST",body:JSON.stringify({Guest_flag:1}),headers:{'Content-Type':'application/json'}})
    .then(res=>res.json())
    .then(res=>console.log(res))
    .catch(err=>console.log(err))
  }
  return (
    <View>
      <Text>ログインページ</Text>
      <Button
      title={"ゲスト利用する"}
      onPress={onPressRegisterGuest}
      />
    </View>
  );
};

export default LoginScreen;
