import React, { useCallback, useEffect, useMemo, useRef, useState } from "react"
import Text from "../typography/Text"
import { Image, Modal, TouchableOpacity, View, useWindowDimensions } from "react-native"
import { Camera, useCameraDevice, useCameraPermission } from "react-native-vision-camera"
import { Feather } from "@expo/vector-icons"
import guideCircle from "assets/selfie/GuideCircle.png"
import cameraIcon from "assets/selfie/Camera.png"
import Button from "../Button"

const TakeAndConfirmSelfieModal = ({ isVisible, setIsVisible }) => {
  const device = useCameraDevice("front")
  const { hasPermission, requestPermission } = useCameraPermission()
  const { height, width } = useWindowDimensions()
  const camera = useRef<Camera>(null)
  const [photo, setPhoto] = useState<any>(null)

  const onCameraClickSelfie = async () => {
    const photo = await camera.current.takePhoto();
    setPhoto(photo)
  }

  useEffect(() => {
    if (!hasPermission) {
      requestPermission()
    }
  }, [hasPermission])
  return (
    <Modal
      animationType="slide"
      // transparent={true}
      visible={isVisible}
      onRequestClose={() => {
        // Alert.alert('Modal has been closed.');
        setIsVisible(!isVisible)
      }}
      style={{
        flex: 1,
        position: "relative",
        backgroundColor: "#f2f4f7",
      }}
    >
      {!photo ? (
        <>
          {device && (
            <Camera ref={camera} style={{ flex: 1 }} device={device} photo={true} isActive={true} />
          )}
          <View
            style={{
              position: "absolute",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                width: "90%",
                marginTop: 16,
                marginHorizontal: "5%",
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  setIsVisible(!isVisible)
                }}
                style={{
                  padding: 10,
                  borderWidth: 1,
                  borderRadius: 12,
                  borderColor: "#FFF",
                }}
              >
                <Feather name="chevron-left" color={"#FFF"} size={22} />
              </TouchableOpacity>
              <View>
                <Text.Body
                  style={{
                    color: "#fff",
                  }}
                >
                  Help
                </Text.Body>
              </View>
            </View>

            <View
              style={{
                marginLeft: (width - 264) / 2,
                marginTop: (height - 316) / 5,
              }}
            >
              <Image
                source={guideCircle}
                resizeMode="contain"
                style={{
                  height: 316,
                  width: 264,
                }}
              />
            </View>

            <View>
              <Text.Body
                size="sm"
                weight="medium"
                style={{
                  color: "#fff",
                  textAlign: "center",
                  marginTop: 50,
                }}
              >
                Position your face in the circle's center, then tap the button.
              </Text.Body>
            </View>

            <TouchableOpacity
              style={{
                marginLeft: (width - 100) / 2,
                marginTop: 50,
              }}
              onPress={onCameraClickSelfie}
            >
              <Image
                source={cameraIcon}
                resizeMode="contain"
                style={{
                  height: 100,
                  width: 100,
                }}
              />
            </TouchableOpacity>
          </View>
        </>
      ) : (
        <View
          style={{
            backgroundColor: "#f2f4f7",
            flex: 1,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              width: "90%",
              marginTop: 16,
              marginHorizontal: "5%",
            }}
          >
            <TouchableOpacity
              onPress={() => {
                setIsVisible(!isVisible)
              }}
              style={{
                padding: 10,
                borderWidth: 1,
                borderRadius: 12,
                borderColor: "rgba(208, 213, 221, 1)",
                backgroundColor: "#fff",
              }}
            >
              <Feather name="chevron-left" color={"black"} size={22} />
            </TouchableOpacity>
            <View>
              <Text.Body
                size="lg"
                weight="semi-bold"
                style={{
                  color: "black",
                  marginLeft: 16,
                  marginBottom: 4,
                }}
              >
                Personal Details
              </Text.Body>
            </View>
          </View>

          <View
            style={{
              marginTop: 50,
              marginLeft: (width - 246) / 2,
            }}
          >
            <Image
              source={{ uri: `file://${photo.path}` }}
              resizeMode="cover"
              style={{
                height: 302,
                width: 246,
                borderRadius: 20,
                borderWidth: 6,
                borderColor: "#FFF",
              }}
            />
          </View>

          <View
            style={{
              marginTop: 48,
            }}
          >
            <Text.Heading
              size="sm"
              weight="semi-bold"
              style={{
                color: "black",
                textAlign: "center",
              }}
            >
              Confirm Photo Quality
            </Text.Heading>
            <Text.Body
              size="sm"
              style={{
                color: "rgba(102, 112, 133, 1)",
                textAlign: "center",
                marginTop: 12,
              }}
            >
              Ensure your face is clearly visible and the image is in focus.
            </Text.Body>
          </View>

          <View style={{
            marginHorizontal: 24,
            marginTop: 30,
            rowGap: 20
          }}> 
            <Button.Primary label="Use this photo" onPress={() => {
              // TODO:- go to next screen
            }} />
            <Button.Outlined label="Capture another photo" onPress={() => {
              setPhoto(null);
            }} ></Button.Outlined>
          </View>
        </View>
      )}
    </Modal>
  )
}

export default TakeAndConfirmSelfieModal
