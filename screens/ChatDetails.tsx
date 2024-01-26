import {
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import React from "react";
import LoggedInContainer from "@/components/_layouts/LoggedInContainer";
import { blackColor, primaryColor } from "@/assets/colors";
import Image from "@/components/_general/Image";
import { AvatarImage } from "@/assets/images";
import { generalIconProps, padding } from "@/utils/_variables";
import InputField from "@/components/_general/form/InputField";
import { ArrowLeft2, Send2 } from "iconsax-react-native";
import TextComponent from "@/components/_general/TextComponent";
import { Poppins } from "@/assets/fonts";
import ScrollComponent from "@/components/_general/ScrollComponent";
import ChatDetailsCard from "@/components/_screens/chats/ChatDetailsCard";
import { useNavigation } from "@react-navigation/native";

const ChatDetailsHeader: React.FC<{
  name: string;
  status: string;
  image: ImageSourcePropType;
}> = ({ name, status, image }) => {
  const { goBack } = useNavigation();
  return (
    <View
      style={{
        paddingVertical: 15,
        alignItems: "center",
        gap: 15,
        borderBottomWidth: 1,
        borderBottomColor: blackColor.opacity100,
        flexDirection: "row",
        paddingHorizontal: padding
      }}
    >
      <TouchableOpacity onPress={goBack}>
        <ArrowLeft2 {...generalIconProps} size={25} />
      </TouchableOpacity>
      <Image
        type="round"
        image={image}
        innerPadding={0}
        fullDimension
        width={45}
        height={45}
      />
      <View
        style={{
          flex: 1
        }}
      >
        <TextComponent fontFamily={Poppins.semiBold.default}>
          {name}
        </TextComponent>
        <TextComponent color={blackColor.opacity600}>{status}</TextComponent>
      </View>
    </View>
  );
};

const ChatDetails = () => {
  return (
    <LoggedInContainer
      hideNav
      unScrollable
      header={
        <ChatDetailsHeader
          image={AvatarImage}
          name="Olorunbolanle Adegboyega"
          status="Online"
        />
      }
      contentContainerStyle={{
        paddingVertical: 0,
        paddingHorizontal: 0,
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
            minHeight: 0,
            paddingHorizontal: padding,
            paddingVertical: 15,
            gap: 20
          }}
        >
          {new Array(15).fill(0).map((_, index) => (
            <ChatDetailsCard isSender={index % 2 === 0} key={index} />
          ))}
        </ScrollComponent>
      </View>
      <View
        style={{
          paddingHorizontal: padding,
          paddingVertical: 15
        }}
      >
        <InputField
          placeholder="Your message..."
          rightIcon={
            <Send2
              {...generalIconProps}
              variant="Bold"
              color={primaryColor.default}
            />
          }
          multiline
          inputStyle={{
            maxHeight: 150,
            textAlignVertical: "top",
            borderRadius: 9000,
            paddingVertical: 10,
            paddingTop: 20
          }}
        />
      </View>
    </LoggedInContainer>
  );
};

export default ChatDetails;

const styles = StyleSheet.create({});
