import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { responsiveWidth } from 'react-native-responsive-dimensions';
import { WeatherCursorProps } from './WeatherCursor.models';
import { temperature, windDirection, windSpeed } from '../../utils/weather.utils';

const cursorWidth = responsiveWidth(33);
const cursorHeight = responsiveWidth(66);

export const WeatherCursor: React.FC<WeatherCursorProps> = ({weather}) => {
  if (weather) {
    return (
      <View
        style={styles.container}
        pointerEvents={'box-none'}
      >
        <View
          style={styles.cursor}
          pointerEvents={'box-none'}
        >
          <View style={styles.temperature}
          >
            <Text>{temperature(weather.temp)} &deg;</Text>
          </View>
          <View>
            <Text>{windSpeed(weather.wind_speed)}</Text>
            <Text>{windDirection(weather.wind_deg)}</Text>
          </View>
        </View>
      </View>
    );
  } else {
    return null;
  }
};

const styles = {
  container: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  cursor: {
    height: cursorHeight,
    width: cursorWidth,
    backgroundColor: '#00ff1c'
  },
  temperature: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
} as any;

