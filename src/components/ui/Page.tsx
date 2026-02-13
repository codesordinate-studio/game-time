import styles from "@styles";
import { View, ViewProps } from "react-native";

interface Props extends ViewProps {
  backgroundColor?: string;
}

export const Page = ({ ...props }: Props) => {
  return <View style={[styles.flex_1, styles.p(20), styles.bg(props.backgroundColor || "")]} {...props} />;
};
