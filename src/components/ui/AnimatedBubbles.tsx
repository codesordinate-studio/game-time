import React, { useEffect } from "react";
import { View, StyleSheet } from "react-native";
import Animated, {
  useSharedValue,
  withTiming,
  withRepeat,
  useAnimatedStyle,
  withDelay,
  Easing,
} from "react-native-reanimated";

interface Bubble {
  id: number;
  size: number;
  top: number;
  left: number;
  opacity: number;
  duration: number;
  delay: number;
}

// Create scattered bubbles to match the background image
const BUBBLES: Bubble[] = Array.from({ length: 30 }).map((_, i) => ({
  id: i,
  size: Math.random() * 50 + 40, // 20-100px
  top: Math.random() * 100, // 0-100%
  left: Math.random() * 70, // 0-100%
  opacity: Math.random() * 0.15 + 0.05,
  duration: Math.random() * 3000 + 2000,
  delay: Math.random() * 2000,
}));

const AnimatedBubbleComponent: React.FC<{ bubble: Bubble }> = ({ bubble }) => {
  const translateY = useSharedValue(0);

  useEffect(() => {
    // Gentle floating animation
    translateY.value = withDelay(
      bubble.delay,
      withRepeat(
        withTiming(-30, {
          duration: bubble.duration,
          easing: Easing.inOut(Easing.ease),
        }),
        -1,
        true, // Reverse direction
      ),
    );
  }, [bubble.delay, bubble.duration, translateY]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }));

  return (
    <Animated.View
      style={[
        styles.bubble,
        {
          width: bubble.size,
          height: bubble.size,
          borderRadius: bubble.size / 2,
          top: `${bubble.top}%`,
          left: `${bubble.left}%`,
          opacity: bubble.opacity,
        },
        animatedStyle,
      ]}
    />
  );
};

export const AnimatedBubbles: React.FC = () => {
  return (
    <View style={styles.container} pointerEvents="none">
      {BUBBLES.map((bubble) => (
        <AnimatedBubbleComponent key={bubble.id} bubble={bubble} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 0,
    overflow: "hidden",
  },
  bubble: {
    position: "absolute",
    backgroundColor: "#FFFFFF", // White bubbles on blue background
  },
});
