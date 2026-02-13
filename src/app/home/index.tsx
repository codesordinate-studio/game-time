import { Button, Typography } from "@components/ui";
import { useColors } from "@config/colors";
import { Games } from "@games";
import styles, { scaler } from "@styles";
import { ImageBackground } from "expo-image";
import { useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";
import Animated, {
  Extrapolation,
  interpolate,
  SharedValue,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";

const ITEM_WIDTH = scaler.width(75);
const ITEM_GAP = scaler.width(5);
const SNAP_INTERVAL = ITEM_WIDTH + ITEM_GAP;
const PADDING_H = (scaler.width(100) - ITEM_WIDTH) / 2;

const GameCard = ({
  item,
  index,
  scrollX,
  onPress,
}: {
  item: (typeof Games)[0];
  index: number;
  scrollX: SharedValue<number>;
  onPress: () => void;
}) => {
  const animatedStyle = useAnimatedStyle(() => {
    const scale = interpolate(
      scrollX.value,
      [(index - 1) * SNAP_INTERVAL, index * SNAP_INTERVAL, (index + 1) * SNAP_INTERVAL],
      [0.9, 1, 0.9],
      Extrapolation.CLAMP,
    );
    return {
      transform: [{ scale }],
    };
  });

  return (
    <Animated.View style={[styles.w(ITEM_WIDTH), animatedStyle]}>
      <Pressable onPress={onPress} style={[styles.gap_md, styles.overflow_hidden]}>
        <ImageBackground
          source={item.logo}
          style={[
            styles.w_full,
            styles.overflow_hidden,
            styles.h(scaler.height(40)),
            styles.bg("#fff3"),
            styles.rounded_sm,
          ]}
          contentFit="cover"
          contentPosition="center"
        />
        <View style={[styles.pr(20)]}>
          <Typography variant="semibold" color="bg_action" size="text_2xl">
            {item.name}
          </Typography>
          <Typography color="white" size="text_base">
            {item.config.description}
          </Typography>
        </View>
      </Pressable>
    </Animated.View>
  );
};

export default function Index() {
  const navigate = useRouter();
  const colors = useColors().colors;
  const scrollX = useSharedValue(0);

  const onScroll = useAnimatedScrollHandler((event) => {
    scrollX.value = event.contentOffset.x;
  });

  const goToGame = (game: (typeof Games)[0]) => {
    navigate.push(`/game/${game.alias}`);
  };

  return (
    <View
      style={[
        styles.bg("transparent"),
        styles.flex_1,
        styles.items_center,
        styles.mt(scaler.height(10)),
        styles.gap_md,
        styles.mb(50),
      ]}
    >
      <Text
        style={[
          styles.center,
          styles.color(colors.white),
          styles.font("bold"),
          styles.text_4xl,
          styles.shadow_sm,
          styles.p(30),
        ]}
      >
        Choose and Exciting Game
      </Text>

      <View style={[styles.flex_1, styles.w_full]}>
        <Animated.ScrollView
          horizontal
          pagingEnabled={false}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: PADDING_H, gap: ITEM_GAP }}
          snapToAlignment="start"
          snapToInterval={SNAP_INTERVAL}
          onScroll={onScroll}
          scrollEventThrottle={16}
        >
          {Games.map((el, index) => (
            <GameCard key={el.name} item={el} index={index} scrollX={scrollX} onPress={() => goToGame(el)} />
          ))}
        </Animated.ScrollView>

        <View style={[styles.p(30), styles.justify_center]}>
          <Button title="More Games" onPress={() => navigate.push("/home/games")} />
        </View>
      </View>
    </View>
  );
}
