import { useColorScheme } from "react-native"
import { useMemo } from "react"
import { Colors } from "react-native-ui-lib"
const useTheme = () => {
  const colorMode: "dark" | "light" = useColorScheme() === "dark" ? "dark" : "light"

  const colors = useMemo(() => {
    Colors.loadColors({
      textColor: colorMode === "dark" ? "white" : "red",
    })
    return Colors
  }, [colorMode])

  return {
    theme: colorMode,
    colors,
  }
}

export { useTheme }
