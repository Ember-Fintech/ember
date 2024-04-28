import React, { useState } from "react"
import { Text, useWindowDimensions, View, Image } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { OnboardingStackParams } from "app/navigators/OnboardingStack"
import { AppRoutes } from "app/navigators/constants/appRoutes"
import { useTheme } from "app/hooks/useTheme"
import { carouselData } from "app/constants/carouselData"
import Carousel, {Pagination} from "react-native-snap-carousel"
import SecondaryButton from "app/components/SecondaryButtton"
import TertiaryButton from "app/components/TertiaryButton"


type WelcomeScreenProps = {
  navigation: StackScreenProps<OnboardingStackParams, AppRoutes.Welcome>
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ navigation }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0)
    const {width} = useWindowDimensions();
    const {colors} = useTheme();

    const PaginationDots = () => {
      return (
        <Pagination
              dotsLength={carouselData.length}
              activeDotIndex={activeIndex}
              containerStyle={{
                marginBottom: -20
              }}
              dotStyle={{
                  width: 16,
                  height: 4,
                  borderRadius: 2,
                  backgroundColor: '#E0D5FF',
                  marginHorizontal: -10
              }}
              inactiveDotStyle={{
                  // Define styles for inactive dots here
              }}
              inactiveDotOpacity={0.3}
              inactiveDotScale={0.6}
            />
      )
    }


    const renderItem = ({ item }) => {
      return (
        <View style={{
          backgroundColor: colors.primaryColor,
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <Image
            source={carouselData[activeIndex]?.backgroundImage} 
            resizeMode="contain"
            style={{
              width: width/1.3,
              height: '100%',
            }}
          />
        </View>
      )
    }

    const setNextActiveIndex = () => {
      setActiveIndex((prevIndex) => {
        if(prevIndex === 2) return 0;
        return prevIndex+1;
      });
    }

    const navigateToNextScreen = () => {
      // navigate to the next screen here
      navigation.navigate(AppRoutes.CompanyDetails)
    }

    return (
      <View
        style={{
          paddingTop: 60,
          flex: 1,
          backgroundColor: colors.primaryColor,
        }}
      >
        <Carousel
          layout={"default"}
          data={carouselData}
          sliderWidth={width}
          itemWidth={width}
          renderItem={renderItem}
          onSnapToItem={(index: number) => setActiveIndex(index)}
          scrollEnabled={false}
        />
        <PaginationDots />
        <View style={{
          marginHorizontal: 10
        }}>
          <Text style={{
            fontFamily: 'Sans-SemiBold',
            fontSize: 24,
            textAlign: 'center',
            color: colors.white
          }}>{carouselData[activeIndex]?.heading}</Text>
          <Text style={{
            fontFamily: 'Inter-Regular',
            fontSize: 14,
            textAlign: 'center',
            color: colors.white,
            marginTop: 12
          }}>{carouselData[activeIndex]?.subHeading}</Text>
          
        </View>
        <View style={{
          marginTop: 16
        }}>
          <View>
            <SecondaryButton title="Next" onPress={setNextActiveIndex} />
          </View>
          <View style={{
            marginVertical: 16
          }}>
            <TertiaryButton title="Skip" onPress={navigateToNextScreen} />
          </View>
          
        </View>
          
      </View>
    )
}
