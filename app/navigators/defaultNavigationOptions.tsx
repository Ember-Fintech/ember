import { Platform, TextStyle } from "react-native"
import { RouteProp, ParamListBase } from "@react-navigation/native"
import { StackNavigationOptions, StackNavigationProp } from "@react-navigation/stack"
import { AppRoutes } from "app/navigators/constants/appRoutes"

const GesturesDisabledList: string[] = [
  // add those screens where we don't want navigation Gestures
  AppRoutes.Welcome,
]

export const headerTitleStyle = (theme: Theme): TextStyle => {
  return {
    ...headerStyles.xxs,
    color: theme.content.primary,
  }
}

export const scrollHeaderOptions = (
  forceDarkHeader?: boolean,
): Partial<StackNavigationOptions> => ({
  headerTitle: () => <HeaderTitleSwitcher forceDarkHeader={forceDarkHeader} />,
})

export const headerStyle = (
  theme: Theme,
  isModal: boolean | undefined = false,
  forceDarkHeader: boolean | undefined = false,
) => {
  return {
    backgroundColor: isModal ? theme.elevated.background.modal : theme.background.primary,
    ...Platform.select({
      ios: {
        borderBottomWidth: 0,
        shadowColor: "transparent",
        elevation: 0,
        shadowOpacity: 0,
      },
    }),
    ...(forceDarkHeader && {
      backgroundColor: themes.darkMode.background.primary,
    }),
  }
}

export const gestureNavigationOptions = (routeName: string) => {
  return {
    gestureEnabled: Platform.select({
      default: GesturesDisabledList.includes(routeName) ? false : undefined,
      android: false,
    }),
  }
}

const defaultNavigationOptions = ({
  navigation,
  route,
  theme,
}: {
  navigation: StackNavigationProp<ParamListBase>
  route: RouteProp<ParamListBase, string>
  theme: Theme
}): StackNavigationOptions => {
  const isModal = navigation
    .getParent()
    ?.getState()
    .routeNames.includes(ModalScreenRoute.MODAL_NAVIGATOR)

  const forceDarkHeader = _.get(route, "params.forceDarkHeader", false)

  return {
    headerTitleAllowFontScaling: true,
    headerShadowVisible: false,
    headerLeft: () => (
      <HeaderBackButton
        onPress={() => {
          const prevScreen = _.get(route, "params.prevScreen")
          if (prevScreen) {
            navigation.navigate(prevScreen)
          } else {
            navigation.pop()
          }
        }}
        backButtonText={_.get(route, "params.backButtonText")}
      />
    ),
    cardStyle: {
      backgroundColor: isModal ? theme.elevated.background.modal : theme.background.primary,
    },
    cardShadowEnabled: true,
    header: (props) =>
      forceDarkHeader ? (
        <ThemeProvider theme={themes.darkMode}>
          <Header {...props} />
        </ThemeProvider>
      ) : (
        <Header {...props} />
      ),
    headerStyle: headerStyle(theme, isModal, forceDarkHeader),
    headerTitleContainerStyle: { marginLeft: spacing[4] / 2 },
    headerTitleStyle: headerTitleStyle(theme),
    headerLeftContainerStyle: { paddingLeft: spacing[12] },
    headerRightContainerStyle: { paddingRight: spacing[12] },
    headerTitleAlign: "center",
    title: "", // force to empty title unless we overwrite in the individual screen
    ...DefaultSlideFromRightTransition,
    ...gestureNavigationOptions(getCurrentRouteName(navigation) ?? ""),
    ...scrollHeaderOptions(),
  }
}

export default defaultNavigationOptions
