import { useColorScheme } from "react-native";

export const colors = {
  primary: "#82791b",
  bg_action: "#FADF52", //Action Background
  bg_secondary: "#EB990C", //Action Background II
  bg_action_content: "#FFFFFF", //Action Text Content
  white: "#FFFFFF",

  light: {
    bg_100: "#FFFFFF", //Surface
    bg_200: "#F3F4F6", //Background
    bg_content: "#111827", //Text Content
  },

  dark: {
    bg_100: "#1F2937", //Surface
    bg_200: "#111827", //Background
    bg_content: "#F9FAFB", //Text Content
  },
};

export const useColors = () => {
  const { light, dark, ...rest } = colors;
  const theme = useColorScheme();

  return {
    colors: { ...rest, ...(theme === "dark" ? dark : light) },
    theme,
  };
};
