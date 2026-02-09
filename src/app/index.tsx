import { Typography, AnimatedBubbles, AnimatedLogo } from "@components/ui";
import styles from "@styles";
import { ImageBackground } from "expo-image";
import { View } from "react-native";

export default function Index() {
  return (
    <ImageBackground
      style={[styles.flex_1, styles.justify_center]}
      source={require("../../assets/images/bg_main.webp")}
    >
      <AnimatedBubbles />
      <View style={[styles.flex_1, styles.items_center, styles.justify_center, styles.gap_md, ,]}>
        <AnimatedLogo
          source={require("../../assets/images/logo_main.webp")}
          style={[styles.w("100%"), styles.h("28%")]}
          contentFit="cover"
        />

        <Typography color="white" size="text_4xl" variant="bold">
          Find Your Next Adventure
        </Typography>

        <View style={[styles.px(12), styles.absolute, styles.bottom_5, styles.w("100%"), styles.items_center]}>
          <Typography color="white">@{new Date().getFullYear()} Codesordinate Studios.</Typography>
          <Typography color="white">All rights reserved.</Typography>
        </View>
      </View>
    </ImageBackground>
  );
}
