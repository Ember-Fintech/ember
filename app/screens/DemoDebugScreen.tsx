import React, { FC } from "react"
import { Text } from "react-native"
import { DemoTabScreenProps } from "../navigators/DemoNavigator"
import { Screen } from "app/components"

export const DemoDebugScreen: FC<DemoTabScreenProps<"DemoDebug">> = function DemoDebugScreen(
  _props,
) {
  return (
    <Screen preset="scroll" safeAreaEdges={["top"]}>
      <Text>{"Demo debug screen"}</Text>
    </Screen>
  )
}
