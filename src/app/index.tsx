import { Button } from "@components";
import { useColors } from "@config/colors";
import styles from "@styles";
import { Text, View } from "react-native";

export default function Index() {
  const colors = useColors().colors;
  return (
    <View
      style={[
        styles.p(16),
        styles.flex_1,
        styles.items_center,
        styles.justify_center,
        styles.gap_md,
        styles.bg(colors.bg_200),
      ]}
    >
      <View>
        <Text style={[styles.center, styles.text_2xl, styles.font("bold"), styles.color(colors.bg_content)]}>
          Welcome to AppLand!
        </Text>

        <Text style={[styles.center, styles.text_base, styles.font("regular"), styles.color(colors.bg_content)]}>
          Edit app/index.tsx to edit this screen.
        </Text>
      </View>

      <Button title="Click me" onPress={() => alert(4)} />

      <View style={[styles.divider]} />
    </View>
  );
}
