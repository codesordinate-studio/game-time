import { useColors } from "@config/colors";
import styles from "@styles";
import { Pressable, PressableProps, Text } from "react-native";

interface ButtonProps extends PressableProps {
  title: string;
}

export const Button = ({ title, ...props }: ButtonProps) => {
  const colors = useColors().colors;

  return (
    <Pressable {...props} style={[styles.rounded_sm, styles.px_lg, styles.py_md, styles.bg(colors.bg_action)]}>
      <Text style={[styles.font("medium"), styles.text_base, styles.color(colors.bg_action_content)]}>{title}</Text>
    </Pressable>
  );
};
