import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle
} from "react-native";
import React from "react";
import ProfileImage from "../_general/ProfileImage";
import TextComponent from "@/components/_general/TextComponent";
import { blackColor } from "@/assets/colors";
import { useNavigation } from "@react-navigation/native";
import { ScreenNames, generalIconProps } from "@/utils/_variables";
import { ArrowLeft2 } from "iconsax-react-native";

const ChatCard: React.FC<{ style?: ViewStyle }> = ({ style }) => {
  const { navigate } = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigate(ScreenNames.ChatDetails.name as never);
      }}
      style={{
        flexDirection: "row",
        alignItems: "center",
        gap: 15,
        paddingVertical: 10,
        paddingTop: 20,
        ...style
      }}
    >
      <ProfileImage />
      <View
        style={{
          gap: 3,
          flex: 1
        }}
      >
        <TextComponent>Olorunbolanle Adegboyega</TextComponent>
        <TextComponent color={blackColor.opacity600}>
          Hi Mr Gboyega, have you taken your...
        </TextComponent>
      </View>
      <TextComponent color={blackColor.opacity600}>3:48pm</TextComponent>
    </TouchableOpacity>
  );
};

export default ChatCard;

const styles = StyleSheet.create({});
