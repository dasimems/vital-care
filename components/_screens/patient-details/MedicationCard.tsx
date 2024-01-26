import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import { blackColor, primaryColor } from "@/assets/colors";
import TextComponent from "@/components/_general/TextComponent";
import { ArrowDown2 } from "iconsax-react-native";
import { generalIconProps } from "@/utils/_variables";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming
} from "react-native-reanimated";
import { TabletIcon, Tablets } from "lucide-react-native";
import { getComponentLayoutProperties } from "@/utils/functions";

const MedicationCard: React.FC<{
  name: string;
  morning: number;
  afternoon: number;
  night: number;
}> = ({ name, morning, night, afternoon }) => {
  const height = useSharedValue(0);
  const [isOpened, setIsOpened] = useState(false);
  const [cardHeight, setCardHeight] = useState(0);

  const animatedStyle = useAnimatedStyle(() => ({
    height: height.value
  }));

  useEffect(() => {
    if (isOpened) {
      height.value = withTiming(cardHeight, {
        duration: 10,
        easing: Easing.inOut(Easing.linear)
      });
    } else {
      height.value = withTiming(0);
    }
  }, [isOpened, cardHeight]);
  return (
    <TouchableOpacity
      onPress={() => {
        setIsOpened((prevState) => !prevState);
      }}
      style={{
        borderRadius: 15,
        backgroundColor: blackColor.opacity30,
        paddingVertical: 10,
        paddingHorizontal: 20
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 20,
          justifyContent: "space-between",
          borderBottomColor: blackColor.opacity100,
          borderBottomWidth: isOpened ? 1 : 0,
          paddingBottom: isOpened ? 15 : 0,
          paddingTop: isOpened ? 5 : 0
        }}
      >
        <TextComponent>{name}</TextComponent>
        <ArrowDown2 {...generalIconProps} />
      </View>
      <Animated.View
        style={[
          {
            overflow: "hidden"
          },
          animatedStyle
        ]}
      >
        <View
          onLayout={(e) => {
            const { height } = getComponentLayoutProperties(e);
            setCardHeight(height);
          }}
          style={{
            flexDirection: "row",
            gap: 20,
            justifyContent: "space-between",
            paddingVertical: 10
          }}
        >
          <View
            style={{
              gap: 10,
              padding: 10,
              alignItems: "center"
            }}
          >
            <TextComponent>Morning</TextComponent>
            <View
              style={{
                flexDirection: "row",
                gap: 5
              }}
            >
              <Tablets {...generalIconProps} color={primaryColor.default} />
              <TextComponent>{morning}</TextComponent>
            </View>
          </View>
          <View
            style={{
              gap: 10,
              padding: 10,
              alignItems: "center"
            }}
          >
            <TextComponent>Afternoon</TextComponent>
            <View
              style={{
                flexDirection: "row",
                gap: 5
              }}
            >
              <Tablets {...generalIconProps} color={primaryColor.default} />
              <TextComponent>{afternoon}</TextComponent>
            </View>
          </View>
          <View
            style={{
              gap: 10,
              padding: 10,
              alignItems: "center"
            }}
          >
            <TextComponent>Night</TextComponent>
            <View
              style={{
                flexDirection: "row",
                gap: 5
              }}
            >
              <Tablets {...generalIconProps} color={primaryColor.default} />
              <TextComponent>{night}</TextComponent>
            </View>
          </View>
        </View>
      </Animated.View>
    </TouchableOpacity>
  );
};

export default MedicationCard;

const styles = StyleSheet.create({});
