import { StyleSheet, Text, View } from "react-native";
import React, { useCallback, useEffect } from "react";
import { ScreenStackType } from "@/utils/types";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useActionContext } from "@/context";
import { ScreenNames } from "@/utils/_variables";
import { whiteColor } from "@/assets/colors";
import GettingStarted from "@/screens/GettingStarted";

const Stack = createNativeStackNavigator<any>();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: whiteColor.default
  }
};

const ScreenStacks: React.FC<ScreenStackType> = ({ fontLoaded }) => {
  const { getColorScheme } = useActionContext();
  const showAppScreens = useCallback(async () => {
    if (fontLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontLoaded]);

  useEffect(() => {
    getColorScheme();
  }, []);

  useEffect(() => {
    if (fontLoaded) {
      showAppScreens();
    }
  }, [fontLoaded]);

  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator initialRouteName={ScreenNames.GettingStarted.name}>
        {/*screens that shows when user isn't loggedin yet */}
        <Stack.Group
          screenOptions={{
            animation: "slide_from_right",
            headerShown: false,
            gestureEnabled: true
          }}
        >
          <Stack.Screen
            name={ScreenNames.GettingStarted.name}
            component={GettingStarted}
          />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default ScreenStacks;

const styles = StyleSheet.create({});
