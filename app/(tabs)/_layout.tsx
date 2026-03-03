import { Tabs } from "expo-router";
import React from "react";
import { HapticTab } from "@/components/haptic-tab";
import { Ionicons } from "@expo/vector-icons";
import { View, Pressable, Dimensions } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Svg, { Path } from "react-native-svg";

const { width: SCREEN_WIDTH } = Dimensions.get("window");
const TAB_WIDTH = SCREEN_WIDTH;
const TAB_COUNT = 4;
const SEGMENT = SCREEN_WIDTH / TAB_COUNT;
const BUBBLE_R = 26;
const BAR_H = 64;

type IoniconName = React.ComponentProps<typeof Ionicons>["name"];

const tabs: { name: string; icon: IoniconName }[] = [
  { name: "index", icon: "home" },
  { name: "search", icon: "search" },
  { name: "favorite", icon: "heart" },
  { name: "profile", icon: "person" },
];

function buildPath(activeIndex: number): string {
  const cx = SEGMENT * activeIndex + SEGMENT / 2;
  const r = BUBBLE_R + 8;
  const curve = 16;
  return `
    M 0 0
    L ${cx - r - curve} 0
    Q ${cx - r} 0 ${cx - r} ${curve}
    A ${r} ${r} 0 0 0 ${cx + r} ${curve}
    Q ${cx + r} 0 ${cx + r + curve} 0
    L ${TAB_WIDTH} 0
    L ${TAB_WIDTH} ${BAR_H}
    L 0 ${BAR_H}
    Z
  `;
}

function CustomTabBar({ state, navigation }: any) {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        height: BAR_H + BUBBLE_R,
        shadowColor: "#16a34a",
        shadowOffset: { width: 0, height: -4 },
        shadowOpacity: 0.15,
        shadowRadius: 12,
        elevation: 10,
      }}
    >
      <Svg
        width={SCREEN_WIDTH}
        height={BAR_H}
        style={{ position: "absolute", bottom: 0 }}
      >
        <Path d={buildPath(state.index)} fill="#4ade80" />
      </Svg>

      <View
        style={{
          position: "absolute",
          bottom: 0,
          width: SCREEN_WIDTH,
          height: BAR_H,
          flexDirection: "row",
        }}
      >
        {tabs.map((tab, i) => {
          const focused = state.index === i;

          return (
            <Pressable
              key={tab.name}
              onPress={() => navigation.navigate(tab.name)}
              style={{
                width: SEGMENT,
                height: BAR_H,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {focused ? (
                <View
                  style={{
                    width: BUBBLE_R * 2,
                    height: BUBBLE_R * 2,
                    borderRadius: BUBBLE_R,
                    backgroundColor: "#fff",
                    borderWidth: 4,
                    borderColor: "#fff",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: BUBBLE_R + 8,
                    shadowColor: "#16a34a",
                    shadowOffset: { width: 0, height: 4 },
                    shadowOpacity: 0.4,
                    shadowRadius: 8,
                    elevation: 12,
                  }}
                >
                  <Ionicons name={tab.icon} size={22} color="#4ade80" />
                </View>
              ) : (
                <Ionicons
                  name={tab.icon}
                  size={22}
                  color="rgba(255,255,255,0.65)"
                />
              )}
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{ headerShown: false }}
      tabBar={(props) => <CustomTabBar {...props} />}
    >
      <Tabs.Screen name="index" options={{ tabBarButton: HapticTab }} />
      <Tabs.Screen name="search" options={{ tabBarButton: HapticTab }} />
      <Tabs.Screen name="favorite" options={{ tabBarButton: HapticTab }} />
      <Tabs.Screen name="profile" options={{ tabBarButton: HapticTab }} />
    </Tabs>
  );
}
