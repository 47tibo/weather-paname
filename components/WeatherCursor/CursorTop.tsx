import { CursorTopProps } from './WeatherCursor.models';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { temperature, windDirection, windSpeed } from '../../utils/weather.utils';

export const CursorTop: React.FC<CursorTopProps> = (props) => {
  return (
    <View style={styles.container}>
      <View>
        <Text>{temperature(props.temp)} &deg;</Text>
      </View>
      <View>
        <Text>{windSpeed(props.wind_speed)}</Text>
        <Text>{windDirection(props.wind_deg)}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  temperature: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});


