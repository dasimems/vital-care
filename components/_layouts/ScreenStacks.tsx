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
import Login from "@/screens/Login";
import Register from "@/screens/Register";
import Dashboard from "../../screens/Dashboard";
import Patients from "@/screens/Patients";
import Appointments from "../../screens/Appointments";
import Chats from "../../screens/Chats";
import ChatDetails from "@/screens/ChatDetails";
import PatientDetails from "@/screens/PatientDetails";
import AppointmentDetails from "@/screens/AppointmentDetails";
import Profile from "@/screens/Profile";
import ChangePassword from "@/screens/ChangePassword";
import ProfileInformation from "@/screens/ProfileInformation";
import AddDeviceId from "../../screens/AddDeviceId";
import Medications from "@/screens/Medications";
import Complaints from "@/screens/Complaints";
import MedicationDetails from "@/screens/MedicationDetails";
import useUser from "@/hooks/useUser";

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
  const { getUserDetails, userDetails } = useUser();
  const showAppScreens = useCallback(async () => {
    if (fontLoaded) {
      await getUserDetails();
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
        {!userDetails && (
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
            <Stack.Screen name={ScreenNames.Login.name} component={Login} />
            <Stack.Screen
              name={ScreenNames.Register.name}
              component={Register}
            />
          </Stack.Group>
        )}
        {userDetails && <>
        
        <Stack.Group
          screenOptions={{
            animation: "fade_from_bottom",
            headerShown: false,
            gestureEnabled: true
          }}
        >
          <Stack.Screen
            name={ScreenNames.Dashboard.name}
            component={Dashboard}
          />
          <Stack.Screen name={ScreenNames.Patients.name} component={Patients} />
          <Stack.Screen
            name={ScreenNames.Appointments.name}
            component={Appointments}
          />
          <Stack.Screen name={ScreenNames.Chats.name} component={Chats} />
        </Stack.Group>
        <Stack.Group
          screenOptions={{
            animation: "slide_from_right",
            headerShown: false,
            gestureEnabled: true
          }}
        >
          <Stack.Screen
            name={ScreenNames.ChatDetails.name}
            component={ChatDetails}
          />
          <Stack.Screen name={ScreenNames.Profile.name} component={Profile} />
          <Stack.Screen
            name={ScreenNames.MedicationDetails.name}
            component={MedicationDetails}
          />
          <Stack.Screen
            name={ScreenNames.Records.name}
            component={Medications}
          />
          <Stack.Screen
            name={ScreenNames.Complaints.name}
            component={Complaints}
          />
          <Stack.Screen
            name={ScreenNames.PatientDetails.name}
            component={PatientDetails}
          />
          <Stack.Screen
            name={ScreenNames.AppointmentDetails.name}
            component={AppointmentDetails}
          />
          <Stack.Screen
            name={ScreenNames.ChangePassword.name}
            component={ChangePassword}
          />
          <Stack.Screen
            name={ScreenNames.EditProfile.name}
            component={ProfileInformation}
          />
          <Stack.Screen
            name={ScreenNames.AddDeviceId.name}
            component={AddDeviceId}
          />
        </Stack.Group>
        </>}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default ScreenStacks;

const styles = StyleSheet.create({});
