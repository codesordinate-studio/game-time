import React, { useEffect } from "react";
import { Image, ImageProps } from "expo-image";
import Animated, { useSharedValue, useAnimatedStyle, withTiming, withRepeat, Easing } from "react-native-reanimated";

const AnimatedImage = Animated.createAnimatedComponent(Image);

interface AnimatedLogoProps extends ImageProps {
  size?: "sm" | "md" | "lg";
}

export const AnimatedLogo: React.FC<AnimatedLogoProps> = ({ size = "md", style, ...props }) => {
  const translateY = useSharedValue(0);

  useEffect(() => {
    // Subtle floating animation - bobbing up and down
    translateY.value = withRepeat(
      withTiming(-12, {
        duration: 3000,
        easing: Easing.inOut(Easing.ease),
      }),
      -1,
      true, // Reverse direction for smooth bobbing
    );
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }));

  return <AnimatedImage {...props} style={[animatedStyle, style]} />;
};
