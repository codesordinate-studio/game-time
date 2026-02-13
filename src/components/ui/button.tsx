import { useColors } from "@config/colors";
import styles from "@styles";
import { Pressable, PressableProps } from "react-native";
import { Typography } from "./Typography";
import { ImageBackground } from "expo-image";

interface ButtonProps extends PressableProps {
  title: string;
  variant?: "active" | "inactive";
  size?: "text_xl" | "text_lg" | "text_base" | "text_md";
  isFullWidth?: boolean;
}

export const Button = ({ title, variant = "active", size = "text_xl", isFullWidth = false, ...props }: ButtonProps) => {
  const colors = useColors().colors;

  return (
    <Pressable {...props} style={[styles.overflow_hidden, styles.rounded_sm, isFullWidth && styles.w_full]}>
      <ImageBackground
        source={
          variant === "active"
            ? require("../../../assets/images/active_btn.webp")
            : require("../../../assets/images/inactive_btn.webp")
        }
        contentFit="cover"
        style={[styles.rounded_sm, styles.px_lg, styles.py_md]}
      >
        <Typography
          variant="semibold"
          size={size}
          style={[styles.color(colors.bg_action_content), styles.center, styles.capitalize]}
        >
          {title}
        </Typography>
      </ImageBackground>
    </Pressable>
  );
};
