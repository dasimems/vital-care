import {
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle
} from "react-native";
import React, { useEffect, useState } from "react";
import TextComponent from "./TextComponent";
import { ScreenNamesType } from "@/utils/types";
import { useNavigation, useRoute } from "@react-navigation/native";
import { ScreenNames, allScreenNames, padding } from "@/utils/_variables";
import ProfileImage from "../_screens/_general/ProfileImage";
import { Poppins } from "@/assets/fonts";
import { blackColor } from "@/assets/colors";

const LoggedInHeader: React.FC<{
  headerText?: string;
  style?: ViewStyle;
  headerTextStyle?: TextStyle;
  headerContent?: React.ReactNode;
}> = ({ headerText, headerContent, style, headerTextStyle }) => {
  const [activeScreen, setActiveScreen] = useState<ScreenNamesType | null>(
      null
    ),
    { name } = useRoute(),
    { navigate } = useNavigation();

  useEffect(() => {
    if (name) {
      const screen = allScreenNames.find((scr) => scr.name === name);
      setActiveScreen(screen || null);
    }
  }, [name]);

  return (
    <View
      style={{
        alignItems: "center",
        gap: 20,
        justifyContent: "space-between",
        paddingVertical: 15,
        flexDirection: "row",
        paddingHorizontal: padding,
        borderBottomColor: blackColor.opacity50,
        borderBottomWidth: 1,
        ...style
      }}
    >
      {headerContent || (
        <TextComponent
          fontFamily={Poppins.semiBold.default}
          style={{
            ...headerTextStyle
          }}
        >
          {headerText || activeScreen?.label}
        </TextComponent>
      )}

      <TouchableOpacity
        onPress={() => {
          navigate(ScreenNames.Profile.name as never);
        }}
      >
        <ProfileImage size={40} />
      </TouchableOpacity>
    </View>
  );
};

export default LoggedInHeader;

const styles = StyleSheet.create({});
