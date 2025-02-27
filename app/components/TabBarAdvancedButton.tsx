import React from "react"
import { StyleSheet, View, Image, Pressable } from "react-native"
import { BottomTabBarButtonProps } from "@react-navigation/bottom-tabs/lib/typescript/src/types"
import scan from "assets/icons/customIcons/Scan.png"

type Props = BottomTabBarButtonProps & {
  bgColor?: string
}

export const TabBarAdvancedButton: React.FC<Props> = ({ bgColor, ...props }) => (
  <View style={styles.container} pointerEvents="box-none">
    <View style={styles.background} />
    <Pressable style={styles.button} onPress={props.onPress}>
      <Image
        source={scan}
        style={{
          height: 28,
          width: 28,
        }}
      />
    </Pressable>
  </View>
)

const styles = StyleSheet.create({
  container: {
    position: "relative",
    width: 75,
    alignItems: "center",
  },
  background: {
    position: "absolute",
    top: 0,
  },
  button: {
    top: -25,
    justifyContent: "center",
    alignItems: "center",
    width: 56,
    height: 56,
    borderRadius: 33,
    backgroundColor: "#6248AE",
  },
  buttonIcon: {
    fontSize: 16,
    color: "#F6F7EB",
  },
})
