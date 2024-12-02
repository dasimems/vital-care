import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { ScreenNamesType } from "@/utils/types";
import { useNavigation, useRoute } from "@react-navigation/native";
import TextComponent from "../TextComponent";
import { generalIconProps, roles } from "@/utils/_variables";
import { blackColor, primaryColor, whiteColor } from "@/assets/colors";
import useUser from "@/hooks/useUser";

const NavButton: React.FC<ScreenNamesType> = ({
  Icon,
  name,
  label,
  activeNames,
  hideIf,
  patientLabel
}) => {
  const { userDetails } = useUser();
  const { name: screenName } = useRoute();
  const { navigate } = useNavigation();
  const shouldHideButton =
    userDetails?.role && hideIf && hideIf?.includes(userDetails?.role);

  let isActive = screenName === name;
  const activeIconSize = 35;
  const isPatient = userDetails?.role === roles.patient?.toLowerCase();

  if (!isActive) {
    isActive = activeNames.includes(screenName);
  }
  if (shouldHideButton) {
    return null;
  }
  return (
    <TouchableOpacity
      onPress={() => {
        navigate(name as never);
      }}
      style={{
        alignItems: "center",
        gap: 6
      }}
    >
      {Icon && (
        <>
          {isActive ? (
            <Icon
              {...generalIconProps}
              size={activeIconSize}
              color={primaryColor.default}
              variant="Bold"
            />
          ) : (
            <Icon
              {...generalIconProps}
              color={blackColor.opacity600}
              variant="Linear"
            />
          )}
        </>
      )}
      <TextComponent
        color={isActive ? primaryColor.default : blackColor.opacity600}
        fontSize={12}
        textAlign="center"
        style={{}}
      >
        {isPatient ? patientLabel ?? label : label}
      </TextComponent>
    </TouchableOpacity>
  );
};

export default NavButton;

const styles = StyleSheet.create({});
