import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Container from "@/components/_layouts/Container";
import { blackColor, primaryColor, whiteColor } from "@/assets/colors";
import { ScreenNames, padding, windowWidth } from "@/utils/_variables";
import { DoctorImageOne } from "@/assets/images";
import Button from "@/components/_general/Button";
import TextComponent from "@/components/_general/TextComponent";
import { Poppins } from "@/assets/fonts";
import { useNavigation } from "@react-navigation/native";

const GettingStarted = () => {
  const { navigate } = useNavigation();
  return (
    <Container
      safeView
      style={{
        paddingHorizontal: padding,
        paddingBottom: 20,
        gap: 20
      }}
    >
      <View
        style={{
          flex: 1,
          alignItems: "center",
          gap: 20
        }}
      >
        <Image
          source={DoctorImageOne}
          style={{
            flex: 1,
            alignItems: "center",
            resizeMode: "contain"
          }}
        />
        <TextComponent
          fontSize={windowWidth * 0.1}
          fontFamily={Poppins.semiBold.default}
        >
          Track your patient's health
        </TextComponent>
        <TextComponent color={blackColor.opacity600}>
          Get detailed health status of your patient from time to time
        </TextComponent>
      </View>
      <Button
        action={() => {
          navigate(ScreenNames.Login.name as never);
        }}
        type="primary"
        style={{
          borderRadius: 9000,
          alignItems: "center"
        }}
      >
        <TextComponent color={whiteColor.default}>Get Started</TextComponent>
      </Button>
    </Container>
  );
};

export default GettingStarted;

const styles = StyleSheet.create({});
