import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useCallback, useState } from "react";
import Container from "@/components/_layouts/Container";
import ScrollComponent from "@/components/_general/ScrollComponent";
import {
  databaseKeys,
  generalIconProps,
  padding,
  roles,
  ScreenNames,
  userRoles,
  windowWidth
} from "@/utils/_variables";
import { Poppins } from "@/assets/fonts";
import {
  blackColor,
  primaryColor,
  redColor,
  whiteColor
} from "@/assets/colors";
import TextComponent from "@/components/_general/TextComponent";
import InputField from "@/components/_general/form/InputField";
import Button from "@/components/_general/Button";
import { ArrowLeft2 } from "iconsax-react-native";
import { useNavigation } from "@react-navigation/native";
import { Controller, useForm } from "react-hook-form";
import { emailRegExp, passwordRegExp } from "@/utils/regex";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, fireStoreDb } from "@/api/firebase";
import { doc, setDoc } from "firebase/firestore";
import { showToast } from "@/utils/functions";
type RegisterBodyType = {
  name: string;
  email: string;
  role: string;
  password: string;
  repeatPassword: string;
};
const defaultValues = {
  name: "",
  email: "",
  role: roles.patient.toLowerCase(),
  password: "",
  repeatPassword: ""
};

const Register = () => {
  const { goBack, navigate } = useNavigation();
  const [error, setError] = useState<string | null>(null);
  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
    watch
  } = useForm({ defaultValues });
  const password = watch("password");
  const registerUser = useCallback(async (data: RegisterBodyType) => {
    const { email, password, role, name } = data;
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const addUserRef = doc(fireStoreDb, databaseKeys.users, user.uid);
      await setDoc(addUserRef, {
        email,
        role,
        name,
        id: user.uid,
        createdAt: Date.now(),
        updatedAt: null,
        password
      });
      showToast("User Created");
      navigate(ScreenNames.Login.name as never);
    } catch (error: any) {
      showToast(error?.message ?? "Error encountered whilst login in.");
      setError(error?.message ?? "Error encountered whilst login in.");
    }
  }, []);
  return (
    <Container safeView>
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
          <Controller
            control={control}
            name="name"
            render={({
              field: { ref, onChange, value },
              fieldState: { error }
            }) => (
              <InputField
                placeholder="Full Name"
                ref={ref}
                value={value}
                onChangeText={onChange}
                error={error?.message}
              />
            )}
            rules={{
              required: "Please provide your full name"
            }}
          />
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
                value={value}
                onChangeText={onChange}
                error={error?.message}
              />
            )}
            rules={{
              required: "Please provide your email address",
              pattern: {
                value: emailRegExp,
                message: "Please provide a valid email address"
              }
            }}
          />
          <Controller
            control={control}
            name="role"
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <>
                <TextComponent>I am a</TextComponent>
                <View
                  style={{
                    flexDirection: "row"
                  }}
                >
                  {userRoles.map((user, index) => (
                    <TouchableOpacity
                      onPress={() => {
                        onChange(user?.toLowerCase());
                      }}
                      key={index}
                      style={{
                        paddingVertical: 20,
                        paddingHorizontal: 15,
                        alignItems: "center",
                        borderWidth: 1,
                        borderColor: blackColor.opacity100,
                        flex: 1 / userRoles.length,
                        backgroundColor:
                          value === user?.toLowerCase()
                            ? primaryColor.default
                            : "transparent",
                        borderTopLeftRadius: index === 0 ? 15 : 0,
                        borderBottomLeftRadius: index === 0 ? 15 : 0,
                        borderTopRightRadius:
                          index === userRoles?.length - 1 ? 15 : 0,
                        borderBottomRightRadius:
                          index === userRoles?.length - 1 ? 15 : 0
                      }}
                    >
                      <TextComponent
                        color={
                          value === user?.toLowerCase()
                            ? whiteColor.default
                            : undefined
                        }
                      >
                        {user}
                      </TextComponent>
                    </TouchableOpacity>
                  ))}
                </View>
                {error?.message && typeof error !== "boolean" && (
                  <TextComponent
                    style={{
                      color: redColor.opacity600
                    }}
                  >
                    {error?.message}
                  </TextComponent>
                )}
              </>
            )}
            rules={{
              required: "Please select your role"
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
              required: "Please provide your email address",
              pattern: {
                value: passwordRegExp,
                message:
                  "Your password must contain at least a number, an uppercase character, lowercase character and a special character"
              },
              minLength: {
                value: 8,
                message: "Your password must not be less than 8 characters"
              }
            }}
          />
          <Controller
            control={control}
            name="repeatPassword"
            render={({
              field: { ref, onChange, value },
              fieldState: { error }
            }) => (
              <InputField
                secureTextEntry
                placeholder="Repeat password"
                ref={ref}
                value={value}
                onChangeText={onChange}
                error={error?.message}
              />
            )}
            rules={{
              required: "Please repeat your password",
              validate: (value) =>
                password !== value
                  ? "Repeated password doesn't match"
                  : undefined
            }}
          />
        </View>
        <Button
          action={handleSubmit(registerUser)}
          loading={isSubmitting}
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
