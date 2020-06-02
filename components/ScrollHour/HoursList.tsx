import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { HourWeather } from '../../api/weather/weather.models';
import { TextRegular } from '../StyledText';

export function HoursList(hours: HourWeather[], hourWidth: number) {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#7183ff',
      width: hourWidth,
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    hour: {
      fontSize: 20
    }
  });

  return (
    hours.map(hour =>
      <View
        style={styles.container}
        key={hour.isSegment ? hour.dt : hour.dt.toString()}
      >
        <TextRegular style={styles.hour}>{hour.hour}</TextRegular>
      </View>
  ));
}
