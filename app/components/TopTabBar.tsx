import React from "react"
import { View } from "react-native-ui-lib"
import Text from "./typography/Text"
import { TextStyle, TouchableOpacity } from "react-native"
import { useTheme } from "app/hooks/useTheme"

export interface SingleTopTabDataPoint {
  index: number
  title: string
}

interface IProps {
  data: Array<SingleTopTabDataPoint>
  activeMenuIndex: number
  setActiveMenuIndex: (e: number) => void
}

const TopTabBar = ({ data, activeMenuIndex, setActiveMenuIndex }: IProps) => {
  const { colors } = useTheme()

  const getTextStyleObject = (index: number): TextStyle => {
    if (activeMenuIndex === index) {
      return {
        fontFamily: "Inter-SemiBold",
        color: colors.primaryColor,
        textAlign: "center",
      }
    }
    return {
      fontFamily: "Inter-Regular",
      color: "rgba(102, 112, 133, 1)",
      textAlign: "center",
    }
  }

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        borderWidth: 1,
        padding: 6,
        borderRadius: 50,
        borderColor: "rgba(242, 244, 247, 1)",
      }}
    >
      {data?.map((singleMenuItem, index) => {
        return (
          <TouchableOpacity
            key={index}
            onPress={() => {
              setActiveMenuIndex(index)
            }}
            style={{
              backgroundColor: activeMenuIndex === index ? "rgba(209, 201, 233, 1)" : "transparent",
              flex: 1,
              paddingVertical: 6,
              borderRadius: 50,
            }}
          >
            <Text.Body size="sm" style={getTextStyleObject(index)}>
              {singleMenuItem.title}
            </Text.Body>
          </TouchableOpacity>
        )
      })}
    </View>
  )
}

export default TopTabBar
