import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import LoggedInContainer from "@/components/_layouts/LoggedInContainer";
import {
  blackColor,
  primaryColor,
  redColor,
  whiteColor
} from "@/assets/colors";
import { AvatarImage } from "@/assets/images";
import TextComponent from "@/components/_general/TextComponent";
import { Poppins } from "@/assets/fonts";
import {
  ActivityIcon,
  TabletsIcon,
  ThermometerIcon
} from "lucide-react-native";
import {
  ScreenNames,
  generalIconProps,
  profileRoutes
} from "@/utils/_variables";
import { ArrowRight2, Edit2, Logout } from "iconsax-react-native";
import { useNavigation } from "@react-navigation/native";
import Button from "@/components/_general/Button";
import ScrollComponent from "@/components/_general/ScrollComponent";

const Profile = () => {
  const paddingVertical = 10,
    paddingHorizontal = 15,
    { navigate } = useNavigation();
  return (
    <LoggedInContainer
      hideNav
      unScrollable
      contentContainerStyle={{
        gap: 20,
        flex: 1
      }}
    >
      <View
        style={{
          flex: 1
        }}
      >
        <ScrollComponent
          style={{
            gap: 20
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "stretch",
              gap: 20,
              //   backgroundColor: blackColor.opacity50,
              paddingVertical,
              paddingHorizontal,
              borderRadius: 15
            }}
          >
            <Image
              source={AvatarImage}
              style={{
                width: 70,
                height: 90,
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
              <View>
                <TextComponent fontFamily={Poppins.semiBold.default}>
                  Oluwaseyi Timilehin
                </TextComponent>
                <TextComponent fontSize={12} color={blackColor.opacity600}>
                  isaacseun63@gmail.com
                </TextComponent>
                <TextComponent
                  fontFamily={Poppins.semiBold.default}
                  fontSize={12}
                  color={blackColor.opacity600}
                >
                  #12KIRY56
                </TextComponent>
              </View>

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
                  <ActivityIcon
                    {...generalIconProps}
                    color={primaryColor.default}
                  />
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
                  <TabletsIcon
                    {...generalIconProps}
                    color={primaryColor.default}
                  />
                  <TextComponent>1</TextComponent>
                </View>
              </View>
            </View>

            <View
              style={{
                justifyContent: "center"
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  navigate(ScreenNames.EditProfile.name as never);
                }}
              >
                <Edit2 {...generalIconProps} size={25} />
              </TouchableOpacity>
            </View>
          </View>
          {profileRoutes.map(({ name, label }, index) => (
            <TouchableOpacity
              key={index}
              style={{
                flexDirection: "row",
                alignItems: "center",
                paddingVertical: 15,
                justifyContent: "space-between"
              }}
              onPress={() => {
                navigate(name as never);
              }}
            >
              <TextComponent
                style={{
                  flex: 1
                }}
              >
                {label}
              </TextComponent>
              <ArrowRight2 {...generalIconProps} />
            </TouchableOpacity>
          ))}
        </ScrollComponent>
      </View>
      {/* <Button
        style={{
          backgroundColor: redColor.default
        }}
      >
        <TextComponent color={whiteColor.default} textAlign="center">
          Log out
        </TextComponent>
      </Button> */}
      <TouchableOpacity
        style={{
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "center",
          gap: 5
        }}
      >
        <Logout {...generalIconProps} color={redColor.default} />
        <TextComponent color={redColor.default}>Log out</TextComponent>
      </TouchableOpacity>
    </LoggedInContainer>
  );
};

export default Profile;

const styles = StyleSheet.create({});
