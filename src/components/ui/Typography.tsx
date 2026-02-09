import { colors, useColors } from "@config/colors";
import { fonts } from "@config/fonts";
import styles from "@styles";
import { TextProps, Text } from "react-native";

interface TypographyProps extends TextProps {
  variant?: keyof typeof fonts.family;
  color?: keyof (typeof colors)["light" | "dark"] | keyof typeof colors;
  size?: keyof typeof fonts.sizes;
}

export const Typography = ({
  variant = "regular",
  color = "bg_content",
  size = "text_base",
  ...props
}: TypographyProps) => {
  const colors = useColors().colors;
  return (
    <Text
      {...props}
      style={[
        styles.center,
        styles.color(colors[color as keyof typeof colors]),
        styles.font(variant),
        { fontSize: fonts.sizes[size] },
        styles.shadow_sm,
      ]}
    />
  );
};
