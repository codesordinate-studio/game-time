import { Games } from "@games";
import { Page, Typography } from "@components/ui";
import { useRouter, useSearchParams } from "expo-router/build/hooks";
import { useColors } from "@config/colors";
import { Pressable, View } from "react-native";
import styles, { scaler } from "@styles";
import { ImageBackground } from "expo-image";

export default function GameAlias() {
  const navigate = useRouter();
  const theme = useColors().theme as "light" | "dark";
  const alias = useSearchParams().get("alias");
  const game = Games.find((g) => g.alias === alias);
  const colors = game?.config?.colors;
  const bg_background = game?.config?.colors?.[theme]?.bg_background;
  const bg_content = game?.config?.colors?.[theme]?.bg_content;

  const goBack = () => {
    navigate.back();
  };

  return (
    <Page backgroundColor={bg_background!}>
      <Pressable onPress={goBack} style={[styles.absolute, styles.top_5, styles.right_5, styles.p(10)]}>
        <Typography variant="bold" size="text_2xl" style={[styles.center, styles.color(colors?.primary!)]}>
          Exit
        </Typography>
      </Pressable>

      <View style={[styles.flex_1, styles.justify_center, styles.items_center, styles.p(20), styles.gap_lg]}>
        <ImageBackground
          source={game?.config.logo}
          style={[styles.w_full, styles.overflow_hidden, styles.h(scaler.height(20)), styles.rounded_md]}
          contentFit="contain"
        />

        <View>
          <Typography variant="bold" size="text_4xl" style={[styles.center, styles.color(colors?.primary!)]}>
            {game?.name}
          </Typography>
          <Typography variant="medium" style={[styles.center, styles.color(bg_content!)]}>
            {game?.config.description}
          </Typography>
        </View>

        <View style={[styles.mt(40), styles.justify_center, styles.items_center]}>
          <Pressable onPress={() => {}}>
            <Typography variant="bold" size="text_2xl" style={[styles.center, styles.color(colors?.primary!)]}>
              Start Game
            </Typography>
          </Pressable>
        </View>
      </View>
    </Page>
  );
}
