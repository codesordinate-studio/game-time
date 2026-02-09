import { Outfit_400Regular, Outfit_500Medium } from "@expo-google-fonts/outfit";
import { DynaPuff_700Bold, DynaPuff_600SemiBold } from "@expo-google-fonts/dynapuff";
import { Dimensions, PixelRatio } from "react-native";

const fontNormalize = (size: number) => PixelRatio.roundToNearestPixel((size * Dimensions.get("window").width) / 375);

export const fonts = {
  family: {
    bold: DynaPuff_700Bold,
    semibold: DynaPuff_600SemiBold,
    medium: Outfit_500Medium,
    regular: Outfit_400Regular,
  },

  sizes: {
    text_menu: fontNormalize(12),
    text_xs: fontNormalize(12),
    text_sm: fontNormalize(14),
    text_md: fontNormalize(15),
    text_base: fontNormalize(16),
    text_lg: fontNormalize(18),
    text_xl: fontNormalize(20),
    text_2xl: fontNormalize(24),
    text_3xl: fontNormalize(30),
    text_4xl: fontNormalize(36),
    text_5xl: fontNormalize(48),
    text_6xl: fontNormalize(60),
    text_7xl: fontNormalize(72),
  },
};
