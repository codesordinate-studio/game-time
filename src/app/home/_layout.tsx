import { Stack } from "expo-router";
import { ImageBackground } from "expo-image";
import styles from "@styles";
import { AnimatedBubbles } from "@components/ui";

export default function RootLayout() {
  return (
    <ImageBackground style={[styles.flex_1]} source={require("../../../assets/images/bg_main.webp")}>
      <AnimatedBubbles />
      <Stack screenOptions={{ headerShown: false, contentStyle: { backgroundColor: "transparent" } }} />
    </ImageBackground>
  );
}
