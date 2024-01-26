import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Container from "@/components/_layouts/Container";
import InputField from "@/components/_general/form/InputField";
import { LoginImage } from "@/assets/images";
import TextComponent from "@/components/_general/TextComponent";
import { blackColor, primaryColor, whiteColor } from "@/assets/colors";
import {
  ScreenNames,
  padding,
  windowHeight,
  windowWidth
} from "@/utils/_variables";
import Button from "@/components/_general/Button";
import ScrollComponent from "@/components/_general/ScrollComponent";
import { useNavigation } from "@react-navigation/native";
import { Poppins } from "@/assets/fonts";

const Login = () => {
  const { navigate } = useNavigation();
  return (
    <Container safeView style={{}}>
      <ScrollComponent
        style={{
          gap: 20,
          paddingHorizontal: padding,
          paddingBottom: 30
        }}
      >
        <View
          style={{
            height: windowHeight * 0.5,
            gap: 20
          }}
        >
          <Image
            source={LoginImage}
            style={{
              width: "100%",
              flex: 1,
              maxHeight: 500,
              resizeMode: "contain",
              alignItems: "center",
              alignSelf: "center"
            }}
          />
          <TextComponent
            fontSize={windowWidth * 0.05}
            fontFamily={Poppins.semiBold.default}
          >
            Welcome
          </TextComponent>
          <TextComponent color={blackColor.opacity600}>
            Input your login credentials to continue
          </TextComponent>
        </View>
        <View
          style={{
            gap: 20
          }}
        >
          <InputField placeholder="Email Address" />
          <InputField secureTextEntry placeholder="Password" />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-end"
            }}
          >
            <TouchableOpacity>
              <TextComponent color={primaryColor.default}>
                Forgot password?
              </TextComponent>
            </TouchableOpacity>
          </View>
          <Button
            action={() => {
              navigate(ScreenNames.Dashboard.name as never);
            }}
            style={{
              alignItems: "center"
            }}
            type="primary"
          >
            <TextComponent textAlign="center" color={whiteColor.default}>
              Login
            </TextComponent>
          </Button>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              gap: 5,
              flexWrap: "wrap"
            }}
          >
            <TextComponent>Don't have an account?</TextComponent>
            <TouchableOpacity
              onPress={() => {
                navigate(ScreenNames.Register.name as never);
              }}
            >
              <TextComponent color={primaryColor.default}>
                Register?
              </TextComponent>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollComponent>
    </Container>
  );
};

export default Login;

const styles = StyleSheet.create({});
