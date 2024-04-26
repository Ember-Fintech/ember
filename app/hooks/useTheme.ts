import { useColorScheme } from "react-native"
import { useMemo } from "react"
import { Colors } from "react-native-ui-lib"
type UIColors = {
  text: string
  background: string
}
const commonColors: { [p: string]: string } = {}
const darkThemeColors: UIColors = {
  text: "white",
  background: "black",
}
const lightThemeColors: UIColors = {
  text: "black",
  background: "white",
}
const useTheme = (): { theme: "light" | "dark"; colors: { [p: string]: string } } => {
  const colorMode: "dark" | "light" = useColorScheme() === "dark" ? "dark" : "light"

  const colors = useMemo(() => {
    Colors.loadColors({
      ...commonColors,
      ...(colorMode === "dark" ? darkThemeColors : lightThemeColors),
      primaryColor: "#6248AE",
      white: "white",
      disabled: "#F2F4F7",
      disabledText: "#98A2B3",
      textSecondary: "#A393D3",
    })
    return Colors
  }, [colorMode])

  return {
    theme: colorMode,
    colors,
  }
}

export { useTheme }
