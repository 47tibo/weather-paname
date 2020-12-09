import React from 'react';
import {StyleSheet, View} from 'react-native';
import {TextBold} from '../../StyledText';
import Colors from '../../../constants/Colors';

export const CityText: React.FC<any> = (props: any) => {
  return (
    <View style={[props.style, {alignItems: 'center'}]}>
      <TextBold style={styles.text}>Paris, France</TextBold>
    </View>
    );
}

const styles = StyleSheet.create({
  text: {
    marginTop: 30,
    fontSize: 30,
    color: Colors.white
  },
});