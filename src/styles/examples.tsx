/**
 * Dynamic Styles Usage Examples
 *
 * This demonstrates how to use the new dynamic style utilities
 * alongside your existing static styles
 */

import { Text, View } from "react-native";
import { useColors } from "../config/colors";
import styles from "./index";

export function DynamicStyleExamples() {
  const { colors } = useColors();

  return (
    <View style={styles.flex_1}>
      {/* Example 1: Dynamic spacing - arbitrary padding values */}
      <View style={[styles.row, styles.p(17)]}>
        <Text>Custom 17px padding</Text>
      </View>

      {/* Example 2: Mix static and dynamic styles */}
      <View style={[styles.flex_1, styles.px(24), styles.py(12)]}>
        <Text>24px horizontal, 12px vertical padding</Text>
      </View>

      {/* Example 3: Dynamic sizes */}
      <View style={[styles.w(100), styles.h(50), styles.items_center]}>
        <Text>100x50 box</Text>
      </View>

      {/* Example 4: Dynamic border radius */}
      <View style={[styles.rounded(20), styles.p_md]}>
        <Text>Custom 20px radius</Text>
      </View>

      {/* Example 5: Colors */}
      <View style={styles.bg(colors.bg_200)}>
        <Text style={styles.color(colors.bg_content)}>Themed colors</Text>
      </View>

      {/* Example 7: Responsive sizing */}
      <View
        style={{
          width: "80%", // 80% of screen width
          height: "25%", // 25% of screen height
        }}
      >
        <Text>Responsive container</Text>
      </View>

      {/* Example 8: Complex combination */}
      <View style={[styles.row, styles.items_center, styles.p(16), styles.rounded(12), styles.bg(colors.bg_200)]}>
        <Text style={styles.color(colors.bg_content)}>Combined styles</Text>
      </View>

      {/* Example 9: Inline styles for truly one-off values */}
      <View style={[styles.flex_1, { marginTop: 23, paddingLeft: 7 }]}>
        <Text>One-off values</Text>
      </View>
    </View>
  );
}

/**
 * When to use each approach:
 *
 * 1. Static styles (styles.p_md):
 *    - Most common use case
 *    - Best performance
 *    - Consistent spacing system
 *
 * 2. Dynamic utilities (spacing(17).p):
 *    - Need arbitrary values not in your scale
 *    - Values computed from props/state
 *    - Still good performance (cached)
 *
 * 3. Scale utilities (scale.space(3)):
 *    - Maintaining consistent spacing ratios
 *    - Quick calculations based on multipliers
 *
 * 4. Inline styles ({ padding: 17 }):
 *    - Truly one-off values
 *    - Simple, infrequent changes
 *    - Fine for non-list items
 */
