import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { fonts } from "../config/fonts";
import { useAudioPlayer } from "expo-audio";
import { useEffect } from "react";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  const audioSource = require("../../assets/sound/bg_music.mp3");
  const player = useAudioPlayer(audioSource);
  const [fontLoaded] = useFonts(fonts.family);

  useEffect(() => {
    player.play();
  }, [player]);

  if (!fontLoaded) return null;

  return (
    <>
      <StatusBar style="auto" hidden={true} />
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="home" options={{ animation: "fade" }} />
      </Stack>
    </>
  );
}
