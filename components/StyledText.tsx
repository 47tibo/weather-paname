import * as React from 'react';
import { Text } from 'react-native';

export function TextRegular(props: any) {
  return <Text {...props} style={[props.style, { fontFamily: 'FontRegular' }]} />;
}

export function TextBold(props: any) {
  return <Text {...props} style={[props.style, { fontFamily: 'FontBold' }]} />;
}
