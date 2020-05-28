import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { HourWeather } from '../../api/weather/weather.models';

export function HoursList(hours: HourWeather[], hourWidth: number) {
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
        key={hour.isSegment ? hour.dt : hour.dt.toString()}
      >
        <Text>{hour.hour}</Text>
      </View>
  ));
}
