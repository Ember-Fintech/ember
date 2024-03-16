/**
 * If you're using Crashlytics: https://rnfirebase.io/crashlytics/usage
 */
// import crashlytics from "@react-native-firebase/crashlytics"
/**
 *  This is where you put your crash reporting service initialization code to call in `./app/app.tsx`
 */
export const initCrashReporting = () => {
  // crashlytics().log('User signed in.');
  // await Promise.all([
  //   crashlytics().setUserId(user.uid),
  //   crashlytics().setAttribute('credits', String(user.credits)),
  //   crashlytics().setAttributes({
  //     role: 'admin',
  //     followers: '13',
  //     email: user.email,
  //     username: user.username,
  //   }),
  // ]);
}

/**
 * Error classifications used to sort errors on error reporting services.
 */
export enum ErrorType {
  /**
   * An error that would normally cause a red screen in dev
   * and force the user to sign out and restart.
   */
  FATAL = "Fatal",
  /**
   * An error caught by try/catch where defined using Reactotron.tron.error.
   */
  HANDLED = "Handled",
}

/**
 * Manually report a handled error.
 */
export const reportCrash = (error: Error, type: ErrorType = ErrorType.FATAL) => {
  if (__DEV__) {
    // Log to console and Reactotron in development
    const message = error.message || "Unknown"
    console.error(error)
    console.log(message, type)
  } else {
    // todo-gv: un-comment this
    // crashlytics().recordError(error)
  }
}
