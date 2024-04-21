import React from "react"
import { View, Text } from "react-native"
import { Avatar, RadioButton, RadioGroup, TouchableOpacity } from "react-native-ui-lib"

const RadioButtonCard = (props) => {
  const { data, selected, setSelected } = props

  const handleValueChange = (value: string) => {
    setSelected(value)
  }

  return (
    <View style={{
      margin: 24,
    }}>
      <RadioGroup initialValue={selected} onValueChange={handleValueChange}>
        {data?.map((singleLanguage, index) => {
          return (
            <TouchableOpacity
              activeOpacity={.8}
              onPress={() => {
                setSelected(singleLanguage?.value)
              }}
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                borderWidth: 1,
                marginBottom: 16,
                padding: 16,
                borderRadius: 12,
                borderColor: singleLanguage?.value===selected ? '#533D95' : '#EAECF0',
                backgroundColor: singleLanguage?.value===selected ? '#D1C9E9' : '#FFFFFF',
              }}
              key={index}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Avatar
                  backgroundColor="#F9FAFB"
                  labelColor="#101828"
                  label={singleLanguage?.avatarValue}
                />
                <Text style={{
                  marginLeft: 14,
                  fontFamily: 'Inter-Medium',
                  fontSize: 14
                }}>{singleLanguage?.title}</Text>
              </View>
              <RadioButton value={singleLanguage?.value} color={'#6248AE'} />
            </TouchableOpacity>
          )
        })}
      </RadioGroup>
    </View>
  )
}

export default RadioButtonCard
