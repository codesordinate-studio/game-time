import { Button, Page, Typography } from "@components/ui";
import { useColors } from "@config/colors";
import { Games } from "@games";
import styles, { scaler } from "@styles";
import { ImageBackground } from "expo-image";
import { useRouter } from "expo-router";
import { useState } from "react";
import { FlatList, Pressable, View } from "react-native";

const TABS = Games.reduce(
  (acc, game) => {
    if (!acc.includes(game.category)) acc.push(game.category);
    return acc;
  },
  ["All"],
);

export default function Index() {
  const navigate = useRouter();
  const colors = useColors().colors;
  const [activeTab, setActiveTab] = useState("All");
  const [filteredGames, setFilteredGames] = useState(Games);

  const goToGame = (game: (typeof Games)[0]) => {
    navigate.push(`/game/${game.alias}`);
  };

  const getFilteredGames = (tab: string) => {
    setActiveTab(tab);
    if (tab === "All") {
      setFilteredGames(Games);
      return;
    }

    const filtered = Games.filter((g) => g.category === tab);
    setFilteredGames(filtered);
  };

  return (
    <Page>
      <View style={[styles.flex_1, styles.mt(scaler.height(5)), styles.gap_md, styles.mt(scaler.height(5))]}>
        <View style={[styles.row, styles.items_center, styles.gap_sm]}>
          <Typography
            style={[
              ,
              styles.center,
              styles.color(colors.white),
              styles.font("bold"),
              styles.text_4xl,
              styles.shadow_sm,
            ]}
          >
            Games
          </Typography>
        </View>

        {/* Tabs */}
        <View style={[styles.row, styles.items_center, styles.gap_sm]}>
          {TABS.map((tab) => {
            const isActive = activeTab === tab;
            return (
              <View key={tab} style={[styles.flex_1]}>
                <Button
                  title={tab}
                  size="text_md"
                  isFullWidth
                  variant={isActive ? "active" : "inactive"}
                  onPress={() => getFilteredGames(tab)}
                />
              </View>
            );
          })}
        </View>

        {/* Grid */}
        <FlatList
          data={filteredGames}
          numColumns={2}
          keyExtractor={(item) => item.alias}
          contentContainerStyle={{ gap: 15, paddingHorizontal: 0, paddingBottom: 50 }}
          columnWrapperStyle={{ gap: 15 }}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <Pressable
              onPress={() => goToGame(item)}
              style={[
                styles.flex_1,
                styles.gap_sm,
                styles.bg("#fff2"),
                styles.rounded(20),
                styles.p(10),
                styles.overflow_hidden,
              ]}
            >
              <ImageBackground
                source={item.logo}
                style={[styles.w_full, styles.h(scaler.height(15)), styles.overflow_hidden]}
                imageStyle={{ borderRadius: 10 }} // Ensure image itself is rounded if overflow hidden doesn't catch it on some versions
                contentFit="cover"
                contentPosition="center"
              />
              <View style={[styles.px(10), styles.py(2), styles.pb(10)]}>
                <Typography variant="medium" color="white" size="text_base">
                  {item.name}
                </Typography>
              </View>
            </Pressable>
          )}
        />
      </View>
    </Page>
  );
}
