import React, { FC } from "react"
import { View, Text } from "react-native"
import { DemoTabScreenProps } from "../navigators/DemoNavigator"

export const DemoPodcastListScreen: FC<DemoTabScreenProps<"DemoPodcastList">> = () => {
  return (
    <View>
      <Text>DemoPodcastListScreen</Text>
    </View>
  )
}
