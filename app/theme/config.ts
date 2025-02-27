import { config } from "@gluestack-ui/config"
import { createConfig } from "@gluestack-style/react"
export const uiConfig = createConfig({
  ...config,
  tokens: {
    ...config.tokens,
    fonts: {
      ...config.tokens.fonts,
      "Inter-Bold": "Inter-Bold",
      "Inter-Medium": "Inter-Medium",
      "Inter-Regular": "Inter-Regular",
      "Inter-SemiBold": "Inter-SemiBold",
      "Sans-Bold": "Sans-Bold",
      "Sans-Medium": "Sans-Medium",
      "Sans-Regular": "Sans-Regular",
      "Sans-SemiBold": "Sans-SemiBold",
    },
    colors: {
      ...config.tokens.colors,
      primary25: "#fcfaff",
      primary50: "#f9f5ff",
      primary100: "#f4ebff",
      primary200: "#e9d7fe",
      primary300: "#d6bbfb",
      primary400: "#b692f6",
      primary500: "#9d76ed",
      primary600: "#7e56d8",
      primary700: "#6840c6",
      primary800: "#52379e",
      primary900: "#422f7d",
      primary950: "#2b1b5e",
      secondary25: "#fefdf0",
      secondary50: "#fefbe8",
      secondary100: "#fdf7c3",
      secondary200: "#feee94",
      secondary300: "#fde272",
      secondary400: "#fac414",
      secondary500: "#eaa907",
      secondary600: "#ca8403",
      secondary700: "#a15b06",
      secondary800: "#85490d",
      secondary900: "#713b11",
      secondary950: "#542c0d",
      tertiary25: "#f6fefc",
      tertiary50: "#f0fcf9",
      tertiary100: "#ccfaef",
      tertiary200: "#99f5e0",
      tertiary300: "#5ee9cf",
      tertiary400: "#2ed2b7",
      tertiary500: "#15b69e",
      tertiary600: "#0d9383",
      tertiary700: "#0f7569",
      tertiary800: "#115d55",
      tertiary900: "#134d47",
      tertiary950: "#0a2926",
      error25: "#fefafa",
      error50: "#fef2f1",
      error100: "#fee3e1",
      error200: "#fecdc9",
      error300: "#fca19b",
      error400: "#f97066",
      error500: "#f04437",
      error600: "#d92c20",
      error700: "#b32218",
      error800: "#901f17",
      error900: "#7a2619",
      error950: "#54150c",
      success25: "#f5fdf9",
      success50: "#ecfcf2",
      success100: "#dbf9e6",
      success200: "#aaefc6",
      success300: "#75dfa6",
      success400: "#47cd89",
      success500: "#17b169",
      success600: "#069454",
      success700: "#057647",
      success800: "#075d39",
      success900: "#074c30",
      success950: "#043320",
      warning25: "#fffcf4",
      warning50: "#fff9eb",
      warning100: "#feefc6",
      warning200: "#fede88",
      warning300: "#fec84a",
      warning400: "#fcb022",
      warning500: "#f78f08",
      warning600: "#db6803",
      warning700: "#b54707",
      warning800: "#93370c",
      warning900: "#792d0d",
      warning950: "#4e1d08",
      info25: "#f4f9ff",
      info50: "#eff8ff",
      info100: "#d1e9ff",
      info200: "#b2ddff",
      info300: "#84caff",
      info400: "#53b0fd",
      info500: "#2e90fa",
      info600: "#156fee",
      info700: "#175cd3",
      info800: "#1849a9",
      info900: "#194084",
      info950: "#102a56",
      textLight25: "#fcfcfd",
      textLight50: "#f9fafb",
      textLight100: "#f2f4f7",
      textLight200: "#eaecf0",
      textLight300: "#d0d5dd",
      textLight400: "#98a1b2",
      textLight500: "#667085",
      textLight600: "#475467",
      textLight700: "#344054",
      textLight800: "#18212f",
      textLight900: "#101828",
      textLight950: "#0c111d",
      textDark25: "#fafafa",
      textDark50: "#f5f5f6",
      textDark100: "#f0f1f1",
      textDark200: "#ececed",
      textDark300: "#cecfd2",
      textDark400: "#94969c",
      textDark500: "#85888e",
      textDark600: "#61646c",
      textDark700: "#333741",
      textDark800: "#1f242f",
      textDark900: "#161b26",
      textDark950: "#0c111d",
      border: "#D0D5DD",
    },
  },
})
