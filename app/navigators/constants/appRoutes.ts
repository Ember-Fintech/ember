export enum AppRoutes {
  // --------- here starts the onboarding stack
  OnboardingStack = "OnboardingStack",
  Welcome = "Welcome",
  LanguageSelection = "LanguageSelection",
  OnboardSuccess = "OnboardSuccess",
  PhoneInput = "PhoneInput",
  OtpInputScreen = "OtpInputScreen",
  CompanyDetails = "CompanyDetails",
  // --------- here starts the main app stack - that has TabNavigator as entry point
  MainAppStack = "MainAppStack",
  // ----------scan and pay stack starts here
  ScanAndPayStack = "ScanAndPayStack",
  UpiScanner = "UpiScanner",
  PaymentConfig = "PaymentConfig",
  TransactionSuccess = "TransactionSuccess",
}
