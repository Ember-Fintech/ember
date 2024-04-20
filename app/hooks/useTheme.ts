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
const useTheme = () => {
  const colorMode: "dark" | "light" = useColorScheme() === "dark" ? "dark" : "light"

  const colors = useMemo(() => {
    Colors.loadColors({
      ...commonColors,
      ...(colorMode === "dark" ? darkThemeColors : lightThemeColors),
    })
    return Colors
  }, [colorMode])

  return {
    theme: colorMode,
    colors,
  }
}

export { useTheme }
