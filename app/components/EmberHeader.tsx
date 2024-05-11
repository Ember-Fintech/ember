import React from "react"
import { Screen } from "./Screen"
import { useTheme } from "app/hooks/useTheme"
import Text from "./typography/Text"
import { View } from "react-native-ui-lib"
import { FontAwesome as Icon, AntDesign } from "@expo/vector-icons"

interface IProps {
  bgSource?: string
  title: string
  showLeftIcon: boolean
  onPressLeftIcon: () => void
  showRightIcon: boolean
  onPressRightIcon: () => void
  renderJSXElement?: () => any
}

const EmberHeader = (props: IProps) => {
  const {
    bgSource,
    title,
    showLeftIcon,
    onPressLeftIcon,
    showRightIcon,
    onPressRightIcon,
    renderJSXElement,
  } = props
  const { colors } = useTheme()

  return (
    <>
      <View
        style={{
          height: "16%",
          backgroundColor: colors.primaryColor,
          paddingTop: 30,
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: 24,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            columnGap: 12,
          }}
        >
          {showLeftIcon && <Icon name="chevron-left" size={18} color={colors.white} />}
          <Text.Body
            size="lg"
            style={{
              fontFamily: "Inter-SemiBold",
              color: colors.white,
            }}
          >
            {title}
          </Text.Body>
        </View>

        {showRightIcon && (
          <View
            style={{
              padding: 10,
              borderWidth: 1,
              borderColor: "#8C79C8",
              borderRadius: 10,
              backgroundColor: "rgba(255, 255, 255, 0.1)",
            }}
          >
            <AntDesign name="questioncircleo" size={16} color={colors.white} />
          </View>
        )}
      </View>
      {renderJSXElement && renderJSXElement()}
    </>
  )
}

export default EmberHeader
