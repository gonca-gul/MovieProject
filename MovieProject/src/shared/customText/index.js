import * as React from 'react';
import {Text} from 'react-native';
import customTextStyle from './customTextStyle';


function CustomText(props) {
  const {children, onPress = null} = props || {};
 
  return (
    <Text
      style={[
        customTextStyle?.textStyle,
        props?.color && {color: props?.color},
      ]}
      onPress={onPress}
      {...props}>
      {children}
    </Text>
  );
}
export default CustomText;
