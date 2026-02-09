import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { fonts } from "../config/fonts";

export default function RootLayout() {
  const [fontLoaded] = useFonts(fonts);
  if (!fontLoaded) return null;

  return <Stack screenOptions={{ headerShown: false }} />;
}
