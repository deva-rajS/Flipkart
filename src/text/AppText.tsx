import React from 'react';
import {Text, TextProps} from 'react-native';
interface AppTextProps extends TextProps {
  children: React.ReactNode;
}
const AppText: React.FC<AppTextProps> = props => {
  const {style, children, ...rest} = props;
  return (
    <Text {...rest} style={[style, {fontFamily: 'Poppins-Medium'}]}>
      {children}
    </Text>
  );
};

export default AppText;
