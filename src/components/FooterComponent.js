import { View, Text, Button } from "react-native";
import FooterStyle from "../styles/FooterStyle";

const FooterComponent = () => {
  const styles = FooterStyle();
  return <View style={styles.footer}></View>;
};

export default FooterComponent;
