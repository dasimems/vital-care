import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import Container from "@/components/_layouts/Container";
import ScrollComponent from "@/components/_general/ScrollComponent";
import { generalIconProps, padding, windowWidth } from "@/utils/_variables";
import { Poppins } from "@/assets/fonts";
import { blackColor, primaryColor, whiteColor } from "@/assets/colors";
import TextComponent from "@/components/_general/TextComponent";
import InputField from "@/components/_general/form/InputField";
import Button from "@/components/_general/Button";
import { ArrowLeft2 } from "iconsax-react-native";
import { useNavigation } from "@react-navigation/native";

const userTypes = ["Patient", "Doctor"];

const Register = () => {
  const [activeUserType, setActiveUserType] = useState(userTypes[0]);
  const { goBack } = useNavigation();
  return (
    <Container safeView>
      <ScrollComponent
        style={{
          gap: 20,
          paddingHorizontal: padding,
          paddingVertical: 30
        }}
      >
        <View
          style={{
            flex: 1,
            gap: 20
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 20
            }}
          >
            <TouchableOpacity onPress={goBack}>
              <ArrowLeft2 {...generalIconProps} size={30} />
            </TouchableOpacity>
            <TextComponent
              fontSize={windowWidth * 0.05}
              fontFamily={Poppins.semiBold.default}
            >
              Sign up
            </TextComponent>
          </View>
          <TextComponent color={blackColor.opacity600}>
            Please fill in your credentials to continue
          </TextComponent>
          <InputField placeholder="Full Name" />
          <InputField placeholder="Email Address" />
          <TextComponent>I am a</TextComponent>
          <View
            style={{
              flexDirection: "row"
            }}
          >
            {userTypes.map((user, index) => (
              <TouchableOpacity
                onPress={() => {
                  setActiveUserType(user);
                }}
                key={index}
                style={{
                  paddingVertical: 20,
                  paddingHorizontal: 15,
                  alignItems: "center",
                  borderWidth: 1,
                  borderColor: blackColor.opacity100,
                  flex: 1 / userTypes.length,
                  backgroundColor:
                    activeUserType === user
                      ? primaryColor.default
                      : "transparent"
                }}
              >
                <TextComponent
                  color={
                    activeUserType === user ? whiteColor.default : undefined
                  }
                >
                  {user}
                </TextComponent>
              </TouchableOpacity>
            ))}
          </View>
          <InputField secureTextEntry placeholder="Password" />
          <InputField secureTextEntry placeholder="Repeat password" />
        </View>
        <Button
          type="primary"
          style={{
            alignItems: "center"
          }}
        >
          <TextComponent textAlign="center" color={whiteColor.default}>
            Register
          </TextComponent>
        </Button>
      </ScrollComponent>
    </Container>
  );
};

export default Register;

const styles = StyleSheet.create({});
