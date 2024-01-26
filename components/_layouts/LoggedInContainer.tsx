import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle
} from "react-native";
import React, { useEffect, useState } from "react";
import Container from "./Container";
import ScrollComponent from "../_general/ScrollComponent";
import Nav from "../_general/nav/Nav";
import {
  allScreenNames,
  generalIconProps,
  nav,
  padding
} from "@/utils/_variables";
import { ArrowLeft2 } from "iconsax-react-native";
import { whiteColor } from "@/assets/colors";
import TextComponent from "../_general/TextComponent";
import { useNavigation, useRoute } from "@react-navigation/native";
import { ScreenNamesType } from "@/utils/types";
import { Poppins } from "@/assets/fonts";

const Header: React.FC<{
  headerText: string;
  hideBackArrow?: boolean;
  hideHeaderText?: boolean;
}> = ({ headerText, hideBackArrow, hideHeaderText }) => {
  const { goBack } = useNavigation();
  return (
    <View
      style={{
        paddingHorizontal: padding,
        paddingVertical: 20,
        alignItems: "center",
        gap: 20,
        flexDirection: "row"
      }}
    >
      {!hideBackArrow && (
        <TouchableOpacity onPress={goBack}>
          <ArrowLeft2 {...generalIconProps} size={30} />
        </TouchableOpacity>
      )}

      {!hideHeaderText && (
        <TextComponent
          fontFamily={Poppins.semiBold.default}
          textAlign="center"
          style={{
            flex: 1
          }}
        >
          {headerText || "Screen"}
        </TextComponent>
      )}
      {!hideBackArrow && <View></View>}
    </View>
  );
};

const LoggedInContainer: React.FC<{
  hideHeader?: boolean;
  hideNav?: boolean;
  header?: React.ReactNode;
  headerText?: string;
  hideBackArrow?: boolean;
  style?: ViewStyle;
  contentContainerStyle?: ViewStyle;
  children: React.ReactNode;
  unScrollable?: boolean;
  unSafeView?: boolean;
  hideHeaderText?: boolean;
}> = ({
  hideHeader,
  hideNav,
  header,
  headerText,
  hideBackArrow,
  style,
  contentContainerStyle,
  children,
  unScrollable,
  unSafeView,
  hideHeaderText
}) => {
  const [activeScreen, setActiveScreen] = useState<ScreenNamesType | null>(
      null
    ),
    { name } = useRoute();

  useEffect(() => {
    if (name) {
      const screen = allScreenNames.find((scr) => scr.name === name);
      setActiveScreen(screen || null);
    }
  }, [name]);
  return (
    <Container
      safeView={!unSafeView}
      style={{
        ...style
      }}
    >
      {header
        ? header
        : !hideHeader && (
            <Header
              hideHeaderText={hideHeaderText}
              headerText={headerText || activeScreen?.label || "Screen"}
              hideBackArrow={hideBackArrow}
            />
          )}
      <View
        style={{
          flex: 1
        }}
      >
        {unScrollable ? (
          <View
            style={{
              ...styles.contentContainerStyle,
              ...contentContainerStyle
            }}
          >
            {children}
          </View>
        ) : (
          <ScrollComponent
            style={{
              minHeight: 0,
              ...styles.contentContainerStyle,
              ...contentContainerStyle
            }}
          >
            {children}
          </ScrollComponent>
        )}
      </View>

      {!hideNav && <Nav />}
    </Container>
  );
};

export default LoggedInContainer;

const styles = StyleSheet.create({
  contentContainerStyle: {
    paddingHorizontal: padding,
    paddingVertical: 20
  }
});
