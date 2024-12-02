import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useCallback, useState } from "react";
import Container from "@/components/_layouts/Container";
import InputField from "@/components/_general/form/InputField";
import { LoginImage } from "@/assets/images";
import TextComponent from "@/components/_general/TextComponent";
import {
  blackColor,
  primaryColor,
  redColor,
  whiteColor
} from "@/assets/colors";
import {
  ScreenNames,
  databaseKeys,
  padding,
  windowHeight,
  windowWidth
} from "@/utils/_variables";
import Button from "@/components/_general/Button";
import ScrollComponent from "@/components/_general/ScrollComponent";
import { useNavigation } from "@react-navigation/native";
import { Poppins } from "@/assets/fonts";
import { Controller, useForm } from "react-hook-form";
import { emailRegExp, passwordRegExp } from "@/utils/regex";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, fireStoreDb } from "@/api/firebase";
import { showToast } from "@/utils/functions";
import { useUserContext } from "@/context";
import { doc, getDoc } from "firebase/firestore";
import { UserDetailsType } from "@/api/index.d";

type LoginBodyType = {
  email: string;
  password: string;
};

const defaultValues: LoginBodyType = {
  email: "",
  password: ""
};

const Login = () => {
  const { navigate } = useNavigation();
  const { setUserDetails } = useUserContext();
  const [error, setError] = useState<string | null>(null);
  const {
    control,
    handleSubmit,
    formState: { isSubmitting }
  } = useForm({
    defaultValues
  });
  const loginUser = useCallback(async (data: LoginBodyType) => {
    const { email, password } = data;
    setError(null);
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      const userRef = doc(fireStoreDb, databaseKeys.users, user.uid);
      const docSnap = await getDoc(userRef);

      if (docSnap.exists()) {
        const data = docSnap.data() as UserDetailsType;
        setUserDetails(data);
        showToast("Login successful");
      } else {
        user.delete();
        throw {
          message: "User not found!"
        };
      }
    } catch (error: any) {
      showToast(error?.message ?? "Error encountered whilst login in.");
      setError(error?.message ?? "Error encountered whilst login in.");
    }
  }, []);
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
          {error && (
            <View
              style={{
                backgroundColor: redColor.opacity100,
                padding: 15,
                borderRadius: 15,
                paddingHorizontal: 20
              }}
            >
              <TextComponent color={redColor.default}>{error}</TextComponent>
            </View>
          )}
          <Controller
            control={control}
            name="email"
            render={({
              field: { ref, onChange, value },
              fieldState: { error }
            }) => (
              <InputField
                placeholder="Email Address"
                ref={ref}
                inputMode="email"
                keyboardType="email-address"
                value={value}
                onChangeText={onChange}
                error={error?.message}
              />
            )}
            rules={{
              required: "Please provide your email address"
            }}
          />
          <Controller
            control={control}
            name="password"
            render={({
              field: { ref, onChange, value },
              fieldState: { error }
            }) => (
              <InputField
                secureTextEntry
                placeholder="Password"
                ref={ref}
                value={value}
                onChangeText={onChange}
                error={error?.message}
              />
            )}
            rules={{
              required: "Please provide your email address"
            }}
          />
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
            loading={isSubmitting}
            action={handleSubmit(loginUser)}
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
