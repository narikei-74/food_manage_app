// コア
import { View } from "react-native";
// スタイル
import FooterStyle from "../styles/FooterStyle";

const FooterComponent = () => {
  const styles = FooterStyle();
  return <View style={styles.footer}></View>;
};

export default FooterComponent;
