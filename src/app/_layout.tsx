import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { fonts } from "../config/fonts";
import { useAudioPlayer } from "expo-audio";
import { useEffect } from "react";

const audioSource = require("../../assets/sound/bg_music.mp3");

export default function RootLayout() {
  const player = useAudioPlayer(audioSource);
  const [fontLoaded] = useFonts(fonts.family);

  useEffect(() => {
    player.play();
  }, [player]);

  if (!fontLoaded) return null;

  return <Stack screenOptions={{ headerShown: false }} />;
}
