import { AnimatedBubbles, Button, Typography } from "@components/ui";
import { useColors } from "@config/colors";
import { Games } from "@games";
import styles, { scaler } from "@styles";
import { ImageBackground } from "expo-image";
import { useRouter } from "expo-router";
import { Pressable, ScrollView, Text, View } from "react-native";

export default function Index() {
  const navigate = useRouter();
  const colors = useColors().colors;

  const goToGame = (game: (typeof Games)[0]) => {
    navigate.push(`/game/${game.alias}`);
  };

  return (
    <ImageBackground style={[styles.flex_1]} source={require("../../assets/images/bg_main.webp")}>
      <AnimatedBubbles />
      <View style={[styles.flex_1, styles.items_center, styles.mt(scaler.height(10)), styles.gap_md, styles.mb(50)]}>
        <Text
          style={[
            styles.center,
            styles.color(colors.white),
            styles.font("bold"),
            styles.text_4xl,
            styles.shadow_sm,
            styles.p(16),
          ]}
        >
          Choose and Exciting Game
        </Text>

        <View style={[styles.flex_1, styles.w_full]}>
          <ScrollView
            horizontal
            pagingEnabled
            decelerationRate="fast"
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ flexGrow: 1 }}
          >
            {Games.map((el, index) => (
              <Pressable
                onPress={() => goToGame(el)}
                key={el.name}
                style={[styles.p(20), styles.w(scaler.width(90)), styles.flex_1, styles.gap_md, styles.overflow_hidden]}
              >
                <ImageBackground
                  source={el.config.logo}
                  style={[
                    styles.w_full,
                    styles.overflow_hidden,
                    styles.h(scaler.height(40)),
                    styles.bg("#fff3"),
                    styles.rounded_md,
                  ]}
                  contentFit="cover"
                />
                <View style={[styles.pr(20)]}>
                  <Typography variant="semibold" color="bg_action" size="text_2xl">
                    {el.name}
                  </Typography>
                  <Typography color="white" size="text_base">
                    {el.config.description}
                  </Typography>
                </View>
              </Pressable>
            ))}
          </ScrollView>

          <View style={[styles.p(20), styles.justify_center]}>
            <Button title="More Games" onPress={() => console.log("More Games")} />
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}
