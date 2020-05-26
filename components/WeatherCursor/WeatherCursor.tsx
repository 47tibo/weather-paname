import * as React from 'react';
import { Text, View } from 'react-native';
import { responsiveWidth } from 'react-native-responsive-dimensions';
import { WeatherCursorProps } from './WeatherCursor.models';
import { temperature, windDirection, windSpeed } from '../../utils/weather.utils';

const containerWidth = responsiveWidth(33);

export const WeatherCursor: React.FC<WeatherCursorProps> = ({weather}) => {
  if (weather) {
    return (
      <View style={styles.cursor}>
        <Text>{temperature(weather.temp)} &deg;</Text>
        <View>
          <Text>{windSpeed(weather.wind_speed)}</Text>
          <Text>{windDirection(weather.wind_deg)}</Text>
        </View>
      </View>
    );
  } else {
    return null;
  }
};

const styles = {
  cursor: {
    height: 200,
    width: containerWidth
  }
};

