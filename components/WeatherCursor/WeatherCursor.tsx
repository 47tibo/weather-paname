import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { responsiveWidth } from 'react-native-responsive-dimensions';
import { WeatherCursorProps } from './WeatherCursor.models';
import { LinearGradient } from 'expo-linear-gradient';
import { CursorTop } from './CursorTop';
import { CursorBottom } from './CursorBottom';
import useDebounce from "../../utils/debounce.hook";

const cursorWidth = responsiveWidth(45);
const cursorHeight = responsiveWidth(63);

export const WeatherCursor: React.FC<WeatherCursorProps> = ({weather}) => {
  const debouncedWeather = useDebounce(weather);
  if (debouncedWeather) {
    return (
      <View
        style={styles.container}
        pointerEvents={'none'}
      >
        <LinearGradient
          colors={['transparent', 'rgba(0,0,0,.15)', 'transparent', 'transparent', 'rgba(0,0,0,.15)', 'transparent']}
          start={[0, 0.5]}
          end={[1, 0.5]}
          locations={[0, 0.12, 0.128, 0.872, 0.88, 1]}
          style={styles.cursorWrapper}
        >
          <LinearGradient
            start={[0.5, 0]}
            end={[0.5, 1]}
            colors={['rgba(81,144,236,0.23)', 'rgba(185,198,249,0.41)', 'rgba(194, 206, 252, .2)']}
            locations={[0, 0.61, 1]}
            style={styles.cursor}
          >
            <CursorTop
              cursorWidth={cursorWidth}
              temp={debouncedWeather.temp}
              wind_deg={debouncedWeather.wind_deg}
              wind_speed={debouncedWeather.wind_speed}
            />
            <CursorBottom/>
          </LinearGradient>
        </LinearGradient>
      </View>
    );
  } else {
    return null;
  }
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  cursorWrapper: {
    height: cursorHeight,
    width: cursorWidth,
    paddingLeft: 19,
    paddingRight: 19,
  },
  cursor: {
    flex: 1
  }
});

