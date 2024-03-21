import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import {
  blackColor,
  orangeColor,
  primaryColor,
  redColor
} from "@/assets/colors";
import TextComponent from "@/components/_general/TextComponent";
import { ArrowDown2, ArrowRight2, ArrowUp2, Clock } from "iconsax-react-native";
import { generalIconProps, ScreenNames } from "@/utils/_variables";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming
} from "react-native-reanimated";
import { Check, Tablets, X } from "lucide-react-native";
import { getComponentLayoutProperties } from "@/utils/functions";
import { MedicationStatusType } from "@/utils/types";
import Checkbox from "@/components/_general/form/Checkbox";
import { Poppins } from "@/assets/fonts";
import { useNavigation } from "@react-navigation/native";
import MedicationDetails from '@/screens/MedicationDetails';

const MedicationCard: React.FC<{
  name: string;
  morning: number;
  afternoon: number;
  night: number;
  status?: MedicationStatusType;
  rightContent?: React.ReactNode;
}> = ({ name, morning, night, afternoon, status, rightContent }) => {
  const {navigate} = useNavigation();
  const height = useSharedValue(0);
  const [isOpened, setIsOpened] = useState(false);
  const [cardHeight, setCardHeight] = useState(0);

  const animatedStyle = useAnimatedStyle(() => ({
    height: status ? "auto" : height.value
  }));

  useEffect(() => {
    if (status || rightContent) {
      setIsOpened(true);
    }
  }, [status, rightContent]);

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
        if (status) {
          navigate(ScreenNames.MedicationDetails.name as never)
        } else if (!status && !rightContent) {
          setIsOpened((prevState) => !prevState);
        }
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
        <TextComponent fontFamily={Poppins.semiBold.default}>
          {name}
        </TextComponent>

        {rightContent ||
          (status ? (
            <>
              {status.toLowerCase() === "ongoing" && (
                <Clock {...generalIconProps} color={orangeColor.default} />
              )}
              {status.toLowerCase() === "completed" && (
                <Check {...generalIconProps} color={primaryColor.default} />
              )}
              {(status.toLowerCase() === "canceled" ||
                status.toLowerCase() === "cancelled") && (
                <X {...generalIconProps} color={redColor.default} />
              )}
            </>
          ) : isOpened ? (
            <ArrowUp2 {...generalIconProps} />
          ) : (
            <ArrowDown2 {...generalIconProps} />
          ))}
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
              ...styles.timeStyle
            }}
          >
            <TextComponent>Morning</TextComponent>
            <View style={{ ...styles.timeInnerContainerStyle }}>
              <Tablets {...generalIconProps} color={primaryColor.default} />
              <TextComponent>{morning}</TextComponent>
            </View>
            {status && status.toLowerCase() === "ongoing" && (
              <Checkbox onChange={() => {}} checked={true} size={40} />
            )}
          </View>
          <View
            style={{
              ...styles.timeStyle
            }}
          >
            <TextComponent>Afternoon</TextComponent>
            <View style={{ ...styles.timeInnerContainerStyle }}>
              <Tablets {...generalIconProps} color={primaryColor.default} />
              <TextComponent>{afternoon}</TextComponent>
            </View>
            {status && status.toLowerCase() === "ongoing" && (
              <Checkbox onChange={() => {}} checked={true} size={40} />
            )}
          </View>
          <View
            style={{
              ...styles.timeStyle
            }}
          >
            <TextComponent>Night</TextComponent>
            <View style={{ ...styles.timeInnerContainerStyle }}>
              <Tablets {...generalIconProps} color={primaryColor.default} />
              <TextComponent>{night}</TextComponent>
            </View>
            {status && status.toLowerCase() === "ongoing" && (
              <Checkbox onChange={() => {}} checked={true} size={40} />
            )}
          </View>
        </View>
      </Animated.View>
      {status && (
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 20,
            justifyContent: "space-between",
            paddingTop: 10,
            borderTopWidth: 1,
            borderColor: blackColor.opacity100
          }}
        >
          <TextComponent
            style={{
              opacity: 0.6
            }}
          >
            View Stats
          </TextComponent>

          <ArrowRight2 {...generalIconProps} color={blackColor.opacity600} />
        </View>
      )}
    </TouchableOpacity>
  );
};

export default MedicationCard;

const styles = StyleSheet.create({
  timeStyle: {
    gap: 10,
    padding: 10,
    alignItems: "center"
  },
  timeInnerContainerStyle: {
    flexDirection: "row",
    gap: 5
  }
});
