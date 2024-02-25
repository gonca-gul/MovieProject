import * as React from 'react';
import {Text} from 'react-native';
import customTextStyle from './customTextStyle';


function CustomText(props) {
  const {children} = props || {};
 
  return (
    <Text
      style={[
        customTextStyle?.textStyle,
        props?.color && {color: props?.color},
      ]}
      {...props}>
      {children}
    </Text>
  );
}
export default CustomText;
