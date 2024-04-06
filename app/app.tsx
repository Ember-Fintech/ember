/* eslint-disable import/first */
/**
 * Welcome to the main entry point of the app. In this file, we'll
 * be kicking off our app.
 *
 * Most of this file is boilerplate and you shouldn't need to modify
 * it very often. But take some time to look through and understand
 * what is going on here.
 *
 * The app navigation resides in ./app/navigators, so head over there
 * if you're interested in adding screens and navigators.
 */
import { GluestackUIProvider } from "@gluestack-ui/themed"

if (__DEV__) {
  // Load Reactotron configuration in development. We don't want to
  // include this in our production bundle, so we are using `if (__DEV__)`
  // to only execute this in development.
  require("./devtools/ReactotronConfig.ts")
}
import "./i18n"
import "./utils/ignoreWarnings"
import { useFonts } from "expo-font"
import React, { useMemo, useState } from "react"
import { initialWindowMetrics, SafeAreaProvider } from "react-native-safe-area-context"
import * as Linking from "expo-linking"
import { AppNavigator, useNavigationPersistence } from "./navigators"
import { ErrorBoundary } from "app/screens"
import * as storage from "./utils/storage"
import Config from "./config"
import { uiConfig } from "app/theme/config"
import { GestureHandlerRootView } from "react-native-gesture-handler"
import { ViewStyle, useColorScheme, Text } from "react-native"

export const NAVIGATION_PERSISTENCE_KEY = "NAVIGATION_STATE"

// Web linking configuration
const prefix = Linking.createURL("/")
const config = {
  screens: {
    Login: {
      path: "",
    },
    Welcome: "welcome",
    Demo: {
      screens: {
        DemoShowroom: {
          path: "showroom/:queryIndex?/:itemIndex?",
        },
        DemoDebug: "debug",
        DemoPodcastList: "podcast",
        DemoCommunity: "community",
      },
    },
  },
}

interface AppProps {
  hideSplashScreen: () => Promise<boolean>
}

/**
 * This is the root component of our app.
 * @param {AppProps} props - The props for the `App` component.
 * @returns {JSX.Element} The rendered `App` component.
 */
function App(props: AppProps) {
  const { hideSplashScreen } = props
  const {
    initialNavigationState,
    onNavigationStateChange,
    isRestored: isNavigationStateRestored,
  } = useNavigationPersistence(storage, NAVIGATION_PERSISTENCE_KEY)

  const [fontsLoaded] = useFonts({
    "Inter-Bold": require("../assets/fonts/Inter-Bold.ttf"),
    "Inter-Medium": require("../assets/fonts/Inter-Medium.ttf"),
    "Inter-Regular": require("../assets/fonts/Inter-Regular.ttf"),
    "Inter-SemiBold": require("../assets/fonts/Inter-SemiBold.ttf"),
    "Sans-Bold": require("../assets/fonts/PlusJakartaSans-Bold.ttf"),
    "Sans-Medium": require("../assets/fonts/PlusJakartaSans-Medium.ttf"),
    "Sans-Regular": require("../assets/fonts/PlusJakartaSans-Regular.ttf"),
    "Sans-SemiBold": require("../assets/fonts/PlusJakartaSans-SemiBold.ttf"),
  })

  const colorMode = useColorScheme()

  useMemo(() => {
    setTimeout(hideSplashScreen, 500)
  }, [fontsLoaded])

  // const { rehydrated } = useInitialRootStore(() => {
  //   // This runs after the root store has been initialized and rehydrated.
  //
  //   // If your initialization scripts run very fast, it's good to show the splash screen for just a bit longer to prevent flicker.
  //   // Slightly delaying splash screen hiding for better UX; can be customized or removed as needed,
  //   // Note: (vanilla Android) The splash-screen will not appear if you launch your app via the terminal or Android Studio. Kill the app and launch it normally by tapping on the launcher icon. https://stackoverflow.com/a/69831106
  //   // Note: (vanilla iOS) You might notice the splash-screen logo change size. This happens in debug/development mode. Try building the app for release.
  //   setTimeout(hideSplashScreen, 500)
  // })

  // Before we show the app, we have to wait for our state to be ready.
  // In the meantime, don't render anything. This will be the background
  // color set in native by rootView's background color.
  // In iOS: application:didFinishLaunchingWithOptions:
  // In Android: https://stackoverflow.com/a/45838109/204044
  // You can replace with your own loading component if you wish.
  // if (!rehydrated || !isNavigationStateRestored || !areFontsLoaded) return null
  const [isDark, setIsDark] = useState(colorMode === "dark")
  const linking = {
    prefixes: [prefix],
    config,
  }
  console.log(isDark)
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <ErrorBoundary catchErrors={Config.catchErrors}>
        <GestureHandlerRootView style={$container}>
          <GluestackUIProvider config={uiConfig} colorMode={isDark ? "dark" : "light"}>
            <AppNavigator
              linking={linking}
              initialState={initialNavigationState}
              onStateChange={onNavigationStateChange}
            />
          </GluestackUIProvider>
        </GestureHandlerRootView>
      </ErrorBoundary>
    </SafeAreaProvider>
  )
}

export default App

const $container: ViewStyle = {
  flex: 1,
}
