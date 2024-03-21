import { ColorType } from "@/utils/types";

interface ColorVariance {
  dark: ColorType;
  light: ColorType;
}
export const whiteColor: ColorType = {
  default: "rgba(255, 255, 255,1)",
  opacity10: "rgba(255, 255, 255,.01)",
  opacity20: "rgba(255, 255, 255,.02)",
  opacity30: "rgba(255, 255, 255,.03)",
  opacity40: "rgba(255, 255, 255,.04)",
  opacity50: "rgba(255, 255, 255,.05)",
  opacity60: "rgba(255, 255, 255,.06)",
  opacity70: "rgba(255, 255, 255,.07)",
  opacity80: "rgba(255, 255, 255,.08)",
  opacity90: "rgba(255, 255, 255,.09)",
  opacity100: "rgba(255, 255, 255,.1)",
  opacity200: "rgba(255, 255, 255,.2)",
  opacity300: "rgba(255, 255, 255,.3)",
  opacity400: "rgba(255, 255, 255,.4)",
  opacity500: "rgba(255, 255, 255,.5)",
  opacity600: "rgba(255, 255, 255,.6)",
  opacity700: "rgba(255, 255, 255,.7)",
  opacity800: "rgba(255, 255, 255,.8)",
  opacity900: "rgba(255, 255, 255,.9)"
};
export const blackColor: ColorType = {
  default: "rgba(0,0,0,1)",
  opacity10: "rgba(0,0,0,.01)",
  opacity20: "rgba(0,0,0,.02)",
  opacity30: "rgba(0,0,0,.03)",
  opacity40: "rgba(0,0,0,.04)",
  opacity50: "rgba(0,0,0,.05)",
  opacity60: "rgba(0,0,0,.06)",
  opacity70: "rgba(0,0,0,.07)",
  opacity80: "rgba(0,0,0,.08)",
  opacity90: "rgba(0,0,0,.09)",
  opacity100: "rgba(0,0,0,.1)",
  opacity200: "rgba(0,0,0,.2)",
  opacity300: "rgba(0,0,0,.3)",
  opacity400: "rgba(0,0,0,.4)",
  opacity500: "rgba(0,0,0,.5)",
  opacity600: "rgba(0,0,0,.6)",
  opacity700: "rgba(0,0,0,.7)",
  opacity800: "rgba(0,0,0,.8)",
  opacity900: "rgba(0,0,0,.9)"
};
export const redColor: ColorType = {
  default: "rgba(255,0,0,1)",
  opacity10: "rgba(255,0,0,.01)",
  opacity20: "rgba(255,0,0,.02)",
  opacity30: "rgba(255,0,0,.03)",
  opacity40: "rgba(255,0,0,.04)",
  opacity50: "rgba(255,0,0,.05)",
  opacity60: "rgba(255,0,0,.06)",
  opacity70: "rgba(255,0,0,.07)",
  opacity80: "rgba(255,0,0,.08)",
  opacity90: "rgba(255,0,0,.09)",
  opacity100: "rgba(255,0,0,.1)",
  opacity200: "rgba(255,0,0,.2)",
  opacity300: "rgba(255,0,0,.3)",
  opacity400: "rgba(255,0,0,.4)",
  opacity500: "rgba(255,0,0,.5)",
  opacity600: "rgba(255,0,0,.6)",
  opacity700: "rgba(255,0,0,.7)",
  opacity800: "rgba(255,0,0,.8)",
  opacity900: "rgba(255,0,0,.9)"
};
export const orangeColor: ColorType = {
  default: "rgba(237,123,1,1)",
  opacity10: "rgba(237,123,1,.01)",
  opacity20: "rgba(237,123,1,.02)",
  opacity30: "rgba(237,123,1,.03)",
  opacity40: "rgba(237,123,1,.04)",
  opacity50: "rgba(237,123,1,.05)",
  opacity60: "rgba(237,123,1,.06)",
  opacity70: "rgba(237,123,1,.07)",
  opacity80: "rgba(237,123,1,.08)",
  opacity90: "rgba(237,123,1,.09)",
  opacity100: "rgba(237,123,1,.1)",
  opacity200: "rgba(237,123,1,.2)",
  opacity300: "rgba(237,123,1,.3)",
  opacity400: "rgba(237,123,1,.4)",
  opacity500: "rgba(237,123,1,.5)",
  opacity600: "rgba(237,123,1,.6)",
  opacity700: "rgba(237,123,1,.7)",
  opacity800: "rgba(237,123,1,.8)",
  opacity900: "rgba(237,123,1,.9)"
};
export const primaryColor: ColorType = {
  default: "rgba(0, 172, 53, 1)",
  opacity10: "rgba(0, 172, 53, .01)",
  opacity20: "rgba(0, 172, 53, .02)",
  opacity30: "rgba(0, 172, 53, .03)",
  opacity40: "rgba(0, 172, 53, .04)",
  opacity50: "rgba(0, 172, 53, .05)",
  opacity60: "rgba(0, 172, 53, .06)",
  opacity70: "rgba(0, 172, 53, .07)",
  opacity80: "rgba(0, 172, 53, .08)",
  opacity90: "rgba(0, 172, 53, .09)",
  opacity100: "rgba(0, 172, 53, .1)",
  opacity200: "rgba(0, 172, 53, .2)",
  opacity300: "rgba(0, 172, 53, .3)",
  opacity400: "rgba(0, 172, 53, .4)",
  opacity500: "rgba(0, 172, 53, .5)",
  opacity600: "rgba(0, 172, 53, .6)",
  opacity700: "rgba(0, 172, 53, .7)",
  opacity800: "rgba(0, 172, 53, .8)",
  opacity900: "rgba(0, 172, 53, .9)"
};

export const bgColor: ColorVariance = {
  dark: blackColor,
  light: whiteColor
};

export const textColor: ColorVariance = {
  dark: whiteColor,
  light: blackColor
};

export const buttonColor: ColorVariance = {
  dark: primaryColor,
  light: primaryColor
};
