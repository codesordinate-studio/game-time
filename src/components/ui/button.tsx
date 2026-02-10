import { useColors } from "@config/colors";
import styles from "@styles";
import { Pressable, PressableProps, Text } from "react-native";
import { Typography } from "./Typography";
import { ImageBackground } from "expo-image";

interface ButtonProps extends PressableProps {
  title: string;
}

export const Button = ({ title, ...props }: ButtonProps) => {
  const colors = useColors().colors;

  return (
    <Pressable {...props} style={[styles.rounded_md, styles.overflow_hidden]}>
      <ImageBackground
        source={require("../../../assets/images/active_btn.webp")}
        style={[styles.rounded_sm, styles.px_lg, styles.py_md, styles.bg(colors.bg_action)]}
      >
        <Typography variant="semibold" size="text_xl" style={[styles.color(colors.bg_action_content), styles.center]}>
          {title}
        </Typography>
      </ImageBackground>
    </Pressable>
  );
};
