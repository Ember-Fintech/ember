import {
  View,
  Box,
  Text,
} from "@gluestack-ui/themed"
import {RadioGroup, RadioButton} from 'react-native-ui-lib';
import React from "react";

interface IProps {
    label: string; 
    subLabel: string;
    description: string;
    JsxElement: () => React.JSX.Element;
    size: 'sm' | 'md' | 'lg';
    onChange: (e: any) => void;
    value: string;
}

const RadioButtonWithLabel = (props: IProps) => {
  const {label, subLabel, description, JsxElement, size, onChange, value} =props;
  return (
    <>
      <RadioGroup onValueChange={onChange} $focus-bgColor="green">
        <Box>
          <RadioButton 
            label={label}
          /> 
          <Text ml="$6" color="$textLight500" fontFamily="Inter-Regular" fontSize={12}>
            {description}
          </Text>
          <View ml="$6">
            <JsxElement />
          </View>
        </Box>
      </RadioGroup>
    </>
  )
}

export default RadioButtonWithLabel
