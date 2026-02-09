import { AnimatedBubbles } from "@components/ui";
import { useColors } from "@config/colors";
import styles, { scaler } from "@styles";
import { ImageBackground } from "expo-image";
import { Text, View } from "react-native";

export default function Index() {
  const colors = useColors().colors;
  return (
    <ImageBackground style={[styles.flex_1]} source={require("../../assets/images/bg_main.webp")}>
      <AnimatedBubbles />
      <View style={[styles.flex_1, styles.items_center, styles.mt(scaler.height(10)), styles.gap_md, ,]}>
        <Text
          style={[styles.center, styles.color(colors.white), styles.font("bold"), styles.text_4xl, styles.shadow_sm]}
        >
          Choose and{`\n`}Exciting Game
        </Text>
      </View>
    </ImageBackground>
  );
}
