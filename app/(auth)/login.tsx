import { VStack } from "@/components/ui/vstack";
import { HStack } from "@/components/ui/hstack";
import { Input, InputField, InputSlot } from "@/components/ui/input";
import { Button, ButtonText } from "@/components/ui/button";
import { Link, router } from "expo-router";
import { Image, Pressable, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function LoginScreen() {
  return (
    <VStack
      className="flex-1 justify-center gap-5 px-6 bg-background-0"
      space="xl"
    >
      {/* Header */}
      <Image
        source={require("@/assets/images/plant7..png")}
        style={{ width: 120, height: 120, alignSelf: "center" }}
      />

      <VStack className="py-4 " space="xs">
        <Text className="text-3xl text-center font-semibold text-typography-900">
          Welcome back
        </Text>
        <Text className="text-gray-900/30 pt-2 text-center px-4">
          Enter your details to unlock a smooth and reliable delivery experience
          tailored just for you
        </Text>
      </VStack>

      {/* Form */}
      <VStack space="md">
        <Input
          variant="outline"
          size="lg"
          className="bg-gray-100 rounded-xl h-14"
        >
          <InputSlot>
            <Ionicons
              size={20}
              className="pl-4 items-center"
              color={"#808080"}
              as={Ionicons}
              name="mail-outline"
            />
          </InputSlot>
          <InputField
            className="text-sm"
            placeholder="Email"
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </Input>

        <Input
          variant="outline"
          size="lg"
          className="bg-gray-100 rounded-xl h-14"
        >
          <InputSlot>
            <Ionicons
              size={20}
              className="pl-4 items-center"
              color={"#808080"}
              as={Ionicons}
              name="eye-off"
            />
          </InputSlot>
          <InputField
            className="text-sm"
            placeholder="Password"
            secureTextEntry
          />
        </Input>

        <Pressable onPress={() => router.push("/")} className="self-end">
          <Text className="text-green-400 text-sm">Forgot password?</Text>
        </Pressable>
      </VStack>

      {/* Actions */}
      <VStack space="md">
        <Button
          className="bg-green-400 rounded-2xl self-center min-w-full"
          style={{
            height: 50,
          }}
          size="lg"
          onPress={() => router.push('/(tabs)')}
        >
          <ButtonText>Sign In</ButtonText>
        </Button>

        <HStack className="justify-center py-2" space="xs">
          <Text className="text-typography-500">
            Don&apos;t have an account?
          </Text>
          <Link href="/signup">
            <Text className="text-green-400 font-semibold">Sign Up</Text>
          </Link>
        </HStack>
      </VStack>
    </VStack>
  );
}
