import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { blackColor, primaryColor, whiteColor } from "@/assets/colors";
import TextComponent from "@/components/_general/TextComponent";
import { Poppins } from "@/assets/fonts";
import {
  ActivityIcon,
  TabletsIcon,
  ThermometerIcon
} from "lucide-react-native";
import { ScreenNames, generalIconProps } from "@/utils/_variables";
import { AvatarImage } from "@/assets/images";
import { Calendar, Message } from "iconsax-react-native";
import { useNavigation } from "@react-navigation/native";

const PatientCard = () => {
  const paddingVertical = 10,
    paddingHorizontal = 15,
    { navigate } = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigate(ScreenNames.PatientDetails.name as never);
      }}
      style={{
        flexDirection: "row",
        alignItems: "stretch",
        gap: 20,
        backgroundColor: blackColor.opacity50,
        paddingVertical,
        paddingHorizontal,
        borderRadius: 15
      }}
    >
      <Image
        source={AvatarImage}
        style={{
          width: 50,
          height: 70,
          resizeMode: "cover",
          backgroundColor: blackColor.opacity500,
          borderRadius: 15
        }}
      />

      <View
        style={{
          justifyContent: "space-between",
          flex: 1
        }}
      >
        <TextComponent fontFamily={Poppins.semiBold.default}>
          Oluwaseyi Timilehin
        </TextComponent>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 10
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 5
            }}
          >
            <ActivityIcon {...generalIconProps} color={primaryColor.default} />
            <TextComponent>56</TextComponent>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 5
            }}
          >
            <ThermometerIcon
              {...generalIconProps}
              color={primaryColor.default}
            />
            <TextComponent>24.4°C</TextComponent>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 5
            }}
          >
            <TabletsIcon {...generalIconProps} color={primaryColor.default} />
            <TextComponent>1</TextComponent>
          </View>
        </View>
      </View>

      <View
        style={{
          justifyContent: "flex-end"
        }}
      >
        <TouchableOpacity>
          <Message {...generalIconProps} size={25} />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: primaryColor.default,
            width: 30,
            height: 30,
            borderTopRightRadius: 15,
            alignItems: "center",
            justifyContent: "center",
            borderBottomLeftRadius: 10,
            position: "absolute",
            top: -paddingVertical,
            right: -paddingHorizontal
          }}
        >
          <Calendar
            {...generalIconProps}
            size={20}
            color={whiteColor.default}
            variant="Bold"
          />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default PatientCard;

const styles = StyleSheet.create({});
