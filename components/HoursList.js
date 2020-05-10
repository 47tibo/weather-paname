import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import styled from 'styled-components/native';

const HOURS = [];
for (let i = 1; i < 25; i += 1) {
  HOURS.push({value: `${i}:00`});
}

export function HoursList(hourWidth) {
  const styles = StyleSheet.create({
    hour: {
      backgroundColor: '#7183ff',
      width: hourWidth,
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }
  });
  
  return (
    HOURS.map(hour =>
      <View
        style={styles.hour}
        key={hour.value}
      >
        <Title>{hour.value}</Title>
      </View>
  ));
}

const Title = styled.Text`
  font-size: 20;
`;
