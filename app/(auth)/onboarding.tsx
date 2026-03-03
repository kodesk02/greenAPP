import { VStack } from "@/components/ui/vstack";

import { Button, ButtonText } from "@/components/ui/button";

import { router } from "expo-router";

import { Ionicons } from "@expo/vector-icons";

import { useSafeAreaInsets } from "react-native-safe-area-context";

import React, { useState } from "react";

import { Dimensions, Image, Pressable, View, Text } from "react-native";

const { width } = Dimensions.get("window");

const slides = [
  {
    image: require("@/assets/images/plant1.png"),

    title: "Fresh\n Flowers,Delivered Fast ",

    subtitle: "Hand-picked blooms from local gardens straight to your door.",
  },

  {
    image: require("@/assets/images/plant2.png"),

    title: "Every\n Occasion Deserves Beauty ",

    subtitle:
      "Birthdays, anniversaries, or just because — we have the perfect arrangement.",
  },

  {
    image: require("@/assets/images/plant3.png"),

    title: "Order in Seconds ",

    subtitle: "Browse, pick, and checkout in just a few taps.",
  },
];

export default function Onboarding() {
  const [current, setCurrent] = useState(0);

  const isLast = current === slides.length - 1;

  const slide = slides[current];

  const insets = useSafeAreaInsets();

  return (
    <VStack className="flex-1 bg-white" style={{ paddingTop: insets.top }}>
      {current > 0 && (
        <Pressable
          onPress={() => setCurrent(current - 1)}
          style={{
            position: "absolute",

            top: insets.top + 12,

            left: 20,

            zIndex: 10,
          }}
        >
          <Ionicons name="arrow-back" size={28} color="#16a34a" />
        </Pressable>
      )}

      <Image
        source={slide.image}
        resizeMode="cover"
        style={{ width, height: width * 1.1 }}
      />

      <VStack className="pt-2 px-[16.3px] pb-10 justify-between" space="xl">
        <VStack space="xl">
         <Text
            className="text-center text-nowrap"
            style={{
              fontSize: 25,
              fontWeight: "500",
              lineHeight: 36,
              color: "#111827",
            }}
          >
                {slide.title}
              </Text>

          <Text className="text-gray-900/30 text-center px-10">
            {slide.subtitle}
          </Text>
        </VStack>

        {/* Dots */}

        <View
          style={{
            flexDirection: "row",
            alignSelf: "center",
            gap: 6,
            paddingHorizontal: 10,
            paddingVertical: 10,
          }}
        >
          {slides.map((_, i) => (
            <View
              key={i}
              style={{
                width: i === current ? 18 : 8,

                height: 8,

                borderRadius: 4,

                backgroundColor: i === current ? "#66BB6A" : "#d1d5db",
              }}
              className="bg-green-400"
            />
          ))}
        </View>

        <VStack space="sm">
          <Button
            size="lg"
            onPress={() =>
              isLast ? router.push("/(auth)/signup") : setCurrent(current + 1)
            }
            className="bg-green-400 rounded-3xl self-center min-w-full"
            style={{
              height: 50,

              shadowColor: "#16a34a",

              shadowOffset: { width: 0, height: 6 },

              shadowOpacity: 0.35,

              shadowRadius: 12,

              elevation: 8,
            }}
          >
            <ButtonText>{isLast ? "Get Started" : "Continue"}</ButtonText>
          </Button>

          {!isLast && (
            <Pressable
              onPress={() => router.push("/(auth)/signup")}
              className="py-2 pt-5 items-center"
            >
              <Text style={{ color: "#9ca3af", fontSize: 14 }}>Skip</Text>
            </Pressable>
          )}
        </VStack>
      </VStack>
    </VStack>
  );
}
