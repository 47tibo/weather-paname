import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import styled from 'styled-components/native';

export function HoursList(hours, hourWidth) {
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
    hours.map(hour =>
      <View
        style={styles.hour}
        key={(hour.dt || hour.segment).toString()}
      >
        <Title>{hour.hour}</Title>
      </View>
  ));
}

const Title = styled.Text`
  font-size: 20;
`;
