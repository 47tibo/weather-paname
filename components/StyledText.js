import * as React from 'react';
import { Text } from 'react-native';

export function TextRegular(props) {
  return <Text {...props} style={[props.style, { fontFamily: 'NunitoSans' }]} />;
}

export function TextBold(props) {
  return <Text {...props} style={[props.style, { fontFamily: 'NunitoSansBold' }]} />;
}
