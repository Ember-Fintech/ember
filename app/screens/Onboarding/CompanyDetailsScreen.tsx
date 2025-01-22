import React, { useCallback, useEffect, useState } from "react"
import { View, FlatList, TouchableOpacity, KeyboardAvoidingView } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { OnboardingStackParams } from "app/navigators/OnboardingStack"
import { AppRoutes } from "app/navigators/constants/appRoutes"
import EmberHeader from "app/components/EmberHeader"
import { useTheme } from "app/hooks/useTheme"
import Text from "app/components/typography/Text"
import Input from "app/components/Input"
import { AntDesign as Icon } from "@expo/vector-icons"
import { Avatar, Image, Spacings } from "react-native-ui-lib"
import info from "assets/icons/companyDetails/elements.png"
import { companyData } from "app/constants/companyData"
// import PrimaryButton from "app/components/PrimaryButton"
import { debounce } from "app/utils/generalUtils"
import Button from "app/components/Button"

type CompanyDetailsScreenProps = {
  navigation: StackScreenProps<OnboardingStackParams, AppRoutes.CompanyDetails>
}

export const CompanyDetailsScreen: React.FC<CompanyDetailsScreenProps> = ({ navigation }) => {
  const { colors } = useTheme()
  const [page, setPage] = useState<number>(0)
  const [companyName, setCompanyName] = useState<string>("")
  const [selectedCompany, setSelectedComapny] = useState<string>("")
  const [employeeId, setEmployeeId] = useState<string>("")
  const [filteredCompanies, setFilteredCompanies] = useState<Array<any>>(companyData)
  const [errorMessage, setErrorMessage] = useState<string>("")

  const handleLeftIconPressed = () => {
    // navigate to prev screen
  }

  const handleRightIconPressed = () => {
    // handle right icon pressed
  }

  const filterCompanyList = (text: string) => {
    if (!text) {
      setFilteredCompanies(companyData)
      setErrorMessage("")
      return
    }
    const newCompanyList = filteredCompanies?.filter((singleCompanies) => {
      return singleCompanies?.title?.toLowerCase()?.includes(text?.toLowerCase())
    })
    if (!newCompanyList.length) {
      setErrorMessage(
        "We couldn't find this company name. Please try again or consider joining the waitlist",
      )
    }
    setFilteredCompanies(newCompanyList)
  }

  const debouncedSearch = debounce(filterCompanyList, 1000)

  useEffect(() => {
    debouncedSearch(companyName)
  }, [companyName])

  const renderCorrectScreen = () => {
    switch (page) {
      case 0:
        return renderCompanyList()
      case 1:
        return renderEmployeeIdPage()
      default:
        return null
    }
  }

  const renderCompanyList = () => {
    return (
      <View
        style={{
          padding: 20,
          backgroundColor: colors.white,
          borderRadius: 20,
          flex: 1,
        }}
      >
        <View>
          <Text.Body
            size="md"
            style={{
              color: "black",
              fontFamily: "Inter-Medium",
            }}
          >
            Find your company name
          </Text.Body>
        </View>
        <View
          style={{
            marginVertical: 8,
          }}
        >
          <Input
            leftIcon={<Icon name="search1" color={"black"} size={18} />}
            value={companyName}
            onChangeText={(text) => {
              setCompanyName(text)
            }}
            placeholder="Search Company"
            placeholderTextColor={"rgba(152, 162, 179, 1)"}
            errorMessage={errorMessage}
          />
        </View>
        {!errorMessage && (
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              columnGap: 8,
              paddingHorizontal: 12,
              paddingVertical: 8,
              backgroundColor: "rgba(239, 248, 255, 1)",
              borderRadius: 12,
            }}
          >
            <Image source={info} style={{ height: 12, width: 12 }} />
            <Text.Caption
              style={{
                color: "rgba(23, 92, 211, 1)",
              }}
            >
              We will confirm your details according to the records of this company.
            </Text.Caption>
          </View>
        )}
        {errorMessage && (
          <View
            style={{
              position: "absolute",
              bottom: 20,
              left: "7%",
              width: "100%",
            }}
          >
            <Button.Primary
              label={"Join the waitlist"}
              onPress={() => {
                // TODO:- do something
              }}
              disabled={false}
            />
          </View>
        )}
        {renderList()}
      </View>
    )
  }

  const renderList = () => {
    // return a list of companies according to the searched query

    const renderItem = (item, index) => {
      const singleItem = item?.item
      return (
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => {
            setSelectedComapny(singleItem?.title)
            setPage(1)
          }}
        >
          <View
            key={singleItem?.id}
            style={{
              flexDirection: "row",
              alignItems: "center",
              columnGap: 16,
              paddingVertical: 16,
            }}
          >
            <Avatar
              backgroundColor="#F9FAFB"
              labelColor="#101828"
              label={singleItem?.avatarValue}
            />
            <Text.Body
              size="sm"
              style={{
                color: "rgba(16, 24, 40, 1)",
                fontFamily: "Inter-Medium",
              }}
            >
              {singleItem?.title}
            </Text.Body>
          </View>

          {index !== filteredCompanies.length - 1 && (
            <View
              style={{
                width: "100%",
                borderBottomWidth: 1,
                borderColor: "rgba(234, 236, 240, 1)",
              }}
            />
          )}
        </TouchableOpacity>
      )
    }

    return (
      <View>
        <FlatList data={filteredCompanies} renderItem={renderItem} />
      </View>
    )
  }

  const renderEmployeeIdPage = () => {
    return (
      <View
        style={{
          flexDirection: "column",
          justifyContent: "space-between",
          alignContent: "space-between",
          flex: 1,
        }}
      >
        <View
          style={{
            padding: 20,
            marginTop: 20,
            backgroundColor: colors.white,
            borderRadius: 20,
          }}
        >
          <View>
            <Text.Body
              size="md"
              style={{
                color: "black",
                fontFamily: "Inter-Medium",
              }}
            >
              Employee ID
            </Text.Body>
          </View>
          <View
            style={{
              marginVertical: 8,
            }}
          >
            <Input
              value={employeeId}
              onChangeText={(text) => setEmployeeId(text)}
              placeholder="Eg. UOUI5698"
              placeholderTextColor={"rgba(152, 162, 179, 1)"}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              columnGap: 8,
              paddingHorizontal: 12,
              paddingVertical: 8,
              backgroundColor: "rgba(239, 248, 255, 1)",
              borderRadius: 12,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                columnGap: 8,
              }}
            >
              <Image source={info} style={{ height: 12, width: 12 }} />
              <Text.Caption
                style={{
                  color: "rgba(23, 92, 211, 1)",
                }}
              >
                What is my employee ID?
              </Text.Caption>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                columnGap: 8,
              }}
            >
              <Text.Caption
                style={{
                  color: "rgba(23, 92, 211, 1)",
                  fontFamily: "Inter-Medium",
                }}
              >
                View
              </Text.Caption>
              <Icon name="right" size={12} color={"rgba(23, 92, 211, 1)"} />
            </View>
          </View>
        </View>
        <View
          style={{
            paddingBottom: 20,
          }}
        >
          <View>
            <Text.Caption
              style={{
                color: "rgba(102, 112, 133, 1)",
                fontFamily: "Inter-Regular",
                textAlign: "center",
                paddingBottom: 12,
              }}
            >
              By continuing, you agree to our{" "}
              <Text.Caption
                style={{
                  color: colors.primaryColor,
                  fontFamily: "Inter-Medium",
                }}
              >
                Employer Consent
              </Text.Caption>
            </Text.Caption>
          </View>
          <View style={{ marginHorizontal: Spacings.s5, marginBottom: Spacings.s2 }}>
            <Button.Primary
              label="Continue"
              onPress={() => {
                navigation.push(AppRoutes.OnboardSuccess, {
                  heading: "Welcome to Ember",
                  subHeading:
                    "Your identity has been successfully verified. Thank you for providing your details.",
                  ctaLabel: "Go to Dashboard",
                  navigateTo: AppRoutes.MainAppStack,
                })
              }}
              disabled={!employeeId}
            />
          </View>
        </View>
      </View>
    )
  }

  return (
    <KeyboardAvoidingView
      style={{
        height: "100%",
        backgroundColor: colors.offWhite,
      }}
      behavior="padding"
    >
      {/* <EmberHeader
        title={"Company Details"}
        showLeftIcon
        showRightIcon
        onPressLeftIcon={handleLeftIconPressed}
        onPressRightIcon={handleRightIconPressed}
      /> */}
      {renderCorrectScreen()}
      {/* <Button title="Next" onPress={() => navigation.navigate(AppRoutes.OnboardSuccess)} /> */}
    </KeyboardAvoidingView>
  )
}
