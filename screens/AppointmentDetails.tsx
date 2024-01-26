import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import LoggedInContainer from "@/components/_layouts/LoggedInContainer";
import { Add, Briefcase } from "iconsax-react-native";
import { generalIconProps, padding, windowWidth } from "@/utils/_variables";
import { blackColor, primaryColor, redColor } from "@/assets/colors";
import TextComponent from "@/components/_general/TextComponent";
import { Poppins } from "@/assets/fonts";
import Button from "@/components/_general/Button";
import { whiteColor } from "../assets/colors";
import ScrollComponent from "@/components/_general/ScrollComponent";
import ProfileImage from "@/components/_screens/_general/ProfileImage";

const AppointmentDetails = () => {
  return (
    <LoggedInContainer
      hideHeaderText
      hideNav
      unScrollable
      contentContainerStyle={{
        paddingHorizontal: 0,
        paddingVertical: 0,
        gap: 30,
        flex: 1
      }}
    >
      <View
        style={{
          alignItems: "center",
          gap: 5,
          paddingHorizontal: padding,
          paddingBottom: 20
        }}
      >
        <Briefcase
          {...generalIconProps}
          variant="Bold"
          size={windowWidth * 0.13}
          color={primaryColor.default}
        />
        <TextComponent textAlign="center" fontFamily={Poppins.semiBold.default}>
          Medication Observation
        </TextComponent>

        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Add {...generalIconProps} color={primaryColor.default} />
          <TextComponent textAlign="center" color={primaryColor.default}>
            Add Patients
          </TextComponent>
        </TouchableOpacity>
        <TextComponent
          textAlign="center"
          fontSize={13}
          color={blackColor.opacity600}
        >
          8pm - 9pm 3 Aug, 2023
        </TextComponent>
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: blackColor.opacity30,
          borderTopLeftRadius: 50,
          borderTopRightRadius: 50,
          borderBottomLeftRadius: 15,
          borderBottomRightRadius: 15,
          paddingVertical: 20
        }}
      >
        <ScrollComponent
          style={{
            gap: 20,
            paddingHorizontal: padding
          }}
        >
          {new Array(10).fill(0).map((_, index) => (
            <TouchableOpacity
              key={index}
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 20
              }}
            >
              <ProfileImage />
              <View
                style={{
                  gap: 3
                }}
              >
                <TextComponent fontFamily={Poppins.semiBold.default}>
                  Oluwaseyi Timilehin
                </TextComponent>
                <TextComponent color={blackColor.opacity600}>
                  Age: 25
                </TextComponent>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollComponent>
      </View>
      <View
        style={{
          paddingHorizontal: padding,
          flexDirection: "row",
          gap: 20
        }}
      >
        <Button
          style={{
            flex: 1 / 2,
            backgroundColor: redColor.default
          }}
        >
          <TextComponent color={whiteColor.default} textAlign="center">
            Cancel
          </TextComponent>
        </Button>
        <Button
          type="primary"
          style={{
            flex: 1 / 2
          }}
        >
          <TextComponent color={whiteColor.default} textAlign="center">
            Start
          </TextComponent>
        </Button>
      </View>
    </LoggedInContainer>
  );
};

export default AppointmentDetails;

const styles = StyleSheet.create({});
