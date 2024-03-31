import {
  View,
  Radio,
  RadioGroup,
  RadioIndicator,
  RadioIcon,
  CircleIcon,
  Box,
  Text,
} from "@gluestack-ui/themed"
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
      <RadioGroup onChange={onChange} $focus-bgColor="green">
        <Box>
          <Radio value={value} size={size}>
            <RadioIndicator mr="$2">
              <RadioIcon as={CircleIcon} />
            </RadioIndicator>
            <Text fontFamily="Inter-Medium" fontSize={14}>{label}</Text>
            {subLabel && <Text fontFamily="Inter-Regular" fontSize={12}>{' '}({subLabel})</Text>}
          </Radio>
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
