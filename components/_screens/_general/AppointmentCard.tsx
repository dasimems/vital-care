import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle
} from "react-native";
import React from "react";
import { blackColor, primaryColor, whiteColor } from "@/assets/colors";
import { AvatarImage } from "@/assets/images";
import { widthHalf, generalIconProps, ScreenNames } from "@/utils/_variables";
import TextComponent from "@/components/_general/TextComponent";
import { Poppins } from "@/assets/fonts";
import { Calendar2 } from "iconsax-react-native";
import { Clock4Icon } from "lucide-react-native";
import { useNavigation } from "@react-navigation/native";

const AppointmentCard: React.FC<{ style?: ViewStyle }> = ({ style }) => {
  const padding = 10;
  const { navigate } = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigate(ScreenNames.AppointmentDetails.name as never);
      }}
      style={{
        padding,
        gap: 10,
        height: widthHalf + 70,
        backgroundColor: blackColor.opacity10,
        borderRadius: 15,
        ...style
      }}
    >
      <Image
        style={{
          width: "100%",
          flex: 1,
          resizeMode: "cover",
          backgroundColor: blackColor.opacity500,
          borderRadius: 15
        }}
        source={AvatarImage}
      />
      <View
        style={{
          backgroundColor: primaryColor.default,
          padding: 5,
          paddingHorizontal: 10,
          position: "absolute",
          top: padding + 10,
          right: padding + 10,
          borderRadius: 9000,
          flexDirection: "row",
          alignItems: "center",
          gap: 3
        }}
      >
        <Calendar2 {...generalIconProps} size={11} color={whiteColor.default} />
        <TextComponent fontSize={11} color={whiteColor.default}>
          3rd Jan 2023
        </TextComponent>
      </View>
      <View
        style={{
          gap: 3
        }}
      >
        <TextComponent fontFamily={Poppins.semiBold.default}>
          Oluwaeyi Timilehin
        </TextComponent>
        <TextComponent color={blackColor.opacity600}>Eye Care</TextComponent>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 5
          }}
        >
          <Clock4Icon
            {...generalIconProps}
            size={15}
            color={primaryColor.default}
          />
          <TextComponent fontSize={12}>8:00 AM - 9:00 AM</TextComponent>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default AppointmentCard;

const styles = StyleSheet.create({});
