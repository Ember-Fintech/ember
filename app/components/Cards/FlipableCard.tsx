import React, { useRef, useState } from "react"
import { TouchableOpacity, Animated, StyleSheet, ImageBackground, View } from "react-native"

interface IProps {
  frontContent: React.JSX.Element
  backContent: React.JSX.Element
  frontStyle: any
  backStyle: any
  isFlippable?: boolean
}

const FlippableCard = ({
  frontContent,
  backContent,
  frontStyle,
  backStyle,
  isFlippable,
}: IProps) => {
  const [isFront, setIsFront] = useState(true)
  const flipAnimation = useRef(new Animated.Value(0)).current

  const flipCard = () => {
    const initialValue = isFront ? 0 : 180
    const finalValue = isFront ? 180 : 0

    setIsFront(!isFront)

    flipAnimation.setValue(initialValue)
    Animated.spring(flipAnimation, {
      toValue: finalValue,
      tension: 1,
      friction: 10,
      useNativeDriver: true,
    }).start()
  }

  const frontInterpolate = flipAnimation.interpolate({
    inputRange: [0, 180],
    outputRange: ["0deg", "180deg"],
  })
  const backInterpolate = flipAnimation.interpolate({
    inputRange: [0, 180],
    outputRange: ["180deg", "360deg"],
  })

  const frontAnimatedStyle = {
    transform: [{ rotateY: frontInterpolate }],
  }
  const backAnimatedStyle = {
    transform: [{ rotateY: backInterpolate }],
  }

  const Wrapper = isFlippable ? TouchableOpacity : View

  return (
    <Wrapper activeOpacity={1} onPress={isFlippable ? flipCard : undefined}>
      <Animated.View
        style={[styles.cardContainer, frontAnimatedStyle, { opacity: isFront ? 1 : 0 }, frontStyle]}
      >
        {frontContent}
      </Animated.View>

      <Animated.View
        style={[
          styles.cardContainer,
          styles.backCard,
          backAnimatedStyle,
          { opacity: isFront ? 0 : 1 },
          backStyle,
        ]}
      >
        {backContent}
      </Animated.View>
    </Wrapper>
  )
}

const styles = StyleSheet.create({
  cardContainer: {
    // width: 80,
    // height: 80,
    width: "90%",
    height: 200,
    backgroundColor: "#fff",
    backfaceVisibility: "hidden",
    position: "absolute",
    borderRadius: 15,
    marginHorizontal: "5%",
    marginTop: 12,
  },
  backCard: {
    backgroundColor: "#f0f0f0",
  },
})

export default FlippableCard
